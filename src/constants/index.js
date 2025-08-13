import port01 from "../assets/img/port01.jpg";
import { Github, Send } from 'lucide-vue-next';


export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "mindset",
        url: "#mindset"
    },
    {
        title: "work",
        url: "#work"
    },
    {
        title: "Off the Record",
        url: "#otr"
    },
    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    desc: ["sorry", "i am", "engineer"]
}

export const mindsetText = [
    {
        title: "オーナーシップを持って",
        desc: "自身が手掛ける仕事はすべて「会社の成果物」である前に、まず「自分の作品」であると考えています。この想いが、開発者の視点に留まらず、ユーザー視点に立ち返って完成度を追求する原動力です。"
    },
    {
        title: "自分自身に正直であること",
        desc: "誠実であるべき最も重要な対象は、他人ではなく自分自身です。自分に誠実であるほど、目指すべき道が明確になり、その目標が情熱の方向と深みを根底から変えてくれると信じています。"
    },
    {
        title: "成長し続ける責任感",
        desc: "「昨日より優れた今日を、今日より成長した明日を」が私の信条です。この想いが、いかなる困難な課題にも臆することなく、必ず期限内に解決策を導き出すという強い責任感を支えています。"
    }
]

export const workText = [
    {
        text: ["", "", ""],
        title: "",
        code: "https://github.com/Eno951024/vue",
        view: "https://port2023-vite.netlify.app",
    },
];

export const otrText = [
    {
        num: "01",
        title: "",
        desc: "",
        img: port01,
    },
];

export const contactText = [
    {
        link: "https://line.me/ti/p/0HDyX0g8Z1",
        title: "line : cal8352",
    },
    {
        link: "mailto:kamo8352@gmail.com",
        title: "mail : kamo8352@gmail.com",
    },
];

export const socialLinks = [
    {
        icon: Github,
        link: "https://github.com/Eno951024",
    },
    {
        icon: Send,
        link: "mailto:kamo8352@gmail.com",
    },
];