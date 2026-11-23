
const questions = {
    beginner: [
        {q:"Chizmachilikda asosiy vazifalardan biri nima?",a:["Buyum shaklini tekislikda tasvirlash","Faqat rang tanlash","Matn yozish","Ovoz yozish"],c:0,e:"Chizmachilik buyumlarning shakli va o‘lchamlarini chizma orqali ifodalaydi."},
        {q:"Chizmachilikda chizg‘ich nima uchun ishlatiladi?",a:["Aylana chizish","To‘g‘ri chiziq chizish va o‘lchash","Rang berish","Qog‘oz kesish"],c:1,e:"Chizg‘ich to‘g‘ri chiziqlar chizish va masofani o‘lchash uchun ishlatiladi."},
        {q:"Aylana chizish uchun qaysi asbob kerak?",a:["Transportir","Uchburchaklik","Sirkul","O‘chirg‘ich"],c:2,e:"Sirkul yordamida aylana va yoylar chiziladi."},
        {q:"Chizmada ingichka uzluksiz chiziq ko‘pincha nimani bildiradi?",a:["Ko‘rinadigan kontur","O‘lcham va chiqarish chiziqlari","Kesim konturi","Uzilgan joy"],c:1,e:"Ingichka uzluksiz chiziq o‘lcham, chiqarish va shtrixlash ishlarida qo‘llanadi."},
        {q:"Chizmada ko‘rinadigan kontur qaysi chiziq bilan chiziladi?",a:["Ingichka shtrix","To‘lqinsimon","Yo‘g‘on uzluksiz","Nuqtali"],c:2,e:"Ko‘rinadigan buyum konturlari yo‘g‘on uzluksiz chiziq bilan belgilanadi."},
        {q:"Transportir nima uchun ishlatiladi?",a:["Burchakni o‘lchash uchun","Aylana chizish uchun","Qog‘ozni kesish uchun","Chiziqni o‘chirish uchun"],c:0,e:"Transportir burchaklarni o‘lchash va yasash uchun ishlatiladi."},
        {q:"Chizmada masshtab nimani anglatadi?",a:["Qog‘oz rangini","Tasvir o‘lchamining haqiqiy o‘lchamga nisbatini","Chiziq qalinligini","Buyum og‘irligini"],c:1,e:"Masshtab tasvir o‘lchami va buyumning haqiqiy o‘lchami nisbatidir."},
        {q:"A4 formatdagi qog‘oz o‘lchami qanday?",a:["210 × 297 mm","297 × 420 mm","148 × 210 mm","420 × 594 mm"],c:0,e:"A4 format 210 × 297 mm o‘lchamga ega."},
        {q:"Chizmada o‘lcham sonlari nimani ko‘rsatadi?",a:["Buyum rangini","Buyum og‘irligini","Buyumning o‘lchamini","Chizma muallifini"],c:2,e:"O‘lcham sonlari buyumning uzunligi, eni, balandligi yoki boshqa o‘lchamlarini bildiradi."},
        {q:"O‘chirg‘ichning vazifasi nima?",a:["Chiziqni qalinlashtirish","Keraksiz qalam izlarini o‘chirish","Burchak o‘lchash","Aylana chizish"],c:1,e:"O‘chirg‘ich qalam bilan chizilgan keraksiz izlarni ketkazadi."},
        {q:"Chizmachilikda format nima?",a:["Chizma qog‘ozining belgilangan o‘lchami","Chizma rangi","Qalam turi","Chiziq yo‘nalishi"],c:0,e:"Format chizma uchun belgilangan qog‘oz o‘lchamidir."},
        {q:"Chizmachilikda asosiy yozuv qayerda joylashadi?",a:["Yuqori chapda","O‘rtada","Pastki o‘ng burchakda","Yuqori o‘ngda"],c:2,e:"Asosiy yozuv odatda chizma ramkasining pastki o‘ng qismida joylashadi."}
    ],
    intermediate: [
        {q:"Ortogonal proyeksiyalashda proyeksiyalovchi nurlar tekislikka qanday tushadi?",a:["Parallel emas","Perpendikulyar","Faqat qiya","Aylanma"],c:1,e:"Ortogonal proyeksiyada proyeksiyalovchi nurlar proyeksiya tekisligiga perpendikulyar bo‘ladi."},
        {q:"Gorizontal proyeksiyalar tekisligi qaysi harf bilan belgilanadi?",a:["H","V","W","S"],c:0,e:"H — gorizontal proyeksiyalar tekisligi."},
        {q:"Frontal proyeksiyalar tekisligi qaysi harf bilan belgilanadi?",a:["H","V","W","A"],c:1,e:"V — frontal proyeksiyalar tekisligi."},
        {q:"Profil proyeksiyalar tekisligi qaysi harf bilan belgilanadi?",a:["H","V","W","K"],c:2,e:"W — profil proyeksiyalar tekisligi."},
        {q:"Kvadratning nechta simmetriya o‘qi bor?",a:["2 ta","3 ta","4 ta","6 ta"],c:2,e:"Kvadratning 4 ta simmetriya o‘qi mavjud."},
        {q:"To‘g‘ri burchak necha gradus?",a:["45°","60°","90°","180°"],c:2,e:"To‘g‘ri burchak 90 gradusga teng."},
        {q:"Qaysi chiziq yashirin konturlarni ko‘rsatadi?",a:["Ingichka uzluksiz","Shtrix chiziq","Yo‘g‘on uzluksiz","Ikki nuqtali"],c:1,e:"Shtrix chiziq ko‘rinmaydigan konturlarni ifodalaydi."},
        {q:"Izometrik aksonometriyada o‘qlar orasidagi burchak odatda necha gradus?",a:["90°","120°","45°","60°"],c:1,e:"Izometrik tasvirda uchta koordinata o‘qi orasidagi burchaklar 120° bo‘ladi."},
        {q:"Masshtab 1:2 nimani anglatadi?",a:["Tasvir ikki marta katta","Tasvir haqiqiy o‘lchamda","Tasvir ikki marta kichik","Tasvir to‘rt marta katta"],c:2,e:"1:2 masshtabda tasvir buyumning haqiqiy o‘lchamidan ikki marta kichik bo‘ladi."},
        {q:"A3 format o‘lchami qaysi?",a:["210 × 297 mm","297 × 420 mm","420 × 594 mm","594 × 841 mm"],c:1,e:"A3 formatning o‘lchami 297 × 420 mm."},
        {q:"Diametr belgisi qaysi?",a:["R","Ø","S","L"],c:1,e:"Ø belgisi aylana yoki silindr diametrini ko‘rsatadi."},
        {q:"Radius qanday harf bilan belgilanadi?",a:["R","D","H","V"],c:0,e:"Radius odatda R harfi bilan belgilanadi."}
    ],
    advanced: [
        {q:"Kubning nechta yoqi mavjud?",a:["4 ta","6 ta","8 ta","12 ta"],c:1,e:"Kub 6 ta kvadrat yoqdan tashkil topgan."},
        {q:"Silindrning nechta tekis doiraviy asosi bor?",a:["1 ta","2 ta","3 ta","4 ta"],c:1,e:"Silindrning ikkita teng va parallel doiraviy asosi bor."},
        {q:"Konusning yon sirti yoyilganda qanday shakl hosil bo‘ladi?",a:["Uchburchak","To‘g‘ri to‘rtburchak","Doira sektori","Kvadrat"],c:2,e:"Konusning yon sirti yoyilganda doira sektori hosil bo‘ladi."},
        {q:"Kesimda asosan nima tasvirlanadi?",a:["Faqat tashqi rang","Kesuvchi tekislikda hosil bo‘lgan shakl","Buyumning soyasi","Faqat o‘lchamlar"],c:1,e:"Kesim kesuvchi tekislikning buyum bilan kesishishidan hosil bo‘lgan shaklni ko‘rsatadi."},
        {q:"Qirqim nima uchun qo‘llanadi?",a:["Ichki tuzilishni ko‘rsatish","Rangni almashtirish","Qog‘ozni kattalashtirish","Masshtabni yashirish"],c:0,e:"Qirqim buyumning ichki tuzilishini ochib ko‘rsatadi."},
        {q:"Detal chizmasida nechta ko‘rinish bo‘lishi mumkin?",a:["Faqat bitta","Faqat ikkita","Faqat uchta","Zarur bo‘lgan yetarli miqdorda"],c:3,e:"Detalni to‘liq tushunish uchun zarur bo‘lgan yetarli ko‘rinishlar tanlanadi."},
        {q:"Muntazam oltiburchakning ichki burchagi necha gradus?",a:["90°","108°","120°","135°"],c:2,e:"Muntazam oltiburchakning har bir ichki burchagi 120°."},
        {q:"To‘g‘ri prizmaning yon qirralari qanday joylashadi?",a:["Asosga perpendikulyar","Asosga parallel","O‘zaro kesishadi","Egri bo‘ladi"],c:0,e:"To‘g‘ri prizmada yon qirralar asos tekisligiga perpendikulyar."},
        {q:"Aylananing diametri 20 mm bo‘lsa, radiusi qancha?",a:["5 mm","10 mm","20 mm","40 mm"],c:1,e:"Radius diametrning yarmiga teng: 20 ÷ 2 = 10 mm."},
        {q:"Uchburchakning ichki burchaklari yig‘indisi qancha?",a:["90°","180°","270°","360°"],c:1,e:"Har qanday tekis uchburchak ichki burchaklari yig‘indisi 180°."},
        {q:"Aylana uzunligi formulasi qaysi?",a:["πr²","2πr","a²","πd²"],c:1,e:"Aylana uzunligi 2πr yoki πd formulasi bilan hisoblanadi."},
        {q:"Piramidaning yon yoqlari qanday shaklda bo‘ladi?",a:["Uchburchaklar","Aylanalar","To‘rtburchaklar","Ellipslar"],c:0,e:"Piramidaning yon yoqlari uchburchaklardan iborat."}
    ],
    expert: [
        {q:"Muntazam tetraedrning nechta qirrasi bor?",a:["4 ta","6 ta","8 ta","12 ta"],c:1,e:"Muntazam tetraedr 4 ta uchburchak yoq va 6 ta qirraga ega."},
        {q:"Muntazam oktaedrning nechta yoqi bor?",a:["4 ta","6 ta","8 ta","12 ta"],c:2,e:"Oktaedr 8 ta teng tomonli uchburchak yoqdan tashkil topadi."},
        {q:"Muntazam dodekaedr nechta yoqqa ega?",a:["8 ta","10 ta","12 ta","20 ta"],c:2,e:"Muntazam dodekaedr 12 ta beshburchak yoqqa ega."},
        {q:"Muntazam ikosaedr nechta uchburchak yoqqa ega?",a:["8 ta","12 ta","20 ta","30 ta"],c:2,e:"Ikosaedr 20 ta teng tomonli uchburchak yoqdan iborat."},
        {q:"Kubning qirrasi 5 mm. Uning to‘la sirt yuzi qancha?",a:["25 mm²","100 mm²","125 mm²","150 mm²"],c:3,e:"Kubning sirt yuzi 6a² = 6 × 25 = 150 mm²."},
        {q:"Konusning asos radiusi 3 cm, balandligi 4 cm. Yasovchisi qancha?",a:["4 cm","5 cm","6 cm","7 cm"],c:1,e:"Yasovchi Pifagor teoremasi bilan topiladi: √(3² + 4²) = 5 cm."},
        {q:"Shar hajmi qaysi formula bilan hisoblanadi?",a:["4πr²","πr²h","4/3 πr³","2πr"],c:2,e:"Shar hajmi V = 4/3 πr³ formulasi bilan hisoblanadi."},
        {q:"Ortogonal proyeksiyalashda bir nuqtaning nechta asosiy proyeksiyasi olinishi mumkin?",a:["Faqat bitta","Uchta asosiy tekislikda uchta","Faqat ikkita","To‘rtta"],c:1,e:"Nuqtaning gorizontal, frontal va profil proyeksiyalari olinishi mumkin."},
        {q:"Ko‘pyoqli jism uchun Eyler formulasi qaysi?",a:["U + Y = Q","U - Q + Y = 2","U × Q = Y","U + Q = Y"],c:1,e:"Qavariq ko‘pyoqlilar uchun U - Q + Y = 2. Bu yerda U — uchlar, Q — qirralar, Y — yoqlar soni."},
        {q:"Kubning nechta diagonali mavjud?",a:["4 ta","6 ta","8 ta","12 ta"],c:0,e:"Kubning 4 ta fazoviy diagonali mavjud."},
        {q:"Agar detal 2:1 masshtabda tasvirlansa, bu nimani anglatadi?",a:["Tasvir ikki marta kichik","Tasvir ikki marta katta","Haqiqiy o‘lcham","Tasvir uch marta katta"],c:1,e:"2:1 masshtab tasvirning haqiqiy buyumdan ikki marta katta ekanini bildiradi."},
        {q:"Kesuvchi tekislik silindr o‘qiga parallel bo‘lsa, kesim qanday shaklda bo‘ladi?",a:["To‘g‘ri to‘rtburchak","Aylana","Uchburchak","Ellips"],c:0,e:"Silindr o‘qiga parallel tekislik bilan kesilganda to‘g‘ri to‘rtburchak kesim hosil bo‘ladi."}
    ]
};

const levelNames = {
    beginner: "BOSHLANG‘ICH",
    intermediate: "O‘RTA",
    advanced: "YUQORI",
    expert: "EKSPERT"
};

const screens = document.querySelectorAll(".screen");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedLevel = "";
let timer = 20;
let interval = null;
let answered = false;
let userAnswers = [];

function showScreen(id) {
    screens.forEach(screen => screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

document.querySelectorAll(".level-card").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.level);
    });
});

function startQuiz(level) {
    selectedLevel = level;
    currentQuestions = shuffle(questions[level]).slice(0, 10);
    currentIndex = 0;
    score = 0;
    userAnswers = [];

    document.getElementById("levelName").textContent = levelNames[level];
    showScreen("quiz");
    showQuestion();
}

function showQuestion() {
    clearInterval(interval);
    answered = false;
    timer = 20;

    const q = currentQuestions[currentIndex];

    document.getElementById("questionCounter").textContent =
        `${currentIndex + 1} / 10`;

    document.getElementById("questionNumber").textContent =
        `SAVOL ${String(currentIndex + 1).padStart(2, "0")}`;

    document.getElementById("questionText").textContent = q.q;
    document.getElementById("progressBar").style.width =
        `${(currentIndex + 1) * 10}%`;

    timerElement.textContent = timer;
    document.getElementById("feedback").textContent = "";
    nextBtn.disabled = true;

    optionsBox.innerHTML = "";

    const shuffledAnswers = shuffle(
        q.a.map((answer, index) => ({
            text: answer,
            originalIndex: index
        }))
    );

    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${answer.text}`;

        button.addEventListener("click", () => {
            selectAnswer(answer.originalIndex, button);
        });

        optionsBox.appendChild(button);
    });

    interval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {
            clearInterval(interval);
            if (!answered) {
                selectAnswer(null, null);
            }
        }
    }, 1000);
}

function selectAnswer(answerIndex, clickedButton) {
    if (answered) return;

    answered = true;
    clearInterval(interval);

    const q = currentQuestions[currentIndex];
    const isCorrect = answerIndex === q.c;

    if (isCorrect) score++;

    userAnswers.push({
        question: q.q,
        selected: answerIndex === null ? "Vaqt tugadi" : q.a[answerIndex],
        correct: q.a[q.c],
        isCorrect,
        explanation: q.e
    });

    const buttons = optionsBox.querySelectorAll(".option");

    buttons.forEach(button => {
        button.disabled = true;

        const letter = button.textContent.slice(0, 1);
        const index = letter.charCodeAt(0) - 65;

        const displayedAnswers = shuffle([]); // Faqat bo‘sh massiv.
        void displayedAnswers;
    });

    const displayed = [...buttons];
    displayed.forEach(button => {
        const answerText = button.textContent.slice(3);
        if (answerText === q.a[q.c]) {
            button.classList.add("correct");
        }
    });

    if (clickedButton && !isCorrect) {
        clickedButton.classList.add("wrong");
    }

    const feedback = document.getElementById("feedback");

    feedback.textContent = isCorrect
        ? "✓ To‘g‘ri javob! " + q.e
        : "✗ Noto‘g‘ri javob. To‘g‘ri javob: " + q.a[q.c] + ". " + q.e;

    nextBtn.disabled = false;
    nextBtn.textContent = currentIndex === 9
        ? "NATIJANI KO‘RISH →"
        : "KEYINGI SAVOL →";
}

nextBtn.addEventListener("click", () => {
    if (!answered) return;

    if (currentIndex < 9) {
        currentIndex++;
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    clearInterval(interval);
    showScreen("result");

    const wrong = 10 - score;
    const percent = score * 10;

    document.getElementById("score").textContent = score;
    document.getElementById("correctCount").textContent = score;
    document.getElementById("wrongCount").textContent = wrong;
    document.getElementById("percentage").textContent = percent + "%";

    let title = "Yana mashq qiling!";
    let message = "Bilimingizni mustahkamlashda davom eting.";

    if (score >= 9) {
        title = "AJOYIB NATIJA!";
        message = "Siz chizmachilikni juda yaxshi bilasiz!";
    } else if (score >= 7) {
        title = "JUDAYAM YAXSHI!";
        message = "Sizda yaxshi bilim va ko‘nikmalar bor!";
    } else if (score >= 5) {
        title = "YAXSHI!";
        message = "Yana biroz mashq qilsangiz, yanada yaxshi bo‘ladi.";
    }

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultMessage").textContent = message;

    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";

    userAnswers.forEach((answer, index) => {
        const item = document.createElement("div");
        item.className = "review-item";

        const heading = document.createElement("h3");
        heading.textContent = `${index + 1}. ${answer.question}`;

        const result = document.createElement("p");
        result.className = answer.isCorrect ? "good" : "bad";
        result.textContent = answer.isCorrect
            ? "✓ To‘g‘ri javob"
            : "✗ Noto‘g‘ri javob";

        const selected = document.createElement("p");
        selected.textContent = "Sizning javobingiz: " + answer.selected;

        const correct = document.createElement("p");
        correct.textContent = "To‘g‘ri javob: " + answer.correct;

        const explanation = document.createElement("p");
        explanation.className = "explanation";
        explanation.textContent = "Izoh: " + answer.explanation;

        item.append(heading, result, selected, correct, explanation);
        reviewList.appendChild(item);
    });
}

document.getElementById("restartBtn").addEventListener("click", () => {
    startQuiz(selectedLevel);
});

document.getElementById("homeBtn").addEventListener("click", () => {
    clearInterval(interval);
    showScreen("home");
});

document.getElementById("exitBtn").addEventListener("click", () => {
    clearInterval(interval);
    showScreen("home");
});
