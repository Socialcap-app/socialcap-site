<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { isOnPhone as isPhone } from '../components/stores';
    import { onMount } from 'svelte';
    import blue from '../assets/Hero/BlueHero.png';
    import pink from '../assets/Hero/PinkHero.png';
    import red from '../assets/Hero/RedHero.png';
    import green from '../assets/Hero/GreenHero.png';
    //import green from '../assets/Hero/greenPng.jpg';
    import bg from '../assets/Hero/BackgoundHero.svg';

    let smallWidth = true;
    onMount(() => {
        smallWidth = window.innerWidth < 1050;
    });
</script>

<div class={'all-hero' + ($isPhone ? '' : '')}>
    <img class="z-0" src={bg} alt="Background Hero" />
    <div
        style="z-index: 1;"
        class={'text-center pt-40 ' +
            ($isPhone ? 'mb-40' : 'text-center mb-20 pb-80 w-3/5')}
    >
        <Card
            shadow={false}
            class={$isPhone
                ? 'bg-transparent border-0 text-center m-auto'
                : 'bg-transparent border-0 m-auto mb-20 max-w-lg'}
        >
            <h5
                class={'col-blue z-10 font-semibold mb-2 tracking-tight text-gray-900 ' +
                    ($isPhone ? 'text-center text-6xl' : 'text-left text-8xl')}
            >
                The Social Consensus Layer
            </h5>
            <p
                class="text-2xl z-10 mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-38 text-left max-w-fit"
            >
                Empowering communities through trusted credentials and rigorous
                social consensus
            </p>
            <Button
                color={'blue'}
                class={'z-10  w-fit text-lg' + ($isPhone ? ' m-auto' : '')}
                >Join communities</Button
            >
        </Card>
        {#if window.innerWidth > 1050}
            <div class="green">
                <img src={green} alt="icon" />
            </div>
            <div class="blue">
                <img src={blue} alt="icon" />
            </div>
            <div class="red">
                <img src={red} alt="icon" />
            </div>
            <div class="pink">
                <img src={pink} alt="icon" />
            </div>
        {/if}
    </div>
</div>

<style>
    .all-hero-before {
        background-image: url('../assets/Hero/BackgoundHero.svg');
        background-size: contain; /* (cover) Ensures the image covers the entire div */
        background-repeat: no-repeat; /* Prevents the image from repeating */
        background-position: center; /* Centers the image */
        position: relative; /* Necessary if you have absolutely positioned children */
        width: 200vh;
    }
    .col-blue {
        color: #102353;
    }
    .leading-38 {
        line-height: 38px;
    }
    .all-hero {
        position: relative;
        height: 90vh;
        overflow: visible;
    }
    .all-hero img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
    }

    .green {
        position: absolute;
        top: 30%;
        right: 18%;
        width: 15%;
        animation: float 4.2s ease-in-out infinite;
    }
    .blue {
        position: absolute;
        top: 60%;
        right: 30%;
        width: 15%;
        animation: float 4s ease-in-out infinite;
    }
    .red {
        position: absolute;
        top: 50%;
        right: 5%;
        width: 15%;
        animation: float 3.7s ease-in-out infinite;
    }
    .pink {
        position: absolute;
        top: 90%;
        right: 15%;
        width: 15%;
        animation: float 4.3s ease-in-out infinite;
    }

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
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
