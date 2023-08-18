const container = document.querySelector(".container");
const button1 = document.querySelector(".textcontainer button");
const button2 = document.querySelector(".second-container img");
const button3 = document.querySelector(".second-container .signup-button");


function buttonClick() {
    button1.addEventListener("click", () => {

        container.classList.toggle("change");


    });
}
buttonClick();


function buttonClickRemove() {
    button2.addEventListener("click", () => {

        container.classList.remove("change");


    });
}
buttonClickRemove();




