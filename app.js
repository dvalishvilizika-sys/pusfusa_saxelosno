/**
 * app.js - სახელოსნო ფუსფუსა (Workshop Fussusa)
 * Lightweight, accessible interactions for the light & warm landing page.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCurriculum();
  initProjects();
  initBookingForm();
  initFloatingCompanions();
});

/**
 * Mobile Navigation Toggle & Smooth Anchor Links
 */
function initNavigation() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.textContent = isOpen ? "✕" : "☰";
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        if (navToggle) {
          navToggle.setAttribute("aria-expanded", "false");
          navToggle.textContent = "☰";
        }
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/**
 * Realistic Curriculum Data & Syllabus Modal
/**
 * Realistic Curriculum Data & Syllabus Modal
 * 3 Primary Formats: ერთ თვიანი პროექტები, ერთ დღიანი ვორქშოფები, რობოტიკის წრე
 */
const syllabusData = {
  // 1. ერთ დღიანი ვორქშოფი: მანათობელი საახალწლო ბარათი (მთავარი ნიმუში)
  "workshop-card": {
    title: "🎄 ვორქშოფი: „მანათობელი საახალწლო ბარათი“",
    age: "6–14 წელი",
    pillar: "⚡ ერთ დღიანი ვორქშოფი (დედამიწა + ტექნოლოგიები)",
    schedule: "1 შეხვედრა • 1.5 – 2 საათი",
    description: "ეს იდეალური ერთ დღიანი პროექტია, რომელიც კოდირების გარეშე ხსნის ელექტრონიკის საწყისებს და ბავშვებს მყისიერ, თვალსაჩინო შედეგს აძლევს.\n\nსაჭირო მასალები: სქელი ფერადი ქაღალდი ან მუყაო, ფანქრები/მაკრატელი, სპილენძის წებოვანი ლენტი (Copper tape), პატარა LED ნათურა, 3V-იანი ბრტყელი ელემენტი (CR2032).",
    modules: [
      "1. სახელოსნოს ნაწილი („ფუსფუსა დედამიწა“): ბავშვები იფიქრებენ და ქმნიან ბარათის მთავარ დიზაინს. მაგალითად, ხატავენ ნაძვის ხეს, რომლის წვერზეც ვარსკვლავი უნდა აინთოს, ან ირემს, რომელსაც ცხვირი გაუნათდება. ამზადებენ ქაღალდს, ჭრიან დეტალებს და აფორმებენ ვიზუალს.",
      "2. ტექნოლოგიური ნაწილი („ფუსფუსა ტექნოლოგიები“): მოსწავლეები პრაქტიკაში ეცნობიან „შეკრული წრედის“ (Closed Circuit) მუშაობის პრინციპს.",
      "3. წრედის მონტაჟი: ბარათის შიდა მხარეს აკრავენ სპილენძის ლენტს (Copper tape), რომელიც დენის გამტარია.",
      "4. ელექტროკავშირი: აკავშირებენ ელემენტის პლუსსა და მინუსს LED ნათურის შესაბამის ფეხებთან.",
      "5. შედეგი: როდესაც ბავშვი ბარათს კეცავს ან სპეციალურად მონიშნულ ღილაკზე თითს აჭერს, წრედი იკვრება და ქაღალდზე დახატული ფიგურა ჯადოსნურად ნათდება. ბავშვს სახლში მიაქვს თავისი შექმნილი, ინტერაქტიული საახალწლო საჩუქარი!"
    ],
    skills: ["ელექტრონიკის საწყისები კოდირების გარეშე", "Closed Circuit (შეკრული წრედი)", "ქაღალდის ინჟინერია", "ნატიფი მოტორიკა და სიზუსტე", "შემოქმედებითი წარმოსახვა"]
  },

  // 2. ერთ თვიანი ინტეგრირებული პროექტი: ფუსფუსა ფუტკრები (მთავარი ნიმუში)
  "project-bees": {
    title: "ინტეგრირებული პროექტი „ფუსფუსა ფუტკრები“ 🐝",
    age: "8–12 წელი",
    pillar: "📅 ერთ თვიანი პროექტი (დედამიწა + ტექნოლოგიები)",
    schedule: "3 კვირა (6 შეხვედრა • 3-საათიანი მოდელი)",
    description: "უნიკალური 3-საათიანი ფორმატი: 30 წთ შემეცნება (ფუტკრების ანატომია, ეკოსისტემები და მცენარეების დარგვა), 1.5 სთ სახელოსნო (ხის ნამდვილი სკა, თიხის ყვავილები, ნატიფი მოტორიკა) და 1 სთ რობოტიკა (Micro:bit ტემპერატურის კონტროლი და 2D ანიმაცია). საზეიმო ფინალი მშობლებთან ერთად!",
    modules: [
      "1. 30 წთ შემეცნება („დედამიწა“): ფუტკრების ანატომია, როლი ბუნებაში, სისტემური აზროვნება და მცენარეების დარგვა",
      "2. 1.5 სთ სახელოსნო („დედამიწა“): ხის დამუშავება, ნამდვილი სკის მაკეტის აწყობა და თიხის ყვავილების ძერწვა",
      "3. 1 სთ რობოტიკა & ანიმაცია („ტექნოლოგიები“): micro:bit სენსორით ტემპერატურისა და ტენიანობის გაზომვა",
      "4. 2D ციფრული ანიმაცია: ბავშვების მიერ დახატული ფუტკრებისა და გარემოს გაცოცხლება ეკრანზე",
      "5. საზეიმო ფინალი: საერთო დიდი მაკეტის პრეზენტაცია მშობლებთან ერთად, კოდების ჩვენება დიდ ეკრანზე და სერტიფიკატები!"
    ],
    skills: ["ეკო-ტექნოლოგიური სინთეზი", "სისტემური აზროვნება", "ხის ოსტატობა & თიხა", "micro:bit კოდირება", "2D ანიმაცია", "გუნდური მუშაობა"]
  },

  // 3. რობოტიკისა და კოდირების წრე (MakeCode, Scratch, Micro:bit, Arduino & Python) 🤖
  "robotics-club": {
    title: "რობოტიკისა და კოდირების წრე (MakeCode, Scratch, Micro:bit, Arduino & Python) 🤖",
    age: "8–11 და 12–15 წელი",
    pillar: "🤖 რობოტიკისა და პროგრამირების წრე (ტექნოლოგიები)",
    schedule: "კვირაში 2 შეხვედრა • 2 საათი",
    description: "სრული გზა ვიზუალური ბლოკური პროგრამირებიდან (Code.org, CodeMonkey, Scratch, MakeCode) ტექსტურ კოდირებასა (Python-ის საწყისები) და რეალურ მიკროკონტროლერებამდე (Micro:bit, Arduino). ბავშვები შეისწავლიან, როგორ მუშაობს ციფრული მექანიზმები შიგნიდან, აკავშირებენ ტექნოლოგიებს ბუნებასთან (ნიადაგის ტენიანობის სენსორები, მოძრაობის სენსორები & სერვო ძრავები) და საკუთარ იდეებს ინტერაქტიულ პროექტებად გარდაქმნიან.",
    modules: [
      "1. ვიზუალური პროგრამირების საფუძვლები: Code.org და CodeMonkey ალგორითმული აზროვნების, ციკლებისა და პირობითი ნიშნების განსავითარებლად.",
      "2. თამაშებისა და ანიმაციების შექმნა: ლოგიკური და ბლოკური კოდირება Scratch-ში, საკუთარი ციფრული სამყაროს ფორმირება.",
      "3. უსაფრთხო ელექტრონიკა: Micro:bit და Arduino მიკროკონტროლერების გაცნობა, MakeCode-ის გამოყენება და მარტივი ელექტრონული წრედების აწყობა.",
      "4. ეკო-ტექნოლოგიური სინთეზი და მექანიზმები: ნიადაგის ტენიანობის, სინათლისა და ტემპერატურის სენსორების დაკავშირება სერვო ძრავებთან და მოძრაობის სენსორებთან.",
      "5. გადასვლა ტექსტურ პროგრამირებაზე (უფროსი ჯგუფისთვის): Python-ის საწყისები — სინტაქსის გაცნობა და ვიზუალური ალგორითმების ტექსტურ კოდში თარგმნა.",
      "6. ფინალური გუნდური პროექტი: ჭკვიანი ინტერაქტიული სისტემის შექმნა, როლების გადანაწილება (კოდის მწერალი, ინჟინერი, დიზაინერი) და პრეზენტაცია."
    ],
    skills: [
      "ალგორითმული და ლოგიკური აზროვნება",
      "ვიზუალური კოდირება და Python-ის საფუძვლები",
      "ეკო-ტექნოლოგიური სინთეზი",
      "ნატიფი მოტორიკა და სიზუსტე",
      "რობოტიკა და სენსორების მართვა",
      "ტექნოლოგიური თავდაჯერებულობა"
    ]
  },

  // 4. ერთ თვიანი პროექტი: ყინულოვანი სამყარო
  "project-ice-world": {
    title: "ინტეგრირებული პროექტი „ყინულოვანი სამყარო“ ❄️🧊🐧",
    age: "8–14 წელი",
    pillar: "📅 ერთ თვიანი პროექტი (დედამიწა + ტექნოლოგიები)",
    schedule: "4 კვირა (8 შეხვედრა • 3 საათი)",
    description: "არქტიკისა და ანტარქტიდის ყინულოვანი სამყაროსა და იქ მცხოვრები ცხოველების კვლევა, პოლარული ბაზის, იგლუებისა და ყინულმჭრელი გემის მაკეტების შექმნა, Micro:bit-ით ტემპერატურის მონიტორინგი და LED ანიმაციები, ფოტოების ციფრული გაცოცხლება და მოფუსფუსე ვიბრო-პინგვინების ინტეგრირება ერთიან გრანდიოზულ მაკეტში.",
    modules: [
      "კვირა 1: არქტიკისა და ანტარქტიდის შემეცნება, „მინი-მყინვარის“ შექმნა, Micro:bit & ტემპერატურის სენსორი და LED ანიმაციები",
      "კვირა 2: პოლარული ცხოველების გამოძერწვა, იგლუები და ყინულმჭრელი გემი, ამბის შექმნა („ერთი დღე პოლარული დათვის ცხოვრებაში“) და ფოტოების ციფრული გაცოცხლება",
      "კვირა 3: მოფუსფუსე (ვიბრაციული) პინგვინის მექანიზმის ინტეგრირება დიდ მაკეტში, ძრავებისა და წრედების ტესტირება Micro:bit-თან ერთად და საპრეზენტაციო სცენარის დამუშავება",
      "კვირა 4: ტემპერატურის დინამიკის ანალიზი მთელი თვის მანძილზე, მაკეტისა და კოდის ფინალური დახვეწა და გრანდიოზული საზეიმო პრეზენტაცია-გამოფენა მშობლებთან ერთად!"
    ],
    skills: ["პოლარული ეკოლოგია & კვლევა", "მაკეტირება (მუყაო, ფოლგა, თიხა)", "Micro:bit & ტემპერატურის სენსორი", "სტოპ-მოუშენ ფოტო-ანიმაცია", "კინეტიკური ინჟინერია & ვიბროძრავები", "გუნდური პრეზენტაცია"]
  },

  // 5. ერთ დღიანი ვორქშოფი: მოფუსფუსე პინგვინი ყინულზე
  "workshop-penguin": {
    title: "🐧 ვორქშოფი: „მოფუსფუსე პინგვინი ყინულზე“",
    age: "7–10 წელი",
    pillar: "⚡ ერთ დღიანი ვორქშოფი (დედამიწა + ტექნოლოგიები)",
    schedule: "1 შეხვედრა • 1.5 – 2 საათი",
    description: "კინეტიკური ინჟინერიისა და ბუნებისმეტყველების იდეალური სინთეზი ერთდღიანი ვორქშოფისთვის, რომელიც სრულად ემსახურება „ფუსფუსა სახელოსნოს“ მთავარ პრინციპებს.\n\n📦 საჭირო მასალები:\n• შემოქმედებითი ნაწილისთვის: სქელი მუყაო (ბაზისთვის), შავი და თეთრი ფერადი ქაღალდები, წებო, მაკრატელი, ფოლგა ან გლუვი მუყაო (ყინულის იმიტაციისთვის).\n• ტექნოლოგიური ნაწილისთვის: 3V-იანი ბრტყელი ელემენტი (CR2032), მინი ვიბრაციული ძრავი სადენებით (Micro vibration motor), ორმხრივი წებოვანი ლენტი (სკოჩი).",
    modules: [
      "1. შემეცნებითი შესავალი (15 წთ): ბავშვები მსჯელობენ პოლარულ ეკოსისტემებზე. განიხილავენ, როგორ ეგუებიან პინგვინები ექსტრემალურ სიცივეს, რატომ გადაადგილდებიან ყინულზე მუცლით სრიალით და ფიზიკის მარტივი ელემენტი — ხახუნის ძალა (რატომ ვსრიალებთ ფოლგაზე უკეთ, ვიდრე ხაოიან მუყაოზე).",
      "2. „ფუსფუსა დედამიწა“ — შემოქმედებითი ეტაპი (40 წთ): მოსწავლეები მუყაოსგან ჭრიან პინგვინის მარტივ, კონტურულ ფორმას, რათა ფიგურა მყარი იყოს. აფორმებენ მას ფერადი ქაღალდებით, უკეთებენ თვალებს და ფრთებს. პარალელურად, დიდ მუყაოს დაფაზე აკრავენ ფოლგას და ქმნიან საერთო „ყინულის მოედანს“.",
      "3. „ფუსფუსა ტექნოლოგიები“ — მექანიზმის დამონტაჟება (30 წთ): ბავშვები ეცნობიან მარტივ ელექტრულ წრედს ეკრანისა და კოდირების გარეშე (პლუსი და მინუსი). პინგვინის ზურგზე ან მუცელზე ორმხრივი სკოჩით მყარად ამაგრებენ მინი ვიბრაციულ ძრავსა და 3V ელემენტს.",
      "4. გაცოცხლება და გართობა (20 წთ): წრედის შესაკვრელად მეორე სადენს ადებენ თავისუფალ პოლუსს და ამაგრებენ სკოჩის ნაჭრით — ძრავი იწყებს ვიბრაციას! მოსწავლეები სვამენ პინგვინებს ფოლგის „ყინულზე“, ფიგურები სწრაფად სრიალებენ და ეწყობა დაკვირვება და პინგვინების მხიარული რბოლა!"
    ],
    skills: ["კინეტიკური ინჟინერია", "მარტივი ელექტრული წრედი", "ხახუნის ფიზიკა & ეკოლოგია", "ნატიფი მოტორიკა & შემოქმედებითობა"]
  },

  // 6. ერთ დღიანი ვორქშოფი: თიხის მანათობელი ეკო-ლამპიონი
  "workshop-clay-lamp": {
    title: "ვორქშოფი: „თიხის მანათობელი ეკო-ლამპიონი“ 🕯️",
    age: "6–12 წელი",
    pillar: "⚡ ერთ დღიანი ვორქშოფი (დედამიწა + ტექნოლოგიები)",
    schedule: "1 შეხვედრა • 2 საათი",
    description: "თიხის პლასტიკისა და უსაფრთხო LED განათების შერწყმა. ბავშვები ბუნებრივი თიხისგან ძერწავენ გუმბათოვან ლამპიონს, ჭრიან ორნამენტებსა და ვარსკვლავებს, შიგნით კი ამონტაჟებენ ავტონომიურ უსაფრთხო მანათობელ მოდულს.",
    modules: [
      "1. ბუნებრივი თიხის ფირფიტების გაბრტყელება და ფორმის ამოყვანა",
      "2. ორნამენტული პერფორაცია: სინათლის გასასვლელი ჭრილების გაკეთება",
      "3. უსაფრთხო LED მოდულის მონტაჟი და სინათლის ეფექტების შემოწმება",
      "4. საკუთარი ხელით შექმნილი მაგიდის მყუდრო სანათი სახლში წასაღებად!"
    ],
    skills: ["თიხის ძერწვა", "სინათლისა და ჩრდილის გეომეტრია", "ნატიფი მოტორიკა", "თვითგამოხატვა"]
  }
};

// Aliases for backward compatibility
syllabusData["project-smart-city"] = syllabusData["project-ice-world"];
syllabusData["robotics-coding"] = syllabusData["robotics-club"];
syllabusData["woodcraft"] = syllabusData["eco-woodcraft"] = syllabusData["project-bees"];
syllabusData["clay-eco"] = syllabusData["clay-nature"] = syllabusData["workshop-clay-lamp"];
syllabusData["ai-kids"] = syllabusData["ai-basics"] = syllabusData["robotics-club"];
syllabusData["animation"] = syllabusData["drawing-animation"] = syllabusData["project-bees"];
syllabusData["computer-skills"] = syllabusData["robotics-club"];
syllabusData["workshop-vibrobot"] = syllabusData["penguin"] = syllabusData["workshop-penguin"];

function initCurriculum() {
  const filterBtns = document.querySelectorAll(".filter-btn, .filter-chip");
  const cards = document.querySelectorAll(".course-card");
  const modal = document.getElementById("syllabus-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  // Tab Filtering by Format & Categories
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const format = card.dataset.format || "";
        const category = card.dataset.category || card.dataset.pillar || "";
        const ages = card.dataset.ages || card.dataset.ageGroup || "";

        if (filter === "all" || format === filter || category.includes(filter) || ages.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Open Modal Details
  document.querySelectorAll(".open-details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const courseKey = btn.dataset.course;
      const data = syllabusData[courseKey];
      if (!data || !modal) return;

      document.getElementById("modal-title").textContent = data.title;
      document.getElementById("modal-age").textContent = `ასაკი: ${data.age}`;
      document.getElementById("modal-pillar").textContent = data.pillar;
      document.getElementById("modal-schedule").textContent = data.schedule;
      document.getElementById("modal-desc").innerHTML = escapeHtml(data.description).replace(/\n/g, "<br>");

      const modulesList = document.getElementById("modal-modules");
      modulesList.innerHTML = "";
      data.modules.forEach(m => {
        const li = document.createElement("li");
        li.textContent = m;
        modulesList.appendChild(li);
      });

      const skillsBox = document.getElementById("modal-skills");
      skillsBox.innerHTML = "";
      data.skills.forEach(s => {
        const span = document.createElement("span");
        span.className = "skill-tag";
        span.textContent = s;
        skillsBox.appendChild(span);
      });

      const regBtn = modal.querySelector(".btn-primary");
      if (regBtn) {
        regBtn.href = `contact.html?course=${encodeURIComponent(courseKey)}`;
      }

      let groupRegBtn = modal.querySelector(".modal-group-btn");
      if (courseKey.includes("workshop")) {
        if (!groupRegBtn && regBtn && regBtn.parentElement) {
          groupRegBtn = document.createElement("a");
          groupRegBtn.className = "modal-group-btn";
          groupRegBtn.style.cssText = "display: inline-block; margin-left: 10px; margin-top: 8px; padding: 12px 24px; border: 1.5px solid var(--color-blue); border-radius: var(--radius-full); color: var(--color-blue-dark); text-decoration: none; font-weight: 700; font-size: 0.94rem; background: #FFFFFF; transition: all 0.2s ease;";
          groupRegBtn.textContent = "👥 მთლიანი ჯგუფის რეგისტრაცია";
          groupRegBtn.onmouseover = () => { groupRegBtn.style.background = "var(--bg-tint-blue)"; };
          groupRegBtn.onmouseout = () => { groupRegBtn.style.background = "#FFFFFF"; };
          regBtn.parentElement.appendChild(groupRegBtn);
        }
        if (groupRegBtn) {
          groupRegBtn.style.display = "inline-block";
          groupRegBtn.href = `contact.html?course=${encodeURIComponent(courseKey)}&type=group`;
        }
      } else if (groupRegBtn) {
        groupRegBtn.style.display = "none";
      }

      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  // Close Modal
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

/**
 * Integrated Projects Syllabus & Modal Handler
 * Modular and expandable ("ეტაპობრივად დავამატებთ პროექტებს")
 */
const projectsData = {
  "fussusa-bees": {
    id: "fussusa-bees",
    title: "ინტეგრირებული პროექტი: „ფუსფუსა ფუტკრები“",
    badge: "🐝 პირველი ინტეგრირებული პროექტი",
    meta: {
      duration: "3 კვირა",
      meetings: "6 შეხვედრა (კვირაში 2 დღე)",
      dailyHours: "დღეში 3 საათი",
      age: "6–12 წელი"
    },
    tagline: "ფუტკრების ჯადოსნური სამყარო, მცენარეების დარგვა, მაკეტების შექმნა, micro:bit-ით ნიადაგის ტენიანობის კონტროლი და საკუთარი ანიმაციის გაცოცხლება!",
    weeks: [
      {
        weekNumber: 1,
        title: "კვირა 1: გაცნობა, თესვა & micro:bit-ის პირველი ნაბიჯები",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "ფუტკრების ცხოვრების შესახებ საუბარი: კითხვა/პასუხი",
                  "არსებული ცოდნის გაერთიანება და გაანალიზება",
                  "გაჩენილ, უპასუხო საკითხებზე ინფორმაციის მოძიება — შერეულ გუნდებად დაყოფა",
                  "ვსწავლობთ ინფორმაციის მოძიებას, დამუშავებასა და შენახვას",
                  "ძირითადი თემები: გარეული, შინაური, საცხოვრებელი გარემო, საკვები, თაფლის შეგროვება"
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "თემა: ქოთანი",
                  "ქოთნის მოხატვა და დეკორირება",
                  "ნიადაგის მომზადება და თესლის დარგვა"
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "თემა: მიკრობიტი (micro:bit) — პირველი ნაცნობობა მიკროკონტროლერთან",
                  "შეჯამება: მიღებული ინფორმაციის ცოდნად გარდაქმნა სახალისო ბლიც-კითხვებით"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას და ვრწყავთ ქოთნებს",
                  "ცოდნის გახსენება: სახალისო ბლიც-კითხვები",
                  "ფუტკრების გამოძერწვა და ყვავილების გამოჭრა"
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "სახელოსნოში შესაქმნელი მაკეტების შერჩევა: ა) გარეული ფუტკრების სკა, ბ) შინაური ფუტკრების სკა, ყვავილები",
                  "სახლში წასაღები მნიშვნელოვანი მესიჯი: რატომ არის მნიშვნელოვანი საცხოვრებელი გარემო ფუტკრებისთვის (მწერებისთვის); რა შეგვიძლია გავაკეთოთ გარემოზე ზრუნვისთვის"
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "micro:bit-ის სქემები და პირველი კოდირება",
                  "დღის შეჯამება და მიღებული შედეგების განხილვა"
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "კვირა 2: მაკეტების გაერთიანება, ამბის შექმნა & ციფრული ანიმაცია",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას, ვრწყავთ ქოთნებს",
                  "ცოდნის გახსენება: სახალისო ბლიც-კითხვები",
                  "მაკეტების დეტალების დასრულება"
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "ყველა მოსწავლის ნამუშევრის 1 დიდ ერთობლივ მაკეტად გაერთიანება",
                  "ამბის გამოგონება, პერსონაჟების ხასიათის შექმნა და ჩაწერა"
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "micro:bit-ის ფუნქციების გაფართოება",
                  "სცენარის ციფრული გადახედვა და როლების დაგეგმვა"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას, ვრწყავთ ქოთნებს",
                  "სცენარის გახსენება და საბოლოო დახვეწა",
                  "ფოტოების გადაღების ლოკაციებისა და რაკურსების შერჩევა"
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "შექმნილი მაკეტისა და პერსონაჟების პროფესიული ფოტოების გადაღება"
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "micro:bit და ტექნოლოგიური ხელსაწყოები",
                  "ფოტოების გაცოცხლება — ციფრული ანიმაციის ტექნოლოგიები"
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        title: "კვირა 3: კოდები დიდ ეკრანზე & საზეიმო ფინალი მშობლებთან ერთად",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ით დარგული მცენარეების ნიადაგის ტენიანობის გაზომვა, ქოთნების მორწყვა",
                  "ფოტოების გაცოცხლება და ციფრული ანიმაციის საბოლოო მონტაჟი"
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "პროექტის შეჯამება: საპრეზენტაციო სცენარის დამუშავება",
                  "საპრეზენტაციო როლების გადანაწილება ბავშვებს შორის"
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "რობოტიკა — მიღწეული შედეგების შეჯამება",
                  "საპრეზენტაციოდ მომზადება: პლანშეტიდან დიდ ეკრანზე ბავშვების მიერ შექმნილი კოდების გადატანა"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2: საზეიმო ფინალი & გამოფენა! 🎉",
            isGrandFinale: true,
            hours: [
              {
                badge: "საათი 1–1.5: შემეცნება & მზადება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას, ვრწყავთ ქოთნებს",
                  "ფუსფუსი: მშობლებთან შესახვედრად საგამოფენო სივრცის მომზადება"
                ]
              },
              {
                badge: "საათი 1.5–3: საზეიმო პრეზენტაცია & გართობა 🎊",
                badgeClass: "hour-badge-event",
                topics: [
                  "საზეიმო პრეზენტაცია და გამოფენა მშობლებთან ერთად",
                  "ერთობლივი გრანდიოზული მაკეტის ჩვენება",
                  "გაცოცხლებული ანიმაციისა და ბავშვების მიერ შექმნილი კოდების ჩვენება დიდ ეკრანზე",
                  "მხიარული შეჯამება, გართობა და სერტიფიკატების გადაცემა!"
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  "fussusa-polar": {
    id: "fussusa-polar",
    title: "ინტეგრირებული პროექტი: „ყინულოვანი სამყარო“",
    badge: "❄️ 1 თვიანი გრანდიოზული ინტეგრირებული პროექტი",
    contactValue: "ice-world-project",
    meta: {
      duration: "4 კვირა",
      meetings: "8 შეხვედრა (კვირაში 2 დღე)",
      dailyHours: "დღეში 3 საათი",
      age: "8–14 წელი"
    },
    tagline: "არქტიკისა და ანტარქტიდის კვლევა, პოლარული ბაზის, იგლუებისა და ყინულმჭრელი გემის მაკეტები, Micro:bit-ით ტემპერატურის მონიტორინგი, ფოტოების ციფრული გაცოცხლება და მოფუსფუსე ვიბრო-პინგვინების ინტეგრირება!",
    weeks: [
      {
        weekNumber: 1,
        title: "კვირა 1: პოლარული ეკოსისტემები, „მინი-მყინვარი“ & Micro:bit-ის სენსორი",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "ყინულოვანი სამყაროსა (არქტიკა და ანტარქტიდა) და იქ მცხოვრები ცხოველების შესახებ საუბარი: კითხვა/პასუხი.",
                  "არსებული ცოდნის გაერთიანება.",
                  "გაჩენილ, უპასუხო საკითხებზე ინფორმაციის მოძიება — შერეულ გუნდებად დაყოფა.",
                  "ვსწავლობთ ინფორმაციის მოძიებას, დამუშავებას, შენახვას.",
                  "ძირითადი თემები: პოლარული დათვები, პინგვინები, სელაპები, საცხოვრებელი გარემო (ყინული, წყალი), კვების ჯაჭვი და სითბოს შენარჩუნება."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "თემა: პოლარული ბაზა.",
                  "ყინულოვანი ეკოსისტემის მაკეტის საფუძვლის მომზადება (მუყაოსა და ფოლგის გამოყენებით), „მინი-მყინვარის“ შექმნა."
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "თემა: მიკრობიტი და ტემპერატურის სენსორი.",
                  "შეჯამება: მიღებული ინფორმაციის ცოდნად გარდაქმნა, სახალისო ბლიც-კითხვებით."
                ]
              }
            ]
          },
          {
            dayName: "დღე 2",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის გამოყენებით ვზომავთ ტემპერატურას ჩვენს „მინი-მყინვარზე“ და ვაკვირდებით ყინულის დნობის/შენარჩუნების პროცესს.",
                  "ცოდნის გახსენება: სახალისო ბლიც-კითხვები.",
                  "პოლარული ცხოველების გამოძერწვა / ყინულის ლოდების გამოჭრა."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "შევარჩევთ სახელოსნოში შესაქმნელ დამატებით დეტალებს: ა) იგლუები (თოვლის სახლები), ბ) ოკეანის ნაწილი და ყინულმჭრელი გემი.",
                  "სახლში წასაღები მნიშვნელოვანი მესიჯი: რატომ არის მნიშვნელოვანი ყინულოვანი გარემო დედამიწისთვის? რა არის გლობალური დათბობა და რა შეგვიძლია გავაკეთოთ გარემოზე საზრუნავად?"
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "მიკრობიტი (ტემპერატურის ცვლილების შესაბამისი ანიმაციების შექმნა LED ეკრანზე).",
                  "შეჯამება."
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "კვირა 2: მაკეტების გაერთიანება, ამბის შექმნა & ფოტოების გაცოცხლება",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის გამოყენებით ვზომავთ ტემპერატურას ჩვენს „მინი-მყინვარზე“ და ვაკვირდებით ყინულის მდგომარეობას.",
                  "ცოდნის გახსენება: სახალისო ბლიც-კითხვები.",
                  "მაკეტების (ფიგურების, იგლუების) დასრულება."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "ნამუშევრების 1 დიდ ყინულოვან მაკეტად გაერთიანება.",
                  "ამბის გამოგონება, ჩაწერა (მაგალითად: „ერთი დღე პოლარული დათვის ცხოვრებაში“)."
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "მიკრობიტი (კოდის დახვეწა).",
                  "სცენარის გადახედვა."
                ]
              }
            ]
          },
          {
            dayName: "დღე 2",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის გამოყენებით ვზომავთ ტემპერატურას.",
                  "სცენარის გახსენება, დახვეწა.",
                  "ფოტოების გადაღება."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "ფოტოების გადაღება (ცხოველების ფიგურების სხვადასხვა პოზიციაში დაფიქსირება მაკეტზე)."
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "მიკრობიტი.",
                  "ფოტოების გაცოცხლება-ტექნოლოგიები."
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        title: "კვირა 3: მოფუსფუსე ვიბრო-პინგვინის ინტეგრირება & ტექნიკური შემოწმება",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის გამოყენებით ვზომავთ ტემპერატურას.",
                  "ფოტოების გაცოცხლება-ტექნოლოგიები (გაგრძელება)."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "ტექნოლოგიური დანამატები მაკეტზე: მოფუსფუსე (ვიბრაციული) პინგვინის მექანიზმის ინტეგრირება დიდ მაკეტში."
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "ვიბრაციული ძრავებისა და მარტივი წრედების ტესტირება მიკრობიტთან ერთად."
                ]
              }
            ]
          },
          {
            dayName: "დღე 2",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის გამოყენებით ვზომავთ ტემპერატურას.",
                  "პროექტის ტექნიკური ნაწილის სრული შემოწმება."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "პროექტის შეჯამება: საპრეზენტაციო სცენარის დამუშავება, როლების გადანაწილება (ვინ საუბრობს ეკოლოგიაზე, ვინ - ცხოველებზე, ვინ ხსნის კოდს)."
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "რობოტიკა-შეჯამება.",
                  "საპრეზენტაციოდ: პლანშეტიდან დიდ ეკრანზე გადავიტანთ ბავშვების მიერ შექმნილ ტემპერატურის მზომავ კოდებსა და გაცოცხლებულ ფოტო-ანიმაციებს."
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        title: "კვირა 4: ფინალური მზადება & საზეიმო პრეზენტაცია მშობლებთან ერთად!",
        days: [
          {
            dayName: "დღე 1",
            hours: [
              {
                badge: "საათი 1: შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის გამოყენებით ბოლო გაზომვა და ტემპერატურის ცვლილების დინამიკის ანალიზი მთელი თვის მანძილზე.",
                  "პრეზენტაციის გენერალური რეპეტიცია."
                ]
              },
              {
                badge: "საათი 2: სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "მაკეტის საბოლოო ვიზუალური დახვეწა."
                ]
              },
              {
                badge: "საათი 3: რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "ყველა ელექტრონული წრედისა და მიკრობიტის კოდის ფინალური გასწორება."
                ]
              }
            ]
          },
          {
            dayName: "დღე 2: საზეიმო ფინალი & გამოფენა! 🎉",
            isGrandFinale: true,
            hours: [
              {
                badge: "საათი 1.5: შემეცნება & მზადება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "მიკრობიტის სტენდის მომზადება.",
                  "ფუსფუსი: მშობლებთან შესახვედრად მზადება."
                ]
              },
              {
                badge: "საათი 1.5 - 3: პრეზენტაცია-გართობა 🎊",
                badgeClass: "hour-badge-event",
                topics: [
                  "პრეზენტაცია-გართობა (შექმნილი „ყინულოვანი სამყაროს“ წარდგენა, გაცოცხლებული ფოტოების ჩვენება და ვიბრაციული პინგვინების დემონსტრირება მშობლებისთვის).",
                  "მხიარული შეჯამება და სერტიფიკატების გადაცემა!"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};

// Aliases for project lookup
projectsData["ice-world"] = projectsData["polar"] = projectsData["project-ice-world"] = projectsData["fussusa-polar"];

function initProjects() {
  const projectModal = document.getElementById("project-modal");
  const projectModalCloseBtn = document.getElementById("project-modal-close-btn");
  const projectWeeksContainer = document.getElementById("project-weeks-container");
  const projectModalBookCta = document.getElementById("project-modal-book-cta");
  const openButtons = document.querySelectorAll(".open-project-modal-btn");
  const bookTriggers = document.querySelectorAll(".project-book-trigger");

  const closeProjectModal = () => {
    if (!projectModal) return;
    projectModal.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (projectModalCloseBtn) {
    projectModalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // Render project modal content
  const renderProjectSyllabus = (projectId) => {
    const project = projectsData[projectId];
    if (!project || !projectWeeksContainer) return;

    // Update header details if elements exist
    const modalBadge = document.getElementById("project-modal-badge");
    const modalTitle = document.getElementById("project-modal-title");
    const modalMeta = document.getElementById("project-modal-meta");
    const modalDesc = document.getElementById("project-modal-desc");

    if (modalBadge && project.badge) modalBadge.textContent = project.badge;
    if (modalTitle && project.title) modalTitle.textContent = project.title;
    if (modalMeta && project.meta) {
      modalMeta.innerHTML = `
        <span class="meta-pill">⏱️ ხანგრძლივობა: ${project.meta.duration}</span>
        <span class="meta-pill">📅 ${project.meta.meetings}</span>
        <span class="meta-pill">⏳ ${project.meta.dailyHours}</span>
        <span class="meta-pill">👧 ${project.meta.age}</span>
      `;
    }
    if (modalDesc && project.tagline) modalDesc.textContent = project.tagline;
    if (projectModalBookCta) {
      projectModalBookCta.href = `contact.html?project=${project.contactValue || "bees-project"}`;
      projectModalBookCta.dataset.contactValue = project.contactValue || "bees-project";
    }

    projectWeeksContainer.innerHTML = "";

    project.weeks.forEach(week => {
      const weekBlock = document.createElement("div");
      weekBlock.className = "project-week-block";

      const weekTitle = document.createElement("h4");
      weekTitle.className = "project-week-title";
      weekTitle.innerHTML = `<span>📅</span> ${week.title}`;
      weekBlock.appendChild(weekTitle);

      const daysGrid = document.createElement("div");
      daysGrid.className = "project-days-grid";

      week.days.forEach(day => {
        const dayCard = document.createElement("div");
        dayCard.className = `project-day-card ${day.isGrandFinale ? "full-width" : ""}`;

        const dayName = document.createElement("div");
        dayName.className = "project-day-name";
        dayName.textContent = day.dayName;
        dayCard.appendChild(dayName);

        day.hours.forEach(hour => {
          const hourItem = document.createElement("div");
          hourItem.className = "project-hour-item";

          const hourBadge = document.createElement("span");
          hourBadge.className = `hour-badge ${hour.badgeClass || ""}`;
          hourBadge.textContent = hour.badge;
          hourItem.appendChild(hourBadge);

          const descList = document.createElement("ul");
          descList.className = "hour-desc-list";
          hour.topics.forEach(t => {
            const li = document.createElement("li");
            li.textContent = t;
            descList.appendChild(li);
          });
          hourItem.appendChild(descList);

          dayCard.appendChild(hourItem);
        });

        daysGrid.appendChild(dayCard);
      });

      weekBlock.appendChild(daysGrid);
      projectWeeksContainer.appendChild(weekBlock);
    });
  };

  // Open modal on click
  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.dataset.project || "fussusa-bees";
      renderProjectSyllabus(projectId);
      if (projectModal) {
        projectModal.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // Direct booking click handlers that preselect the project pill
  const preselectProjectPill = (val) => {
    closeProjectModal();
    const pill = document.querySelector(`.dir-pill[data-value="${val}"]`);
    if (pill) {
      pill.click();
    }
  };

  if (projectModalBookCta) {
    projectModalBookCta.addEventListener("click", (e) => {
      const val = projectModalBookCta.dataset.contactValue || "bees-project";
      const pill = document.querySelector(`.dir-pill[data-value="${val}"]`);
      if (pill) {
        e.preventDefault();
        preselectProjectPill(val);
      }
    });
  }

  bookTriggers.forEach(btn => {
    btn.addEventListener("click", () => preselectProjectPill("bees-project"));
  });
}

/**
 * Parent-Friendly Booking Form & Success Confirmation
 */
function initBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  const ageSlider = document.getElementById("child-age");
  const ageValue = document.getElementById("age-val");
  const successModal = document.getElementById("booking-success-modal");
  const successCloseBtn = document.getElementById("success-close-btn");

  const childNameInput = document.getElementById("child-name");
  const childNameLabel = document.getElementById("child-name-label");
  const parentNameInput = document.getElementById("parent-name");
  const parentNameLabel = document.getElementById("parent-name-label");
  const parentPhoneInput = document.getElementById("parent-phone");
  const submitBtnText = document.getElementById("submit-btn-text");

  const dirPills = document.querySelectorAll(".dir-pill");
  const chosenDirInput = document.getElementById("chosen-direction");

  const workshopSubpanel = document.getElementById("workshop-subpanel");
  const modeSingleBtn = document.getElementById("mode-single-btn");
  const modeGroupBtn = document.getElementById("mode-group-btn");
  const workshopModeInput = document.getElementById("workshop-mode");
  const workshopGroupCountWrap = document.getElementById("workshop-group-count-wrap");

  const stepperMinus = document.getElementById("stepper-minus");
  const stepperPlus = document.getElementById("stepper-plus");
  const groupCountInput = document.getElementById("group-count");

  // Stepper logic for group size
  if (stepperMinus && stepperPlus && groupCountInput) {
    stepperMinus.addEventListener("click", () => {
      let val = parseInt(groupCountInput.value, 10) || 10;
      if (val > 2) groupCountInput.value = val - 1;
    });
    stepperPlus.addEventListener("click", () => {
      let val = parseInt(groupCountInput.value, 10) || 10;
      if (val < 50) groupCountInput.value = val + 1;
    });
    groupCountInput.addEventListener("change", () => {
      let val = parseInt(groupCountInput.value, 10) || 10;
      if (val < 2) val = 2;
      if (val > 50) val = 50;
      groupCountInput.value = val;
    });
  }

  // Workshop Mode Switching (Single vs Group)
  const setWorkshopMode = (mode) => {
    if (mode === "group") {
      if (modeGroupBtn) modeGroupBtn.classList.add("active");
      if (modeSingleBtn) modeSingleBtn.classList.remove("active");
      if (workshopModeInput) workshopModeInput.value = "group";
      if (workshopGroupCountWrap) workshopGroupCountWrap.style.display = "flex";

      if (childNameLabel) childNameLabel.textContent = "ჯგუფის ან საკონტაქტო პირის სახელი *";
      if (childNameInput) childNameInput.placeholder = "მაგ. IV კლასი ან ნიკოლოზი";
      if (parentNameLabel) parentNameLabel.textContent = "ხელმძღვანელის / მშობლის სახელი & გვარი *";
      if (submitBtnText) submitBtnText.textContent = "✨ ჯგუფის დარეგისტრირება ვორქშოფზე";
    } else {
      if (modeSingleBtn) modeSingleBtn.classList.add("active");
      if (modeGroupBtn) modeGroupBtn.classList.remove("active");
      if (workshopModeInput) workshopModeInput.value = "single";
      if (workshopGroupCountWrap) workshopGroupCountWrap.style.display = "none";

      if (childNameLabel) childNameLabel.textContent = "ბავშვის სახელი *";
      if (childNameInput) childNameInput.placeholder = "მაგ. ნიკოლოზი";
      if (parentNameLabel) parentNameLabel.textContent = "მშობლის სახელი & გვარი *";

      const currentDir = chosenDirInput ? chosenDirInput.value : "";
      if (submitBtnText) {
        submitBtnText.textContent = (currentDir.startsWith("workshop")) 
          ? "✨ რეგისტრაცია ვორქშოფზე" 
          : "✨ რეგისტრაცია";
      }
    }
  };

  if (modeSingleBtn) modeSingleBtn.addEventListener("click", () => setWorkshopMode("single"));
  if (modeGroupBtn) modeGroupBtn.addEventListener("click", () => setWorkshopMode("group"));

  // Direction chips handler
  dirPills.forEach(pill => {
    pill.addEventListener("click", () => {
      dirPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const val = pill.dataset.value;
      if (chosenDirInput) chosenDirInput.value = val;

      if (val.startsWith("workshop")) {
        if (workshopSubpanel) workshopSubpanel.style.display = "block";
        const currentMode = workshopModeInput ? workshopModeInput.value : "single";
        setWorkshopMode(currentMode);
      } else {
        if (workshopSubpanel) workshopSubpanel.style.display = "none";
        setWorkshopMode("single");
      }
    });
  });

  // Age slider
  if (ageSlider && ageValue) {
    ageSlider.addEventListener("input", (e) => {
      ageValue.textContent = `${e.target.value} წლის`;
    });
  }

  // URL param pre-selection
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedParam = urlParams.get("course") || urlParams.get("project");
    const typeParam = urlParams.get("type");

    if (selectedParam) {
      let targetPill = document.querySelector(`.dir-pill[data-value="${selectedParam}"]`);
      if (!targetPill && (selectedParam.includes("robotics") || selectedParam.includes("code") || selectedParam === "tech")) {
        targetPill = document.querySelector(`.dir-pill[data-value="robotics-club"]`);
      } else if (!targetPill && (selectedParam.includes("bees") || selectedParam === "earth")) {
        targetPill = document.querySelector(`.dir-pill[data-value="bees-project"]`);
      } else if (!targetPill && selectedParam.includes("card")) {
        targetPill = document.querySelector(`.dir-pill[data-value="workshop-card"]`);
      } else if (!targetPill && (selectedParam.includes("penguin") || selectedParam.includes("pingv") || selectedParam.includes("vibro"))) {
        targetPill = document.querySelector(`.dir-pill[data-value="workshop-penguin"]`);
      } else if (!targetPill) {
        targetPill = document.querySelector(".dir-pill");
      }
      if (targetPill) targetPill.click();
    }

    if (typeParam === "group") {
      const activePill = document.querySelector(".dir-pill.active");
      if (activePill && activePill.dataset.value.startsWith("workshop")) {
        setWorkshopMode("group");
      } else {
        const anyWorkshopPill = document.querySelector('.dir-pill[data-value="workshop-penguin"]') || document.querySelector('.dir-pill[data-value="workshop-card"]');
        if (anyWorkshopPill) {
          anyWorkshopPill.click();
          setWorkshopMode("group");
        }
      }
    }
  } catch (e) {
    // Ignore URL parse errors
  }

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const currentDir = chosenDirInput ? chosenDirInput.value : "";
    const isWorkshopGroup = (currentDir.startsWith("workshop") && workshopModeInput && workshopModeInput.value === "group");

    const childName = childNameInput ? childNameInput.value.trim() : "";
    const parentName = parentNameInput ? parentNameInput.value.trim() : "";
    const parentPhone = parentPhoneInput ? parentPhoneInput.value.trim() : "";

    if (!childName || !parentName || !parentPhone) {
      alert("გთხოვთ შეავსოთ ყველა სავალდებულო ველი.");
      return;
    }

    let displayName = childName;
    if (isWorkshopGroup) {
      const groupCount = groupCountInput ? groupCountInput.value : "10";
      displayName = `${childName} (${groupCount}-ბავშვიანი ჯგუფი)`;
    }

    if (successModal) {
      const namePlaceholder = document.getElementById("confirmed-child-name");
      if (namePlaceholder) namePlaceholder.textContent = displayName;
      successModal.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    form.reset();
    if (ageValue) ageValue.textContent = "8 წლის";
    if (groupCountInput) groupCountInput.value = 10;
    setWorkshopMode("single");
    if (workshopSubpanel) workshopSubpanel.style.display = "none";
    const defaultPill = document.querySelector('.dir-pill[data-value="robotics-club"]') || dirPills[0];
    if (defaultPill) defaultPill.click();
  });

  if (successCloseBtn && successModal) {
    successCloseBtn.addEventListener("click", () => {
      successModal.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
}

/**
 * =========================================================================
 * FLOATING INTERACTIVE COMPANIONS (ფუსფუსა დედამიწა 🌿 & ტექნოლოგია 💻 ერთად)
 * =========================================================================
 */
function initFloatingCompanions() {
  if (document.getElementById("fusfusa-companions")) return;

  const dock = document.createElement("aside");
  dock.id = "fusfusa-companions";
  dock.className = "companions-dock companions-dock-right";
  dock.setAttribute("aria-label", "ფუსფუსა მეგზურები — ეკო და ბიტი");

  dock.innerHTML = `
    <!-- Duo Bar: ეკო და ბიტი ჩარჩოში -->
    <div class="companions-duo-bar" id="companions-duo">
      <!-- Title on frame above characters -->
      <div class="duo-bar-header">
        <button class="duo-title-btn" id="open-duo-chat-title" title="გახსენით ასისტენტი">
          <span class="duo-chat-icon">💬</span>
          <span class="duo-title-text">ასისტენტი ეკო და ბიტი</span>
        </button>
        <button class="companions-toggle-btn" id="companions-minimize" title="ჩაკეცვა" aria-label="ჩაკეცვა">–</button>
      </div>

      <!-- Mascots Row: ეკო და ბიტი გვერდიგვერდ -->
      <div class="duo-mascots-row">
        <!-- Earth Mascot: ეკო -->
        <div class="companion-mascot earth-mascot" id="mascot-earth" title="ეკო — ფუსფუსა დედამიწა (გახსენით ჩატი)" tabindex="0" role="button">
          <div class="mascot-figure-wrap">
            <img src="დედამიწა.png" onerror="this.src='character_dedamiwa.png'" alt="ეკო — ფუსფუსა დედამიწა" class="mascot-character-img">
          </div>
          <span class="mascot-tag earth-tag">🌿 ეკო</span>
        </div>

        <!-- Tech Mascot: ბიტი -->
        <div class="companion-mascot tech-mascot" id="mascot-tech" title="ბიტი — ფუსფუსა ტექნოლოგია (გახსენით ჩატი)" tabindex="0" role="button">
          <div class="mascot-figure-wrap">
            <img src="ტექნოლოგია.png" onerror="this.src='character_teqnologia.png'" alt="ბიტი — ფუსფუსა ტექნოლოგია" class="mascot-character-img">
          </div>
          <span class="mascot-tag tech-tag">💻 ბიტი</span>
        </div>
      </div>
    </div>

    <!-- Minimized Launcher -->
    <button class="companions-minimized-launcher" id="companions-launcher" title="ასისტენტი ეკო და ბიტი" aria-label="ასისტენტი ეკო და ბიტი">
      <span class="launcher-icon">✨</span>
      <span class="launcher-text">ასისტენტი ეკო და ბიტი</span>
    </button>
  `;

  document.body.appendChild(dock);

  // Initialize AI Chat Window
  initAiChatWindow();

  // Elements
  const mascotEarth = dock.querySelector("#mascot-earth");
  const mascotTech = dock.querySelector("#mascot-tech");
  const chatTitleBtn = dock.querySelector("#open-duo-chat-title");
  const minimizeBtn = dock.querySelector("#companions-minimize");
  const launcher = dock.querySelector("#companions-launcher");

  function openChatWithAnimation(mascot, defaultQuery = null) {
    if (mascot) {
      mascot.classList.remove("mascot-jumping");
      void mascot.offsetWidth;
      mascot.classList.add("mascot-jumping");
      setTimeout(() => mascot.classList.remove("mascot-jumping"), 600);
    }
    openAiChat(defaultQuery);
  }

  // Event Listeners
  mascotEarth.addEventListener("click", () => openChatWithAnimation(mascotEarth));
  mascotEarth.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openChatWithAnimation(mascotEarth);
    }
  });

  mascotTech.addEventListener("click", () => openChatWithAnimation(mascotTech));
  mascotTech.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openChatWithAnimation(mascotTech);
    }
  });

  chatTitleBtn.addEventListener("click", () => openChatWithAnimation());

  // Minimize / Restore
  minimizeBtn.addEventListener("click", () => {
    dock.classList.add("minimized");
  });
  launcher.addEventListener("click", () => {
    dock.classList.remove("minimized");
  });
}

/**
 * =========================================================================
 * AI ASSISTANT CHAT ENGINE (ჭკვიანი კონსულტანტი: ეკო 🌿 & ბიტი 💻)
 * =========================================================================
 */
function initAiChatWindow() {
  if (document.getElementById("ai-chat-widget")) return;

  const chatWidget = document.createElement("div");
  chatWidget.id = "ai-chat-widget";
  chatWidget.className = "ai-chat-widget";
  chatWidget.setAttribute("role", "dialog");
  chatWidget.setAttribute("aria-label", "ფუსფუსა AI კონსულტანტი");

  chatWidget.innerHTML = `
    <!-- Header -->
    <div class="ai-chat-header">
      <div class="ai-header-left">
        <div class="ai-header-avatars">
          <div class="ai-header-avatar earth-av">
            <img src="დედამიწა.png" onerror="this.src='character_dedamiwa.png'" alt="დედამიწა">
          </div>
          <div class="ai-header-avatar tech-av">
            <img src="ტექნოლოგია.png" onerror="this.src='character_teqnologia.png'" alt="ტექნოლოგია">
          </div>
        </div>
        <div class="ai-header-titles">
          <span class="ai-header-name">ფუსფუსა AI მეგზურები</span>
          <span class="ai-header-sub">ეკო 🌿 & ბიტი 💻</span>
        </div>
      </div>
      <div class="ai-header-actions">
        <button class="ai-header-btn" id="ai-chat-clear" title="ჩატის გასუფთავება" aria-label="გასუფთავება">🗑️</button>
        <button class="ai-header-btn" id="ai-chat-close" title="დახურვა" aria-label="დახურვა">✕</button>
      </div>
    </div>

    <!-- Messages Container -->
    <div class="ai-chat-messages" id="ai-chat-messages">
      <!-- Welcome Message -->
      <div class="ai-msg earth-msg">
        <div class="ai-msg-avatar">
          <img src="დედამიწა.png" onerror="this.src='character_dedamiwa.png'" alt="დედამიწა">
        </div>
        <div class="ai-msg-bubble">
          <span class="ai-msg-sender">🌿 ეკო (ფუსფუსა დედამიწა)</span>
          გამარჯობა! მე ვარ ეკო 🌿 — დაგეხმარებით ხის ოსტატობაზე, თიხაზე, ეკო-დიზაინსა და ბუნებრივ სისტემებზე.
        </div>
      </div>

      <div class="ai-msg tech-msg">
        <div class="ai-msg-avatar">
          <img src="ტექნოლოგია.png" onerror="this.src='character_teqnologia.png'" alt="ტექნოლოგია">
        </div>
        <div class="ai-msg-bubble">
          <span class="ai-msg-sender">💻 ბიტი (ფუსფუსა ტექნოლოგია)</span>
          ხოლო მე ვარ ბიტი 💻 — გიპასუხებთ რობოტიკაზე, კოდინგზე, AI-ზე, ანიმაციასა და ასაკობრივ ჯგუფებზე! რით შეგვიძლია დაგეხმაროთ?
          
          <div class="ai-quick-prompts" id="ai-quick-prompts">
            <button class="ai-prompt-btn" data-query="რომელი კურსი შეეფერება ჩემს შვილს?">🎯 რომელი კურსი შეეფერება ჩემს შვილს?</button>
            <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ყინულოვან სამყაროზე“">❄️ პროექტი „ყინულოვანი სამყარო“</button>
            <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ფუსფუსა ფუტკრებზე“">🐝 პროექტი „ფუსფუსა ფუტკრები“</button>
            <button class="ai-prompt-btn" data-query="რა არის ვორქშოფი „მოფუსფუსე პინგვინი“?">🐧 ვორქშოფი: პინგვინი ყინულზე</button>
            <button class="ai-prompt-btn" data-query="როგორ დავრეგისტრირდეთ?">📅 როგორ დავრეგისტრირდეთ?</button>
            <button class="ai-prompt-btn" data-query="რას ისწავლის ბავშვი რობოტიკასა და კოდინგში?">🤖 რას ისწავლის რობოტიკაში?</button>
            <button class="ai-prompt-btn" data-query="სად მდებარეობს სახელოსნო და რა არის კონტაქტი?">📍 სად მდებარეობს სახელოსნო?</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Bar -->
    <form class="ai-chat-input-wrap" id="ai-chat-form">
      <input type="text" class="ai-chat-input" id="ai-chat-input" placeholder="დაგვისვით შეკითხვა..." autocomplete="off" required>
      <button type="submit" class="ai-chat-send-btn" id="ai-chat-send" aria-label="გაგზავნა">➤</button>
    </form>
  `;

  document.body.appendChild(chatWidget);

  // Bind Events
  const closeBtn = chatWidget.querySelector("#ai-chat-close");
  const clearBtn = chatWidget.querySelector("#ai-chat-clear");
  const form = chatWidget.querySelector("#ai-chat-form");
  const input = chatWidget.querySelector("#ai-chat-input");
  const messagesContainer = chatWidget.querySelector("#ai-chat-messages");

  closeBtn.addEventListener("click", () => closeAiChat());
  
  clearBtn.addEventListener("click", () => {
    messagesContainer.innerHTML = "";
    initAiChatWindowDefaultMessages(messagesContainer);
  });

  // Prompt Buttons delegation
  messagesContainer.addEventListener("click", (e) => {
    const promptBtn = e.target.closest(".ai-prompt-btn");
    if (promptBtn) {
      const query = promptBtn.dataset.query;
      sendUserMessage(query);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    input.value = "";
    sendUserMessage(query);
  });
}

function openAiChat(initialQuery = null) {
  const widget = document.getElementById("ai-chat-widget");
  if (!widget) return;
  widget.classList.add("open");
  const input = widget.querySelector("#ai-chat-input");
  if (input) setTimeout(() => input.focus(), 300);

  if (initialQuery) {
    sendUserMessage(initialQuery);
  }
}

function closeAiChat() {
  const widget = document.getElementById("ai-chat-widget");
  if (widget) widget.classList.remove("open");
}

function sendUserMessage(text) {
  const messagesContainer = document.getElementById("ai-chat-messages");
  if (!messagesContainer) return;

  // Append User Message
  const userMsgEl = document.createElement("div");
  userMsgEl.className = "ai-msg user-msg";
  userMsgEl.innerHTML = `<div class="ai-msg-bubble">${escapeHtml(text)}</div>`;
  messagesContainer.appendChild(userMsgEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Determine answering characters ahead of time for typing indicator
  const answers = generateFussusaAiAnswers(text);
  const firstAns = answers[0] || { type: "earth" };
  const typingAvatar = firstAns.type === "tech" ? "ტექნოლოგია.png" : "დედამიწა.png";
  const typingFallback = firstAns.type === "tech" ? "character_teqnologia.png" : "character_dedamiwa.png";

  // Show typing indicator
  const typingEl = document.createElement("div");
  typingEl.className = "ai-msg " + (firstAns.type === "tech" ? "tech-msg" : "earth-msg");
  typingEl.id = "ai-typing";
  typingEl.innerHTML = `
    <div class="ai-msg-avatar">
      <img src="${typingAvatar}" onerror="this.src='${typingFallback}';" alt="AI">
    </div>
    <div class="ai-typing-indicator">
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
      <span class="ai-typing-dot"></span>
    </div>
  `;
  messagesContainer.appendChild(typingEl);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Generate intelligent response with slight delay
  setTimeout(() => {
    const currentTyping = document.getElementById("ai-typing");
    if (currentTyping) currentTyping.remove();

    answers.forEach((ans, idx) => {
      setTimeout(() => {
        const botMsgEl = document.createElement("div");
        botMsgEl.className = "ai-msg " + (ans.type === "tech" ? "tech-msg" : "earth-msg");
        botMsgEl.innerHTML = `
          <div class="ai-msg-avatar">
            <img src="${ans.type === 'tech' ? 'ტექნოლოგია.png' : 'დედამიწა.png'}" onerror="this.src='${ans.type === 'tech' ? 'character_teqnologia.png' : 'character_dedamiwa.png'}';" alt="" aria-hidden="true">
          </div>
          <div class="ai-msg-bubble">
            <span class="ai-msg-sender">${ans.author}</span>
            ${ans.text}
          </div>
        `;
        messagesContainer.appendChild(botMsgEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, idx * 400);
    });
  }, 600);
}

function initAiChatWindowDefaultMessages(container) {
  container.innerHTML = `
    <div class="ai-msg earth-msg">
      <div class="ai-msg-avatar">
        <img src="დედამიწა.png" onerror="this.src='character_dedamiwa.png'" alt="დედამიწა">
      </div>
      <div class="ai-msg-bubble">
        <span class="ai-msg-sender">🌿 ეკო (ფუსფუსა დედამიწა)</span>
        ჩატი განახლდა! დაგვისვით ნებისმიერი შეკითხვა სახელოსნოზე, შემოქმედებაზე ან კურსებზე ✨
      </div>
    </div>
    <div class="ai-msg tech-msg">
      <div class="ai-msg-avatar">
        <img src="ტექნოლოგია.png" onerror="this.src='character_teqnologia.png'" alt="ტექნოლოგია">
      </div>
      <div class="ai-msg-bubble">
        <span class="ai-msg-sender">💻 ბიტი (ფუსფუსა ტექნოლოგია)</span>
        მზად ვარ! შეგიძლიათ ჩაწეროთ ბავშვის ასაკი ან აირჩიოთ თემა:
        <div class="ai-quick-prompts">
          <button class="ai-prompt-btn" data-query="რომელი კურსი შეეფერება ჩემს შვილს?">🎯 რომელი კურსი შეეფერება ჩემს შვილს?</button>
          <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ყინულოვან სამყაროზე“">❄️ პროექტი „ყინულოვანი სამყარო“</button>
          <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ფუსფუსა ფუტკრებზე“">🐝 პროექტი „ფუსფუსა ფუტკრები“</button>
          <button class="ai-prompt-btn" data-query="რა არის ვორქშოფი „მოფუსფუსე პინგვინი“?">🐧 ვორქშოფი: პინგვინი ყინულზე</button>
          <button class="ai-prompt-btn" data-query="როგორ დავრეგისტრირდეთ?">📅 როგორ დავრეგისტრირდეთ?</button>
        </div>
      </div>
    </div>
  `;
}

/**
 * =========================================================================
 * FUSFUSA AI KNOWLEDGE RETRIEVAL & MOBILIZATION ENGINE (ქართული AI ბირთვი)
 * =========================================================================
 * სრულად აერთიანებს საიტის მთლიან ინფორმაციას ყველა გვერდიდან.
 */

// Georgian text normalizer & stemmer
function normalizeGeorgian(text) {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'„“»«\r\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getGeorgianStems(word) {
  if (word.length <= 3) return [word];
  const stems = [word];
  const suffixes = [
    "ებისთვის", "ებთან", "ებამდე", "ებში", "ებზე", "ებმა", "ების", "ებს", "ებო", "ებ",
    "ისთვის", "ამდე", "თან", "ში", "ზე", "ით", "ად", "ის", "მა", "ო", "ი", "ს"
  ];
  for (const sfx of suffixes) {
    if (word.endsWith(sfx) && word.length - sfx.length >= 3) {
      stems.push(word.slice(0, -sfx.length));
      break;
    }
  }
  return stems;
}

// 20+ Detailed Mobilized Knowledge Modules covering EVERY section of the site
const FUSFUSA_SITE_KNOWLEDGE = [
  // 1. ყინულოვანი სამყარო (1-Month Project)
  {
    id: "project_ice_world",
    keywords: ["ყინულოვან", "ყინულოვანი", "ყინულ", "არქტიკ", "ანტარქტიდ", "პოლარულ", "პოლარული", "მყინვარ", "დათვ", "სელაპ", "იგლუ", "ყინულმჭრელ"],
    intents: ["ყინულოვანი სამყარო", "ყინულოვან სამყაროზე", "პოლარული ბაზა", "არქტიკა", "ანტარქტიდა", "მინი მყინვარი", "პოლარული დათვი"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>„ყინულოვანი სამყარო“ ❄️🧊🐧</strong> ჩვენი 1-თვიანი გრანდიოზული ინტეგრირებული პროექტია (4 კვირა, 8 შეხვედრა • დღეში 3 სთ • 8–14 წელი):<br>• <strong>საათი 1 (შემეცნება):</strong> არქტიკისა და ანტარქტიდის ეკოსისტემები, პოლარული ცხოველები (დათვები, პინგვინები, სელაპები), კვების ჯაჭვი და გლობალური დათბობის გავლენა.<br>• <strong>საათი 2 (სახელოსნო):</strong> პოლარული ბაზის შექმნა (მუყაო, ფოლგა), „მინი-მყინვარი“, იგლუები, ყინულმჭრელი გემი, ცხოველების გამოძერწვა, 1 დიდ მაკეტად გაერთიანება და ამბავი („ერთი დღე პოლარული დათვის ცხოვრებაში“)!`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• <strong>საათი 3 (რობოტიკა):</strong> Micro:bit-ით ტემპერატურის უწყვეტი მონიტორინგი და LED ანიმაციები, სტოპ-მოუშენ ფოტოების ციფრული გაცოცხლება, ვიბრაციული პინგვინების ძრავებისა და წრედების ინტეგრირება დიდ მაკეტში.<br>• <strong>კვირა 4 / დღე 2:</strong> საზეიმო ფინალი & გამოფენა მშობლებთან ერთად — შექმნილი მაკეტის, გაცოცხლებული ფოტოებისა და მოძრავი ვიბრო-პინგვინების პრეზენტაცია და სერტიფიკატები!`
      }
    ]
  },

  // 2. მოფუსფუსე პინგვინი ყინულზე (1-Day Workshop)
  {
    id: "workshop_penguin",
    keywords: ["პინგვინ", "მოფუსფუსე", "ვიბრო", "ვიბრაცი", "სრიალ", "ფოლგ", "ხახუნ", "ძრავ", "ვიბროძრავ", "cr2032"],
    intents: ["მოფუსფუსე პინგვინი", "პინგვინი ყინულზე", "პინგვინის ვორქშოფი", "ხახუნის ძალა", "ვიბრო ძრავი"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>🐧 ვორქშოფი: „მოფუსფუსე პინგვინი ყინულზე“</strong> (1.5–2 სთ • 7–10 წელი) კინეტიკური ინჟინერიისა და ბუნებისმეტყველების სინთეზია!<br>• <strong>შემეცნებითი შესავალი:</strong> პოლარული ეკოსისტემები, როგორ ეგუებიან პინგვინები სიცივეს, რატომ სრიალებენ მუცლით და ხახუნის ძალის ფიზიკა (რატომ სრიალებს ფოლგაზე უკეთ, ვიდრე ხაოიან მუყაოზე).<br>• <strong>„ფუსფუსა დედამიწა“:</strong> მუყაოსგან პინგვინის კონტურის გამოჭრა, ფერადი ქაღალდებით გაფორმება და საერთო ფოლგის „ყინულის მოედნის“ შექმნა.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• <strong>„ფუსფუსა ტექნოლოგიები“:</strong> მარტივი ელექტრული წრედის გაცნობა ეკრანის გარეშე (3V ბრტყელი ელემენტი CR2032 და მინი-ვიბროძრავი). წრედის შეკვრისას ძრავი ვიბრირებს, პინგვინი ფოლგის ყინულზე სწრაფად სრიალებს და ეწყობა მხიარული რბოლა! ბავშვს საკუთარი შექმნილი რობო-პინგვინი სახლში მიაქვს!`
      }
    ]
  },

  // 3. მანათობელი საახალწლო ბარათი (1-Day Workshop)
  {
    id: "workshop_card",
    keywords: ["ბარათ", "საახალწლო", "მანათობელ", "ნათურ", "სპილენძ", "ლენტ", "წრედ", "led", "closed circuit"],
    intents: ["მანათობელი საახალწლო ბარათი", "საახალწლო ბარათი", "მანათობელი ბარათი", "სპილენძის ლენტი"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>🎄 ვორქშოფი: „მანათობელი საახალწლო ბარათი“</strong> (1.5–2 სთ • 6–14 წელი)! სახელოსნოში ბავშვები ქმნიან ბარათის დიზაინს (ნაძვის ხე, ირემი, ვარსკვლავები), ამზადებენ ქაღალდს და აფორმებენ ვიზუალს.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ტექნოლოგიურ ნაწილში კი კოდირების გარეშე ეცნობიან <strong>„შეკრული წრედის“ (Closed Circuit)</strong> პრინციპს: აკრავენ სპილენძის წებოვან ლენტს (Copper tape), ამონტაჟებენ LED ნათურასა და 3V ბრტყელ ელემენტს. ბარათის დაკეცვისას ან თითის დაჭერით ნახატი ჯადოსნურად ნათდება! ბავშვს სახლში მიაქვს თავისი შექმნილი ინტერაქტიული საჩუქარი!`
      }
    ]
  },

  // 4. თიხის მანათობელი ეკო-ლამპიონი (1-Day Workshop)
  {
    id: "workshop_clay_lamp",
    keywords: ["ლამპიონ", "თიხის", "თიხა", "სანათ", "ძერწვ", "პერფორაცი", "ორნამენტ"],
    intents: ["თიხის მანათობელი ეკო ლამპიონი", "ეკო ლამპიონი", "თიხის სანათი", "თიხის ლამპიონი"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>🕯️ ვორქშოფი: „თიხის მანათობელი ეკო-ლამპიონი“</strong> (1 შეხვედრა • 2 სთ • 6–12 წელი)! ბავშვები ბუნებრივი თიხის ფირფიტებისგან ძერწავენ გუმბათოვან ლამპიონს, ჭრიან ორნამენტებსა და ვარსკვლავებს სინათლის გასასვლელად.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `შემდეგ შიგნით ვამონტაჟებთ უსაფრთხო, ავტონომიურ LED მანათობელ მოდულს. შედეგად ბავშვი საკუთარი ხელით შექმნილ ულამაზეს მაგიდის სანათს მიაბრძანებს სახლში!`
      }
    ]
  },

  // 5. ფუსფუსა ფუტკრები (3-Week Integrated Project)
  {
    id: "project_bees",
    keywords: ["ფუტკ", "ფუტკრებ", "სკა", "სკებ", "ყვავილ", "დარგვ", "ქოთან", "ნიადაგ", "ტენიანობ"],
    intents: ["ფუსფუსა ფუტკრები", "ფუტკრების პროექტი", "სკების მაკეტი", "მცენარეების დარგვა"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>🐝 ინტეგრირებული პროექტი „ფუსფუსა ფუტკრები“</strong> (3 კვირა, 6 შეხვედრა • დღეში 3 სთ • 8–12 წელი):<br>• <strong>საათი 1 (შემეცნება):</strong> ფუტკრის ანატომია, ეკოსისტემები, ბიომიმიკრია და მცენარეების დარგვა.<br>• <strong>საათი 2 (სახელოსნო):</strong> ხის ნამდვილი სკის მაკეტის აწყობა, თიხის ყვავილების ძერწვა, ქოთნის მოხატვა და 1 დიდ მაკეტად გაერთიანება!`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• <strong>საათი 3 (რობოტიკა & ანიმაცია):</strong> micro:bit სენსორით ნიადაგის ტენიანობის გაზომვა (როდის სჭირდება მცენარეს მორწყვა) და ფუტკრის 2D ციფრული ანიმაცია! ფინალში — საზეიმო ჩვენება მშობლებთან ერთად!`
      }
    ]
  },

  // 6. რობოტიკისა და კოდირების წრე (Regular Club)
  {
    id: "robotics_club",
    keywords: ["რობოტიკ", "კოდირებ", "პროგრამირებ", "წრე", "scratch", "makecode", "micro:bit", "მიკრობიტ", "arduino", "არდუინო", "python", "პითონ", "სენსორ", "სერვო"],
    intents: ["რობოტიკის წრე", "კოდირების წრე", "პროგრამირების წრე", "რას ისწავლის რობოტიკაში", "როგორ ვასწავლით კოდირებას"],
    respond: () => [
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `<strong>🤖 რობოტიკისა და კოდირების წრე (8–11 და 12–15 წელი):</strong><br>სრული გზა ვიზუალური ბლოკური პროგრამირებიდან (Code.org, Scratch, MakeCode) ტექსტურ კოდირებამდე (Python-ის საწყისები) და რეალურ მიკროკონტროლერებამდე (Micro:bit, Arduino)!<br>• <strong>ალგორითმული აზროვნება:</strong> ლოგიკა, ციკლები, პირობითი ნიშნები.<br>• <strong>ეკო-ტექნოლოგიური სინთეზი:</strong> სენსორები (ტენიანობა, სინათლე, ტემპერატურა) და სერვო ძრავები.<br>• <strong>ტექნოლოგიური თავდაჯერებულობა:</strong> ბავშვი ხდება არა პასიური მომხმარებელი, არამედ ციფრული სამყაროს ნამდვილი შემოქმედი!`
      }
    ]
  },

  // 7. 3-საათიანი ინტეგრირებული მოდელის არსი
  {
    id: "three_hour_structure",
    keywords: ["3 საათ", "სამი საათ", "საათიან", "მოდელ", "განრიგ", "სტრუქტურ", "როგორ მიმდინარეობს", "დღის გეგმა"],
    intents: ["3 საათიანი მოდელი", "სამსაათიანი მოდელი", "როგორ ტარდება გაკვეთილი", "რას აკეთებენ თითოეულ საათში"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>🔬 ჩვენი უნიკალური 3-საათიანი ინტეგრირებული მოდელი:</strong><br>• <strong>საათი 1 (შემეცნება & ბუნება):</strong> თემის გაცნობა, კითხვა-პასუხი, ინფორმაციის მოძიება და ანალიზი (მაგ: პოლარული ეკოსისტემები ან ფუტკრის ანატომია).<br>• <strong>საათი 2 (სახელოსნო & ხელსაქმე):</strong> მუშაობა ბუნებრივი მასალებით — ხის დამუშავება, თიხა, მაკეტირება, ნატიფი მოტორიკა და რეალური ფიზიკური ნივთის შექმნა.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• <strong>საათი 3 (რობოტიკა & ტექნოლოგიები):</strong> მიკრობიტის სქემები, სენსორები, კოდირება და შექმნილი მაკეტის ტექნოლოგიური გაცოცხლება (ტემპერატურის კონტროლი, ძრავები, 2D ანიმაცია)! ყოველი შეხვედრა ბავშვისთვის სრულფასოვანი შემოქმედებითი თავგადასავალია!`
      }
    ]
  },

  // 8. დამფუძნებლები და ხელმძღვანელები: ირმა და ზიკა დვალიშვილები
  {
    id: "mentors_founders",
    keywords: [
      "ირმა", "ზიკა", "დვალიშვილ", "მენტორ", "მასწავლებელ", "პედაგოგ", "დამფუძნებელ",
      "ხელმძღვანელ", "ხელმძღვანელი", "ხელმძღვანელობს", "ხელმძღვანელები", "უძღვებ", "უძღვება",
      "ავტორ", "ასწავლის", "ვინ", "ვის", "ვისი"
    ],
    intents: [
      "ვინ ხელმძღვანელობს",
      "ვის ხელმძღვანელობს",
      "ვისი ხელმძღვანელობით",
      "ვინ უძღვება ამ პროექტებს",
      "ვინ ხელმძღვანელობს ამ პროექტებს",
      "ვის ხელმძღვანელობს ამ პროექტებს",
      "ვინ არიან დამფუძნებლები",
      "ვინ არიან ხელმძღვანელები",
      "ირმა დვალიშვილი",
      "ზიკა დვალიშვილი",
      "სახელოსნოს ხელმძღვანელები",
      "ვინ ასწავლის სახელოსნოში",
      "ვინ არიან პედაგოგები",
      "ვინ არიან მენტორები"
    ],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `პროექტებსა და სახელოსნოს უძღვებიან მისი დამფუძნებლები — <strong>ირმა დვალიშვილი</strong> და <strong>ზიკა დვალიშვილი</strong>!<br>• 🌿 <strong>ირმა დვალიშვილი</strong> ხელმძღვანელობს „ფუსფუსა დედამიწის“ მიმართულებას (ხელოვნება, ეკო-დიზაინი, ბუნებრივი მასალები და სისტემური აზროვნება). იგი უძღვება შემეცნებით და სახელოსნო ეტაპებს.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• 💻 <strong>ზიკა დვალიშვილი</strong> ხელმძღვანელობს „ფუსფუსა ტექნოლოგიების“ მიმართულებას (STEM განათლება, რობოტიკა, კოდირება და ელექტრონიკა). იგი უძღვება რობოტიკის ლაბორატორიას, Micro:bit-ისა და Arduino-ს პროექტებს!`
      }
    ]
  },

  // 9. რეგისტრაცია და ონლაინ დაჯავშნა
  {
    id: "registration_booking",
    keywords: ["რეგისტრაცი", "დარეგისტრირ", "ჩაწერ", "დაჯავშნ", "ვიზიტ", "როგორ ჩავეწეროთ", "სად დავრეგისტრირდე"],
    intents: ["როგორ დავრეგისტრირდეთ", "რეგისტრაცია", "ვიზიტის დაჯავშნა", "ადგილის დაჯავშნა"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `რეგისტრაცია ძალიან მარტივია! შეგიძლიათ პირდაპირ ჩვენს საიტზე შეავსოთ ფორმა <a href="contact.html#booking" style="color:var(--color-green-dark); font-weight:bold; text-decoration:underline;">„რეგისტრაცია“</a>.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ფორმის შევსების შემდეგ ჩვენი მენტორი მალე დაგიკავშირდებათ ზუსტი დროისა და დეტალების შესათანხმებლად. ასევე შეგიძლიათ პირდაპირ დაგვირეკოთ: <strong>+995 577 101 301</strong> ან მოგვწეროთ: <strong>info@fusfusa.ge</strong>.`
      }
    ]
  },

  // 10. ჯგუფური რეგისტრაცია და სკოლები
  {
    id: "group_visits_schools",
    keywords: ["ჯგუფ", "ჯგუფურ", "სკოლ", "კლას", "ექსკურსი", "მოსწავლეებ", "ბაღ", "კოლექტივ", "რამდენი ბავშვი"],
    intents: ["ჯგუფური რეგისტრაცია", "სკოლის ექსკურსია", "კლასის ვიზიტი", "დაარეგისტრირეთ ჯგუფი", "ჯგუფური ვორქშოფი"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `დიახ! ერთდღიან ვორქშოფებზე გვაქვს <strong>ჯგუფური რეგისტრაცია</strong> (სკოლის კლასებისთვის, ექსკურსიებისთვის ან მეგობრების ჯგუფებისთვის <strong>2-დან 50 ბავშვამდე</strong>)!`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ჯგუფური ვიზიტისას ბავშვები ერთდროულად გადიან შემეცნებით, სახელოსნო და რობოტიკის ეტაპებს, თითოეულს თავისი შექმნილი ნივთი მიაქვს სახლში! რეგისტრაციისას უბრალოდ მონიშნეთ „დაარეგისტრირეთ ჯგუფი“ და მიუთითეთ ბავშვების რაოდენობა.`
      }
    ]
  },

  // 11. ფასები და გადახდა
  {
    id: "pricing_payment",
    keywords: ["ფას", "ღირს", "ღირებულებ", "გადახდ", "თანხ", "ტარიფ", "რამდენი ღირს"],
    intents: ["რა ღირს", "რა არის ფასი", "სწავლის საფასური", "გადახდის პირობები"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `სახელოსნო „ფუსფუსაში“ საფასური მოქნილია სასწავლო ფორმატის მიხედვით (ერთდღიანი ვორქშოფი, 1-თვიანი ინტეგრირებული პროექტი თუ რობოტიკის ყოველთვიური წრე).`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `<strong>ყველაზე მთავარი:</strong> ყველა სამუშაო მასალა (ხე, თიხა, ფოლგა, ელექტრონიკა, micro:bit, Arduino, სენსორები, LED, ბრტყელი ელემენტები) სრულად შედის ღირებულებაში — დამატებით არაფრის შეძენა არ გჭირდებათ! დეტალური ტარიფებისთვის შეავსეთ <a href="contact.html#booking" style="color:var(--color-blue); font-weight:bold; text-decoration:underline;">რეგისტრაციის ფორმა</a> ან დაგვირეკეთ: <strong>+995 577 101 301</strong>.`
      }
    ]
  },

  // 12. ლოკაცია, მისამართი და სამუშაო საათები
  {
    id: "location_contacts",
    keywords: ["სად", "მისამართ", "ლოკაცი", "რუსთავ", "ქუჩ", "ტელეფონ", "ნომერ", "მეილ", "სამუშაო საათ", "როდის მუშაობთ"],
    intents: ["სად მდებარეობს სახელოსნო", "მისამართი", "საკონტაქტო ნომერი", "სამუშაო საათები", "როგორ მოვიდეთ"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `ჩვენი სახელოსნო მდებარეობს ქალაქ <strong>რუსთავში, რუსთაველის ქუჩაზე</strong> 📍.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• 📞 ტელეფონი: <strong>+995 577 101 301</strong><br>• ✉️ ელფოსტა: <strong>info@fusfusa.ge</strong><br>• 🕒 სამუშაო საათები:<br>— ორშაბათი – პარასკევი: 14:00 – 19:00<br>— შაბათი – კვირა: 11:00 – 18:00.`
      }
    ]
  },

  // 13. მასალები და უსაფრთხოება
  {
    id: "materials_and_safety",
    keywords: ["მასალ", "ხელსაწყო", "რა მოვიტანოთ", "თან მოტანა", "უსაფრთხოებ", "საშიშ", "წებო", "ხის ხელსაწყო"],
    intents: ["რა მასალებია საჭირო", "რა უნდა მოიტანოს ბავშვმა", "უსაფრთხოა თუ არა", "უსაფრთხოების წესები"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>ბავშვს თან არაფრის მოტანა არ სჭირდება!</strong> ყველა საჭირო ბუნებრივ მასალას (ხე, თიხა, საღებავები, მუყაო, ფოლგა) და უსაფრთხო ხელსაწყოს ჩვენ ადგილზე ვახვედრებთ.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ტექნოლოგიურ ნაწილშიც (Micro:bit, Arduino, სენსორები, მინი-ძრავები, კაბელები, ლეპტოპები) ყველაფერი უზრუნველყოფილია. ვიყენებთ მხოლოდ უსაფრთხო დაბალი ძაბვის ელექტრონიკას (3V–5V), პროცესი კი მენტორების მუდმივი მეთვალყურეობის ქვეშ მიმდინარეობს!`
      }
    ]
  },

  // 14. ფილოსოფია, მისია და სლოგანები
  {
    id: "philosophy_slogans",
    keywords: ["მისია", "ფილოსოფი", "სლოგან", "დევიზ", "ვუფრთხილდებით", "მოთამაშე", "შემოქმედ", "კონცეფცი"],
    intents: ["რა არის თქვენი მისია", "ჩვენი მისია", "სახელოსნოს სლოგანი", "გუშინ მოთამაშე დღეს შემოქმედი", "ვუფრთხილდებით ვზრუნავთ ვქმნით"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `სახელოსნო „ფუსფუსას“ მთავარი დევიზია: <strong>„ვუფრთხილდებით, ვზრუნავთ, ვქმნით“</strong> 🌿 — ვასწავლით ბუნების მოფრთხილებას, ერთმანეთზე ზრუნვას და ახლის შექმნას.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ჩვენი მისიაა: <strong>„გუშინ მოთამაშე — დღეს შემოქმედი“</strong> ✨ — ბავშვი ეკრანის პასიური მომხმარებლიდან გარდაიქმნება შემოქმედად, რომელიც ციფრულ ცოდნას რეალური სამყაროს გასაუმჯობესებლად იყენებს!`
      }
    ]
  },

  // 15. შეცდომებთან დამოკიდებულება
  {
    id: "mistakes_approach",
    keywords: ["შეცდომ", "ბაგ", "შეცდომა საუკეთესო", "არ გამომივიდეს", "თუ გაფუჭდა"],
    intents: ["შეცდომა არ ისჯება", "როგორ უდგებით შეცდომებს", "თუ ბავშვს არ გამოუვა"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `ჩვენთან მთავარი წესია: <strong>„შეცდომა არ ისჯება — შეცდომა საუკეთესო მასწავლებელია!“ 💡</strong>`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `გატეხილი ხის დეტალი თუ „ბაგი“ კოდში საუკეთესო შესაძლებლობაა კრიტიკული აზროვნებისა და პრობლემის დამოუკიდებლად გადაჭრისთვის. ბავშვები სწავლობენ, რომ შეცდომა ძიების ბუნებრივი ეტაპია!`
      }
    ]
  },

  // 16. რა უნარებს ავითარებს
  {
    id: "skills_development",
    keywords: ["უნარ", "რას განავითარებს", "რას ისწავლის", "მოტორიკ", "აზროვნებ", "გუნდურობ", "სარგებელ"],
    intents: ["რა უნარებს უვითარებს", "რას ისწავლის ბავშვი", "რა სარგებელი აქვს"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `„ფუსფუსა დედამიწის“ ხაზით ბავშვები ავითარებენ: <strong>სისტემურ აზროვნებას</strong>, <strong>ნატიფ მოტორიკასა და სიზუსტეს</strong>, ინფორმაციასთან მუშაობის ჩვევას და <strong>თვითგამოხატვის თავისუფლებას</strong>.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `„ფუსფუსა ტექნოლოგიების“ ხაზით კი: <strong>ალგორითმულ და ლოგიკურ აზროვნებას</strong>, პრობლემის სტრუქტურულ გადაჭრას, <strong>ტექნოლოგიურ თავდაჯერებულობას</strong> და <strong>ჯანსაღ ციფრულ ჩვევებს</strong> (კიბერ-ჰიგიენას)!`
      }
    ]
  },

  // 17. ფორმატების შედარება
  {
    id: "formats_comparison",
    keywords: ["ფორმატ", "განსხვავებ", "რა განსხვავებაა", "რომელი ავირჩიო", "ვორქშოფსა და პროექტს"],
    intents: ["რა ფორმატები გაქვთ", "ფორმატების შედარება", "რა განსხვავებაა პროექტსა და ვორქშოფს შორის"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `სახელოსნოში გვაქვს <strong>3 ძირითადი ფორმატი</strong>:<br>1. <strong>⚡ ერთდღიანი ვორქშოფი (1.5–2 სთ):</strong> იდეალურია პირველი გაცნობისთვის — ბავშვი ერთ შეხვედრაში ქმნის დასრულებულ ინტერაქტიულ ნივთს (მაგ: 🐧 მოფუსფუსე პინგვინი ან 🎄 საახალწლო ბარათი).<br>2. <strong>📅 1-თვიანი ინტეგრირებული პროექტი (3–4 კვირა • 3 სთ შეხვედრა):</strong> სიღრმისეული შემეცნება, დიდი მაკეტის აწყობა, რობოტიკა და საზეიმო ფინალური გამოფენა მშობლებთან ერთად („ყინულოვანი სამყარო“ ❄️, „ფუსფუსა ფუტკრები“ 🐝).`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `3. <strong>🤖 რობოტიკისა და კოდირების წრე:</strong> უწყვეტი ყოველკვირეული პროგრამა საფუძვლიანი საინჟინრო და პროგრამირების ცოდნისთვის (MakeCode, Scratch, Micro:bit, Arduino, Python).`
      }
    ]
  },

  // 18. მოსწავლეთა ნამუშევრები და გალერეა
  {
    id: "showcase_gallery",
    keywords: ["ნამუშევრებ", "გალერე", "რას ქმნიან", "გამოფენ", "პროტოტიპ", "რა მიაქვს სახლში"],
    intents: ["რას ქმნიან ბავშვები", "მოსწავლეთა ნამუშევრები", "გამოფენა", "ნამუშევრების გალერეა"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `ჩვენი მოსწავლეები ქმნიან ნამდვილ ფუნქციურ ნივთებს: ხის მოძრავ მექანიზმებს, თიხის მანათობელ ლამპიონებს, პოლარულ ბაზებსა და ეკო-მაკეტებს.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ტექნოლოგიურად კი აწყობენ: AI ეკო-დეტექტორებს (მცენარის მდგომარეობის ამომცნობი), 2D ციფრულ ანიმაციებს, ჭკვიან თვით-მორწყავ რობოტებსა და ვიბრო-პინგვინებს! ყოველი შექმნილი ნივთი ბავშვს სახლში მიაქვს!`
      }
    ]
  },

  // 19. პირველი დღე და ადაპტაცია
  {
    id: "first_day_experience",
    keywords: ["პირველ დღე", "პირველ გაკვეთილ", "საცდელ", "გაცნობ", "ადაპტაცი", "ეშინია", "პირველად"],
    intents: ["პირველი დღე სახელოსნოში", "საცდელი ვიზიტი", "როგორ ხვდებით ბავშვებს"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `პირველი შეხვედრა სრულიად მეგობრულია და თავისუფალია ყოველგვარი სტრესისგან! ბავშვი ეცნობა სახელოსნოს გარემოს, ხელსაწყოებს და ირმა მასწავლებელს.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `შემდეგ კი ზიკა მასწავლებელთან ერთად ეცნობა რობოტიკის ლაბორატორიას და პირველად გამოსცდის სენსორებისა და მიკრობიტის მუშაობას. პირველივე დღიდან ბავშვს უჩნდება საკუთარი შემოქმედებითი ძალის რწმენა!`
      }
    ]
  },

  // 20. მისალმება და მადლობა
  {
    id: "greetings_welcome",
    keywords: ["გამარჯობ", "სალამ", "გამარჯობა", "მოგესალმებით", "როგორ ხართ", "ვინ ხართ", "მადლობ", "გმადლობთ", "მაგარია"],
    intents: ["გამარჯობა", "სალამი", "როგორ ხართ", "მადლობა", "ვინ ხართ თქვენ"],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `გამარჯობა! მე ვარ ეკო 🌿 — დაგეხმარებით ხის ოსტატობაზე, თიხაზე, ეკო-დიზაინსა და ბუნებრივ სისტემებზე.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ხოლო მე ვარ ბიტი 💻 — გიპასუხებთ რობოტიკაზე, კოდინგზე, AI-ზე, ასაკობრივ ჯგუფებსა და რეგისტრაციაზე! რით შეგვიძლია დაგეხმაროთ? ✨`
      }
    ]
  },

  // 21. ასაკობრივი ჯგუფები / რა ასაკიდან მიიღება ბავშვი
  {
    id: "age_groups_general",
    keywords: [
      "ასაკ", "ასაკობრივ", "წლიდან", "წლამდე", "პატარა", "დიდი", "ასაკობრივი ზღვარი", "რამდენი წლიდან",
      "რა ასაკიდან", "მინიმალური ასაკი", "ასაკის"
    ],
    intents: [
      "რა ასაკიდან შემიძლია ბავშვის მოყვანა",
      "რა ასაკიდან იღებთ ბავშვებს",
      "რა ასაკობრივი ჯგუფები გაქვთ",
      "რა ასაკის ბავშვებისთვისაა",
      "რამდენი წლიდან შეიძლება მოსვლა",
      "მინიმალური ასაკი",
      "ასაკობრივი ზღვარი",
      "რა ასაკიდანაა"
    ],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `სახელოსნო „ფუსფუსაში“ ბავშვების მიღება იწყება <strong>6 წლიდან</strong> და პროგრამები გათვლილია <strong>15 წლამდე</strong> მოზარდებისთვის!<br>სასწავლო მიმართულებები დაყოფილია ასაკობრივ საფეხურებად:<br>• <strong>6–8 წელი (უმცროსი ასაკი):</strong> ერთდღიანი სახალისო ვორქშოფები (🐧 „მოფუსფუსე პინგვინი ყინულზე“, 🎄 „მანათობელი საახალწლო ბარათი“, 🏮 „თიხის ლამპიონი“) და ვიზუალური პროგრამირება (Scratch Jr).`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `• <strong>8–12 წელი (საშუალო ასაკი):</strong> 1-თვიანი ინტეგრირებული პროექტები (❄️ „ყინულოვანი სამყარო“, 🐝 „ფუსფუსა ფუტკრები“) 3-საათიანი მოდელით და რობოტიკის წრე (Micro:bit & სენსორები).<br>• <strong>12–15 წელი (უფროსი ასაკი):</strong> რობოტიკა და ელექტრონიკა (Arduino, Python, რთული სქემები).<br>თუ თქვენი ბავშვის კონკრეტულ ასაკს გვეტყვით, სიამოვნებით შეგირჩევთ საუკეთესო ჯგუფს! 😊`
      }
    ]
  },

  // 22. პროექტების სრული ჩამონათვალი და მიმოხილვა
  {
    id: "all_projects_overview",
    keywords: ["პროექტებ", "კურსებ", "რა პროექტები გაქვთ", "რა პროექტებია", "პროგრამებ", "მიმდინარე პროექტებ"],
    intents: [
      "რა პროექტები გაქვთ",
      "პროექტების ჩამონათვალი",
      "რომელი პროექტები გაქვთ",
      "რა პროექტებს ატარებთ",
      "მიმდინარე პროექტები",
      "რა კურსები გაქვთ"
    ],
    respond: () => [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `ჩვენს სახელოსნოში ამჟამად მოქმედებს:<br>• ❄️ <strong>„ყინულოვანი სამყარო“</strong> (1-თვიანი ინტეგრირებული პროექტი • 4 კვირა, 8 შეხვედრა • დღეში 3 სთ) — პოლარული ბაზა, იგლუები, ყინულმჭრელი გემი, ცხოველების გამოძერწვა და Micro:bit ტემპერატურის კონტროლი!<br>• 🐝 <strong>„ფუსფუსა ფუტკრები“</strong> (1-თვიანი პროექტი • 3 კვირა, 6 შეხვედრა • დღეში 3 სთ) — ხის სკა, მცენარეების დარგვა, ნიადაგის ტენიანობის სენსორი და ანიმაცია.`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ასევე გვაქვს:<br>• ⚡ <strong>ერთდღიანი ვორქშოფები (1.5–2 სთ):</strong> 🐧 „მოფუსფუსე პინგვინი ყინულზე“, 🎄 „მანათობელი საახალწლო ბარათი“, 🏮 „თიხის მანათობელი ეკო-ლამპიონი“.<br>• 🤖 <strong>რობოტიკისა და კოდირების წრე:</strong> ყოველკვირეული პრაქტიკული მეცადინეობები (MakeCode, Scratch, Micro:bit, Arduino, Python)!`
      }
    ]
  }
];

/**
 * Intelligent Knowledge Matching Engine in Georgian
 * Automatically routes answers to Eko 🌿, Biti 💻, or both as a duo.
 */
function generateFussusaAiAnswers(rawQuery) {
  const normQuery = normalizeGeorgian(rawQuery);
  let results = [];

  const queryWords = normQuery.split(" ").filter(w => w.length > 1);
  const queryStems = [];
  queryWords.forEach(w => {
    getGeorgianStems(w).forEach(s => queryStems.push(s));
  });

  const asksOnlyEarth = (normQuery.includes("ეკო") || normQuery.includes("ეკოს")) && !normQuery.includes("ბიტ");
  const asksOnlyTech = (normQuery.includes("ბიტ") || normQuery.includes("ბიტის")) && !normQuery.includes("ეკო");

  const filterByTarget = (res) => {
    if (!res || !res.length) return res;
    if (asksOnlyEarth) {
      const filtered = res.filter(r => r.type === "earth");
      return filtered.length ? filtered : res;
    }
    if (asksOnlyTech) {
      const filtered = res.filter(r => r.type === "tech");
      return filtered.length ? filtered : res;
    }
    return res;
  };

  // 1. Direct Specific Child Age Inquiries (e.g., "7 წლისაა", "ჩემი შვილი არის 10 წლის")
  const ageMatch = rawQuery.match(/\b([4-9]|1[0-7])\b/);
  const age = ageMatch ? parseInt(ageMatch[1], 10) : null;
  const isGeneralAgeQuery = normQuery.includes("რა ასაკიდან") || normQuery.includes("რამდენი წლიდან") || normQuery.includes("ასაკობრივი ჯგუფ") || normQuery.includes("მინიმალური ასაკ") || normQuery.includes("ასაკობრივი ზღვარ");

  if (age !== null && !isGeneralAgeQuery && (normQuery.includes("წლის") || normQuery.includes("წლისაა") || normQuery.includes("შვილი") || normQuery.includes("ბავშვ") || normQuery.length < 15)) {
    if (age <= 8) {
      results.push({
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>${age} წლის ბავშვისთვის</strong> იდეალურია ჩვენი <strong>ერთ დღიანი ვორქშოფები</strong> (მაგ: 🐧 „მოფუსფუსე პინგვინი ყინულზე“ ან 🎄 „მანათობელი საახალწლო ბარათი“) — ბავშვი 1.5–2 საათში ქმნის საკუთარ ინტერაქტიულ ნივთს!`
      });
      results.push({
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ასევე შეუძლიათ შემოგვიერთდნენ <strong>რობოტიკის წრის საწყის მოდულში</strong> (ბლოკური ვიზუალური პროგრამირება MakeCode & Scratch Jr.)!`
      });
      return filterByTarget(results);
    } else if (age && age <= 12) {
      results.push({
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>${age} წლის ბავშვისთვის</strong> გვაქვს ორი გრანდიოზული ინტეგრირებული პროექტი:<br>• ❄️ <strong>„ყინულოვანი სამყარო“</strong> (4 კვირა, 8 შეხვედრა • 3 სთ) — პოლარული ბაზა, იგლუები, Micro:bit-ით ტემპერატურის მონიტორინგი და მოფუსფუსე ვიბრო-პინგვინები!<br>• 🐝 <strong>„ფუსფუსა ფუტკრები“</strong> (3 კვირა, 6 შეხვედრა • 3 სთ) — სკების მაკეტები, მცენარეების დარგვა, ნიადაგის ტენიანობის სენსორი და ციფრული ანიმაცია.`
      });
      results.push({
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `ხოლო რეგულარული განვითარებისთვის იდეალურია <strong>რობოტიკისა და კოდირების წრე</strong> (Micro:bit, Arduino, სენსორები & ეკო-ტექნოლოგიური სინთეზი)!`
      });
      return filterByTarget(results);
    } else if (age && age >= 13) {
      results.push({
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `<strong>${age} წლის მოზარდებისთვის</strong>:<br>• <strong>რობოტიკისა და კოდირების წრე</strong> — Arduino და ელექტრონიკა, რთული სენსორები, სერვო ძრავები და ავტომატიზაცია.<br>• <strong>1-თვიანი ინტეგრირებული პროექტი „ყინულოვანი სამყარო“ ❄️</strong> — პოლარული ეკოსისტემების კვლევა, კომპლექსური მაკეტები, Micro:bit-ით ტემპერატურის მონიტორინგი და სტოპ-მოუშენ ანიმაცია!`
      });
      return filterByTarget(results);
    }
  }

  // 2. Score Knowledge Modules from FUSFUSA_SITE_KNOWLEDGE
  let bestModule = null;
  let bestScore = 0;

  for (const module of FUSFUSA_SITE_KNOWLEDGE) {
    let score = 0;

    // Check intents (phrase matching)
    if (module.intents && Array.isArray(module.intents)) {
      for (const intent of module.intents) {
        const normIntent = normalizeGeorgian(intent);
        if (normQuery.includes(normIntent)) {
          score += 45;
          break;
        } else if (normIntent.includes(normQuery) && normQuery.length > 5) {
          score += 25;
          break;
        }
      }
    }

    // Check keywords & stems
    if (module.keywords && Array.isArray(module.keywords)) {
      for (const kw of module.keywords) {
        const normKw = normalizeGeorgian(kw);
        if (normKw.length < 2) continue;

        // Substring inside normalized query (e.g. "ხელმძღვანელ" inside "ვის ხელმძღვანელობს")
        if (normQuery.includes(normKw)) {
          score += 15;
        } else {
          const kwStems = getGeorgianStems(normKw);
          const hasMatch = kwStems.some(ks => 
            queryStems.some(qs => qs === ks || (ks.length >= 4 && qs.startsWith(ks)) || (qs.length >= 4 && ks.startsWith(qs)))
          );
          if (hasMatch) {
            score += 8;
          }
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestModule = module;
    }
  }

  // If a high-confidence knowledge match is found (score >= 5)
  if (bestScore >= 5 && bestModule) {
    const rawRes = bestModule.respond(normQuery);
    return filterByTarget(rawRes);
  }

  // 3. Creative / Crafting inquiries (e.g. "როგორ გავაკეთო", "მინდა შევქმნა")
  if (normQuery.includes("როგორ") || normQuery.includes("მინდა") || normQuery.includes("შექმნა") || normQuery.includes("გაკეთება") || normQuery.includes("აწყობა")) {
    if (normQuery.includes("ჩიტ") || normQuery.includes("სათამაშო") || normQuery.includes("ხე") || normQuery.includes("თიხ") || normQuery.includes("ძერწ") || normQuery.includes("ყვავილ")) {
      return filterByTarget([
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `რა შესანიშნავი იდეაა! სახელოსნოში ვიღებთ ნამდვილ ხეს, თიხასა და ეკო-მასალებს, უსაფრთხო ხელსაწყოებით ვამუშავებთ და ვაფერადებთ. მობრძანდით და პირველივე დღეს საკუთარი ხელით შექმნით საოცარ ნივთს!`
        }
      ]);
    } else if (normQuery.includes("რობოტ") || normQuery.includes("კოდ") || normQuery.includes("ძრავ") || normQuery.includes("სქემ") || normQuery.includes("ნათურ")) {
      return filterByTarget([
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `ფანტასტიკურია! რობოტის ან ჭკვიანი მოწყობილობის შესაქმნელად ვიყენებთ micro:bit ან Arduino მიკროკომპიუტერს, ძრავებს და სენსორებს. Scratch-ისა და MakeCode-ის ბლოკებით კი მას ვაძლევთ „ტვინს“! მოდი სახელოსნოში და შენ თვითონ აამუშავებ!`
        }
      ]);
    }
  }

  // 4. Fallback for unknown / unhandled questions
  return filterByTarget([
    {
      type: "earth",
      author: "🌿 ეკო (ფუსფუსა დედამიწა)",
      text: `სამწუხაროდ, ამ კონკრეტულ საკითხზე ინფორმაციას ჯერჯერობით არ ვფლობ.`
    },
    {
      type: "tech",
      author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
      text: `გთხოვთ, პირადად დაუკავშირდეთ ჩვენს სახელოსნოს და მენტორები სიამოვნებით გაგცემენ ამომწურავ პასუხს:<br>• 📞 ტელეფონი: <strong><a href="tel:+995577101301" style="color:var(--color-blue); text-decoration:underline;">+995 577 101 301</a></strong><br>• ✉️ ელფოსტა: <strong><a href="mailto:info@fusfusa.ge" style="color:var(--color-blue); text-decoration:underline;">info@fusfusa.ge</a></strong><br>• 📍 მისამართი: <strong>რუსთავი, რუსთაველის ქუჩა</strong><br>ან შეავსეთ <a href="contact.html#booking" style="color:var(--color-blue); font-weight:bold; text-decoration:underline;">საკონტაქტო / სარეგისტრაციო ფორმა</a>! ✨`
    }
  ]);
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}


