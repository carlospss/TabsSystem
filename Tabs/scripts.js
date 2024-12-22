import tabs from './tabs.js';

var link_active = 0;

function active(link) {
	link.classList.add('active');
}
function deactive(links) {
	links[link_active].classList.remove('active');
}

function _content(contents) {

	for(let i = 0; i < 4; i++) {
		contents[i].classList.remove('show');
	}
}
function show(index) {
	const content = document.querySelectorAll('.content');
	_content(content);
	content[index].classList.add('show');
}

document.addEventListener('DOMContentLoaded', function() {

	const links = this.querySelectorAll('li a');

	for(let i = 0; i < 4; i++) {

 		links[i].onclick = function(event) {
 			event.preventDefault();
 			deactive(links);
 			active(this);
 			show(i);
 			link_active = i;
 		};
 	}
});