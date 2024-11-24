GROUP 17    

Portfolio Website

My portfolio website is an effective and interactive showcase of my skills and experiences. The code behind the website is designed to provide a smooth user experience, showcasing a clean, professional design with interactive elements. 



1. **HTML Structure: The Foundation of the Website**

HTML serves as the backbone of this portfolio website. It structures the content into organized sections, making it easy for both the user and search engines to understand the information.

The website begins with the <html> element, which indicates the start of the document. Inside the <head> section, metadata such as character encoding and viewport settings is defined to ensure that the website functions well on all devices and supports various characters. The title is set to "Jane Muraya's Portfolio", and the favicon (the small icon that appears on browser tabs) is linked to the profile image.

The body of the website is divided into several sections:

 **Header and Navigation**: The header section contains the site’s logo (my profile picture and name) and a navigation bar with links to the different sections of the website, such as "About Me", "Education", "Projects", and "Contact". It also includes a button that toggles between light and dark themes. The navigation bar is accessible and ensures that users can easily jump between different sections.

 **Main Content**: The main body of the page features different sections, including an introductory hero section, a detailed about me section, an education section, a list of projects, and a contact form. Each section is identified with a unique ID to facilitate smooth navigation using anchor links. The "Projects" section, for instance, showcases my completed projects, each with a brief description and links to live demos or GitHub repositories.

 **Footer**: The footer provides additional contact details, including links to my LinkedIn, GitHub, and email.



 2. **CSS Styling: Enhancing the Visual Design**

I used CSS to control the layout, appearance, and overall look of the portfolio website. The index.css file defines the styles that make the site visually appealing and responsive. 

The CSS begins with a reset rule to eliminate browser inconsistencies, ensuring that all elements have zero margin and padding, with the box-sizing set to border-box for easier layout control.

**General Styling**: The site uses a modern font from Google Fonts called "Roboto". The body background color and text color are set depending on the active theme (light or dark). The site employs flexible containers and grid systems to arrange the sections, with images, texts, and buttons properly spaced.

**Light and Dark Themes**: One of the standout features of this portfolio website is its light and dark modes. These two themes are controlled by classes applied to the body tag (light or dark). The default theme is light, with a light background and dark text. The dark theme has a dark background and light text, which reduces eye strain in low-light environments. When the dark mode toggle button is clicked, the corresponding CSS classes are toggled, instantly switching the visual theme of the site.

**Responsive Design**: The CSS file also includes media queries that ensure the website is fully responsive. For smaller screen sizes (such as mobile devices), the layout adjusts to display content in a single column, making it easier to read and navigate. The use of flexible box layouts (flexbox) and media queries ensures that the content remains accessible and visually appealing across a wide range of devices.



3. **JavaScript Functionality: Making the Site Interactive**

I used JavaScript to add interactivity to the portfolio website, primarily for the dark mode toggle. The website’s JavaScript code, embedded within a <script> tag, listens for the user’s interaction with the dark mode button and changes the theme accordingly.

When the website is loaded, the JavaScript code waits for the Document Object Model to be fully loaded before executing. The script then checks the current theme and applies the appropriate class (light or dark) to the body element. The dark mode toggle button is given an event listener, so when the user clicks it, the script toggles the body's theme class, switching between light and dark mode.

The function DOMContentLoaded ensures that the script only runs after the HTML is completely loaded, preventing errors. The event listener on the dark mode toggle button waits for a click event, then toggles the theme by switching between dark and light classes on the body element.

This interactivity enhances the user experience by providing an intuitive way to change the theme without refreshing the page.




4. **Form Handling: Enabling Contact via Email**

The contact form, allows users to reach out to me directly. The form, placed in the Contact section, is configured to send submissions to Formspree, a service that handles form submissions and forwards them to my email. This is a simple yet effective way to allow website visitors to get in touch without needing backend infrastructure.

The form collects the user's name, email, subject, and message. When the user submits the form, the data is sent to Formspree, which processes it and forwards the message to my email address. This is a crucial feature for any portfolio website, as it offers potential clients or collaborators a direct way to contact me.




5. **The Cohesive Interaction of Code**

In conclusion, my portifolio website is a great example of how HTML, CSS, and JavaScript work together to create a seamless and functional user experience. The HTML provides the basic structure and content of the site, while the CSS ensures that the site is visually appealing and responsive. JavaScript brings interactivity to the website, allowing users to switch between light and dark modes, creating a dynamic experience.

By combining these technologies, my portfolio website is not only a showcase of my work and skills but also a demonstration of my technical expertise. The clean and modern design, combined with responsive layouts and interactive elements, makes it a compelling portfolio for any web developer.
