<script>
    import Poster from '../components/Poster.svelte';
    import form0 from '../assets/Works/Form0.svg';
    import form1 from '../assets/Works/Form1.svg';
    import form2 from '../assets/Works/Form2.svg';
    import form3 from '../assets/Works/Form3.svg';
    import form4 from '../assets/Works/Form4.svg';

    import { isOnPhone as isPhone } from '../components/stores';
    import { onMount } from 'svelte';
  import { Video } from 'flowbite-svelte';

    const forms = [form0, form1, form2, form3, form4];

    let currentSlide = 0;
    const slideInterval = 2000; // 2 seconds

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % forms.length;
    };

    onMount(() => {
        const interval = setInterval(nextSlide, slideInterval);
        return () => clearInterval(interval); // Clean up interval on component destroy
    });
</script>

<div class="mb-20">
    <Poster
        blueTitle={'the socialcap process'}
        title={'How it works'}
        description={'Check out this video to experience the full process'}
        centered={true}
    />

    <Video src="/videos/HIW.mp4" controls trackSrc="HIW.mp4" />

</div>


<style>
    .slideshow {
        position: relative;
        width: 80%; /* Adjust as needed */
        margin: 0 auto;
        height: 600px;
    }

    .slide {
        position: absolute;
        width: 100%;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .slide.active {
        opacity: 1;
    }
</style>
