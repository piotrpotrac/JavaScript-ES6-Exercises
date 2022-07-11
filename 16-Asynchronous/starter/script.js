'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// NEW URL ADRESS !!!!

//     https://restcountries.com/v2/

///////////////////////////////////////
let city;

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h3 class="country__name">${city}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
// btn.style.opacity = 0;

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

/*
/* 
const getCountryandNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country
    renderCountry(data);

    // Get neighbour
    const [neighbour] = data.borders;
    if (!neighbour) return;
    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryandNeighbour('germany');
// getCountryandNeighbour('poland');

setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 sec passed');
    setTimeout(() => {
      console.log('3 sec passed');
      setTimeout(() => {
        console.log('4 sec passed');
        setTimeout(() => {
          console.log('5 sec passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */
//////////////////////////////////
// Promises
/* 
const request = fetch('https://restcountries.com/v2/name/portugal');

console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
}; */
////////////////////
/* 
const getJSON = function (url, errorMsg = 'Something get wrong') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

const getCountryData = function (country) {
  //country 1
  getJSON(`https://restcountries.com/v2/name/${country}`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      //   const neighbour = 'dssdf';
      if (!neighbour) throw new Error(' No neighbour found');

      //country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥 💥`);
      renderError(`Something get wrong 💥💥 ${err.message} `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});

// getCountryData('djjfhvjd');
getCountryData('australia');
 */

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/* const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok)
        throw new Error(`Upsss... something get wrong ${res.status}`);
      return res.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(function (response) {
      // console.log(response);

      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err} 💥💥`);
      renderError(`Something get wrong 💥💥 ${err.message} `);
    });
};
// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
 */

////////////////////////////////////////
// Event Loop in practice
/* 
console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log('Test end!');
 */

//////////////////////////////////////
// Bulding a Promise
/* 
const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win 💰');
    } else {
      reject(new Error('You LOOOSE!! 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
// Promisyfying
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log('I waited for 1 sec.');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 sec.');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 sec.');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 sec.');
    return wait(1);
  })
  .then(() => console.log('I waited for n sec'));

Promise.resolve('abc').then(x => console.log(x));

Promise.reject(new Error('Problem')).catch(x => console.error(x));
 */

///////////////////////////////
// Promisifying in geolocation example
/* 
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.error(err));

const whereAmI = function (lat, lng) {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;

      console.log(latitude, longitude);
      return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    })
    .then(res => {
      if (!res.ok)
        throw new Error(`Upsss... something get wrong ${res.status}`);
      return res.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      city = data.city;
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(function (response) {
      // console.log(response);

      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`${err} 💥💥`);
      renderError(`Something get wrong 💥💥 ${err.message} `);
    });
};
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

btn.addEventListener('click', whereAmI);
 */

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
/*
let curImg;
const imgContainer = document.querySelector('.images');
// Wait fun

const wait = function () {
  return new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
};

// creating a promise
const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    curImg = document.createElement('img');
    curImg.src = `${imgPath}`;

    curImg.addEventListener('load', function () {
      imgContainer.append(curImg);
      resolve(curImg);
    });

    curImg.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const loadImg = function () {
  createImg('img/img-1.jpg')
    .then(img => {
      curImg = img;
      console.log('Image 1');
      return wait();
    })
    .then(() => {
      curImg.style.display = 'none';
      return createImg('img/img-2.jpg');
    })
    .then(img => {
      curImg = img;
      console.log('Image 2');
      return wait();
    })
    .then(() => {
      curImg.style.display = 'none';
    })
    .catch(err => console.error(err));
};

loadImg(); */

//////////////////////////////////
// Await async  (new model of consuming a promises)
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // btn.addEventListener('click', async function () {
  try {
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    city = dataGeo.city;
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in${city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`💥 ${err.message}`);
    throw err; //  Zlapanie błedu przy wywołaniu funkcji- bez tego nawet jak wystapi bład to wypełni pronisa i zwróci undefined a z tym wyloguje nam błedy w konsoli
  }
  // });
};

// console.log('1: Will get location');

// const locationData = whereAmI();
// console.log(locationData);
/* 

//consume a await promise with then catch method old
whereAmI()
.then(city => console.log(`2: ${city}`))
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log('3: Finished getting location'));
 */

/* //consuming promise with await and try catch method
console.log('1: Will get location');
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
 */

//////////////////////////
//RunningPromises parallel
/* 
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(`${err.message}`);
  }
};

get3Countries('portugal', 'poland', 'austria');
 */

/////////////////////////////////
// Others promise combinators  race, any, allSettled

//Promise.race   zwraca pierwszy spelniony lub odrzucony promis

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(100)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Pronise.allSettled  zwraca  wszystkie wartosci promisow bez wzgledu czy zostaly spelnione czy nie

Promise.allSettled([
  Promise.resolve('Succes'),
  Promise.reject('Error'),
  Promise.resolve('Another Succes'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Succes'),
  Promise.reject('Error'),
  Promise.resolve('Another Succes'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any   zwraca pierwszy spełniony promis
Promise.any([
  Promise.resolve('Succes'),
  Promise.reject('Error'),
  Promise.resolve('Another Succes'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
