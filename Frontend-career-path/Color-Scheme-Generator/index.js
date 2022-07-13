
    let colorArr = []
    
    function renderColors(){
          //I have deleted the # and at the same time capitalize the value to get the same format the API alows
        let  colorHex =  document.getElementById("color-hex").value.slice(1).toUpperCase()
        let colorMode =  document.getElementById("color-mode").value
        /** __________info panel___________________ */
        document.getElementById("info-copy").textContent= "Click the code to copy"
        /** to change title color */
        document.getElementById("title").style.color = document.getElementById("color-hex").value
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${colorMode}&count=5`, {}) 
            .then(response => response.json())
            .then(data => {
            for (let i=0; i < data.colors.length; i++){
                colorArr.push(data.colors[i].hex.value)
            }
            const myColors = colorArr.map(color =>{
                return `<div class=${"color-info"}>
                            <div class=${"palete"} style="background:${color}"></div>
                            <input class=${"cod-color"} 
                                size="7" value=${color} 
                                onClick="
                                    copiedCod();
                                    this.select();
                                    document.execCommand('copy');
                                ">
                            </input>
                        </div>
                        `
                })
                document.getElementById("color-schemes").innerHTML = myColors.join(" ")
            })
    }
    renderColors()
    document.getElementById("colors-form").addEventListener("submit", function(e){
        colorArr = []
        e.preventDefault()
        renderColors()
    })
    
function copiedCod(){
    document.getElementById("info-copy").textContent= "Copied!!"
}
    