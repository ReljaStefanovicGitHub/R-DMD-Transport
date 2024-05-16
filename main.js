
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











myButton.addEventListener(
    "click",
    function () {
        myPopup.classList.add("show");
    }
);
closePopup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);





myButton1.addEventListener(
    "click",
    function () {
        myPopup1.classList.add("show");
    }
);
closePopup1.addEventListener(
    "click",
    function () {
        myPopup1.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup1) {
            myPopup1.classList.remove(
                "show"
            );
        }
    }
);


myButton2.addEventListener(
    "click",
    function () {
        myPopup2.classList.add("show");
    }
);
closePopup2.addEventListener(
    "click",
    function () {
        myPopup2.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup2) {
            myPopup2.classList.remove(
                "show"
            );
        }
    }
);