const menuItems = [
    {
        category: 'food',
        name: 'Pizza',
        price: '₹120',
        image: 'Img/R.png'
    },
    {
        category: 'food',
        name: 'Burger',
        price: '₹120',
        image: 'Img/burger.png'
    },
    {
        category: 'food',
        name: 'Sandwich',
        price: '₹30',
        image: 'Img/sandwich.jpeg'
    },
    {
        category: 'drink',
        name: 'Juice',
        price: '₹25',
        image: 'Img/tropicana-tetra-pack-juice-1l.webp'
    },
    {
        category: 'food', // Corrected category
        name: 'Samosa',
        price: '₹20',
        image: 'Img/samosa.jpeg'
    },
    {
        category: 'food', // Corrected category
        name: 'Pav Bhaji',
        price: '₹40',
        image: 'Img/pav bhaji.jpeg'
    },
    {
        category: 'food', // Corrected category
        name: 'Vada Pav',
        price: '₹12',
        image: 'Img/vada pav.jpeg'
    },
    {
        category: 'drink',
        name: 'Masala Chai',
        price: '₹15',
        image: 'Img/masala chai.png'
    },
    {
        category: 'drink',
        name: 'Coffee',
        price: '₹20',
        image: 'Img/coffee.png'
    },
    {
        category: 'food', // Corrected category
        name: 'Vegetable Biryani',
        price: '₹60',
        image: 'Img/veg biryani.png'
    },
    {
        category: 'food', // Corrected category
        name: 'Chole Bhature',
        price: '₹50',
        image: 'Img/chole bhature.webp'
    },
    {
        category: 'food', // Corrected category
        name: 'Plain Rice with Dal',
        price: '₹40',
        image: 'Img/Dal rice.jpeg'
    },
    {
        category: 'food', // Corrected category
        name: 'Ice Cream',
        price: '₹35',
        image: 'Img/ice cream.jpeg'
    },
    {
        category: 'food', // Corrected category
        name: 'Bread & Butter',
        price: '₹20',
        image: 'Img/bread butter.jpeg'
    },
    {
        category: 'food', // Corrected category
        name: 'Fruit Salad',
        price: '₹35',
        image: 'Img/fruit salad.png'
    }
];

function displayMenu(items) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.price}</p>
        `;
        menu.appendChild(div);
    });
}

function filterMenu() {
    const filterValue = document.getElementById('filter').value;
    const filteredItems = filterValue === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filterValue);
    displayMenu(filteredItems);
}

document.getElementById('filter').addEventListener('change', filterMenu);

// Initial display
displayMenu(menuItems);
