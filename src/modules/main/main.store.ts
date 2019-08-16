import { writable, Writable } from "svelte/store";

export const page: Writable<number> = writable(1);

export const nextPage = () => page.update(p => p + 1);
export const prevPage = () => page.update(p => p - 1);
export const initialPage = () => page.set(1);
