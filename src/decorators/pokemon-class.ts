
function printoConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleConditional = (print:boolean = false): Function => {
    if(print) {
        return printoConsole;
    }else{
        return () => {};
    }
    
}

@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string) {}
}