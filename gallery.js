document.addEventListener("DOMContentLoaded", function(){

    let divWrapperGallery = document.querySelector(".wrapper__gallery")

    const headerIndex = document.createElement("header")
    headerIndex.classList.add("header")
    divWrapperGallery.append(headerIndex)

    const mainIndex = document.createElement("main")
    mainIndex.classList.add("main")
    divWrapperGallery.append(mainIndex)
    
    const footerIndex = document.createElement("footer")
    footerIndex.classList.add("footer")
    divWrapperGallery.append(footerIndex)

    let headerGallery = document.createElement("nav")
    headerGallery.innerHTML = `
    <ul class="nav__list">
        <li><a class="text__decoration my__portfolio" href="index.html">My portfolio</a></li>
        <li><a class="text__decoration websites" href="web.html">Websites</a></li>
        <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
        </label>
    </ul>
    `
    headerIndex.append(headerGallery)

    let mainGallery = document.createElement("div")
    mainGallery.innerHTML = `
    <div class="main__grid">
        <h1 class="drawings__heading">Drawings</h1>
        <div class="gallery__scrollx drawings">
            <img class="photos" src="/profile-photo-gallery/IMG-3222.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-3406.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-3665.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-3666.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-3667.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4591.jpg" alt="">
        </div>
        <h2 class="posters__heading">Posters</h2>
        <div class="gallery__scrollx posters">
            <img class="photos" src="/profile-photo-gallery/IMG-4091.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4100.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4105.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4130.jpg" alt="">
            <img  class="photos"src="/profile-photo-gallery/IMG-4149.jpg" alt="">
    </div>
    <h3 class="wallpapers__heading">Wallpapers</h3>
        <div class="gallery__scrollx wallpapers">
            <img class="photos" src="/profile-photo-gallery/IMG-4607.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/Monsta x - Playlist Cover.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4926.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4843.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4841.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-5016.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-4999.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/IMG-5004.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/Sam and Colby wallpaper - 3-11-2021.jpg" alt="">
            <img class="photos" src="/profile-photo-gallery/Wallpaper 19-1-2022 - Sam.jpg" alt="">
    </div>
    `
    mainIndex.append(mainGallery)

    let footerGallery = document.createElement("div")
    footerGallery.innerHTML = `
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

    footerIndex.append(footerGallery)

})