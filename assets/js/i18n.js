/*!
 * KOVER – English / Arabic language switcher
 * ------------------------------------------------------------------
 * - The HTML stays in English (good for SEO + a safe fallback).
 * - When Arabic is selected the page is translated in the browser before the
 *   sliders start, <html> gets lang="ar" dir="rtl", and assets/css/lang.css
 *   handles the right-to-left layout.
 * - The choice is remembered in localStorage ("kover-lang").
 *   You can also force it with a link:  index.html?lang=ar
 *
 * To change/add a translation: edit DICT below. The key is the English text
 * in lower case (extra spaces ignored); the value is the Arabic text.
 * Headings made of several coloured pieces live in BLOCKS (one Arabic piece
 * per English piece, in the same order).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'kover-lang';
  var DEFAULT_LANG = 'en';           // language used on the first visit
  var LANGS = { en: { dir: 'ltr' }, ar: { dir: 'rtl' } };

  /* ---------------------------------------------------------------- data */
  var DICT = {
    ". all rights reserved.": "",
    "2lt - 3lt - 4lt - 5lt - 7lt - 9lt - 11lt - 15lt - 20lt - 30lt - 36lt - 50lt - 75lt - 90lt - 105lt - 125lt - 150lt.": "2، 3، 4، 5، 7، 9، 11، 15، 20، 30، 36، 50، 75، 90، 105، 125، 150 لتر.",
    "404 - error": "404 - خطأ",
    "404 error page": "404 - الصفحة غير موجودة",
    "about kover": "عن كوڤر",
    "about us": "من نحن",
    "accuracy in appointments": "الدقة في المواعيد",
    "accuracy in working hours": "الدقة في مواعيد العمل",
    "achieving the satisfaction and well-being of our customers, as we believe in the right of customers to obtain a product of outstanding quality and sophisticated and distinguished customer service.": "تحقيق رضا عملائنا ورفاهيتهم، إيماناً منا بحق العميل في الحصول على منتج متميّز الجودة وخدمة عملاء راقية ومتميّزة.",
    "adaptable foster skillfulness": "تعزيز المهارة والكفاءة",
    "adaptable to customer requirements": "التكيّف مع متطلبات العملاء",
    "after-sale services": "خدمات ما بعد البيع",
    "all menus": "جميع الأقسام",
    "amazing color": "لون مذهل",
    "ambition for growth": "الطموح للنمو",
    "available in different sizes, large and small": "متوفر بأحجام مختلفة، كبيرة وصغيرة",
    "back to home": "العودة إلى الرئيسية",
    "belnder": "خلاط",
    "blender's knives": "شفرات الخلاط",
    "blender's speed": "سرعة الخلاط",
    "blenders": "الخلاطات",
    "built in cookers": "طباخات مدمجة",
    "call anytime 24/7": "اتصل بنا في أي وقت 24/7",
    "cancel preloader": "إلغاء التحميل",
    "choose your best": "اختر الأفضل من",
    "combustion protection system.": "نظام حماية من الاحتراق.",
    "compellingly supply professional material rather than out-of-the-box process improvements. phosfluorescently communicate premium mindshare and extensive imperatives. dynamically fashion.": "نوفّر مواد احترافية بدلاً من التحسينات الجاهزة للعمليات، ونتواصل بفعالية لتقديم قيمة متميزة وحلولاً شاملة، ونصمّم حلولنا بديناميكية.",
    "contact now": "تواصل معنا الآن",
    "contact us": "اتصل بنا",
    "contain a thick surface made of steel": "يحتوي على سطح سميك مصنوع من الفولاذ",
    "containing different size of eyes 3 and 4 eyes.": "يتوفر بأحجام مختلفة: 3 و4 عيون.",
    "containing different size of eyes 4 and 5 eyes.": "يتوفر بأحجام مختلفة: 4 و5 عيون.",
    "containing five pieces.": "يحتوي على خمس قطع.",
    "containing two safety valves": "يحتوي على صمامَي أمان",
    "cooker's eyes": "عيون الطباخ",
    "cookers": "الضغط",
    "cooking pots": "أواني الطبخ",
    "cooking speed": "سرعة الطهي",
    "copper eyes": "عيون نحاسية",
    "copyright": "جميع الحقوق محفوظة",
    "customer comfort is what matters most to us by providing free maintenance during the warranty period": "راحة العميل هي أولويتنا، لذلك نقدّم صيانة مجانية خلال فترة الضمان",
    "customer happy": "عميل سعيد",
    "customer services": "خدمة العملاء",
    "customers should apply all terms and conditions related to this products.": "على العملاء الالتزام بجميع الشروط والأحكام المتعلقة بهذه المنتجات.",
    "discover more": "اكتشف المزيد",
    "easy to clean.": "سهل التنظيف.",
    "easy to control speeds.": "سرعات سهلة التحكم.",
    "economical and suitable for solar energy.": "اقتصادي ومناسب للطاقة الشمسية.",
    "economical and with a power of 300 watts.": "اقتصادي بقدرة 300 واط.",
    "economical in electricity consumption.": "اقتصادي في استهلاك الكهرباء.",
    "economical in gas consumption.": "اقتصادي في استهلاك الغاز.",
    "electric eggs whisks": "مضارب البيض الكهربائية",
    "electric oven": "فرن كهربائي",
    "email": "البريد الإلكتروني",
    "equipped with two mills.": "مزوّد بطاحونتين.",
    "error": "خطأ",
    "experience": "الخبرة",
    "experienced employees": "موظف من ذوي الخبرة",
    "featured": "الأبرز",
    "featured products": "المنتجات المميزة",
    "five years warranty card.": "بطاقة ضمان لمدة خمس سنوات.",
    "free maintenance": "صيانة مجانية",
    "free stand oven": "طباخ غاز أرضي",
    "free stand oven 4 eyes": "طباخ غاز أرضي 4 عيون",
    "free stand oven 5 eyes": "طباخ غاز أرضي 5 عيون",
    "frying pans": "مقالي",
    "gallery": "المعرض",
    "gas table stove with different eyes and with different materials.": "موقد غاز منضدي بعدد عيون مختلف ومن خامات متنوعة.",
    "gas table stoves": "مواقد الغاز المنضدية",
    "gas table stoves 3 eyes copper": "موقد غاز منضدي 3 عيون نحاس",
    "gas table stoves 3 eyes steel": "موقد غاز منضدي 3 عيون ستانلس",
    "gas table stoves 4 eyes copper": "موقد غاز منضدي 4 عيون نحاس",
    "gas table stoves 4 eyes steel": "موقد غاز منضدي 4 عيون ستانلس",
    "get in touch": "تواصل معنا",
    "glass capacity": "سعة الكأس",
    "good reputation in our market": "سمعة طيبة في السوق",
    "high quality": "جودة عالية",
    "high quality products": "منتجات عالية الجودة",
    "highly experienced team": "فريق ذو خبرة عالية",
    "home": "الرئيسية",
    "it consists of two floors.": "يتكوّن من طابقين.",
    "it contains the engine protection system from combustion": "يحتوي على نظام حماية المحرك من الاحتراق",
    "it has three easy-to-control speeds": "يتميّز بثلاث سرعات سهلة التحكم",
    "it is characterized by self ignition.": "يتميّز بالإشعال الذاتي.",
    "it is distinguished by not needing another source to ignite it": "يتميّز بعدم حاجته إلى مصدر آخر لإشعاله",
    "it is protected against breakage.": "مقاوم للكسر.",
    "it is your right hand in the kitchen.": "يدك اليمنى في المطبخ.",
    "its engine protection": "حماية المحرك",
    "its surface has a shiny silver color.": "سطحه بلون فضي لامع.",
    "juice blender": "خلاط عصير",
    "juicer and spices glass against breakage.": "كأس العصير والتوابل مقاوم للكسر.",
    "knives made of stainless steel.": "شفرات مصنوعة من الستانلس ستيل.",
    "kover": "كوڤر",
    "kover - about us": "كوڤر - من نحن",
    "kover - contact us": "كوڤر - اتصل بنا",
    "kover - featured products": "كوڤر - المنتجات المميزة",
    "kover - home": "كوڤر - الرئيسية",
    "kover - products": "كوڤر - المنتجات",
    "kover agency branch for home appliances,": "فرع وكالة كوڤر للأجهزة المنزلية،",
    "kover agency branch for home appliances, nuqm, sana'a, yemen": "فرع وكالة كوڤر للأجهزة المنزلية، نقم، صنعاء، اليمن",
    "kover has excellent of": "كوڤر",
    "location": "الموقع",
    "maintenance members": "فني صيانة",
    "maintenance service": "خدمة الصيانة",
    "mixer products": "المازجات",
    "months experience": "شهراً من الخبرة",
    "months of": "أشهر من",
    "nuqm, sana'a, yemen": "نقم، صنعاء، اليمن",
    "objectively pontificate quality models before intuitive information. dramatically recaptiualize multifunctional materials.": "نضع نماذج الجودة في المقام الأول قبل المعلومات الحدسية، ونعيد تصوّر المواد متعددة الوظائف بشكل جذري.",
    "off": "خصم",
    "offering a 3-year performance warranty against any manufacturing defect": "نقدّم ضمان أداء لمدة 3 سنوات ضد أي عيب تصنيع",
    "offering a 5-year performance warranty against any manufacturing defect": "نقدّم ضمان أداء لمدة 5 سنوات ضد أي عيب تصنيع",
    "offering a 5-year performance warranty against any manufacturing defect.": "نقدّم ضمان أداء لمدة 5 سنوات ضد أي عيب تصنيع.",
    "offering a free maintenance service of items under warranty.": "نقدّم خدمة صيانة مجانية للمنتجات المشمولة بالضمان.",
    "offering a life-time performance warranty against any manufacturing defect": "نقدّم ضمان أداء مدى الحياة ضد أي عيب تصنيع",
    "offering after-sale services for this products.": "نقدّم خدمات ما بعد البيع لهذه المنتجات.",
    "offering high quality of electric oven with free maintanace for our customers.": "نقدّم أفراناً كهربائية عالية الجودة مع صيانة مجانية لعملائنا.",
    "offering high quality of free stand oven 5 eyes and 4 eyes with free maintanace for our customers.": "نقدّم طباخات غاز أرضية بفرن (4 و5 عيون) عالية الجودة مع صيانة مجانية لعملائنا.",
    "offering international and high quality products from professional manufacturer for all kitchen utensils supplies to our loyal customers.": "نقدّم لعملائنا الأوفياء منتجات عالمية عالية الجودة من مصنّع محترف لجميع مستلزمات أدوات المطبخ.",
    "offering multi sizes of pressure cookers with high quality from international brands.": "نقدّم قدور ضغط بأحجام متعددة وجودة عالية من علامات تجارية عالمية.",
    "one of its advantages is that it has an amazing silver color": "من مميزاته لونه الفضي المذهل",
    "orginal spare parts": "قطع غيار أصلية",
    "our departments": "أقسامنا",
    "our message...": "رسالتنا...",
    "our mission...": "مهمتنا...",
    "our philosophy...": "فلسفتنا...",
    "our popular products": "منتجاتنا الشائعة",
    "our purpose...": "غايتنا...",
    "our services": "خدماتنا",
    "our story": "قصتنا",
    "our strength": "قوتنا",
    "our values...": "قيمنا...",
    "our vision...": "رؤيتنا...",
    "page not found": "الصفحة غير موجودة",
    "performance guarantee": "ضمان الأداء",
    "phone": "الهاتف",
    "pot holders": "حوامل القدور",
    "powerd by |": "تطوير |",
    "pressure cooker safety": "أمان قدر الضغط",
    "pressure cooker sizes": "أحجام قدور الضغط",
    "pressure cookers": "قدور الضغط",
    "products": "المنتجات",
    "products list": "قائمة المنتجات",
    "providing all necessay spare parts": "نوفّر جميع قطع الغيار اللازمة",
    "providing orginal spare parts": "توفير قطع الغيار الأصلية",
    "providing original spare parts is what distinguishes us most in the local market among our customers": "توفير قطع الغيار الأصلية هو أبرز ما يميّزنا في السوق المحلي لدى عملائنا",
    "providing sett elbet blender that serve ladies and womoen in their kitchen with multi process.": "نوفّر خلاط ست البيت الذي يخدم السيدات في مطبخهن بوظائف متعددة.",
    "quick links": "روابط سريعة",
    "rapidiously repurpose customer directed markets. rapidiously enhance extensive.": "نعيد توجيه الأسواق بسرعة وفق احتياجات العملاء، ونطوّر خدماتنا الواسعة بوتيرة متسارعة.",
    "safer cooking with an additional valve": "طهي أكثر أماناً بفضل صمام إضافي",
    "safety valves": "صمامات الأمان",
    "seamlessly conceptualize sticky functionalities after prospective data. interactively unleash customized supply chains whereas goal oriented paradigm. credibly reintermediate client-focused model for.": "نبتكر وظائف متكاملة بسلاسة استناداً إلى البيانات المتوقعة، ونطلق سلاسل إمداد مخصصة وفق نهج موجَّه نحو الأهداف، ونعتمد نموذجاً يركّز على العميل.",
    "self-igniting": "إشعال ذاتي",
    "sett elbet blender": "خلاط ست البيت",
    "shop now": "تسوّق الآن",
    "since the founding, we seek to achieve merit in providing our distinctive products to our local market through our branches located in all yemeni governorates, and we also aspire to be at the best of our valued customers' expectations by providing them with services that facilitate the process of dealing and using our products": "منذ التأسيس ونحن نسعى إلى تحقيق التميّز في تقديم منتجاتنا المميزة للسوق المحلي عبر فروعنا المنتشرة في جميع المحافظات اليمنية، كما نتطلع إلى تجاوز توقعات عملائنا الكرام بتقديم خدمات تسهّل التعامل مع منتجاتنا واستخدامها",
    "spare parts": "قطع الغيار",
    "speed in cooking with the high pressure feature": "سرعة في الطهي بفضل خاصية الضغط العالي",
    "stoves": "المنضدية",
    "strength in innovation we are committed to permanent development and in accordance with international standards in order to achieve the highest levels of quality and luxury for our customers. find innovative and fast solutions at reasonable prices that provide comfort and participatory modernity. your opinion is always important to us to meet the needs of our customers.": "القوة في الابتكار: نلتزم بالتطوير المستمر وفق المعايير العالمية لتحقيق أعلى مستويات الجودة والرفاهية لعملائنا. نبحث عن حلول مبتكرة وسريعة بأسعار مناسبة تحقق الراحة والحداثة التشاركية. رأيكم يهمّنا دائماً لتلبية احتياجات عملائنا.",
    "submit message": "إرسال الرسالة",
    "take a tour to our": "تفضّل بجولة في",
    "terms and conditions": "الشروط والأحكام",
    "the blender quality": "جودة الخلاط",
    "the blender's knives made of stainless steel": "شفرات الخلاط مصنوعة من الستانلس ستيل",
    "the capacity of the glass is 1400 ml.": "سعة الكأس 1400 مل.",
    "the eyes are made in italy sabaf": "العيون إيطالية الصنع من SABAF",
    "the eyes are made in italy sabaf.": "العيون إيطالية الصنع من SABAF.",
    "the glass capacity is 1400 ml": "سعة الكأس 1400 مل",
    "the glass of blender and spices are against breakage": "كأس الخلاط وكأس التوابل مقاوم للكسر",
    "the outer body": "الهيكل الخارجي",
    "the outer body of the cooker is made of stainless steel": "الهيكل الخارجي للطباخ مصنوع من الستانلس ستيل",
    "the outer body of the cooker is made of stainless steel.": "الهيكل الخارجي للطباخ مصنوع من الستانلس ستيل.",
    "the pot holders are made of unbreakable cast iron": "حوامل القدور مصنوعة من حديد الزهر غير القابل للكسر",
    "the pot holders are made of unbreakable cast iron.": "حوامل القدور مصنوعة من حديد الزهر غير القابل للكسر.",
    "there are many sizes of pressure cookers that are characterized by containing two safety valves, which gives them many advantages, including strength and durability, as well as safety in cooking, as well as the speed of healthy cooking. these sizes are as follows:": "تتوفر قدور الضغط بأحجام متعددة، وتتميّز باحتوائها على صمامَي أمان، ما يمنحها مزايا عديدة منها المتانة والقوة والأمان أثناء الطهي، إضافةً إلى سرعة الطهي الصحي. وهذه الأحجام هي:",
    "these are some of our most popular products which featured in the top of our list and most our customers take it mostly.": "هذه بعض من أكثر منتجاتنا رواجاً، وهي في صدارة قائمتنا ويقبل عليها معظم عملائنا.",
    "thick steel surface.": "سطح فولاذي سميك.",
    "thick surface": "سطح سميك",
    "this product is very popular with excellent and perfect quality": "منتج شائع جداً بجودة ممتازة ومثالية",
    "three speeds are easy to control.": "ثلاث سرعات سهلة التحكم.",
    "to ensure safety and performance, the eyes are made of copper": "لضمان السلامة والأداء، العيون مصنوعة من النحاس",
    "turkish industry with high quality.": "صناعة تركية عالية الجودة.",
    "two types are available, made of raw copper and stainless steel.": "يتوفر نوعان: نحاس خام وستانلس ستيل.",
    "uphold for products quality": "الحفاظ على جودة المنتجات",
    "we are always available 24/7 for our valuable customers.": "نحن متواجدون على مدار الساعة لخدمة عملائنا الكرام.",
    "we are committed to the highest level of professional standards, honesty, honesty and sincerity in our work to serve our society and to maintain a clean environment and appropriate working conditions.": "نلتزم بأعلى مستويات المعايير المهنية والأمانة والإخلاص في عملنا لخدمة مجتمعنا والحفاظ على بيئة نظيفة وظروف عمل مناسبة.",
    "we are distinguished from others by providing high quality products with international specifications": "نتميّز عن غيرنا بتقديم منتجات عالية الجودة وفق مواصفات عالمية",
    "we are the exclusive agent for cover international and chinese company in yemen which produce high quality for household appliances and we have branches in most of yemen provinces.": "نحن الوكيل الحصري لشركة كوڤر الدولية الصينية في اليمن، المتخصصة في إنتاج أجهزة منزلية عالية الجودة، ولدينا فروع في معظم محافظات اليمن.",
    "we offer a lot of services to our adorable customers who are dealing with us for long time but we have some of them known as strong services as shown below": "نقدّم العديد من الخدمات لعملائنا الأعزاء الذين يتعاملون معنا منذ فترة طويلة، ومن أبرز هذه الخدمات ما هو موضّح أدناه.",
    "we offer a variety of juice blender with high quality and different services.": "نقدّم تشكيلة من خلاطات العصير عالية الجودة بوظائف متنوعة.",
    "we offer a wide range of original spare parts.": "نوفّر مجموعة واسعة من قطع الغيار الأصلية.",
    "we seek leadership in the electrical appliances market in the yemeni market": "نسعى إلى الريادة في سوق الأجهزة الكهربائية في السوق اليمني",
    "we strive to bring our product to international standards in terms of quality, efficiency and effectiveness while providing environmentally friendly products": "نسعى للارتقاء بمنتجاتنا إلى المعايير العالمية من حيث الجودة والكفاءة والفعالية، مع تقديم منتجات صديقة للبيئة",
    "we're sorry, the page you are looking for on longer exists.": "عذراً، الصفحة التي تبحث عنها لم تعد موجودة.",
    "welcome to kover for household utensils": "أهلاً بكم في كوڤر للأدوات المنزلية",
    "welcome to our": "أهلاً بكم في عالم",
    "who we are": "هويّتنا",
    "work as one team": "العمل بروح الفريق الواحد",
    "kover for household utensils": "كوڤر للأدوات المنزلية"
  };

  var BLOCKS = {
    "kover blender": ["كوڤر", "للخلاطات و"],
    "kover blender &": ["كوڤر", "للخلاطات", "و"],
    "kover pressure": ["كوڤر", "قدور"],
    "kover gas table": ["كوڤر", "مواقد الغاز"],
    "kover gas table &": ["كوڤر", "مواقد الغاز", ""],
    "welcome to our kover blender": ["أهلاً بكم في عالم", "كوڤر", "للخلاطات و"],
    "take a tour to our kover pressure": ["تفضّل بجولة في", "كوڤر", "قدور"],
    "choose your best kover gas table": ["اختر الأفضل من", "كوڤر", "مواقد الغاز"],
    "take a tour to get knowledge about kover": ["تعرّف أكثر على", "كوڤر"],
    "our most strong services": ["خدماتنا", "الأكثر تميّزاً"],
    "kover has excellent of quality products": ["كوڤر تقدّم لكم", "منتجات عالية الجودة"],
    "our most lovable products": ["منتجاتنا", "الأكثر حباً لدى العملاء"],
    "see some of our products": ["تعرّف على بعض", "منتجاتنا"],
    "see more about kover": ["اعرف المزيد عن", "كوڤر"],
    "our most popular products": ["منتجاتنا", "الأكثر رواجاً"],
    "our popular products": ["منتجاتنا", "الأكثر رواجاً"],
    "about us": ["من", "نحن"],
    "contact us": ["اتصل", "بنا"],
    "featured products": ["المنتجات", "المميزة"],
    "our products": ["منتجات", "كوڤر"],
    "404 - error": ["404 -", "خطأ"],
    "order now": ["اطلب", "الآن"]
  };

  var ATTRS = {
    "what are you looking for?": "عمّ تبحث؟",
    "your name": "الاسم",
    "email address": "البريد الإلكتروني",
    "phone number": "رقم الهاتف",
    "subject": "الموضوع",
    "your message": "رسالتك",
    "close (esc)": "إغلاق (Esc)"
  };

  /* --------------------------------------------------------------- utils */
  function norm(s) {
    return String(s).replace(/\s+/g, ' ').trim().toLowerCase().replace(/[\u2018\u2019]/g, "'");
  }
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }

  function save(l) { try { localStorage.setItem(STORAGE_KEY, l); } catch (e) { } }

  function getLang() {
    var q = /[?&]lang=(en|ar)\b/.exec(location.search);
    if (q) { save(q[1]); return q[1]; }
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s && has(LANGS, s)) return s;
    } catch (e) { }
    return DEFAULT_LANG;
  }

  function setNodeText(node, text) {
    var m = /^(\s*)[\s\S]*?(\s*)$/.exec(node.nodeValue);
    node.nodeValue = m[1] + text + (text === '' ? '' : m[2]);
  }

  /* ----------------------------------------------------------- translate */
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, IFRAME: 1, TEXTAREA: 1 };
  var BLOCK_SEL = 'h1,h2,h3,h4,h5,h6,.sub-title,.order-btn,.breadcumb-menu li,.counter-card_number';

  function collectTextNodes() {
    var out = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    while (walker.nextNode()) {
      var n = walker.currentNode, p = n.parentNode;
      if (!/\S/.test(n.nodeValue) || !p || SKIP[p.nodeName]) continue;
      if (p.closest && p.closest('[data-i18n-skip]')) continue;
      out.push(n);
    }
    return out;
  }

  function translatePage() {
    var nodes = collectTextNodes(), i, j;

    // 1) headings made of several pieces -> translated together
    var groups = [], seen = [];
    for (i = 0; i < nodes.length; i++) {
      var el = nodes[i].parentNode.closest ? nodes[i].parentNode.closest(BLOCK_SEL) : null;
      if (!el) continue;
      var k = seen.indexOf(el);
      if (k < 0) { seen.push(el); groups.push([]); k = seen.length - 1; }
      groups[k].push(nodes[i]);
    }
    for (i = 0; i < groups.length; i++) {
      var g = groups[i];
      if (g.length < 2) continue;
      var key = norm(g.map(function (n) { return n.nodeValue; }).join(' '));
      var parts = has(BLOCKS, key) ? BLOCKS[key] : null;
      if (parts && parts.length === g.length) {
        for (j = 0; j < g.length; j++) { setNodeText(g[j], parts[j]); g[j].__i18n = 1; }
      }
    }

    // 2) every other text node
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].__i18n) continue;
      var t = norm(nodes[i].nodeValue);
      if (has(DICT, t)) setNodeText(nodes[i], DICT[t]);
    }

    // 3) placeholders + tooltips
    var attrEls = document.querySelectorAll('[placeholder],[title]');
    for (i = 0; i < attrEls.length; i++) {
      ['placeholder', 'title'].forEach(function (a) {
        var v = attrEls[i].getAttribute(a);
        if (v && has(ATTRS, norm(v))) attrEls[i].setAttribute(a, ATTRS[norm(v)]);
      });
    }

    // 4) <title> + meta description/keywords
    var title = norm(document.title);
    if (has(DICT, title)) document.title = DICT[title];
    var metas = document.querySelectorAll('meta[name="description"],meta[name="keywords"]');
    for (i = 0; i < metas.length; i++) {
      var c = norm(metas[i].getAttribute('content') || '');
      if (has(DICT, c)) metas[i].setAttribute('content', DICT[c]);
    }
  }

  /* ---------------------------------------------------------------- init */
  var lang = getLang();
  var root = document.documentElement;
  root.lang = lang;
  root.dir = LANGS[lang].dir;

  if (lang === 'ar') {
    translatePage();
    mirrorShapes();
  }

  // decorative pictures are positioned with data-left / data-right: swap them so
  // they stay clear of the (now right-aligned) text
  function mirrorShapes() {
    var els = document.querySelectorAll('.shape-mockup');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.classList.contains('about-shape1')) continue;   // sits behind the picture, stays left
      var l = el.getAttribute('data-left'), r = el.getAttribute('data-right');
      if (l !== null) el.removeAttribute('data-left');
      if (r !== null) el.removeAttribute('data-right');
      if (l !== null) el.setAttribute('data-right', l);
      if (r !== null) el.setAttribute('data-left', r);
    }
  }

  function switchTo(next) {
    save(next);
    root.classList.add('lang-switching');
    setTimeout(function () {
      // reload so the sliders re-initialise with the right direction
      var u;
      try { u = new URL(location.href); } catch (e) { u = null; }
      if (u && u.searchParams.has('lang')) {
        u.searchParams.delete('lang');
        location.replace(u.toString());
      } else {
        location.reload();
      }
    }, 140);
  }

  var btns = document.querySelectorAll('[data-lang-switch]');
  for (var b = 0; b < btns.length; b++) {
    btns[b].setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    btns[b].addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      switchTo(lang === 'ar' ? 'en' : 'ar');
    });
  }
})();
