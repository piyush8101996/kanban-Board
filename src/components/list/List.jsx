import style from "./list.module.css"
const List=({res,tablei,listi,handler})=>{
    return(
<>
<li className={style.list} onClick={() => handler(tablei,listi)}>{res.listdata}</li>
</>
    )
}
export default List;