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
        <li><a class="text__decoration" href="gallery.html">Gallery</a></li>
        <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
        </label>
    </ul>
    `

    headerIndex.append(header)

    let main = document.createElement("div")
    main.innerHTML = `
    <div class="main__grid">
        <a class="text__decoration exam" href="https://nadianielsenseksamensopgave.netlify.app">Exam assignment - June 2022</a>
        <a class="text__decoration examtryout" href="https://examtryoutnadianielsen.netlify.app">Exam try out - June 2022</a>
        <a class="text__decoration mymovies" href="https://mymoviesnadianielsen.netlify.app/">MyMovies assigment - September 2022</a>
        <a class="text__decoration pokedex" href="https://pokedexnadianielsen.netlify.app/">Pokedex - assigment with URL-parametres - September 2022</a>
        <a class="text__decoration gridassignment" href="https://cph-architects-gridassignment-nadian.netlify.app/">A real first grid assigment -  March 2022</a>
    </div>
    <h1 class="links__websites">Links - Websites</h1>

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

