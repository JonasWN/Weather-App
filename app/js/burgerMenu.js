const burgerMenu = document.querySelector(".burger-menu")
const message = document.querySelector("#message")


burgerMenu.addEventListener("mouseover", () => {

    document.querySelector("#line-hover").classList.add("hover")

});

burgerMenu.addEventListener("mouseout", () => {

    document.querySelector("#line-hover").classList.remove("hover")

});

burgerMenu.addEventListener("click", () => {

    document.querySelector("#line-hover").classList.toggle("click-2")
    document.querySelector("#line-left").classList.toggle("cross-left")
    document.querySelector("#line-right").classList.toggle("cross-right")

});