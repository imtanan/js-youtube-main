let myarr = [
    {name:"java",author:"bans"},
    {name:"C++",author:"jady"},
    {name:"algoma",author:"CJ"}
]
let borrowerStatus =true;
while(borrowerStatus){
let options = function(){
    console.log(`Good day! please select what do you want:`);
    console.log("1.show Available Books");
    console.log("2.borrow Books");
    console.log("3.Return Book/s");
    console.log("4. exit");
    let choice = Number(prompt("Enter your choice (1,2,3 or 4): "))
    
    if(choice==1){
    showAvailableBooks();
    }else if(choice==2){
        borrowBook();
    }else if(choice==3){
        returnBook();
    }else if(choice==4){
          borrowerStatus = false;
    }
}
}
showAvailableBooks(){}

borrowBook(){}

returnBook(){}