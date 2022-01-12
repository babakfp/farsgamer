import { writable } from 'svelte/store'

export let isLoggedIn = writable(false)
export let isCartEmpty = writable(false)
