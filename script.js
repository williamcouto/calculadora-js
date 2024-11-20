let bttnNum = document.querySelectorAll('[data-num-btn]')
let operatorBttn = document.querySelectorAll('[data-operator-btn]')
let currentDisplay = document.querySelector('[data-display]')
let equalBtn = document.querySelectorAll('[data-operator-equal]')
let deleteBtn = document.querySelector('[data-delete-btn]')
let resetBtn = document.querySelector('[data-reset-btn]')

class Calculator {
    constructor(equalBtn, currentDisplay, bttns_nums, operatorBttn){
        this.equalBtn = equalBtn
        this.currentDisplay = currentDisplay
        this.bttns_nums = bttns_nums
        this.operatorBttn = operatorBttn
        this.iniciarCalc()
    }

    iniciarCalc(){
        this.bttns_nums.forEach(button => {
            button.addEventListener('click', () => {
                this.insertNum(button.textContent)
            })
        });
    }

    clearNums(){
        this.currentDisplay.textContent = ""
    }

    insertNum(num){
        this.currentDisplay.textContent += num
    }


}