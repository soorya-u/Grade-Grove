import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/primitives/navigation-menu";

import NavigatorLink from "./NavigatorLink";

function Navigator({ className }: { className: string }) {
  return (
    <NavigationMenu className={`w-1/2 ${className}`}>
      <NavigationMenuList className="w-full flex-shrink-0 gap-8">
        {["Semester", "Changelog"].map((link, idx) => (
          <NavigatorLink key={idx} link={link} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigator;
