const colourBtn = document.getElementById('colour-btn')
const colourForm = document.getElementById('scheme-form')
const schemeDiv =  document.getElementById('output-colours')
const hexDiv =  document.getElementById('output-hex')

colourBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const formData = new FormData(colourForm)
    
    const color = formData.get('color').replace('#',"")
    const scheme = formData.get('scheme-select')
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&format=json`
    console.log(url)
    fetch(url, {
        headers:{"Content-Type":"application/json"}
    })
        .then(res => res.json())
        .then( data => {
            
            console.log(data.colors[0].hex.value)
            const imgHtml =  `
                <span>${data.colors[0].hex.value}<span>
                <span>${data.colors[1].hex.value}<pspan>
                <span>${data.colors[2].hex.value}<span>
                <span>${data.colors[3].hex.value}<span>
                <span>${data.colors[4].hex.value}<span>
                 `
            hexDiv.innerHTML = imgHtml
            schemeDiv.style.backgroundImage = `url(${data.image.bare})`
                
            
        })
        
})

