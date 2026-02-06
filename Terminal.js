function Terminal() {

  let inputText = null;

  const commands = Commands();
  const onEnter = commands.onEnter;

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

  // ===== Console Output container =====
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

  input.addEventListener("keypress", (e) => {
    onEnter(e.target.value, e.key);
  });

  inputPrompt.appendChild(input);
  section.appendChild(inputPrompt);

  // ===== mimic useEffect =====
  setTimeout(() => {
    if (inputText) {
      inputText.value = "";
      inputText.focus();
    }
  }, 0);

  return section;
}
