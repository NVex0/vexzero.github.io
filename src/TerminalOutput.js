function TerminalOutput(consoleOutput) {
  const container = document.querySelector(".console-output");

  if (!container) return;

  // clear output cũ
  container.innerHTML = "";

  consoleOutput.forEach((item) => {
    const line = document.createElement("div");

    // Prompt giống React component <Prompt />
    const prompt = UserPrompt();
    line.appendChild(prompt);

    const span = document.createElement("span");

    if (item instanceof HTMLElement) {
      span.appendChild(item);
    } else {
      span.innerHTML = item;
    }

    line.appendChild(span);
    container.appendChild(line);
  });

  // auto scroll xuống cuối
  container.scrollTop = container.scrollHeight;
}
