function Terminal() {

  let inputText = null;

  const commands = Commands();
  const onEnter = commands.onEnter;

  let history = [];
  let historyIndex = -1;

  function focusMethod() {
    const field = document.getElementById("text-field");
    if (field) field.focus();
  }

  // ===== Section =====
  const section = document.createElement("section");
  section.className = "console";
  section.addEventListener("click", focusMethod);

  // ===== Help Text =====
  const helpWrapper = document.createElement("div");
  helpWrapper.className = "terminal-hint";

  const helpText = document.createElement("h1");
  helpText.textContent = "type 'help' for commands";

  helpWrapper.appendChild(helpText);
  section.appendChild(helpWrapper);

  // ===== Console Output =====
  const output = document.createElement("div");
  output.className = "console-output";
  section.appendChild(output);

  // ===== Input Prompt =====
  const inputPrompt = document.createElement("div");
  inputPrompt.className = "input-prompt";

  inputPrompt.appendChild(UserPrompt());

  const input = document.createElement("input");
  input.type = "text";
  input.id = "text-field";
  input.spellcheck = false;

  inputText = input;

  input.addEventListener("blur", (e) => {
    e.target.focus();
  });

  // ===== KEYBOARD HANDLER =====
  input.addEventListener("keydown", (e) => {

    const value = e.target.value.trim();

    // ===== ENTER =====
    if (e.key === "Enter") {

      if (value.length > 0) {
        history.push(value);
        historyIndex = history.length;
      }

      // ----- render command user -----
      const line = document.createElement("div");

      const prompt = UserPrompt();
      line.appendChild(prompt);

      const userCmd = document.createElement("span");
      userCmd.textContent = value;
      userCmd.className = "cmd-user";
      line.appendChild(userCmd);

      output.appendChild(line);

      // ----- gọi logic Commands -----
      const result = onEnter(value, "Enter");

      if (result && result instanceof Node) {
        const resultLine = document.createElement("div");
        resultLine.appendChild(result);
        resultLine.style.color = "#37b0d4";
        output.appendChild(resultLine);
      }

      // auto scroll
      output.scrollTop = output.scrollHeight;

      e.target.value = "";
    }

    // ===== HISTORY UP =====
    else if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        e.target.value = history[historyIndex];
      }
      e.preventDefault();
    }

    // ===== HISTORY DOWN =====
    else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        historyIndex++;
        e.target.value = history[historyIndex];
      } else {
        historyIndex = history.length;
        e.target.value = "";
      }
      e.preventDefault();
    }

  });

  inputPrompt.appendChild(input);
  section.appendChild(inputPrompt);

  // mimic useEffect
  setTimeout(() => {
    if (inputText) {
      inputText.focus();
    }
  }, 0);

  return section;
}
