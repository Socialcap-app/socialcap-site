<script>
    import Poster from '../components/Poster.svelte';
    import Person from '../components/Person.svg';
    import Comment from '../components/Comment.svg';
    import Star from '../components/Star.svg';
    import Cards from '../components/Cards.svelte';

    export let isPhone;
    export let coreCards = [];
</script>

<div class="my-20 m-auto">
    <Poster
        blueTitle={'Features'}
        title={'Core Features'}
        description={''}
        bg_blue={false}
        centered={true}
    />
    <div
        class={'flex flex-col align-center justify-center ' +
            (isPhone ? 'flex-wrap' : '')}
    >
        <div class={'flex flex-row m-auto gap-5 mx-20'}>
            <div class="w-2/5 h-full">
                <Cards
                    {isPhone}
                    title={coreCards[0].title}
                    description={coreCards[0].description}
                />
            </div>
            <div class="w-3/5 h-full">
                <Cards
                    {isPhone}
                    title={coreCards[1].title}
                    description={coreCards[1].description}
                />
            </div>
        </div>
        <div class={'flex flex-row  m-auto gap-5 mx-20'}>
            <div class={'flex flex-col w-1/2'}>
                <Cards
                    {isPhone}
                    title={coreCards[2].title}
                    description={coreCards[2].description}
                />
                <Cards
                    {isPhone}
                    title={coreCards[3].title}
                    description={coreCards[3].description}
                />
            </div>
            <div class={'flex flex-col w-1/2'}>
                <div class="2/5">
                    <Cards
                        {isPhone}
                        title={coreCards[4].title}
                        description={coreCards[4].description}
                    />
                </div>
                <div class="3/5">
                    <Cards
                        {isPhone}
                        title={coreCards[5].title}
                        description={coreCards[5].description}
                    />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
