// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { RESORT_LIST } from '../../../../DATA/RESORT_LIST';
import { delay } from '@/lib/delay';
import prisma from '@/lib/prisma';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const countryId = req.query.countryId as string

	const Resort = await prisma.resort.findMany({
		where: {
			countrySlug: countryId
		}
	});
	res.status(200).json(Resort);
}
