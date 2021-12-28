// Toggling side menu in mobile screen
;(_ => {
	const berger = document.querySelector('#burger')
	const sidebar = document.querySelector('#sidebar')
	const sidebar__content = document.querySelector('#sidebar__content')
	if (berger && sidebar) {
		sidebar.addEventListener('click', e => {
			if (!sidebar__content.contains(e.target)) {
			}
		})
	}
})()

// ---

// ## Sliders

const sliderBaseConfig = {
	speed: 1000,
	loop: true,
	spaceBetween: 16,
	grabCursor: true,
}

const sliderAutoplayConfig = {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
}

const sliderPaginationConfig = {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
}

const sliderNavigationConfig = {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

// Basic image slider
;(_=> {
	window.addEventListener('load', _=> {
		const sliders = document.querySelectorAll('.basic-image-slider')
		if (!sliders) return

		sliders.forEach(slider => {
			new Swiper('.basic-image-slider', {
				...sliderBaseConfig,
				...sliderAutoplayConfig,
				...sliderPaginationConfig,
			})
		})
	})
})()

// Basic product slider
;(_=> {
	window.addEventListener('load', _=> {
		const sliders = document.querySelectorAll('.basic-product-slider')
		if (!sliders) return

		sliders.forEach(slider => {
			new Swiper('.basic-product-slider', {
				...sliderBaseConfig,
				...sliderAutoplayConfig,
				...sliderPaginationConfig,
				...sliderNavigationConfig,
				slidesPerView: 2,
				breakpoints: {
					768: { slidesPerView: 3 },
					1280: { slidesPerView: 5 },
					1536: { slidesPerView: 5 },
				},
			})
		})
	})
})()

// Giftcard Product slider
;(_=> {
	window.addEventListener('load', _=> {
		const sliders = document.querySelectorAll('.giftcard-product-slider')
		if (!sliders) return

		sliders.forEach(slider => {
			new Swiper('.giftcard-product-slider', {
				...sliderBaseConfig,
				...sliderAutoplayConfig,
				...sliderPaginationConfig,
				slidesPerView: 2,
				breakpoints: {
					487: { slidesPerView: 3 },
					640: { slidesPerView: 4 },
					894: { slidesPerView: 5 },
					1024: { slidesPerView: 6 },
					1536: { slidesPerView: 8 },
				},
			})
		})
	})
})()

// Review slider
;(_=> {
	window.addEventListener('load', _=> {
		const sliders = document.querySelectorAll('.review-slider')
		if (!sliders) return

		sliders.forEach(slider => {
			new Swiper('.review-slider', {
				...sliderBaseConfig,
				...sliderAutoplayConfig,
				...sliderPaginationConfig,
				breakpoints: {
					768: { slidesPerView: 2 },
					1280: { slidesPerView: 3 },
					1536: { slidesPerView: 4 },
				},
			})
		})
	})
})()

// Post slider
;(_=> {
	window.addEventListener('load', _=> {
		const sliders = document.querySelectorAll('.post-slider')
		if (!sliders) return

		sliders.forEach(slider => {
			new Swiper('.post-slider', {
				...sliderBaseConfig,
				...sliderAutoplayConfig,
				...sliderPaginationConfig,
				slidesPerView: 2,
				breakpoints: {
					// 768:  { slidesPerView: 2 },
					1280: { slidesPerView: 3 },
					1536: { slidesPerView: 4 },
				},
			})
		})
	})
})()

// Stop slider autoplay if:
// - slides < 2
// - slides < 2
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

// It's not possible to stlye the select field <select>. This functions will create a custom select box with basic tags (like div ul li) to make it possible to style it.
;(_ => {
	const fields = document.querySelectorAll('.select-field')

	if (!fields) return

	fields.forEach(field => {
		const title = field.querySelector('.select-box__title')
		title.remove() // We are going to move it into another element

		const icon = field.querySelector('.select-field__icon')
		icon.remove() // We are going to move it into another element

		const select = field.querySelector('select') // The select tag <select>
		select.classList.add('hidden') // We don't need it visually

		const options = select.querySelectorAll('option')

		// Creating the elements to visually represent the select tag

		const select_box = document.createElement('div')
		select_box.classList.add('select-box')

		const select_box__head = document.createElement('div')
		select_box__head.classList.add('select-box__head')

		const select_box__head_wrapper = document.createElement('div')
		select_box__head_wrapper.classList.add('select-box__head-wrapper')

		const select_box__head_content = document.createElement('div')
		select_box__head_content.classList.add('select-box__head-content')

		const select_box__head_angle = document.createElement('i')
		select_box__head_angle.classList.add('icon-angle-down')

		const select_box__body = document.createElement('div')
		select_box__body.classList.add('select-box__body')

		const select_box__options = document.createElement('ul')
		select_box__options.classList.add('select-box__options')

		// Adding <select> options to custom select box as <li>'s
		options.forEach(option => {
			const select_box__option = document.createElement('li')
			select_box__option.classList.add('select-box__option')
			select_box__option.innerText = option.textContent
			select_box__option.setAttribute('value', option.getAttribute('value'))

			select_box__option.addEventListener('click', _ => {
				select.value = select_box__option.getAttribute('value')
				title.innerText = select_box__option.textContent
			})

			// Appending to parent element
			select_box__options.appendChild(select_box__option)
		})

		// Appending
		select_box__head_content.appendChild(icon)
		select_box__head_content.appendChild(title)
		select_box__head_wrapper.appendChild(select_box__head_content)
		select_box__head_wrapper.appendChild(select_box__head_angle)
		select_box__head.appendChild(select_box__head_wrapper)
		select_box__body.appendChild(select_box__options)
		select_box.appendChild(select_box__head)
		select_box.appendChild(select_box__body)
		field.appendChild(select_box)

		// Select box on click
		select_box.addEventListener('click', _ =>
			select_box.classList.toggle('select-box--open')
		)

		// Closing the select box on click outside
		const closeSelectbox = event => {
			if (
				select_box.classList.contains('select-box--open') &&
				!select_box.contains(event.target)
			) {
				select_box.classList.remove('select-box--open')
			}
		}
		window.addEventListener('click', event => closeSelectbox(event))
		window.addEventListener('scroll', event => closeSelectbox(event))
	})
})()

// ---

/*
  a component for input type password
  toggle password visibility
*/

// (_=>{
//   const passwordFields = document.querySelectorAll(".password-field")
//   if (passwordFields) {
//     passwordFields.forEach(field => {
//       const input = field.querySelector("input")
//       const toggle = field.querySelector(".password-field__toggle")
//       toggle.classList.add("icon-eye-slash")

//       toggle.addEventListener("click", _=>{
//         input.setAttribute("type", input.getAttribute("type") === "password" ? "text" : "password")
//         if (toggle.classList.contains("icon-eye-slash")) {
//           toggle.classList.add("icon-eye")
//           toggle.classList.remove("icon-eye-slash")
//         } else {
//           toggle.classList.add("icon-eye-slash")
//           toggle.classList.remove("icon-eye")
//         }
//       })
//     })
//   }
// })();

// ---

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

// ---

// single product page - account category section handler.
;(_=> {
	const form = document.querySelector('#spp-purchase-form')
	if (!form) return
	const fieldsWrapper = document.querySelector(
		'#spp-purchase-form__field-wrapper'
	)
	const fields = document.querySelectorAll('.account-category-btn__field')
	fields.forEach(field => {
		field.addEventListener('click', _=> {
			fieldsWrapper.classList.remove('hidden')
		})
	})
})()

// ---
;(_=> {
	const posttypeContent = document.querySelector('.posttype-content')
	if (posttypeContent) easyTab(posttypeContent)
})()

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
;(_=> {
	const items = document.querySelectorAll('.order-details__item')
	if (!items) return
	items.forEach(item => {
		const toggle = item.querySelector('.order-details__item__toggle-content')
		const toggleIcon = item.querySelector('i')
		const extraContent = item.querySelector(
			'.order-details__item__extra-content'
		)
		toggleIcon.classList.add('leading-0')
		extraContent.classList.add('hidden')
		toggle.addEventListener('click', _=> {
			extraContent.classList.toggle('hidden')
			toggleIcon.classList.toggle('flip-rotate-y')
		})
	})
})()

// ---
;(_=> {
	const dashboardComments = document.querySelector('.dashboard-comments')
	if (dashboardComments) easyTab(dashboardComments)
})()

// ---

// dashboard rating
$('#dashboard-comments-rate-product').barrating('show', {
	theme: 'fontawesome-stars',
	reverse: true,
	fastClicks: true,
	hoverState: false,
})

// ---

// product grid box. // add (...) if title length is more that x.
;(_=> {
	const titleArray = document.querySelectorAll('.js-truncate-product-title')
	if (!titleArray) return
	const truncate = (source, size) => {
		return source.length > size
			? source.slice(0, size - 1) +
					"<span class='text-gray-400 font-light'>…</span>"
			: source
	}
	titleArray.forEach(title => {
		title.innerHTML = truncate(title.textContent, 45)
	})
})()

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

				// freeMode: true,
				// watchSlidesVisibility: true,
				// watchSlidesProgress: true,

				loopedSlides: 3,
				breakpoints: {
					576: {
						direction: 'vertical',
						// centeredSlides: true,
						// slidesPerView: 3,
						// slidesPerColumn: 1,

						// slidesPerGroup: 1,

						// slidesPerView: 3,
						// slidesPerColumn: 1,
						// slidesPerColumnFill: 'row',
						// noSwiping: false,
					},
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

// customer review
// all comments height get equal based on the higher height.
;(_=> {
	window.addEventListener('load', _=> {
		const swiperContainer = document.querySelector('.review-slider')
		if (!swiperContainer) return
		const commentArray = swiperContainer.querySelectorAll('.comment')
		let commentHigherHeight = 0
		commentArray.forEach(comment => {
			if (comment.clientHeight > commentHigherHeight)
				commentHigherHeight = comment.clientHeight
		})
		commentArray.forEach(
			comment => (comment.style.height = `${commentHigherHeight}px`)
		)
	})
})()

// ---
;(_=> {
	const field = document.querySelector('.purchase-form-quantity__field')
	const plus = document.querySelector('.purchase-form-quantity__plus')
	const negative = document.querySelector('.purchase-form-quantity__negative')

	if (field && plus && negative) {
		plus.addEventListener('click', _=> {
			field.value = parseInt(field.value) + 1
		})
		negative.addEventListener('click', _=> {
			if (parseInt(field.value) > 1) {
				field.value = parseInt(field.value) - 1
			}
		})
	}
})()

// whyus video player
;(_=> {
	new Plyr('#whyus')
})()

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
