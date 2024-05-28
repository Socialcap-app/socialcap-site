<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    export let isPhone;
</script>

<div class="text-center mb-40 mt-20">
    <Card
        shadow={false}
        class={isPhone
            ? 'bg-transparent border-0 text-center m-auto'
            : 'bg-transparent border-0 mb-20 ml-20'}
    >
        <h5
            class="font-semibold mb-2 text-6xl tracking-tight text-gray-900 dark:text-white text-center"
        >
            The Social Consensus Layer
        </h5>
        <p
            class="mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-tight text-center max-w-fit"
        >
            Empowering communities through trusted credentials and rigorous
            social consensus
        </p>
        <Button color={'blue'} class="w-fit m-auto">Join communities</Button>
    </Card>
</div>

<style>
    h5 {
        max-width: 500px;
    }
</style>
