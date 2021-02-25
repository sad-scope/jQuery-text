$(function () {
  let attribute = "#box";
  let a = 0;
  let b = 0;
  function hexFromRGB(r, g, b) {
    var hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }

  function refreshColor() {
    var red = $("#red").slider("value"),
      green = $("#green").slider("value"),
      blue = $("#blue").slider("value"),
      hex = hexFromRGB(red, green, blue);
    $(attribute).css(
      attribute === "#text" ? "color" : "background-color",
      "#" + hex
    );
  }

  $("#red, #green, #blue").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshColor,
    change: refreshColor,
  });
  $("#red").slider("value", 140);
  $("#green").slider("value", 140);
  $("#blue").slider("value", 60);

  $("#color-button").on("click", function () {
    attribute = "#text";
  });
  $("#background-button").on("click", function () {
    attribute = "#box";
  });
});
