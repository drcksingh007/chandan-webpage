/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, CheckCircle2, AlertTriangle, Stethoscope, MessageSquare, ShieldAlert } from 'lucide-react';

export interface DigestiveService {
  id: string;
  category: 'procedure' | 'condition' | 'facility';
  titleEn: string;
  titleNp: string;
  subtitleEn: string;
  subtitleNp: string;
  descriptionEn: string;
  descriptionNp: string;
  icon?: string;
  symptoms: { en: string; np: string }[];
  careApproach: { en: string; np: string }[];
  whenToWorry: { en: string; np: string };
}

export const DIGESTIVE_SERVICES: DigestiveService[] = [
  // --- PROCEDURES & DIAGNOSTICS ---
  {
    id: 'colonoscopy',
    category: 'procedure',
    titleEn: 'Colonoscopy',
    titleNp: 'कोलोनोस्कोपी सेवा (Colonoscopy)',
    subtitleEn: 'Comprehensive lower GI endoscopy, polyp screening, and biopsy.',
    subtitleNp: 'तल्लो आन्द्रा, मलाशयको क्यामरा जाँच र पोलिप बायोप्सी।',
    icon: '🔬',
    descriptionEn:
      'Colonoscopy is a diagnostic and therapeutic procedure using a flexible high-definition video endoscope to examine the inner lining of your large intestine (colon and rectum). It enables early polyp detection, screening for colorectal diseases, and targeted tissue biopsies at Sanjeevani College of Medical Sciences.',
    descriptionNp:
      'कोलोनोस्कोपी आधुनिक भिडियो क्यामराको सहायताले ठूलो आन्द्रा र मलाशयको भित्री भाग प्रत्यक्ष हेरेर गरिने भरपर्दो जाँच हो। यसबाट आन्द्राको घाउ, सुजन, मासु पलाएको (पोलिप) पहिचान गरी बायोप्सी गर्न सकिन्छ।',
    symptoms: [
      { en: 'Unexplained bleeding per rectum or blood in stool', np: 'दिसामा रगत वा सिंगान देखिनु' },
      { en: 'Chronic diarrhea or persistent change in bowel habits', np: 'लामो समयदेखि पखाला वा दिसाको बानी अचानक बदल्नु' },
      { en: 'Unexplained weight loss or chronic low hemoglobin/anemia', np: 'बिना कारण तौल घट्नु वा शरीरमा रगतको कमी हुनु' },
      { en: 'Screening for intestinal polyps or colon cancer', np: 'आन्द्राको क्यान्सर वा पोलिपको प्रारम्भिक जाँच' },
    ],
    careApproach: [
      { en: 'Pre-procedure gentle bowel preparation protocol', np: 'जाँचअघि पेट र आन्द्रा सफा गर्ने सहज तयारी निर्देशन' },
      { en: 'Comfortable mild sedation for painless evaluation', np: 'बिरामीलाई असहज नहोस् भनी हल्का लट्ठ्याएर गरिने प्रक्रिया' },
      { en: 'Immediate photo documentation & biopsy facility', np: 'जाँचपछि तुरुन्त फोटोसहितको रिपोर्ट र बायोप्सी सुविधा' },
    ],
    whenToWorry: {
      en: 'Heavy, continuous bleeding per rectum, intense cramping with fever, or dizziness/fainting.',
      np: 'दिसाबाट धेरै ताजा रगत बग्नु, कडा ज्वरोसहित पेट दुख्नु वा चक्कर लागेर बेहोस हुनु।',
    },
  },
  {
    id: 'fibroscan',
    category: 'procedure',
    titleEn: 'FibroScan (Liver Elastography)',
    titleNp: 'फाइब्रोस्क्यान (FibroScan - कलेजो जाँच)',
    subtitleEn: 'Non-invasive liver stiffness and fatty liver (CAP score) assessment.',
    subtitleNp: 'बिना सुई, बिना दुखाइ कलेजोको फाइब्रोसिस र बोसो मापन।',
    icon: '📊',
    descriptionEn:
      'FibroScan (transient elastography) is an advanced, non-invasive technology that accurately measures liver stiffness (fibrosis/cirrhosis) and quantifies liver fat through Controlled Attenuation Parameter (CAP). It replaces painful needle biopsies for monitoring fatty liver disease, Hepatitis B/C, and chronic liver ailments in just 5–10 minutes.',
    descriptionNp:
      'फाइब्रोस्क्यान कलेजोको कडापन र कलेजोमा जमेको बोसो (Fatty Liver) नाप्ने विश्वस्तरीय अत्याधुनिक प्रविधि हो। कुनै सुई नघोची, बिना दुखाइ १० मिनेटमै कलेजोको अवस्था थाहा पाउन सकिन्छ।',
    symptoms: [
      { en: 'Grade 1, 2, or 3 fatty liver seen on ultrasound', np: 'भिडियो एक्सरेमा फ्याट्टी लिभर (Fatty Liver) देखिएमा' },
      { en: 'Elevated liver enzymes (SGOT, SGPT, Bilirubin)', np: 'कलेजोको इन्जाइम (SGOT/SGPT) बढेको पाइएमा' },
      { en: 'Chronic Hepatitis B or C viral infection monitoring', np: 'हेपाटाइटिस बी वा सी लागेका बिरामीको कलेजो निगरानी' },
      { en: 'History of regular alcohol intake or metabolic diabetes', np: 'नियमित मदिरा सेवन गर्ने वा मधुमेह/मोटोपना भएका व्यक्ति' },
    ],
    careApproach: [
      { en: 'Completely painless, quick 5–10 minute non-invasive scan', np: 'कुनै दुखाइ नहुने, १० मिनेटमै पूरा हुने अत्याधुनिक प्रविधि' },
      { en: 'Quantitative staging of liver fibrosis and fat content', np: 'कलेजोको बोसो र कडापनको सही अङ्क र ग्रेडिङ' },
      { en: 'Personalized metabolic and therapeutic reversal roadmap', np: 'फ्याट्टी लिभर उल्टाउन डा. चन्दन सिंहको विशेष आहार योजना' },
    ],
    whenToWorry: {
      en: 'High stiffness reading accompanied by leg swelling, jaundice, or ascites requires urgent hepatology intervention.',
      np: 'कलेजो ज्यादै कडा भई जन्डिस देखिनु वा पेटमा पानी भरिनु (तुरुन्त विशेषज्ञ उपचार लिनुहोस्)।',
    },
  },
  {
    id: 'ubt',
    category: 'procedure',
    titleEn: 'UBT (Urea Breath Test for H. Pylori)',
    titleNp: 'युरिया ब्रेथ टेस्ट (UBT - H. Pylori श्वास परीक्षण)',
    subtitleEn: 'Gold-standard non-invasive breath test for stomach ulcer bacteria.',
    subtitleNp: 'पेटको घाउ गराउने एच. पाइलोरी ब्याक्टेरियाको भरपर्दो श्वास परीक्षण।',
    icon: '💨',
    descriptionEn:
      'The Urea Breath Test (UBT) is the internationally recommended gold-standard non-invasive diagnostic test to detect active Helicobacter pylori bacterial infection in the stomach. H. pylori is the primary cause of chronic gastritis, peptic ulcers, and stomach burning. UBT is highly sensitive, safe, and avoids unnecessary endoscopy.',
    descriptionNp:
      'युरिया ब्रेथ टेस्ट (UBT) पेटमा अल्सर र ग्यास्ट्राइटिस गराउने मुख्य कीटाणु एच. पाइलोरी (H. pylori) पत्ता लगाउने विश्वकै उत्कृष्ट श्वास परीक्षण हो। यसमा नली छिराउनु पर्दैन, केवल श्वास फुकेर केही मिनेटमै भरपर्दो नतिजा प्राप्त हुन्छ।',
    symptoms: [
      { en: 'Persistent acidity, burning epigastric discomfort, and indigestion', np: 'औषधि खाँदा पनि पेट र छाती पोल्न नछोड्ने' },
      { en: 'Recurrent peptic stomach ulcers or duodenal ulcers', np: 'बारम्बार दोहोरिने पेटको घाउ (अल्सर)' },
      { en: 'Early fullness, nausea, and frequent sour belching', np: 'थोरै खाँदा पनि पेट भारी हुने, अमिलो डकार आउने' },
      { en: 'Verification of successful H. pylori bacterial cure after treatment', np: 'उपचारपछि ब्याक्टेरिया पूर्ण रूपमा नष्ट भयो कि भएन जाँच्न' },
    ],
    careApproach: [
      { en: 'Fast, completely non-invasive 15-minute breath test', np: 'छिटो, छरितो र पूर्ण रूपमा पीडारहित १५ मिनेटको परीक्षण' },
      { en: '98%+ sensitivity and specificity for active infection', np: 'सक्रिय संक्रमण पत्ता लगाउन ९८% भन्दा बढी भरपर्दो' },
      { en: 'Tailored quadruple/triple eradication medication plan', np: 'ब्याक्टेरिया निर्मूल गर्न डा. सिंहद्वारा विशेष औषधोपचार' },
    ],
    whenToWorry: {
      en: 'Vomiting blood, passing jet black stools, or severe sudden stomach pain mandates immediate emergency hospital visit.',
      np: 'रगत बान्ता हुनु वा दिसा कालो आउनु (आकस्मिक अस्पताल भर्ना आवश्यक)।',
    },
  },
  {
    id: 'usg',
    category: 'procedure',
    titleEn: 'High-Resolution USG (Ultrasound) Facility',
    titleNp: 'अत्याधुनिक भिडियो एक्सरे (USG Facility)',
    subtitleEn: 'Advanced abdominal ultrasound for liver, gallbladder, and pancreas.',
    subtitleNp: 'कलेजो, पित्तथैलीको पत्थरी र पेटका भित्री अंगहरूको स्पष्ट भिडियो एक्सरे।',
    icon: '📡',
    descriptionEn:
      'Our high-resolution Abdominal Ultrasonography (USG) imaging suite at Sanjeevani College provides detailed real-time acoustic imaging of the hepatobiliary tree, gallbladder, pancreas, spleen, kidneys, and appendix. Essential for diagnosing gallstones, bile duct dilation, liver masses, and ascites.',
    descriptionNp:
      'संजीवनी कलेजमा अत्याधुनिक हाई-रिजोल्युसन भिडियो एक्सरे (USG) मेसिनबाट कलेजो, पित्तथैलीको पत्थरी, प्यान्क्रियाज, मिर्गौला र पेटका भित्री अंगहरूको छिटो र स्पष्ट जाँच गरिन्छ।',
    symptoms: [
      { en: 'Right upper quadrant abdominal pain after fatty meals', np: 'चिल्लो खाना खाएपछि दाहिने कोखामा कडा दुखाइ (पित्तथैली शंका)' },
      { en: 'Suspected gallbladder stones, kidney stones, or appendicitis', np: 'पित्तथैलीको पत्थरी, मिर्गौला पत्थरी वा एपेन्डिसाइटिस' },
      { en: 'Abdominal distension, suspected fluid/ascites, or organomegaly', np: 'पेट फुल्ने, पानी जमेको शंका वा कलेजो/फियो बढेको' },
      { en: 'Investigation of unexplained jaundice or fever', np: 'जन्डिस वा लामो समयदेखि ज्वरो आउने कारण खोज्न' },
    ],
    careApproach: [
      { en: 'High-frequency harmonic transducers for crystal-clear imaging', np: 'आधुनिक प्रोब र प्रविधिबाट सूक्ष्म घाउ वा पत्थरी पत्ता लगाउने' },
      { en: 'Fast same-day reporting for immediate gastroenterology correlation', np: 'डाक्टरको परामर्शसँगै तुरुन्तै रिपोर्ट प्राप्त हुने' },
      { en: 'Safe, radiation-free diagnostic imaging for all age groups', np: 'कुनै विकिरण नहुने पूर्ण सुरक्षित जाँच' },
    ],
    whenToWorry: {
      en: 'Severe acute right upper belly pain radiating to back with fever and vomiting indicates acute cholecystitis.',
      np: 'ज्वरो र बान्तासहित दाहिने कोखा असह्य दुख्नु (पित्तथैलीको आकस्मिक अवस्था)।',
    },
  },
  {
    id: 'endoscopy',
    category: 'procedure',
    titleEn: 'Upper GI Endoscopy evaluation',
    titleNp: 'इन्डोस्कोपी सेवा (Upper GI Endoscopy)',
    subtitleEn: 'High-definition mucosal inspection of food pipe, stomach, and duodenum.',
    subtitleNp: 'संजीवनी कलेजमा आधुनिक क्यामरा प्रविधिबाट पेटको भित्री जाँच।',
    icon: '🩺',
    descriptionEn:
      'Upper gastrointestinal endoscopy allows direct high-definition visualization of the esophagus, stomach, and duodenum. It is the premier diagnostic method for investigating ulcers, internal bleeding, swallowing difficulties, and collecting histopathology biopsies.',
    descriptionNp:
      'इन्डोस्कोपी मार्फत खाना नली, आमाशय र सानो आन्द्राको प्रत्यक्ष भिडियो क्यामराबाट जाँच गरिन्छ। यसबाट ग्यास्ट्रिक, अल्सर, खाना अड्किने समस्या र रक्तश्रावको सही कारण तुरुन्तै थाहा हुन्छ।',
    symptoms: [
      { en: 'Long-standing indigestion resistant to medication', np: 'औषधिले निको नभएको पुरानो ग्यास्ट्रिक' },
      { en: 'Unexplained anemia, low hemoglobin, or blood loss', np: 'कारण नखुलेको रगतको कमी (कम हिमोग्लोबिन)' },
      { en: 'Persistent vomiting or difficulty swallowing solid food', np: 'खाना अड्किने वा लगातार बान्ता हुने समस्या' },
    ],
    careApproach: [
      { en: 'Comfortable local throat spray or gentle sedation protocol', np: 'घाँटी लट्ठ्याएर वा हल्का निद्रामा सहज जाँच' },
      { en: 'Rapid digital photo reporting on the same day', np: 'जाँच सकिनासाथ फोटोसहितको स्पष्ट रिपोर्ट' },
      { en: 'Accompanying biopsy testing whenever indicated', np: 'शंकास्पद ठाउँमा बायोप्सी जाँचको व्यवस्था' },
    ],
    whenToWorry: {
      en: 'Immediate emergency endoscopy indicated for acute vomiting of fresh blood or black stools.',
      np: 'ताजा रगत बान्ता हुनु वा कालो दिसा भएमा तुरुन्त आकस्मिक इन्डोस्कोपी आवश्यक हुन सक्छ।',
    },
  },

  // --- HOSPITAL & CRITICAL CARE FACILITIES ---
  {
    id: 'emergency',
    category: 'facility',
    titleEn: '24*7 Emergency & Resuscitation',
    titleNp: '२४सै घण्टा आकस्मिक सेवा (24*7 Emergency)',
    subtitleEn: 'Round-the-clock emergency care for acute GI bleeding, pain, and liver crisis.',
    subtitleNp: 'रगत बान्ता, कालो दिसा, असह्य पेट दुखाइको तत्काल आपतकालीन उपचार।',
    icon: '🚨',
    descriptionEn:
      'The 24/7 Emergency Department at Sanjeevani College of Medical Sciences is fully equipped with dedicated emergency physicians, acute resuscitation suites, blood transfusion support, and rapid-response GI bleeding management round the clock.',
    descriptionNp:
      'संजीवनी कलेज अफ मेडिकल साइन्सेसमा २४सै घण्टा आकस्मिक सेवा सञ्चालनमा छ। रगत बान्ता, कालो दिसा, कलेजोको समस्याबाट बेहोस हुनु वा चर्को पेट दुखाइ भएका बिरामीलाई तुरुन्त जीवनरक्षक उपचार प्रदान गरिन्छ।',
    symptoms: [
      { en: 'Acute vomiting of blood (hematemesis) or passage of black tarry stools (melena)', np: 'रगत बान्ता हुनु वा कालो दिसा हुनु' },
      { en: 'Sudden, severe, unendurable abdominal pain or rigid abdomen', np: 'अकस्मात् पेट असह्य दुख्नु वा पेट काठ जस्तै कडा हुनु' },
      { en: 'Hepatic encephalopathy, acute confusion, or drowsiness in liver patients', np: 'कलेजोका बिरामी अचानक बेहोस वा अलमल्ल हुनु' },
      { en: 'Severe dehydration, shock, low blood pressure with fainting', np: 'कडा झाडापखाला, रक्तचाप घट्नु र बेहोस हुनु' },
    ],
    careApproach: [
      { en: 'Rapid bedside triage and multi-channel resuscitation', np: 'आकस्मिक कक्षमा पुग्नासाथ तुरुन्त जीवनरक्षक उपचार' },
      { en: 'Emergency blood transfusion and hemodynamic stabilization', np: 'रगत चढाउने र रक्तचाप स्थिर राख्ने पूर्ण व्यवस्था' },
      { en: '24/7 on-call medical specialist and surgical backup', np: 'चौबीसै घण्टा विशेषज्ञ डाक्टर र शल्यक्रिया टोली तैनाथ' },
    ],
    whenToWorry: {
      en: 'Dial the direct Emergency Hotline 081-526458 immediately for ambulance or urgent arrival.',
      np: 'आकस्मिक सेवाको लागि तुरुन्त ०८१-५२६४५८ मा फोन गर्नुहोस् वा अस्पताल आउनुहोस्।',
    },
  },
  {
    id: 'icu',
    category: 'facility',
    titleEn: 'ICU Facilities (Intensive Care Unit)',
    titleNp: 'सघन उपचार कक्ष (ICU Facilities)',
    subtitleEn: 'Advanced multi-parameter ventilators, critical care, and vital monitoring.',
    subtitleNp: 'गम्भीर बिरामीका लागि आधुनिक भेन्टिलेटर, मोनिटर र सघन हेरचाह।',
    icon: '🏥',
    descriptionEn:
      'Our Intensive Care Unit (ICU) provides state-of-the-art critical care infrastructure with modern invasive mechanical ventilators, central multi-parameter telemetry monitors, infusion pump stations, arterial blood gas analyzers, and 1:1 dedicated critical care nursing for complex gastrointestinal and medical crises.',
    descriptionNp:
      'संजीवनीको अत्याधुनिक सघन उपचार कक्ष (ICU) मा जटिल र गम्भीर बिरामीका लागि आधुनिक भेन्टिलेटर, २४ घण्टे कार्डियाक मोनिटरिङ र तालिमप्राप्त क्रिटिकल केयर नर्सिङ टोली उपलब्ध छ।',
    symptoms: [
      { en: 'Severe acute necrotizing pancreatitis with organ failure', np: 'जटिल प्यान्क्रियाटाइटिस र अंगहरूमा असर' },
      { en: 'Massive upper GI hemorrhage with hypovolemic shock', np: 'धेरै रगत बगेर रक्तचाप शून्य हुनु (सक)' },
      { en: 'Acute liver failure, hepatic coma, or hepatorenal syndrome', np: 'कलेजो तथा मिर्गौला फेलियरको गम्भीर अवस्था' },
      { en: 'Septic shock originating from intra-abdominal infections', np: 'पेटको भित्री संक्रमण फैलिएर हुने सेप्सिस' },
    ],
    careApproach: [
      { en: 'Dedicated intensive care physician rounds and continuous vital monitoring', np: 'क्रिटिकल केयर विशेषज्ञबाट निरन्तर सुपरिवेक्षण' },
      { en: 'High-end mechanical ventilation and invasive arterial lines', np: 'आधुनिक भेन्टिलेटर र श्वासप्रश्वास सहायता प्रणाली' },
      { en: 'Precision vasoactive infusion and nutritional support', np: 'जीवनरक्षक औषधि र नसाबाट पोषण दिने विशेष सुविधा' },
    ],
    whenToWorry: {
      en: 'ICU care is coordinated seamlessly with Dr. Chandan Singh and the hospital emergency triage.',
      np: 'आपतकालीन अवस्थामा डा. चन्दन सिंहको निगरानीमा तत्काल आईसीयू भर्ना गरिन्छ।',
    },
  },
  {
    id: 'ipd',
    category: 'facility',
    titleEn: 'IPD Facility (Inpatient Admission & Wards)',
    titleNp: 'अस्पताल भर्ना सेवा (IPD Facility)',
    subtitleEn: 'General wards, semi-private cabins, and AC rooms with 24/7 doctor care.',
    subtitleNp: 'चौबीसै घण्टा चिकित्सक र नर्सिङ हेरचाह सहितको आरामदायी भर्ना वार्ड।',
    icon: '🛌',
    descriptionEn:
      'The Inpatient Department (IPD) at Sanjeevani College provides clean, comfortable accommodation ranging from general medical wards to well-appointed private AC cabins. Patients receive round-the-clock medical officer coverage, compassionate nursing care, customized hospital dietary support, and daily consultant rounds.',
    descriptionNp:
      'संजीवनी कलेजमा बिरामी भर्ना (IPD) का लागि सफा सामान्य वार्ड, डिलक्स क्याबिन र एसी कोठाहरू उपलब्ध छन्। जहाँ चौबीसै घण्टा डाक्टर र नर्सहरूको प्रत्यक्ष निगरानी र हेरचाह रहन्छ।',
    symptoms: [
      { en: 'Patients needing intravenous antibiotics, fluids, or nutritional therapy', np: 'नसाबाट एन्टिबायोटिक वा सलाइन चढाउनुपर्ने बिरामी' },
      { en: 'Prolonged vomiting, severe weakness, and dehydration', np: 'लगातार बान्ता भई शरीरमा पानी र लवणको कमी हुनु' },
      { en: 'Elective admission for pre-procedure bowel preparation or blood transfusion', np: 'प्रक्रिया पूर्व तयारी वा रगत चढाउन भर्ना' },
      { en: 'Post-endoscopic or post-procedure observation', np: 'इन्डोस्कोपी वा कोलोनोस्कोपी पछिको निगरानी' },
    ],
    careApproach: [
      { en: 'Daily bedside consultant rounds by Dr. Chandan Singh', np: 'डा. चन्दन सिंहद्वारा दैनिक नियमित बिरामी जाँच' },
      { en: 'Clean, hygienic wards, private cabins, and attached washrooms', np: 'शान्त, सफा वातावरण र सबै सुविधासहितका क्याबिनहरू' },
      { en: 'In-house hygienic therapeutic kitchen for specialized diets', np: 'बिरामीको रोग अनुसारको स्वस्थकर खाना' },
    ],
    whenToWorry: {
      en: 'Direct admission arrangements can be pre-coordinated via phone at 984-8044146 or at hospital reception.',
      np: 'भर्ना सम्बन्धी जानकारीका लागि फोन ९८४८०४४१४६ वा अस्पताल स्वागत कक्षमा सम्पर्क गर्न सकिन्छ।',
    },
  },
  {
    id: 'lab',
    category: 'facility',
    titleEn: 'Advanced Laboratory Facilities',
    titleNp: 'अत्याधुनिक ल्याब परीक्षण सेवा (Advanced Laboratory)',
    subtitleEn: 'Automated biochemistry, hematology, viral serology, and GI panels.',
    subtitleNp: 'पूर्ण स्वचालित रगत, कलेजो, भाइरल मार्कर र कल्चर परीक्षण।',
    icon: '🔬',
    descriptionEn:
      'Our hospital laboratory operates high-throughput automated analyzers delivering precise, rapid diagnostic testing: complete liver function panels (LFT), viral hepatitis markers (HBsAg, Anti-HCV), pancreatic amylase/lipase, complete blood counts (CBC), coagulation PT/INR, stool routine & occult blood, and microbiological cultures.',
    descriptionNp:
      'हाम्रो अत्याधुनिक ल्याबमा अत्याधुनिक स्वचालित मेसिनबाट रगत, कलेजो (LFT), भाइरस जाँच (हेपाटाइटिस बी र सी), प्यान्क्रियाज, दिसा र रगत जम्ने क्षमता (PT/INR) को छिटो र भरपर्दो परीक्षण गरिन्छ।',
    symptoms: [
      { en: 'Routine health checkup, liver profiling, or pre-operative clearance', np: 'कलेजो स्वास्थ्य जाँच वा अपरेसन पूर्वको रगत जाँच' },
      { en: 'Investigation of unexplained fever, anemia, or weight loss', np: 'ज्वरो, रक्तअल्पता वा कमजोरीको ल्याब परीक्षण' },
      { en: 'Hepatitis B, C, or viral disease screening', np: 'हेपाटाइटिस बी र सी भाइरसको ल्याब परीक्षण' },
      { en: 'Stool examination for parasites, occult blood, or inflammation', np: 'दिसामा रगत वा कीटाणुको विस्तृत जाँच' },
    ],
    careApproach: [
      { en: 'Internal and external quality-controlled automated testing', np: 'अन्तर्राष्ट्रिय गुणस्तर मापदण्ड अनुसारको स्वचालित परीक्षण' },
      { en: 'Fast computerized reporting with online/WhatsApp sharing', np: 'कम समयमै फोटो तथा डिजिटल माध्यमबाट रिपोर्ट उपलब्ध' },
      { en: 'Comprehensive specialized gastroenterology & liver testing under one roof', np: 'पाचन र कलेजोसम्बन्धी सम्पूर्ण जाँचहरू एउटै छानामुनि' },
    ],
    whenToWorry: {
      en: 'Critically abnormal values (e.g. extreme bilirubin, low platelets, severe anemia) are promptly flagged to the physician.',
      np: 'अत्यधिक खतरायुक्त रिपोर्ट तुरुन्त डाक्टरलाई जानकारी गराएर तुरुन्त उपचार अघि बढाइन्छ।',
    },
  },

  // --- DIGESTIVE & LIVER CONDITIONS ---
  {
    id: 'gerd',
    category: 'condition',
    titleEn: 'Acid reflux and GERD',
    titleNp: 'एसिड रिफ्लक्स र छाती पोल्ने (GERD)',
    subtitleEn: 'Heartburn, regurgitation, and long-term reflux care.',
    subtitleNp: 'पेट र छाती पोल्ने, अमिलो पानी आउने समस्या।',
    icon: '🔥',
    descriptionEn:
      'Gastroesophageal reflux occurs when stomach acid repeatedly flows back into the esophagus. Dr. Chandan Singh offers comprehensive lifestyle, medical, and endoscopic evaluation to prevent mucosal injury and chronic complications.',
    descriptionNp:
      'पेटको एसिड खाना नलीमा फर्किंदा छाती पोल्ने, अमिलो डकार आउने र घाँटीमा गाँठो परे जस्तो हुने गर्छ। डा. चन्दन सिंह यसको दीर्घकालीन नियन्त्रण र खानपान सुधारमा विशेष परामर्श दिनुहुन्छ।',
    symptoms: [
      { en: 'Burning sensation in chest or throat after meals', np: 'खाना खाएपछि छाती वा घाँटी पोल्ने' },
      { en: 'Acid regurgitation or sour burps', np: 'मुखमा अमिलो पानी आउने' },
      { en: 'Difficulty swallowing or sensation of food stuck', np: 'खाना निल्न असजिलो हुने' },
      { en: 'Chronic dry cough or morning hoarseness', np: 'बिहान स्वर भासिने वा सुक्खा खोकी' },
    ],
    careApproach: [
      { en: 'Dietary triggers review and meal timing guidance', np: 'खानपान र जीवनशैली तालिका सुधार' },
      { en: 'Evidence-based acid suppression therapies', np: 'सुरक्षित र प्रभावकारी एसिड नियन्त्रक औषधि' },
      { en: 'Upper GI endoscopy screening for esophageal healing', np: 'खाना नलीको घाउ हेर्न इन्डोस्कोपी' },
    ],
    whenToWorry: {
      en: 'Black stools, severe difficulty swallowing, unexplained weight loss, or chest pain radiating to left arm.',
      np: 'कालो दिसा हुनु, खाना निल्न कत्ति नसक्नु, तौल घट्नु वा छातीको दुखाइ देब्रे हाततर्फ फैलिनु।',
    },
  },
  {
    id: 'ulcer',
    category: 'condition',
    titleEn: 'Peptic ulcer disease',
    titleNp: 'पेटको अल्सर (Peptic Ulcer)',
    subtitleEn: 'Evaluation and treatment of stomach and duodenal ulcers.',
    subtitleNp: 'आमाशय र सानो आन्द्राको घाउको भरपर्दो उपचार।',
    icon: '🩹',
    descriptionEn:
      'Peptic ulcers are sores that develop on the inside lining of your stomach and the upper portion of your small intestine, commonly caused by H. pylori bacterial infection or NSAID pain medications.',
    descriptionNp:
      'एच. पाइलोरी (H. pylori) संक्रमण वा दुखाइको जथाभावी औषधिको प्रयोगले पेट वा सानो आन्द्रामा घाउ (अल्सर) हुन सक्छ। समयमै उपचार गरेमा यो पूर्ण निको हुन्छ।',
    symptoms: [
      { en: 'Gnawing or burning stomach pain between meals', np: 'खाना खानुभन्दा अघि वा पछि पेट कट्कट् दुख्ने' },
      { en: 'Feeling of fullness, bloating, or belching', np: 'थोरै खाँदा पनि पेट टन्न भरिने' },
      { en: 'Intolerance to fatty or spicy foods', np: 'चिल्लो वा पिरो खाना पचाउन नसक्ने' },
      { en: 'Nausea or early morning stomach distress', np: 'वाकवाकी लाग्ने वा बिहान पेट पोल्ने' },
    ],
    careApproach: [
      { en: 'H. pylori bacterial testing and tailored eradication', np: 'एच. पाइलोरी ब्याक्टेरिया परीक्षण र निर्मूल' },
      { en: 'Mucosal healing protocol with safe gastric protectants', np: 'पेटको घाउ निको पार्ने संरक्षणात्मक उपचार' },
      { en: 'Safe alternative review for pain & arthritis medicines', np: 'हानिकारक पेनकिलर औषधिको सुरक्षित विकल्प' },
    ],
    whenToWorry: {
      en: 'Vomiting blood (coffee-ground emesis), tarry black stools, or sudden sharp unbearable abdominal pain.',
      np: 'रगत बान्ता हुनु, दिसा कालो आउनु, वा अकस्मात् पेट असह्य दुख्नु (तत्काल आकस्मिक जानुहोस्)।',
    },
  },
  {
    id: 'liver',
    category: 'condition',
    titleEn: 'Liver and hepatitis care',
    titleNp: 'कलेजो तथा हेपाटाइटिस हेरचाह',
    subtitleEn: 'Fatty liver, viral hepatitis, and chronic liver disease.',
    subtitleNp: 'फ्याट्टी लिभर, जन्डिस, हेपाटाइटिस बी/सी को आधुनिक उपचार।',
    icon: '🫀',
    descriptionEn:
      'Liver disorders require careful monitoring of liver enzymes, ultrasound imaging, and risk stratification. Dr. Chandan Singh provides metabolic fatty liver management, viral hepatitis treatments, and cirrhosis care.',
    descriptionNp:
      'फ्याट्टी लिभर (Fatty Liver), जन्डिस र हेपाटाइटिसको समयमै सही पहिचान र व्यवस्थापन गरे कलेजो सुरक्षित रहन्छ। डा. चन्दन सिंह व्यक्तिगत ल्याब रिपोर्ट अनुसार योजना बनाउनुहुन्छ।',
    symptoms: [
      { en: 'Fatigue, sluggishness, and reduced stamina', np: 'सधैं थकान महसुस हुनु, अल्छी लाग्नु' },
      { en: 'Yellowing of eyes or skin (Jaundice)', np: 'आँखा वा छाला पहेंलो हुनु (जन्डिस)' },
      { en: 'Mild heaviness or dull ache in right upper abdomen', np: 'दाहिने कोखातिर भारीपन वा दुखाइ' },
      { en: 'Dark tea-colored urine and pale stools', np: 'गाढा पहेंलो वा चिया रङ्गको पिसाब' },
    ],
    careApproach: [
      { en: 'Liver function test (LFT) and viral serology workup', np: 'कलेजो इन्जाइम (SGOT, SGPT) र भाइरस जाँच' },
      { en: 'FibroScan and ultrasound correlation for fatty liver staging', np: 'फाइब्रोस्क्यान र भिडियो एक्सरेबाट कलेजोको बोसो मूल्याङ्कन' },
      { en: 'Metabolic weight & dietary modification protocol', np: 'वजन नियन्त्रण, पौष्टिक आहार र कलेजो सुरक्षा' },
    ],
    whenToWorry: {
      en: 'Swelling of feet or abdomen (ascites), confusion, drowsiness, or yellow eyes with high fever.',
      np: 'खुट्टा वा पेट सुन्निनु (पानी जम्नु), बेहोस वा अलमल्ल हुनु, कडा ज्वरो सहित जन्डिस।',
    },
  },
  {
    id: 'pain',
    category: 'condition',
    titleEn: 'Abdominal pain work-up',
    titleNp: 'पेट दुखाइको विस्तृत पहिचान',
    subtitleEn: 'Work-up for persistent or unexplained digestive pain.',
    subtitleNp: 'लगातार वा बारम्बार हुने पेट दुखाइको वैज्ञानिक कारण पत्ता लगाउने।',
    icon: '⚡',
    descriptionEn:
      'Persistent or recurring abdominal discomfort can originate from the gallbladder (stones), pancreas, stomach, or intestines. Systematic clinical evaluation isolates the source with minimal unnecessary investigations.',
    descriptionNp:
      'पेट दुखाइ पित्तथैलीको पत्थरी, प्यान्क्रियाज, आन्द्राको संक्रमण वा ग्यास्ट्राइटिस जेसुकैले हुन सक्छ। डा. चन्दन सिंह अनावश्यक जाँच नगरी सही समस्या पत्ता लगाउनुहुन्छ।',
    symptoms: [
      { en: 'Sharp pain under ribs after meals (gallbladder)', np: 'दाहिने कोखामा खाना खाएपछि चर्को दुखाइ' },
      { en: 'Cramping around navel or lower abdomen', np: 'नाइँटो वरिपरि वा तल्लो पेट बटारेर दुख्ने' },
      { en: 'Discomfort relieved or aggravated by passing gas', np: 'दिसा वा ग्यास निस्केपछि दुखाइ घट्नु वा बढ्नु' },
    ],
    careApproach: [
      { en: 'Careful clinical history and physical examination', np: 'विस्तृत शारीरिक जाँच र दुखाइको इतिहास' },
      { en: 'Targeted ultrasound and blood inflammatory markers', np: 'लक्षित भिडियो एक्सरे र रगत जाँच' },
      { en: 'Avoidance of empiric polypharmacy', np: 'कारण नबुझी मनपरी धेरै औषधि खानबाट बचावट' },
    ],
    whenToWorry: {
      en: 'Rigid belly, inability to pass stool or gas with severe vomiting, or persistent high fever with pain.',
      np: 'पेट काठ जस्तो कडा हुनु, बान्ता भएर दिसा-ग्यास बन्द हुनु, वा तीव्र ज्वरो।',
    },
  },
  {
    id: 'ibs',
    category: 'condition',
    titleEn: 'IBS and bowel disorders',
    titleNp: 'आइबिएस (IBS) र दिसा गडबडी',
    subtitleEn: 'Irritable bowel, constipation, diarrhea, and IBD care.',
    subtitleNp: 'दिसा पटक-पटक लाग्ने, कब्जियत वा पेट ढुस्स हुने समस्या।',
    icon: '🌀',
    descriptionEn:
      'Irritable Bowel Syndrome (IBS) affects the gut-brain axis, causing alternating bowel habits, bloating, and urgent spasms. With empathetic coaching, dietary low-FODMAP adjustments, and gut-targeted therapy, long-term relief is achieved.',
    descriptionNp:
      'आन्द्रा र स्नायु प्रणालीको तालमेल बिग्रँदा पेट फुल्ने, मानसिक तनाव हुँदा दिसा लाग्ने वा कब्जियत हुने हुन्छ। डा. चन्दन सिंह सहानुभूतिपूर्ण परामर्श र खानपान सुधारबाट स्थायी राहत दिलाउनुहुन्छ।',
    symptoms: [
      { en: 'Alternating diarrhea and chronic constipation', np: 'कहिले पखाला कहिले कडा कब्जियत' },
      { en: 'Persistent bloating, gas, and abdominal fullness', np: 'पेट ढुस्स परेर फुल्ने र ग्यास भरिने' },
      { en: 'Urgent morning bathroom trips or incomplete evacuation', np: 'बिहान उठ्नासाथ हतारिएर दिसा जानुपर्ने' },
    ],
    careApproach: [
      { en: 'Gut-brain axis explanation and reassurance', np: 'आन्द्रा र तनावको सम्बन्धबारे स्पष्ट बुझाउने' },
      { en: 'Customized dietary fiber and hydration adjustments', np: 'फाइबर युक्त खाना र पानी पिउने वैज्ञानिक तालिका' },
      { en: 'Spasm-relieving and motility-regulating therapies', np: 'आन्द्राको चाल सन्तुलन गर्ने सुरक्षित औषधि' },
    ],
    whenToWorry: {
      en: 'Blood or mucus in stool, awakening from sleep with diarrhea, or age over 50 with new bowel changes.',
      np: 'दिसामा रगत वा सिंगान आउनु, राति सुतेको बेला दिसा लाग्नु, वा अचानक दिसाको बानी बदल्लिनु।',
    },
  },
];

interface ServiceModalProps {
  service: DigestiveService | null;
  onClose: () => void;
  isNepali?: boolean;
}

export function ServiceModal({ service, onClose, isNepali = false }: ServiceModalProps) {
  if (!service) return null;

  const waUrl = `https://wa.me/9779848044146?text=${encodeURIComponent(
    isNepali
      ? `नमस्ते डा. चन्दन सिंह ज्यू, म "${service.titleNp}" सम्बन्धी जानकारी र परामर्श लिन चाहन्छु।`
      : `Namaste Dr. Chandan Singh, I would like to consult/inquire about "${service.titleEn}".`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-2xl transition-all"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--fg)',
          border: '1px solid var(--border)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-3 border-b border-[var(--border)]">
          <div className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-xl bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center text-xl shrink-0">
              {service.icon || '🩺'}
            </span>
            <div>
              <h2 className="font-display text-lg font-medium leading-snug">
                {isNepali ? service.titleNp : service.titleEn}
              </h2>
              <p className="text-xs text-[var(--muted-fg)] mt-0.5">
                {isNepali ? service.subtitleNp : service.subtitleEn}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[var(--muted)] text-[var(--muted-fg)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm">
          {/* Overview */}
          <p className="text-xs leading-relaxed text-[var(--fg)]">
            {isNepali ? service.descriptionNp : service.descriptionEn}
          </p>

          {/* Key Indications / Symptoms */}
          <div className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)] mb-2">
              {service.category === 'facility'
                ? isNepali
                  ? 'मुख्य सेवा तथा सुविधाहरू'
                  : 'Key Indications & Facilities Provided'
                : isNepali
                ? 'सामान्य लक्षण वा जाँचको आवश्यकता'
                : 'Indications & Common Symptoms'}
            </h3>
            <div className="space-y-1.5">
              {service.symptoms.map((s, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>{isNepali ? s.np : s.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Approach / Facility Features */}
          <div className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-fg)] mb-2">
              {isNepali ? 'संजीवनी कलेज र डा. सिंहको पद्धति' : 'Hospital Protocol & Clinical Care'}
            </h3>
            <div className="space-y-1.5">
              {service.careApproach.map((c, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-1.5" />
                  <span>{isNepali ? c.np : c.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning signs / Emergency info */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-400 mb-1">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>
                {service.category === 'facility'
                  ? isNepali
                    ? 'आकस्मिक सम्पर्क'
                    : 'Emergency Access'
                  : isNepali
                  ? 'कहिले तुरुन्त अस्पताल जाने?'
                  : 'When to Seek Urgent Medical Care:'}
              </span>
            </div>
            <p className="text-[var(--fg)] leading-relaxed">
              {isNepali ? service.whenToWorry.np : service.whenToWorry.en}
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-medium transition-all shadow-sm text-[var(--accent-fg)]"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>
                {isNepali ? 'यस सम्बन्धी परामर्श / जानकारी लिनुहोस्' : 'Inquire / Book for this Service'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
