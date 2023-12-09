var geo_students = [
    "zain ahmed",
    "Aisha Abdullah",
    "Omar Al-Hakim",
    "Fatima Ahmed",
"Khalid Saleh",
"Layla Al-Farsi",
]

function getStudents(){
    var table = document.getElementById("main_table")
    table.innerHTML = ""
    for (var i = 0; i < geo_students.length; i++){
        var row = table.insertRow(i)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        cell1.innerHTML =geo_students[i]
        cell2.innerHTML ="<button type='button' class='btn btn-dark btn-sm'>edit</button>"
    }
}
//TODO create new list with hist_students and new function  called get_hist_students()