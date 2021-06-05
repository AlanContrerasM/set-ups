
apiTestfetch();


function apiTestfetch(){

  const img = document.querySelector('img');

  //my giphy api key E57A16NSJf4h4kVh33ORbEIlEc5cELFK
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=E57A16NSJf4h4kVh33ORbEIlEc5cELFK&s=iron man', 
    {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
        img.src = response.data.images.original.url;
    })

}