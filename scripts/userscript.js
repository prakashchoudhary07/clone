function getUser() {

    loadJSON(function(response) {
        var id = sessionStorage.getItem("ID");
        // console.log(id);
        var userdom = "";
        var userdata = JSON.parse(response);
        // console.log(userdata[id]);
        userdom += "<div class=\"image\"><div class=\"profile-pic\" style=\"vertical-align: middle;\">";
        userdom += "<img src=" + userdata[id].profile + " alt=" + userdata[id].name + "></div><div class=\"profile-text\"> Name: " + userdata[id].name.toLowerCase();
        userdom += "<br>Company: " + userdata[id].company;
        userdom += "<br>City: " + userdata[id].area;
        userdom += "<br><p> Bio: " + userdata[id].bio + "</p>";
        userdom += "College: " + userdata[id].college;
        if (userdata[id].linkedin !== "") {
            userdom += "<br><a href=\"" + userdata[id].linkedin + "\">Linkedin</a>";
        } else {
            userdom += "<br><a href=\"nolink.html\">Linkedin</a>";

        }
        if (userdata[id].twitter !== "") {
            userdom += "<br><a href=\"" + userdata[id].twitter + "\">Twitter</a>";
        } else {
            userdom += "<br><a href=\"nolink.html\">Twitter</a>";

        }
        if (userdata[id].github !== "") {
            userdom += "<br><a href=\"" + userdata[id].github + "\">Github</a>";
        } else {
            userdom += "<br><a href=\"nolink.html\">Github</a>";

        }
        userdom += "</div></div>";
        document.getElementById("user").innerHTML = userdom;
    });
}


function setId(id) {
    sessionStorage.setItem("ID", id);
}

function getFriends() {

    loadJSON(function(response) {
        var id = sessionStorage.getItem("ID");
        console.log(id);
        var userdom = "";
        var userdata = JSON.parse(response);
        console.log("HELLO");
        console.log(userdata);
        console.log(userdata[id].friends.length);
        var friends = userdata[id].friends;
        console.log(friends[0])
        for (let i = 0; i < friends.length; i++) {
            userdom += "<div id=\"user\" class = \" friendssection\" onclick=\"setId(" + userdata[friends[i]].id + ")\"><a href=\"users.html\">";
            userdom += "<div class=\"image\"><div class=\"profile-pic\">";
            userdom += "<img src=" + userdata[friends[i]].profile + " alt=" + userdata[friends[i]].name.toLowerCase() + "></div><div class=\"profile-text\">" + userdata[friends[i]].name.toLowerCase();
            userdom += " </div></div></a></div>";
        }

        document.getElementById("userFriends").innerHTML = userdom;
        console.log("HELLO");
    });
}