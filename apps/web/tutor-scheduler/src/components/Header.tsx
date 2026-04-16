
import {
  NavigationMenu,
  //NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  //navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Button } from "./ui/button"

export default function Header() {
  return (
    <header>
      <div className="flex p-4">
        {
        //maybe add an icon here or smthing
        }
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                Terms of Service
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="">
                Privacy Policy
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-2 px-2">
          <Button className="flex-1">
            Sign In
          </Button>
          <Button variant="secondary" className="flex-1">
            Register
          </Button>
        </div>
      </div>
    </header>
  )
}
