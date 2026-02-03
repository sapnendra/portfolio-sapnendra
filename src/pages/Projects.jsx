import projects from '../components/projectsData'
import CTA from '../components/CTA'
import SEO from '../components/SEO'

const Projects = () => {
  return (
    <>
    <SEO 
      title="Projects - Sapnendra Jaiswal | Full Stack Web Development Portfolio"
      description="Explore Sapnendra Jaiswal's portfolio of full stack web development projects including MERN stack applications, SaaS platforms, e-commerce solutions, and AI-integrated websites."
      keywords="Sapnendra Jaiswal Projects, MERN Stack Projects, React Projects, Node.js Projects, Full Stack Portfolio, Web Development Projects"
      url="https://sapnendra.tech/projects"
    />
    <section className='bg-white text-black' aria-label='Portfolio Projects'>
      <div className='main-container py-28'>
        <h1 className='text-6xl lg:text-[8vw] font-heading font-bold leading-[1] tracking-tight text-center'>Projects</h1>
        <div className='grid md:grid-cols-2 gap-8 mt-8 lg:mt-16' role='list'>
          {projects.map(({ id, name, image, link }) => (
            <article
              key={id}
              role='listitem'
            >
              <a
                href={link}
                className="overflow-hidden flex flex-col"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${name} project`}
              >
                {/* Project Image */}
                <div className="group overflow-hidden h-full rounded-2xl">
                  <img
                    src={image}
                    alt={`${name} - Sapnendra Jaiswal project screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Project Name */}
                <span className="uppercase leading-[1.4] lg:text-xl font-heading mt-4 border-2 border-black/20 px-4 py-1 rounded-full w-fit">
                  {name}
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
    <CTA />
    </>
  )
}

export default Projects