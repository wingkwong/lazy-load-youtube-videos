/**
 *
 * llyv.js
 * Optimizing the performance while loading multiple YouTube videos on the same page
 *
 * @license MIT
 * @version 0.1.0
 * @author  Wong, Wing Kam - @wingkwong
 * @updated 2018-07-11
 * @link    https://github.com/wingkwong/lazy-load-youtube-videos
 *
 */
(function() {
    'use strict';
    var videos = document.querySelectorAll('.llyv');

    for (var i = 0; i < videos.length; i++) {
      // Construct Play Button
      var llyvPlayBtn = document.createElement('div');
      llyvPlayBtn.className = 'llyv-play-btn';
      videos[i].appendChild(llyvPlayBtn);

      // Construct thumbnail image
      var img = document.createElement('img');
      img.src = "https://img.youtube.com/vi/" + videos[i].dataset.id + "/hqdefault.jpg";
      videos[i].appendChild(img);

      // Construct iframe
      videos[i].addEventListener('click', function() {
          var iframe = document.createElement('iframe');
          iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?rel=0&showinfo=0&autoplay=1");
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          while (this.firstChild) {
              this.removeChild(this.firstChild);
          }
          this.appendChild(iframe);
      });
    }
}());