<script>
    import Poster from '../components/Poster.svelte';
    import Person from '../assets/Person.svg';
    import Comment from '../assets/Comment.svg';
    import Star from '../assets/Star.svg';
    import { isOnPhone as isPhone } from '../components/stores';
    export let amplifyCards = [];
</script>

<div class="my-20 m-auto">
    <Poster
        blueTitle={'Grow your community'}
        title={'Amplify reputation. Expand network'}
        description={'Significantly enhance your social capital and reputation both within your community and beyond. By showcasing validated achievements and skills, members can extend their influence and network reach.'}
        bg_blue={false}
        centered={true}
    />
    <div
        class={'flex flex-row align-center justify-center ' +
            ($isPhone ? 'flex-wrap' : '')}
    >
        {#each amplifyCards as card}
            <div
                class={'rounded-lg flex items-center justify-center flex-wrap m-5 m-auto flex-col ' +
                    ($isPhone ? 'text-center' : ' w-3/5')}
            >
                <img
                    alt="icon"
                    class={'mx-auto my-6 text-center h-28 w-28 ' +
                        ($isPhone ? '' : '')}
                    src={card === amplifyCards[0]
                        ? Person
                        : card === amplifyCards[1]
                          ? Comment
                          : Star}
                />
                <div
                    class={!$isPhone ? 'max-w-screen-sm mx-7 content' : 'mx-7'}
                >
                    <h1
                        class={'text-blue text-gray-900 text-18 leading-7 font-bold text-center mb-2'}
                    >
                        {card.title}
                    </h1>
                    <p
                        class={'text-18 text-gray-500 max-w-fit font-medium leading-7 text-center'}
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
        justify-content: center;
        align-items: center;
    }
    .text-18 {
        font-size: 18px;
    }
    .text-blue {
        color: #102353;
    }
</style>
