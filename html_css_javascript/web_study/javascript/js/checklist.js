var itemList = [];
var count = 0;
var do_count = 0;
var rresult = 0;

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList() {
    var item = document.querySelector("#item").value;
    if (item != null){
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
        count+=1;
        //console.log(count);
    }
    showList();
}

function showList(){
    var list = "<ul>";
    for(var i=0; i<itemList.length; i++){
        list += "<li>" + itemList[i] +"<span class='close' id=" + i + ">X</span></li>";
    }
    list += "</ul>"

    document.querySelector("#itemList").innerHTML = list;
    var remove = document.querySelectorAll(".close");
     for(var i=0; i<remove.length; i++){
         remove[i].addEventListener("click", removeList);
     }
     document.querySelector('#showResult').innerHTML = "completion rate of today's goal " + rresult+" %";
}

function removeList() {
    //console.log(this);
    var id = this.getAttribute("id");
    do_count+=1;
    Math.round()
    rresult = Math.round((do_count/count)*100);
    itemList.splice(id, 1);
    showList();
}
