import { Typography, Box } from "@mui/material";
import List from "../list/List";

const Table = ({ handler, list, item }) => {
   

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>


                {list.map((list,tableindex) => (
                    <>
                      <div key={tableindex} style={{display:"flex",flexDirection:"column"}}>
                      <Typography>{list.title}</Typography><br />
                        {list.list.map((item,listindex)=>(
                            <>
                            <List res={item} key={listindex} listi={listindex} tablei={tableindex} handler={handler} />
                            {console.log(listindex,tableindex)}

                            </>
                            


                        ))} 
                      </div>
                       
                    
                    </>
                ))}








            </Box>
        </>
    )
}
export default Table;