import { shuffleArray } from "$lib/utils";

export type Image = {
	imageUrl: string;
	imageDescription?: string;
	dimensions: {
		colSpan: 1 | 2 | 3;
		rowSpan: 1 | 2 | 3;
	}
}

export const images: Image[] = [

	{
		imageUrl: '/images/mosaic_paver_red_blue_white_above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/2_mushroom_stools.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/3_mosaic_stones.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/flower_mandala_paver_above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	// {
	// 	imageUrl: '/images/mosaic_paver_progress_4.jpeg',
	// 	dimensions: {
	// 		colSpan: 1,
	// 		rowSpan: 1
	// 	}
	// },
	{
		imageUrl: '/images/mosaic_paver_purple_blue_white_above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/mosaic_stone_and_lettuce.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/mosaic_stone_whit_blue.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/pastel_mandala_paver_above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/2_mosaic_paver.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/mosaic_paver_rainbow_above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/mosaic_paver_red_welcome_above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/purple_bowl_inverted.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
	{
		imageUrl: '/images/mosaic_paver_trail.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 2
		}
	},
	{
		imageUrl: '/images/mosaic_paver_trail_2.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 2
		}
	},
	{
		imageUrl: '/images/mosaic_stone_and_pawa.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 2
		}
	},
	{
		imageUrl: '/images/mosaic_paver_trail_3.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 2
		}
	},
	{
		imageUrl: '/images/mushroom_stool_flower.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 2
		}
	},
	{
		imageUrl: '/images/white_purple_mosaic_paver__above.jpeg',
		dimensions: {
			colSpan: 1,
			rowSpan: 1
		}
	},
];

export function getImagesRandomOrder() {

	const images2 = [...images];

	return shuffleArray(images2) as Image[];
}