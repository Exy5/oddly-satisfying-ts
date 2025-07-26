"use client";

const DISCORD_LINK = "https://discord.gg/wdxuPkkpBw"

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
              src="/images/logo-reworked-clean.png"
              className={HeaderLogoStyle}
              alt="oddly-satisfying logo with dragon"
              priority
              width={128}
              height={51}
            />
          </Link>	
        </div>
        <div className={HeaderMenuStyle}>
          <Link className={HeaderMenuItemStyle} href="/">HOME</Link>
          <Link className={HeaderMenuItemStyle} href="/guides">GUIDES</Link>
          {/*<Link className={HeaderMenuItemStyle} href="/about">ABOUT US</Link>*/}
        </div>
        <a href={DISCORD_LINK} target="_blank" className={discordLinkStyle}>
          <Image src="/images/discord-symbol-white.png" alt="discord" className={discordLogoStyle} width={32} height={32} />
        </a>
      </div>
    </header>
  );
}

export default Header;