<script>
    import Poster from '../components/Poster.svelte';
    import FormPc from '../components/FormPc.svg';

    export let isPhone = true;
</script>

<div class="mb-20">
    <Poster
        blueTitle={'the socialcap process'}
        title={'How it works'}
        description={'Check out this video to experience the full process'}
        centered={true}
    />
    <img
        class={'m-auto mt-20 ' + (isPhone ? 'w-11/12' : 'w-4/5')}
        alt="Form demostrativo"
        src={FormPc}
    />
</div>
