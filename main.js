const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const resetBtn = document.querySelector(".reset-btn");
const value = document.getElementById("value");
let count = 0;


increaseBtn.addEventListener('click', function () {
    count++;
    value.textContent = count;
    if (count > 0) {
        value.style.color = "green";
    }
    else if (count === 0) {
        value.style.color = "#000";
    }
})

decreaseBtn.addEventListener('click', function () {
    count--;
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red";
    }
    else if (count === 0) {
        value.style.color = "#000";
    }
})

resetBtn.addEventListener('click', function () {
    count = 0;
    value.textContent = count;
    if (count === 0) {
        value.style.color = "#000";
    }
})

const btns = document.querySelectorAll(".btns");

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const btnValue = e.currentTarget.classList;
        if(btnValue.contains("minus-two")) {
            count -= 2; 
            value.textContent = count;
        }
        else if(btnValue.contains("minus-three")) {
            count -= 3; 
            value.textContent = count;
        }
        else if(btnValue.contains("minus-five")) {
            count -= 5; 
            value.textContent = count;
        }
        else if(btnValue.contains("minus-ten")) {
            count -= 10; 
            value.textContent = count;
        }
        else if(btnValue.contains("add-two")) {
            count += 2; 
            value.textContent = count;
        }
        else if(btnValue.contains("add-three")) {
            count += 3; 
            value.textContent = count;
        }
        else if(btnValue.contains("add-five")) {
            count += 5; 
            value.textContent = count;
        }
        else if(btnValue.contains("add-ten")) {
            count += 10; 
            value.textContent = count;
        }
        if (count < 0) {
            value.style.color = "red";
        }
        else if(count > 0) {
            value.style.color = "green";
        }
        else if(count===0) {
            value.style.color = "black";
        }
    })
})
