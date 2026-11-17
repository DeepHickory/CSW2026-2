function calc(){
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const operation = document.getElementById("operation").value;
    
    let result;
    switch (operation) {
        case "add":
           result = n1 + n2;
            break;
        case "subtract":
            result = n1 - n2;
            break;
        case "multiply":
            result = n1 * n2;
            break;
        case "divide":
            if (n2 === 0){
                result = "Infinito"
            } else {
                result = n1 / n2
            }
            break;
        default:
            result = "Operação inválida";
    }
    
    document.getElementById("result").textContent = result
}