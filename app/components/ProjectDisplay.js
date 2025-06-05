import React from 'react'

const ProjectDisplay = () => {

    const projects = [
        {
            "title": "Lusail Commercial Complex",
            "category": "Commercial Buildings",
            "location": "Lusail, Qatar",
            "status": "Completed",
            "scope": "Design, Construction, and Material Supply",
            "thumbnail": "/images/projects/lusail-complex.jpg",
            "description": "A state-of-the-art office complex designed and built by CMTC, including full structural development and sourcing of high-grade materials.",
            "slug": "lusail-commercial-complex"
        },
        {
            "title": "Pearl Palace Villas",
            "category": "Palaces & Villas",
            "location": "The Pearl, Doha",
            "status": "Ongoing",
            "scope": "Turnkey Construction and Procurement",
            "thumbnail": "/images/projects/pearl-palace-villas.jpg",
            "description": "Luxury residential villas crafted with precision and elegance, reflecting CMTC’s commitment to high-end residential infrastructure.",
            "slug": "pearl-palace-villas"
        },
        {
            "title": "Hamad Clinic Network",
            "category": "Clinics & Healthcare",
            "location": "Doha, Qatar",
            "status": "Completed",
            "scope": "Mechanical Gate Barrier Installation and Material Supply",
            "thumbnail": "/images/projects/hamad-clinic.jpg",
            "description": "CMTC supported the Hamad Clinic expansion with essential mechanical barrier systems and specialized construction materials.",
            "slug": "hamad-clinic-network"
        },
        {
            "title": "Fiber Optic Supply Network",
            "category": "Mechanical Installations",
            "location": "Nationwide, Qatar",
            "status": "Active",
            "scope": "Trading and Distribution of Fiber Optic Components",
            "thumbnail": "/images/projects/fiber-optic-supply.jpg",
            "description": "Ongoing nationwide supply and distribution of fiber optic components and accessories, contributing to Qatar's digital infrastructure.",
            "slug": "fiber-optic-supply-network"
        },
        {
            "title": "Doha Mixed-Use Tower",
            "category": "Commercial Buildings",
            "location": "West Bay, Doha",
            "status": "Commissioning",
            "scope": "Structural Construction, Electrical & MEP Works",
            "thumbnail": "/images/projects/doha-mixed-use.jpg",
            "description": "A mixed-use tower integrating office, retail, and smart facility systems with CMTC’s advanced contracting and installation services.",
            "slug": "doha-mixed-use-tower"
        },
        {
            "title": "Doha Mixed-Use Tower",
            "category": "Commercial Buildings",
            "location": "West Bay, Doha",
            "status": "Commissioning",
            "scope": "Structural Construction, Electrical & MEP Works",
            "thumbnail": "/images/projects/doha-mixed-use.jpg",
            "description": "A mixed-use tower integrating office, retail, and smart facility systems with CMTC’s advanced contracting and installation services.",
            "slug": "doha-mixed-use-tower"
        }
    ]

    return (
        <div className='min-h-screen h-fit w-full flex flex-wrap gap-8 py-16 justify-center items-start'>
            {projects.map(project => (
            <div key={project.slug} className='w-[45%] h-[300px] bg-[#bebebe] card flex justify-center items-center rounded-xl'>
                <div className='w-[35%] over'>
                    <img src="images/Construction.png" alt="" />
                </div>

                <div className='w-[65%] h-full flex flex-col gap-2 justify-start px-4'>
                    <h3 className='title3 mb-5'>{project.title}</h3>
                    
                    <p className='mutedText'>{project.location} | {project.category}</p>
                    <p className='mutedText'>{project.scope}</p>
                    <p className='mutedText2'>{project.description.length>60 ? project.description.substring(0,61)+"......": project.description}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default ProjectDisplay
