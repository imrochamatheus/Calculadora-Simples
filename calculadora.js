valor_salvo = 0;
function salvar(salv){
   if(salv == "MRC" && typeof flag == 'undefined'){
      document.getElementById('visor').value = valor_salvo;
      flag = 1;
   }else if(salv == "MRC" && typeof flag != 'undefined'){
      valor_salvo = '';
      document.getElementById('m-s').value = '';
      delete flag;
   }else if (salv =='M+' && document.getElementById('visor').value != '' && document.getElementById('visor').value != '0'){
      valor_salvo += parseFloat(document.getElementById('visor').value);
      document.getElementById('m-s').value = 'M';
      delete flag;
   }else if (salv =='M-'){
      valor_salvo -= parseFloat(document.getElementById('visor').value);
      delete flag;
      if(valor_salvo < 0){
         valor_salvo = 0;
         document.getElementById('m-s').value = '';
         delete flag;
      }
   }
}
function raiz(){
    var aux = parseFloat(document.getElementById('visor').value);
    aux = Math.sqrt(aux);
    document.getElementById('visor').value = aux;
}
function inverter(){
    var aux = parseFloat(document.getElementById('visor').value);
    aux = aux * -1;
    document.getElementById('visor').value = aux;
}
function limpar(limp){
   if(limp == "CE"){
      document.getElementById('visor').value = '';
      delete ativado;
      delete valor;
      delete outrovalor;
   }else{
      var menosum = document.getElementById('visor').value;
      var aux = menosum.slice(0,-1);
      document.getElementById('visor').value = aux;
   }
}
function concatenar(num){
    if(typeof ativado == "undefined"){
      document.getElementById('visor').value = '';
    }
    document.getElementById('visor').value =  document.getElementById('visor').value += num;
    ativado = 1;
}
function operador (op) {
   if(typeof outrovalor == 'undefined'){
      valor = document.getElementById('visor').value;
      delete ativado;
      outrovalor = "";
      sinal = op;
      if(op == "soma"){
         document.getElementById('visor-operacao').value = '+'
      }else if(op == "subtracao"){
         document.getElementById('visor-operacao').value = '-'
      }else if(op == "divisao"){
         document.getElementById('visor-operacao').value = '÷'
      }else if(op == "multiplicacao"){
         document.getElementById('visor-operacao').value = 'X'
      }else if(op == "porcentagem"){
         document.getElementById('visor-operacao').value = '%'
      } 
   }else{
      outrovalor = document.getElementById('visor').value;
      var result = resultado(sinal, valor, outrovalor);
      document.getElementById('visor').value = result;
      delete valor;
      delete outrovalor;
      delete sinal;
   }  
}
function resultado(operacao, v1, v2){

      if(operacao == "soma"){
         var resp = parseFloat(v1) + parseFloat(v2);
      }else if(operacao == "subtracao"){
         var resp = parseFloat(v1) - parseFloat(v2);
      }else if(operacao == "divisao"){
         var resp = parseFloat(v1) / parseFloat(v2);
      }else if(operacao == "multiplicacao"){
         var resp = parseFloat(v1) * parseFloat(v2);
      }else if(operacao == "porcentagem"){
         var resp = parseFloat(v1)/100 * parseFloat(v2);
      }
      return(resp);
      
}
