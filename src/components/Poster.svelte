<script>
    import { Card } from 'flowbite-svelte';

    export let blueTitle = '';
    export let title = 'NO TITLE ASIGNED';
    export let description = '';
    export let bg_blue = false;
    export let centered = false;
    export let moreClasses = '';

    let spreadTitle = title.split('.');
</script>

<div class={moreClasses + (centered ? ' text-center' : ' text-left')}>
    <Card shadow={false} class={'bg-transparent border-0 m-auto max-w-full'}>
        <p
            class={'font-semibold my-9 text-xs ' +
                (bg_blue ? 'text-white dark:text-white ' : 'pre-title ') +
                (centered ? 'text-center' : 'text-left')}
        >
            {blueTitle.toUpperCase()}
        </p>
        {#each spreadTitle as titles}
            <h5
                class={'font-semibold mb-2 text-4xl tracking-tight ' +
                    (bg_blue
                        ? 'text-white dark:text-white '
                        : 'text-gray-900 dark:text-white ')}
            >
                {titles +
                    (spreadTitle[0] === titles && spreadTitle.length - 1
                        ? '.'
                        : '')}
            </h5>
        {/each}
        <p
            class={'font-normal leading-tight max-w-fit m-auto mt-5 ' +
                (bg_blue
                    ? 'text-white dark:text-white '
                    : 'text-gray-500 dark:text-gray-400 ') +
                (centered ? 'text-center px-9' : 'text-left')}
        >
            {description}
        </p>
    </Card>
</div>

<style>
    .pre-title {
        color: #95b2ff;
        line-height: 10px;
    }
    @media screen and (max-width: 750px) {
        .content {
            margin-bottom: 30px;
        }
    }
</style>
