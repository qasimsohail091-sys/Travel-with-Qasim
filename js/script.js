const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", function () {
    
    navLinks.classList.toggle("show");
  });
}

const destinationData = {
  hunza: {
    name: "Hunza Valley",
    description: "A peaceful mountain valley famous for tall peaks, apple orchards and friendly local culture.",
    duration: "5 Days / 4 Nights",
    price: "PKR 45,000",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80"
  },
  skardu: {
    name: "Skardu",
    description: "Home to beautiful lakes, cold deserts and the base camps for some of the world's highest mountains.",
    duration: "6 Days / 5 Nights",
    price: "PKR 50,000",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
  },
  naran: {
    name: "Naran",
    description: "A popular hill station known for Lake Saiful Muluk and lush green mountain scenery.",
    duration: "4 Days / 3 Nights",
    price: "PKR 30,000",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
  murree: {
    name: "Murree",
    description: "A charming hill town close to Islamabad, famous for pine forests and cool weather.",
    duration: "2 Days / 1 Night",
    price: "PKR 15,000",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  },
  dubai: {
    name: "Dubai",
    description: "A modern city known for skyscrapers, desert safaris and world-class shopping.",
    duration: "5 Days / 4 Nights",
    price: "PKR 150,000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
  },
  istanbul: {
    name: "Istanbul",
    description: "A historic city spread across two continents, famous for mosques, bazaars and Bosphorus views.",
    duration: "6 Days / 5 Nights",
    price: "PKR 180,000",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80"
  }
};


const destModal = document.getElementById("destinationModal");
const destModalImg = document.getElementById("modalImage");
const destModalName = document.getElementById("modalName");
const destModalDesc = document.getElementById("modalDescription");
const destModalDuration = document.getElementById("modalDuration");
const destModalPrice = document.getElementById("modalPrice");
const destModalClose = document.getElementById("modalClose");

const viewDetailsButtons = document.querySelectorAll(".view-details-btn");

viewDetailsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    
    const key = button.getAttribute("data-destination");
    const place = destinationData[key];

   
    destModalImg.src = place.image;
    destModalImg.alt = place.name;
    destModalName.textContent = place.name;
    destModalDesc.textContent = place.description;
    destModalDuration.textContent = place.duration;
    destModalPrice.textContent = place.price;

    
    destModal.classList.add("show");
  });
});

if (destModalClose) {
  destModalClose.addEventListener("click", function () {
    destModal.classList.remove("show");
  });
}


if (destModal) {
  destModal.addEventListener("click", function (event) {
    if (event.target === destModal) {
      destModal.classList.remove("show");
    }
  });
}

const galleryImages = document.querySelectorAll(".gallery-item img");
const imageModal = document.getElementById("imageModal");
const imageModalPic = document.getElementById("imageModalPic");
const imageModalClose = document.getElementById("imageModalClose");

galleryImages.forEach(function (img) {
  img.addEventListener("click", function () {
   
    imageModalPic.src = img.src;
    imageModalPic.alt = img.alt;
    imageModal.classList.add("show");
  });
});

if (imageModalClose) {
  imageModalClose.addEventListener("click", function () {
    imageModal.classList.remove("show");
  });
}

if (imageModal) {
  imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
      imageModal.classList.remove("show");
    }
  });
}


const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    
    event.preventDefault();

    let isValid = true;

    const nameField = document.getElementById("fullName");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const destinationField = document.getElementById("destination");
    const messageField = document.getElementById("message");

   
    if (nameField.value.trim() === "") {
      document.getElementById("nameError").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("nameError").classList.remove("show");
    }

    
    const emailValue = emailField.value.trim();
    const hasAtSymbol = emailValue.includes("@");
    const hasDot = emailValue.includes(".");

    if (emailValue === "" || !hasAtSymbol || !hasDot) {
      document.getElementById("emailError").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("emailError").classList.remove("show");
    }

    
    if (phoneField.value.trim() === "") {
      document.getElementById("phoneError").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("phoneError").classList.remove("show");
    }

   
    if (destinationField.value === "") {
      document.getElementById("destinationError").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("destinationError").classList.remove("show");
    }

   
    if (messageField.value.trim() === "") {
      document.getElementById("messageError").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("messageError").classList.remove("show");
    }

    const formMessage = document.getElementById("formMessage");

    if (isValid) {
      formMessage.textContent = "Your message has been submitted successfully!";
      formMessage.classList.add("success");
      contactForm.reset();
    } else {
      formMessage.classList.remove("success");
      formMessage.textContent = "";
    }
  });
}
