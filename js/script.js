// Year in footer
document.getElementById('year')?.append(new Date().getFullYear());

// Dark / Light mode toggle with persistence
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'dark';
if (saved === 'light') root.classList.add('light');
toggle?.addEventListener('click', () => {
	root.classList.toggle('light');
	localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Simple typewriter for hero tagline
const tw = document.querySelector('.typewriter');
if (tw){
	const text = tw.getAttribute('data-text') || '';
	let i = 0;
	const speed = 35;
	const loop = () => {
		if (i <= text.length){
			tw.textContent = text.slice(0, i);
			i++;
			setTimeout(loop, speed);
		}
	};
	loop();
}

// Project filter chips
const filterWrap = document.querySelector('.filterable');
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => chip.addEventListener('click', () => {
	chips.forEach(c => c.classList.remove('active'));
	chip.classList.add('active');
	const cat = chip.dataset.filter;
	if (!filterWrap) return;
	filterWrap.querySelectorAll('.card').forEach(card => {
		const show = cat === 'all' || card.dataset.cat === cat;
		card.style.display = show ? '' : 'none';
	});
}));