
let flag = false;
let id = null;
const target = document.getElementById('tag');
const off = document.getElementsByClassName('off')[0];
const onn = document.getElementsByClassName('onn')[0];

function zoomout() {
    if (flag === false) {
        target.className = 'zoom';
        id = setInterval(restore,1500);
        off.style.display = 'none';
        onn.style.display = 'block';
    } else {
        clearInterval(id);
        flag = false;
        off.style.display = 'block';
        onn.style.display = 'none';
    }
}

function restore() {
    target.classList.toggle("zoom");
    flag = true;
}