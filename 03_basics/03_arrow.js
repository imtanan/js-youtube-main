const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
 console.log(`${this.username}, Welcom to website`);
 //console.log(this);
 
    }
}


//user.welcomeMessage()
//console.log(this);

function chai(){
    console.log(this);
    
}
chai()







