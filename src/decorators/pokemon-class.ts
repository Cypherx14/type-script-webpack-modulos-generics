
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

//decorador para prevenir una expansion de la clase
const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


//decorador para metodo, usanod factory decorator
function CheckValidPokemonId(){
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const originalMethod = descriptor.value;

        descriptor.value = function (id: number) {
            if(id< 1 || id > 800 ){
                return console.error('El id del pokemon debe ser un numero entre 1 y 800');
            }else{
                return originalMethod.apply(this, [id]);
            }
        }
        
    }
}




@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number): void {
        console.log(`Pokemon saved to DB ${this.name} with id ${id}`);
        // console.log(`Pokemon saved to DB with id ${id}`);
    }
}