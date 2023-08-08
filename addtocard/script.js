
$(document).ready(function () {
    $.ajax({
        url: "./data.json",
        type: "GET",
        success: (data) => {
            let x = "";
            let y = "";




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
                <div class="container" id="counttt${value.id}"> 
                <button id="increment" class="btn btn-primary" onclick="increment(${value.id})" >+</button>
                <div class="row g-3 align-items-center">
                <div class="col-auto">
                <span id="count${value.id}">0</span>
                <span id="total${value.id}">0</span>
                   </div>
                     </div>
                <button id="decrement" class="btn btn-danger" onclick="decrement(${value.id})">-</button>
                <button id="reset" class="btn btn-info" onclick="reset(${value.id})">Reset</button>
                <button id="reset" class="btn btn-info" onclick="total(${value.id},${value.price})">total</button>
                </div> 
                
            </div>
        </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="save()">Save</button>
            </div>
        </div>
    </div>
  </div>
  `

            })

            $("#cards").html(x)
            $("#mod").html(y);



        }

    })
})
let counter = 0;
function increment(id) {
    counter++
    let x = document.getElementById("count" + id)
    x.innerHTML = counter

}
function decrement(id) {
    counter--
    let x = document.getElementById("count" + id)
    x.innerHTML = counter

}

function reset(id){
    counter = 0
    let x = document.getElementById("count"+id);
    x.innerHTML = counter
}
function total(id,price){
    let x = document.getElementById("count"+id).innerHTML;
    let y = document.getElementById("total"+ id);
    y.innerHTML = x * price
    
    
}
    
            function save(){
                let obj = {
                    name: document.getElementById("name").innerHTML,
                    title : "title",
                    price: "price"
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