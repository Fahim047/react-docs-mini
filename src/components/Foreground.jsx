import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
	const ref = useRef(null);
	const data = [
		{
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			close: false,
			fileSize: '0.5mb',
			tag: {
				isOpen: true,
				title: 'Download Now',
				color: 'green',
			},
		},
		{
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			close: false,
			fileSize: '0.5mb',
			tag: {
				isOpen: false,
				title: 'Download Now',
				color: 'green',
			},
		},
		{
			desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			close: false,
			fileSize: '0.5mb',
			tag: {
				isOpen: true,
				title: 'Download Now',
				color: 'crimson',
			},
		},
	];
	return (
		<div ref={ref} className="fixed z-[3] w-full h-full p-5 flex gap-10">
			{data.map((item, index) => (
				<Card key={index} data={item} reference={ref} />
			))}
		</div>
	);
}

export default Foreground;
