//your JS code here. If required.
function createPromise(){
	return new Promise((resolve)=>{
		let time = Math.random()*3 + 1
		setTimeout(()=>resolve(time),time*1000)
	})
}

let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise();

let tableBody = document.getElementById('output')


Promise.all([promise1,promise2,promise3]).then((times)=>{
	for(let i=0;i<3;i++){
		let row = tableBody.insertRow(i);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);

		cell1.innerHTML = `Promise ${i+1}`;
		cell2.innerHTML = times[i].toFixed(0);
	}

	//fourth row
	let loadingRow = document.getElementById("loading");
	document.querySelector("#loading td").remove()
	//let lastrow = tableBody.insertRow(3)
	let cell1 = loadingRow.insertCell(0);
	let cell2 = loadingRow.insertCell(1);
	cell1.innerHTML = `Total`
	cell2.innerHTML = ((times[0]+times[1]+times[2])).toFixed(2)

	//remove loading 
	// let loadingRow = document.getElementById("loading");
	// tableBody.removeChild(loadingRow);
	//tableBody.deleteRow(4);
})

//