/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { InspectorControls } from '@wordpress/block-editor';
import {
	Button,
	ColorIndicator,
	ColorPalette,
	Dropdown,
	__experimentalDropdownContentWrapper as DropdownContentWrapper,
	__experimentalHStack as HStack,
	PanelBody,
	TextControl,
	TabPanel,
	__experimentalText as Text,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const Inspector = ({ attributes, setAttributes }) => {
	const { hoverEffect, ariaLabel } = attributes;
	const {
		headingColor,
		paragraphColor,
		iconBgColor,
		iconFillColor,
		iconStrokeColor,
		bgColor,
	} = hoverEffect;

	// Fetch theme colors and gradients
	const colors = useSelect(
		(select) => select('core/block-editor').getSettings().colors
	);

	const resetAll = () => {
		setAttributes({
			hoverEffect: {
				headingColor: '',
				paragraphColor: '',
				iconBgColor: '',
				iconFillColor: '',
				iconStrokeColor: '',
				bgColor: '',
			},
		});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'linkstar')}>
					<TextControl
						label={__('Area Label', 'linkstar')}
						help={__(
							'Accessible label for screen readers.',
							'linkstar'
						)}
						value={ariaLabel}
						onChange={(newValue) =>
							setAttributes({
								ariaLabel: newValue,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="styles">
				<ToolsPanel
					label={__('Hover Color', 'linkstar')}
					resetAll={resetAll}
					hasInnerWrapper
					__experimentalFirstVisibleItemClass="first"
					__experimentalLastVisibleItemClass="last"
				>
					<div className="link-star-hover-color-block-support-panel">
						<ToolsPanelItem
							isShownByDefault
							hasValue={() => !!headingColor}
							label={__('Heading', 'linkstar')}
							onDeselect={() =>
								setAttributes({
									hoverEffect: {
										...hoverEffect,
										headingColor: undefined,
									},
								})
							}
						>
							<Dropdown
								style={{ width: '100%' }}
								popoverProps={{
									placement: 'left-start',
									offset: 36,
									shift: true,
								}}
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										__next40pxDefaultSize
										onClick={onToggle}
										aria-expanded={isOpen}
										style={{ width: '100%' }}
									>
										<HStack alignment="left">
											<ColorIndicator
												colorValue={headingColor}
											/>
											<Text>
												{__('Heading', 'linkstar')}
											</Text>
										</HStack>
									</Button>
								)}
								renderContent={() => (
									<DropdownContentWrapper
										style={{ width: '260px' }}
										paddingSize="medium"
									>
										<ColorPalette
											enableAlpha
											value={headingColor}
											colors={[
												{ colors, name: __('Theme') },
											]}
											onChange={(color) =>
												setAttributes({
													hoverEffect: {
														...hoverEffect,
														headingColor: color,
													},
												})
											}
										/>
									</DropdownContentWrapper>
								)}
							/>
						</ToolsPanelItem>
						<ToolsPanelItem
							isShownByDefault
							hasValue={() => !!paragraphColor}
							label={__('Paragraph', 'linkstar')}
							onDeselect={() =>
								setAttributes({
									hoverEffect: {
										...hoverEffect,
										paragraphColor: undefined,
									},
								})
							}
						>
							<Dropdown
								style={{ width: '100%' }}
								popoverProps={{
									placement: 'left-start',
									offset: 36,
									shift: true,
								}}
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										__next40pxDefaultSize
										onClick={onToggle}
										aria-expanded={isOpen}
										style={{ width: '100%' }}
									>
										<HStack alignment="left">
											<ColorIndicator
												colorValue={paragraphColor}
											/>
											<Text>
												{__('Paragraph', 'linkstar')}
											</Text>
										</HStack>
									</Button>
								)}
								renderContent={() => (
									<DropdownContentWrapper
										style={{ width: '260px' }}
										paddingSize="medium"
									>
										<ColorPalette
											enableAlpha
											value={paragraphColor}
											colors={[
												{ colors, name: __('Theme') },
											]}
											onChange={(color) =>
												setAttributes({
													hoverEffect: {
														...hoverEffect,
														paragraphColor: color,
													},
												})
											}
										/>
									</DropdownContentWrapper>
								)}
							/>
						</ToolsPanelItem>
						<ToolsPanelItem
							isShownByDefault
							hasValue={() => !!bgColor}
							label={__('Background', 'linkstar')}
							onDeselect={() =>
								setAttributes({
									hoverEffect: {
										...hoverEffect,
										bgColor: undefined,
									},
								})
							}
						>
							<Dropdown
								style={{ width: '100%' }}
								popoverProps={{
									placement: 'left-start',
									offset: 36,
									shift: true,
								}}
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										__next40pxDefaultSize
										onClick={onToggle}
										aria-expanded={isOpen}
										style={{ width: '100%' }}
									>
										<HStack alignment="left">
											<ColorIndicator
												colorValue={bgColor}
											/>
											<Text>
												{__('Background', 'linkstar')}
											</Text>
										</HStack>
									</Button>
								)}
								renderContent={() => (
									<DropdownContentWrapper
										style={{ width: '260px' }}
										paddingSize="medium"
									>
										<ColorPalette
											enableAlpha
											value={bgColor}
											colors={[
												{ colors, name: __('Theme') },
											]}
											onChange={(color) =>
												setAttributes({
													hoverEffect: {
														...hoverEffect,
														bgColor: color,
													},
												})
											}
										/>
									</DropdownContentWrapper>
								)}
							/>
						</ToolsPanelItem>
						<ToolsPanelItem
							isShownByDefault
							hasValue={() => !!iconFillColor}
							label={__('Icon', 'linkstar')}
							onDeselect={() =>
								setAttributes({
									hoverEffect: {
										...hoverEffect,
										iconBgColor: undefined,
										iconFillColor: undefined,
										iconStrokeColor: undefined,
									},
								})
							}
						>
							<Dropdown
								style={{ width: '100%' }}
								popoverProps={{
									placement: 'left-start',
									offset: 36,
									shift: true,
								}}
								renderToggle={({ isOpen, onToggle }) => (
									<Button
										__next40pxDefaultSize
										onClick={onToggle}
										aria-expanded={isOpen}
										style={{ width: '100%' }}
										className={isOpen && 'is-open'}
									>
										<HStack alignment="left">
											<ColorIndicator
												colorValue={iconFillColor}
											/>
											<Text>
												{__('Icon', 'linkstar')}
											</Text>
										</HStack>
									</Button>
								)}
								renderContent={() => (
									<DropdownContentWrapper paddingSize="none">
										<TabPanel
											className="link-star-block-editor-panel-color-settings-dropdown-content"
											tabs={[
												{
													name: 'background',
													title: __(
														'Background',
														'linkstar'
													),
													content: (
														<ColorPalette
															enableAlpha
															value={iconBgColor}
															colors={[
																{
																	colors,
																	name: __(
																		'Theme'
																	),
																},
															]}
															onChange={(color) =>
																setAttributes({
																	hoverEffect:
																		{
																			...hoverEffect,
																			iconBgColor:
																				color,
																		},
																})
															}
														/>
													),
												},
												{
													name: 'fill',
													title: __(
														'Fill',
														'linkstar'
													),
													content: (
														<ColorPalette
															enableAlpha
															value={
																iconFillColor
															}
															colors={[
																{
																	colors,
																	name: __(
																		'Theme'
																	),
																},
															]}
															onChange={(color) =>
																setAttributes({
																	hoverEffect:
																		{
																			...hoverEffect,
																			iconFillColor:
																				color,
																		},
																})
															}
														/>
													),
												},
												{
													name: 'stroke',
													title: __(
														'Stroke',
														'linkstar'
													),
													content: (
														<ColorPalette
															enableAlpha
															value={
																iconStrokeColor
															}
															colors={[
																{
																	colors,
																	name: __(
																		'Theme'
																	),
																},
															]}
															onChange={(color) =>
																setAttributes({
																	hoverEffect:
																		{
																			...hoverEffect,
																			iconStrokeColor:
																				color,
																		},
																})
															}
														/>
													),
												},
											]}
										>
											{({ content }) => content}
										</TabPanel>
									</DropdownContentWrapper>
								)}
							/>
						</ToolsPanelItem>
					</div>
				</ToolsPanel>
			</InspectorControls>
		</>
	);
};

export default Inspector;
