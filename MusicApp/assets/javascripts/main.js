window.addEventListener("load", initEvents);

function initEvents() {
    loadAllSongs();
}

function loadAllSongs() {
    var ul = document.querySelector("#all_songs");
    songs.forEach(function(obj) {
        var li = document.createElement("li");
        var h5 = document.createElement('h5');
        var img = document.createElement("img");
        var btn = document.createElement("button");
        btn.className = 'btn btn-primary';
        h5.innerHTML = obj.song_name;
        img.src = obj.song_thumbnail;
        btn.innerHTML = '<i class="fas fa-plus">';

        li.appendChild(img);
        li.appendChild(h5);
        li.appendChild(btn);

        ul.appendChild(li);
    })
}