/*

JavaScript Algorithms and Data Structures Projects: Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/


function checkCashRegister(price, cash, cid) {
  var change = JSON.parse(JSON.stringify(cid)); //use drawer values given for possible change
  const cidTwo = JSON.parse(JSON.stringify(cid));
  var status = "";
  var neededChange = cash-price;
  const value = [
    ["penny" , .01, 0],
    ["nickel" , .05, 0],
    ["dime" , .1, 0],
    ["quarter" , .25, 0],
    ["one" , 1, 0],
    ["five" , 5, 0],
    ["ten" , 10, 0],
    ["twenty" , 20, 0],
    ["hundred" , 100, 0]
  ];

  function checkCashInDrawer(cidTwo,value, change){
    var cash = 0;
    for(let i = 0; i< cidTwo.length; i++){
      value[i][2] = (cidTwo[i][1]/value[i][1]);
      cash += Math.round(cidTwo[i][1]*100);
      change[i][1] = 0; //set change to zero
    }
    return cash/100; //avoiding decimal issues
  }
  var totalCid = checkCashInDrawer(cidTwo ,value, change);
  //Check insufficient total funds
  if (neededChange > totalCid){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  //Check if it is exact change
  if (neededChange == totalCid){
    change = [...cid];
    
    status = "CLOSED";
    return {status, change};
  }

  //Check to see if there is enough change for transaction
   for (let i = value.length-1; i >= 0; i--) { //filter through coins
     while(neededChange-value[i][1]>=0 && value[i][2]>0) {
        change[i][1]+= value[i][1]; //add coin
        change[i][1] = Math.round(change[i][1] * 100) / 100;//fix precision
        neededChange -= value[i][1]; //subtract from needed
        neededChange = Math.round(neededChange * 100) / 100; //fix precision
        value[i][2]--;
        
      }
      if(change[i][1] === 0){change.splice(i,1);}
    }
    if (neededChange > 0){return {status: "INSUFFICIENT_FUNDS", change: []};}
    status = "OPEN";
    //reverse output
    function reverseChange(change){
      var changey = [];
      for(let i=change.length-1; i>=0; i--){
        changey.push(change[i]);
      }
      return changey;
    }
    change = reverseChange(change);
    return {status, change};
}
console.log(
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));