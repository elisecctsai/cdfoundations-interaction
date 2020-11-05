//global variables
let selection = 0

function update (){
	//local variables
	let option = document.querySelectorAll('option.')
	option.forEach(item=> item.onclick=function(){
		selection = item.id
		console.log(selection)
	})
}

happy.onclick=function(){
	happy.innerHTML='happy is a positive emotion'
	happy.style.color='pink'
	sad.innerHTML='sad'
	sad.style.color='black'
	neutral.innerHTML='neutral'
	neutral.style.color='black'
}

neutral.onclick=function(){
	neutral.innerHTML='neutral is emotionalness'
	neutral.style.color='white'
	happy.innerHTML='happy'
	happy.style.color='black'
	sad.innerHTML='sad'
	sad.style.color='black'
}

sad.onclick=function(){
	sad.innerHTML='sad is a negative emotion'
	sad.style.color='navy'
	neutral.innerHTML='neutral'
	neutral.style.color='black'
	happy.innerHTML='happy'
	happy.style.color='black'
}


