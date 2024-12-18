const userForm = document.getElementById("userForm");
const userName = document.getElementById("userName");


userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(!userName.value){
        alert("Please Enter Your Name");
    } else if(userName.value) {
        localStorage.setItem("Username", userName.value);
        userName.value = ""
        location.replace("intro.html")
    }
})