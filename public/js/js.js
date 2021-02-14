function form(){
    let html = "<div id='form'>" + 
                    "<form action='/' method='POST'>" + 
                        "<br>" +
                        "<label for='name'>Name</label><br>" + 
                        "<input type='text' id='name' name='name' style='width: 150px;'><br><br>" + 
                        "<label for='achievement'>achievement</label><br>" + 
                        "<input type='text' id='achievement' name='achievement' style='width: 150px;'><br>" + 
                        "<input type='submit' value='Submit' style='width: 150px;'>" + 
                    "</form>" + 
                "</div>";
    document.getElementById("formWindow").innerHTML = html;
}