const companies = [
  {name: "Company One", catergory: "Finance", start: 1981, end: 2003},
  {name: "Company two", catergory: "Retail", start: 1992, end: 2008},
  {name: "Company three", catergory: "Auto", start: 1999, end: 2007},
  {name: "Company four", catergory: "Retail", start: 1989, end: 2010},
  {name: "Company five", catergory: "Technology", start: 2009, end: 2014},
  {name: "Company six", catergory: "Finance", start: 1987, end: 2010},
  {name: "Company seven", catergory: "Auto", start: 1986, end: 1996},
  {name: "Company eight", catergory: "Technology", start: 2011, end: 2016},
  {name: "Company nine", catergory: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//basic for loop....
for (let i = 0; i < companies.length; i++) {
  //console.log(companies[i].name);
}

// ...and no with forEach

companies.forEach(function(company) {
  //console.log(company);
});
/////////////////////////////////////////////////////////////////////
//filter 'filters' out data from an array and returns all that match
// creates new array//
/////////////////////////////////////////////////////////////////////

// basic for loop....
/* let over20 = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] > 21) {
    over20.push(ages[i])
  }
}
console.log(over20);

 */

// ... and now with filter()


const over21 = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});

//...and now filetr and arrow function... so clean....

const canDrink = ages.filter(age => age >= 18);

//console.log(canDrink);

//filter retail companies:
let retailCompanies = companies.filter(retail => retail.catergory === 'Retail');

//filter 80s companies:
let eightiesCompanies = companies.filter(year => year.start < 1990);


//filter companies with at least 10 years on market:

let atleast10 = companies.filter(company => (company.end - company.start >= 10));

//console.log(retailCompanies);
//console.log(eightiesCompanies);
//console.log(atleast10);

/////////////////////////////////////////////////////////////////
//map 'gets' data from an array (creates new array)//
/////////////////////////////////////////////////////////////////

//create array of company names

const companyNames = companies.map(company => company.name);

console.log(companyNames);

const testCompany = companies.map(function(company) {
  return `Company name is: ${company.name}`
})

const testCompany2 = companies.map(company => `category of company: ${company.catergory}`)

const testCompany3 = companies.map(function(company) {
  return `${company.name} was ${company.end - company.start} years on the marker`
})



const multipliedByItself = ages.map(age => age * age);
const squareAges = ages.map(age => Math.sqrt(age));

const faffingMap = ages
  .map(age => age * 2)
  .map(age => age / 2)
  .map(test => test - 10)



//console.log(testCompany);
//console.log(testCompany2);
//console.log(testCompany3);

//console.log(multipliedByItself);
//console.log(squareAges);
//console.log(faffingMap);



/////////////////////////////////////////////////////////////////
//sort //
/////////////////////////////////////////////////////////////////

const sortedCompanies = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1
  }
});

const sortedAges = ages.sort((a,b) => a > b ? 1 : -1);

console.log(sortedCompanies);
console.log(sortedAges);



// reduce makes new array

let ageSum = 0;

for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i]
}

const reduceAgeSum = ages.reduce((total, age) => total + age, 0);
//total = its like creating an empty variable to add things to
//age = arbitrary name for items in the array to be added
//0 = base value to which we will start adding

const reduceTimeAllCompaniesWereOnTheMarket = companies.reduce(function (total, company) {
  return total + (company.end - company.start)
}, 0);

const reduceTimeAllCompaniesWereOnTheMarketShortHand = companies.reduce( (total, time) => total + (time.end - time.start),0)




console.log(ageSum);
console.log(reduceAgeSum);
console.log(reduceTimeAllCompaniesWereOnTheMarket);
console.log(reduceTimeAllCompaniesWereOnTheMarketShortHand);




/////////////////////////////////////////////////////////////////
//fill fills current array with given element  //
/////////////////////////////////////////////////////////////////

console.log(ages)
ages.fill(1)
console.log(ages)