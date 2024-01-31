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
         const $narrowsearch_block = document.querySelectorAll('#block-narrowyoursearch, #block-narrowyoursearch-2');
         if ($narrowsearch_block.length > 0) {
           [].forEach.call($narrowsearch_block, function (el) {
             const $facets = $narrowsearch_block.parentElement.querySelectorAll('.block-facets:not(.hidden)');
             if ($facets.length > 0) {
               el.classList.remove('visually-hidden')
             }
             else {
               el.classList.add('visually-hidden')
             }
           });
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
