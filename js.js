var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);


    resetForm();
}

function readFormData() {
    var formData = {};
    formData["addTask"] = document.getElementById("addTask").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("taskList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell = newRow.insertCell(0);
    cell.innerHTML = data.addTask;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                            <a onClick="onDelete(this)">Delete</a>`;

}

function resetForm() {
    document.getElementById("addTask").value = "";
    var selectedRow = null;

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("addTask").value = selectedRow.cells[0].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.addTask;


}

function onDelete(td) {
    if (confirm("Voce quer mesmo deletar esta task ?")) {
        row = td.parentElement.parentElement;
        document.getElementById("taskList").deleteRow(row.rowIndex);
        resetForm();

    }
}