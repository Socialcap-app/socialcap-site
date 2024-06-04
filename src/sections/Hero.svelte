<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { isOnPhone as isPhone } from '../components/stores';
</script>

<div class="relative overflow-hidden">
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
                class="z-10 font-semibold mb-2 text-6xl tracking-tight text-gray-900 dark:text-white text-center"
            >
                The Social Consensus Layer
            </h5>
            <p
                class="z-10 mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-tight text-center max-w-fit"
            >
                Empowering communities through trusted credentials and rigorous
                social consensus
            </p>
            <Button color={'blue'} class="z-10 w-fit m-auto"
                >Join communities</Button
            >
        </Card>
    </div>
    <div
        class={'square ' +
            ($isPhone ? 'top-0 right-4/5 rotate-35 scale-50' : 'one')}
    ></div>
    <div
        class={'square ' +
            ($isPhone ? 'top-40 right-3/4 rotate-35 scale-25' : 'two ')}
    ></div>
    <div
        class={'square ' + ($isPhone ? 'top-10 left-10 rotate-45' : 'four ')}
    ></div>
</div>

<style>
    .square {
        position: absolute;
        width: 200px;
        height: 200px;
        background-color: #d6e6ffdc;
        border-radius: 15%;
        z-index: 0;
    }
    .one {
        right: 60%;
        transform: rotateZ(45deg);
    }
    .two {
        width: 100px;
        height: 100px;
        right: 85%;
        top: 70%;
        transform: rotateZ(65deg);
    }
    .three {
        right: 55%;
        top: 80%;
        transform: rotateZ(35deg);
    }

    h5 {
        max-width: 500px;
    }
</style>
