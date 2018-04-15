function contact (){
	
    // CONTACT FORM


    contactForm.addEventListener('submit', function(event){

    event.preventDefault();

    contactForm.appendChild(statusMessage);
   


    //AJAX


 let contactFormData = '';
    for(let i = 0; i < contactInput.length; i++){
        contactFormData += contactInput[i].value + ' ';
        console.log(contactFormData);

    }

let json = JSON.stringify(contactFormData);
console.log(json);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');

    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // подготовка данных к отправке
    let formData = new FormData(contactForm);
    request.send(json);

    request.onreadystatechange = function(){
        if(request.readyState < 4){
            statusMessage.inerHTML = message.loading;
        }
        else if(request.readyState === 4){
            if(request.status == 200 && request.status < 300){
                statusMessage.innerHTML = message.success;
                statusMessage.innerHTML = '<img src=\'img/ajax-loader2.gif\'> ' + ' ' + message.success + ' '+ '<img src=\'img/ajax-loader2.gif\'> ';
                statusMessage.style.cssText=`\
            text-align: center; \
            margin-top: '20px'; \
            display: flex; \
            justify-content: space-around; \
            align-items: center;\
            color: #fff; \
       
      `;
                statusMessage.style.textAlign = 'center';
                statusMessage.style.marginTop = '50px';
            }
            else{
                statusMessage.innerHTML = message.failure;
            }
        }
    }


    for(let i = 0; i < contactInput.length; i++){
        contactInput[i].value = '';
         setTimeout(function(){
             statusMessage.innerHTML = '';
           },2000);
    }
    

});

}

module.exports = contact;