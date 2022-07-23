const footerYear = document.querySelector('.footer__year')
const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navLink = document.querySelector('.nav__link')
const allNavItems = document.querySelectorAll('.nav__link')
const nav = document.querySelector('nav')
const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('sticky-body')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
            item.classList.remove('nav__item--one')
			document.body.classList.remove('sticky-body')
			navBtn.classList.remove('is-active')
		})
	})
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()



navBtn.addEventListener('click', handleNav)
