import React, { useState } from "react"
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerComp: React.FC = () => {
  const tabspage = ["About Us", "Admission", "Pay Fee", "Notice"]
  const [opendrawer, setOpendrawer] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={opendrawer} onClose={() => setOpendrawer(false)} >
        <List>
          {
            tabspage.map((tabs, index) => (
              <ListItem key={index}>
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText primaryTypographyProps={{color:"orangered"}} key={index}>{tabs}</ListItemText>
                </ListItemIcon>
                <Divider sx={{color:"black"}}/>
              </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpendrawer(!opendrawer)} sx={{ color: "orangered", marginLeft: "auto" }}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}
