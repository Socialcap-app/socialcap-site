<script>
    import Poster from '../components/Poster.svelte';
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
