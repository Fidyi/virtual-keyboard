const keyboardLayout = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
    ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift"],
    ["fn", "control", "option", "command", "space", "command", "option", "control", "←", "↑", "↓", "→"]
  ];
  
  const keyboardElement = document.createElement("div");
  keyboardElement.id = "keyboard";
  document.body.appendChild(keyboardElement);
  
  const keyboardContainer = document.getElementById("keyboard");
  const input = document.createElement("textarea");
  input.type = "text";
  input.rows = 10;
  input.classList.add("textarea");
  keyboardContainer.insertBefore(input, keyboardContainer.firstChild);

  for (let row of keyboardLayout) {
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("row");
    
    for (let key of row) {
      const keyElement = document.createElement("div");
      keyElement.classList.add("key");
      keyElement.textContent = key;
      
      switch (key) {
        case "tab":
        keyElement.classList.add("tab");
        keyElement.addEventListener("click", function(e) {
        e.preventDefault();
        input.value += "  ";
        input.focus();
        });
        break;
        case "delete":
          keyElement.classList.add("delete");
          keyElement.addEventListener("click", function() {
            input.value = input.value.slice(0, -1);
            input.focus();
          });
          break;
        case "capslock":
          keyElement.addEventListener("click", function() {
            if (keyElement.classList.contains("active")) {
              keyElement.classList.remove("active");
              document.querySelectorAll(".letter").forEach(function(element) {
                element.textContent = element.textContent.toLowerCase();
              });
            } else {
              keyElement.classList.add("active");
              document.querySelectorAll(".letter").forEach(function(element) {
                element.textContent = element.textContent.toUpperCase();
              });
            }
          });
          break;
        case "enter":
          keyElement.addEventListener("click", function() {
            input.value += "\n";
            input.focus();
          });
          
          break;
        case "shift":
        case "control":
        case "option":
        case "command":
          keyElement.classList.add("function");
          keyElement.classList.add(key);
          break;
        case "space":
          keyElement.classList.add("space");
          keyElement.addEventListener("click", function() {
          input.value += " ";
          input.focus();
          });
          break;
        default:
          keyElement.classList.add("letter");
          keyElement.addEventListener("click", function() {
            input.value += keyElement.textContent;
            input.focus();
          });
          break;
      }
      
      keyboardRow.appendChild(keyElement);
    }
    
    keyboardElement.appendChild(keyboardRow);
  }
