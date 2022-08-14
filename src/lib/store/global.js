import { writable as writableLocalStorage } from 'svelte-local-storage-store'
import { readable } from 'svelte/store'

export const isLoggedIn = writableLocalStorage(true)
export const phoneNumbers = readable([ '05891010109', '05891011832' ])
