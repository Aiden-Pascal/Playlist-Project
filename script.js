// Selecting DOM elements correctly
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

let imgDisplay = document.querySelector(".display-image");
let nameDisplay = document.querySelector(".display-song");
let artistDisplay = document.querySelector(".display-artist");
let linkDisplay = document.querySelector(".display-link");

let add = document.querySelector(".add");

// Arrays storing song details
let imgArray = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFhI5oDy-3SEoKFNGFxY3aWBps8jOYgGTNDIN9hksUQpCFmGuG9-Lcki-Sqmh-NwdzVe1CAnjWoo1HEfo4xJYew", "https://i.ytimg.com/vi/xt5vyPGJH0M/maxresdefault.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/In_Stars_and_Time_cover.png/220px-In_Stars_and_Time_cover.png", "https://i.ytimg.com/vi/5XTzxutDgD8/maxresdefault.jpg", ];
let nameArray = ["Agnes", "Fall", "Do You Remember - (Our Country)", "Legendary"];
let artistArray = ["Glass Animals", "Derivikat", "Studio Thumpy Puppy", "Jorge-Rivera Williams"];
let linkArray = [
  "https://open.spotify.com/track/6prvUr8l3t7x5GY7heQb5w?si=c1cab3023bc14f83",
  "https://open.spotify.com/album/0nqpRZN1TIjJLrOOddNhj9",
  "https://open.spotify.com/track/0rl0Dv4fZnZ9mZz8esHwNA?si=f8b6e1a809f5462f",
  "https://open.spotify.com/track/7pM9Mn8WdnjNjYEoMW93Nt?si=125c9d246ecf4dd1"
];

// Creating song objects
let objectArray = nameArray.map((name, index) => ({
  Img: imgArray[index] || "", // Ensuring no undefined values
  Name: name,
  Artist: artistArray[index],
  Link: linkArray[index],
}));

// Function to add song info
function addSongInfo() {
  let newSong = {
    Img: image.value,
    Name: songName.value,
    Artist: artist.value,
    Link: songLink.value,
  };
  
  objectArray.push(newSong);
  image.value = "";
  songName.value = "";
  artist.value = "";
  songLink.value = "";
}

// Function to empty display before adding new songs
function emptyDisplay() {
  imgDisplay.innerHTML = "";
  nameDisplay.innerHTML = "";
  artistDisplay.innerHTML = "";
  linkDisplay.innerHTML = "";
}

// Function to display songs
function displaySongInfo() {
  emptyDisplay();
  objectArray.forEach((track) => {
    if (track.Img) imgDisplay.insertAdjacentHTML("beforeend", `<img src="${track.Img}" alt="Song Image">`);
    nameDisplay.insertAdjacentHTML("beforeend", `<p>${track.Name}</p>`);
    artistDisplay.insertAdjacentHTML("beforeend", `<p>${track.Artist}</p>`);
    linkDisplay.insertAdjacentHTML("beforeend", `<a href="${track.Link}" target="_blank">Listen</a>`);
  });
}

// Click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// Initial display of stored songs
displaySongInfo();
