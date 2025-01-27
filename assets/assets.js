import user_image from './user-image.png';
import user_image_dark from './user-image-dark.png'
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    user_image_dark,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Trading bot',
        description: 'I built an algorithmic trading bot using Python and the Numpy library. The algorithm uses a 30-second moving average to help smooth out market fluctuations, making trade execution more stable and strategic. I also integrated Relative Strength Index analysis, allowing the algorithm to spot trend patterns and make smarter trading decisions based on market momentum.',
        bgImage: '/work-1.png',
        githubLink: 'https://github.com/James-Schaffer/morganStanleyCompetition'
    },
    {
        title: 'AI study buddy',
        description: 'I built and launched a fully responsive web app with 3 other developers. We integrated OpenAIs GPT-3.5 Turbo, allowing the app to analyse uploaded documents, predict grades and provide useful recommendations. I also designed the user interface in Figma, ultimately resulting in our project being recognised for its visually appealing interface by IBM.',
        bgImage: '/work-2.png',
        githubLink: 'https://github.com/JackPartridge/IBM_Hackathon'
    },
    {
        title: 'Website',
        description: 'I independently built this portfolio website using Nextjs and tailwind CSS. I tried to include as many different functions as possible, including animations and user interactive features such as the contact form. It is still a work in progress.',
        bgImage: '/work-3.png',
        githubLink: 'https://github.com/Nabzx'
    },
    {
        title: 'Robotics',
        description: 'I programmed robots for the Pi Wars National Competition. Using technologies like Arduino and Python, I developed advanced navigation and obstacle avoidance algorithms to enhance the robots performance in various challenges.',
        bgImage: '/work-4.png',
        githubLink: 'https://github.com/Nabzx'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of designing, programming and building websites...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'Financial analysis', description: 'Leveraging data-driven insights to assess financial trends and investment opportunities...', link: '' },
    { icon: assets.graphics_icon, title: 'Software development', description: 'Building scalable, efficient and maintanable software solutions using modern development practices...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, JavaScript React Js, Next Js, HTML, CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.S.c. in Computer Science (Software Engineering)' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 6 projects ' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];