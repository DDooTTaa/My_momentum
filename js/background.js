const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = `img/${chosenImage}`;

//document.body.appendChild(bgImage);

//document.body.style.backgroundImage = `url(${bgImage})`;

document.body.style = `background-image: radial-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.5)),
    url("../${bgImage}")`