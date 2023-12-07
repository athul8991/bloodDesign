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
        window.location.href="/";
    });

   
}
)

// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });