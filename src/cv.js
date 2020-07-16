import string from "./intro"

let html = document.querySelector("#intro")
let style = document.querySelector("#style")

let n = 0,
  str = ""

function step() {
  setTimeout(() => {
    if (n < string.length) {
      str +=
        string[n] === "\n" ? "<br>" : string[n] === " " ? "&nbsp;" : string[n]

      html.innerHTML = str
      style.innerHTML = string.substring(0, n)

      // 实时滚动到最底部
      window.scrollTo(0, 99999)
      html.scrollTo(0, 99999)

      n++
      step()
    }
  }, 0)
}

step()
