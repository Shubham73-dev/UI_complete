window.addEventListener("load",initEvent);

function initEvent() {
    document.querySelector("#ins_ques").addEventListener("click",insertQues);
    document.querySelector("#del_ques").addEventListener("click",deleteQues);
    document.querySelector("#saveTest").addEventListener("click",saveTest);
    document.querySelector("#show_search").addEventListener("click",showSearch);
    document.querySelector("#search_ques").addEventListener("keyup",searchQues);
    loadStudents();
    loadTest();
}

function saveTest() {
    if(window.localStorage) {
        var data = JSON.stringify(obj.quesList);
        localStorage.setItem("quesList",data);
    }
    else {
        alert("Localstorage not supported...");
    }
}

function loadTest() {
    if(window.localStorage) {
        if(localStorage.quesList) {
            var ques = localStorage.getItem('quesList');
            obj.quesList = JSON.parse(ques);
            showQuestions();
        }
    }
    else {
        alert("Localstorage not supported...");
    }
}

function loadStudents() {
    // var ul = document.querySelector("#studentsList");
    // students.forEach(function (obj) { 
    //     var li = document.createElement("li");
    //     li.innerHTML = obj.name;
    //     ul.appendChild(li);
    //  });

    var table = document.querySelector("#studentsList");
    var url = "https://raw.githubusercontent.com/ravi4all/UI_JanRegMorning_20/master/students.json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            data = this.responseText;
            data = JSON.parse(data);
            // console.log(data.data);
            data.data.forEach(function (obj) { 
                var tr = table.insertRow();
                tr.insertCell().innerHTML = obj.roll_no;
                tr.insertCell().innerHTML = obj.name;
                tr.insertCell().innerHTML = obj.course;
                tr.insertCell().innerHTML = obj.year;
                tr.insertCell().innerHTML = obj.sem;
                tr.insertCell().innerHTML = obj.phone;
                table.appendChild(tr);
             });
        }
    }
    xhttp.open('get',url);
    xhttp.send();
    
}

function insertQues() {
    var subject = document.querySelector("#subject").value;
    var ques = document.querySelector("#ques").value;
    var opt1 = document.querySelector("#opt_1").value;
    var opt2 = document.querySelector("#opt_2").value;
    var opt3 = document.querySelector("#opt_3").value;
    var opt4 = document.querySelector("#opt_4").value;
    var ans = document.querySelector("#ans").value;
    obj.add_ques(subject,ques,opt1,opt2,opt3,opt4,ans);

    showQuestions();
}

function showQuestions() {
    var table = document.querySelector("#quesList");
    table.innerHTML = "";
    obj.quesList.forEach(function (obj) { 
        var tr = table.insertRow();
        tr.insertCell().innerHTML = obj.q_id;
        tr.insertCell().innerHTML = obj.subject;
        tr.insertCell().innerHTML = obj.ques;
        tr.insertCell().innerHTML = obj.opt1;
        tr.insertCell().innerHTML = obj.opt2;
        tr.insertCell().innerHTML = obj.opt3;
        tr.insertCell().innerHTML = obj.opt4;
        tr.insertCell().innerHTML = obj.ans;
        table.appendChild(tr);
        tr.addEventListener("click",selectRow);
     });
}

function selectRow() {
    event.srcElement.parentElement.classList.toggle('bg-danger');
    var qid = event.srcElement.parentElement.children[0].innerHTML;
    // console.log(parseInt(qid));
    obj.select_ques(parseInt(qid))
}

function deleteQues() {
    obj.delete_ques();
    showQuestions();
}

function showSearch() {
    document.querySelector("#search").classList.toggle('showSearch');
}

function searchQues() {
    var str = event.srcElement.value.toLowerCase();
    obj.search_ques(str);
    showQuestions();
}