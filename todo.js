const con2El = document.querySelector('.container-2')

const titleValueEl = document.getElementById('title')
const descValueEl = document.getElementById('desc')
const addTodoEl = document.getElementById('addTodo')

addTodoEl.addEventListener('click',()=>{

    let box = document.createElement('div')
    box.className = 'box'
    box.id = 'box'
    con2El.append(box)


    let title = document.createElement('h1')
    let desc = document.createElement('h4')
    let hr = document.createElement('hr')
    let close = document.createElement('h1')
    title.style.fontFamily = 'Montserrat'
    desc.style.fontFamily = 'Prompt'
    desc.style.fontWeight = '400'
    title.id = 'todoTitle'
    desc.id = 'todoDesc'
    close.id = 'close'
    close.innerHTML = '&times;'   
    close.addEventListener('click',()=>{
        box.style.display = 'none'
    })
    box.append(close,title,hr,desc)



    title.textContent = titleValueEl.value
    desc.textContent = descValueEl.value
    titleValueEl.value = ''
    descValueEl.value = ''
})


