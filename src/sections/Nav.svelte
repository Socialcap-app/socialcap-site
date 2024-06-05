<script>
    import { Button, Navbar } from 'flowbite-svelte';

    import Logo from '../assets/Logo.svg';
</script>

<Navbar class={'bg-transparent p-2'}>
    <img class="z-10" alt="logo" src={Logo} />
    <Button class={'px-5 text-sm font-normal z-10'} color="blue">Sign in</Button
    >
</Navbar>
