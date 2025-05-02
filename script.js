
let form = document.querySelector("form")
let agebox = document.querySelector("#age")
let nameBox = document.querySelector("#name")


form.addEventListener("submit",handleSubmit)


 function handleSubmit(e){
	e.preventDefault();

	let name = nameBox.value;
	let age = parseInt(agebox.value);
if(!name || !age){
	alert("Please enter valid details")
	return
}


function handlePromise(){
	
	let promise = new Promise((resolve,reject)=>{

		setTimeout(()=>{
			if(age>18){
					resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		},4000)
	})

		return promise
}


handlePromise()
	 .then((response)=>{
		 alert(response)
	 })
	 .catch((error)=>{
		 alert(error)
	 })
	 

	 
}

