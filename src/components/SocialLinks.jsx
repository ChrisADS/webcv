import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsappSquare  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/christopher-dalessandro-delgado-sullca-786114218/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/ChrisADS'
        },
        {
            id: 3,
            child: (
                <>
                Correo <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:crissisullca@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                CV <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/DelgadoSullca,ChristopherDAlessandro.pdf',
            style: 'rounded-br-md',
            download: true
        },
        {
            id: 5,
            child: (
                <>
                Telegram <FaTelegram size={30} />
                </>
            ),
            href: 'http://t.me/Chrisads',
        },
        {
            id: 6,
            child: (
                <>
                Whatsapp <FaWhatsappSquare  size={30} />
                </>
            ),
            href: 'https://w.app/nTb2Pj',
            
        }
    ]

    return (
        <div className="hidden desktop:flex flex-col top-[35%] left-0 fixed z-30">
            <ul>
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-primary-color/90 ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px]" + " " + style }>
                        <a href={href} className="flex justify-between items-center w-full text-black font-semibold ml-4" download={download} target="_blank" rel="noreferrer">
                        {child}
                        </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default SocialLinks;
