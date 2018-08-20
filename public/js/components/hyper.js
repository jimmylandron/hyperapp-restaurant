webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var reviewRightClicked = function reviewRightClicked(state, actions) {
  //console.log("I've been clicked")
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  //console.log("I've been clicked")
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};
// function reviewRight (state, actions) {
//   return (
//     {
//         reviewStatus: {
//          state.reviewStatus.currentReview + 1
//        }
//     }
//   )
// }

// function showMenu(){
// }
//
// function intro(state, actions){
//   console.log('Just ran my first action' )
//   return (
//     {count: state.count + 1}
//   )
// }

var actions = exports.actions = {
  // reviewRight,
  reviewRightClicked: reviewRightClicked,
  reviewLeftClicked: reviewLeftClicked
  // intro,
  // showMenu
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(20);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(16);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(19);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(17);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _ContactUs = __webpack_require__(13);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Reviews = __webpack_require__(18);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Footer = __webpack_require__(14);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title1: "PRIME STEAK ",
  title2: "RESTAURANT",
  phone: "(415) - 219 - 8753",
  location: "San Francisco, California"
};

var specialMenuData = [{
  image: "../../img/1.jpg",
  title: "Supper BBQ Gril No Smoke",
  description: "Fried Egss, Steak, Baked Potato or French Fries, side of vegetables",
  price: "35"
}, {
  image: "../../img/2.jpg",
  title: "Tenderloin  Tartar",
  description: "Potato & Leek Tart Roasted Root Vegetables with Rosemary Butter",
  price: "20"
}, {
  image: "../../img/3.jpeg",
  title: "Ribs and Chicken Diner",
  description: "Veuve Clicquot Yellow Label, Belvedere Vodka, Lemon, side of fries",
  price: "27"
}];

var reviewsData = [{
  company: "The Food Network",
  author: "Joe Burgermaster",
  authorInfo: "Winner Master Chef 2011",
  highlight: "the best restaurant that i used to experience",
  review: "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
}, {
  company: "HBO",
  author: "Joe Burgermaster",
  authorInfo: "Winner Master Chef 2011",
  highlight: "the best restaurant that i used to experience",
  review: "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
}, {
  company: "CWB",
  author: "Joe Burgermaster",
  authorInfo: "Winner Master Chef 2011",
  highlight: "the best restaurant that i used to experience",
  review: "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
}, {
  company: "NBC",
  author: "Joe Burgermaster",
  authorInfo: "Winner Master Chef 2011",
  highlight: "the best restaurant that i used to experience",
  review: "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
}, {
  company: "The New York Times",
  author: "Joe Burgermaster",
  authorInfo: "Winner Master Chef 2011",
  highlight: "the best restaurant that i used to experience",
  review: "Bacon ipsum dolor amet fatback kevin turducken hamburger pig pork loin tongue sausage ribeye brisket. Bresaola kielbasa spare ribs ball tip, shoulder ribeye landjaeger pig. Turducken frankfurter cupim, pork beef jerky short loin spare ribs pastrami capicola salami strip steak."
}];

var randomQuoteData = [{
  author: "John",
  quote: "Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained"
}, {
  author: "Dave",
  quote: "Hart warm comfort food"
}, {
  author: "Judy",
  quote: "Just like moma used to make"
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        "section",
        { id: "ContactUs", "class": "texturebg" },
        (0, _hyperapp.h)(
            "div",
            { "class": "container" },
            (0, _hyperapp.h)(
                "h5",
                { "class": "comp-title" },
                "Contact Us"
            ),
            (0, _hyperapp.h)(
                "h2",
                null,
                "Delicious Flavor of Autumn"
            ),
            (0, _hyperapp.h)(
                "div",
                { "class": "box" },
                (0, _hyperapp.h)(
                    "div",
                    { "class": "row" },
                    (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-6" },
                        (0, _hyperapp.h)(
                            "div",
                            { "class": "title" },
                            state.companyInfo.location
                        ),
                        (0, _hyperapp.h)(
                            "h6",
                            { "class": "address" },
                            "1313 Mockingbird Lane ",
                            (0, _hyperapp.h)("br", null),
                            "Nob Hill San Francisco, 94102"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            null,
                            (0, _hyperapp.h)(
                                "strong",
                                null,
                                "email:"
                            ),
                            (0, _hyperapp.h)(
                                "a",
                                { href: "mailto:info@primestake.com" },
                                "info@primestake.com"
                            )
                        )
                    ),
                    (0, _hyperapp.h)(
                        "div",
                        { "class": "col-md-6" },
                        (0, _hyperapp.h)(
                            "h6",
                            null,
                            "Phone:"
                        ),
                        (0, _hyperapp.h)(
                            "div",
                            { "class": "title" },
                            state.companyInfo.phone
                        ),
                        (0, _hyperapp.h)(
                            "h6",
                            null,
                            "Lunch Service"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            null,
                            "Friday, Saturday and Sunday ",
                            (0, _hyperapp.h)("br", null),
                            "from 12pm - 1:30pm"
                        ),
                        (0, _hyperapp.h)(
                            "h6",
                            null,
                            "Dinner Service"
                        ),
                        (0, _hyperapp.h)(
                            "p",
                            null,
                            "Daily ",
                            (0, _hyperapp.h)("br", null),
                            "from 6pm - 9:30pm"
                        )
                    )
                )
            )
        )
    );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-square", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.google.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.youtube.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-youtube-play", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2017 Jimmy Landron"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "JL Steak House"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Sirloin venison sausage, beef kielbasa beef ribs pork chop pancetta meatloaf t-bone tenderloin turkey ribeye prosciutto tri-tip. Ham rump shank ribeye. Boudin corned beef ground round, pig sirloin filet mignon sausage pork chop fatback. Rump flank alcatra shoulder pig turducken bacon short loin sausage. "
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best of the best of steaks\" - ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Jason Moore"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    {
      id: "RandomQuote",
      style: {
        backgroundImage: 'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%),url("../../img/cooking.png")'
      }
    },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"good painting is like good cooking; it can be tasted, but not explained\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- John -"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.reviewsData[state.reviewStatus.currentReview].company);
  console.log(state.reviewsData.length);
  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reviews 6"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "\"",
        state.reviewsData[state.reviewStatus.currentReview].highlight,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        " ",
        "-",
        " ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var rightClickedBTN = function rightClickedBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log("Stop Moving!");
    } else {
      actions.reviewRightClicked();
    }
  };

  var leftClickedBTN = function leftClickedBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log("I am ready!");
    } else {
      actions.reviewLeftClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8", "side-img": true },
          (0, _hyperapp.h)("img", { src: "../../img/o-FEMALE-CHEF-facebook.jpg", alt: "" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", {
              onclick: leftClickedBTN,
              "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? "ready" : "") + " ",
              "aria-hidden": "true"
            }),
            (0, _hyperapp.h)("i", {
              onclick: rightClickedBTN,
              "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? "" : " ready") + " ",
              "aria-hidden": "true"
            })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      //console.log(item.title)
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            {
              "class": "box-img",
              style: {
                background: "linear-gradient(135deg, rgba(0,0,0,0.002) 0, #000 160%), url(\"" + item.image + "\") no-repeat center center"
              }
            },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu", "class": "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title1
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title2
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(415) - 219 - 8752"
          ),
          (0, _hyperapp.h)(
            "div",
            null,
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri: "
            ),
            " 9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend: "
            ),
            " 9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {
      // actions.intro()
    }
  },
  mixins: [(0, _hyperappReduxDevtools2.default)()]
});

/***/ })
],[21]);