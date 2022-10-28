const password = document.getElementById('password');
const background = document.getElementById('background');
const but=document.getElementById('but')
but.addEventListener('click', (e) => {
	if( password.value ==='test'){
			background.style.filter = "blur(0px)";
	}

});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});