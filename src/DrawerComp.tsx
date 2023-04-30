import React, { useState } from "react"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
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
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{tabs}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpendrawer(!opendrawer)} sx={{ color: "orangered", marginLeft: "auto" }}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  )
}
