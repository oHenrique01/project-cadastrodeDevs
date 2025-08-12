const addTechBtn = document.getElementById('addTechBtn');
const devForm = document.getElementById('devForm');
const developers = [];
let inputCount = 0;

addTechBtn.addEventListener('click', function(ev){
    ev.preventDefault()

    inputCount++

    const nameDev = document.getElementById("name").value
    if(nameDev === "") {
        alert("Por favor preencha seu nome")
        return
    } 

    const ul = document.getElementById("stackInputs")
    const li = document.createElement('li')        

    //Criando input de tecnologias
        const techLabel = document.createElement('label')
        techLabel.textContent = "Tecnologia: "

        const nameTech = document.createElement('input')
        nameTech.type = "text"
        nameTech.placeholder = "Digite a tecnologia..."
        nameTech.id = `tech${inputCount}-name`
        techLabel.htmlFor = nameTech.id

    //Criando campo de experiencias
    const radioName = `exp-${inputCount}`  

    const labelExp1 = document.createElement('label')
    labelExp1.textContent = "  0-2 anos "

    const expTech1 = document.createElement('input')
    expTech1.type = "radio"
    expTech1.id = `experiencia1-${inputCount}`
    expTech1.name = radioName
    labelExp1.htmlFor = expTech1.id

    const labelExp2 = document.createElement('label')
    labelExp2.textContent = " 3-4 anos "

    const expTech2 = document.createElement('input')
    expTech2.type = "radio"
    expTech2.id = `experiencia2-${inputCount}`
    expTech2.name = radioName
    labelExp2.htmlFor = expTech2.id

    const labelExp3 = document.createElement('label')
    labelExp3.textContent = " +5 anos  "

    const expTech3 = document.createElement('input')
    expTech3.type = "radio"
    expTech3.id = `experiencia3-${inputCount}`
    expTech3.name = radioName
    labelExp3.htmlFor = expTech3.id

    //Criando botão remover tecnologia
        const removeTechBtn = document.createElement('button')
        removeTechBtn.type = "button"
        removeTechBtn.textContent = " Excluir "
        removeTechBtn.addEventListener('click', function(){
            li.remove()
        })
        
        li.append(techLabel, nameTech, 
            expTech1, labelExp1 ,
            expTech2, labelExp2,
            expTech3, labelExp3,
            removeTechBtn)
        ul.appendChild(li)

})

const registerDev = document.getElementById("check")
registerDev.addEventListener('click', function(ev){
    ev.preventDefault()

    const nameDev = document.getElementById("name").value
    if(nameDev === ""){
        alert("Por favor preencha seu nome.")
    }

    const stackInputs = document.getElementById('stackInputs')
    if(stackInputs.length === 0) {
        alert("Adicione pelo menos uma tecnologia.")
    }

    const devList = []

    const techItens = stackInputs.querySelectorAll('li')
    techItens.forEach(item => {
        const nameTech = item.querySelector('input[type="text"]').value
        if(nameTech === ""){
            alert("Adicione pelo menos uma tecnologia.")
            return
        }
        const selectedExp = item.querySelector('input[type="radio"]:checked')
        if(!selectedExp){
            alert("Informe seu temopo de experiência.")
            return
        }

        const expTime = selectedExp.value
        
        devList.push({
            tecnologia: nameTech,
            experiencia: expTime
        })

        developers.push({
            nome: nameDev,
            tecnologias: devList
        })


        console.log(developers)
    });
    
})





