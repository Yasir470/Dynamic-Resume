document.getElementById("resumeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const projects = document.getElementById("projects").value;

  const resumeHTML = `
      <h2>${name}</h2>
      <p><strong>${title}</strong></p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Professional Summary</h3>
      <p>${summary}</p>
      <h3>Work Experience</h3>
      <p>${experience.replace(/\n/g, "<br>")}</p>
      <h3>Education</h3>
      <p>${education.replace(/\n/g, "<br>")}</p>
      <h3>Skills</h3>
      <p>${skills.replace(/\n/g, "<br>")}</p>
      <h3>Projects</h3>
      <p>${projects.replace(/\n/g, "<br>")}</p>
  `;

  document.getElementById("resumeDisplay").innerHTML = resumeHTML;
});

// PDF Download Function
document.getElementById("downloadPDF").addEventListener("click", function() {
  const element = document.getElementById("resumeDisplay");
  html2pdf().from(element).save('Muhammad_Yasir_Resume.pdf');
});
