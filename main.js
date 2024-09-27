"use strict";
// Listing element
document
    .getElementById("resumeform")
    ?.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertion
    const profilePicInput = document.getElementById("profilePic");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const educationElement = document.getElementById("education");
    const experinceElement = document.getElementById("experince");
    const skillsElement = document.getElementById("skills");
    const usernameElement = document.getElementById("username");
    // Check if all elements exist before proceeding
    if (profilePicInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experinceElement &&
        skillsElement &&
        usernameElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experince = experinceElement.value;
        const skills = skillsElement.value;
        // Profile picture element
        const profilePicInputFile = profilePicInput.files?.[0];
        const profilePicURL = profilePicInputFile
            ? URL.createObjectURL(profilePicInputFile)
            : "";
        // Create resume output
        const resumeOutPut = `<h2>Resume</h2>
      ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profilePic">` : ""}
      <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
      <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
      <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
      
      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>
      
      <h3>Experience</h3>
      <p id="edit-experince" class="editable">${experince}</p>
      
      <h3>Skills</h3>
      <p id="edit-skills" class="editable">${skills}</p>`;
        const resumeOutPutElement = document.getElementById("resumeOutput");
        if (resumeOutPutElement) {
            resumeOutPutElement.innerHTML = resumeOutPut;
            resumeOutPutElement.classList.remove("hidden");
            // Create container for buttons
            const buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonContainer";
            resumeOutPutElement.appendChild(buttonContainer);
            // Add download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonContainer.appendChild(downloadButton);
            // Add Shareable Link button
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", async () => {
                try {
                    // Create a unique shareable link (simulate it in this case)
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                    // Use Clipboard API to copy the shareable link
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                }
                catch (err) {
                    console.error("Failed to copy link: ", err);
                    alert("Failed to copy link to clipboard. Please try again.");
                }
            });
            buttonContainer.appendChild(shareLinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("Form elements are missing");
    }
});
