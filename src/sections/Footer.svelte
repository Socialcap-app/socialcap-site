<script>
    import {
        DiscordSolid,
        GithubSolid,
        PaperPlaneSolid,
        XSolid,
    } from 'flowbite-svelte-icons';
    import Logo from '../assets/Logo.svg';
    import { FooterCopyright } from 'flowbite-svelte';
    import { isOnPhone as isPhone } from '../components/stores';
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
        <XSolid color="#102353" />
        <GithubSolid color="#102353" />
        <PaperPlaneSolid color="#102353" />
        <DiscordSolid color="#102353" />
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
        <p>Support</p>
        <p>Privacy Policies</p>
        <p>Terms and Conditions</p>
    </div>
    <div class="m-auto my-10 mr-10" style="color: #102353;">
        <FooterCopyright href="/" by="SocialCap™" />
    </div>
</div>
