document.addEventListener('DOMContentLoaded',()=>{
    const resumeform=
    document.getElementById('resumeform')as HTMLFormElement;
    const resumeDisplayElement =
    document.getElementById('resumeDisplay')as HTMLDivElement;

    resumeform.addEventListener('submit',(event: Event)=>{
        event.preventDefault();
        const name=
        (document.getElementById('name')as HTMLInputElement).value;
        const email =
        (document.getElementById('email')as HTMLInputElement).value;
        const phone=
        (document.getElementById('phone')as HTMLInputElement).value;
        const educatin=
        (document.getElementById('education')as HTMLTextAreaElement).value;
        const experience=

        (document.getElementById('experience')as HTMLTextAreaElement).value;
        const skills =
        (document.getElementById('skills')as HTMLTextAreaElement).value;

         
        const resumeHTML= `
        <h2><b>Resume</b></h2>
        <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>Phone:</b>${phone}</p>
        <p><b>Education:</b>${educatin}</p>
        <p><b>Skills:</b>${skills}</p>
        <p><b>Experience:</b>${experience}</p>
        ;`
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;
}else{
    console.error('the reume display is missing');
}
 
   
    });
    
})