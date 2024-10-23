alert("hola")
let button =  document.querySelector("#button")
let forms = document.querySelectorAll(".inputs")

forms.forEach((content)=>{
    button.addEventListener("click", ()=>{
        if(!content.checkValidity()){
            content.style.border= "2px solid red"
        } else{
            content.style.border= "1px solid #D3D3D3"
        }
    })

    content.addEventListener("input", () => {
        content.style.border = "1px solid #D3D3D3";
    });
})