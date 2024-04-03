import { colors } from '@styles';
interface IFavHeartProps {
	color?: string;
	width?: number;
	height?: number;
}

const FavHeart: React.FC<IFavHeartProps> = ({
	color,
	width = 9,
	height = 8
}) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 9 8'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.iconGrey }}
	>
		<path
			d='M8.51367 1.76954C8.38277 1.46645 8.19403 1.19179 7.95801 0.960944C7.72181 0.729407 7.44332 0.545408 7.1377 0.418952C6.82078 0.287305 6.48087 0.21992 6.1377 0.22071C5.65625 0.22071 5.18652 0.352546 4.77832 0.601569C4.68066 0.66114 4.58789 0.726569 4.5 0.797858C4.41211 0.726569 4.31934 0.66114 4.22168 0.601569C3.81348 0.352546 3.34375 0.22071 2.8623 0.22071C2.51562 0.22071 2.17969 0.287116 1.8623 0.418952C1.55566 0.545905 1.2793 0.728523 1.04199 0.960944C0.805661 1.19153 0.616873 1.46625 0.486328 1.76954C0.350586 2.08497 0.28125 2.41993 0.28125 2.76466C0.28125 3.08985 0.347656 3.42872 0.479492 3.77344C0.589844 4.06153 0.748047 4.36036 0.950195 4.66212C1.27051 5.13966 1.71094 5.6377 2.25781 6.14259C3.16406 6.9795 4.06152 7.55762 4.09961 7.58106L4.33105 7.7295C4.43359 7.79493 4.56543 7.79493 4.66797 7.7295L4.89941 7.58106C4.9375 7.55665 5.83398 6.9795 6.74121 6.14259C7.28809 5.6377 7.72852 5.13966 8.04883 4.66212C8.25098 4.36036 8.41016 4.06153 8.51953 3.77344C8.65137 3.42872 8.71777 3.08985 8.71777 2.76466C8.71875 2.41993 8.64941 2.08497 8.51367 1.76954Z'
			fill='currentColor'
		/>
	</svg>
);

export default FavHeart;
