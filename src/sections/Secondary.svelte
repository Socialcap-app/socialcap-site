<script>
    import Poster from '../components/Poster.svelte';
    import Green from '../components/Green.svg';
    import Pink from '../components/Pink.svg';
    import Yellow from '../components/Yellow.svg';

    export let isPhone;
    export let secondaryCards;
</script>

<div class="my-20 m-auto">
    <Poster
        blueTitle={'Transparency is key'}
        title={'Build Social Consensus'}
        description={'Ensure that every decision reflects the collective will with multiple voting strategies. Safeguard fairness and transparency through features like random elector selection, anonymous voting, and self-auditing.'}
    />
    <div class="text-center">
        {#each secondaryCards as card}
            <div
                class={'rounded-lg flex items-center justify-start flex-wrap m-7 m-auto' +
                    (isPhone ? 'text-center' : ' w-3/5') +
                    (secondaryCards.indexOf(card) % 2 !== 0
                        ? ' flex-row-reverse'
                        : ' flex-row')}
            >
                <img
                    alt="icon"
                    class={'mx-auto my-6 text-center h-28 w-28 ' +
                        (isPhone ? '' : '')}
                    src={card === secondaryCards[0]
                        ? Green
                        : card === secondaryCards[1]
                          ? Pink
                          : Yellow}
                />
                <div class={!isPhone ? 'w-3/5 mx-7 content' : 'mx-7'}>
                    <h1
                        class={'text-gray-900 dark:text-white font-semibold ' +
                            (isPhone ? 'text-center' : 'text-left')}
                    >
                        {card.title}
                    </h1>
                    <p
                        class={'text-xs text-gray-500 dark:text-gray-400 leading-tight max-w-fit font-medium leading-7 ' +
                            (isPhone ? ' text-center' : ' text-left')}
                    >
                        {card.description}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
    }
</style>
