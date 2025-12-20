const characters = [{
        name: "Clorinde",
        gender: "female",
        img: "images/clorinde.png",
        desc: "Cewe tangguh dan gesit.",
        details: "Pintar, gesit, suka membantu teman, selalu berani menghadapi rintangan sulit, dan memiliki hati yang besar.",
        words: "Aku nggak takut menghadapi tantangan apapun!",
        sound: "sounds/clorinde.mp3"
    },
    {
        name: "Phainon",
        gender: "male",
        img: "images/phainon.png",
        desc: "Cowo pejuang penuh semangat.",
        details: "Berani, setia, punya strategi hebat, selalu melindungi teman-temannya.",
        words: "Aku akan melindungimu sampai akhir.",
        sound: "sounds/phainon.mp3"
    },
    {
        name: "Cyrene",
        gender: "female",
        img: "images/cyrene.png",
        desc: "Cewe pejuang dengan cinta.",
        details: "Penyayang, tegas, penuh kasih sayang, selalu mendukung teman.",
        words: "Cinta dan keberanian adalah kekuatanku.",
        sound: "sounds/cyrene.mp3"
    },
    {
        name: "Yanagi",
        gender: "female",
        img: "images/yanagi.png",
        desc: "Gesit dan keibuan.",
        details: "Selalu memperhatikan teman, cekatan, penuh kasih sayang, dan bijaksana.",
        words: "Jangan khawatir, aku akan selalu di sini.",
        sound: "sounds/yanagi.mp3"
    },
    {
        name: "Vivian",
        gender: "female",
        img: "images/vivian.png",
        desc: "Lembut dan romantis.",
        details: "Ramah, penyayang, punya jiwa seni, selalu mendukung orang di sekitarnya.",
        words: "Hidup terasa indah dengan cinta.",
        sound: "sounds/vivian.mp3"
    },
    {
        name: "Yae Miko",
        gender: "female",
        img: "images/yae_miko.png",
        desc: "Jahil & mengerikan tapi baik.",
        details: "Cerdik, nakal tapi perhatian, bisa membuat orang tertawa, pintar menyelesaikan masalah.",
        words: "Hati-hati, aku bisa muncul di mana saja!",
        sound: "sounds/yae_miko.mp3"
    },
    {
        name: "Hina",
        gender: "female",
        img: "images/hina.png",
        desc: "Imut dan mandiri.",
        details: "Lincah, mandiri, selalu ingin belajar hal baru, punya semangat tinggi.",
        words: "Aku bisa melakukan ini sendiri!",
        sound: "sounds/hina.mp3"
    },
    {
        name: "Cerydra",
        gender: "female",
        img: "images/cerydra.png",
        desc: "Pemimpin tegas dan tangguh.",
        details: "Bijaksana, kuat, adil, mampu memimpin tim dengan baik dan penuh tanggung jawab.",
        words: "Ikuti aku, kita bisa melewati ini bersama.",
        sound: "sounds/cerydra.mp3"
    },
    {
        name: "Hysilens",
        gender: "female",
        img: "images/hysilens.png",
        desc: "Kesatria setia dan kuat.",
        details: "Setia, berani, mampu menghadapi bahaya demi teman, penuh kehormatan.",
        words: "Aku akan selalu berdiri di sampingmu.",
        sound: "sounds/hysilens.mp3"
    },
    {
        name: "Kafka",
        gender: "female",
        img: "images/kafka.png",
        desc: "Killer keibuan penuh misteri.",
        details: "Tangguh, misterius, penyayang pada yang lemah, cerdas dalam strategi.",
        words: "Jangan remehkan sisi lembutku.",
        sound: "sounds/kafka.mp3"
    },
    {
        name: "Miyabi",
        gender: "female",
        img: "images/miyabi.png",
        desc: "Tangguh dan badass.",
        details: "Berani, tegas, handal dalam pertarungan, tidak mudah menyerah.",
        words: "Aku tidak takut siapa pun!",
        sound: "sounds/miyabi.mp3"
    },
    {
        name: "Robin",
        gender: "female",
        img: "images/robin.png",
        desc: "Ceria & bersuara indah.",
        details: "Optimis, ceria, memiliki bakat menyanyi, selalu menyemangati teman.",
        words: "Ayo tersenyum bersama!",
        sound: "sounds/robin.mp3"
    },
    {
        name: "Sunday",
        gender: "male",
        img: "images/sunday.png",
        desc: "Gelap → bertobat.",
        details: "Misterius, pernah salah, kini berusaha menebus kesalahan, setia pada teman.",
        words: "Aku berjanji untuk berubah.",
        sound: "sounds/sunday.mp3"
    },
    {
        name: "Mydei",
        gender: "male",
        img: "images/mydei.png",
        desc: "Pemarah tapi baik & suka anak-anak.",
        details: "Pemarah tapi berhati lembut, penyayang anak-anak, selalu peduli teman.",
        words: "Jangan membuatku marah, tapi aku akan selalu menolongmu.",
        sound: "sounds/mydei.mp3"
    },
    {
        name: "Anaxa",
        gender: "male",
        img: "images/anaxa.png",
        desc: "Dosen pintar & sensitif.",
        details: "Cerdas, peka terhadap perasaan orang lain, sabar, menyukai belajar dan mengajar.",
        words: "Ilmu adalah kekuatan.",
        sound: "sounds/anaxa.mp3"
    },
    {
        name: "Acheron",
        gender: "female",
        img: "images/acheron.png",
        desc: "Pendiam & menggetarkan.",
        details: "Tenang, misterius, kata-katanya berwibawa, memiliki aura yang kuat.",
        words: "Diamku bukan lemahku.",
        sound: "sounds/acheron.mp3"
    },
    {
        name: "Aventurine",
        gender: "male",
        img: "images/aventurine.png",
        desc: "Gentleman penuh percaya diri.",
        details: "Sopan, percaya diri, selalu menjaga martabat, ramah pada semua orang.",
        words: "Kepercayaan diri adalah kunci.",
        sound: "sounds/aventurine.mp3"
    },
    {
        name: "Huohuo",
        gender: "female",
        img: "images/huohuo.png",
        desc: "Penakut tapi kuat.",
        details: "Terkadang takut tapi selalu bangkit, setia, berani melindungi teman.",
        words: "Meskipun takut, aku tidak akan mundur.",
        sound: "sounds/huohuo.mp3"
    },
    {
        name: "Wriothesley",
        gender: "male",
        img: "images/wriothesley.png",
        desc: "Badass, hangat, pemimpin.",
        details: "Berani, memimpin dengan hati, hangat terhadap teman, penuh strategi.",
        words: "Ikuti aku, aku akan menuntunmu.",
        sound: "sounds/wriothesley.mp3"
    },
    {
        name: "Neuvillette",
        gender: "male",
        img: "images/neuvillette.png",
        desc: "Pendiam, tegas, megah.",
        details: "Tenang, tegas, berwibawa, selalu menegakkan keadilan.",
        words: "Kehormatan adalah segalanya.",
        sound: "sounds/neuvillette.mp3"
    },
    {
        name: "Shorekeeper",
        gender: "female",
        img: "images/shorekeeper.png",
        desc: "Pemimpin bijak dan kuat.",
        details: "Bijaksana, kuat, melindungi dunia, selalu memikirkan masa depan.",
        words: "Aku akan menjaga pantai ini.",
        sound: "sounds/shorekeeper.mp3"
    },
    {
        name: "Jane Doe",
        gender: "female",
        img: "images/jane_doe.png",
        desc: "Misterius dan cerdas.",
        details: "Rahasia, cerdas, selalu mencari kebenaran, penuh misteri.",
        words: "Siapa aku sebenarnya?",
        sound: "sounds/jane_doe.mp3"
    },
    {
        name: "Kiana",
        gender: "female",
        img: "images/kiana.png",
        desc: "Pemberani dan energik.",
        details: "Berani, energik, melawan musuh, selalu melindungi teman.",
        words: "Aku tidak akan menyerah!",
        sound: "sounds/kiana.mp3"
    },
    {
        name: "Dyroth Starlight",
        gender: "male",
        img: "images/dyroth_starlight.png",
        desc: "Pahlawan bintang yang strategis.",
        details: "Strategis, kuat, memimpin pasukan, penuh keberanian.",
        words: "Bintang akan memandu kita.",
        sound: "sounds/dyroth_starlight.mp3"
    },
    {
        name: "Ye Shunguang",
        gender: "female",
        img: "images/ye_shunguang.png",
        desc: "Cerah dan penuh harapan.",
        details: "Optimis, ceria, membawa cahaya, selalu mendukung.",
        words: "Mari kita lihat cahaya itu.",
        sound: "sounds/ye_shunguang.mp3"
    },
    {
        name: "Astra Yao",
        gender: "female",
        img: "images/astra_yao.png",
        desc: "Bijak dan visioner.",
        details: "Visioner, bijaksana, melihat masa depan, penuh wawasan.",
        words: "Masa depan ada di tangan kita.",
        sound: "sounds/astra_yao.mp3"
    },
    {
        name: "Ciaccona",
        gender: "female",
        img: "images/ciaccona.png",
        desc: "Elegan dan kuat.",
        details: "Elegan, kuat, penuh gaya, selalu menari dalam pertarungan.",
        words: "Mari kita berdansa.",
        sound: "sounds/ciaccona.mp3"
    },
    {
        name: "Brant",
        gender: "male",
        img: "images/brant.png",
        desc: "Tangguh dan setia.",
        details: "Tangguh, setia, melindungi, selalu berdiri teguh.",
        words: "Aku akan melindungimu.",
        sound: "sounds/brant.mp3"
    },
    {
        name: "Raiden Shogun",
        gender: "female",
        img: "images/raiden_shogun.png",
        desc: "Megah dan adil.",
        details: "Megah, adil, memimpin dengan kekuatan, menegakkan hukum.",
        words: "Keadilan akan ditegakkan.",
        sound: "sounds/raiden_shogun.mp3"
    },
    {
        name: "Skirk",
        gender: "female",
        img: "images/skirk.png",
        desc: "Lincah dan cerdas.",
        details: "Lincah, cerdas, selalu menemukan jalan, penuh trik.",
        words: "Aku tahu rahasianya.",
        sound: "sounds/skirk.mp3"
    },
    {
        name: "Tribbie",
        gender: "female",
        img: "images/tribbie.png",
        desc: "Enerjik dan lucu.",
        details: "Enerjik, lucu, membawa kegembiraan, selalu aktif.",
        words: "Yey, seru!",
        sound: "sounds/tribbie.mp3"
    },
    {
        name: "Arlechinno",
        gender: "female",
        img: "images/arlechinno.png",
        desc: "Misterius dan dramatis.",
        details: "Misterius, dramatis, penuh teka-teki, selalu mengejutkan.",
        words: "Mari kita main teka-teki.",
        sound: "sounds/arlechinno.mp3"
    },
    {
        name: "The Herta",
        gender: "female",
        img: "images/the_herta.png",
        desc: "Genius dan eksentrik.",
        details: "Genius, eksentrik, menciptakan hal-hal luar biasa, penuh ide.",
        words: "Sains adalah jawabannya.",
        sound: "sounds/the_herta.mp3"
    },
    {
        name: "Ruanmei",
        gender: "female",
        img: "images/ruanmei.png",
        desc: "Tenang dan analitis.",
        details: "Tenang, analitis, mempelajari segalanya, selalu objektif.",
        words: "Mari kita analisis.",
        sound: "sounds/ruanmei.mp3"
    },
    {
        name: "Evernight",
        gender: "female",
        img: "images/evernight.png",
        desc: "Gelap dan kuat.",
        details: "Gelap, kuat, menghadapi malam, penuh misteri.",
        words: "Malam adalah sekutu ku.",
        sound: "sounds/evernight.mp3"
    },
    {
        name: "Danheng",
        gender: "male",
        img: "images/danheng.png",
        desc: "Pendiam dan kuat.",
        details: "Pendiam, kuat, melindungi, selalu waspada.",
        words: "Aku akan menjaga.",
        sound: "sounds/danheng.mp3"
    },
    {
        name: "March",
        gender: "female",
        img: "images/march.png",
        desc: "Ceria dan fotografer.",
        details: "Ceria, fotografer, mengabadikan momen, selalu positif.",
        words: "Klik! Bagus!",
        sound: "sounds/march.mp3"
    },
    {
        name: "Aglaea",
        gender: "female",
        img: "images/aglaea.png",
        desc: "Anggun dan bijak.",
        details: "Anggun, bijak, membawa keindahan, selalu elegan.",
        words: "Keindahan ada di mana-mana.",
        sound: "sounds/aglaea.mp3"
    },
    {
        name: "Firefly",
        gender: "female",
        img: "images/firefly.png",
        desc: "Bersinar dan pemberani.",
        details: "Bersinar, pemberani, menerangi kegelapan, selalu berani.",
        words: "Aku akan bersinar.",
        sound: "sounds/firefly.mp3"
    },
    {
        name: "Fugue",
        gender: "female",
        img: "images/fugue.png",
        desc: "Misterius dan harmonis.",
        details: "Misterius, harmonis, menciptakan musik, penuh melodi.",
        words: "Mari dengarkan musiknya.",
        sound: "sounds/fugue.mp3"
    }
];

const characterTraits = {
    "Clorinde": { brave: 3, smart: 2, leader: 2 },
    "Phainon": { brave: 3, leader: 2, warm: 2 },
    "Cyrene": { brave: 2, warm: 3, gentle: 2 },
    "Yanagi": { gentle: 3, warm: 2, cautious: 1 },
    "Vivian": { gentle: 2, warm: 3, smart: 1 },
    "Yae Miko": { smart: 3, brave: 2, warm: 2 },
    "Hina": { brave: 2, warm: 2, smart: 1 },
    "Cerydra": { leader: 3, brave: 2, smart: 2 },
    "Hysilens": { brave: 3, gentle: 2, leader: 1 },
    "Kafka": { smart: 2, brave: 2, gentle: 2 },
    "Miyabi": { brave: 3, leader: 1, smart: 1 },
    "Robin": { warm: 3, gentle: 1, smart: 1 },
    "Sunday": { smart: 2, gentle: 3, cautious: 1 },
    "Mydei": { brave: 2, gentle: 2, warm: 2 },
    "Anaxa": { smart: 3, gentle: 2, cautious: 1 },
    "Acheron": { brave: 2, smart: 2, leader: 2 },
    "Aventurine": { leader: 2, warm: 2, smart: 2 },
    "Huohuo": { cautious: 2, brave: 2, gentle: 2 },
    "Wriothesley": { brave: 3, leader: 2, warm: 2 },
    "Neuvillette": { leader: 3, smart: 2, brave: 1 },
    "Shorekeeper": { leader: 3, smart: 2, brave: 1 },
    "Jane Doe": { smart: 3, cautious: 3 },
    "Kiana": { brave: 3, leader: 2 },
    "Dyroth Starlight": { brave: 3, leader: 2, smart: 2 },
    "Ye Shunguang": { warm: 3, gentle: 2 },
    "Astra Yao": { smart: 3, leader: 2 },
    "Ciaccona": { brave: 2, leader: 2, smart: 1 },
    "Brant": { brave: 3, gentle: 2 },
    "Raiden Shogun": { leader: 3, brave: 2 },
    "Skirk": { smart: 2, brave: 2 },
    "Tribbie": { warm: 3, brave: 1 },
    "Arlechinno": { smart: 2, cautious: 2 },
    "The Herta": { smart: 3, leader: 1 },
    "Ruanmei": { smart: 3, cautious: 2 },
    "Evernight": { brave: 3, smart: 1 },
    "Danheng": { brave: 2, leader: 2 },
    "March": { warm: 3, gentle: 2 },
    "Aglaea": { gentle: 3, smart: 2 },
    "Firefly": { brave: 3, warm: 2 },
    "Fugue": { smart: 2, gentle: 2 }
};

let nameMapping = {
    "rara": "Phainon",
    "kirana": "Wriothesley",
    "galang": "hina",
    "radja": "Yae Miko",
    "bryan": "Clorinde",
    "bryann": "Robin"
};

const quizQuestions = [{
        question: "Ketika ada masalah, kamu cenderung...",
        answers: [
            { text: "Langsung hadapi, jangan takut", traits: { brave: 2, leader: 1 } },
            { text: "Pikir matang-matang dulu", traits: { smart: 2, cautious: 1 } },
            { text: "Cari solusi yang baik untuk semua", traits: { warm: 2, leader: 1 } },
            { text: "Minta bantuan orang terpercaya", traits: { gentle: 2, cautious: 1 } }
        ]
    },
    {
        question: "Sifat terbaik kamu adalah...",
        answers: [
            { text: "Kuat dan tangguh", traits: { brave: 3 } },
            { text: "Cerdas dan strategis", traits: { smart: 3 } },
            { text: "Penyayang dan perhatian", traits: { gentle: 3 } },
            { text: "Tegas dan bisa memimpin", traits: { leader: 3 } }
        ]
    },
    {
        question: "Dalam kelompok, kamu lebih suka...",
        answers: [
            { text: "Jadi pemimpin", traits: { leader: 3, brave: 1 } },
            { text: "Jadi pendukung teman", traits: { gentle: 2, warm: 2 } },
            { text: "Berpikir solusi terbaik", traits: { smart: 2, cautious: 1 } },
            { text: "Jadi yang paling berani", traits: { brave: 3 } }
        ]
    },
    {
        question: "Ketika ada teman sedih, kamu...",
        answers: [
            { text: "Dengarkan dan beri dukungan", traits: { gentle: 3, warm: 2 } },
            { text: "Bantu cari solusi terbaik", traits: { smart: 2, leader: 1 } },
            { text: "Ajak melakukan sesuatu seru", traits: { warm: 2, brave: 1 } },
            { text: "Ada untuk mereka kapan saja", traits: { gentle: 2, warm: 2 } }
        ]
    },
    {
        question: "Hal yang paling ditakuti adalah...",
        answers: [
            { text: "Tidak berguna bagi orang lain", traits: { warm: 2, gentle: 1 } },
            { text: "Kalah atau mengecewakan", traits: { brave: 2, leader: 1 } },
            { text: "Ambil keputusan salah", traits: { cautious: 3 } },
            { text: "Tidak memahami sesuatu", traits: { smart: 2 } }
        ]
    },
    {
        question: "Impianmu yang terbesar adalah...",
        answers: [
            { text: "Menjadi yang terbaik/terkuat", traits: { brave: 3, leader: 1 } },
            { text: "Membuat orang bahagia", traits: { warm: 3, gentle: 1 } },
            { text: "Menemukan kebenaran/ilmu", traits: { smart: 3 } },
            { text: "Melindungi orang terkasih", traits: { brave: 2, gentle: 2 } }
        ]
    }
];

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

let userProfile = {};
let currentQuestion = 0;
let username = "";
let selectedAnswerIdx = -1;
let gachaMode = "personality"; // "personality" atau "compatibility"

document.getElementById("adminBtn").addEventListener("click", openAdmin);

function openBrowse() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("browsePanel").classList.remove("hidden");
    displayBrowseCharacters();
}

function closeBrowse() {
    document.getElementById("browsePanel").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}

function openTutorial() {
    document.getElementById("tutorialModal").classList.remove("hidden");
}

function closeTutorial() {
    document.getElementById("tutorialModal").classList.add("hidden");
}

function displayBrowseCharacters() {
    const list = document.getElementById("browseCharacterList");
    list.innerHTML = "";
    characters.forEach(char => {
        const traits = characterTraits[char.name];
        const traitText = traits ? Object.entries(traits).filter(([k, v]) => v > 0).map(([k, v]) => `${k}: ${v}`).join(", ") : "N/A";

        list.innerHTML += `
            <div class="char-item">
                <img src="${char.img}" alt="${char.name}" class="char-thumbnail" onerror="this.style.display='none'">
                <div class="info">
                    <div class="name">${char.name}</div>
                    <div class="gender">${char.gender === "male" ? "♂ Laki-laki" : char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}</div>
                    <div class="desc">${char.desc}</div>
                    <small style="color: #999;">${traitText}</small>
                </div>
                <div class="char-actions">
                    <button class="char-item-btn" onclick="viewCharacter('${char.name}')">Lihat Detail</button>
                </div>
            </div>
        `;
    });
}

function filterCharacters() {
    const searchTerm = document.getElementById("searchName").value.toLowerCase();
    const genderFilter = document.getElementById("filterGender").value;
    const traitFilter = document.getElementById("filterTrait").value;

    const list = document.getElementById("browseCharacterList");
    list.innerHTML = "";

    characters.forEach(char => {
        const matchesSearch = char.name.toLowerCase().includes(searchTerm);
        const matchesGender = !genderFilter || char.gender === genderFilter;
        const traits = characterTraits[char.name] || {};
        const matchesTrait = !traitFilter || (traits[traitFilter] && traits[traitFilter] > 0);

        if (matchesSearch && matchesGender && matchesTrait) {
            const traitText = traits ? Object.entries(traits).filter(([k, v]) => v > 0).map(([k, v]) => `${k}: ${v}`).join(", ") : "N/A";

            list.innerHTML += `
                <div class="char-item">
                    <img src="${char.img}" alt="${char.name}" class="char-thumbnail" onerror="this.style.display='none'">
                    <div class="info">
                        <div class="name">${char.name}</div>
                        <div class="gender">${char.gender === "male" ? "♂ Laki-laki" : char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}</div>
                        <div class="desc">${char.desc}</div>
                        <small style="color: #999;">${traitText}</small>
                    </div>
                    <div class="char-actions">
                        <button class="char-item-btn" onclick="viewCharacter('${char.name}')">Lihat Detail</button>
                    </div>
                </div>
            `;
        }
    });
}

function viewCharacter(name) {
    const char = characters.find(c => c.name === name);
    if (!char) return;

    const traits = characterTraits[name];
    const traitText = traits ? Object.entries(traits).filter(([k, v]) => v > 0).map(([k, v]) => `${k}: ${v}`).join(", ") : "N/A";

    document.getElementById("result").innerHTML = `
        <h2>Detail Karakter</h2>
        <div class="char-card fadeIn">
            <div class="char-card-top">
                <img src="${char.img}" alt="${char.name}">
                <div class="char-info">
                    <h1>${char.name}</h1>
                    <p><strong>Gender:</strong> ${char.gender === "male" ? "Laki-laki" : char.gender === "anomali" ? "Anomali" : "Perempuan"}</p>
                    <p><strong>Deskripsi:</strong> ${char.desc}</p>
                    <p><strong>Ciri-ciri:</strong> ${char.details}</p>
                    <p><strong>Trait:</strong> ${traitText}</p>
                </div>
            </div>
            <div class="char-card-bottom">
                <img src="${char.img}" alt="${char.name}">
                <p class="char-words">"${char.words}"</p>
            </div>
        </div>
        <button onclick="closeCharacterView()">← Kembali ke Jelajah</button>
    `;

    document.getElementById("browsePanel").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

function closeCharacterView() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("browsePanel").classList.remove("hidden");
}

// Load karakter dari localStorage saat halaman muat
window.addEventListener("load", () => {
    loadCharactersFromStorage();
    loadNameMappingsFromStorage();
});

function startQuiz(mode) {
    username = document.getElementById("username").value;
    if (!username) {
        alert("Isi nama dulu ya!");
        return;
    }

    gachaMode = mode;
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    currentQuestion = 0;
    userProfile = { brave: 0, smart: 0, gentle: 0, leader: 0, warm: 0, cautious: 0 };
    selectedAnswerIdx = -1;

    displayQuestion();
}

function displayQuestion() {
    const quizContent = document.getElementById("quizContent");
    const q = quizQuestions[currentQuestion];
    const modeTitle = gachaMode === "personality" ? "🔍 Kamu Mirip Siapa?" : "💕 Pasangan Mu?";

    let html = `
        <div class="quiz-mode-title">${modeTitle}</div>
        <div class="quiz-progress">Pertanyaan ${currentQuestion + 1} dari ${quizQuestions.length}</div>
        <div class="quiz-question">
            <h3>${q.question}</h3>
            <div class="quiz-options">
    `;

    q.answers.forEach((answer, idx) => {
        html += `<div class="quiz-option" onclick="selectAnswer(${idx})">${answer.text}</div>`;
    });

    html += `
            </div>
        </div>
        <div class="quiz-button-group">
            <button onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>← Sebelumnya</button>
            <button onclick="nextQuestion()" id="nextBtn">Selanjutnya →</button>
        </div>
    `;

    quizContent.innerHTML = html;
}

function selectAnswer(idx) {
    selectedAnswerIdx = idx;
    document.querySelectorAll(".quiz-option").forEach((el, i) => {
        el.classList.toggle("selected", i === idx);
    });
}

function nextQuestion() {
    if (selectedAnswerIdx === -1) {
        alert("Pilih jawaban dulu!");
        return;
    }

    const answer = quizQuestions[currentQuestion].answers[selectedAnswerIdx];
    Object.keys(answer.traits).forEach(trait => {
        userProfile[trait] += answer.traits[trait];
    });

    selectedAnswerIdx = -1;
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        startGachaAnimation();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedAnswerIdx = -1;
        displayQuestion();
    }
}

function startGachaAnimation() {
    // Play gacha spin sound
    new Audio('gacha.mp3').play();

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("gachaAnim").classList.remove("hidden");

    // Animate gacha text
    const gachaText = document.getElementById("gachaText");
    const messages = [
        "Sedang mencari karakter terbaik...",
        "Menganalisis kepribadianmu...",
        "Memproses data...",
        "Hampir selesai...",
        "Siap-siap melihat hasilnya!"
    ];

    let messageIndex = 0;
    const textInterval = setInterval(() => {
        gachaText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 400);

    setTimeout(() => {
        clearInterval(textInterval);
        rollCharacter(username);
    }, 2000);
}

function rollCharacter(username) {
    const result = document.getElementById("result");
    const gacha = document.getElementById("gachaAnim");

    let char = findBestCharacter();

    document.body.style.backgroundImage = char.gender === "male" ?
        'url("images/sunset.jpg")' :
        char.gender === "anomali" ? 'url("images/black.jpg")' :
        'url("images/taman_bunga.jpg")';

    if (char.gender === "anomali") {
        const anomalyAudio = new Audio("sounds/anomali.mp3");
        anomalyAudio.addEventListener('ended', () => {
            new Audio(char.sound).play();
        });
        anomalyAudio.play();
    } else {
        new Audio(char.sound).play();
    }

    // Play backsound for Robin
    if (char.name === "Robin") {
        const robinBacksound = new Audio("sounds/robin_sound.mp3");
        robinBacksound.play();
    }

    // Play backsound for Astra Yao
    if (char.name === "Astra Yao") {
        const astraYaoBacksound = new Audio("sounds/astra_yao_sound.mp3");
        astraYaoBacksound.play();
    }


    createParticles(char.gender);
    animateParticles();

    // Gimmick untuk karakter anomali
    if (char.gender === "anomali") {
        // Shake effect
        document.body.classList.add("shake");
        setTimeout(() => {
            document.body.classList.remove("shake");
        }, 500);

        // Show error message
        const errorMsg = document.getElementById("errorMessage");
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 2000);
    }

    gacha.classList.add("hidden");
    result.classList.remove("hidden");

    result.innerHTML = `
        <h2>Hai, ${username}!</h2>
        <div class="char-card fadeIn">
            <div class="char-card-top">
                <img src="${char.img}" alt="${char.name}">
                <div class="char-info">
                    <h1>${char.name}</h1>
                    <p id="desc" style="opacity:0;"><strong>Deskripsi:</strong> ${char.desc}</p>
                    <p id="traits" style="opacity:0;"><strong>Ciri-ciri:</strong> ${char.details}</p>
                </div>
            </div>
            <div class="char-card-bottom">
                <img src="${char.img}" alt="${char.name}">
                <p id="words" style="opacity:0;" class="char-words">"${char.words}"</p>
            </div>
        </div>
        <button onclick="location.reload()">Coba Lagi</button>
    `;

    const soundEffect = new Audio("sounds/pop.mp3");
    setTimeout(() => {
        document.getElementById("desc").style.opacity = 1;
        soundEffect.play();
    }, 500);
    setTimeout(() => {
        document.getElementById("traits").style.opacity = 1;
        soundEffect.play();
    }, 1000);
    setTimeout(() => {
        document.getElementById("words").style.opacity = 1;
        soundEffect.play();
    }, 1500);
}

function findBestCharacter() {
    // Check if username is mapped to a specific character
    const lowerUsername = username.toLowerCase();
    if (nameMapping[lowerUsername]) {
        const mappedCharName = nameMapping[lowerUsername];
        const mappedChar = characters.find(char => char.name === mappedCharName);
        if (mappedChar) {
            return mappedChar;
        }
    }

    let bestMatch = characters[0];
    let bestScore = -Infinity;

    if (gachaMode === "personality") {
        // MODE PERSONALITY: Cocokkan trait yang sama
        characters.forEach(char => {
            let score = 0;
            const traits = characterTraits[char.name];

            Object.keys(traits).forEach(trait => {
                score += traits[trait] * (userProfile[trait] || 0);
            });

            score += Math.random() * 5;

            if (score > bestScore) {
                bestScore = score;
                bestMatch = char;
            }
        });
    } else if (gachaMode === "compatibility") {
        // MODE COMPATIBILITY: Cari yang komplementer (berlawanan/seimbang)
        characters.forEach(char => {
            let score = 0;
            const traits = characterTraits[char.name];

            // Hitung skor berdasarkan keseimbangan trait
            Object.keys(traits).forEach(trait => {
                const charTrait = traits[trait] || 0;
                const userTrait = userProfile[trait] || 0;

                // Karakter yang punya trait seimbang lebih baik
                // Contoh: user brave tinggi, cari yang gentle/cautious
                const difference = Math.abs(charTrait - userTrait);
                if (difference >= 1) {
                    score += (3 - difference) * 2; // Prefer sedikit berbeda
                } else if (difference === 0) {
                    score += 1; // Neutral
                }
            });

            score += Math.random() * 5;

            if (score > bestScore) {
                bestScore = score;
                bestMatch = char;
            }
        });
    }

    return bestMatch;
}

function createParticles(gender) {
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 5 + 2,
            speedY: Math.random() * 1 + 0.5,
            type: gender === "male" ? "cloud" : gender === "anomali" ? "star" : "flower"
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.type === "cloud" ? "rgba(255,255,255,0.5)" :
            p.type === "star" ? "rgba(255,255,255,0.7)" :
            "rgba(255,182,193,0.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y -= p.speedY;
        if (p.y + p.size < 0) p.y = canvas.height + p.size;
    });
    requestAnimationFrame(animateParticles);
}

function loadNameMappingsFromStorage() {
    const stored = localStorage.getItem("nameMappings");
    if (stored) {
        const customMappings = JSON.parse(stored);
        Object.assign(nameMapping, customMappings);
    }
}

function populateCharacterSelect() {
    const select = document.getElementById("mapCharacter");
    select.innerHTML = '<option value="">Pilih Karakter</option>';
    characters.forEach(char => {
        select.innerHTML += `<option value="${char.name}">${char.name}</option>`;
    });
}

function addNameMapping() {
    const name = document.getElementById("mapName").value.trim().toLowerCase();
    const character = document.getElementById("mapCharacter").value;

    if (!name || !character) {
        alert("Isi nama dan karakter ya!");
        return;
    }

    nameMapping[name] = character;

    // Simpan ke localStorage
    let stored = localStorage.getItem("nameMappings");
    const customMappings = stored ? JSON.parse(stored) : {};
    customMappings[name] = character;
    localStorage.setItem("nameMappings", JSON.stringify(customMappings));

    alert(`Mapping ${name} -> ${character} berhasil ditambahkan!`);
    document.getElementById("mapName").value = "";
    document.getElementById("mapCharacter").value = "";
    refreshNameMappingList();
}

function deleteNameMapping(name) {
    if (!confirm(`Hapus mapping untuk ${name}?`)) return;

    delete nameMapping[name];

    // Update localStorage
    let stored = localStorage.getItem("nameMappings");
    const customMappings = stored ? JSON.parse(stored) : {};
    delete customMappings[name];
    localStorage.setItem("nameMappings", JSON.stringify(customMappings));

    refreshNameMappingList();
}

function refreshNameMappingList() {
    const list = document.getElementById("nameMappingList");
    list.innerHTML = "";

    Object.entries(nameMapping).forEach(([name, charName]) => {
        list.innerHTML += `
            <div class="mapping-item">
                <div class="info">
                    <div class="name">${name}</div>
                    <div class="character">→ ${charName}</div>
                </div>
                <div class="mapping-actions">
                    <button class="mapping-item-btn" onclick="deleteNameMapping('${name}')">Hapus</button>
                </div>
            </div>
        `;
    });
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== FUNGSI ADMIN PANEL =====
function loadCharactersFromStorage() {
    const stored = localStorage.getItem("customCharacters");
    const storedTraits = localStorage.getItem("customTraits");
    const customTraits = storedTraits ? JSON.parse(storedTraits) : {};

    if (stored) {
        const customChars = JSON.parse(stored);
        customChars.forEach(char => {
            characters.push(char);
            if (customTraits[char.name]) {
                characterTraits[char.name] = customTraits[char.name];
            }
        });
    }
}

function openAdmin() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    refreshCharacterList();
    populateCharacterSelect();
    refreshNameMappingList();
}

function closeAdmin() {
    document.getElementById("adminPanel").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}

function addCharacter() {
    const name = document.getElementById("charName").value.trim();
    const gender = document.getElementById("charGender").value;
    let img = document.getElementById("charImg").value.trim();
    let sound = document.getElementById("charSound").value.trim();
    const desc = document.getElementById("charDesc").value.trim();
    const details = document.getElementById("charDetails").value.trim();
    const words = document.getElementById("charWords").value.trim();

    if (!name || !gender || !img || !sound || !desc || !details || !words) {
        alert("Isi semua field ya!");
        return;
    }

    // Auto-prepend folder paths if not present
    if (!img.startsWith("images/")) {
        img = "images/" + img;
    }
    if (!sound.startsWith("sounds/")) {
        sound = "sounds/" + sound;
    }

    const traits = {
        brave: parseInt(document.getElementById("traitBrave").value) || 0,
        smart: parseInt(document.getElementById("traitSmart").value) || 0,
        gentle: parseInt(document.getElementById("traitGentle").value) || 0,
        leader: parseInt(document.getElementById("traitLeader").value) || 0,
        warm: parseInt(document.getElementById("traitWarm").value) || 0,
        cautious: parseInt(document.getElementById("traitCautious").value) || 0
    };

    if (editingCharName) {
        // Update existing character
        const charIndex = characters.findIndex(c => c.name === editingCharName);
        if (charIndex !== -1) {
            characters[charIndex] = { name, gender, img, sound, desc, details, words };
            characterTraits[name] = traits;

            // Update localStorage
            let stored = localStorage.getItem("customCharacters");
            const customChars = stored ? JSON.parse(stored) : [];
            const customIndex = customChars.findIndex(c => c.name === editingCharName);
            if (customIndex !== -1) {
                customChars[customIndex] = { name, gender, img, sound, desc, details, words };
                localStorage.setItem("customCharacters", JSON.stringify(customChars));
            }

            // Update traits
            let storedTraits = localStorage.getItem("customTraits");
            const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
            delete customTraits[editingCharName];
            customTraits[name] = traits;
            localStorage.setItem("customTraits", JSON.stringify(customTraits));

            alert(`Karakter ${name} berhasil diupdate!`);
        }
        editingCharName = null;
    } else {
        // Cek duplicate
        if (characters.some(c => c.name === name)) {
            alert("Karakter dengan nama ini sudah ada!");
            return;
        }

        const newChar = { name, gender, img, sound, desc, details, words };

        // Tambah ke array
        characters.push(newChar);
        characterTraits[name] = traits;

        // Simpan ke localStorage
        let stored = localStorage.getItem("customCharacters");
        const customChars = stored ? JSON.parse(stored) : [];
        customChars.push(newChar);
        localStorage.setItem("customCharacters", JSON.stringify(customChars));

        // Simpan traits
        let storedTraits = localStorage.getItem("customTraits");
        const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
        customTraits[name] = traits;
        localStorage.setItem("customTraits", JSON.stringify(customTraits));

        alert(`Karakter ${name} berhasil ditambahkan!`);
    }

    resetForm();
    refreshCharacterList();
}

function deleteCharacter(name) {
    if (!confirm(`Hapus karakter ${name}?`)) return;

    // Cek apakah karakter custom
    let stored = localStorage.getItem("customCharacters");
    const customChars = stored ? JSON.parse(stored) : [];
    const isCustom = customChars.some(c => c.name === name);

    if (!isCustom) {
        alert("Karakter default tidak bisa dihapus!");
        return;
    }

    // Hapus dari array
    characters = characters.filter(c => c.name !== name);
    delete characterTraits[name];

    // Update localStorage
    const updated = customChars.filter(c => c.name !== name);
    localStorage.setItem("customCharacters", JSON.stringify(updated));

    let storedTraits = localStorage.getItem("customTraits");
    const customTraits = storedTraits ? JSON.parse(storedTraits) : {};
    delete customTraits[name];
    localStorage.setItem("customTraits", JSON.stringify(customTraits));

    refreshCharacterList();
}

function resetForm() {
    document.getElementById("charName").value = "";
    document.getElementById("charGender").value = "";
    document.getElementById("charImg").value = "";
    document.getElementById("charSound").value = "";
    document.getElementById("charDesc").value = "";
    document.getElementById("charDetails").value = "";
    document.getElementById("charWords").value = "";
    document.getElementById("traitBrave").value = "0";
    document.getElementById("traitSmart").value = "0";
    document.getElementById("traitGentle").value = "0";
    document.getElementById("traitLeader").value = "0";
    document.getElementById("traitWarm").value = "0";
    document.getElementById("traitCautious").value = "0";
    document.getElementById("mapName").value = "";
    document.getElementById("mapCharacter").value = "";
}

let editingCharName = null;

function refreshCharacterList() {
    const list = document.getElementById("characterList");
    list.innerHTML = "";
    const stored = localStorage.getItem("customCharacters");
    const customChars = stored ? JSON.parse(stored) : [];

    characters.forEach(char => {
        const traits = characterTraits[char.name];
        const isCustom = customChars.some(c => c.name === char.name);

        const traitText = traits ? Object.entries(traits).map(([k, v]) => `${k}: ${v}`).join(", ") : "N/A";

        list.innerHTML += `
            <div class="char-item">
                <div class="info">
                    <div class="name">${char.name}</div>
                    <div class="gender">${char.gender === "male" ? "♂ Laki-laki" : char.gender === "anomali" ? "⚠ Anomali" : "♀ Perempuan"}</div>
                    <small style="color: #999;">${traitText}</small>
                </div>
                <div class="char-actions">
                    <button class="char-item-btn ${isCustom ? "" : "disabled"}" onclick="editCharacter('${char.name}')" ${!isCustom ? "disabled" : ""}>Edit Karakter</button>
                    <button class="char-item-btn ${isCustom ? "" : "disabled"}" onclick="deleteCharacter('${char.name}')" ${!isCustom ? "disabled" : ""}>Hapus Karakter</button>
                </div>
            </div>
        `;
    });
}

function editCharacter(name) {
    const char = characters.find(c => c.name === name);
    if (!char) return;

    editingCharName = name;

    document.getElementById("charName").value = char.name;
    document.getElementById("charGender").value = char.gender;
    document.getElementById("charImg").value = char.img;
    document.getElementById("charSound").value = char.sound;
    document.getElementById("charDesc").value = char.desc;
    document.getElementById("charDetails").value = char.details;
    document.getElementById("charWords").value = char.words;

    const traits = characterTraits[name] || {};
    document.getElementById("traitBrave").value = traits.brave || 0;
    document.getElementById("traitSmart").value = traits.smart || 0;
    document.getElementById("traitGentle").value = traits.gentle || 0;
    document.getElementById("traitLeader").value = traits.leader || 0;
    document.getElementById("traitWarm").value = traits.warm || 0;
    document.getElementById("traitCautious").value = traits.cautious || 0;

    document.getElementById("addCharBtn").textContent = "Update Karakter";
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});