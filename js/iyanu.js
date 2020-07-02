// $(document).ready(function(){

    // var slides = document.getElementsByClassName("slide");
    // var links = document.getElementsByClassName("link");
    // var slideIndex = 1;
    // showSlides(slideIndex);
    
    // function currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }
    
    // function showSlides(n) {
    //     var i;
       
    //     if (n > slides.length) {slideIndex = 1}    
    //     if (n < 1) {slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";  
    //     }
    //     for (i = 0; i < links.length; i++) {
    //         links[i].className = links[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex-1].style.display = "block";  
    //     links[slideIndex-1].className += " active";
    // }


    // $(".nav-list").each(function(){ 
    //     var link = $(this).attr("data-target");
    //     link.hide();

    //    $(this).click(function(){
          
    //        $("section").each(function(){
    //            var id = $(this).attr("id");
    //            var Id = "#"+id;

    //            if (link == Id){
    //             $(link).show().effect("slide", 500);
    //            } 
    //        });           
    //    });

    // });


//     $("#content-2").hide();
//     $("#content-3").hide();
//     $("#content-4").hide();

//    $("#home").click(function(){
//         $("#content-4").hide();
//         $("#content-2").hide();
//         $("#content-3").hide();
//         $("#content-1").effect("slide", 500);
//    })

   
//    $("#gallery").click(function(){
//        $("#content-4").hide(); 
//        $("#content-1").hide();
//        $("#content-3").hide();
//        $("#content-2").effect("slide", 500);
//    });

//    $("#project").click(function(){
//        $("#content-1").hide();
//        $("#content-2").hide();
//        $("#content-4").hide();
//        $("#content-3").effect("slide", 500);
//    });

//    $("#contact-me").click(function(){
//         $("#content-1").hide();
//         $("#content-2").hide();
//         $("#content-3").hide();
//         $("#content-4").effect("slide", 500);
//    });
   

   
// });



window.onload = init;

function init(){
    let link = document.getElementsByClassName("link");

    for(i = 0; i < link.length; i++){

        var name = [];
        name.push(link[i].innerHTML);
  
        console.log(name);
          
        link[i].addEventListener("click", function(){
  
          // get link attribute
          let target = this.getAttribute("data-target");

          // Remove The # character
          var tab = target.slice(1);
            
          // Select the welcome div
          var div = document.getElementById("welcome");
  
  
        //   if (target.slice(1) == "content-1"){
        //     div.innerHTML = document.getElementById("content-1").innerHTML;
        //   } else {

             
           // div.innerHTML = document.getElementById(target.slice(1)).innerHTML; 
            
           $(div).html($("#" + tab ).html()).effect("slide", 1000);
            
        //  }
  
            //target.slice(1); 

  
          
        });
      }

      
      load();
      popMenu();

    // var pop = document.getElementById("pop");
    // pop.style.visibility = "hidden";
  

}

   
function load(){
  let welcome = document.getElementById("welcome");
  let home = document.getElementById("content-1");

  welcome.innerHTML = home.innerHTML;
  
}

function popMenu(){
  let menu = document.getElementById("linkmenu");
  let close = document.querySelector(".close");
  let popList = document.getElementsByClassName("pop-list");

  menu.onclick = function(){
    pop.style.visibility = "visible";
  }

  close.onclick= function(){
    pop.style.visibility = "hidden";
  }

  for (var i = 0; i < popList.length; i++){

     popList[i].addEventListener("click", ()=>{
       pop.style.visibility = "hidden";
     });
  }


}








