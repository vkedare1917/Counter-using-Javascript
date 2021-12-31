const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const value = document.getElementById("value");
let count = 0;


increaseBtn.addEventListener('click', function () {
    count++;
    value.innerHTML = count;
    if (count > 0) {
        value.style.color = "green";
    }
    else if (count === 0) {
        value.style.color = "#000";
    }
})

decreaseBtn.addEventListener('click', function () {
    count--;
    value.innerHTML = count;
    if (count < 0) {
        value.style.color = "red";
    }
    else if (count === 0) {
        value.style.color = "#000";
    }
})

resetBtn.addEventListener('click', function () {
    count = 0;
    value.innerHTML = count;
    if (count === 0) {
        value.style.color = "#000";
    }
})
