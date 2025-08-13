export const printObjetc = (argument:any) => {
    console.log(argument);
    
}


export function genericFunction1(argument: any): any {
    return argument;
} 

//transformar a funcion generica 
export function genericFunction<T>(argument: T): T {
    return argument;
}

//haciendolo con una funcion flecha
export const genericFunctionArrow = <T>( argument:T): T => {
    return argument;
}

