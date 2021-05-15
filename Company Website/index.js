

function entire() {
    var formData = readFormData();
    insertNewRecord(formData);
}

function displayRadioValue() {
    var ele = document.getElementsByName('radioButton');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}
function readSelect() {
    var select = document.getElementById("select");
    if (select.checked !== select)
        return select.value;
}
function languageRadio() {
    var lang = document.getElementsByName('language1');
    for (i = 0; i < lang.length; i++) {
        if (lang[i].checked)
            return lang[i].value;
    }
}

function readFormData() {
    var formData = {}
    formData["fullName"] = document.getElementById("fullName").value;
    formData["gender"] = displayRadioValue();
    formData["mobile"] = document.getElementById("mobile").value;
    formData["qualification"] = document.getElementById("qualification").value
    formData["select"] = readSelect();
    formData["addressed"] = document.getElementById("addressed").value
    formData["language"] = languageRadio();
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("mytable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.gender;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.mobile;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = data.qualification;
    cell1 = newRow.insertCell(4);
    cell1.innerHTML = data.select;
    cell1 = newRow.insertCell(5);
    cell1.innerHTML = data.addressed;
    cell1 = newRow.insertCell(6);
    cell1.innerHTML = data.language;
    cell1 = newRow.insertCell(7);
    cell1.innerHTML = `
    <a onClick="onDelete(this)">Delete</a>`;
}

//reset

function resetForm1() {
    ["radiobtn_male", "radiobtn_female"].forEach(function (id) {
        document.getElementById(id).checked = false;
    });
    return false;
};
function clearLanguageCheckbox() {
    ["checkbox_english", "checkbox_tamil", "checkbox_hindi", "checkbox_telugu", "checkbox_malayalam"].forEach(function (id) {
        document.getElementById(id).checked = false;
    });
    return false;
};

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("qualification").value = "";
    document.getElementById("select").value = document.getElementById("select1").value;
    document.getElementById("addressed").value = "";
    selectedRow = null;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("mytable").deleteRow(row.rowIndex);
        resetForm();
    }
}