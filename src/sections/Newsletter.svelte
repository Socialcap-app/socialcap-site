<script>
    import { Button, Input, Label } from 'flowbite-svelte';
    import Poster from '../components/Poster.svelte';

    import { isOnPhone as isPhone } from '../components/stores';
</script>

<div class="pb-10">
    <div class={'' + ($isPhone ? 'w-3/5 m-auto' : 'w-full')}>
        <Poster
            blueTitle={''}
            title={'Join our Newsletter'}
            description={''}
            bg_blue={true}
            centered={true}
        />
    </div>
    <p class="text-white text-center font-normal w-full m-auto">
        Be the first to know about our latest updates
    </p>
    <div
        class={'m-auto my-5 flex flex-row items-center justify-between ' +
            ($isPhone ? 'mx-10' : 'w-2/5')}
    >
        <!-- <Input type="text" id="email" placeholder="Enter your email" required /> -->
        <input
            type="email"
            id="email"
            aria-describedby="email-for-subscribing"
            class="placeholder:text-white bg-transparent border border-white text-white text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your email"
        />
        <Button color="light" class="m-2 font-normal text-blue-700"
            >Subscribe</Button
        >
    </div>
</div>

<style>
    .subs {
        color: #1758fe;
    }
</style>
