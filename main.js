var imagearray= ["pic 1.gif", "pic 2.jpg", "pic 3.png"];
var namearray= ["Family 1", "Family 2", "Family 3"];
var i= 0;
function update() {
    i++;
    var numberoffamily= 2;
    if (i > numberoffamily) {
        i= 0;
    }
    var updateimages= imagearray[i];
    var updatename= namearray[i];
    document.getElementById("family_members").src= updateimages;
    document.getElementById("familynames").innerHTML= updatename;
}