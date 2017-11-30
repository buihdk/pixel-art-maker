// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$("#create").click(function makeGrid(event) {
  	event.preventDefault();
  	let h = document.getElementById("input_height");
	let w = document.getElementById("input_width");
	let table = document.getElementById("pixel_canvas");
	// draw height
	for (let i = 0; i < h.value; i++) {
		// draw width
		let row = table.insertRow(i)
		for (let j = 0; j < w.value; j++) {
			let cell = row.insertCell(j);
			cell.addEventListener('click', function(e) {
		        e.target.style.backgroundColor = document.getElementById("colorPicker").value;
		        this.style.borderColor="#9ecaed";
		    	this.style.boxShadow="0 0 10px #9ecaed";
		    });
		}
	}
	$(this).prop("disabled",true)
});

$("#clear").click(function() {
	location.reload()
});