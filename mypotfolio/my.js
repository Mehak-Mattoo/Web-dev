const scriptURL =
  "https://script.google.com/macros/s/AKfycbx9eWysLOg_cpZPTNd9DN_a-3ZxOOI_JmUCpC-mr2YwNgJj2Ua1MRTSe7RZ1H9eOpvI5Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("span");
const submitBtn = document.getElementById("submit-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";

      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);

// toggle menu icon

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// remove nav bar when moving to a different section

menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");

//scroll reveal

ScrollReveal({ distance: "80px", duration: 2000, delay: 200 });

// ScrollReveal().reveal(".home-content,.heading", {
//   origin: "top",
// });
ScrollReveal().reveal(".home-img, .contact form, .all-projects", {
  origin: "bottom",
});

ScrollReveal().reveal(" #edu-data, #Exp-data", {
  origin: "left",
});
//ScrollReveal().reveal(".home-content p", { origin: "right" });

//spell out name

const name = new Typed(".spell-name", {
  strings: ["Mehak Mattoo"],
  typeSpeed: 80,
  loop: false,
});
