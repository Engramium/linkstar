<?php
// This file is generated. Do not modify it manually.
return array(
	'linkstar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'title' => 'LinkStar',
		'name' => 'link-star/link-star',
		'icon' => 'admin-links',
		'description' => 'A link block that can be used to link to a page or a URL.',
		'category' => 'widgets',
		'attributes' => array(
			'link' => array(
				'type' => 'string'
			),
			'openInNewTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'nofollow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'titleAttr' => array(
				'type' => 'string'
			),
			'ariaLabel' => array(
				'type' => 'string'
			),
			'hoverEffect' => array(
				'type' => 'object',
				'default' => array(
					'headingColor' => '',
					'paragraphColor' => '',
					'iconBgColor' => '',
					'iconFillColor' => '',
					'iconStrokeColor' => '',
					'bgColor' => ''
				)
			)
		),
		'supports' => array(
			'__experimentalOnEnter' => true,
			'__experimentalOnMerge' => true,
			'__experimentalSettings' => true,
			'align' => array(
				'wide',
				'full'
			),
			'anchor' => true,
			'ariaLabel' => true,
			'html' => false,
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true,
				'__experimentalDefaultControls' => array(
					'backgroundImage' => true
				)
			),
			'color' => array(
				'gradients' => true,
				'heading' => true,
				'button' => true,
				'link' => true,
				'__experimentalDefaultControls' => array(
					'background' => true,
					'text' => true
				)
			),
			'shadow' => true,
			'spacing' => array(
				'margin' => array(
					'top',
					'bottom'
				),
				'padding' => true,
				'blockGap' => true,
				'__experimentalDefaultControls' => array(
					'padding' => true,
					'blockGap' => true
				)
			),
			'dimensions' => array(
				'minHeight' => true
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'style' => true,
					'width' => true
				)
			),
			'position' => array(
				'sticky' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'layout' => array(
				'allowSizingOnChildren' => true
			),
			'interactivity' => array(
				'clientNavigation' => true
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	)
);
