const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    console.log('here')
    const target = document.querySelector(tab.dataset.tabTarget);
    console.log(target)
    tabContents.forEach(tabContent => tabContent.classList.remove('is-active'));
    tabs.forEach(tab=>{
      tab.classList.remove('is-active');
    })
    tab.classList.add('is-active')
    target.classList.add('is-active')
  })
})