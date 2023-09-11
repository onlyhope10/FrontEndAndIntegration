// You may check  the file tree in this link so you can located see the files store on the folder :
//www.github.com/onlyhope10/FrontEndAndIntegration.git

function RelatedArtists(){
	
	document.getElementById('RelatedArtists').style.fontWeight ='bold';
	document.getElementById('RelatedArtists').style.fontSize= '22px';

	ra();
	
}


const urll = 'https://spotify23.p.rapidapi.com/artist_related/?id=2w9zwq3AktTeYYMuhMjju8';
const optionss = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f6fe36899mshe858d23477d0afcp11c6b5jsna2b3ec10df66',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};
/* <a href=""></a> */
async function ra(){
	
    const response = await fetch(urll, optionss);
    let results = await response.json();
	results =results.artists;

	document.getElementById('output').innerHTML = 
		`
		<div id="artists">
        	<div id="item1">
				<a href="https://open.spotify.com/artist/6RQDTlies3nrNDJwXvbBZT" target="_blank"><img src="${results[0].images[1].url}" alt="img" ></a>	
				<p>${results[0].name}</p>
            </div>

			<div id="item2">
				<a href="https://open.spotify.com/artist/57Pw3FSi1qi2fOY4wKOKjK" target="_blank"><img src="${results[1].images[1].url}" alt="img" ></a>	
				<p>${results[1].name}</p>
            </div>

			<div id="item3">
				<a href="https://open.spotify.com/artist/0BmLNz4nSLfoWYW1cYsElL" target="_blank"><img src="${results[2].images[1].url}" alt="img" ></a>	
				<p>${results[2].name}</p>
            </div>
    	</div>
		`;

	document.getElementById('artists').style.display = 'flex';
	document.getElementById('artists').style.flexDirection = 'row';
	
	document.getElementById('item1').style.display = 'flex';
	document.getElementById('item1').style.flexDirection = 'column';
	document.getElementById('item1').style.margin = '12px';

	document.getElementById('item2').style.display = 'flex';
	document.getElementById('item2').style.flexDirection = 'column';
	document.getElementById('item2').style.margin = '12px';

	document.getElementById('item3').style.display = 'flex';
	document.getElementById('item3').style.flexDirection = 'column';
	document.getElementById('item3').style.margin = '12px';

}



