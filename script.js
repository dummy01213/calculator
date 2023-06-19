const number_buttons = Array.from(document.getElementsByClassName("int"));
const screen = document.getElementById("input");
const operators = Array.from(document.getElementsByClassName("operator"));
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const delete_button = document.getElementById("delete")
var cur_number = "";
var prev_number = "";
var cur_operator = "";

number_buttons.forEach((btn)=>{
    btn.onclick = () => {
        cur_number  += btn.value;
        screen.innerText = cur_number;
    }
})

const calc = (e) => {
    if (cur_number == "" || (cur_operator == "" && e.target.value == "=")){
        return;
    } else if (cur_operator == "" && e.target.value !== "=") {
        prev_number = cur_number;
        cur_number = "";
        cur_operator = e.target.value;
    } else {
        const a = Number(prev_number), b = Number(cur_number), o = cur_operator;
        var res;
        if (o == "+") res = a + b;
        if (o == "-") res = a - b;
        if (o == "*") res = a * b;
        if (o == "/") res = a / b;
        screen.innerText  = res;
        cur_number = res;
        cur_operator = "";
    }
    
}

equal.onclick = calc;
operators.forEach((operator) =>{
    operator.onclick = calc;
})

clear.onclick = () =>{
    cur_number = "";
    prev_number = "";
    cur_operator = "";
    screen.innerText = "0";
}

delete_button.onclick = () => {
    if (cur_number == "") return;
    cur_number = cur_number.slice(0, -1);
    screen.innerText = cur_number
}