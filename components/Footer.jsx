import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
    return (
      <div id="intro" className="mt-4 mb-10 lg:mb-0">
        <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-[#2C2C37]">
          <div className="flex items-center">
            &copy; 2023 All Rights Reserved.
          </div>

          <div className="hidden md:flex items-center">
            <div className="mr-1 text-base">
              <MdMail />
            </div>
            <a
              href="mailto:olamosob@gmail.com"
              className="hover:text-[#f3efef]"
            >
              olamosob@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
}

export default Footer