import React from 'react';

function Background() {
	return (
		<>
			<div className="fixed z[2] w-full h-screen">
				<nav className="absolute top-10 w-full flex justify-center text-zinc-400 text-semibold">
					Documents
				</nav>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vh] text-zinc-700 font-semibold tracking-tight">
					Docs.
				</div>
			</div>
		</>
	);
}

export default Background;
