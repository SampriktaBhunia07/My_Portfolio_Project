function loadImage(event) {
    const image = document.getElementById("profilePic");
    image.src = URL.createObjectURL(event.target.files[0]);
}

