# Front-End-Website
This website was created for second assignment of CTEC3905 at De Montfort University.

Notes:

* Please use chrome for viewing site.
* Desktop view was developed on a 13" macbook screen.

## Table of contents

- [Background](#background)
- [Site Structure](#structure)
	- [Site Map](#site-map)
- [Design Influences](#design-influences)
- [Initial Ideas](#initial-ideas)
	- [Home Pages](#home-pages)
	- [Accordion Pages](#accordion-initial)
	- [About](#about-initial)
- [Final Design](#final-design)
	- [Nav](#nav)
	- [Responsive Design](#responsive-design)
	- [Home Page](#home-page)
	- [Accordion Pages](#accordion-pages)
	- [About Page](#about-page)
- [Usability](#usability)
	- [Navigation](#navigation)
	- [IA and Accesibility](#ia-and-accessibility)
	- [PARC](#parc)
- [Code](#code)
- [References](#references)

## Background

This website is inspired by my passion for the guitar, a topic I enjoy and have a good knowledge of. This knowledge is helpful reagrding usability and ensuring that the right content is delivered to the right audience.



## Structure

The site is comprised of four pages:

* Homepage
* Wonderful Sringed things: A page about famous guitar models
* The Pantheon Of Gods: A page about famous guitar players
* An About page


### Site Map
This site does not include a site map internally because all of the pages are readily accessible via the nav bar which is in effect the site map. With this in mind the respective images are included below showing the traditional layout and the specific links between the pages. 

[1] Provides inspiration for the diagram used.

* [Site Map](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/map.PNG)  
* [Site Links](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/links.PNG)



## Design Influences	
The main influence regarding both structure and design is the rock and roll hall of fame. The delivery style is used as a template to ensure a relaxed but engaging experience for users.

The general appearance is influenced by Lush [2] with a background image used, something common across my site. It provides a clean and simple layout while also grabbing attention.

The colour scheme is influenced by [3]. The gold and charcoal theme allows relaxed viewing
while also giving a vintage feel, in tune with the theme of the site. Another styling choice related to this vintage theme is the use of black and white images.

Accordions are used to separate content on the two main pages. The idea for accordions came when viewing Ferrari's site [4]. They "manage an overabundance of content through dynamic switching" [5]. They allow main content to be hidden unless specified by the user. This was a plus in user testing as they stated that "they made the page less cluttered and allowed for fun interaction."

Subtle animations are used where suitable. This is because too much animation can distract the user and no animation can bore the user. It is important to find the sweet spot and use appropriate animations to aid UX. 
	


## Initial Ideas
Included in this project are various wireframes (sketches) of initial ideas for certain pages. https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/wireframes.


### Home Initial	
Initial wireframe sketches for home page show bad understanding of mobile design and responsiveness. The horizontal design was initially wrong. On revising the labs and lectures I understood the principles of responsiveness and later changed this.  

* [Initial Home Mobile View](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/initial-mobile-home.pdf)
	
The initial idea for the tablet homepage was identical to that of the mobile only with the text boxes shorter in height an greater in width.

* [Initial Home Tablet View](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/initial-tablet.pdf)
	
The initial design for desktop home was simple, with a traditional horizontal nav at the top. The similarity of this sketch to the mobile site showed that changes needed to be made in order to make the responsiveness more obvious.

* [Initial Home Desktop View](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/initial-desktop.png)


### Accordion Initial
The mobile views were those used in the final design so they are discussed below. The desktop page for the legends and guitars was not initially designed with accordions in mind. Images were displayed in two-by-two grids with relevant information appearing on mouse hover.

* [Initial Desktop Accordion Pages](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/wireframes/initial-accordion.pdf)


### About Initial
The initial about page was designed later than the rest as it was not necessarily a concern. By this point I had understood the responsive principles, which is why the initial sketches show mobile content stacked on top of each other unlike the home page design. The idea was to simply show relevant content under relevant headings.

* [Initial About Page Design](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/initial-about.pdf)
	

	
## Final Design	

### Nav
Burger icon is used for mobile devices, popular with many modern sites. The mobile nav slides down when toggled. It's design is cleaner than Lush's because the menu is hidden from view unless toggled. 
	
* [Mobile Nav](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/screenshots/home-mobile-nav.png)
* [Tablet Nav User Test](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/user_testing/tablet_nav.jpeg)

Users wanted ability to close nav automatically simply by clicking any other part of the page. This was added in commit:  

* f2669ac9b7e94bf03b46d5402e4aaffb5683b759


On the desktop site, a more traditional style nav is used. During development I experimented with using images to aid contrast. This first started as a horizontal backdrop. Through suggestions from user testing the nav was changed to its current state, with the headings angled with an image as the backdrop. This was first done in commit:

* c10f9744a7863dc5787de56feadc000e50d27462

Properly scalability was added in the below commit, after experimenting with different positioning:

* 75d86c7db36c35c11c4a98b9012be5ddb72a3629

Desktop nav is found below:

* [Desktop Nav](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/screenshots/desktop-nav.png)
* [Users responded well to desktop nav design](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/user_testing/desktop-nav.jpeg)
	
### Respsonsive Design
This is a key part of the project and is included subtly in the web pages. The responsive design principles are followed to allow for subtle changes where appropriate while maintaining consistent usability. Please experiment and resize via the live site.  
The breakpoints were chosen according to [6]. Some breakpoints were added to cater for user requirements to perfectly preset content and ensure consistency at of particular features at certain sizes.

### Home Page

The home mobile view developed over time to be more mobile friendly, with content reorganised to stack vertically on top of each other.
Buttons are included to break up the constant text, a suggestion from user testing.
The buttons are h3 tags styled to provide links to other pages. These buttons were changed to suit the needs of the users, with various sizes and styles tested. One suggestion was the animation of the button being pressed on click, which is included in the final design.

* [User testing mobile home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/mobile_home.jpeg)

The desktop home page sees the text left aligned, with the buttons restyled for a larger and screen and pushed to the right of the screen. They feature photographic backgrounds to fill the otherwise blank space, which users responded to well in testing. The text is left-aligned to follow natural behaviour of reading left to right. This means users will read the introductory content first, as intended and then naturally proceed to click the links.

* [Users liked the use of background images on the h3 tags](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/home_laptop.jpeg)
	
The tablet home page is a hybrid of the former two. It has the mobile nav mixed with the content styling of the desktop view (minus horizontal rules). This was because in testing, users preferred a more visual and interactive method on a larger screen, which the mobile buttons did not allow. This was first achieved in commit 7970a72167be660319382a7ea1bdeb2e81a47cf1.
	
* [User testing tablet home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/tab_home.jpeg)	

#### Screenshots
* [Desktop Home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/screenshots/desktop-nav.png)  
* [Mobile Home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/screenshots/home-mobile.png)  
* [Tablet Home](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/screenshots/tablet-home.png)

#### Wireframes
* [Mobile](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/mobile_home.jpg)
* [Tablet](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/tablet_home.jpg)
* [Desktop](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/desktop.png)
	


### Accordion Pages	
The mobile and tablet views were intended to have accordions from the start. The accordions allow for lots of content to be hidden unless the user wishes.

Users responded well to the animations of the + and - toggles when the accordions are activated. This was inspired by researching on W3 schools [7]. Their code was adapted.

* [Use of mobile accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/mobile_accordion.jpeg)

An important suggestion from one user in testing was to include buttons to open and close all accordions simultaneously, to save the user opening them one be one. This was added and received positive feedback in testing and was done in commit c00628538676062bd9b7a5917930ec3cb2bb100c. Users did not like the size of the desktop buttons, which changed on adding the about buttons so the css was changed to allow for a consistent sizing. See ee2c538029dcc6bbd4a7335b7d716869b02c759f.

* [Users preferred the presence of the open and close all buttons](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/tab_accordion.jpeg)
* [Users did not like the initial desktop button size](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/desktop-buttons.jpeg)


A later suggestion from the same user at another stage in testing was to include a button allowing users to return to the top instantly in order to prevent unnecessary scrolling. This was done in commit 3dc2eeba21b7825dffd7684aaa595625efb21d15.

* [Testing back to top button](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/desk_hover_accordion.jpeg)
	
	
One aspect that was changed were the guitar images. These were originally pngs. Users felt these were not clean and ruined the look of the page, preferring the look of the legends accordions, with full pictures. This was done in 4f5440aa4b01da8d69f65be2f17a09ce55025160.

* [Bad user response to pngs in accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/original_accordion.jpeg)

The idea for text to appear on hover in the desktop site was influenced by the lab which used css transitions.This is also shown in the screenshot linked above.

Views of each view are linked below. These show responsive design, with the structure and styling of the accordion and buttons changing depending on screen size:

* [Mobile Accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/screenshots/legend-mobile-accordion.png)  
* [Desktop Accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/screenshots/desk-accord-open.png)  
* [Tablet Accordion](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/screenshots/tablet-guitar-accordion.png)

#### Wireframes
* [Mobile](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/mobile_accordion.jpg)
* [Tablet](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/tablet_accordion_open.jpg)
* [Desktop](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/desktop_accordion.jpg)
	
### About Page	
This page simply displays information about the site itself and also includes the site's guardian API.

At first, it resembled a similar design to the original sketches. However, users found there to be not enough visual content. For this reason, images were added as backdrops, eliminating blank space while also maintaining the overall style of the site.

* [User felt initial about was too plain](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/desk_about_initial.jpeg)
* [Later changed to include images](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/tablet_about.jpeg)

The news tab presents news results as a list. This can be seen in the wireframes. The content spreads horizontally as screen size increases.

* [Mobile Testing](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/mobile_news.jpeg)
* [Desktop Testing](https://github.com/GG4zzaneo/Front-End-Website/tree/master/readme-images/user_testing/news_laptop.jpeg)

It uses internal storage to remember the tabs the user last visited so they are loaded on return to the page. See commit 93c0c03873d145a17c5837b4d41815c50309eecd. 

The API used is the Guardian's, added in 4f5440aa4b01da8d69f65be2f17a09ce55025160. It is appropriately located in the news tab and allows users to search for relevant news.


#### Wireframes 
* [Mobile](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/mobile_accordion.jpg)
* [Tablet](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/tablet_accordion_open.jpg)
* [Desktop](https://github.com/GG4zzaneo/Front-End-Website/blob/master/readme-images/wireframes/desktop_accordion.jpg)


## Usability
Usability is key for the UX of any site and was a key point when considering the overall design of the site.


### Navigation
There is effective navigation throughout with content easy to locate. It is intended to be as efficient as possible across the site. The navigation bars themselves are kept simple and are easily accessible, giving users constant access to all pages. This is more the case with the mobile and tablet burger buttons, which remains fixed in place and follows the user as 
This is not necessary on the desktop version as the pages are not as long, with content being 
The buttons on the accordion pages also give access allow for quick navigation of the respective pages.

### IA and Accessibility
Content is organised into chunks. There are no significant bulks of information without a visual 
a horizontal rule or a gap or button in between text boxes such as those on the homepage.
Organizing content on the desktop and tablet homepages to the left ensures that it follows the 
going from left to right.  
The accordion content is organised so the introductory content is placed first, followed by an in depth text. This again follows the natural reader behaviour. The quick lists within the accordions allow easy and basic info for users who are uable to register large amounts of content.
Alt-text is used for all images to comply with disabled accessibility [8].  
The use of black and white images makes easier viewing for colour-blind users.


#### Target audience: 
Intended users are all possible users, it does not discriminate to a particular niche. It designed with all users in mind, however, it will appeal primarily to those interested in guitars and features enough content to satisfy their needs.

#### Content: 
Content is delivered with the PARC principles (mentioned below) in mind.   
The menus are simple and easy to navigate. The accordions make it easy to navigate the more lengthy pages much quicker. The correct amount of content is used, it is enough to catch the attention and keep the user engaged. This is done by using a number of formats and structures such as buttons, pictures, lists and plain text.

#### Delivery: 
Simple English is used to deliver information since it is targeted at all demographics.
The content itself is not delivered in a manner that will alienate users.  To give the vintage rock and roll feel, the colour palette of charcoal and gold was used, with only black and white images. This also makes the site easy on the eye.

### PARC
#### Proximity
In mobile and desktop navs, all headers are evenly spaced from each other, allowing for a consistently even aesthetic. On the mobile view, nav content is grouped close enough together to attract attention without giving a cluttered look. On the tablet and desktop views, the home content is still evenly spaced but the links are restyled and enlarged. Specifying that they each share 50% of the height of their container ensures that they appear identical in size, maintaining appropriate proximity.  

The desktop view of the about tabs is such that they appear easily within reach of one another, with enough spacing to be deemed separate while also maintaining suitable proximity. This is also the case with the news lists on all views.  

The accordions also take into account proximity, all accordions are consistently spaced from one another on every screen size. The inner content is tightly grouped so the eyes don't have to travel far from one element to the next, making it easier to read and maintaining a consistent flow. 	

#### Alignment
Consistent alignment is used throughout. This is most evident on the accordions. They fall into place underneath each other, giving a consistent and clean aesthetic. The content within the accordions is aligned to fit perfectly in the container, with the main pictures filling the width of the container to leave no blank space.
All other features across the site such as the buttons, nav bars and about page maintain this consistent alignment. The use of flex box positioning aids in achieving good alignment.

#### Repetition
I have ensured that styles are repeated throughout. The same colour scheme of gold shades and charcoal as well as some white is used on all elements. This is also evident with the pictures on the site, all being black and white.
The colour of the text is always gold and elements grouped together such as the accordions and about tabs all follow the same design style.	

#### Contrast
The page titles, desktop nav and accordion headers use a different font to the rest of the content. This is to make them stand out and attract attention, clearly explaining to the user where they are and what they are looking at. The mobile nav font is larger than the rest of the text, grabbing attention when opened.   

The use gold is used to lightly contrast against the background, making content easy on the eye while distinguishing the text against the rest of the page. 

Another element of contrast is highlighting in the nav's active page and the active tab of the about page to show the user where they are.
	

The burger button is bright against the background to make it obvious to users that it is important for their use. This is also the case for the toggles on each accordion.		

## Code
In total, the site is comprised of four HTML files, three CSS files and four JavaScript files.

All code passes the validation and accessibility checkers. The JavaScript code produces no console errors when ran. 

All code that was researched was adapted to fit the needs of the course. For instance using let instead of var and using external scripts instead of inline ones.  

[9] inspired the animation on the burger.  
[10] inspired the nav behaviour.


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