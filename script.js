const password = document.getElementById('password');
const background = document.getElementById('background');
const but=document.getElementById('but')
but.addEventListener('click', (e) => {
	if( password.value ==='test'){
			background.style.filter = "blur(0px)";
	}

});

