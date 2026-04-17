const btn = document.getElementById("analyzeBtn");
const progress = document.getElementById("progress");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", () => {

  resultDiv.classList.add("hidden");
  progress.innerHTML = "";

  // Simuler AI analyse trin-for-trin
  setTimeout(() => {
    progress.innerHTML = "🔍 Scanner billede...";
  }, 500);

  setTimeout(() => {
    progress.innerHTML = "🧠 Identificerer rumtype...";
  }, 2000);

  setTimeout(() => {
    progress.innerHTML = "🧱 Analyserer materialer...";
  }, 3500);

  setTimeout(() => {
    progress.innerHTML = "✅ Analyse fuldført!";
    showResult();
  }, 5000);

});

function showResult() {

  resultDiv.innerHTML = `
    <h2>Rumtype: Stue</h2>

    <h3>Materialer</h3>
    <ul>
      <li>Trægulv</li>
      <li>Hvid vægmaling</li>
      <li>Indbyggede loftspots</li>
    </ul>

    <h3>Indretningsidéer</h3>
    <ul>
      <li>Minimalistisk sofaområde</li>
      <li>Plantehjørne for bedre indeklima</li>
      <li>TV-væg med træpanel</li>
    </ul>

    <h3>Estimeret materialeforbrug</h3>
    <p>Maling: 10 liter</p>
    <p>Gulv: 25 m²</p>
  `;

  resultDiv.classList.remove("hidden");
}