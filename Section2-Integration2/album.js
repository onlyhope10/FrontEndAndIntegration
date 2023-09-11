// You may check  the file tree in this link so you can located see the files store on the folder :
//www.github.com/onlyhope10/FrontEndAndIntegration.git

function OtherAlbums(){
	
	document.getElementById('OtherAlbums').style.fontWeight ='bold';
	document.getElementById('OtherAlbums').style.fontSize= '22px';
	
	albums();
}




const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f6fe36899mshe858d23477d0afcp11c6b5jsna2b3ec10df66',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function albums(){
	
    const response = await fetch(url,options);
    let results = await response.json();
	results =results.albums.items;

	
	const request30th = `https://open.spotify.com/album/4IjRikscB01fLT0BtKT5g5`; 

	document.getElementById('output').innerHTML = 
		`
		<div id="albumlist">
        		<div id="item1">
					<a href="https://open.spotify.com/album/4IjRikscB01fLT0BtKT5g5" target="_blank">
					<img src="${results[1].data.coverArt.sources[0].url}" alt="img" >
					</a>	
					<p>${results[1].data.name}</br>${results[1].data.date.year}</p>
				</div>
		
				<div id="item2" >
					<a href="https://open.spotify.com/album/7avlHipAwnKsxcXwC9Wpin" target="_blank">
					<img src="${results[2].data.coverArt.sources[0].url}" alt="img" >
					</a>
					<p>${results[2].data.name}</br>${results[2].data.date.year}</p>
				</div>
		
				<div id="item3">
					<a href="https://open.spotify.com/track/7n194jHXt3EXVe2Kd42deD" target="_blank"><img src="${results[3].data.coverArt.sources[0].url}" alt="img" ></a>
					<p>${results[3].data.name}</br>${results[3].data.date.year}</p>
				</div>
            </div>
    	</div>
		`;
	
	document.getElementById('albumlist').style.display = 'flex';
	document.getElementById('albumlist').style.flexDirection = 'row';

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


