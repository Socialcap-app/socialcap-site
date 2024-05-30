<script>
    import { onMount } from 'svelte';
    import Intro from './sections/Intro.svelte';
    import Nav from './sections/Nav.svelte';
    import Primary from './sections/Primary.svelte';
    import Secondary from './sections/Secondary.svelte';
    import {
        BadgeCheckOutline,
        FileShieldOutline,
        ObjectsColumnOutline,
    } from 'flowbite-svelte-icons';

    let isPhone = true;

    const primaryCards = [
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

    const secondaryCards = [
        {
            title: 'Diverse Voting Strategies',
            icon: 'g',
            description:
                'Tailor decision-making processes with multiple strategies to meet specific community needs.',
        },
        {
            title: 'Anonymous Voting',
            icon: 'p',
            description:
                'Ensure protected voter privacy for unbiased and genuine outcomes.',
        },
        {
            title: 'Self-Auditing Features',
            icon: 'y',
            description:
                'Promote continuous improvement and accountability with robust self-auditing mechanisms.',
        },
    ];

    onMount(() => {
        isPhone = window.innerWidth < 750;
    });
</script>

<div>
    <Nav />
    <Intro {isPhone} />
    <Primary {isPhone} {primaryCards} />
    <Secondary {isPhone} {secondaryCards} />
</div>
