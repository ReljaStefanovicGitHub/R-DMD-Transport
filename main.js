
// Modal functions
function showContactModal(name, position, phone) {
    document.getElementById("modalName").innerHTML = name;
    document.getElementById("modalPosition").innerHTML = position;
    document.getElementById("modalPhone").innerHTML = "Phone: " + phone;
    document.getElementById("contactModal").style.display = "block";
}

function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
}

// Sidebar functions
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}