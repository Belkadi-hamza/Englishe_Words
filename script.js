(function(){
  "use strict";

  const CAT_META = {
    learning:    { label: "التعلّم",          color: "#4FD1C5" },
    application: { label: "التطبيق",          color: "#E7B24F" },
    explanation: { label: "الشرح والتفسير",   color: "#E17B5B" },
    interviews:  { label: "المقابلات",        color: "#9B8CE0" },
    practical:   { label: "الاستخدام العملي", color: "#5FA8E0" }
  };

  const MEANING_AR = {
    "Machine Learning": "فرع من الذكاء الاصطناعي يتيح للحواسيب التعلّم من البيانات وتحسين أدائها دون برمجة صريحة لكل حالة.",
    "Deep Learning": "فرع من تعلّم الآلة يعتمد على شبكات عصبية متعددة الطبقات لمعالجة بيانات معقدة كالصور والصوت.",
    "Neural Network": "نموذج حاسوبي مستوحى من الدماغ البشري يتكون من طبقات مترابطة من العقد.",
    "Training Data": "البيانات التي يستخدمها النموذج لتعلّم الأنماط قبل استخدامه في مهام حقيقية.",
    "Dataset": "مجموعة منظمة من البيانات تُستخدم لتدريب أو اختبار نماذج الذكاء الاصطناعي.",
    "Overfitting": "حالة يحفظ فيها النموذج بيانات التدريب بدقة عالية لكنه يفشل في التعميم على بيانات جديدة.",
    "Underfitting": "حالة يكون فيها النموذج بسيطًا جدًا فلا يستطيع تعلّم الأنماط الأساسية في البيانات.",
    "Supervised Learning": "نوع من التعلّم يُدرّب فيه النموذج على بيانات موسومة مع إجابات معروفة مسبقًا.",
    "Unsupervised Learning": "نوع من التعلّم يكتشف فيه النموذج الأنماط والبنية في البيانات دون وجود إجابات موسومة.",
    "Reinforcement Learning": "نوع من التعلّم يتخذ فيه العميل قرارات ويتعلّم من خلال المكافآت والعقوبات.",
    "Epoch": "دورة تدريب كاملة يمر خلالها النموذج على كامل بيانات التدريب مرة واحدة.",
    "Batch Size": "عدد عينات البيانات التي يعالجها النموذج معًا قبل تحديث أوزانه أثناء التدريب.",
    "Gradient Descent": "خوارزمية تحسين تُستخدم لتقليل دالة الخسارة عبر تعديل أوزان النموذج تدريجيًا.",
    "Loss Function": "دالة رياضية تقيس مدى ابتعاد تنبؤات النموذج عن القيم الحقيقية.",
    "Feature Extraction": "عملية تحويل البيانات الخام إلى خصائص مفيدة يمكن للنموذج التعلّم منها.",
    "Transfer Learning": "تقنية تُعيد فيها استخدام نموذج مدرّب مسبقًا على مهمة جديدة مشابهة لتوفير الوقت والموارد.",
    "Fine-tuning": "عملية تعديل نموذج مدرّب مسبقًا بتدريبه على بيانات إضافية خاصة بمهمة محددة.",
    "Validation Set": "جزء من البيانات يُستخدم لتقييم أداء النموذج أثناء التدريب لضبط إعداداته.",
    "Test Set": "جزء من البيانات لم يرَه النموذج من قبل، ويُستخدم لتقييم أدائه النهائي بشكل موضوعي.",
    "Hyperparameter": "إعداد يُحدّد قبل بدء التدريب مثل معدل التعلّم أو عدد الطبقات، ولا يتعلّمه النموذج بنفسه.",
    "Chatbot": "برنامج يحاكي المحادثة البشرية للرد على استفسارات المستخدمين تلقائيًا.",
    "Computer Vision": "مجال في الذكاء الاصطناعي يمكّن الحواسيب من فهم وتحليل الصور والفيديوهات.",
    "Natural Language Processing (NLP)": "مجال يمكّن الحواسيب من فهم اللغة البشرية وتحليلها وتوليدها.",
    "Speech Recognition": "تقنية تحوّل الكلام المنطوق إلى نص مكتوب يمكن للحاسوب معالجته.",
    "Recommendation System": "نظام يقترح منتجات أو محتوى بناءً على تفضيلات المستخدم وسلوكه السابق.",
    "Autonomous Vehicle": "سيارة أو مركبة قادرة على القيادة والتنقل دون تدخل بشري باستخدام الذكاء الاصطناعي والحساسات.",
    "Facial Recognition": "تقنية تحدد هوية شخص أو تتحقق منها اعتمادًا على ملامح وجهه.",
    "Predictive Analytics": "استخدام البيانات التاريخية ونماذج إحصائية للتنبؤ بأحداث أو نتائج مستقبلية.",
    "Sentiment Analysis": "تقنية تحلل النصوص لتحديد المشاعر أو الآراء الكامنة فيها.",
    "Algorithm": "مجموعة من الخطوات والقواعد المحددة التي يتبعها الحاسوب لحل مسألة أو تنفيذ مهمة.",
    "Model": "تمثيل رياضي مبني من البيانات ويُستخدم لاتخاذ تنبؤات أو قرارات.",
    "Parameter": "القيمة الداخلية التي يتعلّمها النموذج أثناء التدريب، مثل الأوزان في الشبكة العصبية.",
    "Weight": "قيمة عددية تحدد مدى تأثير مدخل معين على ناتج الشبكة العصبية.",
    "Bias": "ميل النموذج نحو نتائج معينة بسبب بيانات تدريب غير متوازنة أو معيبة.",
    "Transformer": "بنية حديثة للشبكات العصبية تعتمد على آلية الانتباه وهي أساس معظم نماذج اللغة الحالية.",
    "Prompt": "النص أو التعليمات التي يقدّمها المستخدم لنموذج الذكاء الاصطناعي للحصول على استجابة معينة.",
    "API Key": "رمز فريد يُستخدم للتحقق من هوية المستخدم عند الوصول إلى خدمة أو نموذج عبر واجهة برمجية.",
    "Fine-tune": "عملية إعادة تدريب نموذج جاهز على بيانات خاصة لتخصيصه لمهمة أو مجال معين.",
    "Dataset Labeling": "عملية إضافة تسميات أو فئات صحيحة للبيانات الخام لتصبح جاهزة للتعلّم الخاضع للإشراف.",
    "Model Training": "عملية تعليم النموذج التعرف على الأنماط عبر تمريره على بيانات التدريب بشكل متكرر.",
    "Inference Speed": "مقياس يوضح مدى سرعة النموذج في إنتاج استجابة بعد استلام مدخل جديد.",
    "GPU": "وحدة معالجة متخصصة تتيح إجراء حسابات متوازية بسرعة عالية لتسريع تدريب النماذج.",
    "Cloud Storage": "خدمة تتيح حفظ البيانات والملفات عبر الإنترنت بدلاً من تخزينها محليًا على الجهاز.",
    "Automation": "استخدام التقنية لتنفيذ المهام تلقائيًا دون تدخل بشري مستمر.",
    "Workflow": "سلسلة الخطوات المتسلسلة والمنظمة لإنجاز مهمة أو عملية معينة من البداية إلى النهاية.",
    "Integration": "عملية ربط أداة أو نظام ذكاء اصطناعي بأنظمة أو تطبيقات أخرى ليعملا معًا.",
    "Pipeline": "سلسلة من العمليات المترابطة التي تُنفّذ تلقائيًا بترتيب محدد لإنجاز مهمة كاملة.",
    "Deployment": "عملية إتاحة نظام أو نموذج للاستخدام الفعلي من قبل المستخدمين النهائيين.",
    "Monitoring": "عملية متابعة أداء النموذج أو النظام باستمرار بعد نشره لاكتشاف أي مشاكل مبكرًا.",
    "Scalability": "قدرة نظام أو نموذج على التعامل مع زيادة حجم البيانات أو عدد المستخدمين دون تراجع الأداء.",
    "User Interface (UI)": "الجزء المرئي من التطبيق الذي يتفاعل معه المستخدم مباشرة كالأزرار والقوائم.",
    "Backend": "الجزء من النظام الذي يعمل خلف الكواليس لمعالجة البيانات والمنطق دون تفاعل مباشر مع المستخدم.",
    "Frontend": "الجزء المرئي من التطبيق الذي يراه المستخدم ويتفاعل معه مباشرة عبر المتصفح أو الشاشة.",
    "Debugging": "عملية إيجاد وإصلاح الأخطاء أو المشاكل في الكود أو سلوك النموذج.",
    "Optimization": "عملية تعديل نموذج أو نظام لجعله أسرع أو أدق أو أكثر كفاءة في استخدام الموارد."
  };

  const grid = document.getElementById("cards-grid");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search-input");
  const resultCount = document.getElementById("result-count");
  const tabs = document.querySelectorAll(".tab");

  const overlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");
  const modalCatPill = document.getElementById("modal-cat-pill");
  const modalWordEn = document.getElementById("modal-word-en");
  const modalWordAr = document.getElementById("modal-word-ar");
  const modalMeaningEn = document.getElementById("modal-meaning-en");
  const modalMeaningAr = document.getElementById("modal-meaning-ar");
  const modalSentenceEn = document.getElementById("modal-sentence-en");
  const modalSentenceAr = document.getElementById("modal-sentence-ar");
  const modalDialogue = document.getElementById("modal-dialogue");
  const prevBtn = document.getElementById("prev-word");
  const nextBtn = document.getElementById("next-word");

  let state = { cat: "all", query: "" };
  let filteredList = VOCAB_DATA.slice();
  let currentIndex = -1;

  function initCounts(){
    document.getElementById("count-all").textContent = VOCAB_DATA.length;
    Object.keys(CAT_META).forEach(cat => {
      const n = VOCAB_DATA.filter(w => w.cat === cat).length;
      const el = document.getElementById("count-" + cat);
      if (el) el.textContent = n;
    });
  }

  function getMeaningText(word, lang){
    if (lang === "ar") {
      return word.meaning_ar || MEANING_AR[word.en] || word.sen_ar || "";
    }
    return word.meaning_en || word.meaning || "";
  }

  function applyFilters(){
    const q = state.query.trim().toLowerCase();
    filteredList = VOCAB_DATA.filter(w => {
      const catOk = state.cat === "all" || w.cat === state.cat;
      if (!catOk) return false;
      if (!q) return true;
      return (
        w.en.toLowerCase().includes(q) ||
        w.ar.includes(q) ||
        w.meaning.includes(q)
      );
    });
    renderGrid();
  }

  function renderGrid(){
    grid.innerHTML = "";
    resultCount.textContent = filteredList.length + " / " + VOCAB_DATA.length;

    if (filteredList.length === 0){
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    const frag = document.createDocumentFragment();
    filteredList.forEach((w) => {
      const meta = CAT_META[w.cat];
      const card = document.createElement("article");
      card.className = "vocab-card";
      card.style.setProperty("--cat-color", meta.color);
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", w.en + " - " + w.ar);

      card.innerHTML = `
        <div class="card-top-row">
          <span class="card-cat-tag">${meta.label}</span>
          <button class="card-play" data-word="${escapeAttr(w.en)}" aria-label="استمع لكلمة ${escapeAttr(w.en)}">
            <svg width="12" height="12" viewBox="0 0 18 18" fill="none"><path d="M3 7v4h3l4 3.5V3.5L6 7H3z" fill="currentColor"/><path d="M12 6.5a4 4 0 0 1 0 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
          </button>
        </div>
        <p class="card-word-en">${escapeHtml(w.en)}</p>
        <p class="card-word-ar">${escapeHtml(w.ar)}</p>
        <p class="card-meaning-preview">${escapeHtml(getMeaningText(w, "en"))}</p>
        <p class="card-meaning-preview-ar">${escapeHtml(getMeaningText(w, "ar"))}</p>
      `;

      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-play")) return;
        openModal(w);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " "){
          e.preventDefault();
          openModal(w);
        }
      });

      const playBtn = card.querySelector(".card-play");
      playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        speak(w.en, "en-US");
      });

      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  function escapeHtml(str){
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }
  function escapeAttr(str){
    return String(str).replace(/"/g, "&quot;");
  }

  // ---------------- Filter tab / search wiring ----------------
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      state.cat = tab.dataset.cat;
      applyFilters();
    });
  });

  let searchTimer = null;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = searchInput.value;
      applyFilters();
    }, 120);
  });

  // ---------------- Modal ----------------
  function openModal(word){
    currentIndex = filteredList.indexOf(word);
    renderModal(word);
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(){
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    window.speechSynthesis && window.speechSynthesis.cancel();
  }

  function renderModal(w){
    const meta = CAT_META[w.cat];
    document.querySelector(".modal-card").style.setProperty("--cat-color", meta.color);
    modalCatPill.textContent = meta.label;
    modalWordEn.textContent = w.en;
    modalWordAr.textContent = w.ar;
    modalMeaningEn.textContent = getMeaningText(w, "en");
    modalMeaningAr.textContent = getMeaningText(w, "ar");
    modalSentenceEn.textContent = w.sen_en;
    modalSentenceAr.textContent = w.sen_ar;

    modalDialogue.innerHTML = "";
    w.d.forEach(line => {
      const div = document.createElement("div");
      div.className = "dialogue-line";
      div.innerHTML = `
        <span class="dialogue-speaker">${line.s === "A" ? "المتحدث ١" : "المتحدث ٢"}</span>
        <span class="dialogue-en">${escapeHtml(line.en)}</span>
        <span class="dialogue-ar">${escapeHtml(line.ar)}</span>
      `;
      modalDialogue.appendChild(div);
    });

    window.speechSynthesis && window.speechSynthesis.cancel();
  }

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") goRelative(1);
    if (e.key === "ArrowRight") goRelative(-1);
  });

  function goRelative(delta){
    if (filteredList.length === 0) return;
    currentIndex = (currentIndex + delta + filteredList.length) % filteredList.length;
    renderModal(filteredList[currentIndex]);
  }
  prevBtn.addEventListener("click", () => goRelative(1));
  nextBtn.addEventListener("click", () => goRelative(-1));

  // ---------------- Text-to-speech ----------------
  const ttsBanner = document.getElementById("tts-banner");
  let voicesReady = false;
  let availableVoices = [];

  function loadVoices(){
    availableVoices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    if (availableVoices.length > 0) voicesReady = true;
  }

  function initTTS(){
    if (!("speechSynthesis" in window)) {
      showTtsBanner("متصفحك لا يدعم النطق الصوتي (Web Speech API). جرّب فتح الملف في كروم أو إيدج أو سفاري.");
      return;
    }
    loadVoices();
    if (!voicesReady && "onvoiceschanged" in window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  function showTtsBanner(msg){
    if (!ttsBanner) return;
    ttsBanner.textContent = msg;
    ttsBanner.hidden = false;
  }

  function pickEnglishVoice(){
    if (!availableVoices || availableVoices.length === 0) loadVoices();
    const enVoices = availableVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
    return enVoices.find(v => v.lang.toLowerCase() === "en-us") || enVoices[0] || null;
  }

  function speak(text, lang, onEnd){
    if (!("speechSynthesis" in window)) {
      showTtsBanner("متصفحك لا يدعم النطق الصوتي (Web Speech API). جرّب فتح الملف في كروم أو إيدج أو سفاري.");
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      utter.rate = 0.95;
      const voice = pickEnglishVoice();
      if (voice) utter.voice = voice;
      utter.onend = () => { if (onEnd) onEnd(); };
      utter.onerror = () => {
        if (onEnd) onEnd();
        showTtsBanner("تعذّر تشغيل الصوت. إن كنت تعرض الموقع داخل معاينة مضمّنة، افتح ملف index.html مباشرة في متصفحك.");
      };
      window.setTimeout(() => window.speechSynthesis.speak(utter), 30);
    } catch (err) {
      showTtsBanner("تعذّر تشغيل الصوت. إن كنت تعرض الموقع داخل معاينة مضمّنة، افتح ملف index.html مباشرة في متصفحك.");
    }
  }

  initTTS();

  document.querySelectorAll(".listen-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.listen;
      let text = "";
      if (target === "sentence-en") {
        text = modalSentenceEn.textContent;
      } else if (target === "dialogue-en") {
        const lines = Array.from(modalDialogue.querySelectorAll(".dialogue-en")).map(el => el.textContent);
        text = lines.join(". ");
      }
      if (!text) return;

      document.querySelectorAll(".listen-btn").forEach(b => b.classList.remove("speaking"));
      btn.classList.add("speaking");
      speak(text, "en-US", () => btn.classList.remove("speaking"));
    });
  });

  const testAudioBtn = document.getElementById("test-audio-btn");
  if (testAudioBtn) {
    testAudioBtn.addEventListener("click", () => {
      ttsBanner.hidden = true;
      speak("Hello, this is a test of the voice feature.", "en-US");
    });
  }

  // ---------------- Init ----------------
  initCounts();
  applyFilters();
})();
