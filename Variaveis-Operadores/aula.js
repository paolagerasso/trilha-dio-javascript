const precoCombustivel = 5.79;
let gastoCombustivel = 10;
const kmViagem = 100;

let gastoPorKm = kmViagem / gastoCombustivel;
let precoKm = gastoPorKm * precoCombustivel;
let precoViagem = precoKm.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

console.log('Preço da Viagem:' + precoViagem);