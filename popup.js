function copyMe() {
    console.log("copyMe clicked")
    navigator.clipboard.writeText("Jonathan Law");
    alert("jonathan law copied to clipboard")
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("copy");

    button.addEventListener("click", function() {
        console.log("event is clicked");
    })
})

console.log("popup.js");


var button = document.getElementById("copy");
button.onclick = copyMe;

console.log("button=", button);
