<script>
    import Cards from '../components/Cards.svelte';
    import Poster from '../components/Poster.svelte';

    export let isPhone = true;

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

<div
    class={'flex flex-row align-center justify-around ' +
        (isPhone ? 'flex-wrap' : '')}
>
    <div class={'' + (isPhone ? 'w-full' : 'w-2/5')}>
        <Poster
            blueTitle={'validate everything'}
            title={'Fuel Engagement. Foster Growth'}
            description={'Significantly enhance your social capital and reputation both within your community and beyond. By showcasing validated achievements and skills, members can extend their influence and network reach.'}
            bg_blue={true}
            centered={isPhone}
        />
    </div>
    <div class={'' + (isPhone ? 'w-full m-5' : 'w-1/2')}>
        {#each cards as { title, description }}
            <Cards {title} {description} />
        {/each}
    </div>
</div>
