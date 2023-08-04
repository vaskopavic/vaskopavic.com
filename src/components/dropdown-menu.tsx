import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { IoMenu } from 'react-icons/io5/index.js'

import DropdownMenuItem from "./dropdown-menu-item";

interface Route {
  href: string;
  title: string;
}

interface Props {
  routes: Route[];
}

const DropdownMenu = (routes: Props) => {
  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-emphasis hover:dark:bg-emphasis-dark transition-all"
          aria-label="Menu button"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-tertiary dark:bg-tertiary-dark shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <div className="py-1">
            <div className="px-3 py-2 uppercase font-bold text-xs">
              Navigation
            </div>
            {routes.routes.map((route: any) => (
              <DropdownMenuItem key={route.title} href={route.href}>
                {route.title}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem
              href="https://github.com/vaskopavic/vaskopavic.com"
              target="_blank"
            >
              View Source
            </DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
