const planetContainer = document.querySelector('.planet-container');

fetch('https://swapi.dev/api/planets').then(response =>{
    return response.json();
})
.then(data =>{
    const planets = data.results;
    console.log(planets);
    planets.forEach((el) => 
    {
        const planetContent = document.createElement('div');
        planetContent.classList.add('planet-content');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');
        
        const planet = document.createElement('div');
        planet.classList.add('planet');
        const planetName = document.createElement('p');
        const planetClimate = document.createElement('p');
        const planetGravity = document.createElement('p');
        const surfaceWater = document.createElement('p');
    
        planetName.innerHTML = 'Name: '+ el.name;
        planetClimate.innerHTML = 'Climate: '+ el.climate;
        planetGravity.innerHTML = 'Gravity: ' + el.gravity;
        surfaceWater.innerHTML = 'Surface water: ' + el.surface_water;
        imgOutput = `<img src="/images/${el.name}.jpg" alt=""/>`;
        
        
        imgDiv.innerHTML= imgOutput;

        planet.append(planetName, planetClimate, planetGravity, surfaceWater);
    
        planetContent.append(imgDiv);

        planetContent.append(planet);

        planetContainer.append(planetContent);
    }); 
});







 

