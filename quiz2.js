let dbUsers=[
    {   
        username : "Khoo",
        password : "112233",
        name : "Khoo",
        email : "khoo@student.utem.edu.my"
    },
    {   
        username : "Ho",
        password : "123456",
        name : "Ho",
        email : "ho@student.utem.edu.my"
    },
    {   
        username : "Tan",
        password : "223344",
        name : "Tan",
        email : "tan@student.utem.edu.my"
    }
]

function login(reqUsername,reqPassword){
    let matchUser = dbUsers.find(user => user.username == reqUsername) //=> means array dbUsers will pass every element it find into the variable "user"

    if(!matchUser) return "User not found!"

    if(matchUser.password == reqPassword){
        return matchUser
    } 
    else{
        return "Invalid password!"
    }
}

console.log(login("Khoo","112233")) //try to login
console.log(login("UTeM","112233")) //try to login