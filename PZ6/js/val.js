"use strict"
function validateEmail(email){
	const regEx = /\S+@\S+\.\S+/
	return regEx.test(email)
	}
let email = document.getElementById('email');
let name = document.getElementById('name');
let textar = document.getElementById('text_1');

const form = document.getElementById('form');
bnt.addEventListener('click', () => {
	event.preventDefault();
		if(email.value !== '' && name.value !== '' && textar.value !== ''){
											event.preventDefault();
			if(!validateEmail(email.value)){
				alert('Неверная форма email');
			}
			else if(name.value.length > 50){
				alert('Максимальное кол-во символом имени - 50');
			}
			else if(textar.value.length > 100){
				alert('Максимальное кол-во символом сообщения - 100');
			}
			else{
				alert('Сообщение успешно отправлено, спасибо!');
			}
		}
		else{
			alert('Заполните поля');
		}
});