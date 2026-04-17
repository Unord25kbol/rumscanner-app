const btn = document.getElementById("analyzeBtn");
const progress = document.getElementById("progress");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", () => {

  resultDiv.classList.add("hidden");
  progress.innerHTML = "";

  // Simuler AI analyse trin-for-trin
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
<pre>
Rumtype: Værelse / Kontor (under renovering)

### Materialer
*   Spartelmasse til vægge
*   Hvid vægmaling (glans 5-10)
*   Nyt laminat- eller trægulv
*   Nye fodlister
*   Eventuelt maling af loft

### Indretningsidéer
*   Moderne hjemmekontor med skrivebord ved vinduet
*   Lyst minimalistisk soveværelse
*   Indbygget reol langs højre væg
*   Akustikpanel for bedre lydmiljø

### Estimeret materialeforbrug
Maling: ca. 12 liter
Gulv: ca. 18–22 m²
</pre>
  `;

  resultDiv.classList.remove("hidden");
}