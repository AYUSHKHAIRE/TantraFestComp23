var typed = new Typed('#element', {
    strings: [ 'FUN', 'INOVATION', 'GROWTH','FUN', 'INOVATION', 'GROWTH','FUN', 'INOVATION', 'GROWTH','FUN', 'INOVATION', 'GROWTH','FUN', 'INOVATION', 'GROWTH','FUN', 'INOVATION', 'GROWTH'],
    typeSpeed: 50,
});

window.addEventListener('load', function() {
    var image = document.querySelector('.rigsec img');
    image.classList.add('loaded');
});

function toggleNavbar()
   {
    console.log('clicked');
    rig=document.getElementById('right');
    rightWrapper = document.querySelector('.right-wrapper');
    if (rig.style.display=="none") {
        rig.style.display='flex';
        rig.style.flexdirection='column';
        rightWrapper.style.transform = "skewX(0deg)"
    }
    else
    {
        rig.style.display='none';
        rightWrapper.style.transform = "skewX(40deg)";
    }
   }

   // Add this JavaScript to your existing script
document.addEventListener("DOMContentLoaded", function () {
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".right ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});
});

const eventDate = new Date('2023-12-31 00:00:00').getTime();

const countdown = setInterval(function () {
const currentDate = new Date().getTime();
const timeLeft = eventDate - currentDate;

if (timeLeft <= 0) {

    clearInterval(countdown);
    applyEventStyles();
} else {
 
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML =
        days + ':' + hours + ':' + minutes + ':' + seconds;
}
}, 1000); 
function applyEventStyles() {

document.body.style.backgroundColor = 'green';

}


document.addEventListener("DOMContentLoaded", function () {
    const cloudContainer = document.getElementById("cloud-container");
    const cloud = document.getElementById("cloud");

    setTimeout(function () {
        cloudContainer.style.transform = "translate(-100%, 100%)"; 
    }, 2000); 
});


 const imageUrls = [
    "/images/Events/e1.webp",
    "/images/Events/e2.webp",
    "/images/Events/e3.webp",
    "/images/Events/e4.webp",
    "/images/Events/e5.webp",
    "/images/Events/e6.webp",
    "/images/Events/e7.webp",
    "/images/Events/e8.webp",
    "/images/Events/e9.webp",
    "/images/Events/e10.webp",
    "/images/Events/e11.webp",
    "/images/Events/e12.webp",
    "/images/Events/e13.webp",
  ];
  const eventnames = [
    "Gen-A-Thon",
    "ByteCraft",
    "Gamee-Jam",
    "Robo-Rumble",
    "Design-A-Thon",
    "EngimaXploreCTF",
    "GPT-3.5-Solve-A-Thon",
    "Blender Bitz",
    "Verbum Magisterium",
    "BattleFenzy",
    "The Shatranj Up",
    "OverDrive - Valorent Showdown",
    "Reporter rendezvous",
  ];

  const slider = document.getElementById("imageSlider");
  const sliderbefore = document.getElementById("imageSliderbefore");
  const sliderafter = document.getElementById("imageSliderafter");

  const sliderBtnsContainer = document.getElementById("sliderBtns");
  const miniNavbar = document.getElementById("miniNavbar");

  let currentIndex = 0;

  function createSlide(index) {
    slider.innerHTML = "";

    const middleSlide = document.createElement("div");
    middleSlide.classList.add("slide");
    middleSlide.style.display = "flex"; 
    slider.appendChild(middleSlide);

    for (let i = index - 1; i <= index + 1; i++) {
      const normalizedIndex = (i + imageUrls.length) % imageUrls.length;
      const image = document.createElement("img");
      image.src = imageUrls[normalizedIndex];
      image.alt = `Image ${normalizedIndex + 1}`;
      middleSlide.appendChild(image);

      if (i === index) {
        image.style.height = "400px";
      }
    }

    sliderbefore.innerHTML = "";
    sliderafter.innerHTML = "";
    sliderBtnsContainer.innerHTML = "";
    miniNavbar.innerHTML = "";

    for (let i = 0; i < imageUrls.length; i++) {
      const btn = document.createElement("div");
      btn.classList.add("slider-btn");
      btn.addEventListener("click", () => goToSlide(i));
      sliderBtnsContainer.appendChild(btn);

      const miniNavItem = document.createElement("div");
      miniNavItem.classList.add("mini-nav-item");
      miniNavItem.textContent = eventnames[i];
      miniNavItem.addEventListener("click", () => goToSlide(i));
      miniNavbar.appendChild(miniNavItem);
    }
  }

  function updateSlider() {
    sliderBtnsContainer.childNodes.forEach((btn, index) => {
      btn.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    createSlide(index);
    updateSlider();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    createSlide(currentIndex);
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    createSlide(currentIndex);
    updateSlider();
  }

  createSlide(currentIndex); 
  updateSlider();

  setInterval(nextSlide, 6000); 


  function toggleoptionbar()
  {
    mn=document.getElementById('miniNavbar')
    if (mn.style.display=='none') {
      mn.style.display='block';
    } else {
      mn.style.display='none';
    }
  }

    document.addEventListener('DOMContentLoaded', function () {
        const sponsorsContainer = document.querySelector('.sponsors-container');
        const showButton = document.getElementById('showAllSponsors');

        // Show only the first 3 sponsors on mobile
        const mobileWidth = 650; // Adjust this based on your mobile breakpoint

        function toggleSponsors() {
            const sponsors = sponsorsContainer.querySelectorAll('.sponsor');

            if (window.innerWidth <= mobileWidth) {
                // Show only the first 3 sponsors on mobile
                sponsors.forEach((sponsor, index) => {
                    if (index >= 2) {
                        sponsor.style.display = 'none';
                    } else {
                        sponsor.style.display = 'flex';
                    }
                });

                // Show the "Show All Sponsors" button on mobile
                showButton.classList.add('show');
            } else {
                // Show all sponsors on PCs
                sponsors.forEach((sponsor) => {
                    sponsor.style.display = 'flex';
                });

                // Hide the "Show All Sponsors" button on PCs
                showButton.style.display = 'none';
            }
        }

        // Initial toggle
        toggleSponsors();

        // Handle "Show All Sponsors" button click event
        showButton.addEventListener('click', function () {
            const sponsors = sponsorsContainer.querySelectorAll('.sponsor');
            sponsors.forEach((sponsor) => {
                sponsor.style.display = 'flex'; // Show all sponsors
            });

            // Hide the "Show All Sponsors" button
            this.style.display = 'none';
        });

        // Handle window resize events
        window.addEventListener('resize', toggleSponsors);
    });
