<script>
    import Poster from '../components/Poster.svelte';
    import Elipses from '../assets/Power/Elipses.svg';
    import Rayo from '../assets/Power/Rayo.svg';
    import BlueAvatar from '../assets/Power/BlueAvatar.svg';
    import PinkAvatar from '../assets/Power/PinkAvatar.svg';
    import YellowAvatar from '../assets/Power/YellowAvatar.svg';
    import PurpleAvatar from '../assets/Power/PurpleAvatar.svg';
    import { isOnPhone as isPhone } from '../components/stores';

    export let primaryCards;
</script>

<div
    class={$isPhone
        ? 'flex flex-col items-center justify-center'
        : 'w-3/5 p-1 mx-9'}
>
    <Poster
        blueTitle={'POWER TO THE PEOPLE'}
        title={'Power up your Community'}
        description={"Supercharge your community's potential by leveraging the collective wisdom and trust of its members. Enable seamless, efficient interactions that drive innovation and meaningful connections."}
        centered={$isPhone}
    />
    {#if $isPhone}
        <div class="relative h-96 w-full">
            <img
                class="absolute left-0 right-0 ml-auto mr-auto"
                alt="icon"
                src={Elipses}
            />
            <img
                class="absolute left-0 right-0 ml-auto mr-auto text-center m-auto mt-20 pt-10"
                alt="icon"
                src={Rayo}
            />
            <img
                class="absolute bottom-80 left-10"
                alt="icon"
                src={BlueAvatar}
            />
            <img
                class="absolute left-60 right-0 ml-auto mr-auto text-center m-auto mt-20 pt-10"
                alt="icon"
                src={PinkAvatar}
            />
            <img
                class="absolute top-40 left-0 right-20 ml-auto mr-auto text-center m-auto mt-20 pt-10"
                alt="icon"
                src={YellowAvatar}
            />
            <img
                class="absolute top-40 left-40 right-0 ml-auto mr-auto text-center m-auto mt-20 pt-10"
                alt="icon"
                src={PurpleAvatar}
            />
        </div>
    {/if}
    <div class="text-center">
        {#each primaryCards as card}
            <div
                class="shadow-md rounded-lg flex flex-row items-center justify-start flex-wrap bg-white m-7"
            >
                <div
                    class="shadow-2xl rounded-lg m-7"
                    style="background-color: #F1F6FF; padding: 10px;"
                >
                    <svelte:component this={card.icon} />
                </div>
                <div class={!$isPhone ? 'w-3/5 mx-7 content' : 'mx-7 content'}>
                    <h1
                        class="text-gray-900 dark:text-white text-left font-semibold"
                    >
                        {card.title}
                    </h1>
                    <p
                        class="text-xs text-gray-500 dark:text-gray-400 leading-tight text-left max-w-fit"
                    >
                        {card.paragraph}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .pow {
        color: #95b2ff;
        line-height: 10px;
    }
    @media screen and (max-width: 750px) {
        .content {
            margin-bottom: 30px;
        }
    }
</style>
