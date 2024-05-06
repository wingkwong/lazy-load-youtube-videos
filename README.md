# lazy-load-youtube-videos
Optimizing the performance while loading multiple YouTube videos on the same page.

## Synopsis
Loading a number of iframe requires a great deal of time fetching resources. Under this situation, only thumbnails are loaded and the video is triggered only when its thumbnail is being clicked.

## privacy by default
Embedding the videos from "https://www.youtube-nocookie.com/embed" instead of "https://www.youtube.com".

(optional): for even more privacy friendliness, provide the youtube thumbnail images from your own webspace,
i.e. replace the line in llyv.js:
```
img.src = "https://img.youtube.com/vi/" + videos[i].dataset.id + "/hqdefault.jpg";
```
by
```
img.src = "https://www.example.com/uploads/images/" + videos[i].dataset.id + "/hqdefault.jpg";
```
You can get the thumbnail images from the youtube URL like e.g. https://i1.ytimg.com/vi/bDuXLQjaocE/hqdefault.jpg

## Files
### Download the compressed, production version
https://github.com/creopard/lazy-load-youtube-videos/blob/master/src/llyv.min.js

https://github.com/creopard/lazy-load-youtube-videos/blob/master/src/llyv.min.css

### Download the uncompressed, development version
https://github.com/creopard/lazy-load-youtube-videos/blob/master/src/llyv.js

https://github.com/creopard/lazy-load-youtube-videos/blob/master/src/llyv.css


## Using with CMSMS ([CMS Made Simple](https://www.cmsmadesimple.org/))
1. Create a new user defined tag (UDT) called "youtube_link_lazy", so it will be accessible in any CMSMS content site using {youtube_link_lazy id='put-any-video-id-here'}
2. Add this PHP-code to the UDT:
```
$id = get_parameter_value($params,'id');
if (!empty($id))
{
    if ($smarty->getTemplateVars('page_alias') != 'feed')  /* optional: exclude embedded video URLS from RSS feeds for syntax issues */
    {
        echo '<p><b>Embedded YouTube Video:</b> If you click on the video, you'll accept the privacy terms of <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" rel="noopener nofollow">Youtube</a> and our own ones.
        <a href="https://youtu.be/'.$id.'" target="_blank" rel="noopener nofollow">Link to video: https://youtu.be/'.$id.'</a></p>
        <div class="llyv" data-id="'.$id.'"></div>';
    }
}
```
3. Include the tag like {youtube_link_lazy id='bDuXLQjaocE'} in your content text to show the video thumbnail and play it when clicking on it.

## Demonstration
Demo is available at https://www.creopard.de/commander-keen-4-shareware-klassiker.htm

## Authors
Original version by **WONG, Wing Kam** -  [@wingkwong](https://github.com/wingkwong)

Modified by **creopard** -  [@creopard](https://github.com/creopard)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/creopard/lazy-load-youtube-videos/blob/master/LICENSE) file for details
