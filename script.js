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
	let thElem = document.querySelector("#loading td");
	let trElem = document.getElementById("loading")
	//tableBody.deleteRow(0)
	for(let i=0;i<3;i++){
		// let tdElem1 = document.createElement("td");
		// let tdElem2 = document.createElement("td");
		// tdElem1.innerHTML = `Promise ${i+1}`;
		// tdElem2.innerHTML = Math.floor(times[i])
		// trElem.appendChild(tdElem1);
		// trElem.appendChild(tdElem2);
		let row = tableBody.insertRow(i);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);

		cell1.innerHTML = `Promise ${i+1}`;
		cell2.innerHTML = times[i].toFixed(0);
	}

	//fourth row
	let lastrow = tableBody.insertRow(3)
	let cell1 = lastrow.insertCell(0);
	let cell2 = lastrow.insertCell(1);
	cell1.innerHTML = `Total`
	cell2.innerHTML = ((times[0]+times[1]+times[2])).toFixed(2)
})