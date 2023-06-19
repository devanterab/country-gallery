import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';

export default function Page({ resort_data }: any) {
	return (
		<main>
			<Image
				src={resort_data.image_url}
				alt={resort_data.name}
				width={1440}
				height={900}
				className="w-full max-h-[70vh] object-cover"
			/>
			<div className="text-center max-w-[1200px] mx-auto my-40">
				<h1 className="text-4xl mx-auto w-fit mb-8">
					{resort_data.resort_name}
				</h1>
				<p>{resort_data.resort_description}</p>
			</div>
		</main>
	);
}

export async function getServerSideProps({ query: { slug } }: any) {
	const res = await fetch(
		`https://the-best-resort.vercel.app/api/resort/detail/${slug}`
	);
	const data = await res.json();
	return {
		props: {
			resort_data: data,
		},
	};
}
