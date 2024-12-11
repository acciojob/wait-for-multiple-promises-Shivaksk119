//your JS code here. If required.
function createPromise(){
	return new Promise((resolve)=>{
		let time = Math.random()*2000 + 1000
		setTimeout(resolve(time),time)
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

		cell1.innerHTML = `Promise ${i+1}`
		cell2.innerHTML = (times[i]/1000).toFixed(3)
	}

	//fourth row
	let lastrow = tableBody.insertRow(3)
	let cell1 = lastrow.insertCell(0);
	let cell2 = lastrow.insertCell(1);
	cell1.innerHTML = `Total`
	cell2.innerHTML = ((times[0]+times[1]+times+[2])/1000).toFixed(3)
})