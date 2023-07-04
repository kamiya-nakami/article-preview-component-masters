const conmain = document.getElementById("con-main");
const conThank = document.getElementById("selected-thank");

// conMain
const submit = document.querySelector(".btn-submit")
// button submit
const numbers = document.querySelectorAll(".btn-feeback-number");
const selected = document.getElementById("selected-user");

submit.addEventListener("click", () => {
    conThank.classList.remove("hidden");
    conmain.classList.add("hidden");
});
// hidden main

numbers.forEach((number) => {
    number.addEventListener("click", () =>{
        selected.innerHTML = number.innerHTML
    })
})
// add selected user number conThank



