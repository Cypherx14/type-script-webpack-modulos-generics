
function printoConsole(constructor: Function) {
    console.log(constructor);
}

@printoConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string) {}
}