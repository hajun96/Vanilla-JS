// const a = 10
// const b = 20
// let myName = 'hajun'

// console.log(a+b)
// console.log(a*b)
// console.log(a/b)

// console.log(' my name is ' + myName)

// myName = 'JEON'

// console.log(' my name is ' + myName)   

// const > 후에 변경 불가 let >> 후에 변경 가능
// var  >> 어디에서든 변경 가능 절대 쓰지말기 구식

// const amIFat = true

// const amISLim = false

// let something 

// console.log(amIFat)
// console.log(something)

// const days = ['mon', 'tue', 'wed', 'sat', 'sun']

// console.log(days)

// console.log(days[0])

// days.push('fri') // 배열 맨 뒤에 값 추가
// console.log(days)
// days.pop('mmm')
// console.log(days)

// const toBuy = ['iphone', 'case', 'film']
// toBuy.push('airpod')
// console.log(toBuy)

// const playerName = 'hajun'
// const playerPoint = '1234'
// const playerHandsome = 'true'
// const playerFat = 'slim'

// const player = {
//     Name:'hajun',
//     Points: 100,
//     Handsome: true,
//     Fat: false
// }

// console.log(player.Name)
// console.log(player['Name']) // 위 문구와 동일하게 출력

// player.Fat = false  // 객체 내부를 수정할때는 오류 발생하지 않음
// player.lastName = 'potato'// 객체 내부에 추가도 가능
// console.log(player)

// function sayhello(nameOfPerson, age) {
//     console.log('hello my name is ' + nameOfPerson + ' and my age is ' + age)
// }

// sayhello('hajun', 23)
// sayhello('dal', 54)
// sayhello('nico', 12)

// function plus(a,b){
//     console.log(a + b)
// }
// plus(5,6)

// function divide (a, b){
//     console.log(a / b)
// }
// divide(10, 2)

// const player = {
//     name: 'hajun',
//     sayHello: function(otherPersonsName){
//          console.log('hello!' + otherPersonsName)
//     }
// }
 
// console.log(player.name)
// player.sayHello('lymm')


// const player2 = {
//     name: 'James', 
//     position: 'WB',
//     age: 22,

//     skill: function(default1){
//         console.log(default1)
//     }
// }

// console.log(player2.name + player2.position)
// player2.skill('shooting')

// const player3 = {
//     name: 'kijeong',
//     age: 26,
//     position: 'small 6 angle ',
//     skill: function(by){
//         console.log(by)
//     }
// }

// console.log(player3.name,
//             player3.age,
//             player3.position)

// player3.skill('sexMaster')

    

// function minusFive(potato) {
//     console.log(potato - 5)
// }

// minusFive(5, 10, 15, 12, 34)

// 간단한 계신기
// const calculator = {
//     add: function (a, b) {
//         return (a + b)
//     },
//     minus: function (a, b) {
//         return (a - b)
//     },
//     mix: function (a, b) {
//         return (a ** b)
//     },
//     divide: function (a, b) {
//         return (a / b)
//     }
// }

// const addResult = calculator.add(7, 2)
// const minusResult = calculator.minus(addResult, 1)
// const mixResult = calculator.mix(minusResult, 3)
// const divideRsult = calculator.divide(10, mixResult)

// const age = parseInt (prompt('나이를 입력하세요'))   // prompt 거의 사용하지않음

// if (isNaN(age) || age < 0) {  //둘중 하나만 true 일 때 실행
//     console.log(" 양의 숫자를 입력하세요 ")
// }
// else if (age < 19 ) {
//     console.log(" 음주 불가능 ")
// }
// else if (age >= 19 && age <= 50 ) {    // 조건 둘다 참이여야 실행
//     console.log(" 음주 가능 ")
// }
// else if (age >= 51 && age <= 80 ) {    // 조건 둘다 참이여야 실행
//     console.log(" 선택적 음주 가능")
// }
// else if (age === 100) {
//     console.log('벌써 100세야?')
// }
// else if (age > 80) {    // 조건 둘다 참이여야 실행
//     console.log(" 80세 이상입니다 ")
// }

// true || true === true
// true || false === true
// false || false === false 
// false || true === true 

// true && false === false
// false && false === false 
// false && true === false

// console.log(age , parseInt(age))     //parseInt >> 문자열을 숫자로 변경






// const title = document.getElementById("title")  //이 함수를 통해 ID 를 element 로 가져올 수 있다는 점

// console.dir(title) // element 정보를 다 가져온다,

// title.innerText = 'Got You~ '

// console.log(title.id)
// console.log(title.className)

// const title = document.querySelector('.hello h1') // 배열로 나오기떄문에 변경 불가능
// // qurrySelector >> 
// // css방식으로 검색 가능 >> 
// // .hello 가 class name 이라는 것과 그 안에 h1 을 명시를 해줘야 함
// // !! 단 하나의 element  만 리턴해줌  
// console.log(title)
// const title2 = document.querySelectorAll('.hello h1')
// console.log(title2)

// const title3 = document.getElementById('hello')
// const titie3 = document.querySelector('#hello')  //주로 사용할듯
// // 위 두문장의 실행 결과는 같다. 
// const h1 = document.querySelector('div.hello:first-child h1') 

// console.dir(h1)
// function handleTitleClick() {
//     h1.style.color = 'blue'
//     console.log(' Click !! ')
// }
// function handleMouseEnter(){
//     h1.innerText= "Mouse Enter! "
// }
// function handleMouseLeave(){
//     h1.innerText= "Mouse Leave! "
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = 'tomato'
// }
// function handleCopy(){
//     alert('Copy Now!')
// }
// function handleOffline(){
//     alert(' wifi is offline !!')
// }
// function handleOnline(){
//     alert(' wifi is online !! ')
// }

// h1.addEventListener('click', handleTitleClick)  
// function 뒤에 바로 () 넣어버리면 JS가 알아서 ()실행  시키기 때문에 () 는 빼야함
// () 빼면 우리가 클릭할때 function 이 실행된다.
// h1.addEventListener('mouseenter',handleMouseEnter)
// h1.addEventListener('mouseleave',handleMouseLeave)
// window.addEventListener('resize', handleWindowResize)
// window.addEventListener('copy', handleCopy)
// window.addEventListener('offline', handleOffline)
// window.addEventListener('online', handleOnline)

const h1 = document.querySelector('div.hello:first-child h1') 

console.dir(h1)

function handleClick(){
    h1.classList.toggle('clicked')
}
h1.addEventListener('click', handleClick)
