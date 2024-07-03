<script>
    import {
        DiscordSolid,
        GithubSolid,
        PaperPlaneSolid,
        XSolid,
    } from 'flowbite-svelte-icons';
    import Logo from '../assets/Logo.svg';
    import { FooterCopyright } from 'flowbite-svelte';
    import { isOnPhone as isPhone, showingSection } from '../components/stores';
    import TelegramIcon from '../assets/Footer/TelegramIcon.svg';
    import GithubIcon from '../assets/Footer/GithubIcon.svg';
    import TwitterIcon from '../assets/Footer/TwitterIcon.svg';
    import DiscordIcon from '../assets/Footer/DiscordIcon.svg';
</script>

<div class="w-full flex flex-row justify-between items-center flex-wrap">
    <img
        class={'my-10 ' + ($isPhone ? 'm-auto w-2/5' : 'ml-10')}
        alt="logo"
        src={Logo}
    />
    <div
        class={'flex flex-row items-center justify-center gap-10 ' +
            ($isPhone ? 'm-auto w-4/5' : 'mr-10')}
    >
        <a href="https://x.com/socialcap_">
            <img class="scale-125" src={TwitterIcon} alt="twitter icon" />
        </a>
        <a href="https://github.com/Socialcap-app">
            <img class="scale-125" src={GithubIcon} alt="github icon" />
        </a>
        <a href="https://t.me/socialcap_ann">
            <img class="scale-125" src={TelegramIcon} alt="telegram icon" />
        </a>
        <a href="https://discord.gg/f2ywH6Bsu2">
            <img class="scale-125" src={DiscordIcon} alt="discord icon" />
        </a>
    </div>
</div>
<div class="w-full flex flex-row justify-between items-center flex-wrap">
    <div
        style="color: #102353;"
        class={'flex underline gap-5 ml-10 font-normal ' +
            ($isPhone
                ? 'flex-col justify-center items-center m-auto w-full mt-10'
                : 'flex-row')}
    >
        <p
            class="cursor-pointer"
            on:click={() => {
              (window.location.href = "https://docs.socialcap.dev/")
            }}
        >
            Support
        </p>
        <p
            class="cursor-pointer"
            on:click={() => {
                showingSection.update(() => 2);
            }}
        >
            Privacy Policies
        </p>
        <p
            class="cursor-pointer"
            on:click={() => {
                showingSection.update(() => 3);
            }}
        >
            Terms and Conditions
        </p>
    </div>
    <div class="m-auto my-10 mr-10" style="color: #102353;">
        <FooterCopyright href="/" by="SocialCap™" />
    </div>
</div>
