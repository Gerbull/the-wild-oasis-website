'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {
	const searchParams = useSearchParams(); // allows us to work with URL
	const router = useRouter(); // makes navigation in NextJS
	const pathname = usePathname(); // hook for taking 1st part of the URL

	const activeFilter = searchParams.get('capacity') ?? 'all'; // for marking the current selection

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams);
		params.set('capacity', filter);

		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	}

	return (
		<div className="border border-primary-800 flex">
			<Button
				filter="all"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				All cabins
			</Button>
			<Button
				filter="small"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				1&mdash;3 guests
			</Button>
			<Button
				filter="medium"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				4&mdash;7 guests
			</Button>
			<Button
				filter="large"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				8&mdash;12 guests
			</Button>
		</div>
	);
}

function Button({ filter, handleFilter, activeFilter, children }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${
				filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
			}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}

export default Filter;
