<script>
    import Poster from '../components/Poster.svelte';
    import sponsor1 from '../assets/Sponsors/TriangleSponsor.svg';
    import sponsor2 from '../assets/Sponsors/LabsSponsor.svg';
    import sponsor3 from '../assets/Sponsors/AeriusLabsSponsor.svg';
    import sponsor4 from '../assets/Sponsors/MinaSponsor.svg';
    import sponsor5 from '../assets/Sponsors/IgniteSponsor.svg';
    import sponsor6 from '../assets/Sponsors/ZkOkSponsor.svg';
    import sponsor7 from '../assets/Sponsors/ProtokitSponsor.svg';

    import { isOnPhone as isPhone } from '../components/stores';

    const sponsors = [
        sponsor1,
        sponsor2,
        sponsor3,
        sponsor4,
        sponsor5,
        sponsor6,
        sponsor7,
    ];
</script>

<Poster title={'Powered by'} centered={true} />
<div
    class={'flex flex-row flex-wrap align-center justify-center m-10 mb-20' +
        ($isPhone ? ' flex-col gap-10' : '')}
>
    {#each sponsors as sponsor}
        <img
            alt="icon"
            class={'mx-auto text-center ' +
                ($isPhone ? 'm-5 max-w-56 max-h-12' : '')}
            src={sponsor}
        />
    {/each}
</div>
