import { h, app } from "hyperapp";

export default function SpecialMenu({ state, actions }) {
  var loopMenu = function() {
    return state.specialMenuData.map(function(item) {
      //console.log(item.title)
      return (
        <div class="col-md-4">
          <div class="box">
            <div
              class="box-img"
              style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.002) 0, #000 160%), url("${item.image}") no-repeat center center`
              }}
            >
              <div class="price-circle">${item.price}</div>
            </div>
            <span class="title">{item.title}</span>
            <p class="details">{item.description}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <section id="SpecialMenu" class="texturebg">
      <div class="container">
        <h5 class="comp-title">Special Menu</h5>
        <h2>Delicious Flavor of Autumn</h2>
        <div class="row boxes">{loopMenu()}</div>
        <a href="#" class="link">
          View Full Menu
        </a>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
