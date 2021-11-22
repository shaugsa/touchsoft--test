
// first letter

// const firstLetter = () => {
//     let str = prompt('Enter word',  )
//     let newStr = ''

//     for (let i = 0; i < str.length; i++) {
//         if (i == 0) {
//            newStr += str.charAt(i).toUpperCase()
//         } else {
//             newStr += str.charAt(i).toLowerCase()
//         }
//     }
//     confrim(newStr);
// }



// firstLetter();

// sayHello

// const sayHello = (name) => confirm((name !== 'Mark') ? `Hello, ${name}!` : `Hi, ${name}!`)
    
// sayHello(prompt('Введите имя', ))



// filterStrings 


const filterStrings = (arr, len) => {

    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i].length - 1 
        if (item < len) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(filterStrings(['I love JS', 'some very long string', 'hell'], 9))
console.log(filterStrings(['a', 'ab', 'abc'], 2))
console.log(filterStrings(['a', 'ab', 'abc', 'abca', 'abcab', 'abcabc'], 4))