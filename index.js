function calculate(event) {
    event.preventDefault();

    const categories = {
        ev: ['ev1', 'ev2', 'ev3'],
        scc: ['scc1', 'scc2'],
        sci: ['sci1', 'sci2'],
        nedb: ['nedb1', 'nedb2']
    };

    let total = 0;

    for (const [category, ids] of Object.entries(categories)) {
        const sum = ids.reduce((acc, id) => acc + parseInt(document.getElementById(id).value), 0);
        const avg = sum / ids.length;
        total += sum;

        document.getElementById(`${category}Sum`).textContent = `Sum: ${sum}`;
        document.getElementById(`${category}Avg`).textContent = `Average: ${avg.toFixed(2)}`;
    }

    document.getElementById('total').textContent = `Total: ${total}`;

    document.querySelector('.btn').disabled = true;
}