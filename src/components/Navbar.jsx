import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
// import Navbar from './Navbar';
import { styled } from '@mui/material';
import { Mail, NotificationAdd, Pets } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({ theme}) => ({
  display: "none",
  gap: ".75rem",
  alignItems: "center",
  [theme.breakpoints.up("sm")] : {
    display: "flex"
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: ".75rem",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lama Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationAdd />
          </Badge>
          <Avatar
            src=""
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox>
          <Avatar
            src=""
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
          />
          <Typography variant="h5" component="p">
            John
          </Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
