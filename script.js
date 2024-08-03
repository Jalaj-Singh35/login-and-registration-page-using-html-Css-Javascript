const showPopupBtn = document.querySelector(".login-button");
const formpopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-button");
const loginSignuplink = document.querySelectorAll(".form-box .bottom-link a");


showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click",() => showPopupBtn.click());


loginSignuplink.forEach(link => {
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        formpopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");    
    })
})