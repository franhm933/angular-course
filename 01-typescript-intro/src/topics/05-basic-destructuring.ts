
//Consiste en que podamos coger partes que nos interesen

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New song';

const{ 
    song:anotherSong, 
    songDuration:duration, 
    details //details:{author} sería la forma más rápida
} = audioPlayer; //Podríamos poner con solo song, pero como hay una variable que se llama song le ponemos otro

const{author} = details;

//Sin desestructuración
// console.log('Song: ', audioPlayer.song);
// console.log('Duration: ', audioPlayer.songDuration);
// console.log('Author: ', audioPlayer.details.author);

// // Con desestructuración

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);


// Desestructuración de arrays
// Sin desestructurar
// const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
// const trunks = dbz[3] || 'No hay personaje';

// console.log('Personaje 3: ', dbz[3] || 'No hay personaje');

//Desestructurado

const [p1, p2, trunks  = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.log('Personaje 3: ', p2 || 'No hay personaje');

export{};