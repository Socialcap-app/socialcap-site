<script>
    import Poster from '../components/Poster.svelte';
    import { isOnPhone } from '../components/stores';
</script>

<div class={(isOnPhone ? 'py-20 px-7' : ' p-20')}>
    <Poster
        blueTitle={'the socialcap privacy policies'}
        title={'Privacy Policies'}
        description={'Short description of privacy policies'}
        centered={true}
    />
    <p
        class={'text-18 font-normal leading-7 max-w-fit m-auto mt-5 z-10 text-gray-500 dark:text-gray-400 text-center px-9 max-w-screen-lg' + (isOnPhone ? '' : ' max-w-screen-lg px-9 max-w-screen-lg')}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        totam laboriosam necessitatibus eaque, in dolorum pariatur voluptatum
        expedita quam accusantium maxime unde recusandae exercitationem sit
        suscipit excepturi adipisci veritatis perspiciatis debitis minus. Quas
        hic quasi ratione magni sapiente animi voluptatum sint itaque obcaecati
        cum voluptatem ex, incidunt optio minus quos nulla eum at iure est quia
        repellat alias illum illo! Sit necessitatibus, minus repellat id beatae
        in autem voluptatum fugit quis dolores libero fugiat maiores tenetur
        accusantium perferendis nostrum quaerat adipisci illum quo quisquam odio
        omnis sunt eos? Nam ipsum dolores aliquid vero voluptates quisquam
        deserunt? Distinctio, officiis consectetur. Fugiat.
    </p>
    <p
        class={'text-18 font-normal leading-7 max-w-fit m-auto mt-5 z-10 text-gray-500 dark:text-gray-400 text-center px-9 max-w-screen-lg' + (isOnPhone ? '' : ' max-w-screen-lg px-9 max-w-screen-lg')}
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        totam laboriosam necessitatibus eaque, in dolorum pariatur voluptatum
        expedita quam accusantium maxime unde recusandae exercitationem sit
        suscipit excepturi adipisci veritatis perspiciatis debitis minus. Quas
        hic quasi ratione magni sapiente animi voluptatum sint itaque obcaecati
        cum voluptatem ex, incidunt optio minus quos nulla eum at iure est quia
        repellat alias illum illo! Sit necessitatibus, minus repellat id beatae
        in autem voluptatum fugit quis dolores libero fugiat maiores tenetur
        accusantium perferendis nostrum quaerat adipisci illum quo quisquam odio
        omnis sunt eos? Nam ipsum dolores aliquid vero voluptates quisquam
        deserunt? Distinctio, officiis consectetur. Fugiat.
    </p>
</div>

<style>
    .text-18 {
        font-size: 18px;
    }
</style>
