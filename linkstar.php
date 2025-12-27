<?php
/**
 * Plugin Name:       LinkStar
 * Description:       A link block that can be used to link to a page or a URL.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Engramium
 * Author URI:        https://www.engramium.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       linkstar
 *
 * @package LinkStar
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Link Star Plugin Class
 */
class Link_Star_Plugin {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'plugins_loaded', [ $this, 'init_hooks' ] );
	}

	/**
	 * Initialize hooks.
	 */
	public function init_hooks() {
		add_action( 'init', [ $this, 'block_init' ] );
	}

	/**
	 * Registers the block using blocks-manifest.php file.
	 */
	public function block_init() {
		// WordPress 6.8+ - Register blocks from metadata collection
		if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
			wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
			return;
		}

		// WordPress 6.7+ - Register block metadata collection
		if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
			wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		}

		// Register block types from manifest
		$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
		foreach ( array_keys( $manifest_data ) as $block_type ) {
			register_block_type( __DIR__ . "/build/{$block_type}" );
		}
	}
}

new Link_Star_Plugin();
