import createWordSlider from './scrolling-text.js'
import mainStyles from './main-styles.css'

let scrollTextContainer = document.querySelector('.scroll-text-container');
let scrollTextList = document.querySelectorAll('.scroll-test')


window.addEventListener('load',()=>{
    createWordSlider(scrollTextContainer, scrollTextList)
})
