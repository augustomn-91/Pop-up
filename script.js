const button = document.querySelector('button');
const popup = document.querySelector('.popup-darken');
const closeButton = document.querySelector('.popup-close');

button.addEventListener('click', () => {
    popup.classList.add('open-popup');
});

popup.addEventListener('click', (param) => {
    const target = param.target.classList[0];
    const class_list = ['popup-darken', 'popup-link', 'popup-close'];
    const click_target = class_list.some((param) => param === target);


    if(click_target){
        popup.classList.remove('open-popup');
    };
    
});

