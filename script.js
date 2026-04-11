let transactions = [];
let nextId = 1;

function getFormValues(){
    let desc = document.getElementById('desc');
    console.log(desc)
    let amount = parseFloat(document.getElementById('amount').value);
    console.log(amount)
    let type = document.getElementById('type').value;
    console.log(type)
        return { desc, amount, type }

}

console.log(getFormValues())