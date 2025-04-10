const mahsulotlar = [
    {
        nomi: "Mars rug",
        coin: 100,
        nechta: "24 dona mavjud"
    },
    {
        nomi: "Keyboard sticker",
        coin: 49,
        nechta: "15 dona mavjud"
    },
    {
        nomi: "Smart watch",
        coin: 899,
        nechta: "4 dona mavjud"
    },
    {
        nomi: "Wireless keyboard",
        coin: 350,
        nechta: "5 dona mavjud"
    },
    {
        nomi: "Mouse",
        coin: 359,
        nechta: "3 dona mavjud"
    },
    {
        nomi: "AirPods",
        coin: 449,
        nechta: "30 dona mavjud"
    },
    {
        nomi: "Powerbank",
        coin: 899,
        nechta: "30 dona mavjud"
    },
    {
        nomi: "USB flash drive",
        coin: 299,
        nechta: "3 dona mavjud"
    },
    {
        nomi: "Smartphone",
        coin: 3699,
        nechta: "1 dona mavjud"
    },
    {
        nomi: "Playstation 5",
        coin: 7449,
        nechta: "1 dona mavjud"
    },
    {
        nomi: "Yandex Station",
        coin: 1999,
        nechta: "10 dona mavjud"
    },
    {
        nomi: "Planshet Samsung",
        coin: 4999,
        nechta: "1 dona mavjud"
    },
];

const input = document.getElementById("input");
const cardOta = document.getElementById("card-ota");

function chizish(data) {
    cardOta.innerHTML=""
    data.map(mahsulot => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
                      <img src="./img/image 30.png" alt="sd">
                      <h4>${mahsulot.nomi} </h4>
                      <h3><i class="fa-brands fa-bitcoin"></i> ${mahsulot.coin} coins </h3>
                      <p> ${mahsulot.nechta} </p>

        `
        cardOta.appendChild(div)
    })
}
chizish(mahsulotlar)

input.addEventListener("input", ()=>{
    const a= mahsulotlar.filter(mah=> mah.nomi.toLowerCase().includes(input.value.toLowerCase()));
    chizish(a);
})