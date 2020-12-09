let addtasksbutton = document.getElementById('addtasks');
let taskscontainer = document.getElementById('taskscontainer');
let inputfield = document.getElementById('inputfield');
addtasksbutton.addEventListener('click', function(){
  var paragraph = document.createElement('p')
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputfield.value;
  taskscontainer.appendChild(paragraph);
  inputfield.value = '';
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through';
  })
  paragraph.addEventListener('dblclick', function(){
    taskscontainer.removeChild(paragraph);
  })
})
