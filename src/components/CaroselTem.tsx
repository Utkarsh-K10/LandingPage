import { Paper} from "@mui/material"
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
        </Paper>
    )
}
export default Item