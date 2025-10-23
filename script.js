function generateResume() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const education = document.getElementById("education").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const experience = document.getElementById("experience").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all required fields (Name, Email, Phone).");
    return;
  }

  const resumeHTML = `
    <div class="resume-header">
      <h3>${name}</h3>
      <p>${email} | ${phone}</p>
    </div>
    <hr>
    <h4>🎓 Education</h4>
    <p>${education || "Not provided"}</p>
    <h4>💡 Skills</h4>
    <p>${skills || "Not provided"}</p>
    <h4>💼 Experience</h4>
    <p>${experience || "Not provided"}</p>
  `;

  document.getElementById("resumeDisplay").innerHTML = resumeHTML;
  document.getElementById("resumeSection").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

function downloadResume() {
  const resumeContent = document.getElementById("resumeDisplay").innerHTML;
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>My Resume</title>
        <style>
          body { font-family: Arial; margin: 30px; line-height: 1.6; }
          h3 { color: #333; margin-bottom: 5px; }
          h4 { color: #3551d8; margin-top: 15px; }
          hr { margin: 15px 0; border-top: 1px solid #ccc; }
        </style>
      </head>
      <body>${resumeContent}</body>
    </html>
  `);
  printWindow.print();
}
