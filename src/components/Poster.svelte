<script>
    import { Card } from 'flowbite-svelte';

    export let blueTitle;
    export let title;
    export let description;
</script>

<p class="pow text-bold text-center font-semibold">{blueTitle.toUpperCase()}</p>
<Card shadow={false} class={'bg-transparent border-0 my_card m-auto max-w-4xl'}>
    <h5
        class="font-semibold mb-2 text-4xl tracking-tight text-gray-900 dark:text-white text-center"
    >
        {title}
    </h5>
    <p
        class="mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-tight text-center max-w-fit px-9"
    >
        {description}
    </p>
</Card>

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
