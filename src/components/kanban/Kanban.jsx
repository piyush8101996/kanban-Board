import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Table from "../table/Table";

const KanBanBoard = () => {

    const [listdata, setListdata] = useState()
    const [move, setMove] = useState({
        itemlist: "",
        tableindex:"",
        itemindex:""
    })
    const [listitem, setListitem] = useState([
        {
            title: "Bcklog",
            status: "backlog",
            list: []
        },
        { title: "ToDo", status: "todo", list: [] },
        { title: "Ongoing", status: "ongoing", list: [] },
        { title: "Done", status: "done", list: [] }
    ])

    const clickHandler = () => {
        // const {title,status}=data;
        console.log(listitem[0].title, listitem[0].status, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,")
        const datas = [...listitem]
        datas[0].list.push(listdata)
        // console.log(datas)
        // datas.push(listdata)
        // console.log(datas)
        setListitem(datas)
    }


    const changeHandler = ((tableindex, listindex) => {
        setMove({ itemlist: listitem[tableindex].list[listindex],
             tableindex: tableindex, 
             itemindex: listindex })
    })

    console.log(move,"???????????????????????????????????s")


    const moveforward = () => {
        console.log(listitem)
         listitem.map((lists, tindex) => (
            lists.list.map((elem, lindex) => {
                if (lindex === move.itemindex && tindex === move.tableindex ) {

                    const datas = [...listitem]
                    datas[tindex + 1].list.push(elem);
                    datas[tindex].list.splice(lindex,1)
                   console.log(datas,"update data.............")
                   const updateMove={itemlist:elem,
                    tableindex: tindex, 
                    itemindex: lindex}
                    console.log(updateMove,"move")
                     setMove(updateMove)
                    console.log(move,"innerrr.....update")

                     setListitem(datas)

                    // console.log(listitem[tindex].list[lindex])
                    //    listitem[tindex+1].list[lindex].push(elem)
                }
            })
         ))
    }

    return (
        <>
            <Typography>Controls</Typography>

            <div>
                <TextField onChange={(e) => setListdata(e.target.value)} value={listdata} />
                <Button onClick={clickHandler}>Create</Button>
            </div>

            <div>
                <TextField value={move.itemlist} />
                <Button >Move Back</Button>
                <Button onClick={moveforward}>Move Forward</Button>
                <Button>Delete</Button>
            </div>
            <Table handler={changeHandler} list={listitem} />
        </>
    )
}

export default KanBanBoard;