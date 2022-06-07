const List=({res,tablei,listi,handler})=>{
    return(
<>
<li style={{width:"200px",height:"50px",border:"2px solid black"}} onClick={() => handler(tablei,listi)}>{res}</li>
</>
    )
}
export default List;