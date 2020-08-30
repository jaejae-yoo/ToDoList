var itemList = [];
var count = 0; var do_count = 0; var result = 0;

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

//사용자가 add 클릭 시, itemList에 사용자의 입력 값을 저장
function addList() {
    var item = document.querySelector("#item").value;
    if (item != null){
        itemList.push(item);
        document.querySelector("#item").value = ""; //add 클릭 이후에 기존 검색 창 초기화
        document.querySelector("#item").focus();    //text field에 cursor
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
         remove[i].addEventListener("click", removeList);   //X 클릭
     }
     document.querySelector('#showResult').innerHTML = "completion rate of today's goal " + result+" %"; //목표 달성률 표시
}

function removeList() {
    //console.log(this);
    var id = this.getAttribute("id");           
    do_count+=1;
    result = Math.round((do_count/count)*100);
    itemList.splice(id, 1);            //X를 클릭한 index 삭제
    showList();
}
