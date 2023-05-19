// Функции

function calculate( {a, b} ) {
    let result = null;
    result = (b-a)/a*100;
    return result;
}

function deleteResult(num) {
 
    // Выбираются блок и кнопка, чтобы удалить их
    let outputBlock = document.getElementsByClassName("js-output-block " + num)[0]
    let outputFlexBtn = document.getElementsByClassName("js-output-flex-button " + num)[0]

    outputBlock.style = " padding: 0 0 0 700px" // Плавно изменяется паддинг
    outputFlexBtn.remove() // Сразу удаляется кнопка, после нажатия

    // Таймер для удаления всего блока (Сработает через 0.5 сек)
    setTimeout(() => {
        outputBlock.remove()
    }, 500); 
}


let num = 0
function result() {
    const inputANode = document.querySelector(".js-input-a")
    const inputBNode = document.querySelector(".js-input-b")

    // Поиск блока в HTML куда будет добавляться новый блок с ответами
    let Block = document.querySelector(".block")

    // Вывод чисел из строк ввода и получение результата
    const a = Number(inputANode.value)
    const b = Number(inputBNode.value)
    let result = calculate( {a, b} )

    // Проверка результата на наличие
    if (isNaN(result) === true) {
        return
    }

    // Проверка результата на целое число (если дробное, то 2 числа после запятой)
    if (Number.isInteger(result) === false) {
        result = result.toFixed(2)
    }

    result = result + "%"

    num++

    // Создание блока с результатом
    let html0 = document.createElement('div')
    html0.className = "js-output-flex " + num

    let html1 = document.createElement('h1')
    html1.className = "js-output-result " + num
    html1.textContent = result

    let html2 = document.createElement('p')
    html2.className = "js-output-a-b " + num
    html2.textContent = a + ' → ' + b

    html0.append(html1)
    html0.append(html2)

    let html4 = document.createElement('div')
    html4.className = "js-output-flex-button " + num

    let htmlBtn = document.createElement('button')
    htmlBtn.className = "js-delete-button " + num
    htmlBtn.setAttribute("onclick","deleteResult("+num+")");
    
    htmlBtn.textContent = '×'

    html4.append(htmlBtn)

    let html = document.createElement('div')
    html.className = "js-output-block " + num

    html.append(html0)
    html.append(html4)


    // Добавление блока с результатом в HTML
    Block.insertBefore(html, document.querySelectorAll(".js-output-block")[0])

    let outputBlock = document.querySelector(".js-output-block")
    document.querySelectorAll(".js-output-block")[0].style= "max-height: "+ outputBlock.scrollHeight +"px; padding: 15px; overflow: visible" // Максимальная высота блока изменяется высоту блока

    // Проверка на наличие второго результата, при его наличии он становится прозрачнее
    let nextResult = document.querySelectorAll(".js-output-result")[1]
    if (nextResult != null) {
        nextResult.style= "color: rgba(0, 0, 0, 0.4)"
        document.querySelectorAll(".js-output-a-b")[1].style= "color: rgba(0, 0, 0, 0.2)"
    } else {
        return
    }
}




// Строчки ограничивающие ввод в input до 18 символов

let inputA = document.querySelector('.js-input-a');
inputA.oninput = function(){
  this.value = this.value.substr(0, 18);
}

let inputB = document.querySelector('.js-input-b');
inputB.oninput = function(){
  this.value = this.value.substr(0, 18);
}