let vecp1 = [];

function gen(vecp1) {
    for (let i = 0; i < 25000; i++) {
        vecp1[i] = (Math.floor(Math.random() * 499999) + 1);
    }
}

function quickSort(vecp1) {
    if (vecp1.length < 1) {
        return [];
    } 
    
    var izq = [];
    var der = [];
    var pivote = vecp1[0];

    for (let i = 1; i < vecp1.length; i++) {
        if (vecp1[i] < pivote) {
            izq.push(vecp1[i]);
        } else {
            der.push(vecp1[i]);
        }
    }

    return [].concat(quickSort(izq), pivote, quickSort(der)); 
}

boton_generar.addEventListener("click", function() {
    vecp1 = [];
    gen(vecp1);
    llenarTabla(vecp1);
});

boton_sort.addEventListener("click", function() {
    vecp1 = quickSort(vecp1);
    llenarTabla(vecp1); 
});

function llenarTabla(vecp1) {
    let tbody = document.querySelector("#tabla_nums tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < Math.max(vecp1.length); i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = vecp1[i] !== undefined ? vecp1[i] : "";
        tr.appendChild(td1);

        tbody.appendChild(tr);
    }
}