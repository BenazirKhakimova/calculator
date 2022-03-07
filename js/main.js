let enterNumber = $(".enter-num");
let result = $(".result");
let btn = $(".buttons");

btn.each((index, item) => {
  $(item).on("click", calculate);
});

function calculate(event) {
  //   получаем ту кнопку на которую нажали
  let clickedBtn = event.target.innerText;

  if (clickedBtn === "AC") {
    enterNumber.empty();
    result.text("0");
    // повторяется каждый раз при очистке
    result.css("animation", "");
    enterNumber.css("animation", "");
    return;
  }

  if (clickedBtn === "=") {
    result.css("animation", "big 0,5s ease-in-out");
    enterNumber.css("animation", "small 0,5s ease-in-out");

    result.css("animation-fill-mode", "forwards");
    enterNumber.css("animation-fill-mode", "forwards");
    // eval is here
    let evalRes = eval(enterNumber.text());
    result.text(evalRes);
  }
  //   добавляем кликнувщиеся кнопки, чтобы видеть, на что нажали
  else {
    enterNumber.append(clickedBtn);
    return;
  }
}
