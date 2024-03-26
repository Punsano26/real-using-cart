// Dummy data for products
const products = {
    microphones: [
        {
            name: "Nubwo X300 Cypher Professional Steaming Microphone (96 kHz)",
            link: "https://shope.ee/9exeuIV6t6",
            image: "/img/Nubwo-x300.jpg",
            price: 1890.00,
        },
        {
            name: "FIFINE K690 USB MICROPHONE",
            link: "https://shope.ee/2q7KknwUAp",
            image: "/img/fifine-k690.jpg",
            price: 2550.00,
        },
        {
            name: "HYPER X QUADCAST STANDALONE MICROPHONE",
            link: "https://shope.ee/3pzrxe2lMj",
            image: "/img/hyperx-quadcast.jpg",
            price: 3990.00,
        },
        {
            name: "HyperX DuoCast RGB USB Condenser",
            link: "https://shope.ee/9exfbR25Da",
            image: "/img/duocast.jpg",
            price: 2690.00,
        },
    ],
    micstands: [
        {
            name: "ขาแขวนไมโครโฟน NUBWO รุ่น X601 RENTZ Microphone Boom Arm ",
            link: "https://shope.ee/1qEna0VZFL",
            image: "/img/micstandnubwo-x601.jpg",
            price: 289.00,
        },
        {
            name: "Microphone Arm Stand, FIFINE CS1",
            link: "https://shope.ee/3VN1Z7t5Fq",
            image: "/img/micstand-fifine-cs1.jpg",
            price: 590.00,
        },
        {
            name: "Microphone Arm Stand, FIFINE BM63",
            link: "https://shope.ee/5AVFZR3tVz",
            image: "/img/micstand-fifine-bm36.jpg",
            price: 1290.00
        },
    ],
};

// Function to display products based on category
function displayProducts(category) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; // Clear previous products

    products[category].forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("small-product-card");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>ราคา: ${product.price} บาท</p>
            <button><a class="btn-link" href="${product.link}" target="_blank">สั่งซื้อ</a></button>
        `;
        productList.appendChild(productElement);
    });
}

// Initial display
displayProducts("microphones");

// Event listeners for navigation
document.getElementById("microphones").addEventListener("click", function (event) {
    event.preventDefault();
    displayProducts("microphones");
});

document.getElementById("micstands").addEventListener("click", function (event) {
    event.preventDefault();
    displayProducts("micstands");
});
