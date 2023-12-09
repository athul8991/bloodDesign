import { distwithBlock } from "./data.js";
// console.log(dist);
$(document).ready(()=>{
    let distList = "<option value=null>choose ..</option>";

    distwithBlock.forEach((elm)=>{
      distList += `<option value="${elm.dist}">${elm.dist}</option>`;

    });
    $('#inputDist').html(distList)
    $("#regForm").submit((e)=>{
        e.preventDefault();
        let liArray;
        // console.log(e.target);
        var data= $('#regForm').serializeArray().reduce((obj,item)=>Object.assign(obj,{[item.name]:item.value}),{});
        var arrayData='';
        $('#regForm').serializeArray().forEach(item =>{
          arrayData += `<li class = "list-group-item tab" >${item.name} : ${item.value}</li>`  
        });
       
       console.log(data);
      //  data = {...data}
      //  console.log(data);
      if (data){

       $('#modalroot').html(`
       <div  id="confModal" class="modal modal-bg" tabindex="3" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title">Preview</h5>
              <button type="button" class="close" id="agrClose" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <ul class="list-group" id='prevData' >
              
            </ul>
             
            </div>
            <div class="modal-footer">
              <button type="button" id="agreebt" class="btn btn-outline-success ">I agree</button>
            </div>
          </div>
        </div>
      </div>
       `);
      }
       if($('#confModal')){
        $('#confModal').modal({
            backdrop:'static',
            Keyboard:false
        });
        $('#prevData').html(arrayData);
       
       }

    })
    $("#inputDist").change(()=>{
      const blocklist ='<option value=null>choose ..</option>';
      const {block} =  selectBlock($("#inputDist").val())
      $("#inputBlock").html("");
      block.forEach(item=>{
        $("#inputBlock").append(`<option value=${item}>${item}</option>`)
      })
    })   
})

function selectBlock(distName){
  const [blockArray] = distwithBlock.filter(item=> item.dist===distName)
 return blockArray;
}