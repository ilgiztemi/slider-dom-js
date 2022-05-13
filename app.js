const number = document.querySelector('.number');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const main = document.querySelector('.main');
const img = document.querySelector('.img');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
count = 1;
const images = ['https://images.pexels.com/photos/2235303/pexels-photo-2235303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2187320/pexels-photo-2187320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2187661/pexels-photo-2187661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940','https://images.pexels.com/photos/2187424/pexels-photo-2187424.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260']
next.addEventListener('click', () => {
    count++;
    if(count < 5) {
        prev.style.display = 'block';
        number.innerHTML = count;
    }
    if(count === 2) {img.style.display = 'none'; img1.style.display= 'block'};
    if(count === 3) {img1.style.display = 'none'; img2.style.display= 'block'};
    if(count === 4) {img2.style.display = 'none'; img3.style.display= 'block'};
    if(count === 4) {
        next.style.display = 'none';
    }
})
prev.addEventListener('click', () => {
    count--;
    if(count > 0 || count === 3) {
        next.style.display = 'block';
        number.innerHTML = count;
    }
    if(count === 3) {img3.style.display = 'none'; img2.style.display= 'block'};
    if(count === 2) {img2.style.display = 'none'; img1.style.display= 'block'};
    if(count === 1) {img1.style.display = 'none'; img.style.display= 'block'};
    if(count === 1) {
        prev.style.display = 'none';
    }
})