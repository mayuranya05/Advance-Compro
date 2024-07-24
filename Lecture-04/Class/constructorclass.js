class Song {
    constructor(titel, artist) {
        this.titel = titel;
        this.artist = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.titel);