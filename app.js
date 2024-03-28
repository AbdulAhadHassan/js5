
// chapter 17-20

// Q1
// var arr = [[],  [], [], []]


// Q2
// var arr = [[0,1,2,3], [1,0,1,2], [2,1,0,1]]
// var joinArr1 = arr[0].join(" ")
// var joinArr2 = arr[1].join(" ")
// var joinArr3 = arr[2].join(" ")

// document.write(`${joinArr1} <br> ${joinArr2} <br> ${joinArr3}`)



// Q3
// for(let i=1; i<=10; i++){
//     document.write(`${i} <br>`)
// }




// Q4
// var num = +prompt("Enter number of the table")
// var j = +prompt("Enyer the lenght of the table")

// for(let i=1; i<=j; i++ ){
//     document.write(`${num} X ${i} = ${i * num} <br>`)
// }



// Q5
// var fruits = ['apple', 'banana' ,'mango' ,'orange ' ,'strawbrrry']
// document.write(`${fruits.join(" <br> ")} <br> <br>`)
// for(let i=0; i<fruits.length; i++){
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`)
// }


// Q6

// // a
// document.write('<b> Counting; </b><br>')
// for(let i=1; i<=15; i++){
//     document.write(`${i}, `)
// }

// // b
// document.write('<br> <b> Reverse Counting; </b><br>')
// for(let i=10; i>=1; i--){
//     document.write(`${i}, `)
// }

// // c
// document.write('<br> <b> Even; </b><br>')
// for(let i=0; i<=20; i+=2){
//     document.write(`${i}, `)
// }

// // d
// document.write('<br> <b> Odd; </b><br>')
// for(let i=1; i<=20; i+=2){
//     document.write(`${i}, `)
// }

// // e
// document.write('<br> <b> Series; </b><br>')
// for(let i=2; i<=20; i+=2){
//     document.write(`${i}k, `)
// }




// Q7
// var dessert = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var userInp = prompt("Enter dessert")
// var match = false
// for(let i=1; i<dessert.length; i++){
//     if(userInp===dessert[i]){
//         match=true
//         document.write(`${userInp} is <b>available</b> at index ${i} in our bakery`)
//         break

//     }
// }
// if(match == false){
//     document.write(`We are sorry. ${userInp} is <b>not available</b> in our bakery`)

// }


// Q8
// var num = [24, 53, 78, 91, 12]
// document.write(`Array items: ${num} <br>`)
// var acen = num.sort()
// document.write(`Then largest number is ${acen[num.length-1]}`)

// Q9
// var num = [24, 53, 78, 91, 12]
// document.write(`Array items: ${num} <br>`)
// var decen = num.sort().reverse()
// document.write(`Then smallest number is ${decen[num.length-1]}`)


// Q10
// for(let i=0; i<=100; i+=5){
//     if(i >4){
//         document.write(`${i}, `)
//     }
// }

