const contentData = 
[{
    "id": 1,
    "Judul": "Darren",
    "caption": "Steeden",
    "image": "http://dummyimage.com/192x100.png/dddddd/000000"
  }, {
    "id": 2,
    "Judul": "Felisha",
    "caption": "Zanini",
    "image": "http://dummyimage.com/188x100.png/ff4444/ffffff"
  }, {
    "id": 3,
    "Judul": "Amalle",
    "caption": "Kofax",
    "image": "http://dummyimage.com/148x100.png/cc0000/ffffff"
  }, {
    "id": 4,
    "Judul": "Rochette",
    "caption": "Braune",
    "image": "http://dummyimage.com/245x100.png/cc0000/ffffff"
  }, {
    "id": 5,
    "Judul": "Atlanta",
    "caption": "Franken",
    "image": "http://dummyimage.com/146x100.png/5fa2dd/ffffff"
  }, {
    "id": 6,
    "Judul": "Roman",
    "caption": "Keslake",
    "image": "http://dummyimage.com/213x100.png/5fa2dd/ffffff"
  }, {
    "id": 7,
    "Judul": "Lazaro",
    "caption": "Conneau",
    "image": "http://dummyimage.com/127x100.png/5fa2dd/ffffff"
  }, {
    "id": 8,
    "Judul": "Selby",
    "caption": "Ecob",
    "image": "http://dummyimage.com/217x100.png/dddddd/000000"
  }, {
    "id": 9,
    "Judul": "Yance",
    "caption": "Stodart",
    "image": "http://dummyimage.com/174x100.png/ff4444/ffffff"
  }, {
    "id": 10,
    "Judul": "Tansy",
    "caption": "Malone",
    "image": "http://dummyimage.com/249x100.png/ff4444/ffffff"
  }, {
    "id": 11,
    "Judul": "Free",
    "caption": "Lortz",
    "image": "http://dummyimage.com/152x100.png/ff4444/ffffff"
  }, {
    "id": 12,
    "Judul": "Garrick",
    "caption": "Corsan",
    "image": "http://dummyimage.com/114x100.png/dddddd/000000"
  }, {
    "id": 13,
    "Judul": "Perry",
    "caption": "Bulger",
    "image": "http://dummyimage.com/152x100.png/dddddd/000000"
  }, {
    "id": 14,
    "Judul": "Thomasine",
    "caption": "Ohrtmann",
    "image": "http://dummyimage.com/198x100.png/dddddd/000000"
  }, {
    "id": 15,
    "Judul": "Kassie",
    "caption": "McCracken",
    "image": "http://dummyimage.com/103x100.png/ff4444/ffffff"
  }, {
    "id": 16,
    "Judul": "Ritchie",
    "caption": "Collibear",
    "image": "http://dummyimage.com/248x100.png/dddddd/000000"
  }, {
    "id": 17,
    "Judul": "Andy",
    "caption": "Ojeda",
    "image": "http://dummyimage.com/153x100.png/dddddd/000000"
  }, {
    "id": 18,
    "Judul": "Elisa",
    "caption": "Ricarde",
    "image": "http://dummyimage.com/227x100.png/dddddd/000000"
  }, {
    "id": 19,
    "Judul": "Cecilius",
    "caption": "Kiddle",
    "image": "http://dummyimage.com/174x100.png/cc0000/ffffff"
  }, {
    "id": 20,
    "Judul": "Hermon",
    "caption": "Coleford",
    "image": "http://dummyimage.com/223x100.png/ff4444/ffffff"
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