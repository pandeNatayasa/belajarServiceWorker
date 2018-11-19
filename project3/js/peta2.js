	// console.log('sss');
		
		function findLocation(x,y) {
			// console.log(x,y);
			for (var i=0; i< placesreview.length;i++) {
				if (placesreview[i].lokasi[0]==x &&	placesreview[i].lokasi[1]==y) {
					return i;
				}
			}
			return -1;
		}

		function showLocation(e) {  
		// console.log(e.latlng.lat);
		// console.log(e.latlng);
			let ix= findLocation(e.latlng.lat,e.latlng.lng); 
			if (ix >=0) { 
				 img.src= placesreview[ix].gambar; 
				 par.textContent=placesreview[ix].review; 
				 
			} 
		}

	let gmb= document.getElementById("gmb");
	let rev= document.getElementById("review");
	let img= document.createElement('img');
	let par= document.createElement('p');
	gmb.appendChild(img);
	rev.appendChild(par);

	// console.log('URL');
	
	(async function (){
		const URL = "data/peta2.json";
		// console.log(URL);
		try {
				const resp = await(fetch(URL));
				// console.log(resp);
        const respv2 = await resp.json();
        // const aaa = await resp.json();
        // console.log(respv2);
        localStorage.setItem('places', JSON.stringify(respv2.placesreview))
		}
		catch(err){
			console.log(err);
		}

	})( );
	// // f(URL);
	let placesreview = JSON.parse(localStorage.getItem('places'));

	// console.log(placesreview);

	for (var p of placesreview) {
		var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
		// console.log(marker);
		marker.on('click', showLocation);
		// console.log(showLocation());
	}

	// fetch(URL)
	// .then(function(response){
	// 	if (response.status !== 200) { //HTTP Status
	// 	console.log('Ada masalah. Status Code: ' +
	// 	response.status);
	// 	throw response.statusText;

	
	// }
	// 	return response.json()
	// })
	// .then ( resp => {
	// 	let places= resp.places;
	// 	localStorage.setItem('places',
	// 	JSON.stringify(resp.places));
	// })
	// .catch(function(err){
	// 	console.log(err);
	// });

	// let places= JSON.parse(localStorage.getItem('places'));
	