document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
  const newfield = document.querySelector(".schedule-item").cloneNode(true);

  const fields = newfield.querySelectorAll('input')
  
  fields.forEach((field)=>{
    field.value = "";
  });

  document.querySelector("#schedule-items").appendChild(newfield);
}