import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOffOutlined from "@mui/icons-material/PersonOffOutlined";
import React from "react";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR

*/}

      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
  
        <InputBase sx={{ ml: 2, flex: 1 }} placeHolder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
      <IconButton>
<LightModeOutlinedIcon onClick={colorMode.toggleColorMode}/>
{theme.palette.mode==='dark'?(<DarkModeOutlinedIcon/>):(<LightModeOutlinedIcon/>    )}
</IconButton>
<IconButton>
  <NotificationsOutlined/>
</IconButton>
<IconButton>
<SettingsOutlinedIcon/>
</IconButton>
<IconButton>
<PersonOffOutlined/>
</IconButton>



        </Box> 
    </Box>
  );
};

export default Topbar;
