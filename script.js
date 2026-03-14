// نظام الدخول
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
});

// التبويبات
function openTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
}

// الوضع المظلم
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// اللغات
const langData = {
    ar: { title: "أنا أيوب، مبدع في البرمجة والتصميم", projects: "أبرز أعمالي", name: "أيوب" },
    en: { title: "I'm Ayoub, Coding & Design Creator", projects: "My Top Projects", name: "Ayoub" },
    fr: { title: "Je suis Ayoub, Créateur de Code & Design", projects: "Mes Réalisations", name: "Ayoub" }
};

document.getElementById('lang-switch').addEventListener('change', (e) => {
    const l = langData[e.target.value];
    document.documentElement.dir = e.target.value === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('hero-title').textContent = l.title;
    document.getElementById('projects-title').textContent = l.projects;
    document.getElementById('nav-name').textContent = l.name;
});