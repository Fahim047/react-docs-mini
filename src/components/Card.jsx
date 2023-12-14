import React from 'react';
import { FaFile } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
function Card({ data, reference }) {
	return (
		<motion.div
			drag
			dragConstraints={reference}
			whileDrag={{ scale: 1.2 }}
			dragElastic={0.1}
			dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }}
			className="relative overflow-hidden w-48 h-56 rounded-3xl bg-zinc-700 text-white p-5"
		>
			<FaFile />
			<p className="text-md leading-tight mt-5">{data.desc}</p>
			<div className="footer absolute bottom-0 w-full left-0">
				<div className="flex justify-between mb-3 px-5 py-2">
					<p>{data.fileSize}</p>
					<span className="w-6 h-6 p-1 bg-zinc-400 rounded-full flex items-center justify-center">
						{data.close ? (
							<MdClose />
						) : (
							<FaDownload size="0.7em" color="#fff" />
						)}
					</span>
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag w-full py-2 flex justify-center items-center`}
						style={{ backgroundColor: `${data.tag.color}` }}
					>
						<h3 className="text-sm font-semibold">
							{data.tag.title}
						</h3>
					</div>
				)}
			</div>
		</motion.div>
	);
}

export default Card;
