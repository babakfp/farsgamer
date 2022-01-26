// Stop slider autoplay and hide pagination if (slides < 2)
;(_=> {
	window.addEventListener('load', _=> {
		const sliders = document.querySelectorAll('.swiper-container')
		if (sliders) {
			sliders.forEach(slider => {
				const pagination = slider.querySelector('.swiper-pagination')
				const paginationBullets = slider.querySelectorAll(
					'.swiper-pagination-bullet'
				)
				if (paginationBullets.length < 2 && slider?.swiper?.autoplay) {
					slider.swiper.autoplay.stop()
					pagination.classList.add('hidden')
				}
			})
		}
	})
})()

// ## END Sliders
/*

/*

// radio button handler.
;(_=> {
	const radioboxList = document.querySelectorAll('.radiobox')
	if (!radioboxList) return
	radioboxList.forEach(box => {
		const input = box.querySelector("input[type='radio']")
		input.addEventListener('click', _=> {
			radioboxList.forEach(_box => _box.classList.remove('radiobox--active'))
			if (input.checked) box.classList.add('radiobox--active')
		})
	})
})()
*/
// ---


// ---

// comments reply button and form handler.
;(_=> {
	const commentBoxArray = document.querySelectorAll('.comment--reply')
	if (!commentBoxArray) return
	commentBoxArray.forEach(commentBox => {
		const addReplyBtn = commentBox.querySelector(
			'.comment__content .comment__reply-btn'
		)
		const commentForm = commentBox.querySelector(
			'.comment__content .comment__form'
		)
		if (addReplyBtn && commentForm) {
			commentForm.classList.add('hidden')
			addReplyBtn.addEventListener('click', _=> {
				commentForm.classList.toggle('hidden')
			})
		}
	})
})()

// ---
// ;(_=> {
// 	const items = document.querySelectorAll('.order-details__item')
// 	if (!items) return
// 	items.forEach(item => {
// 		const toggle = item.querySelector('.order-details__item__toggle-content')
// 		const toggleIcon = item.querySelector('i')
// 		const extraContent = item.querySelector(
// 			'.order-details__item__extra-content'
// 		)
// 		toggleIcon.classList.add('leading-0')
// 		extraContent.classList.add('hidden')
// 		toggle.addEventListener('click', _=> {
// 			extraContent.classList.toggle('hidden')
// 			toggleIcon.classList.toggle('flip-rotate-y')
// 		})
// 	})
// })()


// dashboard rating


// ---

const swiperImageGallery = (
	big_thumb_container_class,
	small_thumbs_container_class
) => {
	if (
		!document.querySelector(big_thumb_container_class) &&
		!document.querySelector(small_thumbs_container_class)
	)
		return
	new Swiper(big_thumb_container_class, {
		slidesPerView: 1,
		spaceBetween: 0,
		loopedSlides: 3,
		thumbs: {
			swiper: new Swiper(small_thumbs_container_class, {
				spaceBetween: 16,
				slidesPerView: 3,
				direction: 'vertical',

				// freeMode: true,
				// watchSlidesVisibility: true,
				// watchSlidesProgress: true,
				},
			}),
		},
	})
}

window.addEventListener('load', _=> {
	swiperImageGallery(
		'.single-product-image-gallery .single-product-image-gallery__big-image',
		'.single-product-image-gallery .single-product-image-gallery__thumb-images'
	)
})

// ---

// TP Alert
// resizing the elements based on the taken height by alert.
;(_=> {
	window.addEventListener('load', _=> {
		const alert = document.querySelector('.tp-alert')
		const header = document.querySelector('#header')
		const sidebar = document.querySelector('#sidebar')
		const main = document.querySelector('#main')

		if (!alert || !header || !sidebar || !main) return

		const alert__close = alert.querySelector('.tp-alert__action')
		const alert_style_height = alert.clientHeight + 'px'
		const main_style_paddingTop = getComputedStyle(main).paddingTop
		const sidebar_style_top = getComputedStyle(sidebar).top
		const sidebar_style_height = getComputedStyle(sidebar).height

		header.style.top = alert_style_height
		main.style.paddingTop = `calc(${main_style_paddingTop} + ${alert_style_height})`
		sidebar.style.top = `calc(${sidebar_style_top} + ${alert_style_height})`
		sidebar.style.height = `calc(${sidebar_style_height} - ${alert_style_height})`

		alert__close.addEventListener('click', _=> {
			header.removeAttribute('style')
			sidebar.removeAttribute('style')
			main.removeAttribute('style')
		})
	})
})()

// ---

// Dashboard orders table
;(_=> {
	window.addEventListener('load', _=> {
		const headCodeCell = document.querySelector('.do__item-cell__code')
		const headDateCell = document.querySelector('.do__item-cell__date')
		const headPriceCell = document.querySelector('.do__item-cell__price')
		// const headStatusCell = document.querySelector('.do__item-cell__status')
		// const headDeliveredCell = document.querySelector('.do__item-cell__delivered')
		const headButtonsCell = document.querySelector('.do__item-cell__buttons')

		const itemCodeCells = document.querySelectorAll('.do__item-cell__code')
		const itemDateCells = document.querySelectorAll('.do__item-cell__date')
		const itemPriceCells = document.querySelectorAll('.do__item-cell__price')
		// const itemStatusCells = document.querySelectorAll('.do__item-cell__status');
		// const itemDeliveredCells = document.querySelectorAll('.do__item-cell__delivered');
		const itemButtonsCells = document.querySelectorAll(
			'.do__item-cell__buttons'
		)

		if (
			!headCodeCell ||
			!headDateCell ||
			!headPriceCell ||
			// !headStatusCell ||
			// !headDeliveredCell ||
			!headButtonsCell ||
			!itemCodeCells ||
			!itemDateCells ||
			!itemPriceCells ||
			// !itemStatusCells ||
			// !itemDeliveredCells ||
			!itemButtonsCells
		) {
			return
		}

		const findLargestIndexFromAnArray = array => {
			let largest = array[0]
			for (let i = 0; i <= largest; i++) {
				if (array[i] > largest) {
					largest = array[i]
				}
			}
			return largest
		}

		const getAndSetLargestWidth = (cells, headCell) => {
			let widths = []
			cells.forEach(cell => {
				widths.push(cell.offsetWidth)
			})
			largestWidth = findLargestIndexFromAnArray(widths)
			cells.forEach(cell => (cell.style.minWidth = largestWidth + 16 + 'px'))
			headCell.style.minWidth = largestWidth + 16 + 'px'
		}

		getAndSetLargestWidth(itemCodeCells, headCodeCell)
		getAndSetLargestWidth(itemDateCells, headDateCell)
		getAndSetLargestWidth(itemPriceCells, headPriceCell)
		// getAndSetLargestWidth(itemStatusCells, headStatusCell)
		// getAndSetLargestWidth(itemDeliveredCells, headDeliveredCell)
		getAndSetLargestWidth(itemButtonsCells, headButtonsCell)
	})
})()
