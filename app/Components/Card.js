import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ projects }) => {
    return (<>
        <div className="flex flex-row gap-[2em] justify-center">
            {
                projects.map((e,index) => {
                    return (
                        <div className="card bg-sky-100 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-110 max-w-[25em]" key={index}>
                            {/* <Image className="rounded-full border-2 border-black p-2 w-24 h-24 mx-auto mt-4" src={e.logo} width={10} height={10} alt="Logo" /> */}
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2 text-black text-center">{e.title}</h2>
                                <p className="text-gray-700 text-justify mt-[2em]">{e.body}</p>
                                <div className="flex justify-around items-center flex-wrap"> 
                                {
                                    e.tags.map((xe, index)=>{
                                        return(                                            
                                            <div className="rounded-full bg-sky-200 border-1 border-black p-3 text-black mt-3" key={index}>{xe}</div>
                                        )
                                    })
                                }
                                </div>
                                <Link href={e.link} passHref target="_blank">
                                    <button className="hover:bg-sky-800 rounded-[5px] bg-sky-400 px-4 py-1 mt-[1.5em]">View Project</button>
                                </Link>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    </>);
}

export default ProjectCard;