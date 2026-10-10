var user=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"image-card.png"
    },{
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]
var index=0;

function toggle(){
    if(index==0){
        index=1;
    }else{
        index=0;
    }
    document.getElementById("user-name").innerHTML=user[index].name;
    document.getElementById("user-gender").innerHTML=user[index].gender;
    document.getElementById("user-image").src=user[index].image;
}
function randomUser(){
    fetch("https://randomuser.me/api")
    .then(function(rawData){
        return rawData.json();
    })
    .then(function(jsonData){
        var user=jsonData.results[0];
        var gender=user.gender;
        var name=user.name.title+" "+user.name.first+" "+user.name.last;
        var image=user.picture.large;
        document.getElementById("user-name").innerHTML=name;
        document.getElementById("user-gender").innerHTML=gender;
        document.getElementById("user-image").src=image;
    })
}