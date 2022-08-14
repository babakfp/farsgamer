import { readable, writable } from 'svelte/store'

export const isLoggedIn = writable(true)
export const phoneNumbers = readable([ '05891010109', '05891011832' ])
