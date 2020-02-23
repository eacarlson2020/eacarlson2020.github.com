let currentImage = 0;
let myPhotos = [
			"keys.jpg",
			"openbackpack.jpg",
			"bottle.jpg",
			"charger.jpg"
		];
		const container = document.getElementById('content');
		const nextBtn = document.getElementById('Open Backpack');

		nextBtn.addEventListener('click', function(event){
			event.preventDefault();
			currentImage++;
			
			if(currentImage == (myPhotos.length)){
				currentImage = 0;
			}
			swapImage();
		});

			function swapImage(){
				const newSlide = document.createElement('img');
				newSlide.src = `images/${myPhotos[currentImage]}`;
				newSlide.setAttribute("class", "fadeinimg", "size");
				container.appendChild(newSlide);
			
			if(container.children.length > 2){
				container.removeChild(container.children[0]);
			}
			};

			const h1Tag = document.querySelector('h1');

	h1Tag.addEventListener('click', function(){
   	 h1Tag.className="big";
   	 });