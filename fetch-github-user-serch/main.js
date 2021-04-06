// access elements from html
// get reference of form
const form = document.querySelector("form");
// get reference of user input
const userInp = document.querySelector("#user-input");
// get reference to image container
const imgContainer = document.querySelector(".img-container");


async function githubData() {
    try {
        // use await because it takes time to get data from the server
        let responseGitHub = await fetch(`https://api.github.com/users/${userInp.value}`);

        // parse data received from server
        let convertedData = await responseGitHub.json();
        console.log(convertedData);

        // get image reference
        let img = document.createElement("img");
        img.src = convertedData.avatar_url;
        img.width = 300;
        // append image to container
        imgContainer.appendChild(img);

        // get p reference
        let p = document.createElement("p");
        p.innerHTML = convertedData.name;
        imgContainer.appendChild(p);

        // console.log("login:", convertedData.login);
        // console.log(convertedData.repos_url);
    }
    catch (err) {
        console.log(err);
    }
}

form.addEventListener("submit", (e) => {
    // stop page refreshing
    e.preventDefault();

    // check for the user input
    if (userInp.value.trim() === "") {
        alert("Please enter the user name");
    } else {
        // call github data function
        githubData();
    }
});
