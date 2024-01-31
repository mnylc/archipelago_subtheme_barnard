/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.archipelago_subtheme_barnard = {
    attach: function (context, settings) {
      if ($(context).is('.view') || context == document) {
          $("#main-breadcrumbs").find('.views-display-link').remove();
          const elementsToAttach = once('view-header-barnard', '.view-header .views-display-link', context);
          $(elementsToAttach).each(function (index, value) {
            $(this).detach().appendTo("#main-breadcrumbs");
        });
      }
    }
  }
})(jQuery, Drupal);
