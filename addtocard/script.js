
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
                <div class="container" id="count${value.id}"> 
                <button id="increment" class="btn btn-primary" onclick="increment(${value.id})" >+</button>
                <div class="row g-3 align-items-center">
                   <div class="col-auto">
                     <input type="number" name="" id="count${value.id}" class="form-control">
                   </div>
                     </div>
                <button id="decrement" class="btn btn-danger">-</button>
                <button id="reset">Reset</button>
                </div> 
                
            </div>
        </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="">Save</button>
            </div>
        </div>
    </div>
  </div>
  `
 
})

$("#cards").html(x)
$("#mod").html(y);

$("#increment").click(()=>{
    let x =$(this).next("div").text();
    console.log()
//     counter++
// $("#count").html(counter)
})
$("#decrement").click(()=>{
    counter--
$("#count").html(counter)
})

// $("#reset").click(()=>{
//     counter = 0
//     $("#count").html(counter)
// })
     


// function save(){
//     let obj = {
//         name:value.name,
//         title : value.title,
//         price: value.price
//      }
//  if(localStorage.getItem("data1")==null){
//     localStorage.setItem("data1","[]")
//  }
//  let old_data = JSON.parse(localStorage.getItem("data1"));
//  // console.log(old_data)
//  old_data.push(obj)
//  //   console.log(old_data)
//  localStorage.setItem("data1",JSON.stringify(old_data))
//  }
 
 }

    })
})
function increment(id){
    console.log(id);
}


    let x = document.getElementById(this)
    console.log(x)