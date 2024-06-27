<script>
    import { Button, Navbar } from 'flowbite-svelte';
    import Logo from '../assets/Logo.svg';
    import { isOnPhone as isPhone, showingSection } from '../components/stores';
</script>

<div
    class={'absolute w-screen flex flex-row items-center justify-between bg-transparent p-5' +
        ($isPhone ? '' : '')}
>
    <img
        class="z-10 cursor-pointer"
        on:click={() => showingSection.update(() => 0)}
        alt="logo"
        src={Logo}
    />
    <Button
        on:click={() =>
            (window.location.href =
                'https://my-socialcap-dev.vercel.app/login/')}
        class={'px-5 text-lg font-normal z-10'}
        color="blue">Sign in</Button
    >
</div>
<!-- <Navbar class={'bg-transparent p-0 m-0' + ($isPhone ? ' p-2 mt-0' : ' pt-5')}>
    <img class="z-10" alt="logo" src={Logo} />
    <Button class={'px-5 text-sm font-normal z-10'} color="blue">Sign in</Button
    >
</Navbar> -->
