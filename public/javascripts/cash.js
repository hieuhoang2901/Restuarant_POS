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