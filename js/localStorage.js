function saveData(){
	
	for(var i=1; i<=2; i++){
		localStorage.setItem(`gname${i}`, document.getElementById(`gname${i}`).value);
		localStorage.setItem(`gid${i}`, document.getElementById(`gid${i}`).value);
		localStorage.setItem(`food${i}`, document.getElementById(`food${i}`).value);
		localStorage.setItem(`tip${i}`, document.getElementById(`tip${i}`).value);
		localStorage.setItem(`gid${i}`, document.getElementById(`gid${i}`).value);
		localStorage.setItem(`discount${i}`, document.getElementById(`discount${i}`).value);
		
		document.getElementById("select").innerHTML += `<option>${document.getElementById(`gid${i}`).value}</option>`;
	}
}

function makeReport() {
	selected = document.getElementById("select").value;
	
	for (let key in localStorage) {
		if (localStorage.getItem(key) == selected) {
			let x = key.substr(key.length -1);
			document.getElementById("outid").value = localStorage.getItem(`gid${x}`);
			document.getElementById("outname").value = localStorage.getItem(`gname${x}`);
			let food = parseFloat(localStorage.getItem(`food${x}`));
			let tips = parseFloat(localStorage.getItem(`tip${x}`));
			let discounts = parseFloat(localStorage.getItem(`discount${x}`));

			document.getElementById("outamount").value = ((food + tips - discounts)*1.13).toFixed(2);
		}
	}
}

function printData(){
	window.print();
}