// появление элементов

function hide(time, el) {
    setTimeout(() => {
        document.querySelector(el).style.top = "0";
    }, time);
}
hide(1000, ".name-block")
hide(1300, ".last-name-block")
hide(1600, ".nationality-block")
hide(1900, ".mail-block")
hide(2200, ".date-block")
hide(2500, ".gender-block")
hide(2900, ".password-block")
hide(3200, ".confirm-block")
