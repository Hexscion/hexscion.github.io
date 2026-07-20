export interface Project {
  id: string;
  projectName: string;
  projectType: string;
  technology: string;
  projectImg: string;
  githubLink: string;
  liveLink: string;
  description: string;
}

export interface Certificate {
  id: string;
  imgUrl: string;
  imgName: string;
}

export const projects: Project[] = [
  {
    id: "dsg",
    projectName: "Doha Signs and Graphics",
    projectType: "Website",
    technology: "HTML, CSS, Tailwind, JS, jQuery",
    projectImg: "/assets/projects/Doha Signs and Graphics.jpg",
    githubLink: "",
    liveLink: "https://dohasigns.com/",
    description: `<article> <p> The website for <strong>Doha Signs and Graphics</strong>, a leading signage and graphic solutions provider in <strong>Qatar</strong>, is designed and developed to offer a modern, user-friendly online experience. With a focus on showcasing their expertise, the website includes detailed service pages, a dynamic portfolio gallery, and fully responsive functionality for seamless access across various devices. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px"> <li> <strong>Modern Design:</strong> Clean, visually appealing design that aligns with the company's brand identity. </li> <li> <strong>Detailed Service Pages:</strong> Comprehensive service descriptions to inform potential clients about the full range of offerings. </li> <li> <strong>Portfolio Gallery:</strong> A dynamic and visually-rich gallery to showcase the company's past projects and craftsmanship. </li> <li> <strong>Responsive Functionality:</strong> Ensures a smooth browsing experience across desktops, tablets, and mobile devices. </li> </ul> <p> This project strengthens <strong>Doha Signs and Graphics’</strong> online presence, helping attract new clients while effectively demonstrating their capabilities and services. </p> </article>`
  },
  {
    id: "ethereal-glade",
    projectName: "Ethereal Glade",
    projectType: "Webapp",
    technology: "TypeScript, Tailwind, Next.js & Firebase",
    projectImg: "/assets/projects/Ethereal Glade.jpg",
    githubLink: "",
    liveLink: "https://etherealglade.vercel.app/",
    description: `<article> <p> This web application serves as an introduction to a guild named <strong>EtherealGlade</strong> from the popular MMO <strong>Black Desert Online</strong>. The website is designed to provide essential information about the guild, foster community engagement, and manage game-related content efficiently. </p> <p> The application features an <strong>About Page</strong> that offers an overview of the guild, detailing its mission, core values, and activities. Additionally, a <strong>Blog Section</strong> allows the guild management staff to post game guides, strategies, and announcements, serving as a resource hub for both new and veteran members. </p> <p> To ensure seamless content management, the web application also includes an <strong>Admin Page</strong>, enabling authorized guild members to create, update, and manage content on the website without technical complexities. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li> <strong>About Page:</strong> Provides an overview of the guild, its purpose, and core values. </li> <li> <strong>Blog Section:</strong> Allows the guild management team to publish game guides, strategies, and guild-related announcements. </li> <li> <strong>Admin Page:</strong> Provides content management capabilities for authorized members to create, update, or remove content. </li> </ul> <p> This web application aims to strengthen the guild's online presence, promote community interaction, and simplify content management, ensuring the guild's resources are easily accessible to all members. </p> </article>`
  },
  {
    id: "exapass",
    projectName: "EXAPASS",
    projectType: "Website",
    technology: "HTML, CSS & JavaScript",
    projectImg: "/assets/projects/Exapass.jpg",
    githubLink: "https://github.com/Hexscion/password-generator",
    liveLink: "https://exapass.netlify.app/",
    description: `<article> <p> <strong>EXAPASS</strong> is a powerful random password generator tool designed to help users create secure and unpredictable passwords. It eliminates patterns and predictability, ensuring stronger protection for online accounts and sensitive data. </p> <p> The tool offers customizable options, allowing users to choose the types of characters to include in their passwords. These character types include <strong>uppercase letters</strong>, <strong>lowercase letters</strong>, <strong>numbers</strong>, and <strong>symbols</strong>, giving users complete control over their password's complexity. </p> <p> Additionally, users can define the desired password length, ranging from <strong>5 to 25 characters</strong>. Once preferences are set, <strong>EXAPASS</strong> generates a random, highly secure password that meets the user's specifications. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li> <strong>Character Customization:</strong> Users can include or exclude uppercase letters, lowercase letters, numbers, and symbols based on their security preferences. </li> <li> <strong>Password Length:</strong> Allows users to generate passwords between 5 to 25 characters in length, ensuring flexibility according to their security needs. </li> <li> <strong>Random Generation:</strong> Generates highly secure and unpredictable passwords, eliminating common patterns and making it harder for malicious attacks to succeed. </li> </ul> <p> <strong>EXAPASS</strong> is built to prioritize user security by simplifying the process of creating robust passwords, reducing the risk of compromised accounts. </p> </article>`
  },
  {
    id: "marble-race",
    projectName: "Marble Race",
    projectType: "Web3D",
    technology: "React Three Fiber, Drei, Zustand",
    projectImg: "/assets/projects/Marble Race.jpg",
    githubLink: "",
    liveLink: "https://hexscion-marble-race.netlify.app/",
    description: `<article> <p> This project is a dynamic <strong>Marble Race</strong> game built using <strong>React Three Fiber</strong>, <strong>drei</strong>, <strong>zustand</strong>, and <strong>React Three Rapier</strong>. The game blends 3D rendering, state management, and physics simulation to create an engaging and visually immersive racing experience. </p> <p> The race features <strong>randomised stages</strong>, ensuring that each playthrough feels fresh and unpredictable. With <strong>realistic physics</strong> powered by React Three Rapier, the marbles move and interact naturally with the environment. A built-in <strong>timer</strong> tracks the time taken to complete the race, adding a competitive and replayable element. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li><strong>React Three Fiber Rendering:</strong> Smooth and interactive 3D visual experience.</li> <li><strong>Randomised Stages:</strong> Each race generates unique stage layouts for replayability.</li> <li><strong>Realistic Physics:</strong> React Three Rapier provides accurate physics simulation for marble movement.</li> <li><strong>State Management with Zustand:</strong> Efficient and minimal state handling for game logic.</li> <li><strong>Timer System:</strong> Keeps track of completion time for scoring and competition.</li> </ul> <p> This marble race game showcases advanced use of 3D rendering, physics simulation, and state-driven gameplay, resulting in a fun and challenging interactive experience. </p> </article>`
  },
  {
    id: "portal-scene",
    projectName: "Portal Scene",
    projectType: "Web3D",
    technology: "Blender, Three.js",
    projectImg: "/assets/projects/Portal Scene.jpg",
    githubLink: "",
    liveLink: "https://hexscion-portal-scene.netlify.app/",
    description: `<article> <p> This project involved creating a stunning <strong>Portal Scene</strong> using <strong>Blender</strong> and integrating it into a <strong>Three.js</strong> environment for real-time rendering. The scene was designed, optimized, and enhanced with custom shaders and particle effects to create a dynamic and immersive visual experience. </p> <p> The process began with designing the portal scene in <strong>Blender</strong>, followed by <strong>optimizing the model</strong> to ensure smooth performance. A <strong>texture map</strong> was baked to preserve high-quality visual details. After importing the model into the <strong>Three.js</strong> project, custom shaders were applied to enhance the portal effect, while <strong>particles</strong> were added to create a mesmerizing atmosphere. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li><strong>Blender Modeling:</strong> Designed and optimized a portal scene in Blender.</li> <li><strong>Texture Baking:</strong> Baked a texture map to optimize performance and maintain visual quality.</li> <li><strong>Three.js Integration:</strong> Imported the model into a Three.js project for real-time rendering.</li> <li><strong>Shaders and Particles:</strong> Added custom shaders and particle effects to enhance the scene's visual appeal.</li> </ul> <p> This project demonstrates advanced skills in <strong>3D modeling</strong>, <strong>real-time rendering</strong>, and <strong>shader programming</strong>, resulting in a visually captivating portal scene with dynamic effects. </p> </article>`
  },
  {
    id: "quizzical",
    projectName: "Quizzical",
    projectType: "Webapp",
    technology: "HTML, CSS, ReactJS & Firebase",
    projectImg: "/assets/projects/Quizzical.jpg",
    githubLink: "https://github.com/Hexscion/quizzical-app",
    liveLink: "https://hexscion-quizzical.netlify.app/",
    description: `<article> <p> <strong>Quizzical</strong> is an online platform designed to offer engaging quizzes on a wide range of topics and categories, including <strong>general knowledge</strong>, <strong>sports</strong>, <strong>history</strong>, <strong>geography</strong>, and more. The platform provides an interactive way for users to test their knowledge and improve their understanding of various subjects. </p> <p> The quiz experience begins when the user clicks on the <strong>Start Quiz</strong> button. The platform then presents one question at a time, with <strong>four possible answers</strong> to choose from. Users must select the correct answer to score points. </p> <p> At the end of the quiz, users receive a detailed score along with selected and correct answers, providing insights into their performance and knowledge. This feature helps users identify their strong and weak areas in different topics. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li> <strong>Wide Range of Categories:</strong> Offers quizzes on various topics such as general knowledge, sports, history, geography, and more. </li> <li> <strong>Check Answer Option:</strong> Provides the flexibility to check for answers when users are uncertain about answers. </li> <li> <strong>Score and Feedback:</strong> Generates a score at the end of the quiz along with selected and correct answers to help users identify areas for improvement. </li> </ul> <p> <strong>Quizzical</strong> is designed to make learning fun and interactive, encouraging users to expand their knowledge across different domains while enjoying the challenge of timed quizzes. </p> </article>`
  },
  {
    id: "sweatz",
    projectName: "Sweatz",
    projectType: "UI design",
    technology: "Adobe XD",
    projectImg: "/assets/projects/Sweatz.jpg",
    githubLink: "",
    liveLink: "https://xd.adobe.com/view/654265a3-3e0a-45cf-86e2-ee9fc2628052-3011/",
    description: `<article> <p> <strong>Sweatz</strong> is a web app design for a clothing store that specializes in sweatshirts. The UI features a <strong>clean and modern interface</strong>, ensuring a smooth and visually appealing shopping experience for users. </p> <p> Customers can easily browse through the collection and customize their orders by selecting their preferred <strong>color</strong> and <strong>size</strong> before making a purchase. The app also includes a <strong>cart system</strong>, allowing users to add multiple items to their cart before proceeding to checkout. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li><strong>Modern UI:</strong> A sleek and user-friendly interface for a seamless shopping experience.</li> <li><strong>Color & Size Selection:</strong> Customers can personalize their sweatshirts by choosing colors and sizes.</li> <li><strong>Cart System:</strong> Users can add items to the cart and review them before checkout.</li> </ul> <p> The <strong>Sweatz</strong> web app enhances the online shopping experience, making it simple and convenient for customers to find and purchase their favorite sweatshirts. </p> </article>`
  },
  {
    id: "tenzies",
    projectName: "Tenzies",
    projectType: "Webapp",
    technology: "HTML, CSS & ReactJS",
    projectImg: "/assets/projects/Tenzies.jpg",
    githubLink: "https://github.com/Hexscion/tenzies-game",
    liveLink: "https://hexscion-tenzies.netlify.app/",
    description: `<article> <p> <strong>Tenzies</strong> is a fast-paced and exciting game where players compete to roll a specific combination using a set of <strong>ten dice</strong>. The game is designed to be simple yet highly engaging, making it perfect for quick bursts of fun. </p> <p> Players start the game by rolling all ten dice. The objective is to <strong>hold certain dice</strong> while re-rolling the others to achieve the desired combination. Players can continue rolling until they achieve the winning combination. The game also keeps track of the <strong>number of rolls</strong> and the <strong>elapsed time</strong>, adding an element of challenge and competitiveness. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px;"> <li><strong>Ten Dice Gameplay:</strong> Players roll ten dice and attempt to achieve a specific winning combination.</li> <li><strong>Hold and Roll Mechanic:</strong> Allows players to hold certain dice while re-rolling the remaining ones.</li> <li><strong>Roll and Time Tracking:</strong> Tracks the number of rolls and elapsed time, encouraging players to beat their own records.</li> <li><strong>Fast-Paced and Fun:</strong> The game is designed to be quick, fun, and highly addictive.</li> </ul> <p> <strong>Tenzies</strong> is perfect for those who enjoy casual games that test luck, strategy, and speed. The combination of roll mechanics, time tracking, and competition makes it an exciting game to play repeatedly. </p> </article>`
  },
  {
    id: "whitefox-corporation",
    projectName: "Whitefox Corporation",
    projectType: "Website",
    technology: "HTML, CSS, Tailwind, Next.js",
    projectImg: "/assets/projects/Whitefox Corporation.jpg",
    githubLink: "",
    liveLink: "https://whitefoxcorporation.com/",
    description: `<article> <p> The Whitefox Corporation website is a modern, minimalistic web platform built with <strong>Next.js</strong>, ensuring optimal performance, seamless navigation, and fast rendering. Designed with a focus on clean aesthetics and user experience, the website efficiently delivers content while maintaining a sleek and professional look. </p> <h2 class="text-3xl mt-4">Key Features:</h2> <ul style="margin-top: 10px"> <li> <strong>MDX-Powered Blog:</strong> The site dynamically renders blog content using <strong>MDX</strong>, enabling a blend of Markdown and React components for rich, interactive articles. </li> <li> <strong>Zoho Forms Integration:</strong> Seamless <strong>Zoho Forms</strong> integration allows users to submit inquiries, feedback, or requests effortlessly. </li> <li> <strong>Optimized Performance:</strong> Next.js project exported with <strong>static site generation (SSG)</strong> for improved speed and SEO. </li> <li> <strong>Responsive & Minimal Design:</strong> A visually appealing, clutter-free UI that adapts flawlessly across all devices. </li> </ul> <p> This project reflects a perfect blend of functionality, performance, and aesthetics, aligning with Whitefox Corporation’s brand identity and digital goals. </p> </article>`
  }
];

export const certificates: Certificate[] = [
  {
    id: "the-frontend-developer-career-path",
    imgUrl: "/assets/certificates/CERTIFICATE OF COMPLETION - The Frontend Developer Career Path.jpg",
    imgName: "The Frontend Developer Career Path"
  },
  {
    id: "advanced-react",
    imgUrl: "/assets/certificates/CERTIFICATE OF COMPLETION - Advanced React.jpg",
    imgName: "Advanced React"
  },
  {
    id: "google-ace",
    imgUrl: "/assets/certificates/ACE Certificate.jpg",
    imgName: "Google ACE"
  },
  {
    id: "google-ux-adobe-xd",
    imgUrl: "/assets/certificates/Coursera UMMZBXAF9AVQ.jpg",
    imgName: "Google UX Adobe XD"
  },
  {
    id: "google-ux-figma",
    imgUrl: "/assets/certificates/Coursera P223XSR6KEGR.jpg",
    imgName: "Google UX Figma"
  },
  {
    id: "google-ux-design",
    imgUrl: "/assets/certificates/Coursera 87HN8ARU6LA4.jpg",
    imgName: "Google UX Design"
  },
  {
    id: "google-ux-foundations",
    imgUrl: "/assets/certificates/Coursera 6Z9A648X8ZV3.jpg",
    imgName: "Google UX Foundations"
  },
  {
    id: "google-ux-research",
    imgUrl: "/assets/certificates/Coursera WEMJGPJXD7GD.jpg",
    imgName: "Google UX Research"
  },
  {
    id: "google-ux-wireframes",
    imgUrl: "/assets/certificates/Coursera GDZELT5ZEXZ3.jpg",
    imgName: "Google UX Wireframes"
  }
];
