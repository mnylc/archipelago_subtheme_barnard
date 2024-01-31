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
         const $narrowsearch_block = document.querySelector('#block-narrowyoursearch');
         if ($narrowsearch_block) {
           const $facets = $narrowsearch_block.parentElement.querySelectorAll('.block-facets');
           if ($facets.length > 0) {
             $narrowsearch_block.classList.remove('visually-hidden')
           }
           else {
             $narrowsearch_block.classList.add('visually-hidden')
           }
         }
          $("#main-breadcrumbs").find('.views-display-link').remove();
          const elementsToAttach = once('view-header-barnard', '.view-header .views-display-link', context);
          $(elementsToAttach).each(function (index, value) {
            $(this).detach().appendTo("#main-breadcrumbs");
        });
      }
    }
  }
})(jQuery, Drupal);
