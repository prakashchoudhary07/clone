function setId(id) {
    sessionStorage.setItem("ID", id);
}

function allusers() {
    var userdom = "";
    var userdata = Object;
    loadJSON(function(response) {
        // Parse JSON string into object
        userdata = JSON.parse(response);
        console.log(userdata);
        console.log(userdata.length);
        for (var i = 0; i < userdata.length; i++) {
            userdom += "<div id=\"user\" onclick=\"setId(" + userdata[i].id + ")\"><a href=\"users.html\">";
            userdom += "<div class=\"image\"><div class=\"profile-pic\">";
            userdom += "<img src=" + userdata[i].profile + " alt=" + userdata[i].name.toLowerCase() + "></div><div class=\"profile-text\">" + userdata[i].name.toLowerCase();
            userdom += " </div></div></a></div>";
        }
        document.getElementById("users").innerHTML = userdom;
    });
}