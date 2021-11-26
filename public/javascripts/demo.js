var add = document.querySelectorAll(".add");
var hide = document.querySelectorAll(".form-group--hide");

add.forEach((e, index) => {

    e.addEventListener("click", (f) => {
        e.classList.add("hide")
        hide[index].classList.remove("form-group--hide");
        hide[index].focus();
    })
})


const input = document.querySelector(".form_paypal_title input");
const input1 = document.querySelector(".credit_card input");

input.addEventListener("click", () => {
    document.querySelector('.form_paypal .form_paypal_content').classList.add("active");
    document.querySelector('.form_credit-card').classList.remove("active");
})

input1.addEventListener("click", () => {
    document.querySelector('.form_paypal .form_paypal_content').classList.remove("active");
    document.querySelector('.form_credit-card').classList.add("active");
})











let btn_confirm = document.querySelector(".btn_confirm");
let popup = document.querySelector(".popup");
let feedback = document.querySelector(".feedback");
let close = document.querySelector(".close");
let confe = document.querySelector("#my-canvas");
let close_fb = document.querySelector(".close_fb");
let send = document.querySelector(".send");
let textarea = document.querySelector("textarea");
let container = document.querySelector(".container");

send.addEventListener("click", () => {
    const FB = textarea.value;

    let getFeedBack = JSON.parse(localStorage.getItem("storageFeedBack"));
    if (getFeedBack) {
        getFeedBack = [
            ...getFeedBack, FB
        ];
    } else {
        getFeedBack = [
            FB
        ];
    }
    localStorage.setItem("storageFeedBack", JSON.stringify(getFeedBack));
    textarea.value = "";

})

btn_confirm.addEventListener("click", () => {
    confe.classList.add("active");
    popup.classList.add("active");
    container.classList.add("active");

})


close.addEventListener("click", () => {
    popup.classList.remove("active");
    feedback.classList.add("active");
})


close_fb.addEventListener("click", () => {
    confe.classList.remove("active");
    feedback.classList.remove("active");
    container.classList.remove("active");
})


var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();