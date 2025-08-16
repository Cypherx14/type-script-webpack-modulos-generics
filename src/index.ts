import { getPokemon } from "./generics/get-pokemon";


getPokemon(1)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizó la ejecución'));
