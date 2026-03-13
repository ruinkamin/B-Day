document.addEventListener("DOMContentLoaded", function() {
    // Password check
    const passwordModal = document.getElementById("passwordModal");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
    const passwordInput = document.getElementById("passwordInput");
    const submitPassword = document.getElementById("submitPassword");

    const SECRET = 'vibrance'; //яскравість, енергію, святковий настрій і особливість
    const WELCOME_DURATION = 10000; 

    welcomeScreen.classList.add("show");

    setTimeout(() => {
        welcomeScreen.style.opacity = "0";
        setTimeout(() => {
            welcomeScreen.classList.remove("show");
            welcomeScreen.style.opacity = '';
        }, 600);
        
        passwordModal.classList.add("show");
        passwordInput.focus();
    }, WELCOME_DURATION);

    function checkPassword() {
        const val = (passwordInput.value || "").trim();
        if (val.toLowerCase() === SECRET) {
            passwordModal.classList.remove("show");
            mainContent.style.display = "block";
        } else {
            passwordInput.value = "";
            passwordInput.placeholder = "Try again, my love...";
            passwordInput.style.borderColor = "#E3311D";
            setTimeout(() => {
                passwordInput.style.borderColor = "#9BBACD";
                passwordInput.placeholder = "Our special word...";
            }, 1500);
        }
    };

    // submitPassword.addEventListener("click", function() {
    //     if (passwordInput.value.toLowerCase() === "babycakes") {
    //         passwordModal.style.opacity = "0";
    //         setTimeout(() => {
    //             welcomeScreen.style.display = "flex";
    //             passwordModal.style.display = "none";
                

    //             setTimeout(() => {
    //                 welcomeScreen.style.opacity = "0";


    //                 setTimeout(() => {
    //                     welcomeScreen.style.display = "none";
    //                     mainContent.style.display = "block";
    //                 }, 800);
    //             }, 3500);
    //         }, 500);
    //     } else {
    //         passwordInput.value = "";
    //         passwordInput.placeholder = "Try again, my love...";
    //         passwordInput.style.borderColor = "#E3311D";
    //         setTimeout(() => {
    //             passwordInput.style.borderColor = "#9BBACD";
    //             passwordInput.placeholder = "Our special word...";
    //         }, 1500);
    //     }
    // });

    // Allow Enter key to submit password
    submitPassword.addEventListener("click", checkPassword);
    passwordInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") checkPassword();
    });
    // passwordInput.addEventListener("keypress", function(e) {
    //     if (e.key === "Enter") {
    //         submitPassword.click();
    //     }
    // });

    // Tab switching
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", function() {
            const targetTab = this.getAttribute("data-tab");

            // Update active tab
            tabs.forEach((t) => t.classList.remove("active"));
            this.classList.add("active");

            // Show corresponding content
            tabContents.forEach((content) => {
                content.classList.remove("active");
                if (content.id === targetTab) {
                    content.classList.add("active");
                }
            });
        });
    });

    // Expandable love letter

    const loveLetter = document.getElementById("loveLetter");
    loveLetter.addEventListener("click", function() {
        this.classList.toggle("expanded");
    });

    // Add floating decorative elements
    function addFloatingElements() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.top = Math.random() * 100 + "%";
            heart.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(heart);
        }

        for (let i = 0; i < 5; i++) {
            const teddy = document.createElement("div");
            teddy.classList.add("teddy-bear");
            teddy.innerHTML = "🧸";
            teddy.style.left = Math.random() * 100 + "%";
            teddy.style.top = Math.random() * 100 + "%";
            teddy.style.animationDelay = Math.random() * 5 + "s";
            document.body.appendChild(teddy);
        }
    }

    addFloatingElements();
});



// Carusel

const parent = document.querySelector('.parent')
const imgs = document.querySelectorAll('.cont')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let idx = 0

function changeImg() {
    if (idx > imgs.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = imgs.length - 1
    }
    parent.style.transform = `translateX(${-idx * 850}px)`
}


next.addEventListener('click', function change() {
    idx++;

    changeImg()
});

prev.addEventListener('click', function change() {
    idx--;

    changeImg()
});