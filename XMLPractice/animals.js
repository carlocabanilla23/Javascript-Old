$(document).ready(function(){
  
    
   $.ajax({
      type: "GET",
      url: "animals.xml",
      datatype: "xml",
      success: function(xml){
         
         var s = $('<select id="category">');
         $('<option/>',{ value:'0', text:"Please Select Animals 'Balinese'" }).appendTo(s);
           $(xml).find('Animals').each(function(){
               $(this).find('Cats').each(function(){
                   if ($(this).attr('type') == 'Balinese') {
                     $(this).find('Cat').each(function(){
                           $(this).find('name').each(function(){
                  //      alert($(this).text());
                          $('<option/>',{ value:$(this).attr('id'), text:$(this).text() }).appendTo(s);     
          //     document.getElementById('dvcontent').innerHTML = "<h1>"+ $(this).text()+ "</h1>";                      
                            
                              })
                        })
                   }
                       s.appendTo('#dvdetail');
             
                 
                  })
            
            })
     
     
     
      },
      error: function(){
         alert('Cant Read File');
         
      }
   })
   
   
   })