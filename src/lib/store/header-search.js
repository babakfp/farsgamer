import { writable } from 'svelte/store'
import { browser, dev } from '$app/env'

export let isOpen = writable(false)

export const toggle =_=> {
	if (browser && window.innerWidth <= 1024) {
		isOpen.update(isOpen => !isOpen)
	}
}

export const close =_=> {
	if (browser && window.innerWidth <= 1024) {
		isOpen.set(false)
	}
}

if (browser) {
	if (dev) {
		window.addEventListener('resize', _=> {
			isOpen.set(false)
		})
	}
}
