import { Paper, Typography } from "@mui/material"
import React from "react"
type Product = {
    item: {
        id: number,
        description: string,
        imageurl: string
    }
}
const Item:React.FC<Product> = (props: Product) =>{
    return (
        <Paper>
            <img src={props.item.imageurl} alt={props.item.description} style = {{height:"80vh", width:"100%"}} />
            <Typography variant="body1" sx={{justifyContent:'center', display:"flex"}}>
                {props.item.description}
            </Typography>
        </Paper>
    )
}
export default Item