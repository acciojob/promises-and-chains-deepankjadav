document.getElementById("userForm").addEventListener("submit" ,function(event){
    event.preventDefault;

    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

    if(!name || !age){
        alert("inputs cannot be empty.");
        return;
    }

    age=parseInt(age ,10);
    const checkpromise = new Promise((resolve , reject) =>
    {
        setTimeout(() => {
            if(age => 18){
                resolve(`Welcome, ${name}. You can vote.`);
            }
            else{
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    checkpromise
    .then((message) => alert(message))
    .catch((error) => alert(error));

});