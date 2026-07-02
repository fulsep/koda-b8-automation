export function sum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw new Error("parameter(s) should be a number")
    }
    return num1 + num2
}