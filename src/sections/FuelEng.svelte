<script>
    import Cards from '../components/Cards.svelte';
    import Poster from '../components/Poster.svelte';

    import { isOnPhone as isPhone } from '../components/stores';

    let cards = [
        {
            title: 'Boost Participation',
            description:
                'Encourage active involvement from all community members, enhancing overall engagement through validated credentials.',
        },
        {
            title: 'Strengthen Ties',
            description:
                'Build stronger relationships and foster collaboration, underpinned by trust from rigorously validated credentials.',
        },
        {
            title: 'Expand Influence',
            description:
                'Leverage collective efforts and the authenticity of validated credentials to increase your community’s influence and reach.',
        },
    ];
</script>

<div class="relative flex overflow-hidden m-auto w-full">
    <div
        class={'relative flex flex-row align-center justify-around overflow-hidden m-auto max-w-screen-lg' +
            ($isPhone ? ' flex-wrap' : '')}
    >
        <div class={'' + ($isPhone ? 'w-full' : 'w-2/5')} style="z-index: 1;">
            <Poster
                blueTitle={'validate everything'}
                title={'Fuel Engagement. Foster Growth'}
                description={'Significantly enhance your social capital and reputation both within your community and beyond. By showcasing validated achievements and skills, members can extend their influence and network reach.'}
                bg_blue={true}
                centered={$isPhone}
            />
        </div>
        <div
            class={'' + ($isPhone ? 'w-full m-5 mt-20' : 'w-1/2')}
            style="z-index: 1;"
        >
            {#each cards as { title, description }}
                <Cards {title} {description} />
            {/each}
        </div>
    </div>
    <div
        class={'square ' + ($isPhone ? 'top-20 right-0 rotate-45' : 'one')}
    ></div>
    <div
        class={'square ' + ($isPhone ? 'top-60 right-80 rotate-45' : 'two ')}
    ></div>
    <div
        class={'square ' +
            ($isPhone ? 'bottom-60 right-0 rotate-45' : 'three ')}
    ></div>
</div>

<style>
    .square {
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: #d6e6ff61;
        border-radius: 15%;
        z-index: 0;
    }
    .one {
        right: 60%;
        transform: rotateZ(45deg);
    }
    .two {
        width: 100px;
        height: 100px;
        right: 85%;
        top: 70%;
        transform: rotateZ(65deg);
    }
    .three {
        right: 55%;
        top: 80%;
        transform: rotateZ(35deg);
    }
</style>
