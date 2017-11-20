 i=0;
     function addAnother() { if(i<3){
        var newListItem=document.createElement('li');
        var x=document.getElementById('x').value;
        var newText=document.createTextNode(x);
        newListItem.appendChild(newText);
        var position=document.getElementsByTagName('ol')[0];
        position.appendChild(newListItem);
        i++;}
        
      else{window.alert("Room is Full")}
     }
        
        function removeAnother(){
          var z=document.getElementById('z').value;
          
          var list= document.getElementsByTagName('li')[z-1];
          var ol=list.parentNode;
          ol.removeChild(list);
          i--;
        
          
        }
      