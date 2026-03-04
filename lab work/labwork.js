// LOGIN FORM SUBMIT
document.getElementById("loginForm")?.addEventListener("submit", function(e) {

e.preventDefault();

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

// LOGIN API (REAL DEMO API)
fetch("https://reqres.in/api/login", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
email: email,
password: password
})
})

.then(res => res.json())

.then(data => {

console.log("Login Response:", data);

// TOKEN SAVE IN LOCAL STORAGE
localStorage.setItem("token", data.token);

// LOGIN SUCCESS MESSAGE
alert("Login Successful");

// REDIRECT TO DASHBOARD
window.location.href="dashboard.html";

})

.catch(error => {
console.log("Error:", error);
});

});


// FUNCTION TO GET PROFILE DATA
function getProfile(){

let token = localStorage.getItem("token");

// PROFILE API
fetch("https://reqres.in/api/users/2", {

method: "GET",

headers: {
"Authorization": "Bearer " + token
}

})

.then(res => res.json())

.then(data => {

console.log("Profile Data:", data);

alert("User Name: " + data.data.first_name + " " + data.data.last_name);

})

.catch(error => {
console.log("Profile Error:", error);
});

}


// LOGOUT FUNCTION
function logout(){

localStorage.removeItem("token");

alert("Logged Out");

window.location.href = "login.html";

}