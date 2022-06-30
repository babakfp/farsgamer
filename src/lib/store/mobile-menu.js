import { writable } from 'svelte/store'
import { browser, mode } from '$app/env'

export let isOpen = writable(false)

export const toggle =_=> {
	if (browser && window.innerWidth <= 1024) {
		isOpen.update(isOpen => !isOpen)
	}
}

export const dashboardToggle =_=> {
	if (browser) {
		isOpen.update(isOpen => !isOpen)
	}
}

export const close =_=> {
	if (browser && window.innerWidth <= 1024) {
		isOpen.set(false)
	}
}

export const dashboardClose =_=> {
	if (browser) {
		isOpen.set(false)
	}
}


if (browser) {
	if (mode !== 'development') {
		window.addEventListener('resize', _=> {
			isOpen.set(false)
		})
	}
}