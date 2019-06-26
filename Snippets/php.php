<?php

function startsWith($haystack, $needle)
{
     $length = strlen($needle);
     return (substr($haystack, 0, $length) === $needle);
}
function endsWith($haystack, $needle)
{
    $length = strlen($needle);

    return $length === 0 ||
    (substr($haystack, -$length) === $needle);
}

?>

<?php if ($insert_lead): ?>
<?php echo $insert_lead; ?>
<?php endif; ?>


// --------------------------------- DATABASE

<?php

// SETUP DB
$mysql_db_host          = 'localhost';
$mysql_db_login         = 'root';
$mysql_db_password      = '';
$mysql_db_databasename  = 'int_rim';
// CONNECT DB
$DB_connection_id = mysql_connect($mysql_db_host, $mysql_db_login, $mysql_db_password) or die(mysql_error());
$DB_select_db = mysql_select_db($mysql_db_databasename) or die(mysql_error());
$DB_charset = mysql_query("SET NAMES 'utf8'");

?>

// --------------------------------- WORDPRESS

<?php if ( is_active_sidebar( 'sg2_header_menu_bar' ) ) : ?>
<?php dynamic_sidebar( 'sg2_header_menu_bar' ); ?>
<?php endif; ?>

<?php
// Use shortcodes in form like Landing Page Template.
echo do_shortcode( '[contact-form-7 id="91" title="quote"]' );
 ?>

// ============================================== Get Posts With Empty Meta Key

<?php


  $args = array(
      'posts_per_page'   => 10,
      'offset'           => 0,
      'cat'              => '',
      'category_name'    => 'fdg',
      'orderby'          => 'date',
      'order'            => 'DESC',
      //'include'          => '',
      //'exclude'          => '',
      //'meta_key'         => '',
      //'meta_value'       => '',
      'meta_query' => array(
          'relation' => 'OR',
          array(
              'key'     => 'gameArticle__description',
              'value'   =>  array(''),
              'compare' => 'IN'
          ),
          array(
              'key'     => 'gameArticle__description',
              'compare' => 'NOT EXISTS'
          ),
      ),
      'post_type'        => 'post',
      'post_status'      => 'publish',
  );

  $posts_array = get_posts( $args );

  global $post;
  foreach ( $posts_array as $post ) :
      setup_postdata( $post );
      ?><div><a href="<?php the_permalink(); ?>"><?php the_title(); the_ID(); ?></a></div><?php
  endforeach;
  wp_reset_postdata();

?>

POST META

<div><pre><?php var_dump(get_post_meta(get_the_ID()));?></pre></div>
