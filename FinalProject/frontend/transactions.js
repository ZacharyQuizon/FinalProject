const API_URL = 'http://localhost:3000/transactions';
const token = localStorage.getItem('token');

const fetchTransactions = async () => {
    const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
    });
    const transactions = await response.json();
    const container = document.getElementById('transactions');
    container.innerHTML = transactions.map(
        (t) => `<div>${t.type}: ${t.category} - $${t.amount}</div>`
    ).join('');
};

document.getElementById('transaction-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        type: document.getElementById('type').value,
        category: document.getElementById('category').value,
        amount: document.getElementById('amount').value,
        date: document.getElementById('date').value,
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    fetchTransactions();
});

fetchTransactions();
