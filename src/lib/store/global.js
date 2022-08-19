import { writable as localStorage } from 'svelte-local-storage-store'
import { writable, readable } from 'svelte/store'

export const isLoggedIn = localStorage(true)
export const phoneNumbers = readable([ '05891010109', '05891011832' ])

