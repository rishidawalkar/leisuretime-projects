var input  = document.getElementById('input');
var result  = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

//taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult()
{
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    //compare input and result type value and add formula    

        // conversion of kelvin to celsius
        if(inputTypeValue === "kelvin" && resultTypeValue === "celsius")
        {
            result.value = Number(input.value)-273; 
        }
                // conversion of kelvin to fahrenheit
        else if(inputTypeValue === "kelvin" && resultTypeValue === "fahrenheit")
        {
            result.value = Number(1.8*(input.value-273))+32;
        }

       
       
        
         // conversion of fahrenheit to kelvin
         if(inputTypeValue === "fahrenheit" && resultTypeValue === "kelvin")
         {
             result.value = Number(0.5*(input.value-32))+273;
         }
        // conversion of fahrenheit to celsius
        if(inputTypeValue === "fahrenheit" && resultTypeValue === "celsius")
        {
              result.value = Number(input.value-32)*5/9;
        }
        
        
         // conversion of celsius to kelvin
         if(inputTypeValue === "celsius" && resultTypeValue === "kelvin")
         {
             result.value = Number(input.value)+273;
         }
         // conversion of celsius to fahrenheit
         if(inputTypeValue === "celsius" && resultTypeValue === "fahrenheit")
         {
             result.value = Number(1.8*(input.value))+32;
         }



}

