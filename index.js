const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-bnb");
const stopBtn = document.getElementById("stop-bnb");
startBtn.addEventListener("click",()=>{
  document.addEventListener("keydown",handlerDown);
  document.addEventListener("keyup",handlerUp);
})
stopBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handlerDown);
  document.addEventListener("keyup",handlerUp);
  logDiv.textContent="";
  stateDiv.textContent=" ";
})
function handlerDown(e){
logDiv.textContent="Key ${e.key} press down";
  stateDiv.textContent="kwy is down";
}
function handlerUp(e){
logDiv.textContent="Key ${e.key} press Up";
  stateDiv.textContent="kwy is UP";
}
