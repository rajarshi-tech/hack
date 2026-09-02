import { HugeiconsIcon } from "@hugeicons/react";
import {
  SecurityCheckIcon,
  Navigation01Icon,
  Alert02Icon,
  InformationCircleIcon,
  CircleQuestionMarkIcon,
  Settings01Icon,
  Logout01Icon,
} from "@hugeicons/core-free-icons";
import { NavigationItem } from "./NavigationItem";

const navigationItems = [
  {
    label: "Geofencing",
    icon: SecurityCheckIcon,
  },
  {
    label: "Navigation",
    icon: Navigation01Icon,
  },
  {
    label: "Alert",
    icon: Alert02Icon,
  },
  {
    label: "About",
    icon: InformationCircleIcon,
  },
  {
    label: "FAQ",
    icon: CircleQuestionMarkIcon,
  },
  {
    label: "Settings",
    icon: Settings01Icon,
  },
  {
    label: "Logout",
    icon: Logout01Icon,
  },
];

export function NavigationMenu() {
  return (
    <nav className="flex-1 overflow-y-auto py-2">
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.label}
          icon={<HugeiconsIcon icon={item.icon} size={20} />}
          label={item.label}
          onClick={() => console.log(`Navigate to ${item.label}`)}
        />
      ))}
    </nav>
  );
}
