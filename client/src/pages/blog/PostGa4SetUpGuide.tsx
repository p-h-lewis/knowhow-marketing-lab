import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Link } from 'wouter';

const POST_CONTENT = `<h2 id="ga-4-set-up">GA 4 Set-Up</h2>

<p>Google Analytics 4 (GA4). We're going to help you configure this and set this up and along the way you'll begin to sink your teeth into this great tool. <br>Want the Step by step guide? <a href="/courses/seo" target="_blank" rel="noreferrer noopener">Join our free course</a> and go to the Setup your Google Analytics Class. There we dive deeper into get you all setup and it is all free. <br><br>You're going to setup your Google Analytics 4 (GA4) We will walk you through the setup.</p>

<p>By the end of this article, you'll have created and set up Google Analytics 4 (GA4) tracking. You'll learn how to set up conversion tracking and you will be migrated over from Universal Analytics and have your GA4 tracking set up. <br><br>Most important thing you need to know, get your head is that everything in Google Analytics 4 (GA4) are events. And these events are triggered as users interact with your site or app. </p>

<h3 class="wp-block-heading"><br>Why is GA4 Important</h3>

<div class="wp-block-media-text alignwide has-media-on-the-right is-stacked-on-mobile is-image-fill-element"><div class="wp-block-media-text__content">
<p>GA4 lets businesses track users' journeys on their websites. It shows all customer interactions, from engagement to conversion.<br><br>Its event-based model and advanced reporting tools, help provide granular insights into user behavior and potential conversion barriers. <br><br>With machine learning and cross-platform tracking, GA4 empowers marketers to optimize strategies, personalize user experiences, and drive conversions more effectively than previous analytics versions.<br></p>
</div><figure class="wp-block-media-text__media"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Some-of-the-key.png" alt="GA4 Property SEtup - key benifits" class="wp-image-52051 size-full" style="object-position:50% 50%"
                  loading="lazy"
                  decoding="async"
                /></figure></div>

<div class="wp-block-media-text alignwide is-stacked-on-mobile is-image-fill-element"><figure class="wp-block-media-text__media"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Google-Analyics-4-Banner-1024x537.jpg" alt="" class="wp-image-52053 size-full" style="object-position:50% 50%"
                  loading="lazy"
                  decoding="async"
                /></figure><div class="wp-block-media-text__content">
<ul class="wp-block-list">
<li>Event-Based Model: GA4 uses an event-based data model, tracking each user interaction as an individual event, unlike UA's session-based model.</li>

<li>Cross-Platform Tracking</li>

<li>Enhanced Privacy and Machine Learning: (includes AI) and </li>

<li>improved privacy features, aligning with modern data protection regulations like GDPR.</li>

<li>Customizable Reports: GA4 allows for more flexible and detailed reporting.</li>
</ul>
</div></div>

<p></p>

<p> </p>

<div class="wp-block-media-text alignwide has-media-on-the-right"><div class="wp-block-media-text__content">
<h3 class="wp-block-heading" id="h-get-a-complete-view-the-first-place-you-want-to-go">Get a complete view the <strong>First Place You Want To Go</strong><br></h3>

<p>When you sign into Google Analytics 4, you'll see how customers interact with your business, helping you improve their experience and achieve better results. Google’s smart tools show what’s working and what’s not, allowing you to make informed decisions that boost the impact of your marketing. Plus, you can connect Analytics with tools like Google Ads and Search Console to strengthen your marketing and reach more people effectively.</p>
</div><figure class="wp-block-media-text__media"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/0i5WSLS0EbhvvCOmi9p67zcSmarUKMbjSmPR-1024x516.png" alt="" class="wp-image-52054 size-full"
                  loading="lazy"
                  decoding="async"
                /></figure></div>

<h2 id="step-by-step-ga4-setup-configuration-guide"><strong>Step-By-Step <strong>GA4 Setup & Configuration</strong></strong> <strong>Guide</strong></h2>

<p>How To Create,  install, Setup & Connect GA4. This is your How To. You'll learn how to install and get GA4 set up (Google Analytics 4) in a snap.</p>

<p><strong>Here are the things you will need to have access to:</strong></p>

<ol class="wp-block-list">
<li>Google Analytics Account (you'll need admin access). Account login <a href="https://analytics.google.com/analytics/web/" target="_blank" rel="noreferrer noopener">Google Analytics</a> or get <a href="https://support.google.com/analytics/?hl=en#topic=10737980" target="_blank" rel="noreferrer noopener">Analytics Help</a> for more info).</li>

<li><a href="https://tagmanager.google.com/#/home" target="_blank" rel="noreferrer noopener">Google Tag Manager</a> (you'll need Publishing Permissions - <a href="https://support.google.com/tagmanager/answer/6107011?hl=en-GB" target="_blank" rel="noreferrer noopener">Users and Permissions - Tag Manager Help</a>).<br><br>Go to Google and type <a href="https://analytics.google.com/" target="_blank" rel="noreferrer noopener">Google Analytics</a> into Chrome or whatever browser you use. If you already have an account, log in.</li>
</ol>

<p>If you don't have an account yet, don't worry; we'll create one.</p>

<h2 id="1-first-step-create-a-google-analytics-account">1. First <strong>Step: Create A Google Analytics Account </strong></h2>

<p>Jump to Step 2 If You Already Have a Google Analytics account</p>

<p>What we’re going to do first is we’re going to set up Google Analytics for the very first time.<br>We will create and connect a brand new Google Analytics property to Tag Manager. Once the code is on our website, we can send events about what our users do to Google Analytics for processing.</p>

<h3 class="wp-block-heading">Sign Up</h3>

<p>Go over to Google and type <a href="https://analytics.google.com/" target="_blank" rel="noreferrer noopener">Google Analytics</a>. </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Go-to-Google-and-search-for-GA-pick-the-first-result-1-1024x579.jpg" alt="" class="wp-image-52104"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>If you don't have an account sign up. It is super easy. You’ll be taken to the screen that looks like the image below. </p>

<p class="has-theme-palette-7-background-color has-background has-medium-font-size"><img src="https://lh4.googleusercontent.com/HuhtacCA6lIifk4DSAFrYJlnmXhenlRTDwco4MxNh5mQ6i5-0yHbE0kE74KorHLj0_WpS7zyFj0DY4bYkhqWrQWx-SwM5oS7XGIAXAEh0TgRuxbl1rPjR38xYvx64gN22s6w8meNHu5nAr8CqBhe_SI" style="width: 1402px;" loading='lazy'></p>

<p>Click the  <strong>Start measuring</strong> blue button. You can follow the <a href="https://youtu.be/PEPb3uaVILk?list=PLI5YfMzCfRtZ4bHJJDl_IJejxMwZFiBwz" target="_blank" rel="noreferrer noopener">beginning of this video</a> from Google too.</p>

<h3 class="wp-block-heading"><strong>Add Your Organizations Name</strong></h3>

<p>Add your organization’s name and check off the boxes you want to check off. Read what they say. There is no wrong answer here. Then click the blue button <strong>Next</strong> at the bottom of the page.</p>

<figure class="wp-block-image is-style-default"><img src="https://lh4.googleusercontent.com/CZ2PrITJyp1an75857ShapSWT4QVMUVNhutGDC1GpKc1kpowHoePERlPrC34YbhV9RnlDgVZRJ8WbmnHznaiqwzExAxzENuLoTPaQewNahnr4Phut9S7FIyy2cHRbPVvZ-8-y2Gpr6Q73mMj_OcQJMk" alt="GA - account setup - property details"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading"><strong>Add Property Details  </strong>- <strong>Property Settings</strong> </h3>

<p>You are automatically taken to a Google Analytics 4 property setup detail area.</p>

<ul class="wp-block-list">
<li>Add “Your website Name.” As the property name</li>

<li>Click all the boxes</li>

<li>click next </li>
</ul>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/New-Account-Details-add-setup-GA-account-1024x613.jpg" alt="add business name & click boxes and click next - GA account setup" class="wp-image-52105"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Add the property name, select your country, time zone and currency. <br><br>Add your property details to measure your web and app data, create a Google Analytics 4 property. Then click on Advanced option. If you click on the advanced options it will pop open a window telling to that the Universal Analytics property will stop working so ignore that advanced option. Click next.</p>

<p> If you do want to click on the advanced options you can. Just add your URL and click on the boxes you want.  </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Create-a-property-GA4-Property-1024x576.jpg" alt="GA4 Setup property options" class="wp-image-52106"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading"><strong>Advanced Setting Options</strong></h3>

<ul class="wp-block-list">
<li>If you do want to click on the advanced options you can. </li>

<li>Toggle on the setting top right. Then add your URL and click on the boxes you want. </li>

<li>Add your website’s URL (your domain)to the first box. Currently right now it is saying create both a Google Analytics and a Universal Analtyics property.</li>

<li>Click next</li>
</ul>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/SVn5u_Jk1TuJUZA03eByl2DH_QWTyVuKNDYQSkW4GP-eOSY3pT8zQaWcYGEKzroay4kr3x3RKQPkatUoneyJKTSMSh7rsEW4lsoAc3SWJ3neJSM2i28FntlqBsjR45rSfW1-jsPT6uOJnXmC5dXnAFI" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h4 class="wp-block-heading">Business Information</h4>

<p>Fill in your business information. Category first, you have to pick an option that is there. </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Industry-category-GA4-property-setup-1024x606.jpg" alt="" class="wp-image-52109"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p> Then add the size and hit next. </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/industry-category-and-business-size-GA4-setup-1024x448.png" alt="industry category and business size - GA4 setup" class="wp-image-52110"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading">Reporting Choices</h3>

<p>Choose your reporting. The last option can't be combined with the others. You will be able to add and see reports later so it doesn't matter what you choose. Your choices will be based on what you included as your business category.</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Choose-personalized-reports-GA4-setup-1024x547.jpg" alt="" class="wp-image-52111"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Choose your reporting. The last option can't be combined with the others if you choose it. You can add and see reports later, so your choice doesn't matter. The reports you are offered are included because of the business category you chose.<br><br>Click create.</p>

<h3 class="wp-block-heading" id="mat-mdc-dialog-title-0">Google Analytics Terms of Service Agreement</h3>

<p>You have to agreen to Google Analytics Terms of Service Agreement.<br><br>1. Select country/ region.</p>

<p>2. select  "I also accept t"he <a href="https://privacy.google.com/businesses/processorterms/" target="_blank" rel="noreferrer noopener">Data Processing Terms </a>as required by GDPR checkbox an </p>

<p>3. then the 2nd  check box that says you accept the Data Protection Terms. </p>

<p>Then click “I Accept."</p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/5H1VkBuz6jDFNweq3zAwUykQ05jlzxLOzPcGRwWx5ouhy5VwiYppNYXub8Ro65bZYbrrPeg-Ju9PdXvXxvlbVmXZOFM7Oug_EgaAW-EaRnPI6YVD0bXPt6hWg34YhkkQ27hPEIq5RX3HctIr9mwmP-U" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You just set up your Google Analytics Account and a Google Analytics property! Bam! Pop the cork! You did it! Please have a quick break. We need to get your data stream set up and connected.</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Step-1-complete-setup-a-GA-account-GA4-property-1024x416.jpg" alt="Step 1 complete - setup a GA account & GA4 property" class="wp-image-52112"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p><br>Choose a platform - choose web. Add your website and business name. </p>

<p>We're going to setup the Web data stream <br><br>Two windows will slide open from the right to left to see options. All we want to do is grab a piece of code and save it. </p>

<p></p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/CREATE-STREAM-SETUP-DATA-STREAM-GA4-1-3-1024x348.png" alt="" class="wp-image-52119"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p><br>Click create stream. </p>

<h3 class="wp-block-heading">Data Streams</h3>

<p>You've already created a Google Analytics account and a Google Analytics property.<br>And once you do that, you're going to end up<br>on a page that looks like this. And it's going to be saying that, hey, we don't have any data right now.<br>You need to set up a data stream.</p>

<h4 class="wp-block-heading">What is a Data Stream?</h4>

<p>All that data stream is is a source of data that we're going to feed into Google<br>Analytics for processing. Then Google Analytics can use that data to provide us<br>with reports, which will in turn provide us with insights about what's happening on our website.</p>

<p>A data stream helps us understand what's happening on our website. There are two types of streams: web streams and app streams. In our case, we'll focus on websites.</p>

<p>When we create a data stream, Google Analytics provides us with a small piece of code. We need to add this code to our website to start collecting data. <br><br>From the moment we add the code, Google Analytics begins collecting information, which will be used to generate reports for us.</p>

<p>In summary, a data stream is a way to send data from our website to Google Analytics so that we can receive reports and gain insights about our website's performance.</p>

<p>If you click on the <strong>Cog</strong> you can see enhanced measurements being automatically collected. </p>

<h4 class="wp-block-heading">Enhanced measurement</h4>

<p>Automatically measure interactions and content on your websites. Data from on-page elements like links and embedded videos.</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Enhnaced-measurement-options-GA4-1024x605.jpeg" alt="" class="wp-image-52117"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>What we can capture as an event page views (as an event each time a page loads or the website) This one isn't optional.</p>

<p>Scroll events each time a visitor gets to the bottom of a page, an outbound click event each time they click a link that leads them away from your domain(s).</p>

<p>View the search results event each time a visitor performs a search on your site (you need to have the search feature). Form interaction Video play, progress.</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/CREATE-STREAM-SETUP-DATA-STREAM-GA4-1-2-1024x348.png" alt="CREATE STREAM - SETUP DATA STREAM GA4 " class="wp-image-52115"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Out of the box this is super powerful. So click that create stream if you went to the cog first. </p>

<p>Two windows will slide open. All you need to do here is copy some code. and honestly we an come back and do that. So X out of this (X is beside instillation instructions).</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Wbstream-Details-Google-Tag-Instructions-from-GA4-1024x608.jpg" alt="" class="wp-image-52118"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You can If you want to go grab the code hit install manually. You can also play around here scan your site with the scan button or choose anothe installation method. We're going to do the manual version. Why? because this way we insure we know the exact process and know where thing are and what's been done. Plus then we can get out of here and have the first part of the process complete. </p>

<p>Copy the GA4 Id tag - we need this because this is the id we will use in tagmanager to start connecting data. That being said we can easily get back here when we need the code.</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Copy-the-GA4-Id-tag-we-need-this-because-this-is-the-id-we-will-use-in-tagmanager-to-start-connecting-data-1-1024x471.jpg" alt="" class="wp-image-52122"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>X out and then you'll get a screen that says complete. </p>

<p></p>

<h3 class="wp-block-heading"><strong>Property</strong> Options<br></h3>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/home-screen-Google-Analytics-setup-1-1024x605.jpg" alt="" class="wp-image-52136"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p><strong>Start Here If You Already Have A Google Analytics Account.</strong> Login to <strong>Google Analytics</strong> (If you're not already there). You'll be taken to your home screen.</p>

<p> If you have multiple accounts, select the account you are looking for. You’ll see options in a drop down menu and there is a search bar.</p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/d9M4a-vGjUm2V0woqcQUJNiz4tRgXO5fmC6op2KoQsAcktm1avoZ1SheKjEeyRpVEHA8PIA1LjVeSHJBcIDGvUMpHPfsWQVH0zXQYCu_O2PcJdB2Xu5PLATyIXnud8WfJ7J8DqUQPgG1knJqcHY3Cls" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>To set up GA4 (Google Analytics 4 property) in your Google Analytics account, click the cog in the bottom left to get to your admin settings.</p>

<p><strong>You will only see 2 columns if logged into your GA4 set up Property. </strong></p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Cog-to-open-up-the-admin-panel-GA4-setup-1-1024x603.jpeg" alt="" class="wp-image-52138"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You'll likely only see two columns if you log into Google Analytics and you're in your GA4 property. (the picture below could be slightly different from what you see) Click on you GA4 property.</p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/GA4-admin-page-2-columns-2-1024x625.jpg" alt="" class="wp-image-52140"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Now click <strong>See your GA4 Property.</strong> Connection done! </p>

<p>Go to the vertical menu (column) to the left of the main window. </p>

<p>Right under Property Column, click the down arrow. If it has the UA before the number, you're in Universal Analytics. You're in the right place (the GA4 Property) if it has a number only. </p>

<p>Pick the property that <strong>doesn’t </strong>have a UA in front of it.<br></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/w7C1M77kyN6kG0vQDzYVn-wvaRWXZnZPat1xiE23b2IazrXhEHPrA8LiVBjNkAWCh7GdVdOGzkGH2_moEEY8O6rMvwLWdnD-kCTMn-qvbb-zRw9W--btqKQ-TXmxnH8FnQYqSX07AdrNppfX_oKf_s0" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h2 id="second-step-setup-signals">Second Step: Setup Signals</h2>

<p>We're going to setup signals. Now you can setup signals when you setup an account or when you go to the gamification stage of the setup. I do this step when I setup the account. But choose what works best for you.</p>

<p>This is a must step, a must do. Because it is what helps you gather data so when you create audieces you and then you can can market to those audiences. But you need a list of 1000 before you can do that. </p>

<p>It is easiest to set this up when you're initially setting up your account. Or if you have already just connected everything you can do this when you're doing the gamification migration. </p>

<h3 class="wp-block-heading">What are signals in GA4</h3>

<p>In simple terms, signals in GA4 are the information gathered from websites and/or apps. When you're website visitors are logged into their Google account and have chosen to personalize the ads having signals on will allow the tracking to add them to the lists you have setup. Using Signals helps Google understand your users preferences and provides them with with more relevant advertisements so we definetly want this and because audiences will be super easy to make in GA4 we want to organize this so that we get the most out of our signals. </p>

<h3 class="wp-block-heading"><strong>Data Settings, Collection</strong> & Retention<br></h3>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Setting-up-data-streams-first-GA4-setup-1-1024x607.jpg" alt="" class="wp-image-52144"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h4 class="wp-block-heading">Data Settings</h4>

<p>Now we head over to Data Collection. In the vertical menu, click “<strong>Data</strong> Settings.” Then select <strong>Data Collection</strong>. This will open up the data collection window to the right of the horizontal menu. </p>

<p>Click on the “<strong>Get Started </strong>blue button. </p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/5UhBjL63kwI04nujjdKJCQ634fVu401S9SXWQli2deB40XeSlo4QKa5iifQZfdjyc8XUP980BWjnMPVEsT4YcQSn-jtFj6MzaP6XERO8Cvd3wW536MoUD2oQBZrhItFZ97PNvxPN1aMCUJ1I-DMuAJY" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>On the next page (the Activate Google Signals page) click on the “<strong>Continue”</strong> blue button.<br></p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/n7lQuLlc04DhaY3JWWG8zvmLuSXjQT8Uv--4RCRl7exxGbDS5kg-sDx8gRBySzn4fvkaSyCXgpFlJa9nAbbNJnbovTI5JUkxlC20JkPUaf1PpCTpHfQnbWWk_rfPmCIzALLTRig9hLaOMhAEkv-tk-w" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Then click on  <strong>Activate</strong> to activate the signals.</p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/bMUp0wkOSkZGYj3CL31q21-MUkHGQn9JJxfReWnXIiSOwpPm5ZdtK8SejBMXRTo20wHXAD00J6-Sj4xcUdDSIrGUIB8AuBL3YYNPR-2rmkONNPW7t9m609hJLirmng1GYGqPa3S0oUQaVdCwsa8hW1E" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Your Data Signals have been created. See the small toggle at the top of the page.</p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/nz-Hbgwm1_SUhCkF8hh_dsSSgZ-OaQGz5x07eBfz4v5kHFK_n-pVjvH_0WGJZDIH3PepuRTnMaphNn3Dx27EBKmdszcls7cXfgWj2k1h_PNgR9oQG_bc5k31G-Ua4KZh3ns4-7_1LWslpTg4A66zk6U" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h4 class="wp-block-heading">Data Collection</h4>

<p><strong>Google User Data Collection Acknowledgement In GA4 Set Up</strong>. On the data collection page, go to the 2nd box with the down arrow on the right. The box that says “User Data Collection Acknowledgement.”</p>

<p>The arrow will open a drop-down for the “<strong>User Data Collection Acknowledgement.”</strong></p>

<p>Click on<strong> “I Acknowledge.” </strong></p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/1KD_KCm0jVdrf8iStBOrckC6Zgud0qIocVGGkBi13LkrcmvWuaNMPjXH2ANEVrsHO0dK1O2WhwAYAs2PYL5ZKGWjSusoVhsBcy-IZdaqeWJeTpljB2fd46LVsKfLqd-9qKtzaW7AxQlCVC3Rf7piUzo" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You’ll get a green text that says<em> ‘acknowledged</em>' after you click the <strong>I acknowledge</strong> button<strong> </strong>It is tiny text, but if you’re paying attention, you’ll see it. </p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/aXqJbYO5TdoUgLc3dMWSvoiRQB8U8BFBJirvtyqRO5po4FylJEVCMV2D5sONHmEZAO5yKTdkl938V6iKVig3fW4uXc79G3AXVsPc2JXrtTpCi2ca7lunebDNnl7Q9I4gLeywllcMn3uOWhzuCB1TgXc" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Now go back to the GA4 property Data Collection and click on <strong>Data Retention </strong>from the drop-down menu. Change the <strong>Event Data Retention</strong> from 2 to <strong>14 months</strong> and click “<strong>Save</strong>.”</p>

<h4 class="wp-block-heading"><strong>Data Retention </strong></h4>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/zXeacZhYsDeT0vJuW7dnGVB350YQPBLHzOKrBbZuN8p1C2yrm1EGIVtTRypciVdTEGGxHNXABqV67L0AEzxnEUtYCUOSO88GdLzADFlynG_483s4aNq5nYsqCUWWrymb2CSHmcXi1yz-S5s0JHkX9i0" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Now we’re mostly done configuring the first parts of GA4. </p>

<p>You can stop here, have a break or get your measurement ID and save it to add to Tag Manager when you are ready to connect Tag Manager and Google Analytics 4. </p>

<p>Our next step will be to get your measurement ID from GA4 set up and go to Tag Manager. </p>

<p>Breaks are good. Bookmark the page and come on back when you're ready.</p>

<h2 id="third-step-data-stream-setup">Third Step: <strong>Data Stream</strong> Setup </h2>

<p>In this step we are going to be using Google Analytics and Tag Manager. <br>In the <strong>Data Stream</strong> and click on greater than arrow and copy measurement ID at the top right of the page. </p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/XAY46AKoj77q8q_cpVYMM1q-KntYWAMGLSgxkEvUJOQTeC-AONxd_uoqGStewom-fJXlfYZaf7OhXYak895ct-Az8mGjj3w5tno4XjRwrocgmDvHpm7NWmxzY7xvHAuvkr7EHDY8Wq7fOAGcvRDreiw" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h4 class="wp-block-heading"><strong>Measurement ID</strong></h4>

<p>If you’re still going or coming back, copy the measurement Id from the Data Stream page and save it in your text editor or somewhere.</p>

<p>Or just come back to the Data Stream section in GA4 when you are ready to insert the code in Tag Manager.</p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/wgkybJiNtRZWFeRtLQgxyIBwszHkN_L87zhFO4SP3vrKO44QsITHIcAQsH52RdbQxS6ejTS06qUHvC-K-8OM1PplGznU6je9t6qeHS3wXixUDdAQqeFnEjK__ykdLsnMT11HBV9lGnOgKyIY1qLZ8CA" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Now Go to Tag Manager. You are ready to connect Tag Manager and GA4. If you are taking this step, you need a Google Tag </p>

<p>Now Go to <a href="https://tagmanager.google.com/#/home" target="_blank" rel="noreferrer noopener">Tag Manager.</a> If you do not have an account, you’ll need to<a href="https://support.google.com/tagmanager/answer/6103696?hl=en#:~:text=In%20Tag%20Manager%2C%20click%20the,to%20the%20Terms%20of%20Service." target="_blank" rel="noreferrer noopener"> set up an account.</a></p>

<h2 id="fourth-step-connecting-tag-manager-to-ga4">Fourth Step: <strong>Connecting Tag Manager To GA4 </strong></h2>

<p>What you need access to</p>

<ul class="wp-block-list">
<li><a href="https://tagmanager.google.com/" target="_blank" rel="noreferrer noopener">Google Tag Manager</a></li>

<li><a href="https://analytics.google.com/" target="_blank" rel="noreferrer noopener">Google Analytics</a> </li>
</ul>

<h3 class="wp-block-heading"><strong>Create New GA4 Tag</strong></h3>

<p>Sign into your Google Tag Manager account, and select the container for the website where you want to add Google Analytics 4 tag. Once you have signed in, you will be on the Overview Page. Click Add a new tag or New Tag in the center or click on Tags on the left menu. </p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/UoAdLFiczpqQV0ARHI8Nlu95fUB74z4U2REaSU8A0wKtLQAmxkL8oJvKmrmlVIs4HZx0mcFcC06IeqoRRksz9Fkx7anD4YR6yJutI_DkA9eAdz1IlSYn0mkl5j2RFKzXgX4sQfEeQmfOB3tHjmz0-Ls" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>If you click on <strong>Tags</strong>, click on <strong>New</strong> in the Top Right Corner<br></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/h4m4zsPR8yCevA87tLyKMcpcTsgqwQg9l5Q8V_e6Tn2SoevPj8K4ykoqivjVKYqCufcQg_SvG-yeYxMfa_AKKpTrzjVIdmpCagnH0xowZ5J1uWUuhoiQtCz7XA77f_4tEaEShhrBtV3xisjOzgT7Tyk" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>On the new menu, click on <strong>Tag Configuration.</strong></p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/4goXiTMQOrVKFlNgWU48Ft08Na0dq_H7DpQsP3rKvaM0q4T3rjmifPi5WmvE8vmENbXsVIjP_tf9VBSMPxe0yQkf1XLgOpUOihOaZ8K1bmuEebfTw4n4JqpYoFUrPSPdgGSdgDdfkGUu1aM5xUN-imk" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>On the new menu, select <strong>Google Analytics GA4 Configuration.</strong><strong><br></strong></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/aslYVK3TcjJG_uTPO7FP9C7EMQdfoLJKTBGbEHKcJa2j4tq-YfG9uMrFvWBnp4fd372j7jAG2TD8MvjxXRMrVVIB3hE4CE0YG7dyLsI2buLTF386Uum5kA6ayko6V_weZY-h_2VRxe2_qIZ7xzKEYNk" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Now we need the <strong>Google Analytics 4 Measurement ID.</strong></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/7W2kNnxp6amf-t8nOIf070z8YwVK_K2Queve41kGn24KX8_Ad9O_BODBmmcuN1EiFu9RK6BjmNlLboR0v3BZu0FxMTo__0scFvRymhgENesnowBlhA1gIMyoL9kv-qc9zJtITMy6FnCo07uQEpXfsuI" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading"><strong>Find The GA4 Measurement ID</strong></h3>

<p>Go to Google Analytics. Click on Admin in the bottom left corner</p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/efTpjX7aOdbrKSvh8_LCwH762U5LGY4AXJk5yLQhJo3jLDjWCd86v2WWFzH4uO1b-Aykoe1hLft0t0f-3KavIQC3k81-alAc4r6zOSTKiliNP7d7rGvSA0XKE-Xm2_EejwjlJtBTjl7CqKQqHCsOT4A" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>On the <strong>Data Streams </strong>menu at open click on the arrow at the right side of the website name.</p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/ZfzpVP80VBT_8adENYOfXqpWVNv9OriuSkVyFMdp2OP7gwWRv9ygvOkGpBXnsFHW9TRgMLh6zxOfN_BCdZp2IbjSEng1pzheaYr3xSTUOR-2gbQoZOcYs_mY321Ax53O8j3Lrf4Ro5O-2v7ou7PljzI" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>On the <strong>Web Stream Details</strong> page, click on the copy icon on the right side of your <strong>Measurement ID.<br></strong></p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/fDmK9aOCEivLwvU4YfAci7-LU_-Goph4eVUvZX0w8xBib85VO_W3tYg5fqx8kNsBRTGuHIO_CawRhpQAX7BRSkrAWEleibae8PX8LhbhTeDV1MR3NDzOGB7ITufi4MeeiCbWaGa00LLjRQZhQzUsHgo" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading"><strong>Add GA4 Measurement ID & Publish The New Tag</strong></h3>

<p>Take the freshly copied <strong>GA4 Measurement ID</strong> and paste the Measurement ID in the spot on the Tag Manager Tag.</p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/q07p1Ik6ikN2gF15n2PvJPU0mcpwLjAQMFwmZYfEvaWvy9mijYkBE7bpSbhr9lbzwDQ8MM4SfP_QUNlDAHxlVHNvRZYTQdkRVeZmQBg4MlSSw_oidqMdL5j1w8XpxWfj6v38TxifPQaPa4pOda_WVQs" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Go to the <strong>Triggering Section</strong> and click on the section.<br></p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/DPuVcpalM6o1P7IMtrbzN1e0GRIHD_dDrWS5inAM_Oact_9a_WgAH4a4YKkZsp9ysavI9_PXGfMIDVGbbg3nDg9o63Dn6Hag3PU_yOn88FonPclNxTBpYAG80DKJEdpS9PU6pJ2Qb5UW4gqnvamUBFM" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Select the <strong>All Pages Trigger</strong> since it is the GA4 Analytics Tags.</p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/B0DqVCjDwqZTMW8KEK642fSIOLzV5j883ohXscbiJCkyiQYZrCM2iI7MXct5zqq4L3hyq1q90Hvf3fOkrq9jSwCY0nJYjxBjLu4eZ8LHQ-NFZwqai07sAfiUkrV36W93YgowLwoM6lzGC3Z0oXi0AeA" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Now click on <strong>Save.</strong></p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/ch6lfZbBz9a0deRziSmL0Lu3ShBypis4TxmWQCQ-vO2fd1zzneNE6BAc2TtFpUr867E1jxs9pkeM8PsJ3VDCUyo_4Ks0NnqYhV1JcmW2a9c_GtJLXK3zAEHKyJlz6SKUq7qpDrAaGL2YM_wAjUhGvhI" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Click on <strong>Save</strong> again since the name isn’t perfect it is unnamed<strong>.</strong></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/xsyfU0_mnAsn27jIKeMwBv_szCIYgo-TH7Rh-L7ECegta7m4YTSgoNyQJzyaZl89JqzF8qDLNjcYMvWtfQ78FIZbejZXxVfiWKTSiOWXkMSGWwWSfSsK38QhMJaLcq2GugAMU6yQ2pGSEfg_r_i6Gtc" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Click <strong>Submit.</strong></p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/xrL4d8taofEOCpdu712z5HRnm41NsuvKiS3EKuDTTcEmrGtskGUWrnHit71Oe2ddk1UofHSTZUrtQuGjMe5DFJX81YGP2sUyagSFVOqpM2vjFPZF3bw0-59Izy68XbFCZ5pPD4AudG_TY6kBKLPD5Ik" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Add the name <strong>Added GA4 Tag</strong> for the Version Name and then click <strong>Publish</strong>! You Are Done. You have GA4 set up (Google Analytics 4). Now You Can Collect Data. Give Yourself A Massive Pat On The Back<br><br>Now if you have any questions, don’t hesitate to reach out and <a href="https://seymourdigitalmedia.com/contact/" target="_blank" rel="noreferrer noopener">contact us</a>.</p>

<h2 id="fifth-step-setup-assistant-ga4-gamification"><strong>Fifth Step: Setup Assistant & GA4 Gamification</strong></h2>

<p>So Google is pushing us, and they've gamified the setup assistant. It makes it fun. Now that you have data flowing and you've had it flowing for a while. </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/GA4-complete-GA4-setup-1-1024x905.jpeg" alt="" class="wp-image-52167"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p><br>Everything is connected & everything is flowing let's go back to Google Analytics get the rest of this done! and mark things off as complete. We will go down the list in the middle of the screen. You can find all the settings in the column to the left of the main screen. </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Gamification-Ga4-setup-1024x817.jpg" alt="" class="wp-image-52151"
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You know how to get there. Go to Google Analyics. Sign in. Hit the cog to get to the settings. Click on your GA4 property and click on Setup Assistant in your property column.</p>

<h3 class="wp-block-heading"><strong>Data Collection</strong></h3>

<p>Mark Data collection as complete (because we've done it - see above). Now make sure you're collecting data first.<br><br><img width="602" height="271" src="https://lh4.googleusercontent.com/LbshWrQ-W3zAeIWjb2WdSko2P-hUcQ9hgeTilBkfNvSFfq99Ohmx0vCRZUKrhMnOVF3zGg436OXZFIqR5NNcoZTKRHTknyvxW7He75PU-G80MxhbKKSofs4Qkv6P8Vtlf_NlVJcNlyJZhPvcUeqFDNI" loading='lazy'></p>

<p><br>Mark Data collection as complete (because we've done it - see above). Now make sure you're collecting data first.</p>

<p><strong>How?</strong> It will say data is flowing. Click into your "manage data streams" if you want to see more. We're going to click compltee. <br><br></p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Data-collection-setup-assistant-complete-1024x429.jpeg" alt="" class="wp-image-52165"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading"><strong>Property Settings</strong><br></h3>

<p>Data is flowing, and Signals are on. We turned them on above in step 2. If you haven't seen that you do the same thing as above but for property settings. We have 2 out of 7 done or complete. </p>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/image-1024x415.png" alt="" class="wp-image-52152"
                  loading="lazy"
                  decoding="async"
                /></figure>

<iframe src="https://www.youtube-nocookie.com/embed/dPJAVZodEtM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen;="" width="560" height="315" frameborder="0"></iframe>

<h3 class="wp-block-heading"><strong>Events And Conversions </strong></h3>

<p>Events and importing Goals as conversions in Google Analytics 4. Are you ready?GA4 measures events as specific actions or activities on your website or app. This is different from Universal Analytics. An event can be a purchase or a form filled out, or something else.</p>

<p> Some events are configured automatically (we’ll want to turn some off), and others are not. </p>

<p>Remember enhanced measurement recommendations? (see above) in data collection? </p>

<h3 class="wp-block-heading"><strong>Two Other Events To Note</strong></h3>

<ol class="wp-block-list">
<li>Recommended events - these are predefined, but you choose to implement them. Not all may work for you.<br></li>

<li>Custom events you define yourself. You select names and parameters, and you can collect specific data specific to your business. Google Analytics does not set these up.</li>
</ol>

<h3 class="wp-block-heading"><strong>Events as Conversions</strong></h3>

<p>Are you ready? Things may get confusing because they can be confusing. I'll work hard on making it simple for us all. </p>

<p>We can and will mark certain events as conversions (similar to Goals in Universal GA). </p>

<p>You had goals in UA (Universal Analytics), measuring how often people complete specific activities. We can take events and pull them in as conversion. These will be called conversion events. Yup, remember I said it was confusing. Over time it will make more sense.</p>

<h3 class="wp-block-heading"><strong>What Is The Difference Between Events & Events As Conversions</strong></h3>

<p>GA4 events are triggered as users interact with your site or app. It could be anything, a scroll, a click, a form filled out. Using GA4 set up event conversions allows us to flag any events that contribute to the success of your business as conversions (for example, a lead or a phone call). Whenever these flagged events are triggered, a conversion is registered in your GA4 property if you set up the Conversion Events (Usinging Tag Manager & GA4).</p>

<h3 class="wp-block-heading"><strong>Why Do We Want To Track Conversion Events?</strong><br></h3>

<p>Reporting on conversion events lets us track/measure events that are important to us. And tracking these specific events can help us measure return on investment with ads campaigns, and you can also bid on these conversions. </p>

<p>All you need to know or get your head around is that Goals in UA are conversion events in GA4 and configured in GA4 with the help of Tag Manager.</p>

<p>I know it is a lot, but between Google migration series(<a href="https://www.youtube.com/watch?v=j42_2A81F3E&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Migration Series Day 3: Events and conversions in Google Analytics 4</a>) and what we are doing here, we got this. </p>

<p>We are going to mark our target events as conversions. </p>

<p>To recap quickly. Events are measured in GA4 set up. We turn our most important events into conversion events. </p>

<h3 class="wp-block-heading"><strong>Migrating Goals Into Conversion Events</strong></h3>

<p>You can make conversion events (which we will do), or and you can migrate over events from Universal Analytics which we will do.</p>

<h4 class="wp-block-heading"><strong>Signing Into Google Analytics (GA)</strong></h4>

<p>You may get an image like this or a big countdown timer.  It is stressful and annoying. Ignore it. You are seeing this because you are in Universal analytics. Hit skip. If you click on the <strong>No</strong> radio button you’ll go deeper into what you <strong>don’t </strong>need. Click <strong>Skip for now.</strong></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/oKfHh0yStnyMSeuhF4YWqaBz7FxtUJ8XanABMUYM4AkqRagHbOL0yU9K8Als8oeodXbCLOoADqmZK08zzBduJq2DMDWCSGPIrEOIOFAA_Qsj8P9Pzxj_R-JNWR6_e3WQUfqsboS9oYfxiVFGMi9UzjM" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>If you get the pop up just click skip. Where to go - Cog bottom, left-hand side.</p>

<p><strong> Admin > setup assistant. </strong></p>

<p>Now things may look different to you. We will try to cover each scenario. So, don't get stressed if the pictures, screens/videos differ from what you see. Just click around. </p>

<p>Things are moving quickly in GA4 set up, so things move around. This is also a great way to get used to the new software. And, of course, if you need help, just ask.</p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/LBebpK2IZcyLLH64cKncnqNq2NW1udhWDDvYCuZNtlioiI0eBofKpPgwK0z3GWHSl4zUYyxCy-AOVNrizdjlZZY7cAC9OFnEMl1x8yM-KaU78LoOFRsQlwKpkGg921p_kF6Wp6In8DhCYNmBAwrP5-w" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Once you click on that setup assistant, a new window will slide open from right to left. Go to Data Collection You can get to it in the middle of the screen or down the left-hand side column. Mark off as complete.</p>

<h3 class="wp-block-heading">Setup Assistant - Data Streams</h3>

<figure class="wp-block-image size-large"><img src="https://seymourdigitalmedia.com/wp-content/uploads/2023/06/Data-collection-setup-assistant-complete-1-1024x429.jpeg" alt="" class="wp-image-52166"
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading">Setup Assistant - Property Settings</h3>

<p>Turn on signals! we did it above! now we're just checking it off</p>

<p></p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/C0sTTxAhdER6CRxBQw3HIKnJUPTeH2D8Fc6VRMbuEnQ2dIp0HkJR89lI6F1VQwWVUgLKIrnI5U6atC8bri7rkOm4-Ujf9xajVctua-FBIhk8MZCIiFKrcJkwltDFtIrWutdPG1-ec700nVMNOLkc1BA" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>A popup will appear above if you hover over the “Not started” text. You can see the turn on Google signals. Once turned on the pop up menu will say GA4 signals turned on GA signals turned off. </p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/gMS_GwDRUhZFkYtnn0HmYVVAiPcoOHiA2CbCqsv7PZvBugaV2g0ZNNQpb46PHldm_F8t0Yycbhsq5fQwZ4SjkdqqWKhd_Qp3cTx_r6BTCUVVcpXEqu2bELpk-OCima5K9Oaw5E7yPn9i0NU9EhiWNX8" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>Mark it as complete using the drop down menu and watch that gamification bar.</p>

<h2 id="set-up-conversions-property-settings"><strong>Set Up Conversions</strong> - Property Settings</h2>

<p>We are setting up the conversion configuration, not the actual event data from the website. </p>

<p>That is entirely different and done by Tag Manager. That is a mouth full, and getting my head around was hard for me. Just know the steps you do in GA4 set up are only half. We must go to the Tag Manager to check/complete the setup. I mentioned this but don’t worry about this right now. We will get to that. </p>

<p>We’re going to go through the 3 options. You might only have 2 options.</p>

<figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/4gE2mJrZ7Wo3F6zhBWV3Kl1ClqnT2rKKRx1j7oBwwNtJeMZm6xNQKuROD0uhkSlCB6NbAuN2am_caYTMazB4pTzETukxaQZqAac7qc51IxjBCcdgPsGZjtY518_VZuWIG39Hx3ZrQzwR8lCYsRBL5eQ" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h3 class="wp-block-heading"><strong>Import Goals From Universal Analytics Google </strong></h3>

<p>Import goals from Universal Analytics Google are what we’re doing first. You will only get this option if  Google Analytics setup assistant is able to copy your UA goals into GA4 as conversion events.</p>

<p>This can save you time in recreating your property goals, You will still need to set this up in Tag Manager. We will have a video for you below.</p>

<h4 class="wp-block-heading"><strong>Import Existing Goals From Your Connected Property</strong></h4>

<p>You’ll do this if you already have goals set up in universal analytics. This can be easy, so let's give it a go. </p>

<p>Click on the import from Universal Analytics</p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/VDV6xXM5xMJPRCtUHLLvMZezjMw7iKeeNfDCrpQ1neTCAp39ZiowZJma1JOEs485BiP1DP_3EglqbPM8TAKXZbT0bMXjT8BtNk6LiGP5VvRWmAge3wQeUBpLoAj8jYcqo3VImw1idGHHnzQuofkOsxk" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>A window will slide open from right to left. Showing you your options. Review them and hit the import button, Top right. </p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/tI4G8V5OKjFsU0g5S9y9jTNfg9a9Z2TZRJzx0cvVwY_EC8uXyy_732Qx5AtMGmZlvH0NYEG8rbuFz8eycUQeLp3NwAvQTnW15TWwJpttCw4WgoMTtinghHtEpJMh0BSyvbjoN-gYqa7qVK26xbM6ld8" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You might get an error message. What is this all about? </p>

<p>If you click on the learn, Google will give you options, manual options, and more. It needs to be clarified. Really from my understanding, you don’t have to worry. </p>

<p>What you’re doing when you click on the “continue anyway” is telling Google you will let them configure it because it has not been fully configured/connected yet. It will all easily work out, I believe. </p>

<p>Bam! It takes you back to the setup assistant, and if you click back into the conversions, you’ll see faded-out check marks, meaning you’ve done it and can’t do it again. </p>

<p>We imported the Goals into conversions. They have been imported as conversion events. Let’s go see it. </p>

<p>Now we can go to the conversions tab to see. Initially, I went to the events tab and clicked off the email sign-up, which entirely disappeared. So if you make a mistake like that, you’ll just have to create a conversion event. Not the end of the world, but maybe don’t do that and make your life easier. </p>

<p>Below are the completed goals brought to conversion events. </p>

<figure class="wp-block-image"><img src="https://lh4.googleusercontent.com/01p4StoDuFfxXuSZv81tq9ed7xb2jvmBJK89DvIHB0JQ8kf4SLa_QtBd5UutVLiANyRnDf9e-g4gw1UIi4OmBJEGHgKuVqgpEeDfJrI74R_Mh0x3CzSDgIWSnGr4USDWcVIO4CtOfwesYzwYOjoR3uk" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>You can see if you compare 4 were migrated over, and below there are 6. Two booking calendar events (weird but okay), the purchase event (which is not optional). And the signup to the newsletter needs to be there because I made it disappear by going to the events section and turning the toggle off.<br></p>

<figure class="wp-block-image"><img src="https://lh3.googleusercontent.com/Mg4ZXiXkxcY-3qRK6QcqCVsUB4A5RXLUAZd1foGD6jvuKMw4_bWch5AW7rXWfmJoHcd_s-5BpxCpgAV9JeBUbZpO3mDLvtBR_Zf0-8Nj_i2tL9VehkNAfBxsjpHu9_oYj-P6wS3SxK05ZA3HyjAIy_8" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<p>So Goals were imported, and now we can see them as conversion events in the conversion section. </p>

<p>We will toggle off the file download as a conversion event because we don’t want to measure that as a conversion. This is a personal choice. You will choose what is best for you. We can make that an audience and retarget to a list that way. </p>

<h4 class="wp-block-heading"><strong>Troubleshooting</strong></h4>

<p>I disabled the option by toggling it off, and then it disappeared. We also toggled off the 2nd calendar event because we doubled up doing the migration. You, of course, may see something different. But you may also have to troubleshoot. If you have questions, join our <a href="https://bk3wb95ynz5uaen0kg00.app.clientclub.net/communities/groups/know-how-marketing-lab/home">KnowHow Marketing Lab Community</a> and ask us. </p>

<p>Now that you are ready to accept conversion events, of course, that is once you’ve confirmed the GA4 conversion tracking setup in Tag Manager. We have to make sure we’re collecting data in Tag Manager. </p>

<h4 class="wp-block-heading"><strong>Manage Conversion</strong><br>Back To The Setup Assistant. We Are Just Checking Things Off.</h4>

<h4 class="wp-block-heading"><strong>Go To Property Column>Setup Assistant>Property Settings>Manage Conversions</strong>. Manage Conversions Is Where You Go To View And Edit Conversions.</h4>

<h4 class="wp-block-heading" id="h-"><br><img src="https://lh3.googleusercontent.com/adwYXxhus84Y12ZoGv90dbBwW9uosZ0-jzmgz3KcHuFOrIB9WAJ5Qo739XnTFwAtbmr7teWdrD-3rn6MCjd__nsWC6jxkNK9fl_824dgigJ4Uuk0o52bKIrHsoHTiEYpqGddKY1ZXtmpHFZv9QuSBBQ" width="602" height="239" loading='lazy'></h4>

<h3 class="wp-block-heading"><strong>Migration Check </strong></h3>

<p>Now you need to go to Tag Manager and Universal Analytics (to ensure /check) that the event tracking for Ga4 has been set up correctly. In our example, we have two conversions for the Calendly booking, so something needs to be fixed, and we had to troubleshoot what happened. We could figure out what was going wrong by going to the two places above.<br><br><strong>What happened? </strong>We imported one, but there was already one created. We troubleshooted what the issue was. Because the event tracking in Tag Manager was already in for GA4 set up, we doubled up. To fix it we turned off the wrong conversion in GA4, and it disappeared<br><img src="https://lh3.googleusercontent.com/Euk3jnuYL73EKKvoR5xpNFh4tWWGr78Htp0Bruh52n-AWKu_WZmBT3H_lqyEwKBdSQjY5_G8gYr0YHKLRkDZbyjK_ktCTxZVnECxQgEHS_13vIWbMMtmsFvCGa8Y09sXz_yvSlZ56J3yShZVLxxj5d0" width="602" height="239" loading='lazy'><br></p>

<p>You might not have the event tracking in tag manager setup. If this is the case there will be a video below (but that will show up in a day or two) showing you how to do this.<br><br>Tags already set up in Tag Manager or not <a href="https://www.youtube.com/watch?v=j42_2A81F3E&t=406s&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Google is saying it is important to mark this off as complete so Google Analytic.</a> </p>

<p><a href="https://www.youtube.com/watch?v=j42_2A81F3E&t=406s&ab_channel=GoogleAnalytics">  </a></p>

<p>In the future, when we set up this stuff, we will always set up our events in Tag Manager, and they get transferred over to GA4 set up. </p>

<p>You can mark this off as complete if you have checked or know it hasn't been checked off. We will finish this off but not this second. </p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/ubVOdifSvXR-u1oUfpKZFGTtg_B1vsc63nRtk3UGfVfDF-8lwv7q5BFfLZuOLrtnGos-cLy7boqxhFj7xv_nwW7GV-nxLfvGgqLTs7o1ymiN9yzpV54R9eUGIMdMVe76BU8-7APFD38HZjHAxwtzBpg" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h2 id="step-6-audience">Step 6 Audience </h2>

<p>Audiences. So you can learn about your users and improve ad campaign targeting. This is where things will get interesting because we will have an easier time creating audiences. </p>

<p>We won’t spend much time here. It is pretty Easy. Follow this video: </p>

<iframe src="https://www.youtube-nocookie.com/embed/VNUCcc2Ceiw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" width="560" height="315" frameborder="0">rel=0</iframe>

<p><br>To get into depth, watch this <a href="https://www.youtube.com/watch?v=TzvXmwO5Qq0&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Audience Builder in Google Analytics 4</a>. We will set up an audience and well fish off linking Google ads and set up the tracking</p>

<p>Let’s mark this off as complete. </p>

<figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/3CWhnC90BZOOjZJzxXdJqxUQd20Q14TXZ7YZErftOOkRrmV7vhC_UE44WGR3v_ZxcX-Mw6SynMWlKv7AYSid_IX2SSBm-hf_XQ-B_zMilensLqarFu2KxAQKBvRIRZKibJlMgNmyK8IepB2ArfHFIM0" alt=""
                  loading="lazy"
                  decoding="async"
                /></figure>

<h2 id="step-7-google-ads-linking">Step 7: Google Ads Linking</h2>

<p>If you use Google Ads for your business linking your Google Analytics 4 property to your Google Ads is next. We will also connect to<a href="https://search.google.com/search-console/about" target="_blank" rel="noreferrer noopener"> Google Search Console (GSC).</a></p>

<p>Linking these accounts will help you understand your customers better and improve your marketing. You can also use attribution reports to see which marketing efforts are most effective, import Analytics conversions into Google Ads for bidding, and use Analytics audience data to enhance Google Ads remarketing. Yup, lots you can do. You'll learn it all and grow your business with the best knowledge to make the best marketing decisions. </p>

<p>Let's set up your Google Ads links now. Watch the <a href="https://www.youtube.com/watch?v=V1sGV5SLWYc&list=PLI5YfMzCfRtbwTOIToN-GemNcoddushAI&index=5&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Migration Series Day 5: Ads links, user roles, and more</a>, and that will help you set up the Google Ads link easily. </p>

<p>If it is not easy, not to worry. We'll be adding that video walkthrough in the next few days. We'll be back to add the step-by-step account linking, but we will now check if off and call it done. </p>

<p>In the next few days, we'll also add the  <strong>How to set up your Conversions using Tag Manager and GA4 set up video. </strong>You need to set up tags in Tag Manager to have everything configured. </p>

<p>These other videos might be helpful as well. - The last step to all of this madness. So bookmark this and come back!<br><br>Some other videos to help with the Google ads if you are raring to go. </p>

<p><a href="https://www.youtube.com/watch?v=UFB8FVwp-RI&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Google Ads Linking in Google Analytics</a></p>

<p><a href="https://www.youtube.com/watch?v=trTuipKPxBk&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Setting up the Google Ads integration in Google Analytics</a></p>

<h2 id="additional-ga4-resources">Additional GA4 Resources </h2>

<p><a href="https://www.youtube.com/watch?v=UFB8FVwp-RI&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Google Ads Linking in Google Analytics</a></p>

<p><a href="https://www.youtube.com/watch?v=trTuipKPxBk&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Setting up the Google Ads integration in Google Analytics</a></p>

<p><a href="https://www.youtube.com/watch?v=rndv3pDTXH8&list=PLI5YfMzCfRtbwTOIToN-GemNcoddushAI&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Migration Series Day 1: What, why, and how to migrate to Google Analytics 4</a> <a href="https://www.youtube.com/watch?v=Qzy2bd4eVGE&list=PLI5YfMzCfRtbwTOIToN-GemNcoddushAI&index=3&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Migration Series Day 2: Tagging and Data Streams in Google Analytics 4</a> <a href="https://www.youtube.com/watch?v=j42_2A81F3E&list=PLI5YfMzCfRtbwTOIToN-GemNcoddushAI&index=3&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Migration Series Day 3: Events and conversions in Google Analytics 4</a></p>

<p><a href="https://support.google.com/analytics/answer/12366001?hl=en&utm_id=ad" target="_blank" rel="noreferrer noopener">[UA→GA4] Recreate Universal Analytics audiences</a><br><a href="https://support.google.com/analytics/answer/9744165#finish-creating-property&zippy=%2Cin-this-article" target="_blank" rel="noreferrer noopener">[GA4] Add a Google Analytics 4 property (to a site that already has Analytics)<br></a><a href="https://support.google.com/analytics/answer/9973999" target="_blank" rel="noreferrer noopener">[GA4] About connected site tags - Analytics Help<br></a><a href="https://support.google.com/analytics/answer/9333790" target="_blank" rel="noreferrer noopener">[GA4] Confirm that you're collecting data - Analytics Help<br></a><a href="https://support.google.com/analytics/troubleshooter/7264014" target="_blank" rel="noreferrer noopener">Unable to sign in to account - Analytics Help<br></a><a href="https://developers.google.com/tag-platform/devguides/cross-domain" target="_blank" rel="noreferrer noopener">Measure activity across multiple domains | Tags | Google for Developers</a> <a href="https://www.youtube.com/watch?v=47mpnwPQ10I&t=0s&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Conversions in Google Analytics</a><br><a href="https://www.youtube.com/watch?v=FVzJkB4IxEQ&ab_channel=GoogleAnalytics" target="_blank" rel="noreferrer noopener">Creating Events in Google Analytics 4 Properties</a><br><a href="https://www.youtube.com/playlist?list=PLI5YfMzCfRtZ4bHJJDl_IJejxMwZFiBwz" target="_blank" rel="noreferrer noopener">Google Analytics 4 Tutorials - YouTube<br></a><a href="https://support.google.com/analytics/answer/13583724?sjid=10657008603212131812-NA" target="_blank" rel="noreferrer noopener">Migration Video Series Live on YouTube<br></a><a href="https://searchengineland.com/google-analytics-4-adds-new-integrations-with-ads-ai-powered-insights-and-predictions-342048#:~:text=The%20latest%20iteration%20of%20Google's,and%20more%20granular%20data%20controls." target="_blank" rel="noreferrer noopener">Meet Google Analytics 4: Google’s vision for the future of analytics<br></a><a href="https://blog.google/products/marketingplatform/analytics/new_google_analytics/" target="_blank" rel="noreferrer noopener">Introducing the new Google Analytics</a></p>

<h2 id="contact-us">Contact Us</h2>

<div class="wp-block-contact-form-7-contact-form-selector">[contact-form-7 id="5c430e5" title="Contact form 1"]</div>

<h2 id="recommended-articles">Recommended articles</h2>

<p></p>`;

export default function PostGa4SetUpGuide() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "GA4 Set Up & Guide (Updated 2024-10-27)",
  "description": "GA 4 Set-Up Google Analytics 4 (GA4). We're going to help you configure this and set this up and along the way you'll begin to sink your teeth into this...",
  "datePublished": "2024-11-26",
  "dateModified": "2024-11-26",
  "author": {
    "@type": "Person",
    "name": "Pip Seymour",
    "url": "https://knowhowmarketinglab.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KnowHow Marketing Lab",
    "url": "https://knowhowmarketinglab.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-analytics-4-setup-hero-dU5h22dYaajZknWEGNwLKc.webp"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://knowhowmarketinglab.com/ga4-set-up-guide/"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-analytics-4-setup-hero-dU5h22dYaajZknWEGNwLKc.webp"
  }
});
    document.head.appendChild(script);
    document.title = 'GA4 Set Up & Guide (Updated 2024-10-27) | KnowHow Marketing Lab';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'GA 4 Set-Up Google Analytics 4 (GA4). We\'re going to help you configure this and set this up and along the way you\'ll begin to sink your teeth into this...');
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://knowhowmarketinglab.com/blog/ga4-set-up-guide');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-ga4-setup-guide-kX3KdScEiQhSbLyJazy5Np.png');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    if (ogImageAlt) ogImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: GA4 Set Up Guide - Everything You Need to Know');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/og-ga4-setup-guide-kX3KdScEiQhSbLyJazy5Np.png');
    const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
    if (twitterImageAlt) twitterImageAlt.setAttribute('content', 'Social share image for KnowHow Marketing Lab blog post: GA4 Set Up Guide - Everything You Need to Know');

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://knowhowmarketinglab.com/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://knowhowmarketinglab.com/blog"},
        {"@type": "ListItem", "position": 3, "name": "GA4 Set Up Guide", "item": "https://knowhowmarketinglab.com/ga4-set-up-guide"}
      ]
    });
    document.head.appendChild(breadcrumbScript);
    return () => { document.head.removeChild(script); document.head.removeChild(breadcrumbScript); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <ReadingProgressBar />
      <Navbar />
      <main className="pt-28 pb-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#318599]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#318599]">Blog</Link>
            <span>/</span>
            <span className="text-slate-700 truncate">GA4 Set Up & Guide (Updated 2024-10-27)</span>
          </nav>
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#318599' }}>
              Uncategorized
            </span>
            <time className="text-sm text-slate-500" dateTime="2024-11-26">November 26, 2024</time>
          </div>
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            GA4 Set Up & Guide (Updated 2024-10-27)
          </h1>
          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-200">
            <div className="w-10 h-10 rounded-full bg-[#318599] flex items-center justify-center text-white font-bold text-sm">PS</div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Pip Seymour</p>
              <p className="text-xs text-slate-500">KnowHow Marketing Lab</p>
            </div>
          </div>

        <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl mb-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028389518/RfGSqQsChvaaheLhAWutyi/google-analytics-4-setup-hero-dU5h22dYaajZknWEGNwLKc.webp"
            alt="GA4 Set Up & Guide (Updated 2024-10-27)"
            className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Table of Contents */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">In This Article</h2>
          <ol className="list-decimal list-inside space-y-1.5">
              <li key="ga-4-set-up"><a href="#ga-4-set-up" className="text-[#318599] hover:underline text-sm">GA 4 Set-Up</a></li>
              <li key="step-by-step-ga4-setup-configuration-guide"><a href="#step-by-step-ga4-setup-configuration-guide" className="text-[#318599] hover:underline text-sm">Step-By-Step GA4 Setup & Configuration Guide</a></li>
              <li key="1-first-step-create-a-google-analytics-account"><a href="#1-first-step-create-a-google-analytics-account" className="text-[#318599] hover:underline text-sm">1. First Step: Create A Google Analytics Account</a></li>
              <li key="second-step-setup-signals"><a href="#second-step-setup-signals" className="text-[#318599] hover:underline text-sm">Second Step: Setup Signals</a></li>
              <li key="third-step-data-stream-setup"><a href="#third-step-data-stream-setup" className="text-[#318599] hover:underline text-sm">Third Step: Data Stream Setup</a></li>
              <li key="fourth-step-connecting-tag-manager-to-ga4"><a href="#fourth-step-connecting-tag-manager-to-ga4" className="text-[#318599] hover:underline text-sm">Fourth Step: Connecting Tag Manager To GA4</a></li>
              <li key="fifth-step-setup-assistant-ga4-gamification"><a href="#fifth-step-setup-assistant-ga4-gamification" className="text-[#318599] hover:underline text-sm">Fifth Step: Setup Assistant & GA4 Gamification</a></li>
              <li key="set-up-conversions-property-settings"><a href="#set-up-conversions-property-settings" className="text-[#318599] hover:underline text-sm">Set Up Conversions - Property Settings</a></li>
              <li key="step-6-audience"><a href="#step-6-audience" className="text-[#318599] hover:underline text-sm">Step 6 Audience</a></li>
              <li key="step-7-google-ads-linking"><a href="#step-7-google-ads-linking" className="text-[#318599] hover:underline text-sm">Step 7: Google Ads Linking</a></li>
              <li key="additional-ga4-resources"><a href="#additional-ga4-resources" className="text-[#318599] hover:underline text-sm">Additional GA4 Resources</a></li>
              <li key="contact-us"><a href="#contact-us" className="text-[#318599] hover:underline text-sm">Contact Us</a></li>
              <li key="recommended-articles"><a href="#recommended-articles" className="text-[#318599] hover:underline text-sm">Recommended articles</a></li>
          </ol>
        </nav>
          {/* Article Content */}
          <div
            className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-[#318599] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700 prose-li:mb-1 prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-[#318599] prose-blockquote:text-slate-600"
            dangerouslySetInnerHTML={{ __html: POST_CONTENT }}
          />
          {/* CTA - internal link to AI + SEO course */}
          <div className="mt-16 bg-gradient-to-br from-[#318599] to-[#4F37D8] rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to put this into practice?</h2>
            <p className="text-white/80 mb-6">Take the free AI + SEO Accelerator course - 5 modules, 60+ video lessons, weekly live Q&amp;A. No credit card needed.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/courses/seo" className="inline-block bg-white text-[#318599] font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors">Start the Free AI + SEO Course →</a>
              <a href="/framework" className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors">See the Data-First AI SEO Method</a>
            </div>
          </div>
                    {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-[#318599] hover:underline text-sm font-medium">Back to all articles</Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}