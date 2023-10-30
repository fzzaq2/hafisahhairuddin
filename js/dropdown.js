function dropdownFunction() {
    var el = document.getElementById("myTopNav");
    var check = document.getElementById("btnControl").checked;
    if (check == false) {
        el.className += " responsive";
    }
    else {
        el.className = "topnav";
    }
}