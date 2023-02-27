const adsObj = {
  offers: [
    {
      city: "Warsaw",
      country: "Poland",
      price: "399",
      currency: "USD",
      priceText: "from",
      imgURL: "http://rekrutacjartb.pl/developer_vip/images/warsaw.jpg",
    },
    {
      city: "Madrid",
      country: "Spain",
      price: "295",
      currency: "USD",
      priceText: "from",
      imgURL: "http://rekrutacjartb.pl/developer_vip/images/madrid.jpg",
    },
    {
      city: "Berlin",
      country: "Germany",
      price: "350",
      currency: "USD",
      priceText: "from",
      imgURL: "http://rekrutacjartb.pl/developer_vip/images/berlin.jpg",
    },
  ],
};

const offers = adsObj.offers;

// returns random number between 0 and (offers.length - 1) range
function getRandomNumber() {
  return Math.floor(Math.random() * adsObj.offers.length);
}

// array for holding offers, that are randomly generated when the website loads
let currentOffers = [];
// makes sure random number won't repeat itself
let rndNumArray = [];

function retrieveRandomOffer() {
  let rndNumber = getRandomNumber();

  // checks if the offer is already present
  while (rndNumArray.includes(rndNumber)) {
    rndNumber = getRandomNumber();
  }

  rndNumArray.push(rndNumber);
  return offers[rndNumber];
}

// fills currentOffers array with 3 random offers
for (let i = 0; i < 3; i++) {
  currentOffers.push(retrieveRandomOffer());
}

// sets up image sources from randomly generated offers
let images = document.querySelectorAll(".image");

for (let i = 0; i < images.length; i++) {
  images[i].src = currentOffers[i].imgURL;
}

// defines size of dynamic elements (country name, city name)
function defineSize(country_name, city_name) {
  let cityArray = Array.from(city_name);
  if (cityArray.length > 5 && cityArray.length < 10) {
    document.documentElement.style.setProperty(
      "--city-container-width",
      cityArray.length * 30 + "px"
    );
    document.documentElement.style.setProperty("--city-font-size", "45px");
  } else if (cityArray.length > 10 && cityArray.length < 14) {
    document.documentElement.style.setProperty(
      "--city-container-width",
      180 + (cityArray.length - 5) * 10 + "px"
    );
    document.documentElement.style.setProperty("--city-font-size", "25px");
  } else if (cityArray.length > 14) {
    document.documentElement.style.setProperty(
      "--city-container-width",
      180 + (cityArray.length - 5) * 5 + "px"
    );
    document.documentElement.style.setProperty("--city-font-size", "20px");
  } else {
    document.documentElement.style.setProperty(
      "--city-container-width",
      160 + "px"
    );
    document.documentElement.style.setProperty("--city-font-size", "45px");
  }

  let countryArray = Array.from(country_name);
  if (countryArray.length > 5) {
    document.documentElement.style.setProperty(
      "--country-container-width",
      69 + (countryArray.length - 5) * 8 + "px"
    );
  } else {
    document.documentElement.style.setProperty(
      "--country-container-width",
      69 + "px"
    );
  }
}

// changes price, currency, city and country names
function changeValues(index) {
  let offer = currentOffers[index];
  let priceText = offer.priceText;
  let price = offer.price + " " + offer.currency;
  let country = offer.country;
  let city = offer.city;

  // target DOM elements
  let priceLabel = document.querySelector("#label");
  let priceDiv = document.querySelector("#price");
  let countryDiv = document.querySelector("#country");
  let cityDiv = document.querySelector("#city");

  // change DOM elements values
  priceLabel.textContent = priceText;
  priceDiv.textContent = price;
  countryDiv.textContent = country;
  cityDiv.textContent = city;

  defineSize(country, city);
}

setTimeout(function () {
  changeValues(0);
}, 100);
setTimeout(function () {
  changeValues(1);
}, 6000);
setTimeout(function () {
  changeValues(2);
}, 10000);

let test = Array.from(offers[0].city);
