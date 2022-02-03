document.getElementById("people-input").addEventListener("input", showErrorMsg);

function showErrorMsg(e) {
    console.log(e);
    if(document.getElementById("people-input").value === 0) {
        document.getElementsByClassName("error").style.display = block;
    }
};