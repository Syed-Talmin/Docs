import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragTransition={{bounceStiffness:100,bounceDamping:10}} className='relative flex-shrink-0 w-56 h-72 rounded-[30px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
            <FaFileAlt />
            <p className='font-sans text-sm leading-tight mt-5'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className=' flex items-center justify-between mb-3 px-5 py-3'>
                    <h5>{data.fileSize}</h5>
                    <span className=' w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600'>
                        {data.close === "true" ? <IoIosClose /> : <LuDownload size=".7em" color='#fff' />}
                    </span>
                </div>
                {   data.tag.isOpen && (<div className={`tag w-full py-3 ${data.tag.tagColor === "blue"? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='font-sans text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )}

            </div>
        </motion.div>
    );
}

export default Card