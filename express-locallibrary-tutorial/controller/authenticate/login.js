var login = function(user,password) {
    console.log(user,password)
        if(user==="admin@admin.com" && password==="admin"){
            return true;
        }
        else if (user === "test@test.com" && password === "test") {
            return true;
        }
        else{
            return false;
        }
    }
    
module.exports=login;
