var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var calc = document.getElementById("selectCalc");
var form = document.getElementById("formCalc");



form.addEventListener('submit', function(event) {

    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        if (calc.value == '1'){
             result = (y/x)*100;
            
        }else if (calc.value == '2'){

             result = (x*100)/y;
            
        }else if (calc.value == '3'){
        
            result= (y/x)*100;
            
        }else if (calc.value == '4'){

             result = x*y;
             
        }else if (calc.value == '5'){

             result = y/x;
                
        }

        resultField.innerText = "Answer: " + result + "%";
        event.preventDefault();

    }

});