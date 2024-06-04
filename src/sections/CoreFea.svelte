<script>
    import Poster from '../components/Poster.svelte';
    import Cards from '../components/Cards.svelte';

    import { isOnPhone as isPhone } from '../components/stores';

    export let coreCards = [];
</script>

<div class="m-auto">
    <Poster
        blueTitle={'Features'}
        title={'Core Features'}
        description={''}
        bg_blue={false}
        centered={true}
    />
    <div
        class={'flex' +
            ($isPhone
                ? ' flex-wrap m-5 '
                : ' my-20 flex flex-col align-center justify-center h-full')}
    >
        <div
            class={'flex' +
                ($isPhone
                    ? ' flex-col'
                    : ' flex-row m-auto gap-5 mx-20 items-stretch')}
        >
            <div class={'w-2/5 ' + ($isPhone ? 'w-full' : '')}>
                <Cards
                    title={coreCards[0].title}
                    description={coreCards[0].description}
                    textColor={'#7B818E'}
                />
            </div>
            <div class={'flex w-3/5 ' + ($isPhone ? 'w-full' : '')}>
                <Cards
                    title={coreCards[1].title}
                    description={coreCards[1].description}
                    textColor={'#7B818E'}
                />
            </div>
        </div>
        <div
            class={'flex' +
                ($isPhone
                    ? ' flex-col'
                    : ' flex-row  m-auto mx-20 mb-20 items-stretch gap-5 h-96')}
        >
            <div
                class={'flex flex-col items-stretch h-full ' +
                    ($isPhone ? 'w-full' : 'w-1/2')}
            >
                <div class="flex-1 h-full">
                    <Cards
                        title={coreCards[2].title}
                        description={coreCards[2].description}
                        textColor={'#7B818E'}
                    />
                </div>
                <div class="flex h-full">
                    <Cards
                        title={coreCards[3].title}
                        description={coreCards[3].description}
                        textColor={'#7B818E'}
                    />
                </div>
            </div>
            <div
                class={'flex flex-col items-stretch h-full ' +
                    ($isPhone ? 'w-full' : 'w-1/2')}
            >
                <div class="flex-1">
                    <Cards
                        title={coreCards[4].title}
                        description={coreCards[4].description}
                        textColor={'#7B818E'}
                    />
                </div>
                <div class="flex h-full">
                    <Cards
                        title={coreCards[5].title}
                        description={coreCards[5].description}
                        textColor={'#7B818E'}
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
