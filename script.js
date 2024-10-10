let bttns_nums = document.querySelectorAll('.num-bttn')

// Função para adicionar resultado ao display

bttns_nums.forEach(function(button){
    button.addEventListener('click', function(){
        insertDisplayNums(textContent)
    })
})

function insertDisplayNums(num){
    document.getElementById('display_result').textContent = num
}