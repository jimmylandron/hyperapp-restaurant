import { h, app } from "hyperapp";

export default function Reviews({ state, actions }) {
  console.log(state.reviewsData[state.reviewStatus.currentReview].company);
  console.log(state.reviewsData.length);
  var currentReview = function() {
    return (
      <div>
        <h5 class="comp-title">Reviews 6</h5>
        <h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
        <h4>
          "{state.reviewsData[state.reviewStatus.currentReview].highlight}"
        </h4>
        <p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
        <div class="author">
          <strong>
            {state.reviewsData[state.reviewStatus.currentReview].author}
          </strong>{" "}
          -{" "}
          <em>
            {state.reviewsData[state.reviewStatus.currentReview].authorInfo}
          </em>
        </div>
      </div>
    );
  };

  var rightClickedBTN = function() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log("Stop Moving!");
    } else {
      actions.reviewRightClicked();
    }
  };

  var leftClickedBTN = function() {
    if (state.reviewStatus.currentReview == 0) {
      console.log("I am ready!");
    } else {
      actions.reviewLeftClicked();
    }
  };

  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8" side-img>
            <img src="../../img/o-FEMALE-CHEF-facebook.jpg" alt="" />
          </div>
          <div class="col-md-4">
            {currentReview()}
            <div class="arrows">
              <i
                onclick={leftClickedBTN}
                class={`fa fa-arrow-left ${state.reviewStatus.currentReview > 0
                  ? "ready"
                  : ""} `}
                aria-hidden="true"
              />
              <i
                onclick={rightClickedBTN}
                class={`fa fa-arrow-right ${state.reviewStatus.currentReview ==
                state.reviewsData.length - 1
                  ? ""
                  : " ready"} `}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
