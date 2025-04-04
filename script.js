//your JS code here. If required.
let form = document.querySelector("form")
let ageInputBox = document.querySelector("#age")
let nameInputBox = document.querySelector("#name")


form.addEventListener("submit", handleSubmit)


function handleSubmit(e){
	e.preventDefault();
	let name = nameInputBox.value;
	let age = ageInputBox.value
		if(!name|| !age){
			alert("Please enter valid detials")
			return
		}

function checkAge(p1){

	let promise = new Promise((resolve,reject)=>{

		setTimeout((resolve,reject)=>{
			if(p1>=18){
				resolve(p1)
			}
			else{
				reject(p1)
			}
		})
	})

				return promise
}

	let age = checkAge(age)
	age.then(response=>{
		alert("You can vote")
	})
	age.catch(err =>{
		alert("Oh sorry . You aren't old enough")
	})
}

