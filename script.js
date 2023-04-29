let heroBg = document.querySelector('.hero');

setInterval(() => {
	heroBg.style.backgroundImage = 'url(img/bg-light.jpg)';
	setTimeout(() => {
		heroBg.style.backgroundImage = 'url(img/bg.jpg)';
	}, 1000);
}, 2200);
