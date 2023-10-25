//VARIABLES------------------------------------------

// FUNCIONES------------------------------------------
    //GENERAL
    const variable = (selector) => document.querySelector(selector)

    // MODO CLARO 
    const lightMode = () => {
        variable(".second-segment").classList.toggle("second-segment-light")
        variable(".header").classList.toggle("background-light")
        variable(".header-buttons-list").classList.toggle("header-buttons-list-light")
        variable(".body").classList.toggle("body-light")
        variable(".text-edition").classList.toggle("aside-light")
        variable(".mode-edition").classList.toggle("aside-light")
        variable(".url-field").classList.toggle("background-light")
        variable(".text-field-top").classList.toggle("background-light")
        variable(".text-field-bottom").classList.toggle("background-light")
        variable(".select-mode").classList.toggle("background-light")
        variable(".select-font-family").classList.toggle("background-light")
        variable(".padding-text-value").classList.toggle("background-light")
        variable(".left-align-text").classList.toggle("background-light")
        variable(".center-align-text").classList.toggle("background-light")
        variable(".right-align-text").classList.toggle("background-light")
        variable(".text-size-input").classList.toggle("background-light")
        variable(".none-contour-text").classList.toggle("background-light")
        variable(".ligth-contour-text").classList.toggle("background-light")
        variable(".dark-contour-text").classList.toggle("background-light")
        variable(".select-line-height").classList.toggle("background-light")  
    }

    //FILTROS 
    const todosLosFiltros =  () => {
        variable(".main-image").style.filter =  `brightness(${variable("#brillo-range").value}) opacity(${variable("#opacidad-range").value}) blur(${variable("#desenfoque-range").value}px) contrast(${variable("#contraste-range").value}%) grayscale(${variable("#escala-de-grises-range").value}%) hue-rotate(${variable("#hue-range").value}deg) sepia(${variable("#sepia-range").value}%) saturate(${variable("#saturado-range").value}%) invert(${variable("#negativo-range").value})`
    }

    //DOWNLOAD BUTTON
    const downloadMeme = () => {
        domtoimage.toBlob(variable("#meme-container")).then(function (blob) {
        window.saveAs(blob, "mi-meme.png")
        })
    }

// EVENTOS-------------------------------------------------

const initializeProject = () => {
        // URL CHANGE
        variable("#url-field").addEventListener ( "input", (e) => {
            variable(".main-image").style.backgroundImage =  `url(${e.target.value})`
        })

        // BUTTONS
        variable(".text-icon").addEventListener ("click", (e) => {
            variable(".text-edition").style.display = "block"
            variable(".mode-edition").style.display = "none"
        })
        variable(".image-icon").addEventListener ("click", (e) => {
            variable(".text-edition").style.display = "none"
            variable(".mode-edition").style.display = "block"
        })

        // MODO CLARO
        variable(".light-icon").addEventListener("click", () => {
            // variable(".light-icon")
            if (variable(".light-icon").innerText === "Modo claro") {
                variable(".light-icon").innerText = "Modo oscuro";
            } else {
                variable(".light-icon").innerText = "Modo claro";
                }      
        })
        variable(".light-icon").addEventListener("click", lightMode)

        // COLOR SELECTION BACKGORUND FRAMES
        variable("#background-text-color").addEventListener("input", (e) => {
            variable("#top-frame-changes").style.backgroundColor = e.target.value
            variable("#bottom-frame-changes").style.backgroundColor = e.target.value
        })

        // COLOR SELECTION FONT FRAMES
        variable("#color-text-color").addEventListener("input", (e) => {
            variable("#top-frame-changes").style.color = e.target.value
            variable("#bottom-frame-changes").style.color = e.target.value
        })

        // FILTROS
        variable("#brillo-range").addEventListener("input", todosLosFiltros)
        variable("#opacidad-range").addEventListener("input", todosLosFiltros)
        variable("#contraste-range").addEventListener("input", todosLosFiltros)
        variable("#desenfoque-range").addEventListener("input", todosLosFiltros)
        variable("#escala-de-grises-range").addEventListener("input", todosLosFiltros)
        variable("#sepia-range").addEventListener("input", todosLosFiltros)
        variable("#hue-range").addEventListener("input", todosLosFiltros)
        variable("#saturado-range").addEventListener("input", todosLosFiltros)
        variable("#negativo-range").addEventListener("input", todosLosFiltros)

        // RESET FILTERS
        variable("#default-filters-button"). addEventListener("click", () => {
            variable(".main-image").style.filter = "none"
            variable("#brillo-range").value = "0" 
            variable("#opacidad-range").value = "0"
            variable("#desenfoque-range").value = "0"
            variable("#contraste-range").value = "0" 
            variable("#escala-de-grises-range").value = "0" 
            variable("#hue-range").value = "0" 
            variable("#sepia-range").value = "0" 
            variable("#saturado-range").value = "0" 
            variable("#negativo-range").value = "0"
        })

        //TEXT INPUT AND FRAMES
        variable("#top-text-field").addEventListener("input", (e) => {
            variable("#top-frame-changes").innerText = e.target.value
        })
        variable("#bottom-text-field").addEventListener("input", (e) => {
            variable("#bottom-frame-changes").innerText = e.target.value
        })

        // FONTS SELECT
        variable("#select-font-family").addEventListener("input", (e) => {
            variable("#top-frame-changes").style.fontFamily = e.target.value
            variable("#bottom-frame-changes").style.fontFamily = e.target.value
        })

        //  CHECKMARK FRAMES
        variable("#text-visibility-top").addEventListener("change", (e)=>{
                if (e.target.checked) {
                        variable("#top-frame-changes").style.display = "none"
                } else {
                    variable("#top-frame-changes").style.display = "block"
                }
            })
        variable("#text-visibility-bottom").addEventListener("change", (e)=>{
                    if (e.target.checked) {
                        variable("#bottom-frame-changes").style.display = "none"
                } else {
                        variable("#bottom-frame-changes").style.display = "block"
                }
            })

        // CHECKARK BACKGROUND FRAMES
        variable("#background-visibility").addEventListener("change", (e)=>{
            if (e.target.checked) {
                    variable("#top-frame-changes").style.backgroundColor = "transparent"
                    variable("#bottom-frame-changes").style.backgroundColor = "transparent"
                    variable("#top-frame-changes").style.position = "absolute"
                    variable("#bottom-frame-changes").style.position = "absolute"
                    
            } else {
                variable("#top-frame-changes").style.backgroundColor = variable("#background-text-color").value
                variable("#bottom-frame-changes").style.backgroundColor = variable("#background-text-color").value
                variable("#top-frame-changes").style.position = "static"
                variable("#bottom-frame-changes").style.position = "static"
            }
        })

        // DOWNLOAD BUTTON
        variable("#download-icon").addEventListener("click", downloadMeme)

        // ALIGNMENTS BUTTONS
        variable("#left-align-text").addEventListener("click", () => {
            variable("#top-frame-changes").style.justifyContent = "left"
            variable("#bottom-frame-changes").style.justifyContent = "left"
        })
        variable("#center-align-text").addEventListener("click", () => {
            variable("#top-frame-changes").style.justifyContent = "center"
            variable("#bottom-frame-changes").style.justifyContent = "center"
        })
        variable("#right-align-text").addEventListener("click", () => {
            variable("#top-frame-changes").style.justifyContent = "right"
            variable("#bottom-frame-changes").style.justifyContent = "right"
        })

        // CONTOUR BUTTON - TEXT CONTOUR
        variable("#dark-contour-text").addEventListener("click", () => {
            variable("#top-frame-changes").style.webkitTextStroke = "2px Black"
            variable("#bottom-frame-changes").style.webkitTextStroke = "2px Black"
        })
        variable("#ligth-contour-text").addEventListener("click", () => {
            variable("#top-frame-changes").style.webkitTextStroke = "2px White"
            variable("#bottom-frame-changes").style.webkitTextStroke = "2px White"
        })
        variable("#none-contour-text").addEventListener("click", () => {
            variable("#top-frame-changes").style.webkitTextStroke = "0"
            variable("#bottom-frame-changes").style.webkitTextStroke = "0"
        })

        // FONT SIZE
        variable("#text-size-input").addEventListener("input", (e) => {
            variable("#top-frame-changes").style.fontSize = `${e.target.value}px`
            variable("#bottom-frame-changes").style.fontSize = `${e.target.value}px`
        })

        // PADDING TEXT
        variable("#padding-text-value").addEventListener("input", (e) => {
        variable("#top-frame-changes").style.padding = `${e.target.value}px`
        variable("#bottom-frame-changes").style.padding = `${e.target.value}px`
        })

        //ESPACIADO
        variable("#padding-text-value").addEventListener("input", (e) => {
            variable("#top-frame-changes").style.lineHeight = `${frameTextHeightLine.value}em`
            variable("#bottom-frame-changes").style.lineHeight = `${frameTextHeightLine.value}em`
        })

        // FONDO COLOR
        variable("#fondo-color").addEventListener("input", (e) => {
            variable(".main-image").style.backgroundColor = e.target.value
        })

        // MODE SELECT
        variable("#select-mode").addEventListener("change", (e) => {
            variable(".main-image").style.backgroundBlendMode = e.target.value
        })
}

window.addEventListener("load", initializeProject)