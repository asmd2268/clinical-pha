// ============================================================
// قاعدة بيانات الأدوية الشاملة — يمكن تعديلها من لوحة الأدمن
// ============================================================
const DRUG_DATABASE_DEFAULT = [

// ═══════════════════════════════════════════
// أدوية القلب والأوعية الدموية
// ═══════════════════════════════════════════
{id:'d001',name:'Aspirin (أسبرين)',category:'القلب والأوعية',dose:'75-325mg',freq:'مرة يومياً',timing:'صباحاً مع الطعام',food:'مع الطعام أو بعده',route:'فموي',sideEffects:'نزيف هضمي، قرحة، طنين (بجرعات عالية)',contraindications:'قرحة نشطة، حساسية، أطفال <16 سنة',renalAdj:'احتياط مع GFR<10',interactions:'Warfarin, NSAIDs, Heparin',mechanism:'مثبط COX لا ارتدادي',halfLife:'15-20 دقيقة (حمض صالسيليك 2-3 ساعات)',blackBox:'',notes:'للوقاية القلبية: 75-100mg يومياً. مضغ الأولى للذبحة الحادة.',optimalTime:'صباحاً',category2:'مضاد تخثر'},

{id:'d002',name:'Atorvastatin (أتورفاستاتين)',category:'القلب والأوعية',dose:'10-80mg',freq:'مرة يومياً',timing:'في أي وقت — ليلاً مفضل',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'ألم عضلي، رفع إنزيمات الكبد، صداع',contraindications:'حمل، إرضاع، أمراض كبد نشطة',renalAdj:'لا تعديل',interactions:'Amiodarone, Erythromycin, Antifungals, Grapefruit',mechanism:'مثبط HMG-CoA Reductase',halfLife:'14 ساعة',blackBox:'',notes:'مراقبة CPK وكبد كل 6-12 شهراً. تجنب عصير الجريب فروت.',optimalTime:'ليلاً',category2:'خافض دهون'},

{id:'d003',name:'Simvastatin (سيمفاستاتين)',category:'القلب والأوعية',dose:'10-40mg',freq:'مرة يومياً',timing:'ليلاً',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'ألم عضلي، رابدوميوليسيس (نادر)، رفع كبد',contraindications:'حمل، أمراض كبد، مع Amiodarone >20mg',renalAdj:'احتياط مع GFR<30',interactions:'Amiodarone (max 20mg), Amlodipine (max 20mg), Diltiazem',mechanism:'مثبط HMG-CoA Reductase',halfLife:'2 ساعة',blackBox:'خطر اعتلال عضلي مع بعض التركيبات',notes:'الحد الأقصى 20mg مع Amiodarone. تجنب الجريب فروت.',optimalTime:'ليلاً',category2:'خافض دهون'},

{id:'d004',name:'Metoprolol (ميتوبرولول)',category:'القلب والأوعية',dose:'25-200mg',freq:'مرة-مرتين يومياً',timing:'صباحاً (أو مقسمة)',food:'مع الطعام',route:'فموي',sideEffects:'بطء قلب، برودة أطراف، تعب، كوابيس، ضيق تنفس',contraindications:'بطء قلب شديد، انسداد AV درجة 2-3، صدمة قلبية',renalAdj:'لا تعديل',interactions:'Verapamil, Diltiazem, Clonidine',mechanism:'حاصر بيتا 1 انتقائي',halfLife:'3-7 ساعات',blackBox:'لا توقف فجأة — تدرج في الإيقاف',notes:'XL/Succinate: مرة يومياً. Tartrate: مرتين. لا توقف فجأة.',optimalTime:'صباحاً',category2:'حاصر بيتا'},

{id:'d005',name:'Bisoprolol (بيسوبرولول)',category:'القلب والأوعية',dose:'1.25-10mg',freq:'مرة يومياً',timing:'صباحاً',food:'مع أو بدون طعام',route:'فموي',sideEffects:'بطء قلب، تعب، دوخة، برودة أطراف',contraindications:'انسداد AV، قصور قلب حاد، بطء قلب شديد',renalAdj:'احتياط مع GFR<20',interactions:'Verapamil, Diltiazem, Antiarrhythmics',mechanism:'حاصر بيتا 1 انتقائي عالي',halfLife:'10-12 ساعة',blackBox:'لا توقف فجأة',notes:'المفضل في قصور القلب. ابدأ بجرعة منخفضة وزد تدريجياً.',optimalTime:'صباحاً',category2:'حاصر بيتا'},

{id:'d006',name:'Amlodipine (أملوديبين)',category:'القلب والأوعية',dose:'2.5-10mg',freq:'مرة يومياً',timing:'في أي وقت',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'وذمة قدمين، احمرار وجه، صداع، خفقان',contraindications:'صدمة قلبية، تضيق أبهر شديد',renalAdj:'لا تعديل',interactions:'Simvastatin (max 20mg), Cyclosporine',mechanism:'حاصر قنوات كالسيوم ديهيدروبيريدين',halfLife:'30-50 ساعة',blackBox:'',notes:'وذمة الساقين شائعة — أخبر المريض. تأثير تراكمي يظهر بعد أسابيع.',optimalTime:'أي وقت',category2:'حاصر كالسيوم'},

{id:'d007',name:'Lisinopril (ليزينوبريل)',category:'القلب والأوعية',dose:'2.5-40mg',freq:'مرة يومياً',timing:'صباحاً',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'سعال جاف، دوخة، فرط بوتاسيوم، وذمة وعائية (نادر)',contraindications:'حمل، وذمة وعائية سابقة، تضيق الشريان الكلوي الثنائي',renalAdj:'تخفيف: GFR 10-30: 5mg. <10: 2.5mg',interactions:'Potassium supplements, Spironolactone, NSAIDs, Aliskiren',mechanism:'مثبط ACE',halfLife:'12 ساعة',blackBox:'ممنوع في الحمل — تشوهات جنينية',notes:'السعال الجاف شائع 10-15%، بديله ARBs. راقب الكرياتينين والبوتاسيوم.',optimalTime:'صباحاً',category2:'مثبط ACE'},

{id:'d008',name:'Ramipril (راميبريل)',category:'القلب والأوعية',dose:'1.25-10mg',freq:'مرة-مرتين يومياً',timing:'صباحاً',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'سعال، دوخة، فرط بوتاسيوم',contraindications:'حمل، وذمة وعائية، تضيق ثنائي للشريان الكلوي',renalAdj:'GFR<30: ابدأ 1.25mg',interactions:'Potassium, NSAIDs, Lithium',mechanism:'مثبط ACE (prodrug)',halfLife:'13-17 ساعة',blackBox:'ممنوع في الحمل',notes:'فائدة إضافية في الكلى السكرية.',optimalTime:'صباحاً',category2:'مثبط ACE'},

{id:'d009',name:'Losartan (لوسارتان)',category:'القلب والأوعية',dose:'25-100mg',freq:'مرة يومياً',timing:'أي وقت',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'دوخة، فرط بوتاسيوم، نادراً: وذمة وعائية',contraindications:'حمل، تضيق ثنائي الشريان الكلوي',renalAdj:'لا تعديل كبير',interactions:'Potassium, NSAIDs, Aliskiren, ACE Inhibitors',mechanism:'حاصر مستقبل أنجيوتنسين II (ARB)',halfLife:'2 ساعة (نشط 6-9 ساعات)',blackBox:'ممنوع في الحمل',notes:'بديل ممتاز لمثبطات ACE عند السعال. حماية كلوية في السكري.',optimalTime:'أي وقت',category2:'ARB'},

{id:'d010',name:'Valsartan (فالسارتان)',category:'القلب والأوعية',dose:'40-320mg',freq:'مرة-مرتين يومياً',timing:'أي وقت',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'دوخة، فرط بوتاسيوم',contraindications:'حمل',renalAdj:'GFR>10: لا تعديل',interactions:'Potassium, NSAIDs, Lithium',mechanism:'حاصر ARB',halfLife:'6 ساعات',blackBox:'ممنوع في الحمل',notes:'مفيد في قصور القلب. راقب ضغط الدم الوضعي.',optimalTime:'أي وقت',category2:'ARB'},

{id:'d011',name:'Furosemide (فيوروسيمايد)',category:'القلب والأوعية',dose:'20-80mg',freq:'مرة-مرتين يومياً',timing:'صباحاً (لتفادي التبول الليلي)',food:'بغض النظر عن الطعام',route:'فموي / وريدي',sideEffects:'نقص بوتاسيوم، جفاف، دوخة، نقص صوديوم',contraindications:'انقطاع بول، نقص حجم شديد',renalAdj:'قد تحتاج جرعات أعلى',interactions:'Aminoglycosides (سمية كلى/أذن), Lithium, Digoxin',mechanism:'مدر بول عروة Henle',halfLife:'1-2 ساعة',blackBox:'قد يسبب جفافاً وخللاً شديداً في الشوارد',notes:'راقب البوتاسيوم والصوديوم. أعطِ صباحاً لتجنب الإزعاج الليلي.',optimalTime:'صباحاً',category2:'مدر بول'},

{id:'d012',name:'Spironolactone (سبيرونولاكتون)',category:'القلب والأوعية',dose:'12.5-50mg',freq:'مرة يومياً',timing:'صباحاً',food:'مع الطعام',route:'فموي',sideEffects:'فرط بوتاسيوم، تثدي عند الرجال، دورة غير منتظمة',contraindications:'فرط بوتاسيوم، قصور كلوي شديد',renalAdj:'تجنب مع GFR<30 أو بحذر شديد',interactions:'ACE inhibitors, ARBs, NSAIDs, Potassium',mechanism:'مضاد ألدوستيرون',halfLife:'1.4 ساعة (نشط 2-3 أيام)',blackBox:'',notes:'فائدة في قصور القلب والكبد. راقب البوتاسيوم دورياً.',optimalTime:'صباحاً',category2:'مدر بول'},

{id:'d013',name:'Digoxin (ديجوكسين)',category:'القلب والأوعية',dose:'0.125-0.25mg',freq:'مرة يومياً',timing:'في أي وقت',food:'بغض النظر (تجنب ألياف عالية وقت الجرعة)',route:'فموي',sideEffects:'غثيان، قيء، اضطراب رؤية (أصفر/أخضر)، اضطراب إيقاع',contraindications:'انسداد AV، رجفان بطيني',renalAdj:'تخفيف جذري: GFR<50: 0.125mg. GFR<30: يومياً متناوباً',interactions:'Amiodarone (يضاعف المستوى), Verapamil, Clarithromycin, Antacids',mechanism:'مثبط Na/K-ATPase',halfLife:'36-48 ساعة',blackBox:'نطاق علاجي ضيق — مراقبة مستوى الدواء',notes:'المستوى العلاجي: 0.5-2 ng/mL. مراقبة K⁺ (نقص البوتاسيوم يزيد السمية).',optimalTime:'أي وقت ثابت',category2:'جليكوسيد قلبي'},

{id:'d014',name:'Amiodarone (أميودارون)',category:'القلب والأوعية',dose:'200mg',freq:'مرة يومياً (صيانة)',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'تأثير درقية، تليف رئوي، تغير لون جلد، اضطراب رؤية',contraindications:'بطء قلب، انسداد AV، أمراض درقية',renalAdj:'لا تعديل',interactions:'Warfarin (يضاعف تأثيره), Digoxin, Simvastatin, QT-prolonging drugs',mechanism:'مضاد اضطراب نظم Class III',halfLife:'40-55 يوم',blackBox:'سمية رئوية، كبدية، درقية قد تكون قاتلة',notes:'فحص درقية وكبد وصدر كل 6 شهور. نصف العمر الطويل جداً مهم.',optimalTime:'مع وجبة',category2:'مضاد اضطراب نظم'},

{id:'d015',name:'Warfarin (وارفارين)',category:'القلب والأوعية',dose:'حسب INR',freq:'مرة يومياً',timing:'نفس الوقت يومياً (مساءً مفضل)',food:'ثابت مع الخضروات الورقية',route:'فموي',sideEffects:'نزيف، كدمات، نزيف دماغي',contraindications:'حمل، نزيف نشط، تدخل جراحي',renalAdj:'احتياط',interactions:'Aspirin, NSAIDs, Amiodarone, Antibiotics, Vitamin K foods',mechanism:'مثبط فيتامين K Epoxide Reductase',halfLife:'20-60 ساعة',blackBox:'خطر نزيف قد يكون قاتلاً',notes:'INR المستهدف: 2-3 عادةً. ثبّت كميات الخضار الورقية. مراقبة INR دورية.',optimalTime:'مساءً (وقت ثابت)',category2:'مضاد تخثر'},

{id:'d016',name:'Rivaroxaban (ريفاروكسابان)',category:'القلب والأوعية',dose:'10-20mg',freq:'مرة يومياً',timing:'مع وجبة الغداء أو العشاء',food:'مع الطعام (يزيد الامتصاص)',route:'فموي',sideEffects:'نزيف، أنيميا',contraindications:'نزيف نشط، GFR<15، حمل',renalAdj:'GFR 15-50: 15mg. تجنب <15',interactions:'Antifungals القوية, Rifampicin, P-gp inhibitors',mechanism:'مثبط مباشر Factor Xa',halfLife:'5-9 ساعة',blackBox:'',notes:'لا يحتاج مراقبة روتينية. لا ترياق متاح في كل المراكز (Andexanet alfa).',optimalTime:'مع الوجبة الرئيسية',category2:'مضاد تخثر'},

{id:'d017',name:'Clopidogrel (كلوبيدوجريل)',category:'القلب والأوعية',dose:'75mg',freq:'مرة يومياً',timing:'أي وقت',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'نزيف، نزيف هضمي، طفح',contraindications:'نزيف نشط',renalAdj:'لا تعديل',interactions:'PPIs (خاصة Omeprazole), Aspirin, Warfarin',mechanism:'مثبط ADP P2Y12',halfLife:'6 ساعات (نشط)',blackBox:'',notes:'تفضيل Pantoprazole على Omeprazole للحد من التداخل. لا توقف قبل الجراحة إلا بتوجيه.',optimalTime:'أي وقت ثابت',category2:'مضاد صفيحات'},

// ═══════════════════════════════════════════
// أدوية السكري
// ═══════════════════════════════════════════
{id:'d018',name:'Metformin (ميتفورمين)',category:'السكري',dose:'500-1000mg',freq:'مرتين-ثلاث مرات يومياً',timing:'مع الوجبات',food:'مع الطعام (يقلل الغثيان)',route:'فموي',sideEffects:'غثيان، إسهال، ألم بطن، نقص B12 طويل الأمد',contraindications:'GFR<30، حماض، قبل الصبغة الوريدية، كبد شديد',renalAdj:'GFR 30-45: تخفيض. <30: ممنوع',interactions:'Iodinated contrast (وقف 48 ساعة), Alcohol',mechanism:'مثبط بيروفات كيناز Mitochondria',halfLife:'4-8 ساعات',blackBox:'خطر الحماض اللبني مع القصور الكلوي',notes:'الخط الأول في DM2. نقص B12 مع الاستخدام الطويل. XR أقل أعراضاً هضمية.',optimalTime:'مع الوجبات',category2:'Biguanide'},

{id:'d019',name:'Glibenclamide (جليبنكلاميد)',category:'السكري',dose:'2.5-15mg',freq:'مرة-مرتين يومياً',timing:'قبل الإفطار (30 دقيقة)',food:'قبل الطعام',route:'فموي',sideEffects:'نقص سكر، زيادة وزن',contraindications:'DM1، قصور كلوي/كبدي شديد، حمل',renalAdj:'تجنب مع GFR<60',interactions:'NSAIDs, Beta-blockers (يخفي أعراض نقص السكر)',mechanism:'سلفونيل يوريا — يحفز البنكرياس',halfLife:'10 ساعة',blackBox:'',notes:'نقص السكر شائع خاصة عند كبار السن. لا يُفضّل في المسنين.',optimalTime:'قبل الإفطار 30 دقيقة',category2:'سلفونيل يوريا'},

{id:'d020',name:'Gliclazide MR (جليكلازيد)',category:'السكري',dose:'30-120mg',freq:'مرة يومياً',timing:'مع الإفطار',food:'مع الإفطار',route:'فموي',sideEffects:'نقص سكر (أقل من Glibenclamide)، زيادة وزن طفيفة',contraindications:'DM1، كبد شديد، حمل',renalAdj:'حذر مع GFR<30',interactions:'NSAIDs, Fluconazole, Rifampicin',mechanism:'سلفونيل يوريا',halfLife:'10-12 ساعة',blackBox:'',notes:'أكثر أماناً من Glibenclamide في المسنين. MR مرة يومياً.',optimalTime:'مع الإفطار',category2:'سلفونيل يوريا'},

{id:'d021',name:'Empagliflozin (إمباجليفلوزين)',category:'السكري',dose:'10-25mg',freq:'مرة يومياً',timing:'صباحاً',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'التهابات المسالك/التناسلية، تبول متكرر، نقص حجم',contraindications:'GFR<20، DM1، مثبطات وريدية للقدم السكرية',renalAdj:'لا يعمل فعلياً مع GFR<20',interactions:'Diuretics (زيادة جفاف), Insulin (خطر DKA)',mechanism:'مثبط SGLT-2',halfLife:'12 ساعة',blackBox:'حماض كيتوني سكري حتى مع سكر طبيعي',notes:'فائدة قلبية وكلوية مثبتة. وقف قبل الجراحة 3 أيام. DKA نادر لكن خطير.',optimalTime:'صباحاً',category2:'مثبط SGLT-2'},

{id:'d022',name:'Dapagliflozin (داباجليفلوزين)',category:'السكري',dose:'10mg',freq:'مرة يومياً',timing:'صباحاً',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'التهابات تناسلية، تبول متكرر',contraindications:'GFR<25 لمرضى السكري',renalAdj:'للحماية الكلوية يستمر حتى GFR=25',interactions:'Diuretics, Insulin',mechanism:'مثبط SGLT-2',halfLife:'12 ساعة',blackBox:'',notes:'معتمد أيضاً لقصور القلب وأمراض الكلى بغض النظر عن السكري.',optimalTime:'صباحاً',category2:'مثبط SGLT-2'},

{id:'d023',name:'Sitagliptin (سيتاجليبتين)',category:'السكري',dose:'100mg',freq:'مرة يومياً',timing:'أي وقت',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'التهاب أنف وحلق، صداع، نادراً: التهاب بنكرياس',contraindications:'حساسية',renalAdj:'GFR 30-45: 50mg. GFR<30: 25mg',interactions:'Insulin, Sulfonylureas (زيادة نقص السكر)',mechanism:'مثبط DPP-4',halfLife:'12 ساعة',blackBox:'',notes:'محايد للوزن. آمن في المسنين. لا نقص سكر كأحادي علاج.',optimalTime:'أي وقت ثابت',category2:'مثبط DPP-4'},

{id:'d024',name:'Insulin Glargine (إنسولين جلارجين)',category:'السكري',dose:'حسب السكر',freq:'مرة يومياً',timing:'ليلاً (أو صباحاً ثابت)',food:'مستقل عن الطعام',route:'حقن تحت الجلد',sideEffects:'نقص سكر، زيادة وزن، ألم في موضع الحقن',contraindications:'نقص سكر',renalAdj:'تقليل الجرعة بحذر',interactions:'Beta-blockers (يخفي الأعراض), Alcohol, Corticosteroids',mechanism:'إنسولين طويل الأمد (24 ساعة)',halfLife:'~24 ساعة',blackBox:'',notes:'لا يُخلط مع أنسابيق أخرى. دوّر مواضع الحقن. Lantus/Toujeo.',optimalTime:'ليلاً بوقت ثابت',category2:'إنسولين طويل الأمد'},

// ═══════════════════════════════════════════
// المضادات الحيوية
// ═══════════════════════════════════════════
{id:'d025',name:'Amoxicillin (أموكسيسيلين)',category:'مضادات حيوية',dose:'500mg',freq:'ثلاث مرات يومياً',timing:'كل 8 ساعات',food:'مع أو بدون طعام',route:'فموي',sideEffects:'إسهال، غثيان، طفح، حساسية',contraindications:'حساسية للبنسلين',renalAdj:'GFR 10-30: كل 12 ساعة. <10: كل 24 ساعة',interactions:'Methotrexate, Oral Contraceptives (تقليل فاعلية)',mechanism:'بيتا لاكتام — تثبيط جدار الخلية',halfLife:'1-1.5 ساعة',blackBox:'',notes:'حساسية متقاطعة مع سيفالوسبورين (10%). الكورس الكامل ضروري.',optimalTime:'كل 8 ساعات ثابتة',category2:'بنسلين'},

{id:'d026',name:'Amoxicillin-Clavulanate (أوغمنتين)',category:'مضادات حيوية',dose:'625mg',freq:'ثلاث مرات يومياً',timing:'مع بداية الوجبة',food:'مع الطعام (يقلل الإسهال)',route:'فموي',sideEffects:'إسهال، غثيان، التهاب كبد',contraindications:'حساسية بنسلين، يرقان كبدي سابق من Augmentin',renalAdj:'GFR<30: كل 12 ساعة',interactions:'Warfarin, Methotrexate',mechanism:'بيتا لاكتام + مثبط بيتا لاكتاماز',halfLife:'1-1.5 ساعة',blackBox:'',notes:'أعطِ مع بداية الوجبة لتقليل الأعراض الهضمية.',optimalTime:'مع بداية الوجبة',category2:'بنسلين'},

{id:'d027',name:'Ciprofloxacin (سيبروفلوكساسين)',category:'مضادات حيوية',dose:'500mg',freq:'مرتين يومياً',timing:'كل 12 ساعة',food:'مع أو بدون طعام — تجنب الألبان والمغنيسيوم',route:'فموي',sideEffects:'غثيان، إسهال، تمزق أوتار (نادر)، اضطراب QT',contraindications:'قصور G6PD، حمل، أطفال',renalAdj:'GFR<30: كل 24 ساعة',interactions:'Antacids/Ca/Fe/Mg (يقلل الامتصاص), Theophylline, Warfarin',mechanism:'فلوروكينولون — مثبط DNA Gyrase',halfLife:'4-6 ساعات',blackBox:'تمزق أوتار وتدهور في الوهن العضلي',notes:'فصل الجرعة 2 ساعة عن الأنتاسيدات. مع الكافيين يزيد استثارته.',optimalTime:'صباحاً ومساءً',category2:'فلوروكينولون'},

{id:'d028',name:'Clarithromycin (كلاريثروميسين)',category:'مضادات حيوية',dose:'250-500mg',freq:'مرتين يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'غثيان، إسهال، طعم معدني، اضطراب QT',contraindications:'أمراض قلب مع QT طويل، حمل',renalAdj:'GFR<30: تخفيض 50%',interactions:'Statins, Warfarin, Digoxin, QT-drugs, Colchicine',mechanism:'ماكروليد — تثبيط 50S Ribosome',halfLife:'3-7 ساعات',blackBox:'',notes:'تفاعلات دوائية كثيرة. راجع التفاعلات قبل الوصف.',optimalTime:'مع الوجبات',category2:'ماكروليد'},

{id:'d029',name:'Azithromycin (أزيثروميسين)',category:'مضادات حيوية',dose:'500mg',freq:'مرة يومياً × 3-5 أيام',timing:'بعيداً عن الأنتاسيدات',food:'مع أو بدون طعام',route:'فموي',sideEffects:'غثيان، إسهال، اضطراب QT',contraindications:'أمراض قلب مع QT طويل',renalAdj:'لا تعديل',interactions:'Warfarin, QT-prolonging drugs, Antacids (فصل ساعتين)',mechanism:'ماكروليد — 50S',halfLife:'68 ساعة',blackBox:'',notes:'نصف العمر الطويل يسمح بكورس قصير. احذر مرضى QT.',optimalTime:'في أي وقت ثابت',category2:'ماكروليد'},

{id:'d030',name:'Doxycycline (دوكسيسيكلين)',category:'مضادات حيوية',dose:'100mg',freq:'مرتين يومياً',timing:'مع الطعام وكأس ماء كامل — أبقَ واقفاً 30 دقيقة',food:'مع الطعام وماء وفير',route:'فموي',sideEffects:'تهيج مريء، حساسية ضوئية، غثيان',contraindications:'حمل، رضاعة، أطفال <8 سنوات',renalAdj:'لا تعديل',interactions:'Antacids, Fe, Ca (يقلل الامتصاص), Warfarin, Oral contraceptives',mechanism:'تيتراسيكلين — تثبيط 30S',halfLife:'15-25 ساعة',blackBox:'',notes:'لا تستلق بعد الجرعة مباشرة. واقٍ من الشمس ضروري.',optimalTime:'مع الوجبات صباحاً ومساءً',category2:'تيتراسيكلين'},

{id:'d031',name:'Metronidazole (ميترونيدازول)',category:'مضادات حيوية',dose:'400-500mg',freq:'ثلاث مرات يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'غثيان، طعم معدني، ألم رأس، تخدر أطراف (طويل الأمد)',contraindications:'الثلث الأول من الحمل، شرب الكحول',renalAdj:'احتياط مع غسيل الكلى',interactions:'Alcohol (Disulfiram reaction), Warfarin, Lithium',mechanism:'نيتروإيميدازول — أضرار DNA الطفيليات/الحيوانات',halfLife:'8 ساعة',blackBox:'',notes:'ممنوع الكحول أثناء الدواء و48 ساعة بعده.',optimalTime:'مع الوجبات',category2:'نيتروإيميدازول'},

{id:'d032',name:'Trimethoprim-Sulfamethoxazole (كوتريموكسازول)',category:'مضادات حيوية',dose:'160/800mg',freq:'مرتين يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'طفح (Stevens-Johnson نادر)، نقص بوتاسيوم، حساسية كلوية',contraindications:'حساسية سلفا، حمل قريب الولادة، نقص G6PD',renalAdj:'GFR 15-30: تخفيض. <15: تجنب',interactions:'Warfarin, Methotrexate, Phenytoin, ACE inhibitors (فرط K)',mechanism:'مثبط Dihydrofolate Reductase وDihydropteroate Synthase',halfLife:'10 ساعة',blackBox:'',notes:'شرب ماء كثير. إبلاغ عن أي طفح فوراً.',optimalTime:'مع الوجبات',category2:'سلفاميد'},

// ═══════════════════════════════════════════
// أدوية الجهاز الهضمي
// ═══════════════════════════════════════════
{id:'d033',name:'Omeprazole (أوميبرازول)',category:'الجهاز الهضمي',dose:'20-40mg',freq:'مرة يومياً',timing:'قبل الإفطار بـ 30-60 دقيقة',food:'قبل الطعام',route:'فموي',sideEffects:'صداع، إسهال، نقص Mg وB12 (طويل الأمد)، زيادة الكسور',contraindications:'حساسية لـ PPI',renalAdj:'لا تعديل',interactions:'Clopidogrel (يقلل فاعليته), Methotrexate, Warfarin',mechanism:'مثبط مضخة البروتون',halfLife:'1-2 ساعة (تأثير 24 ساعة)',blackBox:'',notes:'أفضل تأثير قبل الإفطار بنصف ساعة. تجنب الاستخدام الطويل بلا مؤشر.',optimalTime:'قبل الإفطار بـ 30 دقيقة',category2:'PPI'},

{id:'d034',name:'Pantoprazole (بانتوبرازول)',category:'الجهاز الهضمي',dose:'20-40mg',freq:'مرة يومياً',timing:'قبل الإفطار بـ 30 دقيقة',food:'قبل الطعام',route:'فموي',sideEffects:'صداع، إسهال، نقص Mg',contraindications:'حساسية PPI',renalAdj:'لا تعديل',interactions:'أقل تأثيراً على Clopidogrel مقارنة بـ Omeprazole',mechanism:'مثبط مضخة البروتون',halfLife:'1 ساعة',blackBox:'',notes:'مفضل مع Clopidogrel بدلاً من Omeprazole.',optimalTime:'قبل الإفطار بـ 30 دقيقة',category2:'PPI'},

{id:'d035',name:'Ranitidine بديل: Famotidine (فاموتيدين)',category:'الجهاز الهضمي',dose:'20-40mg',freq:'مرة-مرتين يومياً',timing:'قبل النوم أو قبل الوجبة',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'صداع، إمساك',contraindications:'حساسية',renalAdj:'GFR<50: تخفيض للنصف',interactions:'أقل تفاعلات من PPIs',mechanism:'حاصر H2',halfLife:'2.5-3.5 ساعة',blackBox:'',notes:'Ranitidine سُحب من الأسواق. Famotidine البديل الآمن.',optimalTime:'قبل النوم',category2:'حاصر H2'},

{id:'d036',name:'Ondansetron (أوندانسيترون)',category:'الجهاز الهضمي',dose:'4-8mg',freq:'كل 8 ساعات عند الحاجة',timing:'قبل العلاج الكيماوي أو عند الغثيان',food:'بغض النظر عن الطعام',route:'فموي / وريدي',sideEffects:'إمساك، صداع، إطالة QT',contraindications:'انسداد الأمعاء، اضطراب QT',renalAdj:'لا تعديل',interactions:'QT-prolonging drugs, Apomorphine',mechanism:'مضاد 5-HT3',halfLife:'3-4 ساعات',blackBox:'',notes:'فعال لغثيان ما بعد الجراحة والعلاج الكيماوي.',optimalTime:'30 دقيقة قبل العلاج أو عند الحاجة',category2:'مضاد غثيان'},

{id:'d037',name:'Metoclopramide (ميتوكلوبراميد)',category:'الجهاز الهضمي',dose:'10mg',freq:'ثلاث مرات يومياً',timing:'قبل الوجبات بـ 30 دقيقة',food:'قبل الطعام',route:'فموي / وريدي',sideEffects:'نعاس، أعراض خارج هرمية، فرط برولاكتين',contraindications:'انسداد أو نزيف هضمي، الصرع، باركنسون',renalAdj:'GFR<40: تخفيض النصف',interactions:'Opioids, Anticholinergics, Antipsychotics',mechanism:'مضاد دوبامين (محفز حركية)',halfLife:'4-6 ساعات',blackBox:'حركات لا إرادية مع الاستخدام الطويل',notes:'لا تتجاوز 5 أيام متواصلة. خطر التأثيرات خارج الهرمية.',optimalTime:'قبل الوجبات 30 دقيقة',category2:'محرك حركة هضمية'},

{id:'d038',name:'Lactulose (لاكتولوز)',category:'الجهاز الهضمي',dose:'15-30ml',freq:'مرة-مرتين يومياً',timing:'صباحاً',food:'مع السوائل',route:'فموي',sideEffects:'انتفاخ، غازات، إسهال بجرعات عالية',contraindications:'انسداد أمعاء',renalAdj:'لا تعديل',interactions:'Antacids, Neomycin',mechanism:'مسهل أسموزي + تحمض القولون',halfLife:'لا ينطبق',blackBox:'',notes:'اشرب سوائل كافية. تأثير قد يظهر بعد 24-48 ساعة.',optimalTime:'صباحاً',category2:'ملين'},

// ═══════════════════════════════════════════
// أدوية الجهاز التنفسي
// ═══════════════════════════════════════════
{id:'d039',name:'Salbutamol/Albuterol (سالبيوتامول)',category:'الجهاز التنفسي',dose:'100-200mcg',freq:'عند الحاجة (PRN)',timing:'عند بدء ضيق التنفس',food:'لا علاقة',route:'استنشاق',sideEffects:'رجفة، خفقان، صداع، نقص بوتاسيوم (جرعات عالية)',contraindications:'حساسية',renalAdj:'لا تعديل',interactions:'Beta-blockers (تقليل فاعلية), Digoxin, Diuretics',mechanism:'ناهض بيتا 2 قصير الأمد (SABA)',halfLife:'3-8 ساعة',blackBox:'',notes:'الموسع السريع. إذا احتاجه أكثر من مرتين أسبوعياً — ضبط العلاج الصيانة.',optimalTime:'عند الحاجة',category2:'موسع قصبي سريع'},

{id:'d040',name:'Salmeterol/Formoterol (سالميترول)',category:'الجهاز التنفسي',dose:'حسب الجهاز',freq:'مرتين يومياً',timing:'صباحاً ومساءً',food:'لا علاقة',route:'استنشاق',sideEffects:'خفقان، رجفة',contraindications:'لا يُستخدم وحده بدون ICS في الربو',renalAdj:'لا تعديل',interactions:'Beta-blockers, Diuretics, MAOIs',mechanism:'ناهض بيتا 2 طويل الأمد (LABA)',halfLife:'10-14 ساعة',blackBox:'خطر زيادة الوفيات في الربو إذا بدون ICS',notes:'دائماً مع كورتيزون استنشاق (ICS) في الربو. ليس للنوبات الحادة.',optimalTime:'صباحاً ومساءً ثابتة',category2:'موسع قصبي طويل'},

{id:'d041',name:'Fluticasone Inhaled (فلوتيكازون استنشاق)',category:'الجهاز التنفسي',dose:'100-500mcg',freq:'مرتين يومياً',timing:'صباحاً ومساءً',food:'لا علاقة',route:'استنشاق',sideEffects:'التهاب فم وحلق، بحة صوت',contraindications:'حساسية',renalAdj:'لا تعديل',interactions:'CYP3A4 inhibitors (Ketoconazole, Ritonavir)',mechanism:'كورتيكوستيرويد استنشاق (ICS)',halfLife:'7.8 ساعة',blackBox:'',notes:'اغسل الفم بعد كل جرعة لمنع الالتهابات الفطرية.',optimalTime:'صباحاً ومساءً — اغسل الفم بعدها',category2:'كورتيكوستيرويد استنشاق'},

{id:'d042',name:'Montelukast (مونتيلوكاست)',category:'الجهاز التنفسي',dose:'10mg',freq:'مرة يومياً',timing:'ليلاً قبل النوم',food:'بغض النظر عن الطعام',route:'فموي',sideEffects:'صداع، ألم بطن، أحلام غريبة، تغيرات مزاجية',contraindications:'حساسية',renalAdj:'لا تعديل',interactions:'Phenobarbital, Rifampicin (تقليل مستوى)',mechanism:'مضاد مستقبلات ليكوترين (LTRA)',halfLife:'2.7-5.5 ساعة',blackBox:'تأثيرات نفسية وعصبية: أفكار انتحارية (نادر)',notes:'يُعطى ليلاً. فعال في حساسية المسالك مع الربو.',optimalTime:'ليلاً قبل النوم',category2:'مضاد لوكوترين'},

// ═══════════════════════════════════════════
// أدوية الغدة الدرقية
// ═══════════════════════════════════════════
{id:'d043',name:'Levothyroxine (ليفوثيروكسين)',category:'الغدد الصماء',dose:'25-200mcg',freq:'مرة يومياً',timing:'صباحاً على معدة فارغة — 30-60 دقيقة قبل الأكل',food:'على معدة فارغة — تجنب الكالسيوم والحديد والقهوة',route:'فموي',sideEffects:'خفقان، رجفة، فقدان وزن، أرق (جرعة زائدة)',contraindications:'احتشاء حاد، فشل قشرة الكظر غير المعالج',renalAdj:'لا تعديل',interactions:'Calcium, Iron, Antacids (يقلل الامتصاص — فصل 4 ساعات), Warfarin, Cholestyramine',mechanism:'هرمون درقي اصطناعي T4',halfLife:'7 أيام',blackBox:'',notes:'ثبات الوقت والجرعة مهم جداً. مراقبة TSH كل 6-12 شهراً.',optimalTime:'صباحاً على معدة فارغة (30-60 دقيقة قبل الإفطار)',category2:'هرمون درقي'},

{id:'d044',name:'Carbimazole / Methimazole (كاربيمازول)',category:'الغدد الصماء',dose:'5-40mg',freq:'مرة-ثلاث مرات يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'قمع نخاع العظم، طفح، تأثير درقية (hypothyroidism)',contraindications:'فرط حساسية، حمل الأول (يفضل PTU)',renalAdj:'لا تعديل',interactions:'Warfarin, Digoxin, Theophylline',mechanism:'مثبط synthesis هرمون الدرقية',halfLife:'4-8 ساعات',blackBox:'',notes:'ابلغ عن حمى أو التهاب حلق فوراً (قمع نخاع). فحص CBC.',optimalTime:'مع الوجبات',category2:'مثبط الدرقية'},

// ═══════════════════════════════════════════
// أدوية الأعصاب والنفسية
// ═══════════════════════════════════════════
{id:'d045',name:'Sertraline (سيرترالين)',category:'الصحة النفسية',dose:'50-200mg',freq:'مرة يومياً',timing:'صباحاً (أو ليلاً لو أرق)',food:'مع أو بدون طعام',route:'فموي',sideEffects:'غثيان (في البداية)، أرق، صداع، خلل جنسي، زيادة وزن',contraindications:'مع MAOIs، اضطراب ثنائي القطب غير محمي',renalAdj:'لا تعديل',interactions:'MAOIs (14 يوم فصل), Tramadol, Lithium, Warfarin',mechanism:'مثبط انتقاء السيروتونين (SSRI)',halfLife:'26 ساعة',blackBox:'زيادة أفكار انتحارية عند صغار السن',notes:'تأثير بعد 2-4 أسابيع. لا توقف فجأة.',optimalTime:'صباحاً',category2:'SSRI'},

{id:'d046',name:'Escitalopram (إسسيتالوبرام)',category:'الصحة النفسية',dose:'10-20mg',freq:'مرة يومياً',timing:'صباحاً أو مساءً',food:'مع أو بدون طعام',route:'فموي',sideEffects:'غثيان، أرق، دوخة، خلل جنسي',contraindications:'MAOIs، QT طويل',renalAdj:'لا تعديل',interactions:'MAOIs, QT-prolonging drugs, Tramadol',mechanism:'SSRI انتقائي عالي',halfLife:'27-32 ساعة',blackBox:'أفكار انتحارية صغار السن',notes:'من أكثر SSRIs تحملاً. تأثير بعد 2-4 أسابيع.',optimalTime:'صباحاً أو مساءً ثابت',category2:'SSRI'},

{id:'d047',name:'Amitriptyline (أميتريبتيلين)',category:'الصحة النفسية',dose:'10-150mg',freq:'مرة يومياً (ليلاً)',timing:'قبل النوم (منوم)',food:'مع الطعام',route:'فموي',sideEffects:'نعاس، جفاف فم، إمساك، احتباس بول، تسرع قلب',contraindications:'احتشاء حديث، اضطراب QT، جلوكوما زاوية ضيقة',renalAdj:'احتياط',interactions:'MAOIs, Tramadol, Anticholinergics, Alcohol',mechanism:'مثبط TCA — سيروتونين ونورأدرينالين',halfLife:'10-50 ساعة',blackBox:'سمية قلبية بجرعات عالية',notes:'جرعات منخفضة لألم الأعصاب والصداع النصفي الوقائي.',optimalTime:'قبل النوم',category2:'TCA'},

{id:'d048',name:'Lithium Carbonate (ليثيوم)',category:'الصحة النفسية',dose:'400-1200mg',freq:'مرتين-ثلاث مرات يومياً',timing:'مع الطعام',food:'مع الطعام وسوائل كافية',route:'فموي',sideEffects:'رجفة، كثرة تبول، زيادة وزن، قصور درقية، نقص كلوي',contraindications:'قصور كلوي شديد، قلب مضطرب',renalAdj:'تعديل دقيق — مراقبة مستوى الدواء',interactions:'NSAIDs, ACE inhibitors, Diuretics (يرفعون مستوى الليثيوم)',mechanism:'يستقر مزاج — آلية غير مفهومة تماماً',halfLife:'18-24 ساعة',blackBox:'نطاق علاجي ضيق 0.6-1.2 mEq/L — سمية عالية',notes:'ثبات السوائل والملح مهم. راقب مستوى الليثيوم كل 3-6 أشهر.',optimalTime:'مع الوجبات — ثبات الجدول',category2:'مثبت مزاج'},

{id:'d049',name:'Gabapentin (جابابنتين)',category:'الأعصاب',dose:'300-3600mg',freq:'ثلاث مرات يومياً',timing:'كل 8 ساعات',food:'مع أو بدون طعام',route:'فموي',sideEffects:'نعاس، دوخة، وذمة، زيادة وزن',contraindications:'حساسية',renalAdj:'GFR 30-60: كل 12 ساعة. GFR<30: كل 24 ساعة بجرعة أقل',interactions:'Opioids (زيادة اكتئاب تنفسي), Antacids (يقلل الامتصاص)',mechanism:'يرتبط بقناة كالسيوم Alpha2-delta',halfLife:'5-7 ساعات',blackBox:'',notes:'ابدأ بجرعة منخفضة وزد تدريجياً. لا توقف فجأة.',optimalTime:'كل 8 ساعات ثابتة',category2:'مضاد صرع/ألم'},

{id:'d050',name:'Pregabalin (بريجابالين)',category:'الأعصاب',dose:'75-300mg',freq:'مرتين يومياً',timing:'صباحاً ومساءً',food:'مع أو بدون طعام',route:'فموي',sideEffects:'نعاس، دوخة، وذمة، زيادة وزن، ضبابية',contraindications:'حساسية',renalAdj:'GFR 30-60: نصف الجرعة. GFR<30: ربع الجرعة',interactions:'Opioids, Alcohol, CNS depressants',mechanism:'يرتبط بقناة كالسيوم Alpha2-delta',halfLife:'6 ساعات',blackBox:'خطر إدمان (مادة خاضعة للرقابة)',notes:'لا توقف فجأة. تقليل تدريجي.',optimalTime:'صباحاً ومساءً',category2:'مضاد صرع/ألم'},

{id:'d051',name:'Phenytoin (فينيتوين)',category:'الأعصاب',dose:'300-400mg',freq:'مرة-مرتين يومياً',timing:'مع الطعام',food:'مع الطعام — ثبات التوقيت',route:'فموي',sideEffects:'تضخم لثة، شعر زائد، ترنح، رأرأة، انخفاض Ca',contraindications:'حساسية، انسداد AV',renalAdj:'لا تعديل — لكن مراقبة مستوى مهمة',interactions:'Warfarin, Carbamazepine, Phenobarbital, OCP, Folate',mechanism:'مثبط قنوات صوديوم',halfLife:'7-42 ساعة (غير خطي)',blackBox:'',notes:'نطاق علاجي ضيق 10-20 mcg/ml. تفاعلات دوائية كثيرة. فولات ضروري.',optimalTime:'مع الوجبات — وقت ثابت',category2:'مضاد صرع'},

{id:'d052',name:'Levodopa/Carbidopa (ليفودوبا)',category:'الأعصاب',dose:'100/25mg',freq:'ثلاث مرات يومياً',timing:'قبل الطعام بـ 30-60 دقيقة',food:'قبل الطعام — تجنب البروتين العالي وقت الجرعة',route:'فموي',sideEffects:'غثيان، دوخة وضعية، حركات لا إرادية، ذهان',contraindications:'جلوكوما زاوية ضيقة، MAOIs',renalAdj:'احتياط',interactions:'MAOIs (أزمة ضغطية), Antipsychotics (تضاد), Iron (يقلل امتصاص)',mechanism:'ناقل عصبي مباشر — دوبامين في الدماغ',halfLife:'1-2 ساعة',blackBox:'',notes:'تجنب الوجبات الغنية بالبروتين وقت الجرعة. الظاهرة "on-off" مع الوقت.',optimalTime:'قبل الوجبات 30-60 دقيقة',category2:'مضاد باركنسون'},

// ═══════════════════════════════════════════
// مسكنات الألم
// ═══════════════════════════════════════════
{id:'d053',name:'Paracetamol/Acetaminophen (باراسيتامول)',category:'المسكنات',dose:'500-1000mg',freq:'كل 4-6 ساعات (max 4g/day)',timing:'عند الألم أو الحرارة',food:'مع أو بدون طعام',route:'فموي / وريدي',sideEffects:'آمن بالجرعات المعتادة. سمية كبدية بالجرعات الزائدة',contraindications:'فشل كبدي، جرعة تفوق 4g/يوم',renalAdj:'GFR<30: كل 8 ساعات',interactions:'Warfarin (جرعات عالية تطيل INR), Alcohol (سمية كبدية)',mechanism:'مثبط COX مركزي + مستقبلات cannabinoid',halfLife:'2-3 ساعات',blackBox:'',notes:'الجرعة القصوى 4g/يوم (2g في الكبد الضعيف). راقب الجرعات المجمعة.',optimalTime:'عند الحاجة',category2:'مسكن ألم'},

{id:'d054',name:'Ibuprofen (إيبوبروفين)',category:'المسكنات',dose:'200-800mg',freq:'ثلاث مرات يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'نزيف هضمي، ارتفاع ضغط، قصور كلوي، احتباس ماء',contraindications:'قرحة نشطة، قصور كلوي/قلبي، الثلث الثالث حمل',renalAdj:'تجنب مع GFR<30',interactions:'Warfarin, ACE inhibitors (تقليل تأثير), Lithium, Methotrexate',mechanism:'مثبط COX 1 وCOX 2 غير انتقائي',halfLife:'2 ساعة',blackBox:'',notes:'أضف PPI مع الاستخدام الطويل. تجنب مع القلب والكلى الضعيفة.',optimalTime:'مع الوجبات',category2:'NSAID'},

{id:'d055',name:'Naproxen (نابروكسين)',category:'المسكنات',dose:'250-500mg',freq:'مرتين يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'نزيف هضمي، قصور كلوي، ارتفاع ضغط',contraindications:'مثل Ibuprofen',renalAdj:'تجنب مع GFR<30',interactions:'مثل Ibuprofen',mechanism:'مثبط COX غير انتقائي',halfLife:'12-17 ساعة',blackBox:'',notes:'جرعتان يومياً فقط. مفيد في التهاب المفاصل.',optimalTime:'مع وجبتي الصباح والمساء',category2:'NSAID'},

{id:'d056',name:'Tramadol (ترامادول)',category:'المسكنات',dose:'50-100mg',freq:'كل 6-8 ساعات عند الحاجة (max 400mg/day)',timing:'عند الحاجة',food:'مع أو بدون طعام',route:'فموي',sideEffects:'غثيان، إمساك، نعاس، دوخة، إدمان',contraindications:'صرع غير مسيطر عليه، مع MAOIs، حمل',renalAdj:'GFR<30: كل 12 ساعة',interactions:'MAOIs, SSRIs (متلازمة سيروتونين), Alcohol, CNS depressants',mechanism:'ناهض أوبيويد جزئي + مثبط SNRI',halfLife:'5-7 ساعة',blackBox:'إدمان، صرع، متلازمة سيروتونين',notes:'خطر الإدمان. لا مع الصرع. تفاعل خطير مع SSRIs.',optimalTime:'عند الحاجة — بأقل جرعة فعالة',category2:'أوبيويد جزئي'},

// ═══════════════════════════════════════════
// أدوية الروماتيزم والعظام
// ═══════════════════════════════════════════
{id:'d057',name:'Methotrexate (ميثوتريكسات)',category:'الروماتيزم',dose:'7.5-25mg',freq:'مرة أسبوعياً فقط',timing:'يوم ثابت أسبوعياً',food:'مع أو بدون طعام',route:'فموي / حقن',sideEffects:'غثيان، رفع كبد، تليف كبدي، تليف رئوي، قمع نخاع',contraindications:'حمل، كبد شديد، GFR<30، نقص مناعة شديد',renalAdj:'GFR<30: ممنوع',interactions:'NSAIDs, Cotrimoxazole (يزيد السمية بشكل خطير), PPIs, Penicillin',mechanism:'مضاد ميتابوليت — مثبط Dihydrofolate Reductase',halfLife:'3-10 ساعة',blackBox:'سمية كبدية، رئوية، نخاع، ماسخ للجنين',notes:'مرة في الأسبوع فقط! أخطاء الجرعة اليومية قاتلة. حمض الفوليك يومياً ماعدا يوم MTX.',optimalTime:'يوم ثابت أسبوعياً',category2:'مثبط مناعة / DMARD'},

{id:'d058',name:'Hydroxychloroquine (هيدروكسي كلوروكين)',category:'الروماتيزم',dose:'200-400mg',freq:'مرة يومياً',timing:'مع الطعام',food:'مع الطعام',route:'فموي',sideEffects:'غثيان، تغير رؤية (اعتلال شبكية نادر)',contraindications:'أمراض شبكية، حساسية',renalAdj:'احتياط مع GFR<10',interactions:'Amiodarone (QT), Digoxin',mechanism:'مضاد ملاريا / ذئبة — تثبيط TLR',halfLife:'40-50 يوم',blackBox:'',notes:'فحص عيون سنوي بعد 5 سنوات. آمن في الحمل.',optimalTime:'مع الطعام',category2:'DMARD'},

{id:'d059',name:'Alendronate (أليندرونات)',category:'العظام',dose:'70mg',freq:'مرة أسبوعياً',timing:'صباح أول الأسبوع — على معدة فارغة',food:'على معدة فارغة مع كأس ماء كامل — لا تستلق 30 دقيقة',route:'فموي',sideEffects:'تهيج مريء، ألم بطن، اضطرابات مريئية',contraindications:'قصور كلوي (GFR<35)، اضطراب بلع، مريء غير طبيعي',renalAdj:'GFR<35: ممنوع',interactions:'Calcium, Iron, Antacids (يقلل الامتصاص)',mechanism:'بيسفوسفونات — تثبيط Osteoclast',halfLife:'10+ سنوات في العظم',blackBox:'تنخر عظم الفك (نادر)، كسر فخذ غير نمطي',notes:'ابقَ واقفاً أو جالساً 30 دقيقة بعد الجرعة. لا تأكل لـ 30 دقيقة بعدها.',optimalTime:'صباح الجمعة أو أي يوم ثابت أسبوعياً على معدة فارغة',category2:'بيسفوسفونات'},

{id:'d060',name:'Colchicine (كولشيسين)',category:'الروماتيزم',dose:'0.5-1mg',freq:'مرة-مرتين يومياً',timing:'مع أو بدون طعام',food:'مع أو بدون طعام',route:'فموي',sideEffects:'إسهال، غثيان، ألم بطن، قمع نخاع (جرعات عالية)',contraindications:'قصور كلوي/كبدي شديد',renalAdj:'GFR<30: تخفيض الجرعة',interactions:'Clarithromycin, Cyclosporine, Statins (زيادة سمية خطيرة)',mechanism:'يثبط حركة الخلايا وتجميع التيوبيولين',halfLife:'27-31 ساعة',blackBox:'',notes:'للنقرس الحاد: 1mg ثم 0.5mg بعد ساعة. تفاعل خطير مع Clarithromycin.',optimalTime:'أي وقت ثابت',category2:'مضاد النقرس'},

{id:'d061',name:'Allopurinol (ألوبيورينول)',category:'الروماتيزم',dose:'100-300mg',freq:'مرة يومياً',timing:'بعد الطعام',food:'بعد الطعام',route:'فموي',sideEffects:'طفح (يصل لـ SJS)، رفع كبد، غثيان',contraindications:'حساسية، نوبة نقرس حادة',renalAdj:'GFR 10-20: 100mg. <10: 100mg كل 48 ساعة',interactions:'Azathioprine, 6-MP (زيادة سمية خطيرة), Warfarin, Amoxicillin',mechanism:'مثبط Xanthine Oxidase',halfLife:'1-2 ساعة (أوكسيبورينول 23 ساعة)',blackBox:'متلازمة Stevens-Johnson',notes:'لا تبدأ في النوبة الحادة. تدرج في الجرعة. فحص HLA-B*58:01 قبل في آسيويين.',optimalTime:'بعد الطعام',category2:'مضاد النقرس'},

// ═══════════════════════════════════════════
// المضادات الفطرية والطفيليات
// ═══════════════════════════════════════════
{id:'d062',name:'Fluconazole (فلوكونازول)',category:'مضادات فطرية',dose:'50-400mg',freq:'مرة يومياً',timing:'أي وقت',food:'مع أو بدون طعام',route:'فموي',sideEffects:'غثيان، صداع، رفع كبد، اضطراب QT',contraindications:'حساسية، مع Terfenadine/Cisapride',renalAdj:'GFR<50: تخفيض 50%',interactions:'Warfarin, Phenytoin, Statins, Midazolam, Cyclosporine, QT-drugs',mechanism:'مثبط CYP51 — تثبيط إرجوستيرول',halfLife:'30 ساعة',blackBox:'',notes:'تفاعلات دوائية كثيرة عبر CYP450. للمهبلي: جرعة 150mg واحدة.',optimalTime:'أي وقت ثابت',category2:'أزول'},

{id:'d063',name:'Mebendazole (ميبنيدازول)',category:'مضادات طفيليات',dose:'100-500mg',freq:'مرتان لـ ديدان — 3 أيام للأسكاريس',timing:'مع الطعام',food:'مع الطعام (يزيد الامتصاص)',route:'فموي',sideEffects:'غثيان، ألم بطن خفيف',contraindications:'حمل (الأول)، حساسية',renalAdj:'لا تعديل',interactions:'Cimetidine',mechanism:'تثبيط تكوين الأنابيب الدقيقة',halfLife:'3-9 ساعة',blackBox:'',notes:'علاج الديدان. جرعة ثانية بعد أسبوعين لمنع الإعادة.',optimalTime:'مع الوجبة',category2:'مضاد ديدان'},

// ═══════════════════════════════════════════
// مكملات ونقص عناصر
// ═══════════════════════════════════════════
{id:'d064',name:'Iron Ferrous Sulfate (حديد فيروس سلفات)',category:'مكملات',dose:'200-300mg',freq:'مرتين-ثلاث مرات يومياً',timing:'على معدة فارغة أو مع فيتامين C',food:'على معدة فارغة أو مع فيتامين C لتحسين الامتصاص',route:'فموي',sideEffects:'إمساك، غثيان، برازأسود، إسهال',contraindications:'فرط الحديد، Hemochromatosis',renalAdj:'لا تعديل',interactions:'Levothyroxine, Ciprofloxacin, Doxycycline (يقلل الامتصاص — فصل ساعتين), Antacids',mechanism:'تعويض نقص الحديد لتخليق الهيموغلوبين',halfLife:'لا ينطبق',blackBox:'',notes:'البراز الأسود طبيعي. تحسن Hb بعد 2-4 أسابيع. استمر 3-6 أشهر بعد تحسن الأنيميا.',optimalTime:'على معدة فارغة مع عصير برتقال (فيتامين C)',category2:'معدن - حديد'},

{id:'d065',name:'Calcium Carbonate (كالسيوم كربونات)',category:'مكملات',dose:'500-1000mg عنصري',freq:'مرتين يومياً',timing:'مع الطعام (يحتاج حامض للامتصاص)',food:'مع الطعام',route:'فموي',sideEffects:'إمساك، غازات، فرط كالسيوم (بجرعات عالية)',contraindications:'فرط كالسيوم، حصى كلى كالسيوم',renalAdj:'احتياط مع GFR<30',interactions:'Levothyroxine, Iron, Fluoroquinolones, Bisphosphonates (يقلل الامتصاص)',mechanism:'تعويض كالسيوم + أنتاسيد',halfLife:'لا ينطبق',blackBox:'',notes:'فصل الجرعة 2-4 ساعات عن الأدوية المتأثرة.',optimalTime:'مع الوجبات',category2:'معدن - كالسيوم'},

{id:'d066',name:'Vitamin D3 (فيتامين د3)',category:'مكملات',dose:'1000-5000 IU',freq:'مرة يومياً أو أسبوعياً',timing:'مع الوجبة الدسمة',food:'مع طعام يحتوي على دهون',route:'فموي',sideEffects:'آمن بالجرعات المعتادة. فرط كالسيوم بجرعات زائدة',contraindications:'فرط كالسيوم، حصى كلى',renalAdj:'استخدم Calcitriol مع GFR<30 بدلاً من D3',interactions:'Thiazide diuretics (فرط كالسيوم), Cholestyramine, Corticosteroids',mechanism:'يعزز امتصاص الكالسيوم والفوسفور',halfLife:'24 ساعة',blackBox:'',notes:'مع دهون يمتص أفضل.',optimalTime:'مع أكبر وجبة في اليوم',category2:'فيتامين'},

{id:'d067',name:'Folic Acid (حمض الفوليك)',category:'مكملات',dose:'0.4-5mg',freq:'مرة يومياً',timing:'أي وقت',food:'مع أو بدون طعام',route:'فموي',sideEffects:'نادرة',contraindications:'سرطان معتمد على حمض الفوليك (احتياط)',renalAdj:'لا تعديل',interactions:'Methotrexate, Phenytoin, Sulfasalazine',mechanism:'ضروري لتخليق DNA وتكوين خلايا الدم',halfLife:'لا ينطبق',blackBox:'',notes:'ضروري في الحمل (قبل الحمل وأوله). مع Methotrexate يومياً ماعدا يوم الجرعة.',optimalTime:'أي وقت',category2:'فيتامين'},

{id:'d068',name:'Vitamin B12 / Cyanocobalamin',category:'مكملات',dose:'500-1000mcg',freq:'مرة يومياً',timing:'أي وقت',food:'مع أو بدون طعام',route:'فموي / حقن',sideEffects:'نادرة',contraindications:'حساسية للكوبالت',renalAdj:'لا تعديل',interactions:'Metformin, PPIs, Colchicine (يقلل الامتصاص)',mechanism:'ضروري لتكوين الميلين والخلايا الحمراء',halfLife:'لا ينطبق',blackBox:'',notes:'نقص شائع مع Metformin وPPIs طويلة الأمد.',optimalTime:'أي وقت',category2:'فيتامين'},

// ═══════════════════════════════════════════
// أدوية المسالك البولية
// ═══════════════════════════════════════════
{id:'d069',name:'Tamsulosin (تامسولوسين)',category:'المسالك البولية',dose:'0.4mg',freq:'مرة يومياً',timing:'بعد نفس الوجبة يومياً',food:'بعد الطعام',route:'فموي',sideEffects:'دوخة وضعية، سيلان أنف، قذف رجعي',contraindications:'ضغط منخفض، مع PDE5 inhibitors بحذر',renalAdj:'GFR<10: احتياط',interactions:'PDE5 inhibitors (Sildenafil) — انخفاض ضغط شديد',mechanism:'حاصر ألفا 1 انتقائي',halfLife:'9-15 ساعة',blackBox:'',notes:'قف ببطء من الجلوس. يُعطى مساءً لتقليل الدوخة.',optimalTime:'بعد العشاء',category2:'حاصر ألفا'},

{id:'d070',name:'Finasteride (فيناستيريد)',category:'المسالك البولية',dose:'5mg',freq:'مرة يومياً',timing:'أي وقت',food:'مع أو بدون طعام',route:'فموي',sideEffects:'خلل جنسي، انخفاض PSA، نادراً: اكتئاب',contraindications:'حمل (تماس الجلدي خطر), نساء',renalAdj:'لا تعديل',interactions:'لا تفاعلات مهمة',mechanism:'مثبط 5-alpha Reductase',halfLife:'5-7 ساعة',blackBox:'',notes:'يخفض PSA 50% — اضرب القياس ×2 عند التقييم.',optimalTime:'أي وقت ثابت',category2:'مثبط 5-alpha Reductase'},

// ═══════════════════════════════════════════
// أدوية الحساسية
// ═══════════════════════════════════════════
{id:'d071',name:'Cetirizine (سيتيريزين)',category:'الحساسية',dose:'10mg',freq:'مرة يومياً',timing:'ليلاً (يسبب نعاساً خفيفاً)',food:'مع أو بدون طعام',route:'فموي',sideEffects:'نعاس خفيف، جفاف فم',contraindications:'قصور كلوي شديد بدون تعديل',renalAdj:'GFR<30: 5mg يومياً',interactions:'Alcohol (زيادة نعاس), CNS depressants',mechanism:'مضاد H1 الجيل الثاني',halfLife:'8-10 ساعة',blackBox:'',notes:'أقل نعاساً من الجيل الأول. يمكن تناوله صباحاً لو لا نعاس.',optimalTime:'ليلاً',category2:'مضاد هيستامين'},

{id:'d072',name:'Loratadine (لوراتادين)',category:'الحساسية',dose:'10mg',freq:'مرة يومياً',timing:'صباحاً',food:'مع أو بدون طعام',route:'فموي',sideEffects:'صداع، جفاف فم (نادر)',contraindications:'حساسية',renalAdj:'GFR<30: كل 48 ساعة',interactions:'Ketoconazole, Erythromycin (يرفع مستوى)',mechanism:'مضاد H1 الجيل الثاني',halfLife:'8-14 ساعة',blackBox:'',notes:'لا يسبب نعاساً تقريباً. مناسب لقيادة السيارة.',optimalTime:'صباحاً',category2:'مضاد هيستامين'},

{id:'d073',name:'Fexofenadine (فيكسوفينادين)',category:'الحساسية',dose:'120-180mg',freq:'مرة يومياً',timing:'صباحاً بعيداً عن عصير الجريب فروت',food:'بعيداً عن عصير الجريب فروت والبرتقال والتفاح',route:'فموي',sideEffects:'صداع، غثيان',contraindications:'حساسية',renalAdj:'GFR<30: تخفيض',interactions:'Antacids (Al/Mg), Fruit juices (يقلل الامتصاص)',mechanism:'مضاد H1 الجيل الثالث',halfLife:'11-15 ساعة',blackBox:'',notes:'تجنب عصائر الفاكهة مع الجرعة. لا نعاس.',optimalTime:'صباحاً بعيداً عن العصائر',category2:'مضاد هيستامين'},

// ═══════════════════════════════════════════
// الكورتيكوستيرويدات
// ═══════════════════════════════════════════
{id:'d074',name:'Prednisolone (بريدنيزولون)',category:'كورتيكوستيرويدات',dose:'5-60mg',freq:'مرة يومياً (أو مقسمة)',timing:'صباحاً مع الإفطار',food:'مع الطعام',route:'فموي',sideEffects:'رفع سكر، ارتفاع ضغط، هشاشة عظام، كبت مناعة، كتاراكت، زيادة وزن',contraindications:'عدوى فطرية جهازية غير معالجة',renalAdj:'لا تعديل',interactions:'NSAIDs (نزيف هضمي), Warfarin, Antidiabetics, Vaccines حية',mechanism:'كورتيكوستيرويد — مضاد التهاب قوي',halfLife:'2-4 ساعة (تأثير 18-36 ساعة)',blackBox:'',notes:'لا توقف فجأة بعد >3 أسابيع. صباحاً لمحاكاة الإيقاع الطبيعي.',optimalTime:'مع الإفطار صباحاً',category2:'كورتيكوستيرويد فموي'},

{id:'d075',name:'Dexamethasone (ديكساميثازون)',category:'كورتيكوستيرويدات',dose:'0.5-10mg',freq:'حسب المؤشر',timing:'صباحاً',food:'مع الطعام',route:'فموي / وريدي',sideEffects:'مثل Prednisolone لكن أشد',contraindications:'عدوى جهازية غير معالجة',renalAdj:'لا تعديل',interactions:'مثل Prednisolone',mechanism:'كورتيكوستيرويد قوي (لا يحتجز صوديوم)',halfLife:'3-4 ساعة (تأثير 36-54 ساعة)',blackBox:'',notes:'أقوى من Prednisolone ×7. مهم في الدماغ والقصبة ووذمة الوجه.',optimalTime:'صباحاً',category2:'كورتيكوستيرويد'},
];

// ═══════════════════════════════════════════
// قائمة الأدوية المُفشِّلة (High-Alert Medications)
// ═══════════════════════════════════════════
const HIGH_ALERT_MEDICATIONS_DEFAULT = [
  {id:'ha001',drug:'Methotrexate (ميثوتريكسات)',risk:'خطر إعطاء يومي بدلاً من أسبوعي — مميت',action:'تأكيد شفهي وكتابي للمريض. ملصق تحذيري على العلبة.',severity:'critical'},
  {id:'ha002',drug:'Insulin (إنسولين)',risk:'نقص سكر حاد — خطأ في النوع أو الجرعة',action:'تأكيد نوع الإنسولين. مراقبة سكر. تعليم ذوي المريض.',severity:'critical'},
  {id:'ha003',drug:'Warfarin (وارفارين)',risk:'نزيف داخلي — تفاعلات كثيرة ونطاق ضيق',action:'مراقبة INR دورية. تثقيف عن الأطعمة والأدوية.',severity:'critical'},
  {id:'ha004',drug:'Digoxin (ديجوكسين)',risk:'سمية قلبية — نطاق علاجي ضيق',action:'مراقبة مستوى الدواء. مراقبة البوتاسيوم.',severity:'critical'},
  {id:'ha005',drug:'Lithium (ليثيوم)',risk:'سمية عصبية — نطاق ضيق وتفاعلات كثيرة',action:'مراقبة مستوى الدواء كل 3 أشهر.',severity:'critical'},
  {id:'ha006',drug:'Heparin & LMWH (هيبارين)',risk:'نزيف — جرعة غير صحيحة',action:'التحقق من الوزن والجرعة المناسبة.',severity:'critical'},
  {id:'ha007',drug:'Opioids (مورفين، فنتانيل، أوكسيكودون)',risk:'اكتئاب تنفسي ووفاة',action:'تثقيف عن علامات الجرعة الزائدة. Naloxone متاح.',severity:'critical'},
  {id:'ha008',drug:'Concentrated Electrolytes (KCl وريدي)',risk:'توقف قلب فوري لو أُعطي بسرعة',action:'يجب تخفيفه دائماً. لا يُعطى بولعة IV',severity:'critical'},
  {id:'ha009',drug:'Chemotherapy (علاجات كيماوية)',risk:'سمية متعددة — ضيق علاجي',action:'تأكيد البروتوكول والسطح الجسمي. صيدلاني متخصص.',severity:'critical'},
  {id:'ha010',drug:'Amiodarone (أميودارون)',risk:'اضطراب نظم خطير، سمية رئوية/كبدية/درقية',action:'مراقبة دورية شاملة. مراجعة التفاعلات.',severity:'high'},
  {id:'ha011',drug:'Metformin (ميتفورمين) + صبغة وريدية',risk:'حماض لبني خطير',action:'وقف Metformin 48 ساعة قبل وبعد الصبغة.',severity:'high'},
  {id:'ha012',drug:'Clopidogrel قبل جراحة',risk:'نزيف جراحي مفرط',action:'وقف 5-7 أيام قبل الجراحة إلا بتوجيه القلب.',severity:'high'},
  {id:'ha013',drug:'ACE Inhibitors + ARBs معاً',risk:'قصور كلوي حاد، فرط بوتاسيوم',action:'تجنب التركيب — مخالف للبروتوكول.',severity:'high'},
  {id:'ha014',drug:'NSAIDs + Warfarin',risk:'نزيف هضمي وزيادة INR',action:'تجنب أو مراقبة مكثفة مع PPI.',severity:'high'},
  {id:'ha015',drug:'Levothyroxine + Calcium/Iron',risk:'تقليل امتصاص الهرمون الدرقي — هشاشة التحكم',action:'فصل الجرعات بـ 4 ساعات على الأقل.',severity:'moderate'},
  {id:'ha016',drug:'Fluoroquinolones + Antacids',risk:'تقليل امتصاص المضاد الحيوي بشكل كبير',action:'فصل الجرعات بساعتين على الأقل.',severity:'moderate'},
  {id:'ha017',drug:'Simvastatin + Amiodarone/Amlodipine',risk:'رابدوميوليسيس',action:'تحديد الجرعة القصوى (20mg).',severity:'high'},
  {id:'ha018',drug:'Tramadol + SSRIs',risk:'متلازمة السيروتونين — خطر الوفاة',action:'تجنب أو مراقبة مكثفة.',severity:'critical'},
  {id:'ha019',drug:'MAOIs + أي مضاد اكتئاب',risk:'متلازمة سيروتونين، أزمة ضغطية',action:'فترة غسيل 14 يوماً على الأقل.',severity:'critical'},
  {id:'ha020',drug:'Colchicine + Clarithromycin',risk:'تراكم Colchicine — قد يكون مميتاً',action:'تجنب التركيب. استبدل المضاد الحيوي.',severity:'critical'},
];

// ═══════════════════════════════════════════
// تصدير القاعدة
// ═══════════════════════════════════════════
function getDrugDB() {
  const stored = localStorage.getItem('cp_drug_db');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('cp_drug_db', JSON.stringify(DRUG_DATABASE_DEFAULT));
  return DRUG_DATABASE_DEFAULT;
}

function getHighAlertDB() {
  const stored = localStorage.getItem('cp_high_alert_db');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('cp_high_alert_db', JSON.stringify(HIGH_ALERT_MEDICATIONS_DEFAULT));
  return HIGH_ALERT_MEDICATIONS_DEFAULT;
}

function saveDrugDB(db) { localStorage.setItem('cp_drug_db', JSON.stringify(db)); }
function saveHighAlertDB(db) { localStorage.setItem('cp_high_alert_db', JSON.stringify(db)); }
