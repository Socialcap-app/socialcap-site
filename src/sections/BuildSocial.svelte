<script>
    import Poster from '../components/Poster.svelte';
    import Green from '../assets/Build/Green.svg';
    import Pink from '../assets/Build/Pink.svg';
    import Yellow from '../assets/Build/Yellow.svg';
    import { isOnPhone as isPhone } from '../components/stores';
    export let secondaryCards;
</script>

<div class="my-20 m-auto max-w-screen-xl">
    <Poster
        blueTitle={'Transparency is key'}
        title={'Build Social Consensus'}
        description={'Ensure that every decision reflects the collective will with multiple voting strategies. Safeguard fairness and transparency through features like random elector selection, anonymous voting, and self-auditing.'}
        bg_blue={false}
        centered={true}
        moreClasses={'max-w-screen-lg m-auto'}
    />
    <div class="text-center">
        {#each secondaryCards as card}
            <div
                class={'rounded-lg flex items-center justify-start flex-wrap m-7 m-auto' +
                    ($isPhone ? ' text-center flex-col' : ' w-3/5') +
                    (secondaryCards.indexOf(card) % 2 !== 0
                        ? ' flex-row-reverse'
                        : ' flex-row')}
            >
                <img
                    alt="icon"
                    class={'mx-auto my-6 text-center h-28 w-28 ' +
                        ($isPhone ? '' : '')}
                    src={card === secondaryCards[0]
                        ? Green
                        : card === secondaryCards[1]
                          ? Pink
                          : Yellow}
                />
                <div class={!$isPhone ? 'w-3/5 mx-7 flex flex-col ' : 'mx-7'}>
                    <h1
                        class={'text-blue dark:text-white font-semibold ' +
                            ($isPhone ? 'text-center' : 'text-left')}
                    >
                        {card.title}
                    </h1>
                    <p
                        class={'text-18 text-gray-500 max-w-fit font-medium leading-7' +
                            ($isPhone ? ' text-center' : ' text-left')}
                    >
                        {card.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .text-18 {
        font-size: 18px;
    }
    .text-blue {
        color: #102353;
    }
</style>
