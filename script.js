let bttns_nums = document.getElementsByClassName('num-bttn')

for(let i = 0; i < bttns_nums.length; i++){
    bttns_nums[i].addEventListener('click', function(){
        insertDisplayNums(bttns_nums[i].textContent)
    })
}

function insertDisplayNums(num){
    document.querySelector('.display_result').textContent += num
}

// Limpando o Display
function clearNums(){
    document.querySelector('.display_result').textContent = ""
}