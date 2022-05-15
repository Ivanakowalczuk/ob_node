function calcularFactorial(numero){
    let factorial = 1
    let i = 1
    while(true){
        if(i < numero){
            factorial = factorial * i
            i++
        }else{
            break
        }
    }
        return factorial
    }
    
console.log(calcularFactorial(10))