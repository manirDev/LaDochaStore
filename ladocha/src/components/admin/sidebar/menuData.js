import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


export const menuData = [
    {
      id: 1,
      title: "main",
      listItems: [
        {
          id: 1,
          title: "Dashboard",
          url: "/",
          icon: <DashboardIcon className="icon" />,
        }
      ],
    },
    {
      id: 2,
      title: "lists",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: <PersonOutlineIcon className="icon" />,
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: <StoreIcon className="icon" />,
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: <CreditCardIcon className="icon" />,
        },
        {
          id: 4,
          title: "Delivery",
          url: "/deslivery",
          icon: <LocalShippingIcon className="icon" />,
        },
      ],
    },
    {
      id: 3,
      title: "USEFUL",
      listItems: [
        {
          id: 1,
          title: "Stats",
          url: "/",
          icon: <InsertChartIcon className="icon" />,
        },
        {
          id: 2,
          title: "Notifications",
          url: "/",
          icon: <NotificationsNoneIcon className="icon" />,
        }
      ],
    },
    {
      id: 4,
      title: "SERVICE",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: <SettingsApplicationsIcon className="icon" />,
        },
        {
          id: 2,
          title: "System Health",
          url: "/",
          icon: <SettingsSystemDaydreamOutlinedIcon className="icon" />,
        },
        {
          id: 3,
          title: "Logs",
          url: "/",
          icon:  <PsychologyOutlinedIcon className="icon" />,
        },
      ],
    },
    {
      id: 5,
      title: "USER",
      listItems: [
        {
          id: 1,
          title: "Profile",
          url: "/",
          icon: <AccountCircleOutlinedIcon className="icon" />,
        },
        {
          id: 2,
          title: "Logout",
          url: "/",
          icon: <ExitToAppIcon className="icon" />,
        },
      ],
    },
  ];