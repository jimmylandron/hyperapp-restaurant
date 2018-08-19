import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section id="TopImg" >
    <div class="container" >
      <div class="title" >
        <h5>
          welcome
        </h5>
        <h1>
          {state.companyInfo.title1}
        </h1>
        <h1>
          {state.companyInfo.title2}
        </h1>
      </div>
      <div class="contact-info">
        <div class="container">
            <div class="booking" >Book Table Directly</div>
            <h2>(415) - 219 - 8752</h2>
            <div>
              Opening Hours <strong>Mon - Fri: </strong> 9am - 9pm
              <strong> Weekend: </strong> 9am - 11pm
            </div>
        </div>
      </div>
    </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
