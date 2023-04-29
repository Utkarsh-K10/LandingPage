import React, { useState } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerComp:React.FC = () => {
  const [opendrawer, setOpendrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={opendrawer} onClose={()=>setOpendrawer(false)} >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>About Us</ListItemText>
              <ListItemText>Admission Enquiry</ListItemText>
              <ListItemText>Pay Fee</ListItemText>
              <ListItemText>FAQs</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={()=>setOpendrawer(!opendrawer)} sx={{color:"orangered", marginLeft:"auto"}}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  )
}
