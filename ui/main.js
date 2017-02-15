console.log('Loaded!');
                    
                    //Changing the content in html.
                    //var element = document.getElementById('intro');
                    
                    //element.innerHTML='Hai I am Salih';
                    
                    //Animating the image to move.
var img = document.getElementById('sasi');
var marginleft=0;

function moveright() {
if(marginleft<950) {
     marginleft=marginleft+10;
     img.style.marginLeft = marginleft + 'px';
 }
else{
     marginleft=-900;
     img.style.marginLeft = marginleft + 'px';
 }
    
}

img.onclick=function() {
  var interval = setInterval(moveright,20);
};

//counter code
var counter=0;
var button = document.getElementById("counter");
button.onclick=function(){
    
    //create a XML req
       var request= new XMLHttpRequest();
    
    //capture the response and store it in a variable
       request.onreadystatechange = function() {
           
         if(request.readyState===XMLHttpRequest.DONE) {
             if(request.status===200){
                 var counter=request.responseText;
                 var span = document.getElementById("count");
                 span.innerHTML = counter.toString();
             }
         }  
       };
    
    //Making the request
       request.open('GET','http://sasitharm.imad.hasura-app.io/counter',true);
       request.send(null);
};