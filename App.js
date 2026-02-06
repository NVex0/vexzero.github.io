function App() {

  const root = document.getElementById("root");

  if (!root) return;

  // clear root
  root.innerHTML = "";

  // ===== Title =====
  root.appendChild(Title());

  // ===== Center container =====
  const center = document.createElement("div");
  center.className = "center-container";

  center.appendChild(Terminal());

  root.appendChild(center);
}
