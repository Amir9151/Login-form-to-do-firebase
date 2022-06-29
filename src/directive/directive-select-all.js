
export const selectAll= {
  inserted(el) {
    let input = el.querySelector(".q-field__native");
      //console.log(input)
    input.addEventListener("focus", () => {
      if (input.value.length) {
        input.select();
      }
    })
  }
}
