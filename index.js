window.addEventListener('load',() => {

    // Mobile 
    const hamburguerMenu = document.querySelector('.hamburguer-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const xBtn = document.querySelector('.x-btn');
    const mobileToggle = document.querySelector('#mobile-toggle');
    
    // Dark mode
    const body = document.body;
    const logos = document.querySelectorAll('#logo');
    const title = document.querySelector('#title');
    const span = document.querySelector('#title-span');
    const selectedTab = document.querySelector('.selected');
    const modeToggle = document.querySelector('.mode-toggle');
    const modeContainer = document.querySelectorAll('.mode-container');
    const toggleImgs = document.querySelectorAll('#toggle-img');
    const mobileSelected = document.querySelector('.mobile-selected');
    
    const makeDark = () => {
        modeContainer.forEach(mode => {
            mode.classList.toggle('dark');
        });
        toggleImgs.forEach(img => {
            img.classList.toggle('active');
        });
        body.classList.toggle('dark');
        logos.forEach(logo => {
            logo.classList.toggle('active');
        });
        title.classList.toggle('dark');
        span.classList.toggle('dark');
        mobileMenu.classList.toggle('mobile-menu-dark');
        selectedTab.classList.toggle('dark');
        mobileSelected.classList.toggle('dark');
    };

    modeToggle.addEventListener('click', () => {
        makeDark();
    });

    mobileToggle.addEventListener('click', () => {
        makeDark();
    });

    hamburguerMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    xBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});