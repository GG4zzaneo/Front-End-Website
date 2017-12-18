# Front-End-Website
This website was created for second assignment of CTEC3905 at De Montfort University.
Notes:
	* Please use chrome
	* Desktop view was developed on the basis of a 13" screen, please judge against this performance.
## Table of contents

- [Background](#background)
- [Site Structure](#structure)
	- [Site Map](#site-map)
- [Design Influences](#design-influences)
- [Initial Ideas](#initial-ideas)
	- [Home Pages](#home-pages)
	- [Accordion Pages](#accordion-initial)
	- [About](#about-initial)
- [Final Design]
	- [Nav](#nav)
	- [Responsive Design](#responsive-design)
	- [Home Page](#home-page)
	- [Accordion Pages](#accordion-pages)
	- [About] Page(#about-page)
- [Usability](#usability)
	- [Navigation](#navigation)
	- [IA and Accesibility](#ia-and-accessibility)
	- [PARC](#parc)
- [Code]
- [References](#references)

## Background

This website is inspired by a passion of mine, the guitar. I wanted to make a site about a topic which I both enjoy and have a good knowledge of. This knowledge is especially helpful reagrding usability and ensuring that the right content is delivered to the right audience.


## Structure

The site is comprised of four pages:
* Homepage
* Wonderful Sringed things: A page about famous guitar models
* The Pantheon Of Gods: A page about famous guitar players
* An about page


### Site Map
	This site does not include a site map within the HTML because all of the pages are readily accessible form the nav bar, which is in effect the site map. With this in mind the respective images are included below showing the traditional layout and the specific links between the pages.
	[1] Provides inspiration for the diagram used.
	![Site Map](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/map.PNG)
	![Site Links](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/links.PNG)

## Design Influences	
The main influence of the site rgarding both structure and design is the rock and roll hall of fame. The delivery style of content is used as a template to ensure a relaxed but engagin experience for users.
The general design is influenced by Lush [2] with an image providing a backdrop for the page, something common across my site. It provides a clean and simple layout while also grabbing attention immediately.
The colour scheme is influenced by [3]. The gold and charcoal colours used give a relaxed viewing, 
while also giving a vintage feel, in tune with the theme of the site. Another styling choice related to this vintage rock n roll theme, independent of CSS, is the use of black and white images.
Accordions are used to separate content on the two main pages. The idea for accordions came when viewing Ferrari's site [4], in which I saw the effective of accordions for hiding content while allowing user interaction and animation.
They manage an overabundance of content through dynamic switching [5], which is why they were used. The store the sections which contain the most content on the site, allowing it to be hidden unless specified by the user. This was a plus 
in user testing as they stated that "they made the page less cluttered and allowed for fun interaction."
Subtle animations are used where suitable. This is becaue too much animation can distract the user and no animation can bore the user. It is is important to find the sweet spot and use appropriate anmations to add to UX. 
	
## Initial Ideas
### Home Initial	
	Included in this project are various wireframes (sketches) of initial ideas for certain pages.
	The initial mobile page can be found here: 
	Initial wireframe sketches for home page show bad understanding of mobile design and responsiveness. The design of the text boxes next to each other horizontally was initially wrong, however, 
	on revising the labs and lectures I understood the principles of responsive design and dropped this aspect of the design.
	The initial sketches for this page: ![Homepage Mobile View](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/initial-mobile.png)
	The initial idea for the tablet homepage was identical to that of the mobile only with the text boxes shorter in height an greater in width.
	![Homepage Tablet View](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/initial-tablet.png)
	The initial design for desktop home was simple, with a traditional horizontal nav at the top. The similarity of this sketch to the mobile site showed that changes need to be made in order to make the responsiveness 
	more obvious.
	![Homepage Desktop View](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/initial-desktop.png)

### Accordion Initial
The mobile views were those used in the final design so they are discussed below. The desktop page for the legends and guitars was not initially designed with accordions in mind. Images were displayed in two-by-two grids with relevant information appearing on mouse hover.
	![Desktop Ideas](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/desktop-accord-initial.png)


### About Initial
The initial about page was designed later than the rest as it was not necessarily a concern. By this point I had understood the responsive principles, which is why the initial sketches show mobile content stacked on top of each other unlike the home page design.
	![About Initial](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/desktop-accord-initial.png)
	
	
	
## Final Design	

### Nav
Burger icon is used for mobile devices, popular with many modern sites. The mobile nav slides down when toggled, which is a nice animation and is cleaner than the initial idea of sliding in from the side.
The design of nav also appears cleaner than Lush's, which is too cramped, because the menu is hidden from view unless toggled. 
	![Mobile Nav](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/mobile-nav.png)
On the desktop site, a more traditional style nav bar is used. During development I experimented with using images, to add vibrancy to the nav. This first started of as a horizontal backdrop. 
However, through experimentation and suggestions from user testing the nav was changed to its current state, with the headings angled with an image as the backdrop.
	![Desktop Nav](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/desktop-nav.png)
	
### Respsonsive Design
This is a key part of the project and is included subtly in the web pages. The responsive design principles are followed to allow for subtle changes where appropriate while maintaing consistent usability.
Please experiment and resize via the live site!
The breakpoints were chosen according to [6].

### Home Page
	The home mobile view developed over time to be more mobile friendly than the initial idea, with content reorganised to stack vertically on top of each other.
	Buttons are included to break up the constant text, a suggestion from user testing, with a user describing it as "too much text grouped together". 
	The buttons are h3 tags styled to provide links to other pages. This can be seen here:
	![Buttons added because of user testing](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	These buttons were changed to suit the needs of the users, with various sizes and styles tested. One suggestion was the animation of the button being pressed on click, which is included in the final design.

	The desktop home page sees the text left aligned, with the buttons restyled for a larger and screen and pushed to the right of the screen. They feauture photgraphic backgrounds to fill the otherwise blank space,
	which users responded to well in testing. The text is left-aligned to follow natural behaviour of reading left to right. This means users will read the introductry content first, as intended and then naturally 
	proceed to click the links.
	![Desktop Home User Test](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	
	The tablet home page is a hybrid of the former two. It has the mobile nav mixed with the content styling of the desktop view (minus horizontal rules). This was becuase in testing, users preferred a more visual and interactive method 
	on a larger screen, which the mobile buttons did not fulfill.
	
	![Desktop Home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	![Mobile Home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	![Tablet Home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	
### Accordion Pages	
	The mobile and tablet views were intended to have accordions from the start. The accordions, as stated allow for lots of content to be hidden unless the user wishes.
	Users responded well to the animations of the + and - toggles when the accordions are activated. This was inspired by researchig on W3 schools [7]. Their code was adapted to fit the requirements of the course and the site itself.
	An important suggestion from one user in testing was to include buttons to open and close all accordions simultaneously, to save the user opening them one be one. This was added and received positive feedback in testing.
	A later suggestion from the same user at another stage in testing was to include a button allowing users to return to the top instantly in order to prevent unnecessary scrolling, which they state can be cumbersome.
	This button was added after
	
	One aspect that was changed were the guuitar images. These were originally pngs. Users felt these were not clean and ruined the look of the page, preferring the look of the legends accordions, with full pictures.
	This was changed accordingly.
	![Accordion User Test](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	
	The idea for text to appear on hover was influenced by the lab which used css transitions.	
	Views of each are linked below. These show responsive design, with the structure and styling of the accordion and buttons changing depending on screen size:
	![Mobile Accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	![Desktop Accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	![Tablet Accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)
	
### About Page	
	This page simply displays information about the site itself and also includes the site's guardian API.
	At first, it resembled a similar design to the original sketches. However, users found there to be not enough visual content.
	For this reason, images were added as backdrops, eliminating blank space while also maintaining the overall style of the site.
	![About User Testing](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/about-initial.png)
	![About Page](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/home-buttons.png)


	The API used is the guardians. It is appropriately located in the news tab and allows users to search for relevant news. One downfall with this is that they can search for unrelated terms.

## Usability
Usability is key for the UX of any site and was a key point when considering the overall design of the site.


### Navigation
There is effective navigation throughout. Content is all easy to locate. 
Navigation is made to be as efficient as possible across the site. The navigation bars themselves are kept simple and are easily accesible, giving users constant access to all possible pages on the site.
This is more the case with the mobile and tablet burger buttons, which remains fixed in place and follows the user as they scroll.
This is not necessary on the desktop version as the pages are not as long, with content being spread out among the width.
The buttons on the accordion pages also give access to control all accordions as opposed to making the user open each one in turn.

### IA and Accessibility
Content is organised into chunks. There are no significant bulks of information without a visual breakpoint such as 
a horiztonal rule or a gap or button inbetween text boxes such as those on the homepage.
Organizing content on the desktop nd tablet homepages to the left ensures that it follows the naturl viewing of the user, 
going from left to right. The accordion content on the larger screens is organised in the same way. The mobile accordion 
is organised vertically so the introductory content is placed first, followed by an in depth text. This again follows the 
natural flow of the readers behaviour.
Alt-text is used for all images to comply with disabled accessibility [].
The use of black and white images mkes easier viewing for colour-blind users.
The quick lists within the accordions allow easy and basic info for users who are uable to register large amounts of content.

#### Target audience: Intended users are all possible users, it does not discriminate to a particular niche of readers. 
	It designed with all users iin mind, however, it will appeal primarily to those interested in guitars and features enough content to satisfy their needs.
#### Content: 
	Content is delivered with the PARC principles (mentioned below) in mind. 
	The menus are simple and easy to navigate. The accordions make it easy to navigate the more lenghty pages much quuicker.
	The correct mount of content is used, it is enough to catch the attention and keep the user engaged.
	This is done by using a number of formats and structures such as buttons, pictures, lists and plain text.
#### Delivery: 
	Simple english is used to deliver information since it is targeted at all demographics.
	The content itself is not delivered in a manner that will alienate users. 
	To give the vintage rock and roll feel, the colour palette of chacoal and gold was used, with only black and white images.
	This also makes the site easy on the eye.

### PARC
#### Proximity
	I have been careful to ensure this is good throughout the site.
	The nav bars and About page tabs are both evidence of proximity in different ways. In both mobile and deskptop nav, all headers are evenly spaced from each other, allowing for ac consitently even aesthetic.
	On the mobile view, this content is spaced evenly in a vertical manner. They are groupe close enough together to attract attention 
	without giving a cluttered look. On the tablet and desktop views, the home content is still evenly spaced but the links are restyled and enlarged but 
	are still within close proximity to the introductory text. Specifying that they each share 50% of the height of their containter ensures that they 
	appear identical in size, improving the idea of proximity. The desktop view of the about tabs is such that they appear easly within reach of one another, with 
	enough spacing to be deemed separate while also maintaing suitable proximity.
	The accordions also take into account proximity, all accordions are consitently spaced from one another on every screen size. 
	The inner content is tighty grouped so the eyes don't have to travel far between one element to the next, making it easier to read and maintaining a consistent flow. 	
#### Alignment
	Consistent alignment is used throughout. This is most evident on the accordions.
	They fall into place underneath each other, giving a consistent and clean aesthetic.
	The content within the accordions is aligned to fit perfectly in the container, 
	with the main pictures filling the width of the container to leave no blank space.
	All other features across the site such as the buttons, nav bars and about page maintain this consistent alignment.
#### Repetition
	This is one of the most important design considerations since a lack of repetitive styling can give a disjointed feel to the user.
	I have ensured that styles are repeated thoughout. The same colour scheme of gold shades and charcoal as well as some white are used on all elements.
    This is also evident with the pictures on the site, all being black and white.
	The colour of the text is always gold and elements grouped together such as the accordions and about tabs all follow the same design style.	
#### Contrast
	The page titles, desktop nav and accordion headers use a different font to the rest of the content. 
	This is to make them stand out and attract attention, clearly explaining to the user where they are and what they are looking at.
	The mobile nav font is larger than the rest of the text, grabbing attention when opened.
	The use gold is used to lightly contrast against the background, making content easy on the eye while distinguishing the text against the rest of the page. 
	Another element of contrast is highlighting in the nav's active page and the active tab of the about page to show the user where they are.
	The burger button is bright against the background to make it obvious to users that it is important for their use. This is also the case for the toggles on each accordion.		

## Code
[9] inspired the animation on the burger.
[10] inspired the nav behaviour.
Validation Links


## References
[1] http://uxmag.com/sites/default/files/uploads/ausitemap/smforarticle.jpg
[2] https://uk.lush.com/
[3] http://contrastrebellion.com/
[4] http://corporate.ferrari.com/en/investors/ferrari-spin.
[5] https://webdesignledger.com/best-practices-accordions-in-web-design/#51206da210
[6] https://responsivedesign.is/news/2016/12/the-100-correct-way-to-do-css-breakpoints/
[7] https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol
[8] https://www.abilitynet.org.uk/blog/five-golden-rules-compliant-alt-text
[9] https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js
[10] https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_push 