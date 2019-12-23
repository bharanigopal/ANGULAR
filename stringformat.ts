let msg:string="Welcome TO typeScript";
let firstChar:String=msg.charAt(0);
let restChar:String=msg.substring(1);
let newMsg:String=firstChar.toUpperCase()+restChar.toLowerCase();
console.log(msg);
console.log(newMsg);