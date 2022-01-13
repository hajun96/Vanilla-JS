const todoForm = document.getElementById('todo-form')
const todoInput = document.querySelector('#todo-form  input') 
const todoList = document.getElementById('todo-list')
const toDos = []

function deleteToDo(event) {   // click 에 대한 event 가 들어갔다 
    const li = event.target.parentElement // path 설명 
    li.remove()
}
function paintToDo(newTodo) {  // todo 그리는 역할  
    const li = document.createElement('li') //listItem 생성 
    const span = document.createElement('span') //span 생성
    span.innerText = newTodo //span의 텍스트는 todosubmit에서 온 newTodo 가 된다.
    const button = document.createElement('button')// button 생성
    button.innerText = '❌'
    button.addEventListener('click',deleteToDo)
    li.appendChild(span)  // li 안으로 span 자식 추가 
    li.appendChild(button)
    todoList.appendChild(li) //todolist 안에 li 자식 추가 
}
function todosubmit(event) {
    event.preventDefault() //새로고침 방지
    const newTodo = todoInput.value // 밑에 비어있다고 지정을 하여도 newtodo가 비워지는것은 아니다. newtodo 라는 새로운 변수에 값을 복사하는것이기 때문 
    todoInput.value = '' //윗라인 진행 후에 값을 비움
    toDos.push(newTodo) 
    paintToDo(newTodo) //newTodo를 인자로 가진 painttodo 함수 실행
     
}
todoForm.addEventListener('submit', todosubmit) 
