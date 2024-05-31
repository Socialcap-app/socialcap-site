<script>
    import { Card } from 'flowbite-svelte';

    export let title;
    export let description;
    /* export let isPhone; */
    export let textColor = '#1758FE';
</script>

<Card class={'my-3 min-w-32 max-w-none'}>
    <h5 style="color: #1758FE;" class="mb-2 font-bold tracking-tight leading-7">
        {title}
    </h5>
    <p style="color: {textColor};" class="font-normal leading-tight">
        {description}
    </p>
</Card>
