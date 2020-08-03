// var h = document.createElement('h1')
// var myValue = document.createTextNode('Hello World!')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

var ul = document.getElementById('list')
var li;






var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)


var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

var clearButton = document.getElementById('clear')
clearButton.addEventListener('click', clearAll)


function addItem() {
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if (item === '') {
        let para = document.createElement('p')
        para.textContent = 'Enter your Todo'
        document.querySelector('input').after(para)
        
        var element = document.getElementById('container')
        para.style.opacity = '1'

        setTimeout(() => {
            para.className = 'visual'
            para.style.opacity = '0'
            para.remove();

        }, 2000)



        return false
        
    }
    else {
        // li
        li = document.createElement('li')
        
        // checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        // label
        var label = document.createElement('label')
        label.setAttribute('for', 'item')

        ul.appendChild(label) // appendchild of
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])   // here
        
        setTimeout(() => {
            li.className = 'visual'
        }, 2)
        input.value = ''
    }
}

function removeItem() {
    li = ul .children
    // for (let index = 0; index < li.length; index++) {
    //    while (li[index] && li[index].children[0].checked) {
    //        ul.removeChild(li[index])
    //    }
        
    // }
    let items =[].slice.call(li); 
    for(let item of items) {
    	if(item.children[0].checked)
    	ul.removeChild(item);

}
}

function clearAll() {
    li = ul .children
    // for (let index = 0; index < li.length; index++) {
    //   //ul.remove(li[index])
    //    ul.remove()
    items = [].slice.call(li)
    for (let item of items) {
        ul.removeChild(item)
    
    }
}