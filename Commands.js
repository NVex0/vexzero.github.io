function Commands() {

  let consoleOutput = [];

  const commands = {
    help: "profile repo ls clear",

    repo: createLink(
      "https://github.com/tomgx/void-terminal"
    ),

    profile: createLink(
      "https://github.com/tomgx/"
    ),

    ls: createLS()
  };

  function createLink(url) {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = url;
    a.className = "hover-link";
    a.target = "_blank";
    return a;
  }

  function createLS() {
    const span = document.createElement("span");

    span.appendChild(createLink("https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/README.md"));
    span.append(" { ");

    span.appendChild(createLink("https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/package-lock.json"));
    span.append(" ");

    span.appendChild(createLink("https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/package.json"));
    span.append(" ");

    span.appendChild(createLink("https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/postcss.config.js"));
    span.append(" ");

    span.appendChild(createLink("https://github.com/tomgx/void.is-a-dev/tree/main/public"));
    span.append(" ");

    span.appendChild(createLink("https://github.com/tomgx/void.is-a-dev/tree/main/src"));
    span.append(" ");

    span.appendChild(createLink("https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/tailwind.config.js"));

    return span;
  }

  function updateConsoleOutput(newItem) {
    consoleOutput = consoleOutput.concat(newItem);
    TerminalOutput(consoleOutput);
  }

  function clearConsole() {
    consoleOutput = [];
    TerminalOutput(consoleOutput);
  }

  function onEnter(value, key) {

    const userInput = value.trim();

    if (key !== "Enter") return;

    if (commands[userInput] != null) {

      const wrapper = document.createElement("span");

      const inputSpan = document.createElement("span");
      inputSpan.textContent = userInput;

      const br = document.createElement("br");

      const outputSpan = document.createElement("span");
      outputSpan.className = "command-output";

      const cmdValue = commands[userInput];

      if (cmdValue instanceof HTMLElement) {
        outputSpan.appendChild(cmdValue.cloneNode(true));
      } else {
        outputSpan.textContent = cmdValue;
      }

      wrapper.appendChild(inputSpan);
      wrapper.appendChild(br);
      wrapper.appendChild(outputSpan);

      updateConsoleOutput(wrapper);

    } else if (userInput === "clear") {

      clearConsole();

    } else if (userInput.length === 0) {

      const br = document.createElement("br");
      updateConsoleOutput(br);

    } else {

      const wrapper = document.createElement("span");

      const inputSpan = document.createElement("span");
      inputSpan.textContent = userInput;

      const br = document.createElement("br");

      const errorSpan = document.createElement("span");
      errorSpan.textContent = `${userInput}: command not found`;

      wrapper.appendChild(inputSpan);
      wrapper.appendChild(br);
      wrapper.appendChild(errorSpan);

      updateConsoleOutput(wrapper);
    }
  }

  return {
    getConsoleOutput: () => consoleOutput,
    onEnter
  };
}
