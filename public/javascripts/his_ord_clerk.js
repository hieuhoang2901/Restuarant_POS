const items = document.querySelectorAll(".item_header p span");
const drop_down = document.querySelectorAll(".drop_down");




items.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
        drop_down[index].classList.add("active");
        drop_down[index].addEventListener("mouseleave", () => {
            drop_down[index].classList.remove("active");
        })
    })

})
drop_down.forEach((drop, index) => {
    drop.querySelector("span:first-child").addEventListener("click", () => {
        items[index].innerHTML = drop.querySelector("span:first-child").textContent
    })

    drop.querySelector("span:last-child").addEventListener("click", () => {
        items[index].innerHTML = drop.querySelector("span:last-child").textContent
    })
})