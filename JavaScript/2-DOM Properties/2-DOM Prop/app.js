let doc
doc = document
console.log('document',doc)
doc = document.all[1]
console.log('All',doc)
doc = document.head
console.log('Head',doc)
doc = document.body
console.log('Body',doc)
doc = document.doctype
console.log('doctype',doc)
doc = document.domain
console.log('Domain',doc)
doc = document.URL
console.log('URL',doc)
doc = document.characterSet
console.log('CharSet',doc)
doc = document.contentType
console.log('Contentype',doc)
doc = document.links
console.log('Links',doc)
doc = document.links[0].classList
console.log('Classlist',doc)
doc = document.links[0].className
console.log('classname',doc)
doc = document.images
console.log('image',doc)
doc = document.scripts
console.log('scripts',doc)
let scripts = document.scripts
console.log('Scripts',doc)
let scriptsArray = Array.from(scripts)
scriptsArray.forEach(function (script, index) {
    console.log(index + script.getAttribute('src'))
})
console.log(doc)