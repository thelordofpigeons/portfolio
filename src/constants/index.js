export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Ismail Kabbaj',
        position: 'Cofounder & CTO at La Sphère ',
        img: 'assets/Ismail.jpeg',
        review:
                'Working with Mohamed Amine was transformative, especially in AI development. His innovative approach to machine learning, demonstrated through the SAVERGLASS quality control project using Python, OpenCV, and Keras, showcases his exceptional ability to create precise, efficient AI solutions. Highly recommended for cutting-edge AI and machine learning projects.',
        },
        {
        id: 2,
        name: 'Sébastien Delprat',
        position: 'professeur des universités',
        img: 'assets/unknown.jpg',
        review:
            'Mohamed Amine is a dedicated, committed and serious student. He has been working hard on his project and achieved great result demonstrating his technical skills in Matlab, Simulink, and Artificial Intelligence!',
    },
];

export const myProjects = [
    {
        title: 'Autonomous Vehicle - Control and Command',
        desc: 'This project focused on the automation of a vehicle with lateral control using MATLAB and Simulink, aiming to enhance safety and driving efficiency through advanced automation techniques.',
        subdesc:
            'Developed over a six-month period, the project included the implementation of different driving modes such as assisted steering, speed regulation, and lane keeping. Additionally, a user-friendly HMI was built for managing these driving modes, utilizing MATLAB, Simulink, and Java for seamless integration and operator interaction.',

        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/Matlab_Logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/Matlab_Logo.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/Simulink_Logo.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/java.png',
            },
        ],
    },
    {
        title: 'Factory of the Future 4.0 - Flexible Assembly Automation',
        desc: 'Automation of a flexible assembly cell to modernize industrial processes and optimize production workflows.',
        subdesc:
            'Executed with CODESYS 3.5, this six-month project integrated robot and PLC communication using the MODBUS protocol. The project also involved programming Staubli robots in VAL3 and developing an operator interface for guiding assembly error corrections, ensuring efficient and safe production.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/Codesys_Logo.svg',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/Codesys_Logo.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/Stäubli_International_logo.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/Wago-logo.png',
            },
        ],
    },
    {
        title: 'Intelligent Rehabilitation Orthesis - I2A Health Technologies',
        desc: 'Development of a Smart Lower Limb Orthesis for Rehabilitation Simulation and Patient Safety',
        subdesc:
            'Using MATLAB, Simulink, and Advanced Control Theory, a proof of concept was built to develop a controllable lower limb orthesis with sophisticated control methodologies including Linear Matrix Inequalities (LMIs), Lyapunov Stability Analysis, and Unknown Input Observers. The project demonstrated the feasibility of applying advanced control techniques to medical rehabilitation devices, enhancing patient safety and movement precision.',
        href: null,
        texture: '/textures/project/project4.mp4',
        logo: '/assets/Matlab_Logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'MATLAB',
                path: '/assets/Matlab_Logo.png',
            },
            {
                id: 2,
                name: 'Simulink',
                path: 'assets/Simulink_Logo.png',
            },
        ],
    },
    {
        title: 'AI-Based Quality Control - SAVERGLASS',
        desc: 'Development of an AI-driven solution for defect detection aimed at reducing production defects and ensuring quality standards.',
        subdesc:
            'Using Python, OpenCV, and Keras, a proof of concept was built to achieve a predefined tolerance level of defects (maximum 3% false positives). This project demonstrated the feasibility of applying AI to automated quality control processes in an industrial setting, enhancing product reliability.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/Saverglass-Logo.png',
        logoStyle: {

            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/Python-logo.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/OpenCV_Logo.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/Keras_logo.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'YAZAKI',
        pos: 'IT Developer Intern',
        duration: 'Sep 2023 – Jan 2024',
        title: "Developed a dynamic display application at YAZAKI, demonstrating proficiency in creating innovative IT solutions for industrial environments.",
        icon: '/assets/Yazaki_company_logo.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Freelance',
        pos: 'Web Developer',
        duration: '2023 - 2024',
        title: "Developed websites for multiple companies in Morocco, including Coreas, and created a personal portfolio, showcasing versatility and web development skills.",
        icon: '/assets/freelance-high-resolution-logo.png',
    },
    {
        id: 3,
        name: 'Academic Projects',
        pos: 'Engineering Student',
        duration: '2022 - 2024',
        title: "Worked on advanced projects including Future Factory 4.0 automation, autonomous vehicle control systems, and AI-driven quality control, demonstrating technical expertise across multiple domains.",
        icon: '/assets/insa-logo.svg',
        animation: 'salute',
    },
];