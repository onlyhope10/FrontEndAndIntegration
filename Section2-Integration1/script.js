// You may check  the file tree in this link so you can located see the files store on the folder :
//www.github.com/onlyhope10/FrontEndAndIntegration.git


const url = 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f6fe36899mshe858d23477d0afcp11c6b5jsna2b3ec10df66',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};



async function lyrics(){
    const response = await fetch(url, options);
    const results = await response.json();

    document.getElementById('output').innerHTML = `<a>${results.lyrics.lyrics.body.html}</a>`;
    
}

lyrics();