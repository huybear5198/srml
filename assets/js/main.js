// CONFIG DATA 
const CONFIGDATA = {
    titleHeader: 'Cho anh xin lỗi vì ngày tồi tệ hôm qua nhé',
    descriptionHeader: 'Vì nóng tính nên đã nói ra những lời không hay',
    buttonYes: 'Kao tha cho mày lần cuối',
    buttonNo: 'Đéo nhé',
    titleModar: 'Cảm ơn em vì đã tha lỗi cho anh',
    descriptionModar: 'Anh biết là em chỉ nóng giận lúc đó thôi mà ^^ Hì! Là anh sai vì đã đùng đùng chọc giận em và vì anh đã k suy nghĩ thấu đáo </br> Cảm ơn em đã tha lỗi cho anh nha bé <3 </br> Và lời cuối cùng là xin em mở block cho anh với =)) và mình lại tiếp tục nói chuyện nhé "',
};





// Author: andyngojs
// Facebook: http://fb.com/dn279
// Join us: https://fb.com/groups/dobeeteam.community














// Không được thay đổi ở đây - Not to change
$(document).ready(function() {setTimeout(function() {$('.spinner').fadeOut();$('#preloader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow': 'visible'})}, 600)});

function start(data) {
    var btnYes = document.querySelector('.btn--yes');
    var btnNo = document.querySelector('.btn--no');
    var popup = document.querySelector('.modal');
    var overlay = document.querySelector('.modal__overlay');
    var btnClose = document.querySelector('.btn-close');
    var headerModar = document.querySelector('.heading-name');
    var desccriptionModar = document.querySelector('.message');

    window.onload = () => {
        document.querySelector('.music').play()
        document.querySelector('.music').volume = 1
    };
    window.onkeypress = (e) => {
        if (e.charCode === 32) {
            document.querySelector('.music').play();
        }
    };

    document.querySelector('.header').innerHTML = `
        <h1 class="header-name">
            ${data.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${data.descriptionHeader}
            <i class="ti-face-smile"></i>
        </p>`;
    btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${data.buttonYes}`;
    btnNo.innerHTML =  ` <i class="ti-thumb-down"></i> ${data.buttonNo}`;
    headerModar.innerHTML = `${data.titleModar} <i class="ti-heart"></i>`;
    desccriptionModar.innerHTML = `${data.descriptionModar}`

    btnYes.onclick = () => {
        popup.classList.add('show');
    };
    btnClose.onclick = () => {
        popup.classList.remove('show');
    };

    overlay.onclick = () => {
        popup.classList.remove('show');
    };

    btnNo.onclick = () => {
        btnNo.style.top = 100 + "px";
        btnYes.style.top = 280 + "px";

    };

    btnNo.onmouseover = (e) => {
        var x = Math.random() * e.relatedTarget.clientHeight * 0.9;
        var y = Math.random() * e.relatedTarget.clientWidth * 0.9;
        btnNo.style.top = x + "px";
        btnNo.style.right = y + "px";
    };

};

start(CONFIGDATA);

