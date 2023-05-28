let firstname = document.getElementById('frname')
let login = document.getElementById('login')
let link = document.getElementById('link')
let blog = document.getElementById('blog')
let username_input = document.getElementById('username-input')
let email= document.getElementById('e-mail')
let city =document.getElementById('city')
let follower=document.getElementById('follower')
let following=document.getElementById('following')
let getBtn = document.getElementById('getBtn')
let photo=document.getElementById("profile-picture");

let request;

if(window.XMLHttpRequest){
    request = new XMLHttpRequest();
}
else{
    request = ActiveXObject("Microsoft.XMLHTTP");
}


request.responseType='json';




const showProfile =()=>{
    queryText = username_input.value;
    request.open("GET",`https://api.github.com/users/${queryText}`)
    // title.innerText =`Movie title:  ${queryText}`
    // year.innerText =`Year:  ${queryText}`
    // genre.innerText =`Genre:  ${queryText}`
    // director.innerText =`Director:  ${queryText}`
    request.send();

    // movieInput.value = '';
}



request.onload= ()=>{
    // let movie = request.response;
    //     title.innerText =`Movie title:  ${movie.Title}`
    //     year.innerText =`Year:  ${movie.Year}`
    //     genre.innerText =`Genre:  ${movie.Genre}`
    //     director.innerText =`Director:  ${movie.Director}`
    //     poster.src=movie.Poster
    


    let gitprofile=request.response;
    if(gitprofile.message=='Not Found'){
        photo.src = "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/4915681/original/crop:x0y0w1280h960/hash:1467658571/1436442720_LOGO.jpg?1467658571"
        frname.innerText='Null';
        login.innerText=`Null`
        link.innerText=`Null`
        blog.innerText=`Null`
        following.innerText=`Null`
        follower.innerText=`Null`
        city.innerText=`Null`
        email.innerText=`Null`
        return;
    }
    console.log(gitprofile)
    firstname=gitprofile.name;
    if(firstname!==null){
        frname.innerText=`Name : ${gitprofile.name}`
    }
    else{
        frname.innerText=`Name : ${"Информация об имени отсутствует!!!"}`
    }
    let templog=gitprofile.login;
    if(templog===undefined){
        photo.src = "https://images.beinsports.com/PP-P_jXsCToVCGfl7mJ_4NW4dwA=/1300x731/smart/ronaldinho-cropped_1nsieiiy254011d58qieaiq0f5.jpg"
    }
    login.innerText=`Login : ${gitprofile.login}`
    link.innerText=`Link : ${gitprofile.html_url}`
    blog.innerText=`Blog : ${gitprofile.blog}`
    following.innerText=`Following : ${gitprofile.following}`
    follower.innerText=`Followers : ${gitprofile.followers}`
    let temp=gitprofile.location;
    if(temp!==null){
        city.innerText=`City : ${gitprofile.location}`
    }
    else{
        city.innerText=`City : ${"Информация о городе отсутствует!!!"}`
    }
    let emailtemp=gitprofile.email;
    if(emailtemp!==null){
        email.innerText=`Email : ${gitprofile.email}`
    }
    else{
        email.innerText=`Email : ${"Информация о почте отсутствует!!!"}`
    }

    
    photo.src=gitprofile.avatar_url
    

    
   

}


request.onerror=()=>{

  
  
}

