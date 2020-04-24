
document.querySelector('#fetcher').addEventListener('click', (e)=>{
    e.preventDefault();
    const value=document.querySelector('#yetzer').value;
    if(value){
    const initial=document.querySelectorAll('.initial-none');
    initial.forEach((element)=>{
        element.style.display='none';
    })
    fetch(`http://localhost:3000/weather?adress=${value}`).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if (data.errorMessage) {
                const error= document.querySelector('.error');
                error.style.display='block';
                error.textContent=data.errorMessage;
            } else {
                const dataParagraph=document.querySelector('.data');
                dataParagraph.style.display='block';
                const {name, countryName, temperature}= data;
                dataParagraph.textContent=`The name of the city is ${name}, she is located in the country of ${countryName}, the temperature there is ${temperature}`;
                document.querySelector('#yetzer').value='';
            }
        });
    });
}
});
    
