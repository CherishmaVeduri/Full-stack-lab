//global object
global.student="cherishma";
global.rollNo="A24126552126";

//console object
console.log("hello world");
console.error("something is missing");
console.warn("Danger ahead");

//process object
console.log("processID:",process.pid);
console.log("processSystem:",process.platform);

//buffer object
const data=Buffer.from("Hello nodejs");
console.log("Buffer data:",data);
console.log("Original Text:",data.toString());

//__dirname object
console.log(__dirname);

//__filename object
console.log(__filename);

//setTimeout object
setTimeout(()=>{ 
    console.log("Hello! This message appeared after 3 sec");
},3000);

//setInterval object
let count=1;
const timer=setInterval(()=>{
    console.log("Timer count:",count);
    count++;
    if(count>5){
        clearInterval(timer);
        console.log("Interval stopped");
    }
},1000);