<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { isOnPhone as isPhone } from '../components/stores';
    import { onMount } from 'svelte';

    let smallWidth = true;
    onMount(() => {
        smallWidth = window.innerWidth < 1050;
    });
</script>

<div class={'relative' + ($isPhone ? ' overflow-hidden' : '')}>
    <div
        style="z-index: 1;"
        class={$isPhone
            ? 'text-center mb-40 mt-20'
            : 'text-center mb-40 mt-20 w-3/5'}
    >
        <Card
            shadow={false}
            class={$isPhone
                ? 'bg-transparent border-0 text-center m-auto'
                : 'bg-transparent border-0 m-auto mb-20'}
        >
            <h5
                class={'z-10 font-semibold mb-2 text-6xl tracking-tight text-gray-900 dark:text-white ' +
                    ($isPhone ? 'text-center' : 'text-left')}
            >
                The Social Consensus Layer
            </h5>
            <p
                class="z-10 mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-tight text-center max-w-fit"
            >
                Empowering communities through trusted credentials and rigorous
                social consensus
            </p>
            <Button
                color={'blue'}
                class={'z-10 w-fit' + ($isPhone ? ' m-auto' : '')}
                >Join communities</Button
            >
        </Card>
    </div>
    <div
        class={'square' +
            ($isPhone ? ' top-10 left-60 rotate-45 scale-2' : ' one')}
    ></div>
    <div
        class={'square' +
            ($isPhone ? ' top-10 right-60 rotate-35 scale-35' : ' two')}
    ></div>
    <div class={'square' + (smallWidth ? ' hidden' : ' three')}></div>
    <div
        class={'square' +
            (smallWidth ? ' bottom-60 scale-35 left-10 rotate-45' : ' four')}
    ></div>
    {#if $isPhone}
        <div></div>
    {/if}
</div>

<style>
    .square {
        position: absolute;
        width: 200px;
        height: 200px;
        background: rgb(217, 232, 255);
        background: linear-gradient(
            0deg,
            rgba(217, 232, 255, 1) 0%,
            rgba(242, 247, 255, 0.5) 100%
        );
        border-radius: 15%;
        z-index: 0;
    }
    .one {
        top: 60%;
        right: 10%;
        transform: rotateZ(45deg) scale(2.7);
    }
    .two {
        top: -60%;
        left: 5%;
        transform: rotateZ(25deg) scale(2);
    }
    .three {
        top: 10%;
        left: 30%;
        transform: rotateZ(-15deg) scale(0.7);
    }
    .four {
        bottom: -40%;
        left: 10%;
        transform: rotateZ(50deg) scale(0.7);
    }

    h5 {
        max-width: 500px;
    }
</style>
