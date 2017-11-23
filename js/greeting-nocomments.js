(function(){
  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  
  function PerformGreeting() {
    myName.innerHTML = userName.value;
    event.preventDefault();
    return false;
  }

  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; //Firefox
  } else {
    getName.addEventListener("submit", PerformGreeting);
  }
  
}());
