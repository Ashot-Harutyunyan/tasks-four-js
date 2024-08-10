//   գրել ֆունկցիա, որը վերցնում է միայն զանգվածը և վերադարձնում է զանգվածի
//   ամենամեծ և ամենափոքր թվերը, ինչպես նաև ամենամեծ թվի ամենափոքր թվով աստիճանը

function maxAndmin(arg){
    if(arg instanceof Array){
      return  Math.pow(Math.max(...arg),Math.min(...arg))
    }else {
       return 'Invalid argument'
    }
}

let arr = [3, 44, 5, 66, 17, 8, 99, 10]

console.log(maxAndmin(arr))

console.log('-----------------------------------------------------------------')

//   գրել ֆունկցիա, որը վերցնում է միայն զանգվածը և թիվը, վերադարձնում է նոր զանգված
//   որի մեջ միայն զանգվածի այն թվերնեն որոնք առանց մնացորդ բաժանվում են այն թվին որը
//   տվել ենք ֆունկցային

function foo(arg, n){
    let newArr = []
    let ind = 0
    if(arg instanceof Array && typeof(n) === 'number'){
        for(let i = 0; i < arg.length -1; i++){
            if(arg[i] % n === 0){
                newArr[ind] = arg[i]
                ind++
            }
        }
        return newArr
    }else{  
        return 'invalid arg'
    }
}

console.log(foo([5, 15, 20, 30, 40, 35], 2))

console.log('-----------------------------------------------------------------')

//  գրել ռեկուրսիվ ֆունկցիա, որը կգումարի զանգվածի բոլոր թվերը և կվերադարձնի

let arr1 = [10, 10, 10, 10, 10, 10]

function amount(arg, ind = 0){
    if(ind == arg.length){
        return 0
    }
    return arr1[ind] + amount(arg, ind + 1)
}

console.log(amount(arr1))

console.log('-----------------------------------------------------------------')

//    Գրել ֆունկցիա որը կստուգի որ արգումենտը պարտադիր
//    թիվ լինի հակառակ դեպքում կվերադարձնի "invalid argument" 
//    արտահայտությունը, եթե ամեն բան ճիշտ է ապա թող 
//    վերադարձնի տրված թվի ֆակտորիալը։

function factorial(n){
    let factorial = 1
    if(typeof(n) == 'number' && n > 0){
        for(let i = 1; i <= n; i++){
            factorial *= i
        }
    }else{
        return "invalid argument"
    }

    return factorial
}

console.log(factorial(5))

console.log('-----------------------------------------------------------------')

// Напишите код, чтобы вы могли
// вызвать метод array.last() для любого массива,
// и он вернет последний элемент.
// Если в массиве нет элементов, он должен вернуть -1

Array.prototype.last = function() {
    if (this.length === 0) return -1
    else return this[this.length - 1]
}

let arr2 = [1, 2, 3]
console.log(arr2.last())

let arr3 = []
console.log(arr3.last())

console.log('-----------------------------------------------------------------')

//    Перевернуть строку Написать функцию, которая принимает строку и возвращает ее в обратном порядке.
//    Например, если входная строка "hello", то функция должна вернуть "olleh".

function flip(str){
    let newString = str.split('').reverse()
    return newString.join('')
}
 
 console.log(flip('hello'))
 
console.log('-----------------------------------------------------------------')

//    Реализовать функцию поиска дубликатов в массиве Написать функцию, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из входного массива.
//    Например, если входной массив [1, 2, 2, 3, 4, 4, 5], то функция должна вернуть [1, 2, 3, 4, 5].

function searchDuplicates(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(searchDuplicates([1, 2, 2, 3, 4, 4, 5]))

console.log('-----------------------------------------------------------------')

//    Найти первое неповторяющееся число в массиве Написать функцию, которая принимает массив чисел и возвращает первое число в массиве, которое не повторяется.
//    Например, если входной массив [1, 2, 3, 2, 4, 1], то функция должна вернуть 3.

function firstNonRepeatingNumber(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
}

console.log(firstNonRepeatingNumber([1, 2, 3, 2, 4, 1]))

console.log('-----------------------------------------------------------------')

//   Реализовать функцию, которая проверяет,
//   является ли заданное число совершенным Написать функцию,
//   которая принимает число и проверяет, является ли оно совершенным
//   (сумма всех делителей числа, кроме самого числа, равна этому числу).
//   Например, если входное число 6, то функция должна вернуть true.

function perfectNumber(n){
    if(typeof n !== 'number'){
        return 'invalid argument'
    }
    let count = 0
    for(let i = 0; i < n; i++){
        if(n % i === 0){
            count += i
        }
    }
    return count == n
}

console.log(perfectNumber(6))
console.log(perfectNumber(7))
console.log(perfectNumber('10'))

console.log('-----------------------------------------------------------------')

// Напишите функцию, которая находит пропущенное число в массиве,
// содержащем числа от 1 до n

function missingNumber(arr){
    if(!Array.isArray(arr)){
        return 'invalid argument'
    }
    arr.forEach((e)=>{
        if(typeof e !== 'number'){
            return 'the array must contain only numbers'
        }
    })

    let elements = []
    let length = arr.length

    for(let i = 1; i < length + 1; i++){
        if(!arr.includes(i)){
            elements.push(i)  
            length++
        }
    }

    return elements
}

console.log(missingNumber([1,2,8,3,5,10,7,6]))

console.log('-----------------------------------------------------------------')

// Учитывая массив строк-слов, верните первую палиндромную строку в массиве.
// Если такой строки нет, верните пустую строку «».
// Строка является палиндромной, если она читается одинаково и вперед, и назад.

function arrStrings(arr) {
    if (!Array.isArray(arr)) {
        return 'invalid argument';
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'string') {
            return 'the array must contain only strings';
        }else if (arr[i].split('').reverse().join('').toUpperCase() === arr[i].toUpperCase()) {
            return arr[i]
        }
    }

    return '<< >>'
}

console.log(arrStrings(['laborum', 'iusto', 'Anna', 'totam',]))
console.log(arrStrings(['laborum', 'iusto', 'labore', 'totam',]))

console.log('-----------------------------------------------------------------')

// Учитывая целое число n, верните true, если оно является степенью двойки.
// В противном случае верните false

function powerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(powerOfTwo(8))
console.log(powerOfTwo(3))
console.log(powerOfTwo(16))

console.log('-----------------------------------------------------------------')

// Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// И метод getFullName() - имя и фамиля работника.

class Worket {
    constructor(name, surname, rete, days){
        this.name = name
        this.surname = surname
        this.rete = rete
        this.days = days
    }
    getSalary(){
        return `employee salary ${this.name} ${+this.rete * this.days}$`
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}

const employeeOne = new Worket('Anita', 'Jacobs', 25, 60)
const employeeTwo = new Worket('Kaylee', 'Rich', 30, 40)
const employeeThree = new Worket('Gregory', 'Dickson', 15, 90)


console.log(employeeOne)
console.log(employeeOne.getFullName())
console.log(employeeOne.getSalary())
console.log(employeeTwo)
console.log(employeeTwo.getFullName())
console.log(employeeTwo.getSalary())
console.log(employeeThree)
console.log(employeeThree.getFullName())
console.log(employeeThree.getSalary())

console.log('-----------------------------------------------------------------')

// Напишите новый класс Boss, этот класс наследуется от класса Worker зи прошлого задания. 
// Появляется новые свойство: workers - количество работников. И зарплата считается по другому:
// произведение (умножение) ставки rate на количество отработанных дней и на количество работников

class Boss extends Worket {
    constructor(name, surname, rete, days, workers){
        super(name, surname, rete, days)
        this.workers = workers
    }
    getSalary(){
        return `employee salary ${this.name} ${+this.rete * this.days * this.workers}$`
    }
}

const boss = new Boss('David', 'Harding', 35, 90, 3)

console.log(boss)
console.log(boss.getFullName())
console.log(boss.getSalary())