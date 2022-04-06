var student_names = [];

function submit()
{
    var student_names_display = [];
    for (var i = 1; i <= 4; i++)
    {
        var students = document.getElementById("name_of_the_student_"+i).value;
        student_names.push(students);
    }
    var student_names_length = student_names.length;
    for (var j = 0; j<student_names_length;j++)
    {
        student_names_display.push("<h4>Name: "+student_names[j]+'</h4>');
    }
    document.getElementById("display_name_with_commas").innerHTML = student_names_display;
    var remove_commas = student_names_display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
    
}

function sorting()
{
    student_names.sort();
    var student_names_sorted = [];
    var student_names_length = student_names.length;
    for (var j = 0; j<student_names_length;j++)
    {
        student_names_sorted.push("<h4>Name: "+student_names[j]+'</h4>');
    }
    var remove_commas = student_names_sorted.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}