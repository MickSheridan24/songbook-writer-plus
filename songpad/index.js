document.addEventListener("DOMContentLoaded", () => {
  const main = $("#main");
  const lines = [];
  lines.push(newLine());
  document.addEventListener("keypress", e => {
    if (e.keyCode === 13) {
      lines[lines.length - 1].active = false;
      lines.push(newLine());
    }
  });
});

function cursor(line) {
  const cur = document.createElement("div");
  cur.id = "cursor";
  const timer = setInterval(() => {
    if (cur.style.visibility !== "hidden") {
      cur.style.visibility = "hidden";
    } else {
      cur.style.visibility = "visible";
    }
    if (!line.active) {
      clearInterval(timer);
    }
  }, 500);

  return cur;
}

function newLine() {
  const currLine = document.createElement("div");
  currLine.classNames += ".line";

  currLine.active = true;
  main.append(currLine);

  const text = document.createElement("span");
  currLine.append(text);
  const curs = cursor(currLine);
  currLine.append(curs);
  document.addEventListener("keypress", handleNormalKey);
  document.addEventListener("keydown", handleSpecialKey);

  function handleNormalKey(e) {
    if (e.keyCode !== 13) {
      text.innerText += e.key;
    }
  }
  function handleSpecialKey(e) {
    console.log(e.keyCode);
    if (e.keyCode === 8) {
      text.innerText = text.innerText.slice(0, text.innerText.length - 1);
    }
    if (e.keyCode === 13) {
      currLine.active = false;
      currLine.removeChild(curs);
      document.removeEventListener("keypress", handleNormalKey);
      document.removeEventListener("keydown", handleSpecialKey);
    }
  }

  return currLine;
}
