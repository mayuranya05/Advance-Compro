//Parent class
class Media {
    constructor(info) {
        this.publishDath = info.publishDath;
        this.name = info.name;
    }
}

//Child class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody",
    publishDath: 1975,
});

console.log(mySong);