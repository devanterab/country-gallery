import { Inter } from 'next/font/google';
import { Hero } from '@/sections/hero';
import { Places } from '@/sections/places';
import { COUNTRY_LIST } from '../../DATA/COUNTRY_LIST';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ country_list }: any) {
	return (
		<main>
			<Hero />
			<Places country_list={country_list} />
		</main>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://the-best-resort.vercel.app/api/resort/countries'
	);
	const data = await res.json();
	return {
		props: {
			country_list: data,
		},
		revalidate: 60,
	};
}
