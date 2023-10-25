const variable = (selector) => document.querySelector(selector)

// URL CHANGE
variable("#url-field").addEventListener ( "input", (e) => {
    variable(".main-image").style.backgroundImage =  `url(${e.target.value})`
})



// BUTTONS
// const imageMenu = document.querySelector(".image-icon")
// const textMenu = document.querySelector(".text-icon")
// const imageMenuButton= document.querySelector(".mode-edition")
// const textMenuButton= document.querySelector(".text-edition")

variable(".text-icon").addEventListener ("click", (e) => {
    variable(".text-edition").style.display = "block"
    variable(".mode-edition").style.display = "none"
})
variable(".image-icon").addEventListener ("click", (e) => {
    variable(".text-edition").style.display = "none"
    variable(".mode-edition").style.display = "block"
})

// imageMenu.addEventListener("click", ()=>{
//     imageMenuButton.classList.toggle("display-visibility-image")
//     imageMenuButton.style.zIndex = 15
//     textMenuButton.style.zIndex = 8
// })
// textMenu.addEventListener("click", ()=>{
//     textMenuButton.classList.toggle("display-visibility-text")
//     textMenuButton.style.zIndex = 15
//     imageMenuButton.style.zIndex = 8
// })
// ----------------------------
// MODO CLARO

variable(".light-icon").addEventListener("click", () => {
    // variable(".light-icon")
    if (variable(".light-icon").innerText === "Modo claro") {
        variable(".light-icon").innerText = "Modo oscuro";
    } else {
        variable(".light-icon").innerText = "Modo claro";
        }      
})

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
variable(".light-icon").addEventListener("click", lightMode)
// const colorMode = document.querySelector(".light-icon")
// function toggleTittle() {
//     if (colorMode.innerHTML === "Modo claro") {
//         colorMode.innerHTML = "Modo oscuro";
//     } else {
//         colorMode.innerHTML = "Modo claro";
//     }
//   }
// colorMode.addEventListener("click", () => {
//     const segmentColor = document.querySelector(".second-segment").classList.toggle("second-segment-light")
//     const headerColor = document.querySelector(".header").classList.toggle("background-light")
//     const headerIconsColor = document.querySelector(".header-buttons-list").classList.toggle("header-buttons-list-light")
//     const bodyColor = document.querySelector(".body").classList.toggle("body-light")
//     const asideTextColor = document.querySelector(".text-edition").classList.toggle("aside-light")
//     const asideImageColor = document.querySelector(".mode-edition").classList.toggle("aside-light")
//     const inputColorLight = document.getElementById("url-field").classList.toggle("background-light")
//     const inputTopTextLight = document.querySelector(".text-field-top").classList.toggle("background-light")
//     const inputBottomTextLight = document.querySelector(".text-field-bottom").classList.toggle("background-light")
//     const selectMode = document.getElementById("select-mode").classList.toggle("background-light")
//     const selectFontFamily = document.getElementById("select-font-family").classList.toggle("background-light")
//     const paddingTextValue = document.getElementById("padding-text-value").classList.toggle("background-light")
//     const leftAlignText = document.getElementById("left-align-text").classList.toggle("background-light")
//     const centerAlignText = document.getElementById("center-align-text").classList.toggle("background-light")
//     const rightAlignText = document.getElementById("right-align-text").classList.toggle("background-light")
//     const textSizeInput = document.getElementById("text-size-input").classList.toggle("background-light")
//     const noneContourText = document.getElementById("none-contour-text").classList.toggle("background-light")
//     const ligthContourText = document.getElementById("ligth-contour-text").classList.toggle("background-light")
//     const darkContourText = document.getElementById("dark-contour-text").classList.toggle("background-light")
//     const selectLineHeight = document.getElementById("select-line-height").classList.toggle("background-light")  
// })


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


// const colorBackgroundSelection = document.getElementById("background-text-color")
// const colorFontSelection = document.getElementById("color-text-color")
// const topFrameMeme = document.querySelector(".top-text")
// const bottomFrameMeme = document.querySelector(".bottom-text")

// const colorFontFrames = (e) => {
//     const colorFondoFont = e.target.value;
//     topFrameMeme.style.color = colorFondoFont;
//     bottomFrameMeme.style.color = colorFondoFont;
// }
// colorFontSelection.addEventListener(`input`, (e) => colorFontFrames(e))
// const colorBackgroundFrames = (e) => {
//     const colorFondoBackground = e.target.value;
//     topFrameMeme.style.backgroundColor = colorFondoBackground;
//     bottomFrameMeme.style.backgroundColor = colorFondoBackground;
// }
// colorBackgroundSelection.addEventListener(`input`, (e) => colorBackgroundFrames(e))




// FILTROS
 

const todosLosFiltros =  () => {
    variable(".main-image").style.filter =  `brightness(${variable("#brillo-range").value}) opacity(${variable("#opacidad-range").value}) blur(${variable("#desenfoque-range").value}px) contrast(${variable("#contraste-range").value}%) grayscale(${variable("#escala-de-grises-range").value}%) hue-rotate(${variable("#hue-range").value}deg) sepia(${variable("#sepia-range").value}%) saturate(${variable("#saturado-range").value}%) invert(${variable("#negativo-range").value})`
}
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


// const inputBrightness = document.querySelector("#brillo-range")
// const inputOpacity =document.querySelector("#opacidad-range")
// const inputContrast =document.querySelector("#contraste-range")
// const inputBlur =document.querySelector("#desenfoque-range")
// const inputGrayscale =document.querySelector("#escala-de-grises-range")
// const inputSepia =document.querySelector("#sepia-range")
// const inputHueRotate =document.querySelector("#hue-range")
// const inputSaturate =document.querySelector("#saturado-range")
// const inputInvert =document.querySelector("#negativo-range")
// const filtros = (e) => {
//     console.log(e.target.value)
//     mainImage.style.filter = `brightness(${inputBrightness.value}) opacity(${inputOpacity.value}) blur(${inputBlur.value}px) contrast(${inputContrast.value}%) grayscale(${inputGrayscale.value}%) hue-rotate(${inputHueRotate.value}deg) sepia(${inputSepia.value}%) saturate(${inputSaturate.value}%) invert(${inputInvert.value})`
// }
// inputBrightness.addEventListener(`input`, (e) => filtros(e))
// inputOpacity.addEventListener(`input`, (e) => filtros(e))
// inputContrast.addEventListener(`input`, (e) => filtros(e))
// inputBlur.addEventListener(`input`, (e) => filtros(e))
// inputGrayscale.addEventListener(`input`, (e) => filtros(e))
// inputSepia.addEventListener(`input`, (e) => filtros(e))
// inputHueRotate.addEventListener(`input`, (e) => filtros(e))
// inputSaturate.addEventListener(`input`, (e) => filtros(e))
// inputInvert.addEventListener(`input`, (e) => filtros(e))

//TEXT INPUT AND FRAMES

variable("#top-text-field").addEventListener("input", (e) => {
    variable("#top-frame-changes").innerText = e.target.value
})
variable("#bottom-text-field").addEventListener("input", (e) => {
    variable("#bottom-frame-changes").innerText = e.target.value
})



// text in frames
// const topFrameText = document.querySelector("#top-frame-changes")
// const bottomFrameText = document.querySelector("#bottom-frame-changes")
// const topTextInput = document.querySelector("#top-text-field")
// const bottomTextInput = document.querySelector("#bottom-text-field")
// topTextInput.oninput = () => {
//     topFrameText.innerHTML = topTextInput.value
// }
// bottomTextInput.oninput = ()=>{
//     bottomFrameText.innerHTML = bottomTextInput.value
// }

// FONTS SELECT

variable("#select-font-family").addEventListener("input", (e) => {
    variable("#top-frame-changes").style.fontFamily = e.target.value
    variable("#bottom-frame-changes").style.fontFamily = e.target.value
})

// const selectFontFamily = document.querySelector("#select-font-family")
// const fontSelected = () => {
//     topFrameText.style.fontFamily = `${selectFontFamily.value}`
//     bottomFrameText.style.fontFamily = `${selectFontFamily.value}`
// }



// selectFontFamily.addEventListener("change", () => fontSelected())
// reset button
// function resetFunction() {
//     const resetButton = document.querySelector("#aside-form").reset()
//     console.log("chifunchono")
// }


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

//  const frameTopCheckBox = document.querySelector("#text-visibility-top")
//  const frameBottomCheckBox = document.querySelector("#text-visibility-bottom")


//  frameTopCheckBox.addEventListener("change", ()=>{
//             if (frameTopCheckBox.checked) {
//                 topFrameText.classList.add("frame-checkbox");
//         } else {
//                 topFrameText.classList.remove("frame-checkbox");
//         }
//  } )
//  frameBottomCheckBox.addEventListener("change", ()=>{
//             if (frameBottomCheckBox.checked) {
//                 bottomFrameText.classList.add("frame-checkbox");
//         } else {
//                 bottomFrameText.classList.remove("frame-checkbox");
//         }
// } )

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
// variable("#top-frame-changes").style.classList.remove("frame-checkbox")
// variable("#bottom-frame-changes").style.classList.remove("frame-checkbox")


// const backgroundFramesVisibility = document.querySelector("#background-visibility")
// backgroundFramesVisibility.addEventListener("change", ()=>{
//         if (backgroundFramesVisibility.checked) {
//             topFrameText.classList.add("top-position-frame");
//             console.log("activo");
//         } else {
//             topFrameText.classList.remove("top-position-frame");
//          }
// } )
// backgroundFramesVisibility.addEventListener("change", ()=>{
//         if (backgroundFramesVisibility.checked) {
//             bottomFrameText.classList.add("bottom-position-frame");
//        } else {
//             bottomFrameText.classList.remove("bottom-position-frame");
//             console.log("funchiono2");
//        }
// } )


// DOWNLOAD BUTTON

    const downloadMeme = () => {
    domtoimage.toBlob(variable("#meme-container")).then(function (blob) {
    window.saveAs(blob, "mi-meme.png")
    })
}

    variable("#download-icon").addEventListener("click", downloadMeme)

// const downloadButton = document.querySelector("#download-icon")
// const memeImage = document.querySelector("#meme-container")
// downloadButton.addEventListener("click", () => downloadMeme())
// const downloadMeme = () => {
//     domtoimage.toBlob(memeImage).then(function (blob) {
//     window.saveAs(blob, "mi-meme.png");
//     });
// };




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

// const leftAlignment = document.querySelector("#left-align-text")
// const centertAlignment = document.querySelector("#center-align-text")
// const rightAlignment = document.querySelector("#right-align-text")
// leftAlignment.addEventListener("click", () => {
//     topFrameText.style.justifyContent = "left";
//     bottomFrameText.style.justifyContent = "left";
// })
// centertAlignment.addEventListener("click", () => {
//     topFrameText.style.justifyContent = "center";
//     bottomFrameText.style.justifyContent = "center";
// })
// rightAlignment.addEventListener("click", () => {
//     topFrameText.style.justifyContent = "right";
//     bottomFrameText.style.justifyContent = "right";
// })


// contour button - text-contour

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

// const buttonContourDark = document.querySelector("#dark-contour-text")
// buttonContourDark.onclick = ()=>{
//     topFrameText.style.webkitTextStroke = "2px Black";
//     bottomFrameText.style.webkitTextStroke = "2px Black";
// }
// const buttonContourLight = document.querySelector("#ligth-contour-text")
// buttonContourLight.onclick = ()=>{
//     topFrameText.style.webkitTextStroke = "2px White";
//     bottomFrameText.style.webkitTextStroke = "2px White";
// }
// const buttonContourNone = document.querySelector("#none-contour-text")
// buttonContourNone.onclick = ()=>{
//     topFrameText.style.webkitTextStroke = "0";
//     bottomFrameText.style.webkitTextStroke = "0";
// }

// FONT SIZE
    variable("#text-size-input").addEventListener("input", (e) => {
        variable("#top-frame-changes").style.fontSize = `${e.target.value}px`
        variable("#bottom-frame-changes").style.fontSize = `${e.target.value}px`
    })
// const selectFontSize = document.querySelector("#text-size-input")
// const fontSizeSelected = () => {
//     topFrameText.style.fontSize = `${selectFontSize.value}px`
//     bottomFrameText.style.fontSize = `${selectFontSize.value}px`
// }
// selectFontSize.addEventListener("change", () => fontSizeSelected())


// PADDING TEXT
 variable("#padding-text-value").addEventListener("input", (e) => {
    variable("#top-frame-changes").style.padding = `${e.target.value}px`
    variable("#bottom-frame-changes").style.padding = `${e.target.value}px`
 })

// const frameTextPadding = document.querySelector("#padding-text-value")
// const paddingText = () => {
//     topFrameText.style.fontSize = `${frameTextPadding.value}px`
//     bottomFrameText.style.fontSize = `${frameTextPadding.value}px`
// }

//ESPACIADO

variable("#padding-text-value").addEventListener("input", (e) => {
    variable("#top-frame-changes").style.lineHeight = `${frameTextHeightLine.value}em`
    variable("#bottom-frame-changes").style.lineHeight = `${frameTextHeightLine.value}em`
 })
// frameTextPadding.addEventListener("change", () => paddingText())
// lineheight
// const frameTextHeightLine = document.querySelector("#select-line-height")
// const lineHeightText = () => {
//     topFrameText.style.lineHeight = `${frameTextHeightLine.value}em`
//     bottomFrameText.style.lineHeight = `${frameTextHeightLine.value}em`
// }



// frameTextHeightLine.addEventListener("change", () => lineHeightText())




// image background color
// FONDO COLOR

variable("#fondo-color").addEventListener("input", (e) => {
    variable(".main-image").style.backgroundColor = e.target.value
})

// const backgrounImageColorPicker = document.querySelector("#fondo-color")
// const colorBackgroundImage = (e) => {
//         const backgroundColorValue = e.target.value;
//         mainImage.style.backgroundColor = `${backgroundColorValue}`;
//         console.log(backgroundColorValue);
//     }
// backgrounImageColorPicker.addEventListener(`input`, (e) => colorBackgroundImage(e))
// mod image color
// const backgrounImageModeSelect = document.querySelector("#select-mode")
// backgrounImageModeSelect.addEventListener("change", () => modeSelected())
// const modeSelected = () => {
//     console.log(backgrounImageModeSelect.value);
//     mainImage.style.backgroundBlendMode = `${backgrounImageModeSelect.value}`;
// }