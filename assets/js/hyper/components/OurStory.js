import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
    <div class="container" >
      <div class="row" >
        <div class="col-md-6" >
          <h5 class="comp-title" >Our Story</h5>
          <h2>Cooking is the art of adjustment</h2>
          <p>Sirloin venison sausage, beef kielbasa beef ribs pork chop pancetta meatloaf t-bone tenderloin turkey ribeye prosciutto tri-tip. Ham rump shank ribeye. Boudin corned beef ground round, pig sirloin filet mignon sausage pork chop fatback. Rump flank alcatra shoulder pig turducken bacon short loin sausage. </p>
          <div class="quote" >"The best of the best of steaks" - <strong>Jason Moore</strong></div>
          <a href="#" class="reserve-btn" >Reserve</a>
        </div>
        <div class="col-md-6" >
          <div class="video-img">

          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
