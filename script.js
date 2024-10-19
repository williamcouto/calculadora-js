let bttns_nums = document.getElementsByClassName('num-bttn')

// Inserindo numeros no display
function insertDisplayNums(num){
    document.querySelector('.display_result').textContent += num
}

// Limpando o Display
function clearNums(){
    document.querySelector('.display_result').textContent = ""
}

// apagar ultimo caractere

// Capturar os números que o usuario coloca
// Colocar os numeros em um array
// Quando o botão DEL for clicado, ele remove o ultimo ultimo numero

function deleteLastNum(num){
    let bttns_nums = document.querySelectorAll('.num-bttn')
    let num_captured = []

    // Capturando os numeros
        bttns_nums.forEach(button => {
            button.addEventListener('click', () => {
                // Obtem o valor númerico do botão clicado
                //const number = 
                //Adiciona o número ao array de números clicados - usar o push()
                num_captured.push(number)

                //Removendo o ultimo caractere
                num_captured.pop()
                document.querySelector('.display_result').textContent = num_captured - 1
            })
        });

}