import Image from "next/image";
import ShopeeLink from "./shopee-link";

const links = [
  {
    name: "WhatsApp",
    label: "Pesan langsung",
    href: "https://wa.me/6283140679448",
    icon: "/whatsapp.png",
  },
  {
    name: "Shopee",
    label: "archana.caps",
    href: "https://shopee.co.id/archana.caps?entryPoint=ShopBySearch&searchKeyword=archana.caps",
    icon: "shopee",
  },
  {
    name: "Instagram",
    label: "@archana.caps",
    href: "https://www.instagram.com/archana.caps?igsh=cmNrMXNjMzNvaDdk&utm_source=qr",
    icon: "/instagram.png",
  },
  {
    name: "TikTok",
    label: "@archana.caps",
    href: "https://www.tiktok.com/@archana.caps",
    icon: "/tiktok.png",
  },
];

function SocialIcon({ name }) {
  if (name.startsWith("/")) return <Image src={name} alt="" width={512} height={512} />;
  if (name === "shopee") return <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EE4D2D" d="M20.7 7.1h-4.1A4.7 4.7 0 0 0 12 2.7a4.7 4.7 0 0 0-4.6 4.4H3.3L2.1 22h19.8L20.7 7.1ZM12 4.6a2.8 2.8 0 0 1 2.7 2.5H9.3A2.8 2.8 0 0 1 12 4.6Z"/><path fill="#fff" d="M12.2 10.1c1.5 0 2.6.5 3.4 1.1l-1.1 1.6c-.7-.5-1.4-.8-2.3-.8-.7 0-1.1.2-1.1.6 0 .4.4.6 1.7.9 2.1.5 3.1 1.3 3.1 3 0 1.9-1.5 3-3.8 3-1.7 0-3.2-.6-4.2-1.5l1.2-1.6c.9.7 1.9 1.1 3 1.1.8 0 1.2-.3 1.2-.7 0-.5-.4-.7-1.8-1-2-.5-3-1.3-3-2.9 0-1.7 1.4-2.8 3.7-2.8Z"/></svg>;
  return null;
}

export default function Home() {
  return (
    <main>
      <div className="background" aria-hidden="true" />
      <section className="profile" aria-labelledby="profile-title">
        <div className="logo-frame">
          <Image src="/logo.png" alt="Logo Archana Cap" width={1024} height={1024} priority />
        </div>
        <h1 id="profile-title">ARCHANA CAPS</h1>
        <p className="tagline">TOPI SECOND ORIGINAL</p>
        <p className="location">KLATEN, JAWA TENGAH, INDONESIA</p>
        <p className="bio">Koleksi topi untuk melengkapi gaya harianmu.</p>

        <nav className="links" aria-label="Tautan sosial dan toko Archana Cap">
          {links.map((link) => {
            const content = <><span className="icon"><SocialIcon name={link.icon} /></span><span className="link-copy"><strong>{link.name}</strong><small>{link.label}</small></span><span className="arrow" aria-hidden="true">↗</span></>;

            return link.name === "Shopee" ? (
              <ShopeeLink href={link.href} key={link.name}>{content}</ShopeeLink>
            ) : (
              <a href={link.href} key={link.name} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            );
          })}
        </nav>
        <footer>© {new Date().getFullYear()} ARCHANA CAP</footer>
      </section>
    </main>
  );
}