function calcularFactorial(numero){
    let factorial = 1
    for(let i = 1; i < numero; i++){
        
        factorial = factorial * i
            
        }
        return factorial
    }
    
    console.log(calcularFactorial(10))
    