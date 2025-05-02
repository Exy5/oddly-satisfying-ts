import Link from "next/link";
import { sidebarButtonStyle } from "./SidebarButton.css";

const SidebarButton = ({href, children}: { href: string; children: React.ReactNode }) => {
  return (
      <Link href={href} className={sidebarButtonStyle}>
        {children}
      </Link>

  );
}

export default SidebarButton;