/**
 * chatbot-tests.js - Automated Test Suite for Fusfusa Offline Chatbot
 * 66 Comprehensive Test Cases covering all aspects:
 * - Direct queries
 * - Inflections & declensions
 * - Typos (Fuzzy Matching)
 * - Latin transliteration
 * - Multi-intent queries
 * - Contextual follow-ups (chatSessionContext)
 * - Age detection (digits, word numbers, multi-children)
 * - Out of scope & privacy guard
 * - Specific topics (free trial, mentors, showcase, upcoming, schedule, slogans)
 */

const TEST_CASES = [
  // 1. ძირითადი კითხვები სწორი ფორმით (1-10)
  {
    id: "T01",
    category: "სწორი ფორმა",
    query: "რა ღირს სწავლა და ვორქშოფები?",
    expectedTopic: "ფასები",
    mustContain: ["50", "200", "120", "ლარი"]
  },
  {
    id: "T02",
    category: "სწორი ფორმა",
    query: "სად მდებარეობს თქვენი სახელოსნო?",
    expectedTopic: "ლოკაცია",
    mustContain: ["რუსთაველ", "რუსთავ", "Google Maps"]
  },
  {
    id: "T03",
    category: "სწორი ფორმა",
    query: "ვინ არიან სახელოსნოს ხელმძღვანელები?",
    expectedTopic: "მენტორები",
    mustContain: ["ირმა დვალიშვილი", "ზიკა დვალიშვილი"]
  },
  {
    id: "T04",
    category: "სწორი ფორმა",
    query: "მომიყევი პროექტ „ფუსფუსა ფუტკრებზე“",
    expectedTopic: "ფუსფუსა ფუტკრები",
    mustContain: ["ფუტკრები", "200 ლარი", "4 კვირა"]
  },
  {
    id: "T05",
    category: "სწორი ფორმა",
    query: "რა არის პროექტი „ყინულოვანი სამყარო“?",
    expectedTopic: "ყინულოვანი სამყარო",
    mustContain: ["ყინულოვანი სამყარო", "200 ლარი"]
  },
  {
    id: "T06",
    category: "სწორი ფორმა",
    query: "რა არის ვორქშოფი „მოფუსფუსე პინგვინი“?",
    expectedTopic: "მოფუსფუსე პინგვინი",
    mustContain: ["პინგვინი", "50 ლარი"]
  },
  {
    id: "T07",
    category: "სწორი ფორმა",
    query: "მანათობელი საახალწლო ბარათი",
    expectedTopic: "საახალწლო ბარათი",
    mustContain: ["ბარათი", "50 ლარი"]
  },
  {
    id: "T08",
    category: "სწორი ფორმა",
    query: "თიხის მანათობელი ეკო-ლამპიონი",
    expectedTopic: "ეკო-ლამპიონი",
    mustContain: ["ლამპიონ", "50 ლარი"]
  },
  {
    id: "T09",
    category: "სწორი ფორმა",
    query: "რას ისწავლის ბავშვი რობოტიკის წრეში?",
    expectedTopic: "რობოტიკის წრე",
    mustContain: ["რობოტიკ", "120 ლარი"]
  },
  {
    id: "T10",
    category: "სწორი ფორმა",
    query: "როგორ დავრეგისტრირდეთ?",
    expectedTopic: "რეგისტრაცია",
    mustContain: ["რეგისტრაცია", "contact.html#booking"]
  },

  // 2. ქართული ბრუნვები და თანდებულები (11-18)
  {
    id: "T11",
    category: "ბრუნვები/თანდებულები",
    query: "პინგვინებზე რას მეტყვით?",
    expectedTopic: "მოფუსფუსე პინგვინი",
    mustContain: ["პინგვინ"]
  },
  {
    id: "T12",
    category: "ბრუნვები/თანდებულები",
    query: "ფუტკრებისთვის რა მასალებია საჭირო?",
    expectedTopic: "ფუსფუსა ფუტკრები / მასალები",
    mustContain: ["ფუტკრ", "მასალ"]
  },
  {
    id: "T13",
    category: "ბრუნვები/თანდებულები",
    query: "რობოტიკაში რას ასწავლით?",
    expectedTopic: "რობოტიკის წრე",
    mustContain: ["რობოტიკ"]
  },
  {
    id: "T14",
    category: "ბრუნვები/თანდებულები",
    query: "ირმასთან რა ისწავლება?",
    expectedTopic: "ირმა დვალიშვილი",
    mustContain: ["ირმა"]
  },
  {
    id: "T15",
    category: "ბრუნვები/თანდებულები",
    query: "ზიკასგან რა უნარებს შეიძენს ბავშვი?",
    expectedTopic: "ზიკა დვალიშვილი",
    mustContain: ["ზიკა"]
  },
  {
    id: "T16",
    category: "ბრუნვები/თანდებულები",
    query: "ლამპიონისთვის რა ასაკია საჭირო?",
    expectedTopic: "თიხის ლამპიონი",
    mustContain: ["ლამპიონ"]
  },
  {
    id: "T17",
    category: "ბრუნვები/თანდებულები",
    query: "რუსთაველის ქუჩაზე როგორ მოვიდეთ?",
    expectedTopic: "ლოკაცია",
    mustContain: ["რუსთაველ", "Google Maps"]
  },
  {
    id: "T18",
    category: "ბრუნვები/თანდებულები",
    query: "სკოლის ექსკურსიისთვის ჯგუფური რეგისტრაცია გაქვთ?",
    expectedTopic: "ჯგუფური ვიზიტები",
    mustContain: ["ჯგუფური რეგისტრაცია", "15"]
  },

  // 3. ბეჭდვის შეცდომები (Fuzzy Matching) (19-26)
  {
    id: "T19",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "რობოტკა რა ღირს?",
    expectedTopic: "რობოტიკა / ფასი",
    mustContain: ["რობოტიკ", "120"]
  },
  {
    id: "T20",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "პინკვინის ვორქშოფი",
    expectedTopic: "მოფუსფუსე პინგვინი",
    mustContain: ["პინგვინ", "50"]
  },
  {
    id: "T21",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "ფუტკარზე მომიყევი",
    expectedTopic: "ფუსფუსა ფუტკრები",
    mustContain: ["ფუტკრ"]
  },
  {
    id: "T22",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "მისამარტი სად არის?",
    expectedTopic: "მისამართი",
    mustContain: ["რუსთაველ"]
  },
  {
    id: "T23",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "ლამპიონზე რა ასაკია?",
    expectedTopic: "თიხის ლამპიონი",
    mustContain: ["ლამპიონ"]
  },
  {
    id: "T24",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "საახალწლო ბარათზე",
    expectedTopic: "საახალწლო ბარათი",
    mustContain: ["ბარათი", "50"]
  },
  {
    id: "T25",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "ყინულოვანზე მომიყევით",
    expectedTopic: "ყინულოვანი სამყარო",
    mustContain: ["ყინულოვან"]
  },
  {
    id: "T26",
    category: "Fuzzy / ბეჭდვის შეცდომა",
    query: "მენტორები ვინ არიან?",
    expectedTopic: "მენტორები",
    mustContain: ["ირმა", "ზიკა"]
  },

  // 4. ლათინური ტრანსლიტერაცია (27-34)
  {
    id: "T27",
    category: "ტრანსლიტერაცია",
    query: "fasi ra aris?",
    expectedTopic: "ფასები",
    mustContain: ["50", "200", "120"]
  },
  {
    id: "T28",
    category: "ტრანსლიტერაცია",
    query: "sad xart?",
    expectedTopic: "ლოკაცია",
    mustContain: ["რუსთაველ", "რუსთავ"]
  },
  {
    id: "T29",
    category: "ტრანსლიტერაცია",
    query: "robotika ra girs?",
    expectedTopic: "რობოტიკა",
    mustContain: ["რობოტიკ", "120"]
  },
  {
    id: "T30",
    category: "ტრანსლიტერაცია",
    query: "pingvini",
    expectedTopic: "მოფუსფუსე პინგვინი",
    mustContain: ["პინგვინ", "50"]
  },
  {
    id: "T31",
    category: "ტრანსლიტერაცია",
    query: "gamarjoba",
    expectedTopic: "მისალმება",
    mustContain: ["გამარჯობა", "ეკო"]
  },
  {
    id: "T32",
    category: "ტრანსლიტერაცია",
    query: "madloba",
    expectedTopic: "მადლობა",
    mustContain: ["არაფრის"]
  },
  {
    id: "T33",
    category: "ტრანსლიტერაცია",
    query: "futkrebis proeqti",
    expectedTopic: "ფუტკრები",
    mustContain: ["ფუტკრ", "200"]
  },
  {
    id: "T34",
    category: "ტრანსლიტერაცია",
    query: "registracia rogor xdeba?",
    expectedTopic: "რეგისტრაცია",
    mustContain: ["რეგისტრაცია"]
  },

  // 5. მრავალთემიანი კითხვები (35-42)
  {
    id: "T35",
    category: "მრავალთემიანი",
    query: "პინგვინის ვორქშოფი რა ღირს და რა ასაკისთვისაა?",
    expectedTopic: "პინგვინი (ფასი + ასაკი)",
    mustContain: ["50 ლარი", "7–10"]
  },
  {
    id: "T36",
    category: "მრავალთემიანი",
    query: "ფუტკრების პროექტი რა ღირს და რამდენ ხანს გრძელდება?",
    expectedTopic: "ფუტკრები (ფასი + ხანგრძლივობა)",
    mustContain: ["200 ლარი", "4 კვირა"]
  },
  {
    id: "T37",
    category: "მრავალთემიანი",
    query: "საახალწლო ბარათი რა ღირს და რა ასაკისაა?",
    expectedTopic: "ბარათი (ფასი + ასაკი)",
    mustContain: ["50 ლარი", "6–14"]
  },
  {
    id: "T38",
    category: "მრავალთემიანი",
    query: "თიხის ლამპიონი რა ღირს?",
    expectedTopic: "ლამპიონი (ფასი)",
    mustContain: ["50 ლარი"]
  },
  {
    id: "T39",
    category: "მრავალთემიანი",
    query: "ყინულოვანი სამყარო რა ასაკისთვისაა და რა ღირს?",
    expectedTopic: "ყინულოვანი სამყარო (ასაკი + ფასი)",
    mustContain: ["8–14", "200 ლარი"]
  },
  {
    id: "T40",
    category: "მრავალთემიანი",
    query: "რობოტიკის წრე რა ღირს და რა ასაკიდანაა?",
    expectedTopic: "რობოტიკა (ფასი + ასაკი)",
    mustContain: ["120 ლარი", "8–15"]
  },
  {
    id: "T41",
    category: "მრავალთემიანი",
    query: "სად ხართ და რა ტელეფონის ნომერი გაქვთ?",
    expectedTopic: "კონტაქტი + ლოკაცია",
    mustContain: ["რუსთაველ", "+995 514 01 88 33"]
  },
  {
    id: "T42",
    category: "მრავალთემიანი",
    query: "რა მასალებია საჭირო და რა ღირს?",
    expectedTopic: "მასალები + ფასები",
    mustContain: ["მასალა", "შედის"]
  },

  // 6. კონტექსტზე დამოკიდებული დიალოგი (43-48)
  {
    id: "T43",
    category: "კონტექსტური ჯაჭვი",
    setupQuery: "მომიყევი ყინულოვან სამყაროზე",
    query: "და ფასი?",
    expectedTopic: "კონტექსტი: ყინულოვანი სამყაროს ფასი",
    mustContain: ["200 ლარი"]
  },
  {
    id: "T44",
    category: "კონტექსტური ჯაჭვი",
    query: "რა ასაკისთვისაა?",
    expectedTopic: "კონტექსტი: ყინულოვანი სამყაროს ასაკი",
    mustContain: ["8–14"]
  },
  {
    id: "T45",
    category: "კონტექსტური ჯაჭვი",
    query: "რამდენ ხანს გრძელდება?",
    expectedTopic: "კონტექსტი: ყინულოვანი სამყაროს ხანგრძლივობა",
    mustContain: ["4 კვირა"]
  },
  {
    id: "T46",
    category: "კონტექსტური ჯაჭვი",
    setupQuery: "რა არის მოფუსფუსე პინგვინი?",
    query: "ხოლო ფასი?",
    expectedTopic: "კონტექსტი: პინგვინის ფასი",
    mustContain: ["50 ლარი"]
  },
  {
    id: "T47",
    category: "კონტექსტური ჯაჭვი",
    query: "რა მასალები სჭირდება?",
    expectedTopic: "კონტექსტი: პინგვინის მასალები",
    mustContain: ["მასალა"]
  },
  {
    id: "T48",
    category: "კონტექსტური ჯაჭვი",
    query: "სად ტარდება?",
    expectedTopic: "კონტექსტი: სახელოსნოს ლოკაცია",
    mustContain: ["რუსთაველ"]
  },

  // 7. ასაკობრივი ამოცნობა (49-55)
  {
    id: "T49",
    category: "ასაკი",
    query: "7 წლის",
    expectedTopic: "რეკომენდაცია 7 წლისთვის",
    mustContain: ["7 წლის", "ვორქშოფები"]
  },
  {
    id: "T50",
    category: "ასაკი",
    query: "ჩემი შვილი არის 10 წლის",
    expectedTopic: "რეკომენდაცია 10 წლისთვის",
    mustContain: ["10 წლის", "პროექტები"]
  },
  {
    id: "T51",
    category: "ასაკი",
    query: "13 წლის მოზარდი",
    expectedTopic: "რეკომენდაცია 13 წლისთვის",
    mustContain: ["13 წლის", "რობოტიკ"]
  },
  {
    id: "T52",
    category: "ასაკი (სიტყვიერი)",
    query: "შვიდი წლის",
    expectedTopic: "რეკომენდაცია შვიდი წლისთვის",
    mustContain: ["7 წლის", "ვორქშოფები"]
  },
  {
    id: "T53",
    category: "ასაკი (სიტყვიერი)",
    query: "ათი წლისაა",
    expectedTopic: "რეკომენდაცია ათი წლისთვის",
    mustContain: ["10 წლის", "პროექტები"]
  },
  {
    id: "T54",
    category: "ასაკი (მრავალშვილიანი)",
    query: "ორი შვილი მყავს, 6 და 11 წლის",
    expectedTopic: "ცალ-ცალკე რეკომენდაცია 6 და 11 წლისთვის",
    mustContain: ["6 წლის", "11 წლის"]
  },
  {
    id: "T55",
    category: "ასაკი (ზოგადი)",
    query: "რა ასაკიდან იღებთ ბავშვებს?",
    expectedTopic: "ზოგადი ასაკობრივი ჯგუფები",
    mustContain: ["6 წლიდან", "15 წლამდე"]
  },

  // 8. საიტს გარეთა და უსაფრთხოების თემები (56-60)
  {
    id: "T56",
    category: "OutOfScope",
    query: "როგორი ამინდი იქნება ხვალ?",
    expectedTopic: "არათემატური",
    mustContain: ["ფუსფუსას ასისტენტი", "მხოლოდ"]
  },
  {
    id: "T57",
    category: "OutOfScope",
    query: "პოლიტიკაში ვის უჭერთ მხარს?",
    expectedTopic: "არათემატური",
    mustContain: ["ფუსფუსას ასისტენტი"]
  },
  {
    id: "T58",
    category: "OutOfScope",
    query: "მირჩიეთ წამალი გაციებისთვის",
    expectedTopic: "არათემატური",
    mustContain: ["ფუსფუსას ასისტენტი"]
  },
  {
    id: "T59",
    category: "OutOfScope",
    query: "საშინაო დავალება გამიკეთე",
    expectedTopic: "არათემატური",
    mustContain: ["ფუსფუსას ასისტენტი"]
  },
  {
    id: "T60",
    category: "უსაფრთხოება / პირადი მონაცემი",
    query: "ჩემი ტელეფონია 599 12 34 56, ჩამწერეთ",
    expectedTopic: "უსაფრთხოება",
    mustContain: ["უსაფრთხოებისთვის", "ნუ გააზიარებთ"]
  },

  // 9. დამატებითი სპეციფიკური თემები (61-66)
  {
    id: "T61",
    category: "სპეციფიკური თემა",
    query: "საცდელი ვიზიტი უფასოა?",
    expectedTopic: "უფასო გაცნობითი ვიზიტი",
    mustContain: ["უფასოა"]
  },
  {
    id: "T62",
    category: "სპეციფიკური თემა",
    query: "რა სამუშაო საათები გაქვთ?",
    expectedTopic: "სამუშაო საათები",
    mustContain: ["10:00 – 19:00", "ორშაბათი"]
  },
  {
    id: "T63",
    category: "სპეციფიკური თემა",
    query: "რა არის სახელოსნოს მისია და სლოგანი?",
    expectedTopic: "მისია & დევიზები",
    mustContain: ["ვუფრთხილდებით, ვზრუნავთ, ვქმნით", "მოთამაშე"]
  },
  {
    id: "T64",
    category: "სპეციფიკური თემა",
    query: "შეცდომებზე რა მიდგომა გაქვთ?",
    expectedTopic: "შეცდომებისადმი მიდგომა",
    mustContain: ["შეცდომა არ ისჯება"]
  },
  {
    id: "T65",
    category: "სპეციფიკური თემა",
    query: "რა სამომავლო პროექტები გექნებათ?",
    expectedTopic: "მომავალი პროექტები",
    mustContain: ["სათბური", "წყალქვეშა", "კოსმოსური"]
  },
  {
    id: "T66",
    category: "სპეციფიკური თემა",
    query: "რას ქმნიან მოსწავლეები გამოფენაზე?",
    expectedTopic: "მოსწავლეთა ნამუშევრები (Showcase)",
    mustContain: ["ანა", "სანდრო", "დათო"]
  }
];

function runChatbotTests() {
  const results = [];
  let passedCount = 0;
  let failedCount = 0;

  TEST_CASES.forEach((tc) => {
    // თუ წინასწარი კონტექსტი სჭირდება
    if (tc.setupQuery) {
      generateFussusaAiAnswers(tc.setupQuery);
    }

    const answers = generateFussusaAiAnswers(tc.query);
    const combinedText = answers.map(a => a.text).join(" ");

    // შემოწმება: შეიცავს თუ არა ყველა სავალდებულო ფრაგმენტს
    const missing = [];
    tc.mustContain.forEach(req => {
      if (!combinedText.includes(req)) {
        missing.push(req);
      }
    });

    const isPass = missing.length === 0 && answers.length > 0;
    if (isPass) passedCount++;
    else failedCount++;

    results.push({
      id: tc.id,
      category: tc.category,
      query: tc.query,
      expectedTopic: tc.expectedTopic,
      status: isPass ? "PASS" : "FAIL",
      missing: missing,
      responseSnippet: combinedText.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().substring(0, 80) + "..."
    });
  });

  return {
    total: TEST_CASES.length,
    passed: passedCount,
    failed: failedCount,
    rate: Math.round((passedCount / TEST_CASES.length) * 100) + "%",
    results: results
  };
}

if (typeof window !== "undefined") {
  window.runChatbotTests = runChatbotTests;
  window.TEST_CASES = TEST_CASES;
}
