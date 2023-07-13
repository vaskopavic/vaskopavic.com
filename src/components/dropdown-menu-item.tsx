import { Menu } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  href: string;
  target?: string;
}

const DropdownMenuItem = ({ children, href, target }: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          target={target}
          className={twMerge(
            active ? "bg-orange-200 dark:bg-zinc-700" : "",
            "block px-4 py-2 text-sm"
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownMenuItem;
