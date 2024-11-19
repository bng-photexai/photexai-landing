// Hero background gradient script

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const colors = [
    ["#ff7e5f", "#feb47b"], // Coral to Peach
    ["#6a11cb", "#2575fc"], // Purple to Blue
    ["#43cea2", "#185a9d"], // Teal to Navy
    ["#ffafbd", "#ffc3a0"], // Pink to Light Orange
    ["#1f4037", "#99f2c8"], // Dark Green to Mint
  ];
  let step = 0;
  const colorSpeed = 0.02; // Speed of transition between colors
  let colorIndices = [0, 1];

  function interpolateColor(color1, color2, factor) {
    const result = color1
      .slice(1)
      .match(/.{2}/g)
      .map((hex, i) => {
        return Math.round(
          parseInt(hex, 16) * (1 - factor) +
            parseInt(color2.slice(1).match(/.{2}/g)[i], 16) * factor
        );
      });
    return `#${result.map((x) => x.toString(16).padStart(2, "0")).join("")}`;
  }

  function updateGradient() {
    const color1 = interpolateColor(
      colors[colorIndices[0]][0],
      colors[colorIndices[1]][0],
      step
    );
    const color2 = interpolateColor(
      colors[colorIndices[0]][1],
      colors[colorIndices[1]][1],
      step
    );

    body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    body.style.backgroundSize = "200% 200%";
    body.style.transition = "background 0.2s ease";

    step += colorSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[1] = (colorIndices[1] + 1) % colors.length;
    }
  }

  setInterval(updateGradient, 50);
});
