function Title() {
  const wrapper = document.createElement("div");
  wrapper.className = "absolute flex justify-center w-[100%]";

  const pre = document.createElement("pre");
  pre.className =
    "text-sm font-bold pt-3 bg-clip-text bg-gradient-to-r from-[#00e1ff] to-[#ff62d0] text-transparent";

  pre.textContent = `
            _    __  __                _           __
 _  _____  (_)__/ / / /____ ______ _  (_)__  ___ _/ /
| |/ / _ \\/ / _  / / __/ -_) __/  ' \\/ / _ \\/ _  / / 
|___/\\___/_/\\_,_/  \\__/\\__/_/ /_/_/_/_/_//_/\\_._/_/ 
      `;

  wrapper.appendChild(pre);

  return wrapper;
}
