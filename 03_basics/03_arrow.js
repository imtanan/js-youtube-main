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
    let username = "hitesh"
    console.log(this.username);
    
}
chai()







