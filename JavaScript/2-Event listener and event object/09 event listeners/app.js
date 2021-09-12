document.querySelector('#submit-btn').addEventListener('click',onClick)


function onClick(e) {
    e.preventDefault()
    let item 
    item = e.target.classList
    item = e.clientX
    item = e.clientY
    item = e.offsetX
    item = e.offsetY
    e.target.innerText = 'Hello I am clicked'
    console.log(item)
}