// ============================================== Templates

# Sidebar

<?php if ( is_active_sidebar( 'sg2_header_menu_bar' ) ) : ?>
<?php dynamic_sidebar( 'sg2_header_menu_bar' ); ?>
<?php endif; ?>

# Use shortcodes

<?php
echo do_shortcode( '[contact-form-7 id="91" title="quote"]' );
 ?>
 
 # Post list
 
 <?php

    $args = array(
        'posts_per_page'   => 12,
        'offset'           => 0,
        'cat'              => '',
        'category_name'    => '',
        'orderby'          => 'date',
        'order'            => 'DESC',
        'post_type'        => 'post',
        'post_status'      => 'publish',
    );

    $posts_array = get_posts( $args );

    global $post;

    foreach ( $posts_array as $post ) :
        setup_postdata( $post );

        ?>
        <div>
            <a href="<?php the_permalink(); ?>"><?php the_title(); the_ID(); ?></a>
        </div>
        <?php

    endforeach;

    wp_reset_postdata();
?>

# Post Meta

<div><pre><?php var_dump(get_post_meta(get_the_ID()));?></pre></div>

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
