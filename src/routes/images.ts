import { shuffleArray } from "$lib/utils";

export const images: { imageUrl: string; imageDescription?: string }[] = [

	{
		imageUrl: '/images/mosaic_paver_red_blue_white_above.jpeg'
	},
	{
		imageUrl: '/images/2_mushroom_stools.jpeg'
	},
	{
		imageUrl: '/images/3_mosaic_stones.jpeg'
	},
	{
		imageUrl: '/images/flower_mandala_paver_above.jpeg'
	},
	{
		imageUrl: '/images/mosaic_paver_progress_4.jpeg'
	},
	{
		imageUrl: '/images/mosaic_paver_purple_blue_white_above.jpeg'
	},
	{
		imageUrl: '/images/mosaic_stone_and_lettuce.jpeg'
	},
	{
		imageUrl: '/images/mosaic_stone_whit_blue.jpeg'
	},
	{
		imageUrl: '/images/pastel_mandala_paver_above.jpeg'
	},
];

export function getImagesRandomOrder() {

	const images2 = [...images];

	return shuffleArray(images2);
}