const btn = document.getElementById("analyzeBtn");
const progress = document.getElementById("progress");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", () => {

  resultDiv.classList.add("hidden");
  progress.innerHTML = "";

  setTimeout(() => {
    progress.innerHTML = "🔍 Scanner billede...";
  }, 800);

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
  <div>
    <h2>Rumtype: Værelse / Kontor (under renovering)</h2>

    <h3>Materialer</h3>
    <ul>
      <li>Spartelmasse til vægge</li>
      <li>Hvid vægmaling (glans 5-10)</li>
      <li>Nyt laminat- eller trægulv</li>
      <li>Nye fodlister</li>
      <li>Maling af loft</li>
    </ul>

    <h3>Indretningsidéer</h3>
    <ul>
      <li>Moderne hjemmekontor ved vinduet</li>
      <li>Lyst minimalistisk soveværelse</li>
      <li>Indbygget reol langs højre væg</li>
      <li>Akustikpanel for bedre lydmiljø</li>
    </ul>

    <h3>Estimeret materialeforbrug</h3>
    <p>Maling: ca. 12 liter</p>
    <p>Gulv: ca. 18–22 m²</p>
  </div>
  `;

  resultDiv.classList.remove("hidden");
}