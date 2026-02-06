import React from "react";

const commands = {
  help: "profile repo ls clear",
  repo: (
    <a
      className="hover:text-[#eee]"
      href="https://github.com/NVex0/nvex0.github.io"
    >
      https://github.com/tomgx/void-terminal
    </a>
  ),
  profile: (
    <a className="hover:text-[#eee]" href="https://github.com/NVex0/">
      https://github.com/NVex0/
    </a>
  ),
  ls: (
    <span>
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/README.md"
      >
        README.md
      </a>
      "{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/NVex0/nvex0.github.io/main/package-lock.json"
      >
        package-lock.json
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/NVex0/nvex0.github.io/main/package.json"
      >
        package.json
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/NVex0/nvex0.github.io/main/postcss.config.js"
      >
        postcss.config.js
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://github.com/NVex0/nvex0.github.io/tree/main/"
      >
        public
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://github.com/NVex0/nvex0.github.io/tree/main/src"
      >
        src
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/NVex0/nvex0.github.io/main/tailwind.config.js"
      >
        tailwind.config.js"
      </a>
    </span>
  ),
};

const Commands = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);

  const onEnter = (value, key) => {
    var userInput = value.trim();
    if (key === "Enter") {
      if (commands[userInput] != null) {
        const newConsoleLine = (
          <>
            <span>{userInput}</span>
            <br />
            <span className="text-[#37b0d4] word-spacing">
              {commands[userInput]}
            </span>
          </>
        );
        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      } else if (userInput === "clear") {
        return updateConsoleOutput((consoleOutput) => consoleOutput.splice());
      } else if (userInput.trim().length === 0) {
        const newConsoleLine = (
          <>
            <br />
          </>
        );

        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      } else {
        const newConsoleLine = (
          <>
            <span>{userInput}</span>
            <br />
            <span>{userInput}: command not found</span>
          </>
        );

        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      }
    }
  };

  return [consoleOutput, onEnter];
};

export default Commands;
