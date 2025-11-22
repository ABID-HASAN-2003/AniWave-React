import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdChevronRight, MdHome, MdStarRate, MdExitToApp, MdLogin } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
const drawerWidth = 260;

const SideDrawer = ({ open, setOpen }) => {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  const isLoggedIn = !!localStorage.getItem("auth");

  const menuItems = isLoggedIn
    ? [
        { text: "Profile", icon: <FcBusinessman size={24} />, path: "/profile" },
        { text: "Home", icon: <MdHome size={24} />, path: "/" },
        { text: "Top Rated", icon: <MdStarRate size={24} />, path: "/toprated" },
        { text: "LogOut", icon: <MdExitToApp size={24} /> },
      ]
    : [
        { text: "Home", icon: <MdHome size={24} />, path: "/" },
        { text: "Top Rated", icon: <MdStarRate size={24} />, path: "/toprated" },
        { text: "Login", icon: <MdLogin size={24} />, path: "/login" },
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
          background: "linear-gradient(#000000,#001c55)", // Gradient background
          color: "white", // Text color
          fontbold: "500",
          opacity: 0.9, // Slightly transparent
        },
      }}
    >
      <div className="flex items-center justify-between px-3 py-2">
        <p className="text-lg font-semibold">Menu</p>
        <button onClick={() => setOpen(false)}>
          <MdChevronRight size={28} className="text-white" />
        </button>
      </div>

      <Divider sx={{ background: "rgba(255, 255, 255, 0.4)" }} /> {/* Lighter divider */}

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
                <ListItemIcon className="text-white">{item.icon}</ListItemIcon> {/* White icons */}
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <NavLink
                to={item.path}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <ListItemButton>
                  <ListItemIcon className="text-white">{item.icon}</ListItemIcon> {/* White icons */}
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