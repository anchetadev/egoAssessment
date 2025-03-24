let total = 0;
let interpretation = "";

function interpret(total){
    if (total<=10) {
        interpretation=`Ego rarely influences your actions. This may reflect strong self-awareness or minimal ego interference. \nReflect on whether you avoid ego-driven behaviors or if they go unnoticed. Strengthen self-awareness.`
    } else if (total > 10 && total <=20) {
        interpretation=`Ego occasionally impacts your thoughts or behaviors \nIdentify triggers for ego-driven actions and explore strategies to manage them.`
    }else if (total > 20 && total <=32) {
        interpretation=`Ego plays a significant role in shaping your responses and interactions. \nFocus on building humility, reducing comparison, and strengthening intrinsic motivations.`
    }
    document.getElementById("interpretation").innerHTML += interpretation
}
function calculate(event) {
    event.preventDefault();

    const categories = {
        ev: ['ev1', 'ev2', 'ev3'],
        scc: ['scc1', 'scc2'],
        sci: ['sci1', 'sci2'],
        nedb: ['nedb1', 'nedb2']
    };

    total = 0;

    for (const [category, ids] of Object.entries(categories)) {
        const sum = ids.reduce((acc, id) => acc + parseInt(document.getElementById(id).value), 0);
        const avg = sum / ids.length;
        total += sum;

        document.getElementById(`${category}Sum`).textContent = `Sum: ${sum}`;
        document.getElementById(`${category}Avg`).textContent = `Average: ${avg.toFixed(2)}`;
    }

    document.getElementById('total').textContent = `Total: ${total}`;

    document.querySelector('.btn').disabled = true;
    interpret(total)
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("loaded")
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
        window.location.reload()
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            window.location.reload()
        }
    });
  });