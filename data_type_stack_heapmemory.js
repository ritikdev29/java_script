// Primitive (Stack) , Non Primitive (Heap memory)

let myYoutubename = "Vlog.com"

let anothername = myYoutubename;
anothername = "Comedy"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"Hello23@gmail.com",
    upi:"usersbi"
}

let userTwo = userOne
userTwo.email = "Ritik@gamil.com"
console.log(userOne.email);  // heap kai under same refrennce milta hai memory kia under
console.log(userTwo.email);

