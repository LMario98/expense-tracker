let transactions = [];
let nextId = 1;

function getFormValues() {
    let desc = document.getElementById('desc');

    let amount = parseFloat(document.getElementById('amount').value);

    let type = document.getElementById('type').value;

    return { desc, amount, type }

}

getFormValues()