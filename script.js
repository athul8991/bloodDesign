$(document).ready(()=>{
    let flag =false;
    $('#myModal').modal({
        backdrop:'static',
        Keyboard:false
    });
    $('#myModal').click(()=>{
    
    })
    $("#agreebt").click(()=>{
        flag =true;
        $('#myModal').modal('hide');
        

    })
    $("#agrClose").click(()=>{
        flag = false;
        window.location.href="/bloodDesign";
    });

    var data= $('#regForm').serializeArray().reduce((obj,item)=>{
       
        obj[item.name] = item.value;
        return obj;
       });

      
       if($('#confModal')){
        $('#confModal').modal({
            backdrop:'static',
            Keyboard:false
        });
       }

 
}
)

// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });