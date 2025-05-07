function checkAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  let score = 0;

  if (q1?.value === "no") score++;
  if (q2?.value === "tell") score++;

  const result = document.getElementById("quizResult");
  result.textContent = `You got ${score}/2 correct! ${score === 2 ? "You're a Cyber Hero!" : "Keep learning!"}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("certificateForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("studentName").value.trim();

      if (name) {
        localStorage.setItem("cybersafeCertified", name);
        document.getElementById("certStatus").innerHTML = `
          🎉 Well done, <strong>${name}</strong>!<br>
          <a href="certificate.html" target="_blank">Click here to view your certificate</a>
        `;
      }
    });
  }
});
