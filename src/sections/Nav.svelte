<script>
    import {
        Alert,
        Button,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
        Navbar,
    } from 'flowbite-svelte';

    import Logo from '../components/Logo.svg';
</script>

<Navbar class={'bg-transparent p-2 '}>
    <img alt="logo" src={Logo} />
    <Button class={'px-5 text-sm font-normal'} color="blue">Sign in</Button>
</Navbar>
