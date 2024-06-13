<script>
    import { Card, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import { isOnPhone as isPhone } from '../components/stores';
    import { onMount } from 'svelte';
    import blue from '../assets/Hero/BlueHero.svg';
    import pink from '../assets/Hero/PinkHero.svg';
    import red from '../assets/Hero/RedHero.svg';
    import green from '../assets/Hero/GreenHero.svg';

    let smallWidth = true;
    onMount(() => {
        smallWidth = window.innerWidth < 1050;
    });
</script>

<div class={' all-hero relative' + ($isPhone ? ' overflow-hidden' : '')}>
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
                : 'bg-transparent border-0 m-auto mb-20 max-w-lg'}
        >
            <h5
                class={'text-[#102353] z-10 font-semibold mb-2 tracking-tight text-gray-900 ' +
                    ($isPhone ? 'text-center text-6xl' : 'text-left text-8xl')}
            >
                The Social Consensus Layer
            </h5>
            <p
                class="z-10 mt-5 mb-8 font-normal text-gray-500 dark:text-gray-400 leading-7 text-left max-w-fit"
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
    .all-hero {
        background-image: url('../assets/Hero/BackgoundHero.svg');
        background-size: cover; /* Adjust as needed */
        background-repeat: no-repeat; /* Adjust as needed */
        background-position: center; /* Adjust as needed */
        overflow: visible;
    }
    .green {
        position: absolute;
        top: 0;
        right: 10%;
    }
    .blue {
        position: absolute;
        top: 40%;
        right: 30%;
    }
    .red {
        position: absolute;
        top: 40%;
        right: 5%;
    }
    .pink {
        position: absolute;
        top: 80%;
        right: 15%;
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

    /* <div class="block lg:hidden">
			<ClaimsTableMobile data={
        ($claims.data && Array.isArray($claims.data)) ? $claims.data : []
      } />
		</div> */
</style>
