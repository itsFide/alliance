document.addEventListener('DOMContentLoaded', ()=>{
    // AOS init
    AOS.init();
    
    //Mobile dropdown
    let dropdownTriggers = document.querySelectorAll('.header__nav__mobile li.has-child')
    dropdownTriggers.forEach(e=>{
        let subMenu = e.querySelector('.submenu')
        let link = e.querySelector('a');
        link.addEventListener('click', e=>{
            e.preventDefault()
        })
        e.addEventListener('click', ()=>{
            e.classList.toggle('active')
            subMenu.style.height = subMenu.style.height ? null : `${subMenu.scrollHeight}px`;
        })
    })
    // Burger menu
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header__nav__mobile');
    const tagBody = document.querySelector('body')
    burger.addEventListener('click', () => {
        tagBody.classList.toggle('body-hidden')
        burger.classList.toggle('active')
        menu.classList.toggle('active')
    })

    function hideMenuResize() {
        const vw = window.innerWidth;
        if(vw > 991){
            menu.classList.remove('active')
            tagBody.classList.remove('body-hidden')
            burger.classList.remove('active')
        }
        // document.documentElement.style.setProperty("--vh", `${vh}px`);
    }  
    window.addEventListener("resize", hideMenuResize);
    const header = document.querySelector('header'); 

    if (!header) {
        return; 
    }

    // Модальное окно
    function bindModal(trigger, modal, close) {
        trigger = document.querySelectorAll(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)
        trigger.forEach(element => {
            element.addEventListener('click', e => {
                e.preventDefault()
                modal.style.display = 'flex'
            });
        });
        close.addEventListener('click', () => {
        modal.style.display = 'none'
        });
        modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
        }
        })
    }
    $('input[type="tel"]').mask("+7 (999) 999 99 99");
    // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
    // ВТОРОЙ аргумент - класс самого модального окна.
    // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
    bindModal('.modal__btn', '.modal__wrapper', '.modal__close')

})