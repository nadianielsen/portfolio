document.addEventListener("DOMContentLoaded", function(){

    let divWrapper = document.querySelector(".wrapper")

    const headerIndex = document.createElement("header")
    headerIndex.classList.add("header")
    divWrapper.append(headerIndex)

    const mainIndex = document.createElement("main")
    mainIndex.classList.add("main")
    divWrapper.append(mainIndex)
    
    const footerIndex = document.createElement("footer")
    footerIndex.classList.add("footer")
    divWrapper.append(footerIndex)

    let header = document.createElement("nav")
    header.innerHTML = `
    <ul class="nav__list width100">
        <a class="text__decoration my__portfolio" href="index.html">My portfolio</a>
        <li><a class="text__decoration" href="#about">About</a></li>
        <li><a class="text__decoration" href="#hobby">Hobby</a></li>
        <li><a class="text__decoration" href="gallery.html">Gallery</a></li>
        <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
        </label>
        <!-- <li><a href="#contact"><i class="fa-solid fa-phone text__decoration"></i></a></li> -->
    </ul>
    `

    headerIndex.append(header)

    let main = document.createElement("div")
    main.innerHTML = `
    <section class="about__section">
        <h2 class="about__heading" id="about">About</h2>
        <p class="about__text">Hello and welcome to my portfolio. My name is Nadia Nielsen and I am 17 years old. A little information about me, I am a student at Roskilde Technical College in Roskilde and I'm taking the webdeveloper education, where I am learning about coding and programming. I've always been into the creative world, which is one of the reasons why I am taking the webdeveloper education.</p>
        <img class="photo__of__me" src="/profile-photo-gallery/brugerfoto.jfif" alt="Picture of me">
        <h3 class="hobby__heading" id="hobby">Hobby</h3>
        <p class="hobby__text">My hobby is making graphic design on my ipad. I like to photoshop pictures of celebrities and idols of my own, that I am fan of. I add stuff to the pictures or cut people out and make them be a part of pictures. </p>
        <p class="extra__text__underhobbytext">I also have an account on Instagram, where I post backgrounds and sometimes drawings of my idols and some celebrities. The reason why I have an account is for showing passion on social media and sharing it with other people who might enjoy having a background with their favorite people on their devices.</p>
        <a href="gallery.html" class="gallery__heading text__decoration">Gallery <i class="fa-solid fa-arrow-right"></i></a>
    </section>
    <div class="flex__and__scrollx__container__gallery">
        <img class="gallery__photos" src="/profile-photo-gallery/Friends - new york.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-3222.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-3406.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-3665.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-3666.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-3667.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-4091.jpg" alt="">
        <img class="gallery__photos" src="/profile-photo-gallery/IMG-4100.jpg" alt="">
    </div>
    `

    mainIndex.append(main)

    let footer = document.createElement("div")
    footer.innerHTML = `
    <div class="footer__flex">
        <i class="fa-regular fa-envelope text__decoration envelope__icon"></i>
        <p class="mail__text">nadiamarie2111@gmail.com</p>
        <a href="https://www.linkedin.com/in/nadia-nielsen-b313b6222/"><i class="fa-brands fa-linkedin linkedin__icon text__decoration"></i></a>
        <a href="https://www.facebook.com/nadia.nielsen.5817300/"><i class="fa-brands fa-facebook facebook__icon text__decoration"></i></a>
    </div>
    <div class="phone__flex">
        <i class="fa-solid fa-phone phone__icon"></i>
        <p class="phonenumber">60 66 84 87</p>
    </div>
    <div class="copyright__flex">
        <p class="copyright">©Copyright - Nadia Nielsen</p>
    </div>
    `

    footerIndex.append(footer)
})