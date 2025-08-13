const addTechBtn = document.getElementById('addTechBtn');
const devForm = document.getElementById('devForm');
const developers = [];
let inputCount = 0;

addTechBtn.addEventListener('click', function(ev){
    ev.preventDefault()


    const nameDev = document.getElementById("name").value
    if(nameDev === "") {
        alert("Por favor preencha seu nome")
        return
    } 

    const stackInputs = document.getElementById("stackInputs")
    const newRow = document.createElement('li') 
    newRow.type = "none"
    newRow.className = "li-TechAndExp"
    const rowIndex = inputCount
    inputCount++       
    newRow.id = "inputRow-" + rowIndex

    //Criando input de tecnologias
        const techID = `tech-${rowIndex}`
        const techLabel = document.createElement('label')
        techLabel.htmlFor = techID

        const techInput = document.createElement('input')
        techInput.type = "text"
        techInput.name = "tech"
        techInput.placeholder = "Digite a tecnologia..."
        techInput.className = "tech-input"
        techInput.id = techID
        

    //Criando campo de experiencias
    const expLabel = document.createElement('span')
    expLabel.innerText = " Experiência:  "

    const expTech1ID = `exp1-${rowIndex}`  

    const expTech1 = document.createElement('input')
    expTech1.type = "radio"
    expTech1.name = "exp-" + rowIndex
    expTech1.value = "0-2 anos"
    expTech1.id = expTech1ID

    const labelExp1 = document.createElement('label')
    labelExp1.innerText = "  0-2 anos "
    labelExp1.htmlFor = expTech1ID

    const expTech2ID = `exp2-${rowIndex}`  

    const expTech2 = document.createElement('input')
    expTech2.type = "radio"
    expTech2.name = "exp-" + rowIndex
    expTech2.value = "3-4 anos"
    expTech2.id = expTech2ID

    const labelExp2 = document.createElement('label')
    labelExp2.innerText = "  3-4 anos "
    labelExp2.htmlFor = expTech2ID

    const expTech3ID = `exp3-${rowIndex}`  

    const expTech3 = document.createElement('input')
    expTech3.type = "radio"
    expTech3.name = "exp-" + rowIndex
    expTech3.value = "+5 anos"
    expTech3.id = expTech3ID

    const labelExp3 = document.createElement('label')
    labelExp3.innerText = "  +5 anos "
    labelExp3.htmlFor = expTech3ID


    //Criando botão remover tecnologia
        const removeTechBtn = document.createElement('button')
        removeTechBtn.type = "button"
        removeTechBtn.textContent = " Excluir "
        removeTechBtn.className = "btn-removeTech"
        removeTechBtn.addEventListener('click', function(){
            newRow.remove()
        })
        
        newRow.append(techLabel, techInput, 
            expLabel,
            expTech1, labelExp1 ,
            expTech2, labelExp2,
            expTech3, labelExp3,
            removeTechBtn)

        stackInputs.appendChild(newRow)
})

devForm.addEventListener('submit', function(ev){
    ev.preventDefault()

  const devNameInput = document.getElementById('name')
  const devName = devNameInput.value.trim()

  if (!devName) {
    alert('Informe o nome do desenvolvedor.')
    return
  }

  const stackInputs = document.getElementById('stackInputs')
  const techRows = stackInputs.querySelectorAll('li')

  if (techRows.length === 0) {
    alert('Adicione pelo menos uma tecnologia.')
    return
  }

  const devList = []

  techRows.forEach(function (row) {
    const techName = row.querySelector("input[name='tech']").value.trim()
    const selectedExp = row.querySelector("input[type='radio']:checked")

    if (!techName) {
      alert('Informe a tecnologia.')
      return
    }

    if (!selectedExp) {
      alert('Informe seu tempo de experiência.')
      return
    }

    devList.push({
      name: devName,
      tech: techName,
      exp: selectedExp.value
    })
  })

  developers.push(...devList)

  console.log('--- Lista de Desenvolvedores ---')
  devList.forEach(dev => {
    console.log(`Desenvolvedor: ${dev.name} | Tecnologia: ${dev.tech} | Experiência: ${dev.exp}`)
  })

  devNameInput.value = ''
  stackInputs.innerHTML = ''
})





