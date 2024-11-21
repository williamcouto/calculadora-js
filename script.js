let bttnNumbers = document.querySelectorAll('[data-num-btn]')
let operatorBttn = document.querySelectorAll('[data-operator-btn]')
let currentDisplay = document.querySelector('[data-display]')
let equalBtn = document.querySelectorAll('[data-operator-equal]')
let deleteBtn = document.querySelector('[data-delete-btn]')
let resetBtn = document.querySelector('[data-reset-btn]')

class Calculator {
    constructor(equalBtn, currentDisplay, bttnNumbers, operatorBttn, deleteBtn, resetBtn){
        this.equalBtn = equalBtn
        this.currentDisplay = currentDisplay
        this.bttnNumbers = bttnNumbers
        this.operatorBttn = operatorBttn
        this.deleteBtn = deleteBtn
        this.resetBtn = resetBtn
        this.iniciarCalc()
    }

    iniciarCalc(){
        this.bttnNumbers.forEach(button => {
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

    deleteLastNum(){
        if(this.currentDisplay.textContent.length > 0){
            this.currentDisplay.textContent = this.currentDisplay.textContent.slice(0, -1)
        }
    }
}

// Testando calculadora
const calc = new Calculator(equalBtn, currentDisplay, bttnNumbers, operatorBttn, deleteBtn, resetBtn)

resetBtn.addEventListener('click', () => {
    calc.clearNums()
})

deleteBtn.addEventListener('click', () => {
    calc.deleteLastNum()
})