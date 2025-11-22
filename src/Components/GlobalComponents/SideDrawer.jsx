import React from "react";
import { NavLink } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  MdChevronRight,
  MdHome,
  MdStarRate,
  MdFingerprint,
  MdExitToApp,
  MdLogin,
} from "react-icons/md";

const drawerWidth = 260;

const SideDrawer = ({ open, setOpen }) => {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.href = "/login";
  };

  const isLoggedIn = !!localStorage.getItem("auth");

  // Conditional menu items
  const menuItems = isLoggedIn
    ? [
        { text: "Home", icon: <MdHome size={24} />, path: "/" },
        { text: "Top Rated", icon: <MdStarRate size={24} />, path: "/toprated" },
        { text: "ID", icon: <MdFingerprint size={24} />, path: "/demo" },
        { text: "LogOut", icon: <MdExitToApp size={24} /> }, // Logout handled separately
      ]
    : [
        { text: "Login", icon: <MdLogin size={24} />, path: "/login" }, // Only login if not logged in
      ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      variant="temporary"
      PaperProps={{
        sx: {
          width: drawerWidth,
          background: "#ffffff",
          color: "black",
          position: "absolute",
        },
      }}
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-3 py-2">
        <p className="text-lg font-semibold">Menu</p>
        <button onClick={() => setOpen(false)}>
          <MdChevronRight size={28} className="text-black" />
        </button>
      </div>

      <Divider sx={{ background: "gray" }} />

      {/* Menu List */}
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            {item.text === "LogOut" ? (
              <ListItemButton
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
              >
                <ListItemIcon className="text-black">{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <NavLink
                to={item.path}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemIcon className="text-black">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </NavLink>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
