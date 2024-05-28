<script>
    import { onMount } from 'svelte';
    import Intro from './sections/Intro.svelte';
    import Nav from './sections/Nav.svelte';
    import Primary from './sections/Primary.svelte';
    import Secondary from './sections/Secondary.svelte';

    let isPhone = true;

    onMount(() => {
        isPhone = window.innerWidth < 750;
    });
</script>

<div>
    <Nav />
    <Intro {isPhone} />
    <Primary {isPhone} />
    <Secondary {isPhone} />
</div>
