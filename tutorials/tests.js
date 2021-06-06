// apiTestfetch();

apiTestAsync("iron man")

//api with fetch, promises
function apiTestfetch() {
  const img = document.querySelector("img");

  //my giphy api key E57A16NSJf4h4kVh33ORbEIlEc5cELFK
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=E57A16NSJf4h4kVh33ORbEIlEc5cELFK&s=iron man",
    { mode: "cors" }
  )
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch(err=>console.log(err));
}

async function apiTestAsync(search) {
  try {
    const img = document.querySelector("img");
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=E57A16NSJf4h4kVh33ORbEIlEc5cELFK&s=${search}`,
      { mode: "cors" }
    );
    const responseData = await response.json();
    img.src = responseData.data.images.original.url;
    console.log("successful " + search)
  }catch(error){
      console.log(error);
  }
}

