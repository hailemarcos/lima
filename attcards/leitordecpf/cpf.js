function verificarCPF(){
      let cpf =document.getElementById("cpf").value
      let resultado = ""


      let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])
      
      
      switch(segmento){
          case 0 :
              resultado = "Rio Grande do Sul"
              break;
        case 1:
            resultado = "Distrito Federal "
            break;
        case 2:
            resultado = "Amazonas"
            break;
        case 3:
            resultado = "Ceará"  
            break;
        case 4:
            resultado = "Paraíba"  
            break;
        case 5:
            resultado = "Bahia e Sergipe"
            break;
        case 6:
            resultado = "Minas Gerais"
            break;
        case 7:
            resultado = "Rio de Janeiro e Espirito Santos"
            break;
            case 8:
                resultado = "São Paulo"
                break; 
        case 9:
            resultado = "Paraná e Santa Catarina"
            break;

        }

        

        document.getElementById("saidacpf").textContent = resultado



}
function verificartemperaturacelsius(){

let temperatura = document.getElementById("temperatura").value
let resultadotemperatura = ""

let segmentotemperatura = parseInt()

    switch(segmentotemperatura){
    
    case
    resultadotemperatura = temperatura * 9/5 + 32:
              break;


            }
            document.getElementById("saidatemperatura").textContent = resultadotemperatura
        }
            
            









function verificarimparoupar(){
   let parouimpar = document.getElementById("parouimpar").value
   

   let segmentoimparoupar = parseInt()
 
let resultado1 = "par"
let resultado2 = "impar"






         if(parouimpar % 2 == 0){
           document.getElementById("saidaimparoupar").textContent = resultado1
        } 
        if(parouimpar % 2 == 1 ){
            document.getElementById("saidaimparoupar").textContent = resultado2
        }
    
    
}
function verificarvalor(){

    
    
    let moedas = document.getElementById("moedas").value
    let resultadomoedas = ""
    
    let segmentomoeadas = parseInt()
    
    
    switch(segmentomoeadas){
       case 
        resultadomoedas = moedas / 5,08:
        break;
   
    }
    document.getElementById("saidamoedas").textContent = resultadomoedas
}
function calcular(event){
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat(document.getElementById("numero2").value) 
    let operacao = event.target.textContent
    let resultado
    switch(operacao){
        case "+":
            console.log("soma");
            resultado = num1 + num2
            break;
        case "-":
            console.log("subtração");
            resultado = num1 - num2
            break;
        case "*":
            console.log("multiplicacao");
            resultado = num1 * num2
            break;
        case "/":
            console.log("divisao");
            resultado = num1 / num2
            break;
        default:
            console.log("Não é uma Operação");
    }
    document.getElementById("resultado").textContent = resultado
}
  
    
function verificartemperaturakelvim(){

    let temperaturakelvim = parseFloat (document.getElementById("temperaturakelvim").value)
    let resultadotemperaturakelvim = ""
    
    let segmentotemperaturakelvim = parseInt()
    
        switch(segmentotemperaturakelvim){
        
        case
        resultadotemperaturakelvim = temperaturakelvim + 273:
                  break;
    
    
                }
                document.getElementById("saidatemperaturakelvim").textContent = resultadotemperaturakelvim
            } 
    
function verificarvalordolar(){

    
let moedasdolar = document.getElementById("moedasdolar").value
 let resultadomoedasdolar = ""
            
let segmentomoeadasdolar = parseInt()
                
                
 switch(segmentomoeadasdolar){
        case 
        resultadomoedasdolar = moedasdolar * 5,08:
                    break;
               
                }
                document.getElementById("saidamoedasdolar").textContent = resultadomoedasdolar
            }
        
        
        
        
        
        
        
        
        
        
    

