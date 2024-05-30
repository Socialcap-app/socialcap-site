<script>
    import { onMount } from 'svelte';
    import Hero from './sections/Hero.svelte';
    import Nav from './sections/Nav.svelte';
    import Power from './sections/Power.svelte';
    import BSocial from './sections/BuildSocial.svelte';
    import FEngagement from './sections/FuelEng.svelte';
    import {
        BadgeCheckOutline,
        FileShieldOutline,
        ObjectsColumnOutline,
    } from 'flowbite-svelte-icons';
    import AmplifyRep from './sections/AmplifyRep.svelte';
    import HowWorks from './sections/HowWorks.svelte';
    import CoreFea from './sections/CoreFea.svelte';

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

    const amplifyCards = [
        {
            title: 'Enhance Personal Reputation',
            description:
                ' Increase your visibility and credibility through verified accomplishments and skills.',
        },
        {
            title: 'Grow Your Network',
            description:
                'Connect with key stakeholders and peers across your local and global community.',
        },
        {
            title: 'Access New Opportunities',
            description:
                'Open up new avenues for collaboration and professional growth through an expanded network.',
        },
    ];

    const coreCards = [
        {
            title: 'Anonymous Electors',
            description:
                'Prevent biases and manipulation during the validation process by preserving the anonymity of electors and auditors.',
        },
        {
            title: 'Random Selection',
            description:
                'Reduce the likelihood of manipulation and ensure the integrity of the validation process by randomly selecting electors.',
        },
        {
            title: 'Secret Voting',
            description:
                'Ensure confidentiality and prevent coercion in the validation process through secret voting.',
        },
        {
            title: 'Multiple Strategies',
            description:
                'Tailor your decision-making processes with a variety of strategies to effectively meet specific community needs.',
        },
        {
            title: 'Self Auditing',
            description:
                'Promote continuous improvement and accountability with robust self-auditing mechanisms that automatically assign auditors every N claims',
        },
        {
            title: 'No-Code Customization',
            description:
                'Easily set your own claim types, credential prices, validation rules, and badges, adapting the platform to fit a wide range of use cases.',
        },
    ];

    onMount(() => {
        isPhone = window.innerWidth < 750;
    });
</script>

<div>
    <Nav />
    <Hero {isPhone} />
    <Power {isPhone} {primaryCards} />
    <BSocial {isPhone} {secondaryCards} />
    <div style="background-color: #1758FE;">
        <FEngagement {isPhone} />
    </div>
    <AmplifyRep {isPhone} {amplifyCards} />
    <HowWorks {isPhone} />
    <CoreFea {isPhone} {coreCards} />
</div>
