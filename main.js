// change the navbar style on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

// show/hide faq answer 

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change the icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fa fa-plus'){
            icon.className = "fa fa-minus";
        }else {
            icon.className = "fa fa-plus";
        }
    })
})