window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.sidebar__btn')
  const contentWrapper = document.querySelector('.content-wrapper')

  btn.addEventListener('click', () => {
    contentWrapper.classList.toggle('no-sidebar')
  })
})
