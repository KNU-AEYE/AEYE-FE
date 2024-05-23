"use client";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";

import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const small = useMediaQuery("(max-width:600px)");
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  const handleLogoClick = () => {
    console.log("logo clicked");
    setOpen(false);
  };

  const navigationItems = [
    { label: "Home", path: "/home" },
    { label: "Cams", path: "/cams" },
    { label: "Stat", path: "/stat" },
    { label: "Report", path: "/report" },
    { label: "My", path: "/my" },
  ];

  return (
    <div style={{ marginBottom: "30px" }}>
      <AppBar position="static" style={{ backgroundColor: "#65d586" }}>
        <Toolbar variant="dense">
          {small && (
            <List>
              <ListItem button>
                <Button onClick={handleClick}>
                  <MenuIcon />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Button>
                <Typography
                  variant="h6"
                  color="inherit"
                  onClick={handleLogoClick}
                >
                  AEYE
                </Typography>
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {navigationItems.map((item) => (
                    <ListItem
                      key={item.label}
                      onClick={() => {
                        router.push(item.path);
                        setOpen(false);
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          )}

          {!small && (
            <>
              <Typography variant="h6" color="inherit">
                AEYE
              </Typography>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => router.push(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
