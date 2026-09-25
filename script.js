onst botoesCurtir =document. querySelectorAll(".curtir");
botoesCurtir.forEach(function(botaoCurtir)
let curtir=false;
botaoCurtir.addEventlistener("click", curtir);
function curtir (){
    const contador=botaoCurtir.querySelector("span");
      if(curtiu===false){
        contador. textContent++;
        curtiu=true;}
        else{
            contador.textContent--;
            curtiu=false;
        }


    
}

