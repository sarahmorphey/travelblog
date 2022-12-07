

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function(event) {
    card.setAttribute('style', 'background-color: seashell;');
  });
});

cards.forEach(card => {
    card.addEventListener('mouseleave', function(event) {
      card.setAttribute('style', 'background-color: white;');
    });
  });


body.onload; function myFunction() {

const destinations = ["Amalfi Coast, Italy", "Bali", "California, USA", "Cape Town, South Africa", "Dubai", "Edinburgh, Scotland", "Hawaii, USA", "Ireland", "Jordan", "New York, USA", "Rio de Janeiro, Brazil", "The Maldives"];

const randIndex = Math.floor(Math.random() * destinations.length);

console.log(destinations[randIndex]);

let roulette = prompt ("Would you like to play destination roulette?")

if (roulette == "yes") {
    alert ("Amazing! \rYou should check out " + destinations[randIndex] + "!")
}

else if (roulette == "no") {
    let guidance = prompt ("Too bad! Do you want some guidance choosing a destination?")
    
    if (guidance == "yes") {
      let holidayType = prompt ("What type of holiday are you looking for? \nChoose from city, beach, honeymoon, landmark or nature")

      if (holidayType == "city") {
        alert ("We love a city break! \rYou should check out New York, Dubai and Edinburgh!")
      }

      else if (holidayType == "beach") {
        alert ("We love a beach break! \rYou should check out California, Hawaii and Brazil!")
      }

      else if (holidayType == "honeymoon") {
        alert ("How romantic! \rYou should check out The Maldives, Bali and Hawaii!")
      }

      else if (holidayType == "landmark") {
        alert ("Iconic destinations await! \rYou should check out New York, Jordan and Brazil!")
      }

      else if (holidayType == "nature") {
        alert ("Time to be at one with nature! \rYou should check out Ireland and Hawaii!")
      }

      else {
        alert ("Sorry, I'm not sure what holiday type you mean!")
    }
  }

    else if (guidance == "no") {
      alert ("Enjoy browsing our guide!")
  }

    else {
      alert ("Please answer yes or no only!")
  }
}

else {
    alert ("Please answer yes or no only!")
}

}
