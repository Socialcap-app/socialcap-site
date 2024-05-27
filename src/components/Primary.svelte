<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div>
    <p class="pow text-bold">POWER TO THE PEOPLE</p>
    <Card shadow={false} class={'bg-transparent border-0 max-w-sm my_card'}>
        <h5
            class="mb-2 text-4xl tracking-tight text-gray-900 dark:text-white text-center"
        >
            Power up your Community
        </h5>
        <p
            class="mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-tight text-center max-w-fit px-9"
        >
            Supercharge your community's potential by leveraging the collective
            wisdom and trust of its members. Enable seamless, efficient
            interactions that drive innovation and meaningful connections.
        </p>
    </Card>
</div>

<style>
    .pow {
        text-align: center;
        color: #95b2ff;
        font-weight: 600;
        line-height: 10px;
    }
</style>
