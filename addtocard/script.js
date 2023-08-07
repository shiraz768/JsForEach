
$(document).ready(function () {
    $.ajax({
        url: "./data.json",
        type: "GET",
        success: (data) => {
            let x = "";
            let y = "";
            let counter = 0;
           
            
            
            $.each((data), function (_index, value) {

                x += `<div class="col-lg-3">
         <div class="card d-flex">
         <img class="card-img-top" src="${value.src}" alt="Title" >
         <div class="card-body">
         <h3 class="card-title">${value.name}</h3>
             <h5 class="card-title">${value.title}</h5>
             <p class="card-text">${value.price}</p>
             <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modal${value.id}">
             Launch
           </button>
         </div>
     </div>
     </div>`
                y += `
 
  
  <!-- Modal Body -->
  <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
  <div class="modal fade" id="modal${value.id}" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="card d-flex">
            <img class="card-img-top" src="${value.src}" alt="Title" >
            <div class="card-body">
            <h3 class="card-title">${value.name}</h3>
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.price}</p>
                <div class=container id="counter"> 
                <button id="increment" class="btn btn-primary" >+</button>
                <div id="counter-val">0</div>
                <button id="decrement" class="btn btn-danger">-</button>
                <button id="reset">Reset</button>
                </div> 
                
            </div>
        </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick=${save()}>Save</button>
            </div>
        </div>
    </div>
  </div>
  `
 
 
function save(){
    let obj = {
        name:value.name,
        title : value.title,
        price: value.price
     }
if(localStorage.getItem("data1")==null){
    localStorage.setItem("data1","[]")
}
let old_data = JSON.parse(localStorage.getItem("data1"));
// console.log(old_data)
old_data.push(obj)
//   console.log(old_data)
localStorage.setItem("data1",JSON.stringify(old_data))
}
})

$("#cards").html(x)
$("#mod").html(y);

$("#increment").click(()=>{
    counter++
$("#counter-val").html(counter)
})
$("#decrement").click(()=>{
    counter--
$("#counter-val").html(counter)
})

$("#reset").click(()=>{
    counter = 0
$("#counter-val").html(counter)
})
        


}

    })

})
