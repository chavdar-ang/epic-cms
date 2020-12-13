import { readable, writable } from 'svelte/store';
import models from "./database/schema";

export const schema = readable(models);

export const list = writable([]);
export const inputs = writable([]);


export const errors = writable([]);