// function Question(subject,ques,opt1,opt2,opt3,opt4,ans) {
//     this.subject = subject;
//     this.ques = ques;
//     this.opt1 = opt1;
//     this.opt2 = opt2;
//     this.opt3 = opt3;
//     this.opt4 = opt4;
//     this.ans = ans;
// }

class Question {
    constructor(q_id,subject, ques, opt1, opt2, opt3, opt4, ans) {
        this.q_id = q_id;
        this.subject = subject;
        this.ques = ques;
        this.opt1 = opt1;
        this.opt2 = opt2;
        this.opt3 = opt3;
        this.opt4 = opt4;
        this.ans = ans;
        this.selected = false;
    }
}

var obj = {
    "quesList" : [],
    "q_id" : 0,
    "add_ques" : function(subject, ques, opt1, opt2, opt3, opt4, ans) {
        this.q_id += 1;
        var item = new Question(this.q_id,subject, ques, opt1, opt2, opt3, opt4, ans);
        this.quesList.push(item);
    },
    "select_ques" : function(qid) {
        var quesArray = this.quesList.filter(function(x) {
            return x.q_id == qid;
        });
        // console.log(quesArray);
        quesArray[0].selected = !quesArray[0].selected;
    },
    "delete_ques" : function() {
        this.quesList = this.quesList.filter(function(x) {
            return x.selected == false;
        })
    },
    "search_ques" : function(str) {
        // for(var i = 0; i < obj.quesList.length; i++) {
        //     if (obj.quesList[i].subject.toLowerCase().includes(str)) {

        //     }
        // }
        this.quesList = this.quesList.filter(function(x) {
            return x.subject.toLowerCase().includes(str);
        })
    }
}