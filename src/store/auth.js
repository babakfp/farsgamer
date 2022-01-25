import { writable } from 'svelte/store'
import { goto } from '$app/navigation'
import { onMount } from 'svelte'

export let isLoggedIn = writable(false)
export let isCartEmpty = writable(false)

export let login =_=> {
	localStorage.setItem('isLoggedIn', 'true')
	isLoggedIn.set(true)
	goto('/dashboard')
}

export let logout =_=> {
	onMount(_=> {
		localStorage.removeItem('isLoggedIn')
		isLoggedIn.set(false)
		goto('/')
	})
}
