// Stop slider autoplay and hide pagination if (slides < 2)
;(_=> {
	window.addEventListener('load', _=>
	{
		const sliders = document.querySelectorAll('.swiper-container')
		if (!sliders) return
		
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
	})
})()

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
