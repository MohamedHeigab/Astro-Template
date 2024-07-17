import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import * as React from "react";
import { BookIcon, MenuIcon } from "lucide-react";
import { company } from "@/mainInfo";
import { ModeToggle } from "./ModeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function NavBar() {
  return (
    <header className="flex h-20 w-full max-w-4xl shrink-0 items-center justify-between px-4 md:px-6">
      <a href="#" className="">
        <BookIcon className="h-6 w-6" />
        <span className="sr-only">{company}</span>
      </a>
      <div className="flex items-center gap-4">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent className="grid gap-4 p-4">
                <NavigationMenuLink>Link</NavigationMenuLink>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex justify-end">
              <a href="#">
                <BookIcon className="h-6 w-6" />
                <span className="sr-only">{company}</span>
              </a>
            </div>
            <div className="grid gap-2 py-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>item 1</AccordionTrigger>
                  <AccordionContent>
                    <a
                      href=""
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      link
                    </a>
                    <a
                      href=""
                      className="flex w-full items-center py-2 text-lg font-semibold"
                    >
                      link
                    </a>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <a
                    href=""
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    link
                  </a>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
