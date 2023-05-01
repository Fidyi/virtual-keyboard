
const englishLayout = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
    ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"],
    ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "shift"],
    ["control", "option", "command", "space", "command", "option", "control", "←", "↑", "↓", "→"]
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

  for (let row of englishLayout) {
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("row");
    
    for (let key of row) {
      const keyElement = document.createElement("div");
      keyElement.classList.add("key");
      keyElement.textContent = key;
      // Get all the key elements
const keys = document.querySelectorAll(".key");

// Add event listener to window to detect keydown event
window.addEventListener("keydown", function(event) {
  // Loop through all the key elements
  keys.forEach(function(key) {
    // Check if the key's text content matches the pressed key
    if (key.textContent === event.key) {
      // Add a class to highlight the key
      key.classList.add("active");
    }
  });
});

// Add event listener to window to detect keyup event
window.addEventListener("keyup", function(event) {
  // Loop through all the key elements
  keys.forEach(function(key) {
    // Check if the key's text content matches the released key
    if (key.textContent === event.key) {
      // Remove the class to remove the highlight
      key.classList.remove("active");
    }
  });
});

      
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
          keyElement.addEventListener("mousedown", function() {
            input.value = input.value.slice(0, -1);
            input.focus();
          });
          break;
        case "capslock":
          keyElement.addEventListener("mouseup", function() {
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
          keyElement.classList.add("function");
          keyElement.classList.add(key);
          let uppercase = false;
          keyElement.addEventListener("click", function() {
            if (!uppercase) {
              uppercase = true;
              document.querySelectorAll(".letter").forEach(function(element) {
                element.classList.add("uppercase");
              });
            }
          });
          keyElement.addEventListener("click", function() {
            if (uppercase) {
              uppercase = false;
              document.querySelectorAll(".letter").forEach(function(element) {
                element.classList.remove("uppercase");
              });
            }
          });
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
 
 