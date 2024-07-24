"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  PackageSearchIcon,
  ShoppingBagIcon,
  BadgeDollarSignIcon,
  SignatureIcon,
  NfcIcon,
  Menu,
  User,
  X,
  Home
} from "lucide-react";
/* import SearchBar from "./searchbar"; */
export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0); //estado para contador productos carrito
  const navlinks = [
    {
      nombre: "Inicio",
      icono: <Home />,
      link: "/",
    },
    {
      nombre: "Productos",
      icono: <PackageSearchIcon />,
      link: "/products",
    },
    {
      nombre: "Sos Vendedor",
      icono: <BadgeDollarSignIcon />,
      link: "/sellers",
    },
    {
      nombre: "Quienes somos",
      icono: <SignatureIcon />,
      link: "/us",
    },
    {
      nombre: "Contacto",
      icono: <NfcIcon />,
      link: "/contact",
    },
  ];

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className='flex items-center justify-around mx-auto lg:max-w-full bg-amber'>
        {/* Menu mobile icon */}
        <div className='flex md:hidden'>
          {open === true ? (
            <X
              strokeWidth="1"
              className="cursor-pointer text-brown text-opacity-80"
              onClick={handleMenu}
            />
          ) : (
            <Menu
              strokeWidth="1"
              className="cursor-pointer text-brown  "
              onClick={handleMenu}
            />
          )}
        </div>

        {/* Logo */}
        <div onClick={() => router.push("/")}>
          <h1 className='text-3xl text-dark-aqua cursor-pointer'>
            <span className='font-bold text-brown text-4xl'>AR</span>tesano
          </h1>
        </div>

        {/* desktop-menu-list */}
        <div className='hidden md:flex lg:flex'>
          <div className='flex items-center space-x-3'>
            {navlinks.map((link, index) => (
              <Link
                key={index}
                className=' text-center text-nowrap hover:text-light-brown block px-3 pt-3 rounded-md text-brown text-sm'
                href={link.link}
              >
                {link.nombre}
              </Link>
            ))}
            {/*   <SearchBar/> */}
          </div>
        </div>

        {/* Iconos fixed */}
        <div className='flex items-center justify-between gap-5'>
          <div
            className="flex flex-nowrap items-center cursor-pointer text-xs text-brown hover:text-light-brown"
            onClick={() => { }}>
            <User strokeWidth={1} />
            <p className="hover:underline underline-offset-1"> Ingresá</p>
          </div>
          <Link href="/CartDetail">
            <div className="flex">
              <ShoppingBagIcon
                strokeWidth="1"
                className='cursor-pointer  text-brown  hover:text-light-brown'
                onClick={() => { }}
              />
              <span className=" text-brown pl-1">{cartItemsCount}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* mobile-menu-list */}
      <div className='md:hidden'>
        {open ? (
          <dialog className='flex flex-col items-start pt-2 pb-3 space-y-1 bg-cream bg-opacity-70 text-brown m-0'>
            {navlinks.map((link, index) => (
              <Link
                key={index}
                className='flex items-center gap-2 px-3 py-2 text-xs hover:text-light-brown hover:underline underline-offset-1'
                href={link.link}
              >
                {link.icono}
                {link.nombre}
              </Link>
            ))}
          </dialog>

        ) : null}
      </div>
    </>
  );
}