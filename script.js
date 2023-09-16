const superHero_Token = '122102514068040550'
const base_url = `https://superheroapi.com/api.php/${superHero_Token}`
const superheroDiv = document.getElementById('superhero')


const getSuperHero = (id) => {
  fetch(`${base_url}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      document.querySelector('body').innerHTML += `<img src = "${json.image.url}" height = 250 width = 250/>`
    })
}

superheroDiv.onclick =() => getSuperHero()
