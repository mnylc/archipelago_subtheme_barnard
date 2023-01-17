/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.archipelago_subtheme_barnard = {
    attach: function(context, settings) {
      $(".view-header .views-display-link").detach().appendTo("#main-breadcrumbs");

    }
  };

})(jQuery, Drupal);
