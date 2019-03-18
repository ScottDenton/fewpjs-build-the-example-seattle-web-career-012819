// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// hides error field when page loaded
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')
modal.classList.add('hidden')

//find all hearts and add event listener to invoke mimicServercall
const allHearts = document.querySelectorAll('.like-glyph')
allHearts.forEach((heart) => heart.addEventListener('click',
addNewLike))

function addNewLike(e){
  mimicServerCall()
  .then(data => {
    toggleHeart(e)
  })
  .catch(error => {
    modalMessage.textContent = error
    modal.classList.remove('hidden')
    setTimeout(()=> {modal.classList.add('hidden')}, 5000)
  })
}

// toggles the heart class visibility
function toggleHeart(e){
  if (e.target.textContent.includes(FULL_HEART)){
    e.target.textContent = EMPTY_HEART
    e.target.classList.remove('activated-heart')
  } else {
    e.target.textContent = FULL_HEART
    e.target.classList.add("activated-heart")
  }
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .7
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
