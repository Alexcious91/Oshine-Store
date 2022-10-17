// Add to cart count starts
let btn = document.querySelector(".add-to-cart")
let count = 1;

btn.addEventListener("click", function() {
    count += 1;
    console.log(count);
});

function myFunc() {
    document.getElementById("btnCart").innerHTML = parseInt(count);
}
// count section end

// ******************************************


// Navigation Starts
// Open Navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
// Close Navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// Navigation End
















