
import { writable } from 'svelte/store';

function createIsPhone() {
    const { subscribe, set, update } = writable(true);

    return {
        subscribe,
        checkDimenssions: () => update((n) => window.innerWidth < 750),
        reset: () => set(true)
    };
}

export const isOnPhone = createIsPhone();
