 //쿼리 셀렉터는 classname , tagname 모두 검색해서 정확하게 뭘 검색하는지 구분지어줘야한다.(#) 붙이기
const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input') 
const greeting = document.querySelector('#greeting') //h1 지정해주기
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function loginFormSubmit(event) {
    event.preventDefault() //이벤트가 원래 하던 행동을 멈춤 
    loginForm.classList.add(HIDDEN_CLASSNAME) // Form 을 다시 숨겨줌
      //유저네임이라는 명의 변수로 저장해줌
    localStorage.setItem(USERNAME_KEY, loginInput.value) // 
    paintGreeting()
    //백틱  $ {}
}

function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello ${username} nice to meet you!`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const saveUsername = localStorage.getItem(USERNAME_KEY)
if (saveUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', loginFormSubmit)
}
else{
    //show the greeting
    paintGreeting()
}