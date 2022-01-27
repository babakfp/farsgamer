import { writable } from 'svelte/store'
import { goto } from '$app/navigation'
import { onMount } from 'svelte'

export let isLoggedIn = writable(true)
export let isCartEmpty = writable(false)
