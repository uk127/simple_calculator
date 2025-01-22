var inp = document.getElementById("inp");
function todisp(inp_val){
    inp.value = inp.value+inp_val;
}
function clr(){
    inp.value = "";
}
function del(){
    inp.value = (inp.value).slice(0,-1);
}

function calculate(){
    char_nums = (inp.value).split(/[\+\-\*\/\√]/);
    nums = char_nums.map(element => parseFloat(element));
    oper = (inp.value).match(/[\+\-\*\/\√]/g);
    //inp.value = nums;
    var res = nums[0];
    for(let i=0;i<oper.length;i++){
        switch(oper[i]){
            case '+':
                res += nums[i+1];
                break;
            case '-':
                res -= nums[i+1];
                break;
            case '*':
                res *= nums[i+1];
                break;
            case '/':
                res /= nums[i+1];
                break;
        }
    }
    inp.value = res;
}
