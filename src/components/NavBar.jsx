import { NavBarLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="flex items-center justify-center py-7">
        <nav>
            <ul className="flex gap-6">
                {NavBarLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            target="_blank"
                            className="c text-white font-medium text-lg hover:text-slate-300"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar;