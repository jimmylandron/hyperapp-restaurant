
var reviewRightClicked = function (state, actions){
  //console.log("I've been clicked")
  return(
    {
      reviewStatus: {
        currentReview: state.reviewStatus.currentReview + 1
      }
    }
  )
}

var reviewLeftClicked = function (state, actions){
  //console.log("I've been clicked")
  return(
    {
      reviewStatus: {
        currentReview: state.reviewStatus.currentReview - 1
      }
    }
  )
}
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

export const actions = {
  // reviewRight,
  reviewRightClicked,
  reviewLeftClicked
  // intro,
  // showMenu
}
