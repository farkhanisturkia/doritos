const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');
const list3 = document.querySelector('.list3');
const list4 = document.querySelector('.list4');
const hero = document.querySelector('.hero');
const product = document.querySelector('.product');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

document.addEventListener('click',function(e){
    if (list2.contains(e.target)) {
        hero.style.display = "none"
        product.style.display = "flex"
        about.style.display = "none"
        contact.style.display = "none"
    }
    if (list3.contains(e.target)) {
        hero.style.display = "none"
        product.style.display = "none"
        about.style.display = "flex"
        contact.style.display = "none"
    }
    if (list4.contains(e.target)) {
        hero.style.display = "none"
        product.style.display = "none"
        about.style.display = "none"
        contact.style.display = "flex"
    }
    if (list1.contains(e.target)) {
        hero.style.display = "flex"
        product.style.display = "none"
        about.style.display = "none"
        contact.style.display = "none"
    }
});