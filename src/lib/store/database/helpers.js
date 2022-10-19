import { getRandomNumber } from '$utilities/helpers'

export const getRandomName =_=> {
	const names = [
		'محسن',
		'حسن',
		'حسین',
		'رضا',
		'علی',
		'محمد',
		'محمدرضا',
		'امیر',
		'امیرحسین',
	]
	return names[getRandomNumber(0, names.length - 1)]
}

export const getRandomLastname =_=> {
	const lastnames = [
		'محسنی',
		'حسنی',
		'حسینی',
		'رضایی',
		'علی‌زاده',
		'محمدی',
		'پورحسن',
		'امیر‌زاده',
		'امیرحسینی',
	]
	return lastnames[getRandomNumber(0, lastnames.length - 1)]
}

export const getRandomContent =_=> {
	const contents = [
		'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
		'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
		'برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
		'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.',
		'با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
		'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد',
		'زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
		'طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
		'اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
	]
	return contents[getRandomNumber(0, contents.length - 1)]
}

export const createPostComment = (id) => {
	const date = new Date()
	// Add 1 day to date
	const newDate = date.setDate(date.getDate() + id) // timestamp
	// Convert timestamp to date object and convert it to persian date
	const persianDate = new Date(newDate).toLocaleDateString('fa-IR')

	return {
		id,
		firstname: getRandomName(),
		lastname: getRandomLastname(),
		content: getRandomContent(),
		date: persianDate,
	}
}

export const createPostComments = (howMany = getRandomNumber(4, 8)) => {
	let comments = []
	for (let i = 1; i <= howMany; i++) {
		comments.push(createPostComment(i))
	}
	return comments.reverse()
}

export const createProductComments = () => {
	let comments = createPostComments()
	comments.filter((comment, i) => {
		if (i % 2) {
			comment.isBuyer = false
			comment.rating = 4
		} else {
			comment.isBuyer = true
			comment.rating = 5
		}
		return comment
	})
	return comments
}

export const createProductQuestionsAndAnswers = () => {
	let comments = createPostComments(10)
	comments.filter((comment, i) => {
		comment.answer = {
			content: getRandomContent(),
			date: '1401/03/24',
		}
		return comment
	})
	return comments
}
