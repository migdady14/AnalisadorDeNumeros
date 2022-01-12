let numbersList = []
let num = document.querySelector('input#fnum')
let tab = document.querySelector('select#numTab')
let res = document.querySelector('div#res')

function add() {
    try {
        res.innerHTML = ''

        if (!isValidNumber(num.value)) throw 'Número inválido, tente novamente.'
        if (inList(num.value, numbersList)) throw 'Número já adicionado, tente novamente.'
        
        numbersList.push(Number(num.value))

        let newNum = document.createElement('option')
        newNum.text = `Valor ${num.value} adicionado.`
        tab.appendChild(newNum)
    } catch(e) {
        window.alert(e)
    }
    num.value = ``
    num.focus()
}

function finalizar() {
    try {
        if (numbersList.length == 0) throw 'Adicione valores antes de finalizar.'
        let total = numbersList.length
        let sum = 0
        numbersList.sort()
        for (let pos in numbersList) {
            sum = sum + numbersList[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${numbersList[total - 1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${numbersList[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${sum}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${sum/total}</p>`
    } catch(e) {
        window.alert(e)
    }
}

function refresh() {
    numbersList = []
    res.innerHTML = ``
    tab.options.length = 0
}

function isValidNumber(number) {
    if (Number(number) >= 1 && Number(number) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(number, list) {
    if (list.indexOf(Number(number)) != -1) {
        return true
    } else {
        return false
    }
}