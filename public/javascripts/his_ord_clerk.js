const item = document.querySelector(".item_header a span");
const drop = document.querySelector(".drop_down");
const drop_down = document.querySelector(".drop_down span:first-child");
console.log(drop_down);
const drop_down2 = document.querySelector(".drop_down span:last-child");
console.log(drop_down2);
item.addEventListener("click", () => {
    console.log("123")
    drop.classList.toggle("active");
})
drop_down.addEventListener("click", () => {
    item.innerHTML = drop_down.textContent;
})

drop_down2.addEventListener("click", () => {
    item.innerHTML = drop_down2.textContent;
})