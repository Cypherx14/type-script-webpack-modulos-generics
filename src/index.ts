import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');


// (Pokemon.prototype as any).customName = 'Pikachu';


//no valido negativos, haciendo un decorador para manejarlo 
charmander.savePokemonToDB(3);




