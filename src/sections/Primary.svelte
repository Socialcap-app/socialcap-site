<script>
    import { Card, Button } from 'flowbite-svelte';
    import {
        ArrowRightOutline,
        BadgeCheckOutline,
        FileShieldOutline,
        ObjectsColumnOutline,
    } from 'flowbite-svelte-icons';
    import { onMount } from 'svelte';
    import Poster from '../components/Poster.svelte';

    export let isPhone;

    const cards = [
        {
            title: 'Streamlined Process',
            icon: ObjectsColumnOutline,
            paragraph:
                'Simplified issuance of credentials, making it easier and faster for both admins and users.',
        },
        {
            title: 'Rigorous Validation',
            icon: FileShieldOutline,
            paragraph:
                'A meticulous community-based validation process that ensures credentials are reliable and trustworthy.',
        },
        {
            title: 'Enhanced Trust',
            icon: BadgeCheckOutline,
            paragraph:
                'Stronger community bonds through transparent and dependable credential verification.',
        },
    ];
</script>

<div class="flex flex-col items-center justify-center">
    <Poster
        blueTitle={'POWER TO THE PEOPLE'}
        title={'Power up your Community'}
        description={"Supercharge your community's potential by leveraging the collective wisdom and trust of its members. Enable seamless, efficient interactions that drive innovation and meaningful connections."}
    />
    <div class="text-center">
        {#each cards as card}
            <div
                class="shadow-md rounded-lg flex flex-row items-center justify-start flex-wrap bg-white m-7"
            >
                <div
                    class="shadow-2xl rounded-lg m-7"
                    style="background-color: #F1F6FF; padding: 10px;"
                >
                    <svelte:component this={card.icon} />
                </div>
                <div class={!isPhone ? 'w-3/5 mx-7 content' : 'mx-7 content'}>
                    <h1
                        class="text-gray-900 dark:text-white text-left font-semibold"
                    >
                        {card.title}
                    </h1>
                    <p
                        class="text-xs text-gray-500 dark:text-gray-400 leading-tight text-left max-w-fit"
                    >
                        {card.paragraph}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>

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
