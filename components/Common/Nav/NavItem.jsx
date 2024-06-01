import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {
    const router = useRouter();
    const className =
      router.asPath === `${NavRoute}`
        ? "rounded-xl !text-[#ffffff] font-bold tracking-widest"
        : "";

    return (
      <Link
        onClick={(e) => setIsOpen(false)}
        href={NavRoute}
        className={`${className} flex items-center px-2 hover:text-[#eeeeee] text-[#78787C]  rounded-xl  py-1.5 font-semibold space-x-4 text-base`}
      >
        {NavText}
      </Link>
    );
}

export default NavItem