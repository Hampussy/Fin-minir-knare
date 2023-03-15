let matte = document.getElementById("rakna");

function rakna(value){
    matte.value += value;
}

function rakna2() {
    matte.value = eval(matte.value);
}

function clearInput() {
    matte.value = '';
}

function visaBoobies() {
    if (matte.value == "8008"){
    document.getElementById("secret").innerHTML = "Boobies";
    }
}