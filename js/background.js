const images = [
    "https://photo.coolenjoy.net/data/editor/1908/Bimg_fbeae84af08bbd7de189375fbdf82983_xmol.png",
    "https://cdn.imweb.me/upload/S2017090459ad63af61840/5ac6db588cf82.jpg",
    "https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733__340.jpg",
    "https://cdn.topstarnews.net/news/photo/202006/798925_522660_5550.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//document.body.appendChild(bgImage);

//document.body.style.backgroundImage = `url(${bgImage})`;

document.body.style = `background-image: radial-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.5)),
    url("${chosenImage}")`