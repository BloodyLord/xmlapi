let requestURL;
const textfield = document.querySelector(".url-input");
const submitButton = document.getElementsByClassName('submit')[0];
submitButton.addEventListener('click', function(e) {
    requestURL = textfield.value;
    if (requestURL === '') {
        alert("Please enter a valid URL");
    }

    //make xml object for the url.
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestURL);
    console.log(`processed! url: ${requestURL}`);
    xhr.send();

    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === 4){
    
            const res = JSON.parse(this.responseText);
            console.log(res);

            displayCard(res);
        }
    }
    
})

function displayCard(res) {
    let profileDiv = document.querySelector(".profile-div");
    let avatarDiv = profileDiv.querySelector(".avatar-div");
    avatarDiv.style.width="250px"; avatarDiv.style.height = "250px";
    profileDiv.style.width = "500px";

    let avatar = profileDiv.querySelector('.avatar');
    avatar.setAttribute('src', `${res.avatar_url}`);

    profileDiv.querySelector('.fullname').innerHTML = `<a href = "${res.url}">${res.name}</a>`;
    profileDiv.querySelector('.bio').textContent = `"${res.bio}"`
    profileDiv.querySelector(".followers").textContent = `Followers: ${res.followers}`;
}


