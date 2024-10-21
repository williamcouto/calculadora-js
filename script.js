let bttns_nums = document.getElementsByClassName('num-bttn')

// Inserindo numeros no display
function insertDisplayNums(num){
    document.querySelector('.display_result').textContent += num
}

// Limpando o Display
function clearNums(){
    document.querySelector('.display_result').textContent = ""
}

// Função para apgar o ultimo caractere
function deleteLastNum(){
    let display = document.querySelector('.display_result')
    let displayAtual = display.textContent

    if(displayAtual.length > 0){
        let displayNums = displayAtual.substring(0, displayAtual.length - 1)
        display.textContent = displayNums
    } 
}