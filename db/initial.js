const food = [
  {
    title: "potato",
    quantity: 41,
    price: 9,
    freshness: 9
  },
  {
    title: "apple",
    quantity: 13,
    price: 5,
    freshness: 10
  },
  {
    title: "meet",
    quantity: 32,
    price: 8,
    freshness: 8
  },
  {
    title: "eggs",
    quantity: 15,
    price: 7,
    freshness: 10
  },
  {
    title: "oil",
    quantity: 61,
    price: 10,
    freshness: 7
  },
  {
    title: "bread",
    quantity: 11,
    price: 9,
    freshness: 10
  }

]
const initialState = food.map( item => ({ ...item }))


module.exports = initialState;
