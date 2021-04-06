// get data from json placeholder API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        let json = data.json();
        return json;
    })
    // send request to receive json data
    .then(json => {
        console.log(json);
        // get a random user name from users json array (which came from API)
        let user = json[Math.floor(Math.random() * 10)].username;
        console.log(user);
        return user;
    })
    // send another request to receive the user
    .then(user => {
        // another API to fetch image from server
        let img = `https://joeschmoe.io/api/v1/${user}`;
        return { image: img, title: user };
    })
    // receive the img
    .then(object => {
        // get / target reference of img tag in html
        let image = document.querySelector("img");

        // target reference of div in html
        let title = document.querySelector("#title");

        image.src = object.image;
        title.innerHTML = object.title;
    })
    .catch(err => console.log(err));

