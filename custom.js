// Read this JS file bottom to top! The code that runs
// first is at the bottom, and each block calls functions
// that are defined above it.

// Accepts an array of DOM Nodes and resets them
const showNodes = (nodes) => {
  nodes.forEach(node => {
    node.style.display = null
  })
}

// Accepts an array of DOM Nodes and hides them
const hideNodes = (nodes) => {
  nodes.forEach(node => {
    node.style.display = "none"
  })
}

// This is a partially applied function; the first function
// takes the input and applications and runs once when the
// event listener is attached. The second function takes the
// event and fires every time the keyup happens on the input.
// We do this to avoid querying the dom (which remains stable)
// on every keyup.
const filterList = ({input, applicants}) => (e) => {
  let match = input.value.toLowerCase()
  showNodes(applicants)
  if (match.length < 0) {
    return
  }
  let misses = applicants.filter(node => {
    return !node.textContent.toLowerCase().includes(match)
  })
  hideNodes(misses)
}

const init = () => {
  const input = document.getElementById('ra_filter')
  // [...Nodes] syntax turns a nodeList into an arry of nodes
  // gives us iterator and array prototype functions like .map()
  const applicants = [...document.querySelectorAll(".section-applicant")]
  input.addEventListener('keyup', filterList({input, applicants}))
}

// Attach listener to the DOM to initialize
// once the DOM is ready
addEventListener("DOMContentLoaded", init);