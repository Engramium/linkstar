/* eslint-disable react/jsx-no-target-blank */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { getCssAttributes, handleDynamicClasses } from './utils';

export default function Save({ attributes }) {
	const { link, nofollow, openInNewTab, titleAttr, hoverEffect } = attributes;

	const getRelAttribute = () => {
		const relValues = [];

		if (openInNewTab) {
			relValues.push('noreferrer');
		}

		if (nofollow) {
			relValues.push('nofollow');
		}

		return relValues.length > 0 ? relValues.join(' ') : undefined;
	};

	const renderAnchorTag = () => (
		<a
			{...useBlockProps.save({
				className: handleDynamicClasses(hoverEffect),
				style: getCssAttributes(attributes),
			})}
			href={link}
			rel={getRelAttribute()}
			target={openInNewTab ? '_blank' : undefined}
			title={titleAttr}
		>
			<InnerBlocks.Content />
		</a>
	);

	return (
		<>
			{link ? (
				renderAnchorTag()
			) : (
				<div
					{...useBlockProps.save({
						className: handleDynamicClasses(hoverEffect),
						style: getCssAttributes(attributes),
					})}
				>
					<InnerBlocks.Content />
				</div>
			)}
		</>
	);
}
