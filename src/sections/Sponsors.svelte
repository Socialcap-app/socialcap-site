<script>
    import Poster from '../components/Poster.svelte';
    import sponsor1 from '../assets/TriangleSponsor.svg';
    import sponsor2 from '../assets/LabsSponsor.svg';
    import sponsor3 from '../assets/AeriusLabsSponsor.svg';
    import sponsor4 from '../assets/MinaSponsor.svg';
    import sponsor5 from '../assets/IgniteSponsor.svg';
    import sponsor6 from '../assets/ZkOkSponsor.svg';
    import sponsor7 from '../assets/ProtokitSponsor.svg';

    export let isPhone;

    const sponsors = [
        sponsor2,
        sponsor1,
        sponsor3,
        sponsor4,
        sponsor5,
        sponsor6,
        sponsor7,
    ];
</script>

<Poster title={'Powered by'} centered={true} />
<div class="flex flex-row flex-wrap align-center justify-center m-10 my-20">
    {#each sponsors as sponsor}
        <img
            alt="icon"
            class={'mx-auto my-3 text-center w-20 ' +
                (isPhone ? 'w-3/5 h-15 m-5' : '')}
            src={sponsor}
        />
    {/each}
</div>
