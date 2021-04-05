window.addEventListener("load", initEvents);

var audio;
var togglePlay;
var togglePlayFlag = true;
function initEvents() {
    audio = document.querySelector('#audio');
    togglePlay = document.querySelector('#toggle-play');
    document.querySelector('#stopSong').addEventListener('click', stopSong);
    loadAllSongs();
}

function loadAllSongs() {
    var ul = document.querySelector("#all_songs");
    songs.forEach(function(obj) {
        var li = document.createElement("li");
        var h5 = document.createElement('h5');
        var img = document.createElement("img");
        var add_btn = document.createElement("button");
        var play_btn = document.createElement("button");
        add_btn.className = 'btn btn-primary playlist_btn';
        play_btn.className = 'btn btn-primary play_btn';
        h5.innerHTML = obj.song_name;
        img.src = obj.song_thumbnail;
        add_btn.innerHTML = '<i class="fas fa-plus">';
        play_btn.innerHTML = '<i class="fas fa-play">';
        play_btn.setAttribute('title', obj.song_id);

        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(play_btn);
        li.appendChild(add_btn);

        ul.appendChild(li);

        play_btn.addEventListener("click", playSong);
    });
}

function playSong() {
    var song_id = this.title;
    for(var i = 0; i < songs.length; i++) {
        if (song_id == songs[i].song_id) {
            var song_url = songs[i].song_url;
            break
        }
    }
    audio.src = song_url;
    audio.play();
    togglePlay.innerHTML = '<i class="fas fa-pause"></i>';
    togglePlay.addEventListener('click', togglePlayState);
    togglePlayFlag = false;
}

function togglePlayState() {
    if(togglePlayFlag) {
        audio.play();
        togglePlay.innerHTML = '<i class="fas fa-pause"></i>';
        togglePlayFlag = false;
    }
    else {
        audio.pause();
        togglePlay.innerHTML = '<i class="fas fa-play"></i>';
        togglePlayFlag = true;
    }
}

function stopSong() {
    audio.currentTime = 0;
    audio.pause();
}