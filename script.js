let bttnNumbers = document.querySelectorAll('[data-num-btn]')
let operator = document.querySelectorAll('[data-operator-btn]')
let currentDisplay = document.querySelector('[data-display]')
let equalBtn = document.querySelectorAll('[data-operator-equal]')
let deleteBtn = document.querySelector('[data-delete-btn]')
let resetBtn = document.querySelector('[data-reset-btn]')

class Calculator {
    constructor(equalBtn, currentDisplay, bttnNumbers,operator, deleteBtn, resetBtn){
        this.equalBtn = equalBtn
        this.currentDisplay = currentDisplay
        this.currentOperator = null
        this.currentOperand = ''
        this.bttnNumbers = bttnNumbers
        this.operator = operator
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

        this.operator.forEach(button => {
            button.addEventListener('click', () => {
            this.chooseOperator(button.textContent)
            })
        })

        this.resetBtn.addEventListener('click', () => {
            this.clearDisplay()
        })

        this.deleteBtn.addEventListener('click', () => {
            this.deleteLastNum()
        })
    }

    updateDisplay(){
        this.currentDisplay.textContent = this.currentOperand || this.previousOperand
    }

    insertNum(num){
        this.currentOperand += num
        this.updateDisplay()
    }

    clearDisplay(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.updateDisplay()
    }

    deleteLastNum(){
        this.currentOperand = this.currentDisplay.textContent.slice(0,-1)
        this.updateDisplay()
    }

    calculateNum(){
        let resultExpress;
        const prevNum = parseFloat(this.previousOperand)
        const currNum = parseFloat(this.currentOperand)

        switch(this.currentOperator){
            case '+':
            resultExpress = prevNum + currNum
            break;
        }

        this.currentOperand = resultExpress.toString()
        this.previousOperand = ''
        this.currentOperand = null
        this.updateDisplay()
    }

    chooseOperator(operator){
        if(this.currentOperand === '' || this.previousOperand != ''){
            this.calculateNum()
        }

        this.currentOperator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
}
const calc = new Calculator(equalBtn, currentDisplay, bttnNumbers,operator, deleteBtn, resetBtn)