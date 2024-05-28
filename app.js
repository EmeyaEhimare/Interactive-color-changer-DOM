document.addEventListener('DOMContentLoaded', () => {
    
    const button = document.querySelector('#change-color-btn')
    const display = document.querySelector('#color-box')

    function randomColor(){
        let red = Math.floor(Math.random() * 255 + 1)
        let green = Math.floor(Math.random() * 255 + 1)
        let blue = Math.floor(Math.random() * 255 + 1)

        return `rgb(${red}, ${green}, ${blue})`

        
    }

    button.addEventListener('click', () => {
        display.style.backgroundColor = randomColor()
    } )


    
})