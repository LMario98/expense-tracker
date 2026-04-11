let transactions = [];
let nextId = 1;

function getFormValues() {
    let desc = document.getElementById('desc');

    let amount = parseFloat(document.getElementById('amount').value);

    let type = document.getElementById('type').value;

    return { desc, amount, type }

}

getFormValues()

//validare i dati

function isValid(desc, amount) {
    if (desc === "") {
        alert('inserisci una descrizione')
        return false
    }
    if (isNaN(amount) || amount <= 0) {
        alert('inserisci un importo valido!');
        return false
    }
    return true
}

console.log(isValid("",10))
