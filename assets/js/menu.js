const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active_menu'));
    this.classList.add('active_menu');
}
list.forEach((item) =>
item.addEventListener('click' , activeLink));