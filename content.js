const contentData = 
[{
    "id": 1,
    "Judul": "Darren",
    "caption": "Steeden",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/12/Puro-Clinic_Tri-Laser.jpeg"
  }, {
    "id": 2,
    "Judul": "Felisha",
    "caption": "Zanini",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-08.jpg"
  }, {
    "id": 3,
    "Judul": "Amalle",
    "caption": "Kofax",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-03.jpg"
  }, {
    "id": 4,
    "Judul": "Rochette",
    "caption": "Braune",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-16.jpg"
  }, {
    "id": 5,
    "Judul": "Atlanta",
    "caption": "Franken",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-15.jpg"
  }, {
    "id": 6,
    "Judul": "Roman",
    "caption": "Keslake",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-02.jpg"
  }, {
    "id": 7,
    "Judul": "Lazaro",
    "caption": "Conneau",
    "image": "https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-11.jpg"
  }, {
    "id": 8,
    "Judul": "Selby",
    "caption": "Ecob",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-07.jpg"
  }, {
    "id": 9,
    "Judul": "Yance",
    "caption": "Stodart",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1000,h_640/https://puroclinic.co.id/wp-content/uploads/2021/06/Puro-Clinic-Clarity-Laser.jpg"
  }, {
    "id": 10,
    "Judul": "Tansy",
    "caption": "Malone",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-13.jpg"
  }, {
    "id": 11,
    "Judul": "Free",
    "caption": "Lortz",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-24.jpg"
  }, {
    "id": 12,
    "Judul": "Garrick",
    "caption": "Corsan",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_768/https://puroclinic.co.id/wp-content/uploads/2021/06/Puro-Clinic-Anti-Wrinkle.jpg"
  }, {
    "id": 13,
    "Judul": "Perry",
    "caption": "Bulger",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-14.jpg"
  }, {
    "id": 14,
    "Judul": "Thomasine",
    "caption": "Ohrtmann",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1000,h_640/https://puroclinic.co.id/wp-content/uploads/2021/12/Puro-Clinic_Acne-Injection.jpeg"
  }, {
    "id": 15,
    "Judul": "Kassie",
    "caption": "McCracken",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-27-1.jpg"
  }, {
    "id": 16,
    "Judul": "Ritchie",
    "caption": "Collibear",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-27-4.jpg"
  }, {
    "id": 17,
    "Judul": "Andy",
    "caption": "Ojeda",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_768/https://puroclinic.co.id/wp-content/uploads/2021/06/Puro-Clinic-Filler.jpg"
  }, {
    "id": 18,
    "Judul": "Elisa",
    "caption": "Ricarde",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-27-7.jpg"
  }, {
    "id": 19,
    "Judul": "Cecilius",
    "caption": "Kiddle",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-30.jpg"
  }, {
    "id": 20,
    "Judul": "Hermon",
    "caption": "Coleford",
    "image": "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_480/https://puroclinic.co.id/wp-content/uploads/2021/06/Our-Treatments-27-9.jpg"
  }]

console.log(contentData)

const table = document.querySelector('section#content table')

//console.log(table)
for (let i =0; i < contentData.length; i++) {
    table.innerHTML +=
    `
    <tr> 
    <td class="bold"> ${contentData[i].id}</td>
    <td> ${contentData[i].title}</td>
    <td>
    <img src="${contentData[i].image}" />
    </td>
    </tr>
    `
}