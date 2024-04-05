const products = [{
    id: 1,
    name: "Bulbasaur",
    category: "Planta",
    stock:20,
    price: 3180,
    img:"https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
    description:"Descripcion de Bulbasaur"
  },
  {
    id: 2,
    name: "Ivysaur",
    category: "Planta",
    stock:20,
    price: 4050,
    img:"https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/1200px-0002Ivysaur.png",
    description:"Descripcion de Ivysaur"
  },
  {
    id: 3,
    name: "Venusaur",
    category: "Planta",
    stock:20,
    price: 5250,
    img:"https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/1200px-0003Venusaur.png",
    description:"Descripcion de Venasaur"
  },
  {
    id: 4,
    name: "Charmander",
    category: "Fuego",
    stock:20,
    price: 3090,
    img:"https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png",
    description:"Descripcion de Charmander"
  },
  {
    id: 5,
    name: "Charmeleon",
    category: "Fuego",
    stock:20,
    price: 4050,
    img:"https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/1200px-0005Charmeleon.png",
    description:"Descripcion de Charmeleon"
  },
  {
    id: 6,
    name:"Charizard",
    category: "Fuego",
    stock:20,
    price: 5340,
    img:"https://archives.bulbagarden.net/media/upload/3/38/0006Charizard.png",
    description:"Descripcion de Charizard"
  },
  {
    id: 7,
    name:"Squirtle",
    category:"Agua",
    stock:20,
    price: 3140,
    img:"https://archives.bulbagarden.net/media/upload/5/54/0007Squirtle.png",
    description:"Descripcion de Squirtle"
  },
  {
    id: 8,
    name: "Wartortle",
    category:"Agua",
    stock:20,
    price: 4050,
    img:"https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/1200px-0008Wartortle.png",
    description:"Descripcion de Wartortle"
  },
  {
    id: 9,
    name:"Blastoise",
    category:"Agua",
    stock:20,
    price: 5300,
    img:"https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/1200px-0009Blastoise.png",
    description:"Descripcion de Blastoise"
  }
]

export const getProducts = () => {
  return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === itemId))
      }, 100)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 1000)
  })
}