const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit-btn')
const header = document.querySelector('h3')
// submitBtn.addEventListener('click',run)
// submitBtn.addEventListener('dblclick',run)
// form.addEventListener('mouseleave',run)
// form.addEventListener('mousedown',run)
// form.addEventListener('mouseup',run)
form.addEventListener('mouseover',run)
function run(e) {
    e.preventDefault();
    console.log('event type:',e.type)
    header.textContent = `x: ${e.offsetX} y: ${e.offsetY}`
}
