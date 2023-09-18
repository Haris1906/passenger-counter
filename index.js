let count=0;
let saveEl = document.getElementById("save-el")
function increment()
{
 count=count+1
 document.getElementById("count").innerText=count
}
function save()
{
 let saved=count+" - "
 saveEl.textContent+=saved
 count=0
 document.getElementById("count").innerText=count
}
