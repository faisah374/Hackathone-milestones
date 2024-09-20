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
        var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <p><b>Name:</b>".concat(name, "</p>\n        <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Phone:</b>").concat(phone, "</p>\n        <p><b>Education:</b>").concat(educatin, "</p>\n        <p><b>Skills:</b>").concat(skills, "</p>\n        <p><b>Experience:</b>").concat(experience, "</p>\n        ;");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('the reume display is missing');
        }
    });
});
