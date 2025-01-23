import { faFile, faMessage } from "@fortawesome/free-regular-svg-icons";

export const sidebarMenuButtonTypes = {
  OVERVIEW: 1,
  COMMENTS: 2,
};

const sidebarMenuButtons = [
  { id: sidebarMenuButtonTypes.OVERVIEW, label: "Overview", icon: faFile },
  { id: sidebarMenuButtonTypes.COMMENTS, label: "Comments", icon: faMessage },
];

export default sidebarMenuButtons;
