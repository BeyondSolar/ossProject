let count_el=document.getElementById("pass_count")

let count=0

let message="You have three new messages."

function increment(){
    count=count+1;
    console.log("Button CLicked");
    count_el.innerText=count;
}

curr_count='Previous Entries'+' - ';

function save(){
    curr_count+=(count+' - ');
    count=0;
    count_el.textContent=count;
    document.getElementById("save").innerText=curr_count;
}

function _clear(){
    curr_count='Previous Entries - ';
    console.log("Button CLicked");
    document.getElementById("save").innerText=curr_count;
}

message="Hi There!";

welcome_el=document.getElementById("welcome").innerText=message;