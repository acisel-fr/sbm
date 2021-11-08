import { writable } from "svelte/store";
import type { Init } from "$lib/types/init";

export const meta = writable<Init>();
