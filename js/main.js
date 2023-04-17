const navMenuBtn = document.querySelector('nav button.nav__menu');
const navLinksMb = document.querySelector('.nav__links--mobile');
const navItemsMb = navLinksMb.querySelectorAll('.nav__item');

const tankCapacityInput = document.querySelector('.tank_capacity_input');
const tankCapacityOutput = document.querySelector('.tank_capacity_output');
const minimumCostInput = document.querySelector('.minimum_cost_input');
const minimumCostOutput = document.querySelector('.minimum_cost_output');
const maximumCostInput = document.querySelector('.maximum_cost_input');
const maximumCostOutput = document.querySelector('.maximum_cost_output');

tankCapacityOutput.textContent = 'Tank Capacity: ' + tankCapacityInput.value + ' L';
minimumCostOutput.textContent = 'Minimum cost: ' + Math.floor(minimumCostInput.value / 1000) * 1000 + ' $';
maximumCostOutput.textContent = 'Minimum cost: ' + Math.floor(maximumCostInput.value / 1000) * 1000 + ' $';

tankCapacityInput.addEventListener('input', () => {
	tankCapacityOutput.textContent = 'Tank Capacity: ' + tankCapacityInput.value + ' L';
});
minimumCostInput.addEventListener('input', () => {
	minimumCostOutput.textContent = 'Minimum cost: ' + Math.floor(minimumCostInput.value / 1000) * 1000 + ' $';
});
maximumCostInput.addEventListener('input', () => {
	maximumCostOutput.textContent = 'Minimum cost: ' + Math.floor(maximumCostInput.value / 1000) * 1000 + ' $';
});

const removeActiveHandler = () => {
	navMenuBtn.classList.toggle('active');
	navLinksMb.classList.toggle('active');
};

navMenuBtn.addEventListener('click', removeActiveHandler);

document.addEventListener('scroll', () => {
	navMenuBtn.classList.remove('active');
	navLinksMb.classList.remove('active');
});

for (const item of navItemsMb) {
	item.addEventListener('click', removeActiveHandler);
}
