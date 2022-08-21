export const comment = {
	id: 1,
	firstname: 'محسن',
	lastname: 'حسین‌زاده',
	content: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
	date: '1401/03/24',
}

export const comments = [
	comment,
	{
		...comment,
		id: 2,
    firstname: 'رضا',
    lastname: 'پاک‌زاده',
    content: 'چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
    date: '1401/03/22',
  },
  {
		...comment,
    id: 3,
    firstname: 'محمد',
    lastname: 'حسینی',
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
    date: '1401/03/20',
  },
].reverse()

export const post = {
	id: 1,
	title: 'انتشار بازی باشکوه Elden Ring با آمار فروش باور نکردنی',
	featuredImage: '/img/posts/(1).jpg',
	releaseDate: '1401/01/01',
	modifyDate: '1401/02/07',
	comments,
}

export const posts = [
	post,
	{
		...post,
		id: 2,
		title: 'فروش بازی Horizon Zero Dawn از 20 میلیون نسخه عبور کرد!',
		featuredImage: '/img/posts/(2).jpg',
	},
	{
		...post,
		id: 3,
		title: 'منتظر یک NEED FOR SPEED جهان باز موبایلی باشید!',
		featuredImage: '/img/posts/(3).jpg',
	},
	{
		...post,
		id: 4,
		title: 'ساخت بازی GTA VI رسمی شد!',
		featuredImage: '/img/posts/(4).jpg',
	},
  {
		...post,
		id: 5,
		title: 'احتمال عرضه COD Warzone 2 در اواخر امسال',
		featuredImage: '/img/posts/(5).jpg',
	},
	{
		...post,
		id: 6,
		title: 'احتمال برگزاری رویداد جدید پلی‌استیشن در اواسط این ماه',
		featuredImage: '/img/posts/(6).jpg',
	},
	{
		...post,
		id: 7,
		title: 'قابلیت‌های شخصی‌سازی بی‌نظیر Saints Row',
		featuredImage: '/img/posts/(7).jpg',
	},
	{
		...post,
		id: 8,
		title: 'Star Wars یکی از پر‌فروش‌ترین بازی‌های امسال',
		featuredImage: '/img/posts/(8).jpg',
	},
  {
		...post,
		id: 9,
		title: 'تاریخ احتمالی عرضه God of War Ragnarok',
		featuredImage: '/img/posts/(9).jpg',
	},
	{
		...post,
		id: 10,
		title: 'بروزرسانی بزرگ Gran Turismo 7 منتشر شد!',
		featuredImage: '/img/posts/(10).jpg',
	},
  {
		...post,
		id: 11,
		title: 'تاریخ برگزاری رویداد PC GAME SHOW 2022 اعلام شد',
		featuredImage: '/img/posts/(11).jpg',
	},
  {
		...post,
		id: 12,
		title: 'تاریخ رونمایی Final Fantasy 16',
		featuredImage: '/img/posts/(12).jpg',
	},
	{
		...post,
		id: 13,
		title: 'مقایسه فروش PS5 و XBOX در سال 2021',
		featuredImage: '/img/posts/(13).jpg',
	},
  {
		...post,
		id: 14,
		title: 'شایعاتی در مورد بازی جدید UBISOFT',
		featuredImage: '/img/posts/(14).jpg',
	},
].reverse()
