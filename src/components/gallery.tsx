import { generateRandomImg } from '@/lib/generateRandomImg';
import Image from 'next/image';
import Link from 'next/link';
import s from '../sections/places.module.css';

export const Gallery = ({ country_list }: any) => {
	return (
		<ul className={s.gallery}>
			{country_list.map((item: any, index: number) => (
				<li key={index}>
					<Link href={`/list?country=${item.slug}`}>
						<Image
							src={item.image_url}
							alt={item.name}
							width={420}
							height={320}
						/>
						<p className={s.countryText}>{item.name}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};
