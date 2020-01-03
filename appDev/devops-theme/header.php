<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package DevopsCare
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

    <!-- ========================================= WP HEAD -->

	<?php wp_head(); ?>

    <!-- ========================================= BOOT -->


    <!-- ༼°▽°༽ style boot -->
    <style>
        body    { height: auto; }
        img,svg { max-width: 100%; }
    </style>

    <!-- ༼°▽°༽ prefetch boot -->
    <link rel="preconnect"   href="//fonts.gstatic.com">
    <!-- INFO: https://3perf.com/blog/link-rels/ -->


    <!-- ========================================= DESIGN -->


    <link
        href="<?php echo get_template_directory_uri(); ?>/src/styles/appart.css"
        rel="stylesheet" type="text/css">
    <link
        href="<?php echo get_template_directory_uri(); ?>/src/styles/devops-care.css"
        rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Vollkorn:400,400i,700&subset=cyrillic"
        rel="stylesheet">

</head>

<body>

    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'devopscare' ); ?></a>

