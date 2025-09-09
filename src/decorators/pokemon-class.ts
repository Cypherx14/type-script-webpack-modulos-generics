
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


//decorador para metodo, usando factory decorator
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

//decorador de propiedad
function readOnly (isWritable: boolean = true):Function {
    //en este caso no se recibe descriptor, sino que se recibe el target y el propertyKey
    return function (target: any, propertyKey: string) {
        
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Fernando';
            }
            ,
            set(this, val) {
                // console.log(this,val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
                
            },
        }
        return descriptor;
    }
}


@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {

    @readOnly(true)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number): void {
        console.log(`Pokemon saved to DB ${this.name} with id ${id}`);
        // console.log(`Pokemon saved to DB with id ${id}`);
    }
}