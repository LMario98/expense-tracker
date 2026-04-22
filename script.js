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

//aggiungiamo una transazione

function addTransaction() {
  let { desc, amount, type } = getFormValues();

  if (!isValid(desc, amount)) {
    return;
  }

  let transaction = {
    id: nextId,
    desc: desc,
    amount: amount,
    type: type
  };

  transactions.push(transaction);
  nextId = nextId + 1;

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  renderList(); 
}

document.getElementById("add-btn").addEventListener("click", addTransaction);

function renderList() {
  let list = document.getElementById("tx-list");
  list.innerHTML = "";

  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];
    list.innerHTML += "<div>" + t.desc + " — €" + t.amount + "</div>";
  }
}