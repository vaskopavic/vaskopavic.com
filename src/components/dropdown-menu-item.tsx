import { Menu } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const DropdownMenuItem = ({ children, ...props }: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          className={twMerge(
            active ? "bg-emphasis dark:bg-emphasis-dark" : "",
            "block px-4 py-2 text-sm",
          )}
          {...props}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownMenuItem;
