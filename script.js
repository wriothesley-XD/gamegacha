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
let browseCurrentPage = 1;
const itemsPerPage = 8;

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
    const page = arguments.length ? arguments[0] : browseCurrentPage;
    browseCurrentPage = page;

    const list = document.getElementById("browseCharacterList");
    const paginationEl = document.getElementById("pagination");
    list.innerHTML = "";

    const searchTerm = (document.getElementById("searchName")?.value || "").toLowerCase();
    const genderFilter = document.getElementById("filterGender")?.value || "";
    const traitFilter = document.getElementById("filterTrait")?.value || "";

    const filtered = characters.filter(char => {
        if (!char || !char.name) return false;
        const matchesSearch = char.name.toLowerCase().includes(searchTerm) || (char.desc && char.desc.toLowerCase().includes(searchTerm));
        const matchesGender = !genderFilter || char.gender === genderFilter;
        const traits = characterTraits[char.name] || {};
        const matchesTrait = !traitFilter || (traits[traitFilter] && traits[traitFilter] > 0);
        return matchesSearch && matchesGender && matchesTrait;
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const start = (browseCurrentPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);

    // render grid
    const grid = document.createElement('div');
    grid.className = 'browse-grid-container';

    pageItems.forEach(char => {
        const traits = characterTraits[char.name] || {};
        const traitText = Object.entries(traits).filter(([k, v]) => v > 0).map(([k, v]) => `${k}: ${v}`).join(', ') || 'N/A';

        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${char.img}" alt="${char.name}" style="width:100%;aspect-ratio:1/1;object-fit:cover;" onerror="this.style.display='none'">
            <div class="desc">
                <div class="name">${char.name}</div>
                <div class="gender ${char.gender}">${char.gender === 'male' ? '♂' : char.gender === 'anomali' ? '⚠' : '♀'}</div>
                <div class="short-desc">${char.desc || ''}</div>
            </div>
            <button class="view-btn" onclick="viewCharacter('${char.name}')">Lihat</button>
        `;

        grid.appendChild(card);
    });

    list.appendChild(grid);

    // pagination
    paginationEl.innerHTML = '';
    if (totalPages > 1) {
        const prev = document.createElement('button');
        prev.textContent = '‹';
        prev.disabled = browseCurrentPage <= 1;
        prev.onclick = () => displayBrowseCharacters(browseCurrentPage - 1);
        paginationEl.appendChild(prev);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.className = (i === browseCurrentPage) ? 'active' : '';
            btn.onclick = () => displayBrowseCharacters(i);
            paginationEl.appendChild(btn);
        }

        const next = document.createElement('button');
        next.textContent = '›';
        next.disabled = browseCurrentPage >= totalPages;
        next.onclick = () => displayBrowseCharacters(browseCurrentPage + 1);
        paginationEl.appendChild(next);
    }
}

function filterCharacters() {
    // reuse displayBrowseCharacters with page reset
    displayBrowseCharacters(1);
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
                    <p><strong>Ciri-ciri:</strong> ${char.desc}</p>
                    <p><strong>Deskripsi:</strong> ${char.details}</p>
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
// On load: try to load external characters JSON (user-editable). If corrupted,
// fall back to bundled `characters_fixed.json`. Then load localStorage data.
window.addEventListener("load", async () => {
    await loadExternalCharacters();
    loadCharactersFromStorage();
    loadNameMappingsFromStorage();
});

async function loadExternalCharacters() {
    // Try primary characters.json first
    try {
        const res = await fetch('characters.json', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0 && data.some(c => c && c.name && c.img)) {
                // Replace runtime characters with external file
                characters = data.map(c => ({
                    name: c.name || '',
                    gender: c.gender || 'female',
                    img: c.img || '',
                    desc: c.desc || '',
                    details: c.details || '',
                    words: c.words || '',
                    sound: c.sound || ''
                }));

                // If traits provided in file, sync into characterTraits
                data.forEach(c => {
                    if (c && c.name && c.traits) characterTraits[c.name] = c.traits;
                });
                return;
            }
        }
    } catch (e) {
        console.warn('Failed to load characters.json, will try fallback.', e);
    }

    // Fallback to characters_fixed.json if available
    try {
        const res2 = await fetch('characters_fixed.json', { cache: 'no-store' });
        if (res2.ok) {
            const data2 = await res2.json();
            if (Array.isArray(data2) && data2.length > 0) {
                characters = data2.map(c => ({
                    name: c.name || '',
                    gender: c.gender || 'female',
                    img: c.img || '',
                    desc: c.desc || '',
                    details: c.details || '',
                    words: c.words || '',
                    sound: c.sound || ''
                }));
                data2.forEach(c => {
                    if (c && c.name && c.traits) characterTraits[c.name] = c.traits;
                });
                return;
            }
        }
    } catch (e) {
        console.warn('Failed to load characters_fixed.json fallback.', e);
    }

    // If both attempts fail, keep built-in `characters` defined later in file.
}

function startRandomGacha(mode) {
    username = document.getElementById("username").value;
    const messageEl = document.getElementById('message');
    if (!username) {
        if (messageEl) messageEl.textContent = 'Isi nama dulu ya!';
        else alert('Isi nama dulu ya!');
        return;
    }
    if (messageEl) messageEl.textContent = '';

    // allow caller to set mode (compatibility/personality/random)
    gachaMode = mode || 'random';
    document.getElementById("home").classList.add("hidden");
    startGachaAnimation();
}

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
        <div class="quiz-question large">
            <div class="quiz-question-header">
                <h3>${q.question}</h3>
                <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${Math.round(((currentQuestion)/quizQuestions.length)*100)}%"></div></div>
            </div>
            <div class="quiz-options">
    `;

    q.answers.forEach((answer, idx) => {
        // use button-like div for larger clickable area
        html += `<button class="quiz-option" onclick="selectAnswer(${idx})" aria-pressed="false">${answer.text}</button>`;
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
        const pressed = i === idx;
        el.classList.toggle("selected", pressed);
        el.setAttribute('aria-pressed', pressed ? 'true' : 'false');
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

// previousQuestion - moved to top-level so UI can call it
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedAnswerIdx = -1;
        displayQuestion();
    }
}

// startGachaAnimation - moved to top-level
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
    let textInterval = setInterval(() => {
        gachaText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 400);

    setTimeout(() => {
        clearInterval(textInterval);
        rollCharacter(username);
    }, 2000);
}

// rollCharacter - moved to top-level
function rollCharacter(username) {
    const result = document.getElementById("result");
    const gacha = document.getElementById("gachaAnim");

    let resultObj = findBestCharacter();
    let char = resultObj.character;

    document.body.style.backgroundImage = char.gender === "male" ?
        'url("images/sunset.jpg")' :
        char.gender === "anomali" ? 'url("images/black.jpg")' :
        'url("images/taman_bunga.jpg")';

    if (char.gender === "anomali") {
        const anomalyAudio = new Audio("sounds/anomali.mp3");
        anomalyAudio.addEventListener('ended', () => {
            anomalyAudio.addEventListener('ended', () => {});
            anomalyAudio.play();
        });
    } else {
        if (char.sound) new Audio(char.sound).play();
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

    // Show short reveal message in gacha area before revealing full result
    const revealMsg = (gachaMode === 'personality' && resultObj.similarity != null)
        ? `Selamat! Kamu mirip dengan ${char.name} — ${resultObj.similarity}%!`
        : (gachaMode === 'compatibility' && resultObj.compatibility != null)
            ? `Selamat! Kamu cocok dengan ${char.name} — ${resultObj.compatibility}%!`
            : `Selamat! Kamu mendapatkan ${char.name}!`;

    const gachaTextEl = document.getElementById('gachaText');
    if (gachaTextEl) {
        gachaTextEl.textContent = revealMsg;
        gachaTextEl.classList.add('reveal-animate');
    }

    // wait briefly so player can read the reveal message
    setTimeout(() => {
        if (gachaTextEl) gachaTextEl.classList.remove('reveal-animate');

        // burst confetti then reveal
        createParticles('confetti');
        animateParticles();

        gacha.classList.add("hidden");
        result.classList.remove("hidden");

        // populate result HTML after reveal
        renderResultHTML();
    }, 1200);

    // helper to inject result markup (moved out so we can delay showing it)
    function renderResultHTML() {
        // Prepare percentage / message line: hide numeric percentages for random mode
        let percentHtml = '';
        if (gachaMode === 'personality' && resultObj.similarity !== null && resultObj.similarity !== undefined) {
            percentHtml = `<p id="percentages" style="opacity:0;"><strong>Wow, kamu mirip dengan ${char.name} ${resultObj.similarity}%!</strong></p>`;
        } else if (gachaMode === 'compatibility' && resultObj.compatibility !== null && resultObj.compatibility !== undefined) {
            percentHtml = `<p id="percentages" style="opacity:0;"><strong>Wow, kamu cocok dengan ${char.name} ${resultObj.compatibility}%!</strong></p>`;
        } else if (gachaMode === 'random') {
            percentHtml = `<p id="percentages" style="opacity:0;"><strong>Hasil acak! Nikmati karakternya.</strong></p>`;
        }

        result.innerHTML = `
        <h2>Hai, ${username}!</h2>
        <div class="char-card fadeIn">
            <div class="char-card-top">
                <img src="${char.img}" alt="${char.name}">
                <div class="char-info">
                    <h1>${char.name}</h1>
                    <p id="desc" style="opacity:0;"><strong>Deskripsi:</strong> ${char.desc}</p>
                    <p id="traits" style="opacity:0;"><strong>Ciri-ciri:</strong> ${char.details}</p>
                    ${percentHtml}
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
            const d = document.getElementById("desc"); if (d) { d.style.opacity = 1; }
            soundEffect.play();
        }, 500);
        setTimeout(() => {
            const t = document.getElementById("traits"); if (t) { t.style.opacity = 1; }
            soundEffect.play();
        }, 1000);
        setTimeout(() => {
            const p = document.getElementById("percentages"); if (p) { p.style.opacity = 1; soundEffect.play(); }
        }, 1500);
        setTimeout(() => {
            const w = document.getElementById("words"); if (w) { w.style.opacity = 1; soundEffect.play(); }
        }, 2000);
    }

    // Prepare percentage / message line: hide numeric percentages for random mode
    let percentHtml = '';
    if (gachaMode === 'personality' && resultObj.similarity !== null && resultObj.similarity !== undefined) {
        percentHtml = `<p id="percentages" style="opacity:0;"><strong>Wow, kamu mirip dengan ${char.name} ${resultObj.similarity}%!</strong></p>`;
    } else if (gachaMode === 'compatibility' && resultObj.compatibility !== null && resultObj.compatibility !== undefined) {
        percentHtml = `<p id="percentages" style="opacity:0;"><strong>Wow, kamu cocok dengan ${char.name} ${resultObj.compatibility}%!</strong></p>`;
    } else if (gachaMode === 'random') {
        percentHtml = `<p id="percentages" style="opacity:0;"><strong>Hasil acak! Nikmati karakternya.</strong></p>`;
    }

    result.innerHTML = `
    <h2>Hai, ${username}!</h2>
    <div class="char-card fadeIn">
        <div class="char-card-top">
            <img src="${char.img}" alt="${char.name}">
            <div class="char-info">
                <h1>${char.name}</h1>
                <p id="desc" style="opacity:0;"><strong>Deskripsi:</strong> ${char.desc}</p>
                <p id="traits" style="opacity:0;"><strong>Ciri-ciri:</strong> ${char.details}</p>
                ${percentHtml}
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
        const d = document.getElementById("desc"); if (d) { d.style.opacity = 1; }
        soundEffect.play();
    }, 500);
    setTimeout(() => {
        const t = document.getElementById("traits"); if (t) { t.style.opacity = 1; }
        soundEffect.play();
    }, 1000);
    setTimeout(() => {
        const p = document.getElementById("percentages"); if (p) { p.style.opacity = 1; soundEffect.play(); }
    }, 1500);
    setTimeout(() => {
        const w = document.getElementById("words"); if (w) { w.style.opacity = 1; soundEffect.play(); }
    }, 2000);
}

// Simple particle helpers (safe no-op fallback if original implementation missing)
function createParticles(kind) {
    particles = [];
    if (kind === 'confetti') {
        const colors = ['#FF5252', '#FFCA28', '#4CAF50', '#2196F3', '#AB47BC', '#FF7043'];
        const count = 80;
        for (let i = 0; i < count; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() - 0.5) * 120,
                y: canvas.height / 2 + (Math.random() - 0.5) * 40,
                vx: (Math.random() - 0.5) * 8,
                vy: -2 - Math.random() * 6,
                size: 6 + Math.random() * 8,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: 'rect',
                life: 120 + Math.random() * 60
            });
        }
        return;
    }

    // default celebratory particles influenced by gender
    const gender = kind || 'female';
    const count = 40;
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            size: 2 + Math.random() * 6,
            color: gender === 'male' ? 'rgba(33,150,243,0.85)' : gender === 'anomali' ? 'rgba(0,0,0,0.9)' : 'rgba(255,105,180,0.85)',
            shape: 'circle',
            life: 80 + Math.random() * 60
        });
    }
}

function animateParticles() {
    if (!canvas || !ctx) return;
    let rafId = null;
    function step() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx; p.y += p.vy;
            p.vy += 0.12; // gravity
            p.life = (p.life || 100) - 1;
            if (p.shape === 'rect') {
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, Math.max(2, p.size), Math.max(2, p.size * 0.6));
            } else {
                ctx.beginPath();
                ctx.fillStyle = p.color;
                ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
                ctx.fill();
            }
            // fade/cleanup
            if (p.life <= 0 || p.y > canvas.height + 50) particles.splice(i, 1);
        }
        if (particles.length === 0) {
            if (rafId) cancelAnimationFrame(rafId);
            return;
        }
        rafId = requestAnimationFrame(step);
    }
    step();
}

// findBestCharacter - moved to top-level
function findBestCharacter() {
    // Check if username is mapped to a specific character
    const lowerUsername = username.toLowerCase();
    if (nameMapping[lowerUsername]) {
        const mappedCharName = nameMapping[lowerUsername];
        const mappedChar = characters.find(char => char.name === mappedCharName);
        if (mappedChar) {
            return { character: mappedChar, similarity: 100, compatibility: 100 };
        }
    }

    // Build max possible user trait totals from quiz definition so we can normalize
    const traitKeys = ['brave', 'smart', 'gentle', 'leader', 'warm', 'cautious'];
    const maxPossible = {};
    traitKeys.forEach(t => maxPossible[t] = 0);
    quizQuestions.forEach(q => {
        q.answers.forEach(a => {
            traitKeys.forEach(t => {
                if (a.traits && a.traits[t]) maxPossible[t] += a.traits[t];
            });
        });
    });

    // Helper to compute normalized user trait (0..1)
    const userNorm = {};
    traitKeys.forEach(t => {
        const raw = userProfile[t] || 0;
        const max = maxPossible[t] || 1;
        userNorm[t] = Math.min(1, raw / max);
    });

    let bestMatch = null;
    let bestScore = -Infinity;
    let bestSimPerc = 0;
    let bestCompPerc = 0;

    characters.forEach(char => {
        const traits = characterTraits[char.name] || {};

        // If random mode, treat this as chance-based selection
        if (gachaMode === 'random') {
            // pick randomly with uniform probability
            if (!bestMatch || Math.random() < 1 / characters.length) {
                bestMatch = char;
                bestSimPerc = null;
                bestCompPerc = null;
            }
            return;
        }

        // similarity: average of per-trait product (userNorm * charNorm)
        let simSum = 0;
        let simCount = 0;
        traitKeys.forEach(t => {
            const charNorm = (traits[t] || 0) / 3; // char trait in 0..3
            // only consider trait if character has non-zero or quiz allowed user to have it
            if ((traits[t] || 0) > 0 || (maxPossible[t] || 0) > 0) {
                simSum += (userNorm[t] || 0) * charNorm;
                simCount++;
            }
        });
        const similarityPerc = simCount ? (simSum / simCount) * 100 : 0;

        // compatibility: average of complement distance: 1 - |userNorm - charNorm|
        let compSum = 0;
        let compCount = 0;
        traitKeys.forEach(t => {
            const charNorm = (traits[t] || 0) / 3;
            if ((traits[t] || 0) > 0 || (maxPossible[t] || 0) > 0) {
                compSum += 1 - Math.abs((userNorm[t] || 0) - charNorm);
                compCount++;
            }
        });
        const compatibilityPerc = compCount ? (compSum / compCount) * 100 : 0;

        // Choose best based on selected mode
        const score = (gachaMode === 'personality') ? similarityPerc : compatibilityPerc;
        // add slight randomness to break ties
        const finalScore = score + Math.random() * 3;
        if (finalScore > bestScore) {
            bestScore = finalScore;
            bestMatch = char;
            bestSimPerc = Math.round(similarityPerc);
            bestCompPerc = Math.round(compatibilityPerc);
        }
    });

    return {
        character: bestMatch,
        similarity: bestSimPerc,
        compatibility: bestCompPerc
    };
}

let characters = [{
        name: "Clorinde",
        gender: "female",
        img: "images/clorinde.png",
        desc: "Cewe tangguh dan gesit.",
        details: "Clorinde adalah sosok yang sangat tangguh dan gesit, selalu siap menghadapi tantangan apapun dengan keberanian luar biasa. Ia memiliki kecerdasan tinggi dalam menganalisis situasi dan membuat keputusan cepat. Meskipun terlihat tegas, ia sangat perhatian terhadap teman-teman dan selalu siap membantu orang yang membutuhkan. Hatinya yang besar membuatnya menjadi sosok yang dapat diandalkan dalam situasi sulit, dan ia tidak pernah ragu untuk melindungi mereka yang ia sayangi.",
        words: "Aku nggak takut menghadapi tantangan apapun!",
        sound: "sounds/clorinde.mp3"
    },
    {
        name: "Phainon",
        gender: "male",
        img: "images/phainon.png",
        desc: "Cowo pejuang penuh semangat.",
        details: "Phainon adalah pejuang yang penuh semangat dan keberanian, selalu siap melindungi teman-temannya dengan segala cara. Ia memiliki strategi yang hebat dalam menghadapi musuh dan situasi berbahaya. Kesetiaannya yang tinggi membuatnya menjadi sahabat yang dapat dipercaya sepenuhnya. Meskipun terlihat keras dari luar, ia memiliki sisi hangat dan peduli terhadap orang-orang terdekatnya, selalu berusaha menciptakan harmoni di sekitarnya.",
        words: "Aku akan melindungimu sampai akhir.",
        sound: "sounds/phainon.mp3"
    },
    {
        name: "Cyrene",
        gender: "female",
        img: "images/cyrene.png",
        desc: "Cewe pejuang dengan cinta.",
        details: "Cyrene adalah pejuang yang menggabungkan kekuatan dengan cinta yang mendalam. Ia tegas dalam menghadapi musuh namun selalu penuh kasih sayang terhadap teman dan keluarga. Kepemimpinannya yang alami membuatnya mampu memotivasi orang lain untuk menjadi lebih baik. Ia percaya bahwa cinta adalah sumber kekuatan terbesar, dan selalu mendukung orang-orang di sekitarnya dengan penuh empati dan kehangatan.",
        words: "Cinta dan keberanian adalah kekuatanku.",
        sound: "sounds/cyrene.mp3"
    },
    {
        name: "Yanagi",
        gender: "female",
        img: "images/yanagi.png",
        desc: "Gesit dan keibuan.",
        details: "Yanagi adalah sosok yang gesit dan penuh keibuan, selalu memperhatikan kebutuhan teman-teman dengan teliti. Kecakapannya dalam berbagai hal membuatnya menjadi orang yang andal dalam situasi apapun. Ia bijaksana dalam memberikan nasihat dan selalu berusaha menciptakan suasana yang nyaman bagi orang lain. Meskipun terlihat tenang, ia memiliki kekuatan batin yang besar dan selalu siap membantu dengan penuh kasih sayang.",
        words: "Jangan khawatir, aku akan selalu di sini.",
        sound: "sounds/yanagi.mp3"
    },
    {
        name: "Vivian",
        gender: "female",
        img: "images/vivian.png",
        desc: "Lembut dan romantis.",
        details: "Vivian adalah sosok yang lembut dan romantis, selalu melihat keindahan dalam segala hal. Jiwa seninya yang tinggi membuatnya mampu menciptakan suasana yang indah dan inspiratif. Ia ramah terhadap semua orang dan selalu mendukung orang di sekitarnya dengan penuh perhatian. Kehangatannya yang alami membuatnya mudah didekati, dan ia percaya bahwa cinta dan kebaikan dapat mengubah dunia menjadi tempat yang lebih baik.",
        words: "Hidup terasa indah dengan cinta.",
        sound: "sounds/vivian.mp3"
    },
    {
        name: "Yae Miko",
        gender: "female",
        img: "images/yae_miko.png",
        desc: "Jahil & mengerikan tapi baik.",
        details: "Yae Miko adalah sosok yang jahil dan terlihat mengerikan dari luar, namun sebenarnya memiliki hati yang baik dan perhatian. Kecerdikannya yang tinggi membuatnya selalu bisa menemukan solusi kreatif untuk berbagai masalah. Ia bisa membuat orang tertawa dengan kelakuannya yang unik, namun juga sangat peduli terhadap teman-teman. Meskipun terlihat nakal, ia selalu bertindak demi kebaikan bersama.",
        words: "Hati-hati, aku bisa muncul di mana saja!",
        sound: "sounds/yae_miko.mp3"
    },
    {
        name: "Hina",
        gender: "female",
        img: "images/hina.png",
        desc: "Imut dan mandiri.",
        details: "Hina adalah sosok yang imut namun sangat mandiri, selalu ingin belajar hal-hal baru dan mengembangkan diri. Kelincahannya membuatnya mampu beradaptasi dengan cepat dalam situasi apapun. Semangatnya yang tinggi mendorongnya untuk terus maju dan tidak pernah menyerah. Ia percaya bahwa dengan usaha sendiri, ia bisa mencapai apa saja, namun tetap terbuka untuk menerima bantuan dari orang lain ketika dibutuhkan.",
        words: "Aku bisa melakukan ini sendiri!",
        sound: "sounds/hina.mp3"
    },
    {
        name: "Cerydra",
        gender: "female",
        img: "images/cerydra.png",
        desc: "Pemimpin tegas dan tangguh.",
        details: "Cerydra adalah pemimpin yang tegas dan tangguh, selalu memimpin tim dengan bijaksana dan penuh tanggung jawab. Kekuatannya yang luar biasa membuatnya mampu menghadapi tantangan besar. Ia adil dalam setiap keputusan dan selalu memikirkan kepentingan kelompok. Meskipun terlihat keras, ia memiliki hati yang peduli dan selalu berusaha menciptakan lingkungan yang harmonis bagi semua orang.",
        words: "Ikuti aku, kita bisa melewati ini bersama.",
        sound: "sounds/cerydra.mp3"
    },
    {
        name: "Hysilens",
        gender: "female",
        img: "images/hysilens.png",
        desc: "Kesatria setia dan kuat.",
        details: "Hysilens adalah kesatria yang setia dan kuat, selalu siap menghadapi bahaya demi melindungi teman-teman. Kehormatannya yang tinggi membuatnya menjadi sosok yang dapat dipercaya sepenuhnya. Ia berani dalam pertempuran namun juga memiliki sisi lembut yang peduli terhadap orang lain. Kesetiaannya tidak pernah goyah, dan ia selalu berdiri di garis depan untuk menjaga mereka yang ia sayangi.",
        words: "Aku akan selalu berdiri di sampingmu.",
        sound: "sounds/hysilens.mp3"
    },
    {
        name: "Kafka",
        gender: "female",
        img: "images/kafka.png",
        desc: "Killer keibuan penuh misteri.",
        details: "Kafka adalah sosok yang tangguh dan misterius, selalu melindungi yang lemah dengan cara yang unik. Kecerdasannya dalam strategi membuatnya selalu selangkah di depan musuh. Ia memiliki sisi keibuan yang kuat namun juga penuh misteri yang membuat orang penasaran. Meskipun terlihat dingin, ia sangat peduli terhadap orang-orang terdekatnya dan selalu berusaha menciptakan keamanan bagi mereka.",
        words: "Jangan remehkan sisi lembutku.",
        sound: "sounds/kafka.mp3"
    },
    {
        name: "Miyabi",
        gender: "female",
        img: "images/miyabi.png",
        desc: "Tangguh dan badass.",
        details: "Miyabi adalah sosok yang sangat tangguh dan badass, tidak pernah takut menghadapi tantangan apapun. Keterampilannya dalam pertarungan membuatnya menjadi lawan yang berbahaya. Ia tegas dalam prinsip namun juga memiliki keberanian yang luar biasa. Meskipun terlihat keras, ia memiliki kode etik yang kuat dan selalu melindungi yang benar. Ia tidak mudah menyerah dan selalu bangkit dari setiap kegagalan.",
        words: "Aku tidak takut siapa pun!",
        sound: "sounds/miyabi.mp3"
    },
    {
        name: "Robin",
        gender: "female",
        img: "images/robin.png",
        desc: "Misterius dan penuh rahasia.",
        details: "Robin adalah sosok yang sangat misterius dan penuh rahasia, selalu mencari kebenaran di balik segala hal. Ia penuh rahasia namun memiliki kecerdasan yang luar biasa dalam menganalisis situasi. Misterinya membuat orang penasaran, namun ia selalu bertindak demi kebaikan. Ia percaya bahwa pengetahuan adalah kunci untuk memahami dunia, dan selalu berusaha mengungkap misteri-misteri yang ada.",
        words: "Siapa aku sebenarnya?",
        sound: "sounds/robin.mp3"
    },
    {
        name: "Sunday",
        gender: "male",
        img: "images/sunday.png",
        desc: "Gelap → bertobat.",
        details: "Sunday adalah sosok yang dulunya gelap dan misterius, namun kini berusaha menebus kesalahannya dengan sungguh-sungguh. Ia belajar dari masa lalu dan berusaha menjadi lebih baik setiap hari. Kesetiaannya terhadap teman-teman tidak pernah goyah, dan ia selalu siap membantu mereka yang membutuhkan. Perjalanan pertobatannya membuatnya lebih bijaksana dan peduli terhadap dampak tindakannya terhadap orang lain.",
        words: "Aku berjanji untuk berubah.",
        sound: "sounds/sunday.mp3"
    },
    {
        name: "Mydei",
        gender: "male",
        img: "images/mydei.png",
        desc: "Pemarah tapi baik & suka anak-anak.",
        words: "Jangan membuatku marah, tapi aku akan selalu menolongmu.",
        sound: "sounds/mydei.mp3"
    },
    {
        name: "Anaxa",
        gender: "male",
        img: "images/anaxa.png",
        desc: "Dosen pintar & sensitif.",
        details: "Anaxa adalah sosok yang cerdas dan sensitif, selalu peka terhadap perasaan orang lain. Kesabarannya yang tinggi membuatnya menjadi pendidik yang baik dan sabar. Ia menyukai belajar dan mengajar, dan selalu berusaha berbagi pengetahuan dengan orang lain. Kecerdasannya tidak hanya intelektual, namun juga emosional, membuatnya mampu memahami dan membantu orang lain dengan lebih baik.",
        words: "Ilmu adalah kekuatan.",
        sound: "sounds/anaxa.mp3"
    },
    {
        name: "Acheron",
        gender: "female",
        img: "images/acheron.png",
        desc: "Pendiam & menggetarkan.",
        details: "Acheron adalah sosok yang pendiam namun memiliki aura yang sangat menggetarkan. Kata-katanya yang jarang namun berwibawa selalu meninggalkan kesan mendalam. Ia tenang dalam menghadapi situasi apapun dan selalu berpikir sebelum bertindak. Misterinya membuat orang penasaran, namun kekuatannya yang luar biasa membuatnya menjadi sosok yang dihormati. Diamnya bukan berarti lemah, melainkan kekuatan yang terkendali.",
        words: "Diamku bukan lemahku.",
        sound: "sounds/acheron.mp3"
    },
    {
        name: "Aventurine",
        gender: "male",
        img: "images/aventurine.png",
        desc: "Gentleman penuh percaya diri.",
        details: "Aventurine adalah gentleman yang penuh percaya diri, selalu menjaga martabat dan sopan santun dalam setiap tindakan. Ia ramah terhadap semua orang dan selalu berusaha menciptakan suasana yang nyaman. Kepercayaan dirinya yang tinggi membuatnya mampu menghadapi tantangan dengan tenang. Ia percaya bahwa dengan sikap yang baik dan percaya diri, ia bisa mencapai apa saja dan menginspirasi orang lain.",
        words: "Kepercayaan diri adalah kunci.",
        sound: "sounds/aventurine.mp3"
    },
    {
        name: "Huohuo",
        gender: "female",
        img: "images/huohuo.png",
        desc: "Penakut tapi kuat.",
        details: "Huohuo adalah sosok yang terkadang penakut namun memiliki kekuatan batin yang luar biasa. Ia selalu bangkit dari ketakutannya dan berani melindungi teman-teman. Kesetiaannya yang tinggi membuatnya tidak pernah meninggalkan orang yang membutuhkan. Meskipun takut, ia belajar menghadapi rasa takutnya dan menjadi lebih kuat. Ia percaya bahwa keberanian sejati adalah ketika kita bisa bertindak meskipun takut.",
        words: "Meskipun takut, aku tidak akan mundur.",
        sound: "sounds/huohuo.mp3"
    },
    {
        name: "Wriothesley",
        gender: "male",
        img: "images/wriothesley.png",
        desc: "Badass, hangat, pemimpin.",
        details: "Wriothesley adalah pemimpin yang badass namun hangat, selalu memimpin dengan hati dan strategi yang matang. Ia berani menghadapi tantangan namun juga peduli terhadap kesejahteraan timnya. Kekuatannya yang luar biasa membuatnya menjadi sosok yang dihormati, namun kehangatannya membuatnya mudah didekati. Ia selalu berusaha menciptakan keseimbangan antara kekuatan dan empati dalam kepemimpinannya.",
        words: "Ikuti aku, aku akan menuntunmu.",
        sound: "sounds/wriothesley.mp3"
    },
    {
        name: "Neuvillette",
        gender: "male",
        img: "images/neuvillette.png",
        desc: "Pendiam, tegas, megah.",
        details: "Neuvillette adalah sosok yang pendiam namun tegas dan megah, selalu menegakkan keadilan dengan prinsip yang kuat. Kewibawaannya membuat orang menghormatinya tanpa kata. Ia tenang dalam menghadapi situasi apapun dan selalu mempertimbangkan konsekuensi tindakannya. Kehormatannya yang tinggi membuatnya menjadi panutan bagi banyak orang, dan ia selalu berusaha menciptakan dunia yang lebih adil.",
        words: "Kehormatan adalah segalanya.",
        sound: "sounds/neuvillette.mp3"
    },
    {
        name: "Shorekeeper",
        gender: "female",
        img: "images/shorekeeper.png",
        desc: "Pemimpin bijak dan kuat.",
        details: "Shorekeeper adalah pemimpin yang bijak dan kuat, selalu melindungi dunia dengan visi jangka panjang. Ia memikirkan masa depan dengan matang dan selalu berusaha menciptakan stabilitas. Kekuatannya yang luar biasa membuatnya mampu menghadapi ancaman besar, namun kebijaksanaannya membuat keputusannya selalu tepat. Ia percaya bahwa melindungi dunia adalah tanggung jawab yang harus diemban dengan penuh dedikasi.",
        words: "Aku akan menjaga pantai ini.",
        sound: "sounds/shorekeeper.mp3"
    },
    {
        name: "Jane Doe",
        gender: "female",
        img: "images/jane_doe.png",
        desc: "Misterius dan cerdas.",
        details: "Jane Doe adalah sosok yang sangat misterius dan cerdas, selalu mencari kebenaran di balik segala hal. Ia penuh rahasia namun memiliki kecerdasan yang luar biasa dalam menganalisis situasi. Misterinya membuat orang penasaran, namun ia selalu bertindak demi kebaikan. Ia percaya bahwa pengetahuan adalah kunci untuk memahami dunia, dan selalu berusaha mengungkap misteri-misteri yang ada.",
        words: "Siapa aku sebenarnya?",
        sound: "sounds/jane_doe.mp3"
    },
    {
        name: "Kiana",
        gender: "female",
        img: "images/kiana.png",
        desc: "Pemberani dan energik.",
        details: "Kiana adalah sosok yang pemberani dan energik, selalu melawan musuh dengan semangat yang tinggi. Energinya yang melimpah membuatnya selalu aktif dan tidak pernah menyerah. Ia selalu melindungi teman-teman dengan segala cara dan percaya bahwa keberanian adalah kunci untuk mengatasi segala tantangan. Optimismenya yang tinggi membuatnya selalu melihat peluang di tengah kesulitan.",
        words: "Aku tidak akan menyerah!",
        sound: "sounds/kiana.mp3"
    },
    {
        name: "Dyroth Starlight",
        gender: "male",
        img: "images/dyroth_starlight.png",
        desc: "Pahlawan bintang yang strategis.",
        details: "Dyroth Starlight adalah pahlawan yang strategis dan kuat, selalu memimpin pasukan dengan taktik yang brilian. Keberaniannya yang luar biasa membuatnya menjadi inspirasi bagi banyak orang. Ia selalu memikirkan strategi jangka panjang dan berusaha menciptakan kemenangan yang berkelanjutan. Bintang yang memandu langkahnya membuatnya percaya bahwa takdir dapat diubah dengan usaha dan kecerdasan.",
        words: "Bintang akan memandu kita.",
        sound: "sounds/dyroth_starlight.mp3"
    },
    {
        name: "Ye Shunguang",
        gender: "female",
        img: "images/ye_shunguang.png",
        desc: "Cerah dan penuh harapan.",
        details: "Ye Shunguang adalah sosok yang cerah dan penuh harapan, selalu membawa cahaya ke dalam kegelapan. Optimismenya yang tinggi membuatnya selalu melihat sisi positif dari segala hal. Ia ceria dan selalu mendukung orang lain untuk tetap bersemangat. Cahayanya yang bersinar membuatnya menjadi sumber inspirasi, dan ia percaya bahwa harapan dapat mengubah dunia menjadi tempat yang lebih baik.",
        words: "Mari kita lihat cahaya itu.",
        sound: "sounds/ye_shunguang.mp3"
    },
    {
        name: "Astra Yao",
        gender: "female",
        img: "images/astra_yao.png",
        desc: "Bijak dan visioner.",
        details: "Astra Yao adalah sosok yang bijak dan visioner, selalu melihat masa depan dengan jelas dan penuh wawasan. Kebijaksanaannya membuatnya mampu memberikan nasihat yang tepat untuk orang lain. Ia visioner dalam merencanakan perubahan dan selalu berusaha menciptakan dunia yang lebih baik. Wawasannya yang luas membuatnya menjadi pemimpin yang dihormati, dan ia percaya bahwa masa depan ada di tangan mereka yang berani bermimpi.",
        words: "Masa depan ada di tangan kita.",
        sound: "sounds/astra_yao.mp3"
    },
    {
        name: "Ciaccona",
        gender: "female",
        img: "images/ciaccona.png",
        desc: "Elegan dan kuat.",
        details: "Ciaccona adalah sosok yang elegan dan kuat, selalu menari dalam pertarungan dengan gaya yang memukau. Kekuatannya yang luar biasa dipadukan dengan elegansi yang tinggi membuatnya unik. Ia penuh gaya dalam setiap gerakan dan selalu menikmati tantangan. Keindahannya tidak hanya fisik, namun juga dalam cara ia menghadapi hidup. Ia percaya bahwa kekuatan sejati datang dari harmoni antara tubuh dan jiwa.",
        words: "Mari kita berdansa.",
        sound: "sounds/ciaccona.mp3"
    },
    {
        name: "Brant",
        gender: "male",
        img: "images/brant.png",
        desc: "Tangguh dan setia.",
        details: "Brant adalah sosok yang sangat tangguh dan setia, selalu berdiri teguh melindungi orang-orang yang ia sayangi. Kekuatannya yang luar biasa membuatnya mampu menghadapi bahaya dengan tenang. Kesetiaannya tidak pernah goyah, dan ia selalu siap berkorban demi teman dan keluarga. Meskipun terlihat keras dari luar, ia memiliki hati yang hangat dan selalu berusaha menciptakan rasa aman bagi orang terdekatnya.",
        words: "Aku akan melindungimu.",
        sound: "sounds/brant.mp3"
    },
    {
        name: "Raiden Shogun",
        gender: "female",
        img: "images/raiden_shogun.png",
        desc: "Megah dan adil.",
        details: "Raiden Shogun adalah sosok yang megah dan adil, selalu memimpin dengan kekuatan dan menegakkan hukum dengan tegas. Kewibawaannya membuat semua orang menghormatinya tanpa syarat. Ia adil dalam setiap keputusan dan selalu memikirkan kepentingan rakyatnya. Kekuatannya yang luar biasa dipadukan dengan kebijaksanaan yang tinggi membuatnya menjadi pemimpin yang sempurna, selalu berusaha menciptakan dunia yang lebih baik.",
        words: "Keadilan akan ditegakkan.",
        sound: "sounds/raiden_shogun.mp3"
    },
    {
        name: "Skirk",
        gender: "female",
        img: "images/skirk.png",
        desc: "Lincah dan cerdas.",
        details: "Skirk adalah sosok yang lincah dan cerdas, selalu menemukan jalan keluar dari situasi yang paling sulit. Kecerdasannya yang tinggi membuatnya penuh trik dan selalu selangkah di depan orang lain. Ia cepat beradaptasi dan selalu berpikir kreatif dalam menghadapi masalah. Meskipun terlihat nakal, ia selalu menggunakan kecerdasannya untuk kebaikan dan membantu teman-teman dengan cara yang unik.",
        words: "Aku tahu rahasianya.",
        sound: "sounds/skirk.mp3"
    },
    {
        name: "Tribbie",
        gender: "female",
        img: "images/tribbie.png",
        desc: "Enerjik dan lucu.",
        details: "Tribbie adalah sosok yang energik dan lucu, selalu membawa kegembiraan ke mana pun ia pergi. Energinya yang melimpah membuatnya selalu aktif dan penuh semangat. Kelucuannya yang alami membuat orang di sekitarnya selalu tertawa dan merasa bahagia. Ia percaya bahwa hidup harus dijalani dengan penuh keceriaan, dan selalu berusaha membuat hari orang lain lebih menyenangkan dengan kehadirannya yang riang.",
        words: "Yey, seru!",
        sound: "sounds/tribbie.mp3"
    },
    {
        name: "Arlechinno",
        gender: "female",
        img: "images/arlechinno.png",
        desc: "Misterius dan dramatis.",
        details: "Arlechinno adalah sosok yang misterius dan dramatis, selalu penuh teka-teki dan kejutan. Dramatisasinya yang tinggi membuat setiap tindakannya terlihat seperti pertunjukan. Misterinya membuat orang penasaran dan selalu ingin tahu lebih banyak tentangnya. Ia suka bermain dengan ekspektasi orang lain dan selalu mengejutkan dengan kejutan-kejutannya. Meskipun terlihat aneh, ia memiliki kreativitas yang luar biasa.",
        words: "Mari kita main teka-teki.",
        sound: "sounds/arlechinno.mp3"
    },
    {
        name: "The Herta",
        gender: "female",
        img: "images/the_herta.png",
        desc: "Genius dan eksentrik.",
        details: "The Herta adalah sosok yang genius dan eksentrik, selalu menciptakan hal-hal luar biasa dengan ide-idenya yang brilian. Eksentrisitasnya membuatnya unik dan tidak pernah membosankan. Kegeniusannya dalam sains dan teknologi membuatnya mampu menciptakan inovasi yang mengubah dunia. Ia selalu penuh ide dan tidak pernah berhenti bereksperimen. Meskipun terlihat aneh, kontribusinya terhadap pengetahuan manusia sangat besar.",
        words: "Sains adalah jawabannya.",
        sound: "sounds/the_herta.mp3"
    },
    {
        name: "Ruanmei",
        gender: "female",
        img: "images/ruanmei.png",
        desc: "Tenang dan analitis.",
        details: "Ruanmei adalah sosok yang tenang dan analitis, selalu mempelajari segala hal dengan objektivitas yang tinggi. Ketenangannya membuatnya mampu melihat situasi dari berbagai sudut pandang. Analisisnya yang mendalam membuatnya selalu memberikan solusi yang tepat. Ia percaya bahwa pemahaman yang mendalam adalah kunci untuk menyelesaikan masalah, dan selalu berusaha mencari kebenaran di balik setiap fenomena.",
        words: "Mari kita analisis.",
        sound: "sounds/ruanmei.mp3"
    },
    {
        name: "Evernight",
        gender: "female",
        img: "images/evernight.png",
        desc: "Gelap dan kuat.",
        details: "Evernight adalah sosok yang gelap dan kuat, selalu menghadapi malam dengan keberanian yang luar biasa. Kekuatannya yang misterius membuatnya mampu bertahan dalam kegelapan. Ia belajar dari bayangan dan menggunakan pengalaman gelapnya untuk menjadi lebih kuat. Meskipun terlihat menakutkan, ia memiliki kedalaman emosi yang kompleks dan selalu berusaha mencari cahaya di tengah kegelapan.",
        words: "Malam adalah sekutu ku.",
        sound: "sounds/evernight.mp3"
    },
    {
        name: "Danheng",
        gender: "male",
        img: "images/danheng.png",
        desc: "Pendiam dan kuat.",
        details: "Danheng adalah sosok yang pendiam dan kuat, selalu melindungi orang lain dengan diam-diam. Kewaspadaannya yang tinggi membuatnya selalu siap menghadapi bahaya. Kekuatannya yang luar biasa dipadukan dengan sikap yang tenang membuatnya menjadi pelindung yang andal. Ia percaya bahwa tindakan lebih penting daripada kata-kata, dan selalu bertindak demi kebaikan tanpa mengharapkan pengakuan.",
        words: "Aku akan menjaga.",
        sound: "sounds/danheng.mp3"
    },
    {
        name: "March",
        gender: "female",
        img: "images/march.png",
        desc: "Ceria dan fotografer.",
        details: "March adalah sosok yang ceria dan berbakat sebagai fotografer, selalu mengabadikan momen-momen indah dalam hidup. Optimismenya yang tinggi membuatnya selalu positif dalam menghadapi segala hal. Keceriaannya menular dan membuat orang di sekitarnya merasa bahagia. Ia percaya bahwa setiap momen berharga dan harus diabadikan, dan selalu berusaha melihat keindahan dalam kehidupan sehari-hari.",
        words: "Klik! Bagus!",
        sound: "sounds/march.mp3"
    },
    {
        name: "Aglaea",
        gender: "female",
        img: "images/aglaea.png",
        desc: "Anggun dan bijak.",
        details: "Aglaea adalah sosok yang anggun dan bijak, selalu membawa keindahan dan kedamaian ke mana pun ia pergi. Kebijaksanaannya membuatnya mampu memberikan nasihat yang tepat dan bijaksana. Elegansinya yang alami membuatnya terlihat anggun dalam setiap gerakan. Ia percaya bahwa keindahan sejati datang dari dalam, dan selalu berusaha menciptakan harmoni di sekitarnya dengan sikapnya yang lembut namun tegas.",
        words: "Keindahan ada di mana-mana.",
        sound: "sounds/aglaea.mp3"
    },
    {
        name: "Firefly",
        gender: "female",
        img: "images/firefly.png",
        desc: "Bersinar dan pemberani.",
        details: "Firefly adalah sosok yang bersinar dan pemberani, selalu menerangi kegelapan dengan keberaniannya yang luar biasa. Cahayanya yang bersinar membuatnya menjadi sumber inspirasi bagi orang lain. Keberaniannya membuatnya tidak takut menghadapi tantangan, bahkan dalam situasi yang paling gelap sekalipun. Ia percaya bahwa setiap orang memiliki cahaya dalam dirinya, dan selalu berusaha membantu orang lain menemukan cahaya tersebut.",
        words: "Aku akan bersinar.",
        sound: "sounds/firefly.mp3"
    },
    {
        name: "Fugue",
        gender: "female",
        img: "images/fugue.png",
        desc: "Misterius dan harmonis.",
        details: "Fugue adalah sosok yang misterius dan harmonis, selalu menciptakan musik yang indah dan penuh melodi. Misterinya membuatnya terlihat enigmatic namun menarik. Harmoninya yang tinggi membuatnya mampu menciptakan keseimbangan dalam segala hal. Ia percaya bahwa musik adalah bahasa universal, dan selalu berusaha menyampaikan perasaan melalui nada-nada yang indah. Kedalaman emosinya tercermin dalam setiap komposisi yang ia buat.",
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

const nameMapping = {
    "rara": "Phainon",
    "kirana": "Wriothesley",
    "galang": "Hina",
    "radja": "Yae Miko",
    "bryan": "Clorinde",
    "bryann": "Robin"
};

const quizQuestions = [{
        question: "Ketika ada masalah besar, kamu cenderung...",
        answers: [
            { text: "Menghadapinya dengan berani", traits: { brave: 2 } },
            { text: "Berpikir strategis dulu", traits: { smart: 2 } },
            { text: "Mencari bantuan teman", traits: { warm: 2 } },
            { text: "Menunggu dan melihat situasi", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam kelompok, peran kamu biasanya...",
        answers: [
            { text: "Memimpin dan mengarahkan", traits: { leader: 2 } },
            { text: "Menyediakan dukungan emosional", traits: { warm: 2 } },
            { text: "Menganalisis dan memberikan saran", traits: { smart: 2 } },
            { text: "Mengikuti arahan dengan hati-hati", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika bertengkar, kamu biasanya...",
        answers: [
            { text: "Berargumen dengan penuh semangat", traits: { brave: 2 } },
            { text: "Menggunakan logika dan fakta", traits: { smart: 2 } },
            { text: "Mencoba menenangkan situasi", traits: { gentle: 2 } },
            { text: "Menghindari konfrontasi", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam perjalanan, kamu lebih suka...",
        answers: [
            { text: "Petualangan yang menantang", traits: { brave: 2 } },
            { text: "Rencana yang terorganisir", traits: { smart: 2 } },
            { text: "Tempat yang nyaman dan hangat", traits: { warm: 2 } },
            { text: "Destinasi yang aman dan familiar", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika belajar hal baru, kamu...",
        answers: [
            { text: "Langsung mencoba dan belajar dari kesalahan", traits: { brave: 2 } },
            { text: "Membaca dan memahami teori dulu", traits: { smart: 2 } },
            { text: "Belajar bersama teman", traits: { warm: 2 } },
            { text: "Mengikuti instruksi step-by-step", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam hubungan, kamu lebih suka...",
        answers: [
            { text: "Pasangan yang kuat dan protektif", traits: { brave: 2 } },
            { text: "Pasangan yang cerdas dan intelektual", traits: { smart: 2 } },
            { text: "Pasangan yang lembut dan perhatian", traits: { gentle: 2 } },
            { text: "Pasangan yang stabil dan dapat diandalkan", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika stres, kamu biasanya...",
        answers: [
            { text: "Menghadapi dan menyelesaikan masalah", traits: { brave: 2 } },
            { text: "Menganalisis penyebabnya", traits: { smart: 2 } },
            { text: "Berbicara dengan orang terdekat", traits: { warm: 2 } },
            { text: "Mengambil waktu untuk tenang", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam keputusan penting, kamu...",
        answers: [
            { text: "Mengambil risiko untuk hasil besar", traits: { brave: 2 } },
            { text: "Menimbang pro dan kontra dengan hati-hati", traits: { smart: 2 } },
            { text: "Mendengarkan pendapat orang lain", traits: { warm: 2 } },
            { text: "Memilih opsi yang paling aman", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Kepribadian kamu lebih mirip...",
        answers: [
            { text: "Pahlawan yang berani", traits: { brave: 2 } },
            { text: "Pemikir yang bijak", traits: { smart: 2 } },
            { text: "Sahabat yang hangat", traits: { warm: 2 } },
            { text: "Orang yang bijaksana dan tenang", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam situasi darurat, kamu...",
        answers: [
            { text: "Langsung bertindak heroik", traits: { brave: 2 } },
            { text: "Mencari solusi kreatif", traits: { smart: 2 } },
            { text: "Membantu orang lain terlebih dahulu", traits: { warm: 2 } },
            { text: "Memastikan keselamatan diri dulu", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Gaya komunikasi kamu...",
        answers: [
            { text: "Langsung dan tegas", traits: { brave: 2 } },
            { text: "Logis dan persuasif", traits: { smart: 2 } },
            { text: "Empati dan mendengarkan", traits: { gentle: 2 } },
            { text: "Hati-hati dan diplomatis", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Ketika melihat ketidakadilan, kamu...",
        answers: [
            { text: "Langsung melawan", traits: { brave: 2 } },
            { text: "Mencari cara untuk memperbaiki", traits: { smart: 2 } },
            { text: "Mendukung korban", traits: { warm: 2 } },
            { text: "Melaporkan dengan aman", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Hobi kamu lebih ke...",
        answers: [
            { text: "Olahraga ekstrem", traits: { brave: 2 } },
            { text: "Membaca atau puzzle", traits: { smart: 2 } },
            { text: "Bersosialisasi", traits: { warm: 2 } },
            { text: "Kegiatan rumah yang tenang", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Dalam tim, kamu lebih suka...",
        answers: [
            { text: "Menjadi pemimpin", traits: { leader: 2 } },
            { text: "Menyediakan ide-ide", traits: { smart: 2 } },
            { text: "Membuat suasana harmonis", traits: { warm: 2 } },
            { text: "Melakukan tugas dengan teliti", traits: { cautious: 2 } }
        ]
    },
    {
        question: "Cita-cita kamu...",
        answers: [
            { text: "Menjadi pahlawan atau pemimpin", traits: { brave: 2 } },
            { text: "Menjadi ahli di bidang tertentu", traits: { smart: 2 } },
            { text: "Membantu orang lain", traits: { warm: 2 } },
            { text: "Mencapai stabilitas dan keamanan", traits: { cautious: 2 } }
        ]
    }
];

function openAdmin() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    // ensure admin UI is initialized and populated
    switchAdminTab('characters');
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

// --- Persistence & Admin helpers ---
function loadCharactersFromStorage() {
    try {
        const stored = localStorage.getItem('customCharacters');
        if (stored) {
            const customChars = JSON.parse(stored);
            // merge without duplicating names
            customChars.forEach(c => {
                if (!characters.some(ch => ch.name === c.name)) characters.push(c);
            });
        }

        const storedTraits = localStorage.getItem('customTraits');
        if (storedTraits) {
            const customTraits = JSON.parse(storedTraits);
            Object.assign(characterTraits, customTraits);
        }
    } catch (e) {
        console.error('Gagal memuat karakter dari storage', e);
    }
}

function loadNameMappingsFromStorage() {
    try {
        const stored = localStorage.getItem('nameMapping');
        if (stored) {
            const mappings = JSON.parse(stored);
            Object.assign(nameMapping, mappings);
        }
    } catch (e) {
        console.error('Gagal memuat mapping nama', e);
    }
}

function switchAdminTab(tab) {
    document.querySelectorAll('#adminPanel .nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('nav' + (tab === 'characters' ? 'Characters' : tab.charAt(0).toUpperCase() + tab.slice(1))).classList.add('active');

    const form = document.getElementById('adminForm');
    const list = document.getElementById('adminList');
    form.innerHTML = '';
    list.innerHTML = '';

    if (tab === 'characters') {
        // build add/edit form
        form.innerHTML = `
            <h3>Tambah / Edit Karakter</h3>
            <div class="form-section-inner">
                <input id="charName" placeholder="Nama karakter">
                <select id="charGender">
                    <option value="">Pilih gender</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                    <option value="anomali">Anomali</option>
                </select>
                <input id="charImg" placeholder="images/nama.png">
                <input id="charSound" placeholder="sounds/nama.mp3">
                <input id="charDesc" placeholder="Deskripsi singkat">
                <textarea id="charDetails" placeholder="Detail panjang"></textarea>
                <input id="charWords" placeholder="Kata-kata khas">
                <div class="traits-form">
                    <label>Brave <input id="traitBrave" type="number" min="0" max="3" value="0"></label>
                    <label>Smart <input id="traitSmart" type="number" min="0" max="3" value="0"></label>
                    <label>Gentle <input id="traitGentle" type="number" min="0" max="3" value="0"></label>
                    <label>Leader <input id="traitLeader" type="number" min="0" max="3" value="0"></label>
                    <label>Warm <input id="traitWarm" type="number" min="0" max="3" value="0"></label>
                    <label>Cautious <input id="traitCautious" type="number" min="0" max="3" value="0"></label>
                </div>
                <div>
                    <button id="addCharBtn" onclick="addCharacter()">Tambah Karakter</button>
                    <button onclick="resetForm()">Reset</button>
                </div>
            </div>
        `;

        // render list using existing helper
        list.innerHTML = '<h3>Daftar Karakter</h3><div id="characterList"></div>';
        refreshCharacterList();
    } else if (tab === 'mappings') {
        form.innerHTML = `
            <h3>Mapping Nama ke Karakter</h3>
            <input id="mapName" placeholder="Nama user (kecilkan otomatis)">
            <select id="mapCharacter"></select>
            <div><button onclick="addNameMapping()">Simpan Mapping</button></div>
        `;

        list.innerHTML = '<h3>Daftar Mapping</h3><div id="mappingList"></div>';
        populateCharacterSelect();
        refreshNameMappingList();
    } else if (tab === 'stats') {
        list.innerHTML = '<h3>Statistik Singkat</h3><div id="statsContent"></div>';
        renderStats();
    } else if (tab === 'import') {
        form.innerHTML = `
            <h3>Import / Export JSON</h3>
            <div class="import-section">
                <h4>Export</h4>
                <button onclick="exportJSON()">Download JSON</button>
            </div>
            <div class="import-section">
                <h4>Import (paste JSON di bawah)</h4>
                <textarea id="importJson" style="width:100%;height:160px"></textarea>
                <div><button onclick="importJSON()">Import</button></div>
            </div>
        `;
    }
}

function populateCharacterSelect() {
    const sel = document.getElementById('mapCharacter');
    if (!sel) return;
    sel.innerHTML = '<option value="">Pilih karakter</option>';
    characters.forEach(ch => {
        const opt = document.createElement('option');
        opt.value = ch.name;
        opt.textContent = ch.name;
        sel.appendChild(opt);
    });
}

function refreshNameMappingList() {
    const container = document.getElementById('mappingList') || document.getElementById('adminList');
    if (!container) return;
    const listEl = document.getElementById('mappingList') || container;
    listEl.innerHTML = '';
    const keys = Object.keys(nameMapping).sort();
    if (keys.length === 0) {
        listEl.innerHTML = '<p>Tidak ada mapping tersimpan.</p>';
        return;
    }
    keys.forEach(k => {
        const div = document.createElement('div');
        div.className = 'mapping-item';
        div.innerHTML = `<div class="info"><div class="name">${k}</div><div class="character">${nameMapping[k]}</div></div><div class="mapping-actions"><button onclick="deleteNameMapping('${k}')">Hapus</button></div>`;
        listEl.appendChild(div);
    });
}

function addNameMapping() {
    const name = (document.getElementById('mapName')?.value || '').trim().toLowerCase();
    const character = document.getElementById('mapCharacter')?.value || '';
    if (!name || !character) { alert('Isi nama dan pilih karakter.'); return; }
    nameMapping[name] = character;
    localStorage.setItem('nameMapping', JSON.stringify(nameMapping));
    refreshNameMappingList();
    alert('Mapping tersimpan.');
}

function deleteNameMapping(name) {
    if (!confirm(`Hapus mapping untuk ${name}?`)) return;
    delete nameMapping[name];
    localStorage.setItem('nameMapping', JSON.stringify(nameMapping));
    refreshNameMappingList();
}

function exportJSON() {
    const payload = {
        characters: characters,
        characterTraits: characterTraits,
        nameMapping: nameMapping
    };
    const dataStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gamegacha_export.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importJSON() {
    const txt = document.getElementById('importJson')?.value;
    if (!txt) { alert('Paste JSON dulu.'); return; }
    try {
        const obj = JSON.parse(txt);
        if (Array.isArray(obj.characters)) {
            // overwrite custom characters
            localStorage.setItem('customCharacters', JSON.stringify(obj.characters));
            // merge into runtime
            loadCharactersFromStorage();
        }
        if (obj.characterTraits) {
            localStorage.setItem('customTraits', JSON.stringify(obj.characterTraits));
            Object.assign(characterTraits, obj.characterTraits);
        }
        if (obj.nameMapping) {
            localStorage.setItem('nameMapping', JSON.stringify(obj.nameMapping));
            Object.assign(nameMapping, obj.nameMapping);
        }
        alert('Import berhasil. Muat ulang halaman jika diperlukan.');
        refreshCharacterList();
        populateCharacterSelect();
        refreshNameMappingList();
    } catch (e) {
        alert('JSON invalid: ' + e.message);
    }
}

function renderStats() {
    const el = document.getElementById('statsContent');
    if (!el) return;
    const total = characters.length;
    const byGender = characters.reduce((acc, c) => { acc[c.gender] = (acc[c.gender] || 0) + 1; return acc; }, {});
    el.innerHTML = `<p>Total karakter: ${total}</p><p>By gender: ${JSON.stringify(byGender)}</p>`;
}

// initialize default admin tab
if (document.getElementById('adminPanel')) switchAdminTab('characters');