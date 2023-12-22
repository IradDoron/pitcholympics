import { FAQ } from '@/types';

export const faqMockData: FAQ[] = [
    {
        question: {
            en: 'How do I get started with the application?',
            he: 'איך אני מתחיל עם היישום?',
        },
        answer: {
            en: 'To get started with the application, follow the installation guide provided in the documentation.',
            he: 'כדי להתחיל עם היישום, עקוב אחרי מדריך ההתקנה הכלול בתיעוד.',
        },
        votes: [
            { userId: '1', value: 1 },
            { userId: '2', value: -1 },
            { userId: '3', value: 1 },
            { userId: '4', value: -1 },
            { userId: '5', value: 1 },
        ],
    },
    {
        question: {
            en: 'What platforms does the application support?',
            he: 'אילו פלטפורמות נתמכות על ידי היישום?',
        },
        answer: {
            en: 'The application currently supports Windows, macOS, and Linux operating systems.',
            he: 'היישום תומך כרגע במערכות ההפעלה Windows, macOS ו-Linux.',
        },
        votes: [
            { userId: '6', value: 1 },
            { userId: '7', value: 1 },
            { userId: '8', value: 1 },
            { userId: '9', value: -1 },
            { userId: '10', value: -1 },
            { userId: '11', value: 1 },
        ],
    },
    {
        question: {
            en: 'Can I customize the theme of the user interface?',
            he: 'האם אני יכול להתאים אישית את ערכת הנושא של ממשק המשתמש?',
        },
        answer: {
            en: 'Yes, you can customize the theme of the user interface by accessing the settings menu.',
            he: 'כן, תוכל להתאים אישית את ערכת הנושא של ממשק המשתמש על ידי גישה לתפריט ההגדרות.',
        },
        votes: [
            { userId: '12', value: 1 },
            { userId: '13', value: -1 },
            { userId: '14', value: 1 },
            { userId: '15', value: 1 },
            { userId: '16', value: 1 },
            { userId: '17', value: 1 },
        ],
    },
    {
        question: {
            en: 'Are there video tutorials available?',
            he: 'האם ישנם הדרכות וידאו זמינות?',
        },
        answer: {
            en: 'Yes, we provide video tutorials on our official YouTube channel for getting started and advanced features.',
            he: 'כן, אנו מספקים הדרכות וידאו בערוץ היוטיוב הרשמי שלנו להתחלה ותכונות מתקדמות.',
        },
        votes: [
            { userId: '40', value: 1 },
            { userId: '41', value: 1 },
            { userId: '42', value: 1 },
            { userId: '43', value: -1 },
            { userId: '44', value: -1 },
        ],
    },
    {
        question: {
            en: 'Can I contribute to the open-source project?',
            he: 'האם אני יכול לתרום לפרויקט הקוד הפתוח?',
        },
        answer: {
            en: 'Absolutely! We welcome contributions from the community. Check our GitHub repository for guidelines.',
            he: 'בהחלט! אנו מזמינים לתרומות מהקהילה. בדוק את המדריך במאגר הקוד שלנו ב-GitHub.',
        },
        votes: [
            { userId: '45', value: 1 },
            { userId: '46', value: 1 },
            { userId: '47', value: 1 },
            { userId: '48', value: 1 },
            { userId: '49', value: 1 },
            { userId: '50', value: 1 },
        ],
    },
    {
        question: {
            en: 'How can I contact customer support?',
            he: 'איך אני יכול ליצור קשר עם שירות הלקוחות?',
        },
        answer: {
            en: 'You can reach our customer support team through the contact form on our official website.',
            he: 'תוכל ליצור קשר עם צוות שירות הלקוחות שלנו דרך טופס היצירת קשר באתר הרשמי שלנו.',
        },
        votes: [
            { userId: '51', value: 1 },
            { userId: '52', value: 1 },
            { userId: '53', value: -1 },
            { userId: '54', value: -1 },
        ],
    },
    {
        question: {
            en: 'What security measures are in place?',
            he: 'אילו צעדים בטיחותיים נעשים?',
        },
        answer: {
            en: 'We prioritize security and employ industry-standard measures, including encryption and regular security audits.',
            he: 'אנו מעדיפים בטיחות ומציבים צעדים בתחום התקן, כולל הצפנה ובדיקות בטיחות תדירות.',
        },
        votes: [
            { userId: '55', value: 1 },
            { userId: '56', value: -1 },
            { userId: '57', value: 1 },
            { userId: '58', value: 1 },
            { userId: '59', value: -1 },
        ],
    },
    {
        question: {
            en: 'Can I use the application offline?',
            he: 'האם אני יכול להשתמש ביישום במצב לא מקוון?',
        },
        answer: {
            en: 'Certain features may be available offline, but full functionality requires an internet connection.',
            he: 'חלק מהתכונות עשויות להיות זמינות במצב לא מקוון, אך פונקציונליות מלאה דורשת חיבור לאינטרנט.',
        },
        votes: [
            { userId: '60', value: 1 },
            { userId: '61', value: -1 },
            { userId: '62', value: 1 },
            { userId: '63', value: 1 },
        ],
    },
    {
        question: {
            en: 'What is the refund policy?',
            he: 'מהו מדיניות ההחזרים?',
        },
        answer: {
            en: 'Our refund policy is outlined in the terms of service available on our website. Please review it for details.',
            he: 'מדיניות ההחזרים שלנו נמצאת בתקנון השירותים הזמין באתר שלנו. בבקשה קרא אותו לקבלת פרטים.',
        },
        votes: [
            { userId: '64', value: 1 },
            { userId: '65', value: 1 },
            { userId: '66', value: -1 },
            { userId: '67', value: -1 },
        ],
    },
];
