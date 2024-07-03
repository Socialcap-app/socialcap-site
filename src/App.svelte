<script>
    import { onMount } from 'svelte';

    import Nav from './sections/Nav.svelte';
    import Hero from './sections/Hero.svelte';
    import Power from './sections/PowerUp.svelte';
    import BSocial from './sections/BuildSocial.svelte';
    import FEngagement from './sections/FuelEng.svelte';
    import AmplifyRep from './sections/AmplifyRep.svelte';
    import HowWorks from './sections/HowWorks.svelte';
    import CoreFea from './sections/CoreFea.svelte';
    import Sponsors from './sections/Sponsors.svelte';
    import Newsletter from './sections/Newsletter.svelte';
    import firstPower from './assets/Power/firstPower.svg';
    import secondPower from './assets/Power/secondPower.svg';
    import thirdPower from './assets/Power/thirdPower.svg';
    import Footer from './sections/Footer.svelte';

    import Support from './sections/Support.svelte';
    import PrivacyPolicies from './sections/PrivacyPolicies.svelte';
    import Terms from './sections/Terms.svelte';

    import { isOnPhone, showingSection } from './components/stores';
    import { Button } from 'flowbite-svelte';
    import { AngleUpOutline } from 'flowbite-svelte-icons';

    let section = 0;

    showingSection.subscribe((s) => {
        section = s;
    });

    const primaryCards = [
        {
            title: 'Streamlined Process',
            icon: firstPower,
            paragraph:
                'Simplified issuance of credentials, making it easier and faster for both admins and users.',
        },
        {
            title: 'Rigorous Validation',
            icon: secondPower,
            paragraph:
                'A meticulous community-based validation process that ensures credentials are reliable and trustworthy.',
        },
        {
            title: 'Enhanced Trust',
            icon: thirdPower,
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

    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    let goToTopShown = false;

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 800 ||
            document.documentElement.scrollTop > 800
        ) {
            goToTopShown = true;
        } else {
            goToTopShown = false;
        }
    }

    onMount(() => {
        isOnPhone.checkDimenssions();
    });
</script>

<div>
    <Nav />
    {#if section === 0}
        <Hero />
        <Power {primaryCards} />
        <BSocial {secondaryCards} />
        <div style="background-color: #1758FE;">
            <FEngagement />
        </div>
        <div class="max-w-screen-xl m-auto">
            <AmplifyRep {amplifyCards} />
            <HowWorks />
            <CoreFea {coreCards} />
        </div>
        <Sponsors />
        <div style="background-color: #1758FE;">
            <Newsletter />
        </div>
    {/if}
    {#if section === 1}
        <Support />
    {/if}
    {#if section === 2}
        <PrivacyPolicies />
    {/if}
    {#if section === 3}
        <Terms />
    {/if}
    <div
        class={'fixed z-10 duration-500 ' +
            (goToTopShown ? 'opacity-100 ' : 'opacity-0 ') +
            (isOnPhone ? 'bottom-10 right-10' : 'bottom-16 right-16')}
    >
        <Button
            on:click={() => topFunction()}
            color={'blue'}
            id="goToTop"
            class={'w-16 h-16 rounded-full text-center' +
                (goToTopShown ? '' : ' cursor-auto')}><AngleUpOutline /></Button
        >
    </div>
    <Footer />
</div>
