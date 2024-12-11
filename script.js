//your JS code here. If required.
const createPromise(){
	return new Promise((resolve)=>{
		let time = Math.random()*2000 + 1000
		setTimeout(resolve(time),time)
	})
}

const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

let tableBody = document.getElementById('output')

Promise.all([promise1,promise2,promise3]).then((times)=>{

	for(let i=0;i<2;i++){
		let row = tableBody.inserRow(i);

		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);

		cell1.innerText = `Promise ${i+1}`
		cell2.innerText = (times[i]/1000).toFixed(3)
	}
})