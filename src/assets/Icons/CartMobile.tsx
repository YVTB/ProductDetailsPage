import { colors } from '@styles';
import React from 'react';

interface ICartProps {
	color?: string;
}

const HeartMobile: React.FC<ICartProps> = ({ color }) => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 20 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		style={{ color: color ? color : colors.black }}
	>
		<g clip-path='url(#clip0_36_672)'>
			<path
				d='M4.99998 17.5001C5.92045 17.5001 6.66665 16.7539 6.66665 15.8334C6.66665 14.9129 5.92045 14.1667 4.99998 14.1667C4.07951 14.1667 3.33331 14.9129 3.33331 15.8334C3.33331 16.7539 4.07951 17.5001 4.99998 17.5001Z'
				stroke='black'
				stroke-width='0.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M14.1667 17.5001C15.0871 17.5001 15.8333 16.7539 15.8333 15.8334C15.8333 14.9129 15.0871 14.1667 14.1667 14.1667C13.2462 14.1667 12.5 14.9129 12.5 15.8334C12.5 16.7539 13.2462 17.5001 14.1667 17.5001Z'
				stroke='black'
				stroke-width='0.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M14.1666 14.1667H4.99998V2.5H3.33331'
				stroke='black'
				stroke-width='0.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M5 4.16675L16.6667 5.00008L15.8333 10.8334H5'
				stroke='black'
				stroke-width='0.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_36_672'>
				<rect width='20' height='20' fill='white' />
			</clipPath>
		</defs>
	</svg>
);

export default HeartMobile;
