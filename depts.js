document.addEventListener("DOMContentLoaded", () => {
    let arr = [
        ['Отдел', 'Контрагент', 'Сумма'],
        ['Отдел А', 'Контрагент 1', '100'],
        ['Отдел Б', 'Контрагент 2', '150'],
        ['Отдел Б', 'Контрагент 3', '200'],
        ['Отдел Г', 'Контрагент 4', '250'],
        ['Отдел Г', 'Контрагент 5', '300'],
        ['Отдел Г', 'Контрагент 6', '350'],
        ['Отдел Г', 'Контрагент 7', '400'],
        ['Отдел Д', 'Контрагент 8', '450'],
        ['Отдел Д', 'Контрагент 9', '500'],
    ];
    // Выделим заголовки
    const headers = arr.shift();

    // Получим названия отелов и удалим дубликаты
    let depts = arr.map((dept) => {
        return dept[0];
    });
    depts = removeDuplicates(depts);

    // Получаем нужные DOM-элементы
    let select = document.getElementById('depts'),
        tableContainer = document.getElementById('tableContainer');

    // Добавим список отделов в выпадающий список
    depts.map((dept) => {
        let option = document.createElement('option');
        option.innerText = dept;
        select.appendChild(option);
    });

    // Рисуем таблицу
    function drawTable() {
        let table = document.createElement('table'),
            tr = document.createElement('tr')

        headers.map((header) => {
            let th = document.createElement('th');
            th.innerText = header;
            tr.appendChild(th);
        });
        table.appendChild(tr);

        let result = arr;

        if(typeof(this.value) != 'undefined' && this.value != '') {
            result = arr.filter((row) => {
                return row[0] == this.value;
            });
        }

        result.map((row) => {
            let tr = document.createElement('tr')
            row.map(cell => {
                let td =  document.createElement('td');
                td.innerText = cell;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

        tableContainer.innerHTML = table.outerHTML;
    };

    select.addEventListener('change', drawTable);
    drawTable();

    // Удаляем дубликаты в массиве с помощью Set
    function removeDuplicates(arr) {
        return Array.from(new Set(arr));
    }
});