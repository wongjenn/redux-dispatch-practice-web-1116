export let state;

export function managePets(state={pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {...state, pets: [...state.pets, action.payload]}
    case "REMOVE_PET":
      let newPets = state.pets.filter((pet) => {
        return pet.id !== action.payload
      })
      return {...state, pets: newPets}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById("container")

  var petList = state.pets.map(pet =>
    `<li>${pet.name}</li>`
  )
  let petName = petList.join(" ")
  container.innerHtml = `<ul>${petName}</ul>`
}
