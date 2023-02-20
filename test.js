var age = 34;
const local = 'ulsan'

var deposit = 60000;
var futureDeposit = 0;

function bank(deposit) {
    if(deposit >= 50000) {
        rate = (deposit/100) * 20;
    } else {
        rate = (deposit/100) * 15;
    }
    console.log(deposit + (2 * rate));
}

console.log('hello');