export const contents = state => {
  for (var i = 0; i < state.contents.length; i++) {
    if (state.contents[i].id == state.choicelang) {
      // console.log(state.state.choicelang)
      // console.log(state.state.contents[i])
      return state.contents[i]
    }
  }
}
