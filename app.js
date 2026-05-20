function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function openApp() {
  const username = document.getElementById("username").value || "Client";
  document.getElementById("hello").innerText = username.split("@")[0];
  showScreen("home");
}

function setTheme(theme) {
  document.body.className = theme;
  fakeDone("Theme changed");
}

function setSpace(space) {
  const data = {
    personal: ["Personal balance", "€48,920.55", "+ €1,240 this month"],
    business: ["Business balance", "€88,210.00", "Invoices ready"],
    vault: ["Vault balance", "€240,000.00", "Private savings protected"]
  };

  document.getElementById("spaceLabel").innerText = data[space][0];
  document.getElementById("spaceBalance").innerText = data[space][1];
  document.getElementById("spaceSubtitle").innerText = data[space][2];

  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  if (space === "personal") document.getElementById("tabPersonal").classList.add("active");
  if (space === "business") document.getElementById("tabBusiness").classList.add("active");
  if (space === "vault") document.getElementById("tabVault").classList.add("active");
}

function selectCard(card) {
  fakeDone(card + " card selected");
}

function fakeDone(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

class BottomNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <button onclick="showScreen('home')">Home</button>
        <button onclick="showScreen('cards')">Cards</button>
        <button onclick="showScreen('elite')">Elite</button>
        <button onclick="showScreen('settings')">Style</button>
      </nav>
    `;
  }
}
customElements.define("bottom-nav", BottomNav);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
