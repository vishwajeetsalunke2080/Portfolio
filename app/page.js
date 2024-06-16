import Image from "next/image";
import ProjectCard from "./Components/Card";
import EducationTimeline from "./Components/Education";
import Navbar from "./Components/Navbar";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Skills from "./Components/Skills";

const projectInfo = [
  {
    id: 1,
    title: "Audio Sentiment Analysis",
    body: "Develop a machine learning model capable of performing sentiment analysis on audio data. The goal is to classify audio recordings as expressing positive, negative, or neutral sentiments. This project leverages advanced techniques in audio processing, feature extraction, and machine learning to achieve accurate sentiment classification.",
    link: "https://github.com/vishwajeetsalunke2080/FinalYearProject",
    tags: ["Python", "AI/ML", "Next.JS", "SQLite"]
  },
  {
    id: 2,
    title: "Campaign Broadcast UI",
    body: "Front End aplication for bulk message broadcasting which interacts with ML model to create custom broadcasts and send it to a large customer base. Which helps in promoting brands and advertising to enhance sales and customer reach.",
    link: "https://github.com/vishwajeetsalunke2080/Campaign-Broadcast",
    tags: ["Next.JS", "API", "ML", "MySQL"]
  },
  {
    id: 3,
    title: "TaskApp",
    body: "TaskApp is a easy task management application using MERN stack which allows the users to access their data on the go to manage tasks. Its features include seperate work and personal tasks.",
    link: "https://taskapp1.azurewebsites.net",
    tags: ["React.JS", "Express.JS", "Node.JS", "MongoDB", "OAuth", "Azure Cloud"]
  },
]

const education = [
  {
    title: "B.E Computer Engineering",
    type: "Graduation",
    location: "TSSM's Bhivarabai Sawant College of Engineering and Research, Narhe, Pune",
    year: "2021 - 2024",
    score: "8.60 CGPA"
  },
  {
    title: "Diploma in Computer Engineering",
    type: "High School Diploma",
    location: "Government Polytechnic College, Dharashiv",
    year: "2018 - 2021",
    score: "92.69 %"
  },
  {
    title: "SSC 10th std",
    type: "School",
    location: "Abhinav English School, Dharashiv.",
    year: "2017 - 2018",
    score: "83.80 %"
  }
]

const experience = [
  {
    title: "Junior Software Developer",
    type: "Internship",
    location: "Cybernetics Security Shells Pvt. Ltd., Hadapsar, Pune",
    year: "Oct 2023 - June 2024",
    score:"Asp.net | MS SQL | Next.JS"
  },
]

const skills = [
  {
    type:"MongoDB",
    img:"mongodbsvg.svg"
  },
  {
    type:"React.JS",
    img:"reactjs.svg"
  },
  {
    type:"Node.JS",
    img:"nodejs-1-logo.svg"
  },
  {
    type:"Java SE",
    img:"java.svg"
  },
  {
    type:"C++",
    img:"c-plus-plus.svg"
  },
  {
    type:"Git",
    img:"git.svg"
  },
  {
    type:"MySQL",
    img:"mysql.svg"
  },
  {
    type:"Microsoft Azure",
    img:"azure.svg"
  },
  {
    type:"Azure DevOps",
    img:"azure-devops.svg"
  },
  {
    type:"Next.JS",
    img:"next-js.svg"
  },
]

const Nav = ["About", "Projects", "Education"]



const Home = () => {
  return (<>
    {/* <Navbar items={Nav}/> */}
    <div className='flex justify-end px-[5em] gap-[4em] mt-[2em]'>
      <a href="https://www.linkedin.com/in/vishwajeetsalunke" aria-label='LinkedIn'><LinkedInIcon/></a>
      <a href="https://www.github.com/vishwajeetsalunke2080" aria-label='Github'><GitHubIcon /></a>
      <a href="https://www.instagram.com/vishwajeet_salunke" aria-label='Instagram'><InstagramIcon /></a>
    </div>

    <div className='flex justify-start lg:text-8xl min-h-[3em] mb-[0.5em] mt-[2em] items-center ms-[1em]'>
      <div><span className='mx-2'>Hello I&apos;m </span><div class="gradient-text p-2 font-bold">Vishwajeet Salunke</div></div>
    </div>

    <section id="about">
      <div className="flex justify-start text-xl p-2 text-justify px-[5em] mb-[5em]">
        {/* <div className=" px-[1.2em] py-[1em] lg:max-w-[50em]"> */}
          {/* <div className="text-pink-300 font-bold lg:text-[3em] mb-[1.5em] " >
            About Myself
          </div> */}
          <p>A dedicated and enthusiastic web developer with a strong foundation in Next.js,
          Java, and Azure Cloud.
          love to create seamless and scalable web applications.
          and eager to leverage cloud technologies and modern frameworks to drive digital transformation</p>
        {/* </div> */}
      </div>
    </section>

    <div className="flex justify-center flex-wrap px-[5em] gap-x-[10em] mb-[9em]">
    <p className="px-[5em] text-center text-green-400 font-bold text-[4em] m-[2em]">Tech Stack</p>
    <Skills skills={skills}/>
    </div>

    <div className="px-[5em]" id="Experience">
      <EducationTimeline educationList={experience} title={"Experience"}/>
    </div>

    <div className="px-[2em] m-[10em]" id="Projects">
      <p className="px-[5em] text-center text-cyan-400 font-bold text-[4em] m-[2em]">Projects</p>
      <ProjectCard projects={projectInfo} />
    </div>

    <div className="px-[5em]" id="Education">
      <p className="px-[5em] text-center text-purple-400 font-bold text-[4em] mt-[2em]">Education</p>
      <EducationTimeline educationList={education} />
    </div>

  </>);
}

export default Home;