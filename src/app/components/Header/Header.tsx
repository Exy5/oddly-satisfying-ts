"use client";

import OddlySatisfyingLogo from "@/assets/logo-reworked-clean.png"
import DiscordLogo from "@/assets/Discord-Symbol-White.png"
import Image from "next/image";
import { 
  HeaderMainContentStyle,
  HeaderLogoContainerStyle,
  HeaderLogoStyle,
  HeaderStyle,
  HeaderMenuStyle,
  HeaderMenuItemStyle, 
  discordLinkStyle,
  discordLogoStyle} from "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={HeaderStyle}>
      <div className={HeaderMainContentStyle}>
        <div className={HeaderLogoContainerStyle}>
          <Link href="/">
            <Image
              src={OddlySatisfyingLogo}
              className={HeaderLogoStyle}
              alt="oddly-satisfying logo with dragon"
                
            />
          </Link>	
        </div>
        <div className={HeaderMenuStyle}>
          <Link className={HeaderMenuItemStyle} href="/">HOME</Link>
          <Link className={HeaderMenuItemStyle} href="/Guides">GUIDES</Link>
          <Link className={HeaderMenuItemStyle} href="/About">ABOUT US</Link>
        </div>
        <a href="https://discord.gg/9aWhDBRBYS" target="_blank" className={discordLinkStyle}>
          <Image src={DiscordLogo} alt="discord" className={discordLogoStyle} />
        </a>
      </div>
    </header>
  );
}

export default Header;