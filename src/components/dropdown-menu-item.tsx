import { Menu } from "@headlessui/react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const DropdownMenuItem = ({ children, ...props }: Props) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          {...props}
          className={`block px-4 py-2 text-sm ${
            active ? "bg-emphasis dark:bg-emphasis-dark" : ""
          }`}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default DropdownMenuItem;
