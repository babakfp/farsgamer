<script>
	// // resizing the elements based on the taken height by alert.
	// window.addEventListener('load', _=> {
	// 	const alert = document.querySelector('.tp-alert')
	// 	const header = document.querySelector('#header')
	// 	const sidebar = document.querySelector('#sidebar')
	// 	const main = document.querySelector('#main')

	// 	if (!alert || !header || !sidebar || !main) return

	// 	const alert__close = alert.querySelector('.tp-alert__action')
	// 	const alert_style_height = alert.clientHeight + 'px'
	// 	const main_style_paddingTop = getComputedStyle(main).paddingTop
	// 	const sidebar_style_top = getComputedStyle(sidebar).top
	// 	const sidebar_style_height = getComputedStyle(sidebar).height

	// 	header.style.top = alert_style_height
	// 	main.style.paddingTop = `calc(${main_style_paddingTop} + ${alert_style_height})`
	// 	sidebar.style.top = `calc(${sidebar_style_top} + ${alert_style_height})`
	// 	sidebar.style.height = `calc(${sidebar_style_height} - ${alert_style_height})`

	// 	alert__close.addEventListener('click', _=> {
	// 		header.removeAttribute('style')
	// 		sidebar.removeAttribute('style')
	// 		main.removeAttribute('style')
	// 	})
	// })
</script>