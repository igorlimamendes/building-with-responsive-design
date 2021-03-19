document.addEventListener("DOMContentLoaded", () => {
    const wrapperBox1 = document.querySelector(".wrapper__box1");
    const navLogo = document.querySelector(".nav__logo");
    const navLogoSvg = document.querySelector(".nav__logo--svg");
    
    function navEffect() {
        if (window.scrollY > 32 && window.innerWidth >= 768) {
            wrapperBox1.classList.add("navEffect-box1");
            navLogo.classList.add("navEffect-logo");
        } else {
            wrapperBox1.classList.remove("navEffect-box1");
            navLogo.classList.remove("navEffect-logo");
        }

        if (window.scrollY > 32 && window.innerWidth > 768) {
            navLogoSvg.classList.add("navEffect-logo-transition");
            navLogo.style.alignItems = "initial";
        } else {
            navLogoSvg.classList.remove("navEffect-logo-transition");
            navLogo.style.alignItems = "center";
        }
    }
    
    window.addEventListener("scroll", navEffect);
});
