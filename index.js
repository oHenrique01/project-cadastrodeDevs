const form = document.getElementById("form")

form.addEventListener('submit', function(ev){
    ev.preventDefault()
})

const initButton = document.getElementById("initButton")
    initButton.addEventListener('click', function(){

        const div = document.getElementById("techList")
        const divTech = document.createElement("div")

        const inputTech = document.createElement("input")
        inputTech.type = "text"
        inputTech.className = "input_techOpitions"
        inputTech.placeholder = "Digite sua tecnologia..."

        //Criação de label e input
        const labelExp1 = document.createElement("label")
        labelExp1.htmlFor = "experience1" 
        labelExp1.textContent = "0-2 anos " //Adiciona texto na label

        const inputExperience1 = document.createElement("input")
        inputExperience1.type = "radio"
        inputExperience1.name = "experience"
        inputExperience1.id = "experience1"

        const labelExp2 = document.createElement("label")
        labelExp2.htmlFor = "experience2"
        labelExp2.textContent = "3-4 anos "

        const inputExperience2 = document.createElement("input")
        inputExperience2.type = "radio"
        inputExperience2.name = "experience"
        inputExperience2.id = "experience2"

        const labelExp3 = document.createElement("label")
        labelExp3.htmlFor = "experience3"
        labelExp3.textContent = "+5 anos "

        const inputExperience3 = document.createElement("input")
        inputExperience3.type = "radio"
        inputExperience3.name = "experience"
        inputExperience3.id = "experience3"

        divTech.append(inputTech, inputExperience1, labelExp1, inputExperience2, labelExp2, inputExperience3, labelExp3)
        div.appendChild(divTech)

        
    })