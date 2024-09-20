document.addEventListener('DOMContentLoaded', function () {
    var resumeform = document.getElementById('resumeform');
    var resumeDisplayElement = document.getElementById('resumeDisplay');
    resumeform.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var educatin = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeHTML = "\n        <h2><b> Editable Resume</b></h2>\n        <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Education:</b><span contenteditable=\"true\">").concat(educatin, "</span></p>\n        <p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n        <p><b>Experience:</b><span contenteditable=\"true\">").concat(experience, "</span></p>\n        ;");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('the reume display is missing');
        }
    });
});
