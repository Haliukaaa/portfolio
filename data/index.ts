export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'From Professional English Translator to Full-Stack Developer',
    description: 'Having found my passion, I decided to change my career with a leap of faith',
    className: 'md:col-span-2 row-span-2',
    imgClassName: 'w-full h-full object-cover',
    titleClassName: 'justify-end',
    img: '/cert2.jpg',
    spareImg: '',
  },
  {
    id: 2,
    title: 'Creative, diligent and responsible along with ADHD',
    description: '',
    className: 'md:col-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: '',
    description: '',
    className: 'md:col-span-1 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: ``,
    description: '',
    className: 'md:col-span-1 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/coding.jpg',
  },

  {
    id: 5,
    title: 'Currently building an ecommerce website',
    description: 'Not easy, I tell ya',
    className: 'md:col-span-2 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you wanna start a project together?',
    description: '',
    className: 'md:col-span-1 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'ArtHub Online Gallery Website',
    des: 'Our team website showcases art work from artists to potential buyers.',
    img: '/arthub.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', 'mongodb.svg'],
    link: 'https://arthub-test.vercel.app/',
  },
  {
    id: 2,
    title: 'Blog template with mock API',
    des: 'We used a mock API when we first learned about restAPI, and built a blog with it',
    img: '/blog.png',
    iconLists: ['/next.svg', '/tail.svg', 'restapi.png'],
    link: 'https://blog-template-inky.vercel.app/',
  },
  {
    id: 3,
    title: 'Todo list  planner app',
    des: 'Made a simple todo list planner app for my personal use. You can add, edit and delete tasks.',
    img: '/todo.png',
    iconLists: ['/html.svg', '/css.svg', '/js.svg'],
    link: 'https://todo-list-sandy-nine-53.vercel.app/',
  },
  {
    id: 4,
    title: 'Portfolio Single Page Template',
    des: 'A single page template for a portfolio built with react.js only',
    img: '/port.png',
    iconLists: ['/re.svg', '/tail.svg'],
    link: 'https://portfolio-rust-eight-16.vercel.app/',
  },
  {
    id: 5,
    title: 'Gogo news website',
    des: 'Recreated the front page of a popular news website using vanilla js, html and css only',
    img: '/gogo.png',
    iconLists: ['/css.svg', '/html.svg'],
    link: 'https://gogo-mn-iota.vercel.app/',
  },
];

export const testimonials = [
  {
    quote:
      `At Virasoft, Hailey proved to be an incredible asset to the team, balancing marketing and front-end development.`,
    name: 'Enkhtulga Munkhsaikhan',
    title: 'CEO and Founder at Virasoft',
    icon: "/test4.jpg",
  },
  {
    quote: `Working with Khaliun was like having five employees in one. From content creation and marketing to translation and web admin, they handled everything with ease. Their recent work with implementing a chatbot, brought our operations to a whole new level. A true multi-talented gem!`,
    name: 'Enkhkhorvoo Dendev',
    title: 'CEO at Beauty Secrets',
    icon: "/test2.jpg",
  },
  {
    quote:
     `Khaliun is very hard-working. The work at Mongol Derby is not an easy task, you travel across 1000 km in nature's adversity, while managing all communications between the riders, international crew and the local herders. I first doubted if she could handle the demanding nature of the job, but she proved me wrong and has been with the Derby for 4 years now.`,
    name: 'Shatarchuluun',
    title: 'Director of Mongolian operations at the Mongol Derby',
    icon: "/test3.jpg",
  },
  {
    quote:
      `I've known Khaliun for over five years, and our journey from colleagues to close sisters has been nothing short of amazing. Whenever I have a job that requires someone reliable and detail-oriented, they’re the first person I call. Whether it’s tackling complex tasks or managing last-minute challenges, they always deliver beyond expectations. Their work ethic and trustworthiness are unmatched.`,
    name: 'Nyamtaivan Odongerel',
    title: 'CEO at Steppe and Hoof NGO',
    icon: "/test1.jpg",
  },
  {
    quote:
      `Teaching Khaliun coding was a pleasure. They were one of the most hard-working and fast-learning students in the class. She would often struggle with coding, but never gave up.`,
    name: 'Dashnyam Baasan',
    title: 'Senior Engineer at Pinecone Academy',
    icon: "/test5.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Virasoft solution',
    desc: 'Currently leading the front-end development of a cross-platform eCommerce website that supports multiple businesses through a unified back office',
    className: 'md:col-span-2',
    thumbnail: '/virasoft-logo.png',
  },
  {
    id: 2,
    title: 'Digital Solutions Manager',
    company: 'Beauty Secrets',
    desc: 'Was responsible for automating tasks and bringing solutions in the digital space like creating chatbots, doing web admin, as well as translating and creating contents',
    className: 'md:col-span-2',
    thumbnail: '/bs-logo.svg',
  },
  {
    id: 3,
    title: 'Freelance English Interpreter',
    company: 'Mongol Derby',
    desc: `Ensured accurate translation during race events and briefings between international participants, organizers and local hosts at the world's toughest and longest horse race`,
    className: 'md:col-span-2',
    thumbnail: '/derby-logo.png',
  },
  {
    id: 4,
    title: 'English Teacher',
    company: 'Singapore School of Mongolia',
    desc: 'Taught English to students from 1-10th grade, creating effective lesson plans to develop their language proficiency and communication skills',
    className: 'md:col-span-2',
    thumbnail: '/sm-logo.png',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Haliukaaa',
  },
  {
    id: 2,
    img: '/fb.svg',
    link: 'https://www.facebook.com/haliuka.aqua/',
  },
  {
    id: 3,
    img: '/ig.svg',
    link: 'https://www.instagram.com/haliuka_aqua/',
  },
  {
    id: 4,
    img: '/in.svg',
    link: 'https://www.linkedin.com/in/haliuka/',
  },
];
