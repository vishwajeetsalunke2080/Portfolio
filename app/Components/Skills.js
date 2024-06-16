import Image from "next/image";

const Skills = ({skills}) => {
    return (<>
        {
            skills.map((e,index)=>{
                return(
                    <div className="flex flex-col items-center justify-center" key={index}>
                        <Image src={e.img} width={110} height={100}/>
                        <p>{e.type}</p>
                    </div>
                )
            })
        }
    </>);
}
 
export default Skills;