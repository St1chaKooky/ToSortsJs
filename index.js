//todos:
//1) arrow navigation


//function which includes entire code
function main() {
    // get element using its id
    // const titleWr = document.getElementById('titleWrapper')

    // get element using anything(id, class, и т д)
    // const inpu = document.querySelector('.ways');

    // get list of elements using ...
    // const elements = document.querySelectorAll('buttton')


    function setListeners() {
        const inputs = document.querySelector('.input');
        for(let i = 0; i < inputs.children.length; i++) {
            const el = inputs.children[i];
            if(i+1 === inputs.children.length) {
                // если это последний элемент из списка
                el.oninput = function () {
                    //создаем след эл
                    const nextEl = document.createElement('div');
                    nextEl.classList.add('el');
                    const inputOfNextElement = document.createElement('input');
                    inputOfNextElement.maxLength = '1';
                    nextEl.append(inputOfNextElement);
                    inputs.append(nextEl)
                    // фокус ставим на него
                    inputOfNextElement.focus()
                    // делаем ту же процедуру для уже обновленного списка
                    setListeners()
                }
            } else {
                // если дальше еще есть че-то
                el.oninput = function(arg) {
                    if(arg.data) {
                        inputs.children[i+1].children[0].focus()
                    }
                }
            }
        }
    }
    setListeners()

    document.querySelector('.linear').onclick = function() {
        const input = document.querySelector('.input');
        const divs = input.children;
        const inputs = [];
        for (let i = 0; i < divs.length; i++) {
            const input = divs[i].children[0];
            inputs.push(input)
        }
        const values = [];
        for (let i = 0; i < inputs.length; i++) {
            const value = inputs[i].value;
            values.push(value)
        }
        const numbers = [];
        const notNumbers = [];
        for(let i = 0; i < values.length; i++) {
            if(isNaN(Number(values[i]))) {
                // не число(вернулась шляпа)
                notNumbers.push(values[i])
            } else {
                // число
                numbers.push(values[i])
            }
        }
        // мы поставили обработчик на кноапку с классом линейна сортировка => сортинруем линейным способом
        for (let i = 0; i < numbers.length; i++) {
            let indexMin = i
            for (let j = i+1; j < numbers.length; j++) {
                if (numbers[j] < numbers[indexMin]) {
                    indexMin = j
                }
            }
            let tmp = numbers[i]
            numbers[i] = numbers[indexMin]
            numbers[indexMin] = tmp
        }
        const output = document.querySelector('.output-content');
        for(let i = 0; i < numbers.concat(notNumbers).length; i++) {
            const total = numbers.concat(notNumbers);
            const p = document.createElement('p');
            p.textContent = total[i];
            output.append(p)
        }
    }
    document.querySelector('.bubble').onclick = function() {
        const input = document.querySelector('.input');
        const divs = input.children;
        const inputs = [];
        for (let i =0; i < divs.length; i++) {
            const input = divs[i].children[0];
            inputs.push(input)
        }
        const values = [];
        for (let i = 0; i < inputs.length; i++){
            const value = inputs[i].value;
            values.push(value)
        }
        const numbers = [];
        const notNumbers = [];
        for (let i = 0 ; i< values.length;i++){
            if (isNaN(Number(values[i]))){
                notNumbers.push(values[i])
            } else {
                numbers.push(values[i])
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j + 1] < numbers[j]) {
                    let tmp = numbers[j]
                    numbers[j] = numbers[j+1]
                    numbers[j+1] = tmp
                }
            }
        }
        const output = document.querySelector('.output-content')
        for (let i = 0; i< numbers.concat(notNumbers).length; i++){
            const total = numbers.concat(notNumbers);
            const p = document.createElement('p');
            p.textContent = total[i];
            output.append(p)

        }
    }
    document.querySelector('.quick').onclick = function(){
        const input = document.querySelector('.input');
        const divs = input.children;
        const inputs = [];
        for (let i = 0; i < divs.length; i++){
            const input = divs[i].children[0];
            inputs.push(input)
        }
        const values = [];
        for (let i = 0; i < inputs.length; i++){
            const value = inputs[i].value;
            values.push(value);
        }
        const numbers = []
        const NotNumbers = []
        for (let i = 0; i < values.length;i++){
            if (isNaN(Number(values[i]))){
                NotNumbers.push(values[i])
            } else {
                numbers.push(values[i])
            }
        }
        function quickSort(numbers) {
            if (numbers.length <= 1) {
                return numbers
            }
            let pivotIndex = Math.floor(numbers.length / 2);
            let pivot = numbers[pivotIndex]
            let less = []
            let greater = []
            for (let i = 0; i < numbers.length; i++) {
                if(i === pivotIndex)
                    continue
                if (numbers[i] < pivot) {
                    less.push(numbers[i])
                } else {
                    greater.push(numbers[i])
                }
            }
            return [...quickSort(less), pivot, ...quickSort(greater)]
        }
        const output = document.querySelector('.output-content')
        for (let i = 0; i< (quickSort(numbers)).concat(NotNumbers).length; i++){
            const total = (quickSort(numbers)).concat(NotNumbers);
            const p = document.createElement('p');
            p.textContent = total[i];
            output.append(p)
        }
    }
}
// function main will be called right after page was rendered
window.onload = main; // функция вызывает сама себя при загрузки сайта
