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
    confe.classList.remove("active");
    feedback.classList.remove("active");

})

btn_confirm.addEventListener("click", () => {
    confe.classList.add("active");
    feedback.classList.add("active");
})





var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();