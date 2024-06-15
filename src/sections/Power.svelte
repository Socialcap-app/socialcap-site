<script>
    import Poster from '../components/Poster.svelte';
    import Elipses from '../assets/Power/Elipses.svg';
    import Rayo from '../assets/Power/Rayo.svg';
    import BlueAvatar from '../assets/Power/BlueAvatar.svg';
    import PinkAvatar from '../assets/Power/PinkAvatar.svg';
    import YellowAvatar from '../assets/Power/YellowAvatar.svg';
    import PurpleAvatar from '../assets/Power/PurpleAvatar.svg';
    import bg from '../assets/Power/BackgroundPower.svg';
    import { isOnPhone as isPhone } from '../components/stores';

    export let primaryCards;
</script>

<div
    class={'mt-10 ' +
        (window.innerWidth < 1100
            ? 'flex flex-col items-center justify-center'
            : window.innerWidth < 1500
              ? 'p-1 mx-0 m-auto flex flex-row flex-nowrap w-screen'
              : 'p-1 mx-0 m-auto flex flex-row flex-nowrap w-screen')}
>
    <div
        class={window.innerWidth < 1100
            ? ''
            : 'flex-1 ' + (window.innerWidth > 1500 ? 'ml-56' : 'ml-20 mt-20')}
    >
        <Poster
            blueTitle={'POWER TO THE PEOPLE'}
            title={'Power up your Community'}
            description={"Supercharge your community's potential by leveraging the collective wisdom and trust of its members. Enable seamless, efficient interactions that drive innovation and meaningful connections."}
            centered={window.innerWidth < 1100}
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
        <div class={'relative text-center max-w-screen-md z-10'}>
            {#each primaryCards as card}
                <div
                    class={'shadow-md rounded-lg flex flex-row items-center justify-around flex-nowrap bg-white m-7' +
                        ($isPhone ? ' flex-col gap-5' : '')}
                >
                    <img
                        class="rounded-lg m-5 mt-7 ml-9 w-16 h-16 m-auto text-center"
                        src={card.icon}
                        alt="icon"
                    />
                    <div class={$isPhone ? 'mx-7 content' : 'm-7'}>
                        <h1
                            class="text-[#102353] text-gray-900 dark:text-white text-left font-bold leading-7"
                        >
                            {card.title}
                        </h1>
                        <p
                            class="text-18 font-medium text-gray-500 dark:text-gray-400 leading-7 text-left max-w-fit"
                        >
                            {card.paragraph}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
    {#if window.innerWidth > 1100}
        <div class="bg-image flex-1">
            <img src={bg} alt="background" />
        </div>
    {/if}
</div>

<style>
    /* .bg-image {
        overflow: hidden;
    }
    .bg-image img {
        position: absolute;
        z-index: 100;
        left: 45%;
        top: 105%;
        transform: scale(1);
    } */
    .bg-image {
        width: 100%;
        max-width: 500vh;
        padding-top: 160px;
    }

    .bg-image img {
        width: 100%;
    }
    @media screen and (max-width: 750px) {
        .content {
            margin-bottom: 30px;
        }
    }
</style>
