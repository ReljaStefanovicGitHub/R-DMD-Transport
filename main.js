
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

    // Get the modal
        // Get the modal
        var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var images = document.querySelectorAll('.zoom');
images.forEach(function(img) {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// JavaScript to handle sidebar open/close
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// JavaScript to handle popup open/close
document.querySelectorAll('.card button').forEach(function(button) {
  button.addEventListener('click', function() {
    var popup = this.nextElementSibling;
    popup.style.display = 'block';
  });
});

document.querySelectorAll('.popup .close').forEach(function(closeBtn) {
  closeBtn.addEventListener('click', function() {
    this.closest('.popup').style.display = 'none';
  });
});



document.addEventListener('DOMContentLoaded', function() {
    var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  });