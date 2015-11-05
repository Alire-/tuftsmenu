function sendMenuRequest(){
    request = new XMLHttpRequest();
    //url = "https://sheltered-badlands-7534.herokuapp.com/menu.json?hall=" + location + "&meal=" + meal; //web app for getting menu items
    url = "http://localhost:3000/menu.json?category=Entrees"
    request.open("GET", url, true);

    //Send request w/ proper header info
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = parseMenu;

    request.send();
    //console.log("menu request sent");
}

function parseMenu(){
    //Only parse/edit text once XMLrequest is complete!
    //console.log(request.readyState);
    //console.log(request.status);
    if (request.readyState == 4 && request.status == 200) {
        var menuitems = JSON.parse(request.responseText);

        //console.log("got the food items");
        //console.log(menuitems);
        /* Got array of all menu items */
        var item_active = true;
        / * Populate all tables and carousel */
        for (i = 0; i < menuitems.length; i++) {
            /* If carousel object */
            /*if (menuitems[i]['category'] == "Entrees" && item_active){
                populate_table(menuitems[i]['category'], menuitems[i]['fooditem']);
                populate_carousel_active(menuitems[i]['fooditem']);
                item_active = false;
                //console.log("got first entree");
                //console.log(menuitems[i]['fooditem']);
            } else if (menuitems[i]['category'] == "Entrees" && !item_active) {
                populate_table(menuitems[i]['category'], menuitems[i]['fooditem']);
                populate_carousel(menuitems[i]['fooditem']);
                //console.log("got entree");
                //console.log(menuitems[i]['fooditem']);
            } else {*/
            /* Not an entree item */
            populate_table(menuitems[i]['hall'], menuitems[i]['meal'], menuitems[i]['fooditem']);
        }
    }
}


function populate_table(hall, meal, food_item){
        $("#" + hall + meal).append(food_item + '<br>');
      }
