import { colors } from '@styles';
import React from 'react';

interface IHeartProps {
	color?: string;
}

const HeartMobile: React.FC<IHeartProps> = ({ color }) => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.black }}
	>
		<g clip-path='url(#clip0_36_669)'>
			<path
				d='M16.25 11.3101L10 17.5001L3.75003 11.3101M3.75003 11.3101C3.33778 10.9089 3.01306 10.4267 2.79632 9.89393C2.57957 9.36111 2.4755 8.78919 2.49064 8.21418C2.50579 7.63916 2.63983 7.07351 2.88432 6.55285C3.12882 6.03218 3.47847 5.56778 3.91127 5.18888C4.34406 4.80999 4.85061 4.52481 5.39904 4.3513C5.94746 4.17779 6.52587 4.11972 7.09783 4.18073C7.6698 4.24175 8.22294 4.42053 8.72242 4.70582C9.2219 4.99111 9.6569 5.37673 10 5.8384C10.3446 5.38008 10.7801 4.99783 11.2793 4.71557C11.7784 4.43331 12.3304 4.25711 12.9008 4.198C13.4712 4.13889 14.0476 4.19815 14.594 4.37206C15.1404 4.54597 15.645 4.83079 16.0763 5.2087C16.5076 5.58661 16.8562 6.04947 17.1004 6.56831C17.3445 7.08715 17.479 7.6508 17.4953 8.22399C17.5116 8.79718 17.4094 9.36756 17.1951 9.89944C16.9809 10.4313 16.6591 10.9133 16.25 11.3151'
				stroke='black'
				stroke-width='0.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_36_669'>
				<rect width='20' height='20' fill='white' />
			</clipPath>
		</defs>
	</svg>
);

export default HeartMobile;
