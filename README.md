# C4 - HTML Boilerplate & Guidelines

ABS-CBN HTML Boilerplate is a set of template files - HTML, CSS, JS - and site structure. Follow the guidelines for a standardized coding style.

## 1. Download the Template

Download the [boilerplate](https://bitbucket.org/jondanao/c4/get/50ff3dc058f9.zip) and unzip. Structure should look like this:

	- template.html 
		- theme 
			- images 
			- scripts 
			- styles

## 2. Coding Convention

### CSS: dash-separated, cuddle brackets

	.my-selector { 
	    positioning (coordinates); 
	    float/clear (); 
	    display/visibility; 
	    spacing (margin, padding, border); 
	    dimensions (width, height); 
	    typography-related (line-height, color, etc.); 
	    miscellaneous (list-style, cursors, etc.); 
	} 

### Javascript: camel case, cuddle brackets

You may read on Crockford's [Javascript Code Convention](http://javascript.crockford.com/code.html).

	function myFunction { 
	    // do something here 
	} 

### Nesting

Always indent (1 tab space) nested statements inside a code block.

### Commenting

Be nice to other developers by adding useful comments in the code. This is particularly useful when merging files in a specific hunk.

## 3. Images

### Alt Text
for Google Image Search 

	<img src='jpg' alt='hoy!'>

### Sprite Sheet
Global UI images, icons, logo, etc. NO CONTENT! 

![Sprite Sheet](https://bitbucket.org/jondanao/c4/raw/7ac1d93ba45d/sprite_sheet.png)

## 4. Optimization

### Minify CSS and Javascript

Download Minimus. Based on YUI JS and CSS Compressor. Make sure all statements terminate with semicolon.

### Images

Images in the sprite sheet should be laid out horizontally. Optimize the images using ImageOptim.

### Page Performance Analysis

Use PageSpeed by Google or YSlow by Yahoo!

## 5. Site Map Reference
Always check built pages against the site tree. Shade boxes that are finished.
![Site Map](https://bitbucket.org/jondanao/c4/raw/7ac1d93ba45d/site_map.png)

## 6. Social APIs
- **Facebook Share Count** - [http://graph.facebook.com/**http://www.abs-cbn.com**](http://graph.facebook.com/http://www.abs-cbn.com).
- **Facebook Link Stat via FQL** - [https://api.facebook.com/method/fql.query?format=json&query=SELECT url, normalized\_url, share\_count, like\_count, comment\_count, total\_count, commentsbox\_count, comments\_fbid, click\_count FROM link\_stat WHERE url="**http://www.abs-cbn.com/**"](https://api.facebook.com/method/fql.query?format=json&query=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,%20commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%22http://www.abs-cbn.com/%22)
- **Twitter Status** - [https://twitter.com/intent/tweet?text=**Please visit http://www.abs-cbn.com**](https://twitter.com/intent/tweet?text=Please visit http://www.abs-cbn.com)
- **Twitter Reply** - [https://twitter.com/intent/tweet?in\_reply\_to=**202693063804596225**](https://twitter.com/intent/tweet?in_reply_to=202693063804596225)
- **Twitter Retweet** - [https://twitter.com/intent/retweet?tweet\_id=**202693063804596225**](https://twitter.com/intent/retweet?tweet_id=202693063804596225)
- **Twitter Favorite** - [https://twitter.com/intent/favorite?tweet\_id=**202693063804596225**](https://twitter.com/intent/favorite?tweet_id=202693063804596225)
- **Twitter Share Count** - [http://urls.api.twitter.com/1/urls/count.json?url=**http://www.abs-cbn.com**](http://urls.api.twitter.com/1/urls/count.json?url=http://www.abs-cbn.com)

## 7. Changelog

- **2.2** - May 30, 2012 by Jon Danao
	- Media Queries
- **2.1** - Mar. 19, 2012 by Jon Danao
	- Facebook and Twitter Share APIs
- **2.0** - Jan. 10, 2012 by Jay Gauten
	- HTML5 + HTML4 Backwards Compatibility
	- Mobile Viewport Scaling
	- Chromeless Web App
	- Startup Image
	- Bookmark Icons
	- jQuery from CDN
	- Print styles
- **1.1** - Aug. 5, 2011 by Jon Danao
- **1.0** - Aug. 4, 2011 by Jon Danao



