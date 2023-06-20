import { Gallery } from '@/components/gallery';
import { ResortList } from '@/sections/resortList';
import Head from 'next/head';

export default function Page() {
	return (
		<main>
			<Head>
				<title>Resort List - The Best Resort</title>
			</Head>
			<ResortList />
		</main>
	);
}
