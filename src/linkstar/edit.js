/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
import {
	InnerBlocks,
	useBlockProps,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components';
import { link as linkIcon, linkOff } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Inspector from './Inspector';
import { getCssAttributes, handleDynamicClasses } from './utils';

export default function Edit({ attributes, setAttributes }) {
	const { link, openInNewTab, titleAttr, hoverEffect, nofollow } = attributes;
	const [isLinkControlVisible, setIsLinkControlVisible] = useState(false);

	const blockProps = useBlockProps({
		className: handleDynamicClasses(hoverEffect),
		style: getCssAttributes(attributes),
	});

	const renderAnchorTag = () => {
		const isEditing = true;

		return (
			<a
				{...blockProps}
				href={isEditing ? undefined : link}
				target={openInNewTab ? '_blank' : undefined}
				rel={nofollow ? 'noreferrer nofollow' : undefined}
				title={titleAttr ? titleAttr : undefined}
				onClick={isEditing ? (e) => e.preventDefault() : undefined}
			>
				<InnerBlocks />
			</a>
		);
	};

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					{!link && (
						<ToolbarButton
							icon={linkIcon}
							title={__('Link', 'link-star')}
							onClick={() => setIsLinkControlVisible(true)}
						/>
					)}
					{link && (
						<>
							<ToolbarButton
								icon={linkIcon}
								title={__('Edit Link', 'link-star')}
								onClick={() => setIsLinkControlVisible(true)}
								isActive={isLinkControlVisible}
							/>
							<ToolbarButton
								icon={linkOff}
								title={__('Unlink', 'link-star')}
								onClick={() => {
									setAttributes({
										link: '',
										nofollow: false,
										openInNewTab: false,
										titleAttr: '',
									});
									setIsLinkControlVisible(false);
								}}
							/>
						</>
					)}
				</ToolbarGroup>
				{isLinkControlVisible && (
					<Popover
						placement="bottom"
						onClose={() => setIsLinkControlVisible(false)}
						anchor={document.querySelector(
							'.block-editor-block-toolbar'
						)}
					>
						<LinkControl
							value={{
								url: link,
								opensInNewTab: openInNewTab,
								title: titleAttr,
								nofollow,
							}}
							onChange={(newLink) => {
								setAttributes({
									link: newLink.url || '',
									openInNewTab:
										newLink.opensInNewTab || false,
									titleAttr: newLink.title || '',
									nofollow: newLink.nofollow || false,
								});
							}}
							onRemove={() => {
								setAttributes({
									link: '',
									nofollow: false,
									openInNewTab: false,
									titleAttr: '',
								});
								setIsLinkControlVisible(false);
							}}
							settings={[
								{
									id: 'opensInNewTab',
									title: __('Open in new tab', 'link-star'),
								},
								{
									id: 'nofollow',
									title: __('Mark as nofollow', 'link-star'),
									value: nofollow,
									onChange: () => {
										setAttributes({
											nofollow: !nofollow,
										});
									},
								},
							]}
						/>
					</Popover>
				)}
			</BlockControls>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			{link ? (
				renderAnchorTag()
			) : (
				<div {...blockProps}>
					<InnerBlocks />
				</div>
			)}
		</>
	);
}
