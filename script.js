// script.js - Dynamic Portfolio Rendering

document.addEventListener('DOMContentLoaded', () => {

    // Load projects from JSON
    fetch('profile.json')
    .then(res => res.json())
    .then(data => {

        // Projects
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(proj => {
            let div = document.createElement('div');
            div.className = 'col-md-4 d-flex ftco-animate';
            div.innerHTML = `
                <div class="blog-entry justify-content-end">
                    <a href="${proj.link}" class="block-20 zoom-effect" style="background-image: url('${proj.image}');"></a>
                    <div class="text mt-3 float-right d-block">
                        <h3 class="heading"><a href="${proj.link}" target="_blank">${proj.title}</a></h3>
                        <p>${proj.desc}</p>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(div);
        });

        // Skills (optional - you can expand for a skill section)
        const skillsContainer = document.getElementById('skills-container');
        if(skillsContainer && data.skills){
            data.skills.forEach(skill=>{
                let skDiv = document.createElement('div');
                skDiv.className='skill';
                skDiv.innerHTML=`<h4>${skill.name}</h4>
                <div class="progress-bar" style="width:${skill.level}%; background-color:#3b82f6;">${skill.level}%</div>`;
                skillsContainer.appendChild(skDiv);
            });
        }

    }).catch(err => console.error('Error loading JSON:', err));

});
