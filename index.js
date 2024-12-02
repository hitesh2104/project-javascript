const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-bnb");
const stopBtn = document.getElementById("stop-bnb");
startBtn.addEventListener("click",()=>{
  document.addEventListener("keydown",handleDown);
  document.addEventlistener("keyup",handleUP);
})
stopBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
  document.addEventlistener("keyup",handleUP);
  logDiv.textContent="";
  stateDiv.textContent=" ";
})
function handlerDown(e){
logdiv.textContent="Key ${e.key} press down";
  stateDiv.textContent="kwy is down";
}
function handlerUp(e){
logdiv.textContent="Key ${e.key} press Up";
  stateDiv.textContent="kwy is UP";
}
