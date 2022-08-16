function nameCheck(name) {
  let names = ['Olly', 'olly', 'Oluchukwu', 'oluchukwu', 'Christine', 'christine','Chukwuma', 'chukwuma','Sunny', 'sunny' ,'Wannandah', 'wannandah','Worenwu', 'worenwu','Sunnie', 'sunnie'];
  if (names.indexOf(name)>= 0){
    return true
  }
}


function getUserName() {
    var nameOne = document.getElementById('nameOne').value;
    var nameTwo = document.getElementById('nameTwo').value;
    var result = document.getElementById('result');

    if (nameOne.length < 3 || nameTwo.lenght < 3) {
      return result.textContent = 'Name must contain at least 3 characters';
  }

    if (nameCheck(nameOne) && nameCheck(nameTwo)){
      return result.innerText = "100% in Love" +", You love each other so much, you'll probably get Married";
} else {
    function calculateLove(){
        var n = Math.floor(Math.random() * 100);
        return n
      };
      
      var love = calculateLove();
    
      if (love > 70) {
        result.innerText =love +"% in Love" +", You love each other so much, you'll probably get Married";  
      } else{
          result.innerText= love+"% in Love";
      }
}
}

var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false)