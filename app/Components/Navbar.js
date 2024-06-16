const Navbar = ({items}) => {
    return (<>
        <div className="flex justify-end gap-[10em] mt-[2em] px-[5em]">
            {
                items.map((e,index)=>{
                    return(
                        <a key={index} href={"#"+e} style={{textDecoration:"none"}} className="text-xl"><p className="hover:underline">{e}</p></a>
                    )
                })                
            }
        </div>
    </>  );
}
 
export default Navbar;