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
  console.log(companies[i].name);
}

// ...and no with forEach

companies.forEach(function(company) {
  console.log(company);
});
/////////////////////////////////////////////////////////////////////
//filter 'filters' out data from an array and returns all that match//
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

console.log(canDrink);

//filter retail companies:
let retailCompanies = companies.filter(retail => retail.catergory === 'Retail');

//filter 80s companies:
let eightiesCompanies = companies.filter(year => year.start < 1990);


//filter companies with at least 10 years on market:

let atleast10 = companies.filter(company => (company.end - company.start >= 10));

console.log(retailCompanies);
console.log(eightiesCompanies);
console.log(atleast10);

/////////////////////////////////////////////////////////////////
//map 'gets' data from an array together (creates new array)//
/////////////////////////////////////////////////////////////////

//create array of company names

const companyNames = companies.map(company => company.name);

console.log(companyNames);

// sort
// reduce