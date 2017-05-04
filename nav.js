'use strict';

window.onload = function(){
	var c1 = document.getElementById('content1');
	console.log(c1);
	var c2 = document.getElementById('content2');
	console.log(c2);
	var c3 = document.getElementById('content3');
	console.log(c3);
	var c4 = document.getElementById('content4');
	console.log(c4);

	var n1 = document.getElementById('about');
	console.log(n1);
	var n2 = document.getElementById('skill');
	console.log(n2);
	var n3 = document.getElementById('resume');
	console.log(n3);
	var n4 = document.getElementById('contact');
	console.log(n4);

	n1.onclick = function(){
		c1.style.display = 'block';
		c2.style.display = 'none';
		c3.style.display = 'none';
		c4.style.display = 'none';
		n1.className = "active";
		n2.className = "";
		n3.className = "";
		n4.className = "";
	}

	n2.onclick = function(){
		c1.style.display = 'none';
		c2.style.display = 'block';
		c3.style.display = 'none';
		c4.style.display = 'none';
		n1.className = "";
		n2.className = "active";
		n3.className = "";
		n4.className = "";
		console.log('c1');
		console.log('c2');
		console.log('c3');
		console.log('c4');
		console.log('n1');
		console.log('n2');
		console.log('n3');
		console.log('n4');
	}

	n3.onclick = function(){
		c1.style.display = 'none';
		c2.style.display = 'none';
		c3.style.display = 'block';
		c4.style.display = 'none';
		n1.className = "";
		n2.className = "";
		n3.className = "active";
		n4.className = "";
	}

	n4.onclick = function(){
		c1.style.display = 'none';
		c2.style.display = 'none';
		c3.style.display = 'none';
		c4.style.display = 'block';
		n1.className = "";
		n2.className = "";
		n3.className = "";
		n4.className = "active";
	}

};

