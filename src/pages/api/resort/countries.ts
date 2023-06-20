// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { COUNTRY_LIST } from '../../../../DATA/COUNTRY_LIST';
import { delay } from '@/lib/delay';
import prisma from '@/lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log('get countries')
	 const countries = await prisma.country.findMany();
	 console.log(countries)
	res.status(200).json(countries);
}
