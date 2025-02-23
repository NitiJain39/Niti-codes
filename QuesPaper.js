var datas=JSON.parse(localStorage.getItem("Accounts")) || [];
var designation;
function desg(d){
    designation=d;
}
function register(){
    var uname = document.getElementById("uname").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contnum = document.getElementById("contnum").value;
    var pass = document.getElementById("pass").value;
    var confpass = document.getElementById("confpass").value;
    var h1ele = document.getElementById("msg")
    if(uname==""||name==""||email==""||contnum==""||pass==""||confpass==""||desg==""){
        h1ele.innerHTML="This field cannnot be empty"
        return
    }
    if(pass!=confpass){
        h1ele.innerHTML="Password and Confirm Password should be same"
        return
    }
    var Account={
        Designation:designation,
        username:uname,
        name:name,
        email:email,
        contactnumber:contnum,
        password:pass,
        confirmpassword:confpass,
        }
        datas.push(Account);
        localStorage.setItem("Accounts",JSON.stringify(datas));
        h1ele.innerHTML="Account Registered Successfully"
        window.location.href="loginpage.html";}


function login(){
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var h1ele = document.getElementById("msg")
    if(uname==""||pass==""||designation==undefined){
        h1ele.innerHTML="This field cannnot be empty";
        return
    }
  var datas=JSON.parse(localStorage.getItem("Accounts"));
  datas.map((data)=>{
    if(data.username==uname && data.password==pass && designation==data.Designation){
        
            if(designation=="admin"){
                window.location.href="StuQuesPaper.html";

            }
            else if(designation=="student"){
                window.location.href="Quiz.html";
            }
    }
    else{
        h1ele.innerHTML="Invalid Username or Password or Designation";
    }
  }
);    
};
function logout(){
    window.location.href="loginpage.html";
}

var ListQues = JSON.parse(localStorage.getItem("questions")) || [];
var currIndex = 0;
var ANSWERS=[];
    function savedata(){
        var que = document.getElementById("Q").value;
        var a = document.getElementById("A").value;
        var b = document.getElementById("B").value;
        var c = document.getElementById("C").value;
        var d = document.getElementById("D").value;
        var ans = document.getElementById("ANS").value;
        var queinfo = {
            question: que,
            option1: a,
            option2: b,
            option3: c,
            option4: d,
            Answer: ans
        };
        ListQues.push(queinfo);
        localStorage.setItem("questions", JSON.stringify(ListQues));
        }  
    function DisplayQues(){
        ListQues = JSON.parse(localStorage.getItem("questions"));
        document.getElementById("show").innerHTML = ListQues.map((Q,i) => `
        <div class="p-15 pt-0 border-1 border-amber-100">
            <div style="display:flex; justify-content:end; padding-top:40px; margin-bottom:18px;" >
            <button type="button" onclick="deleteStudent(${i})" class= "text-amber-950 font-serif border-1 border-zinc-500 rounded-xs w-25 bg-gray-300 hover:border-[1.5px] hover:border-red-700 hover:bg-rose-300"> Delete <br></button>
            </div>
            <h1 class="text-neutral-100 bg-slate-900">${Q.question}</h1>
            <h3 class="gap-2.5 text-neutral-100 bg-slate-900">${Q.option1} ,
            ${Q.option2} ,
            ${Q.option3} ,
            ${Q.option4}</h3>
            <h2> Answer is :- &nbsp;&nbsp;&nbsp;${Q.Answer}</h2>
        </div>`).join("")

    }
    function deleteStudent(index){
        ListQues.splice(index, 1);
        localStorage.setItem("questions", JSON.stringify(ListQues));
        DisplayQues();
    }
    function ShowQue(currIndex){
        ListQues = JSON.parse(localStorage.getItem("questions"));
        var item = ListQues[currIndex];
        document.getElementById("showQ").innerHTML = 
        `<div class="text-left border-1 border-amber-100 shadow-md shadow-indigo-400 rounded-xl m-20 p-10 text-2xl text-neutral-100">
        <h1 class="font-bold">${item.question}</h1><br>
        <input type="radio" onclick="userSelectAns(${currIndex},'${item.option1}')" name="option" class="mr-3">${item.option1}<br>
        <input type="radio" onclick="userSelectAns(${currIndex},'${item.option2}')" name="option" class="mr-3">${item.option2}<br>
        <input type="radio" onclick="userSelectAns(${currIndex},'${item.option3}')" name="option" class="mr-3">${item.option3}<br>  
        <input type="radio" onclick="userSelectAns(${currIndex},'${item.option4}')" name="option" class="mr-3">${item.option4}<br>
        </div>`
    
         if(currIndex==0){
            document.getElementById("showButtons").innerHTML = 
            `<h2 class="text-left pl-50 flex gap-10">
            <button onclick="ShowQue(${currIndex+1})" class="p-3 border-1 border-black rounded-md w-32 bg-gray-200 hover:border-[1.5px] hover:border-emerald-600 hover:bg-emerald-200">Next</button>
            <button onclick="reportCard()" class="p-3 border-1 border-black rounded-md w-32 bg-gray-200 hover:border-[1.5px] hover:border-yellow-400 hover:bg-yellow-100">Submit</button></h2>`
            }
        else if(currIndex!=0 && currIndex<ListQues.length-1){  
            document.getElementById("showButtons").innerHTML =          
            `<h2 class="flex pl-50 gap-10">
            <button onclick="ShowQue(${currIndex-1})" class="p-3 border-1 border-black rounded-md w-32 bg-gray-200 hover:border-[1.5px] hover:border-cyan-600 hover:bg-sky-200">Previous</button>
            <button onclick="ShowQue(${currIndex+1})" class="p-3 border-1 border-black rounded-md w-32 bg-gray-200 hover:border-[1.5px] hover:border-emerald-600 hover:bg-emerald-200">Next</button>
            <button onclick="reportCard()" class="p-3 border-1 border-black rounded-md w-32 bg-gray-200 hover:border-[1.5px] hover:border-yellow-400 hover:bg-yellow-100">Submit</button></h2>`

        }
        else{  
            document.getElementById("showButtons").innerHTML =          
            `<h2 class="flex pl-50 gap-10">
            <button onclick="ShowQue(${currIndex-1})" class="border-1 border-black rounded-md w-32 p-3 bg-gray-200 hover:border-[1.5px] hover:border-cyan-600 hover:bg-sky-200">Previous</button>
            <button onclick="reportCard()" class="border-1 border-black rounded-md w-32 p-3 bg-gray-200 hover:border-[1.5px] hover:border-yellow-400 hover:bg-yellow-100">Submit</button></h2>`

        }
    }
        
    function userSelectAns(i,op){
        ANSWERS[i]=op;
    }

    function reportCard(){
        let score=0;
        let incorrect = 0;
        let skipped = 0;
        ListQues = JSON.parse(localStorage.getItem("questions"));
        for(let i=0;i<ListQues.length;i++){
            if(ANSWERS[i]==ListQues[i].Answer){
                score++;
            }
            else if(ANSWERS[i]!=ListQues[i].Answer && ANSWERS[i]!=undefined){
                incorrect++;
            }
            else{
                skipped++;
            }
        }
        document.getElementById("showQ").innerHTML = `<div class= "ml-52 mb-12 text-amber-100 text-left text-2xl font-semibold font-serif">
        <h1>Your Score is : &nbsp;&nbsp;${score}</h1>
        <h2>Incorrect Answers : &nbsp;&nbsp;${incorrect}</h2>
        <h2>Skipped Questions : &nbsp;&nbsp;${skipped}</h2></div>`
        document.getElementById("showButtons").innerHTML = `<button onclick="location.reload()" class= "text-sky-700 text-2xl font-semibold font-serif p-1 border-1 border-zinc-500 rounded-lg w-3xs bg-gray-300 hover:border-2 hover:border-sky-700 hover:bg-blue-200 text-center hover:text-amber-900 ">Start Again</button>`

    }
    
    