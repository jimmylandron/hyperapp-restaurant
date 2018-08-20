var companyInfo = {
  title1: "PRIME STEAK ",
  title2: "RESTAURANT",
  phone: "(415) - 219 - 8753",
  location: "San Francisco, California"
};

var specialMenuData = [
  {
    image: "../../img/1.jpg",
    title: "Supper BBQ Gril No Smoke",
    description:
      "Fried Egss, Steak, Baked Potato or French Fries, side of vegetables",
    price: "35"
  },
  {
    image: "../../img/2.jpg",
    title: "Tenderloin  Tartar",
    description:
      "Potato & Leek Tart Roasted Root Vegetables with Rosemary Butter",
    price: "20"
  },
  {
    image: "../../img/3.jpeg",
    title: "Ribs and Chicken Diner",
    description:
      "Veuve Clicquot Yellow Label, Belvedere Vodka, Lemon, side of fries",
    price: "27"
  }
];

var reviewsData = [
  {
    company: "The Food Network",
    author: "Joe Burgermaster",
    authorInfo: "Winner Master Chef 2011",
    highlight: "the best restaurant that i used to experience",
    review:
      "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
  },
  {
    company: "HBO",
    author: "Joe Burgermaster",
    authorInfo: "Winner Master Chef 2011",
    highlight: "the best restaurant that i used to experience",
    review:
      "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
  },
  {
    company: "CWB",
    author: "Joe Burgermaster",
    authorInfo: "Winner Master Chef 2011",
    highlight: "the best restaurant that i used to experience",
    review:
      "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
  },
  {
    company: "NBC",
    author: "Joe Burgermaster",
    authorInfo: "Winner Master Chef 2011",
    highlight: "the best restaurant that i used to experience",
    review:
      "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
  },
  {
    company: "The New York Times",
    author: "Joe Burgermaster",
    authorInfo: "Winner Master Chef 2011",
    highlight: "the best restaurant that i used to experience",
    review:
      "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
  }
];

var randomQuoteData = [
  {
    author: "John",
    quote:
      "Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained"
  },
  {
    author: "Dave",
    quote: "Hart warm comfort food"
  },
  {
    author: "Judy",
    quote: "Just like moma used to make"
  }
];

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};
