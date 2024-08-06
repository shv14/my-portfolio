import Heading from "./Heading"
import Section from "./Section"
import { skills } from "../constants";
const Skills = () => {
  return (

      <Section id="Skills">
             <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="Skills"
             title="Skills"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {skills.map((item) => (
            <div
              className="block relative p-0.5 bg-n-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h2 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-2">{item.text}</p>
                <div className="flex gap-2 items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <img
                    
                    src={item.iconUrl2}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <img
                    
                    src={item.iconUrl3}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <img
                    
                    src={item.iconUrl4}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      </Section>
  )
}

export default Skills