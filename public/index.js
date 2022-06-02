const countryInput = document.querySelector('.country-input');
const btnCapital = document.querySelector('.btn-capital');
const country = document.querySelector('.country');
const capital = document.querySelector('.capital');

btnCapital.addEventListener('click', fetchCapital);

async function fetchCapital() {
	try {
		const res = await fetch(`/api/${countryInput.value}`);
		const data = await res.json();
		console.log(data);

		country.innerText = `${
			countryInput.value[0].toUpperCase() +
			countryInput.value.slice(1).toLowerCase()
		}`;

		capital.innerText = `${data.capital}`;
	} catch (e) {
		console.log(e);
	}
}
