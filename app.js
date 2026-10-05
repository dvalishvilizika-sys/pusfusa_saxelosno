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
    title: "პროექტი „ფუსფუსა ფუტკრები“ 🐝",
    age: "8–12 წელი",
    pillar: "📅 ერთ თვიანი პროექტი (დედამიწა + ტექნოლოგიები)",
    schedule: "4 კვირა (8 შეხვედრა • 3-საათიანი მოდელი)",
    description: "უნიკალური 4-კვირიანი (8 შეხვედრა • 3-საათიანი) მოდელი: 30 წთ შემეცნება (ფუტკრები და ეკოსისტემები), 1.5 სთ სახელოსნო (ხის ნამდვილი სკა & თიხა) და 1 სთ რობოტიკა (Micro:bit ტემპერატურის კონტროლი და 2D ანიმაცია). საზეიმო ფინალი მშობლებთან ერთად!",
    modules: [
      "1. 30 წთ შემეცნება („დედამიწა“): ფუტკრების ანატომია, როლი ბუნებაში, სისტემური აზროვნება და მცენარეების დარგვა",
      "2. 1.5 სთ სახელოსნო („დედამიწა“): ხის დამუშავება, ნამდვილი სკის მაკეტის აწყობა და თიხის ყვავილების ძერწვა",
      "3. 1 სთ რობოტიკა & ანიმაცია („ტექნოლოგიები“): micro:bit სენსორით ტემპერატურისა და ტენიანობის გაზომვა",
      "4. 2D ციფრული ანიმაცია: ბავშვების მიერ დახატული ფუტკრებისა და გარემოს გაცოცხლება ეკრანზე",
      "5. საზეიმო ფინალი (მე-8 შეხვედრა): საერთო დიდი მაკეტის პრეზენტაცია მშობლებთან ერთად, კოდების ჩვენება დიდ ეკრანზე და სერტიფიკატები!"
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

  // Open Modal Details (if modal element exists)
  if (modal) {
    document.querySelectorAll(".open-details-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const courseKey = btn.dataset.course;
        const data = syllabusData[courseKey];
        if (!data) return;

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
  }

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
    title: "პროექტი: „ფუსფუსა ფუტკრები“",
    badge: "🐝 პირველი პროექტი",
    meta: {
      duration: "4 კვირა",
      meetings: "8 შეხვედრა (კვირაში 2 დღე)",
      dailyHours: "დღეში 3 საათი",
      age: "8–12 წელი"
    },
    tagline: "ფუტკრების ჯადოსნური სამყარო, მცენარეების დარგვა, მაკეტების შექმნა, micro:bit-ით ნიადაგის ტენიანობის კონტროლი და საკუთარი ანიმაციის გაცოცხლება!",
    weeks: [
      {
        weekNumber: 1,
        title: "კვირა 1: გაცნობა, ეკოსისტემები, თესვა & micro:bit-ის პირველი ნაბიჯები",
        days: [
          {
            dayName: "დღე 1 (შეხვედრა 1)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "ფუტკრების ცხოვრების შესახებ საუბარი: კითხვა/პასუხი და ანატომიის გაცნობა",
                  "არსებული ცოდნის გაერთიანება და გაანალიზება",
                  "გაჩენილ, უპასუხო საკითხებზე ინფორმაციის მოძიება — შერეულ გუნდებად დაყოფა",
                  "ვსწავლობთ ინფორმაციის მოძიებას, დამუშავებასა და შენახვას",
                  "ძირითადი თემები: გარეული, შინაური, საცხოვრებელი გარემო, საკვები, თაფლის შეგროვება"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "თემა: ქოთანი და ეკო-გარემო",
                  "თიხის ქოთნის მოხატვა და დეკორირება",
                  "ნიადაგის მომზადება და თაფლოვანი მცენარეების თესლის დარგვა"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "თემა: მიკრობიტი (micro:bit) — პირველი ნაცნობობა მიკროკონტროლერთან",
                  "LED ეკრანის მართვა და სიმბოლოების გამოტანა",
                  "შეჯამება: მიღებული ინფორმაციის ცოდნად გარდაქმნა სახალისო ბლიც-კითხვებით"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2 (შეხვედრა 2)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას და ვრწყავთ ქოთნებს",
                  "ცოდნის გახსენება: სახალისო ბლიც-კითხვები",
                  "ფუტკრების როლი ყვავილების დამტვერვასა და ბუნების ციკლებში"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "თიხასთან მუშაობა: ფუტკრების გამოძერწვა და ფერადი ყვავილების შექმნა",
                  "ნატიფი მოტორიკა და ფორმების დამუშავება"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "micro:bit-ის სქემები და პირველი კოდირება MakeCode-ში",
                  "ღილაკებზე (A და B) ინტერაქტიული რეაქციების დაპროგრამება",
                  "დღის შეჯამება და მიღებული შედეგების განხილვა"
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 2,
        title: "კვირა 2: ხის ნამდვილი სკა, ბიომიმიკრია & ტემპერატურის კონტროლი",
        days: [
          {
            dayName: "დღე 1 (შეხვედრა 3)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას, ვრწყავთ ქოთნებს",
                  "საცხოვრებელი გარემოს კვლევა: გარეული ფუტკრების ბუდეები vs შინაური ფუტკრების სკა",
                  "სახლში წასაღები მნიშვნელოვანი მესიჯი: გარემოზე ზრუნვა და მწერების დაცვა"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "ხის დამუშავება: ნამდვილი ხის სკის მაკეტის აწყობა და დეტალების შეერთება",
                  "ხის ზუმფარით დამუშავება და უსაფრთხო იარაღების გამოყენება"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "micro:bit-ის ჩაშენებული ტემპერატურის სენსორის გაცნობა",
                  "„ჭკვიანი სკის“ ტემპერატურის კონტროლის ლოგიკა და ალგორითმი",
                  "დღის შეჯამება და კითხვა-პასუხი"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2 (შეხვედრა 4)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ით ნიადაგის ტენიანობის შემოწმება & მცენარეების ზრდაზე დაკვირვება",
                  "ბიომიმიკრია: ფიჭის ექვსკუთხა გეომეტრია და საინჟინრო სიმტკიცე ბუნებაში"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "სკის შიდა ფიჭების მაკეტების შექმნა და დეკორირება",
                  "თიხის ფუტკრებისა და მცენარეების ინტეგრირება ხის სკასთან"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "ტემპერატურისა და ტენიანობის მაჩვენებლების ვიზუალიზაცია micro:bit-ზე",
                  "პირობითი ოპერატორები (If/Else) — გაფრთხილების სიგნალი მეფუტკრისთვის",
                  "კოდების შემოწმება და ტესტირება რეალურ მაკეტზე"
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 3,
        title: "კვირა 3: მაკეტების გაერთიანება, ამბის შექმნა & 2D ციფრული ანიმაცია",
        days: [
          {
            dayName: "დღე 1 (შეხვედრა 5)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას, ვრწყავთ ქოთნებს",
                  "ეკო-ამბის მოფიქრება: პერსონაჟების ხასიათების შექმნა და სიუჟეტის ჩაწერა",
                  "როლების განაწილება გუნდებში"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "ყველა მოსწავლის ნამუშევრის 1 დიდ ერთობლივ მაკეტად გაერთიანება",
                  "საფოსტო ყუთის, ყვავილების ველისა და სკების სრული ეკოსისტემის განლაგება",
                  "მაკეტების დეტალების საბოლოო დახვეწა"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "2D ციფრული ანიმაციის საფუძვლები",
                  "დახატული და გამოძერწილი პერსონაჟების ციფრული გაცნობა",
                  "პირველი ანიმაციური მოძრაობების დაპროგრამება"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2 (შეხვედრა 6)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ის გამოყენებით ვზომავთ დარგული მცენარეების ნიადაგის ტენიანობას, ვრწყავთ ქოთნებს",
                  "სცენარის გახსენება, დიალოგების დახვეწა და ფოტოგადაღების ლოკაციების შერჩევა"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "შექმნილი მაკეტისა და პერსონაჟების პროფესიული ფოტოების გადაღება",
                  "სხვადასხვა რაკურსისა და განათების შერჩევა ანიმაციისთვის"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "ფოტოების ციფრული გაცოცხლება — 2D ანიმაციის ტექნოლოგიები",
                  "ფუტკრის ფრენისა და ყვავილების მოძრაობის სინთეზი",
                  "დღის შეჯამება და მიღწეული შედეგების გადახედვა"
                ]
              }
            ]
          }
        ]
      },
      {
        weekNumber: 4,
        title: "კვირა 4: კოდები დიდ ეკრანზე & საზეიმო ფინალი მშობლებთან ერთად",
        days: [
          {
            dayName: "დღე 1 (შეხვედრა 7)",
            hours: [
              {
                badge: "საათი 1 (30 წთ): შემეცნება 🌿",
                badgeClass: "hour-badge-1",
                topics: [
                  "micro:bit-ით დარგული მცენარეების ნიადაგის ტენიანობის გაზომვა, ქოთნების მორწყვა",
                  "ფოტოების გაცოცხლება და ციფრული ანიმაციის საბოლოო მონტაჟი"
                ]
              },
              {
                badge: "საათი 2 (1.5 სთ): სახელოსნო 🎨",
                badgeClass: "hour-badge-2",
                topics: [
                  "პროექტის შეჯამება: საპრეზენტაციო სცენარის დამუშავება",
                  "საპრეზენტაციო როლების გადანაწილება ბავშვებს შორის (მთხრობელი, ინჟინერი, მეფუტკრე)"
                ]
              },
              {
                badge: "საათი 3 (1 სთ): რობოტიკა 💻",
                badgeClass: "hour-badge-3",
                topics: [
                  "რობოტიკა — მიღწეული შედეგების შეჯამება",
                  "საპრეზენტაციოდ მომზადება: პლანშეტიდან დიდ ეკრანზე ბავშვების მიერ შექმნილი კოდების გადატანა",
                  "გენერალური რეპეტიცია და ტექნიკური გამართვა"
                ]
              }
            ]
          },
          {
            dayName: "დღე 2 (შეხვედრა 8): საზეიმო ფინალი & გამოფენა! 🎉",
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
                  "ერთობლივი გრანდიოზული მაკეტის ჩვენება (ხის სკები, თიხის ყვავილები, მცენარეები)",
                  "გაცოცხლებული 2D ანიმაციისა და ბავშვების მიერ შექმნილი კოდების ჩვენება დიდ ეკრანზე",
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
  const monthProjectSubpanel = document.getElementById("month-project-subpanel");
  const roboticsSubpanel = document.getElementById("robotics-subpanel");
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
      if (val < 15) groupCountInput.value = val + 1;
    });
    groupCountInput.addEventListener("change", () => {
      let val = parseInt(groupCountInput.value, 10) || 10;
      if (val < 2) val = 2;
      if (val > 15) val = 15;
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
        if (monthProjectSubpanel) monthProjectSubpanel.style.display = "none";
        if (roboticsSubpanel) roboticsSubpanel.style.display = "none";
        const currentMode = workshopModeInput ? workshopModeInput.value : "single";
        setWorkshopMode(currentMode);
      } else if (val === "bees-project" || val === "ice-world-project") {
        if (workshopSubpanel) workshopSubpanel.style.display = "none";
        if (monthProjectSubpanel) monthProjectSubpanel.style.display = "block";
        if (roboticsSubpanel) roboticsSubpanel.style.display = "none";
        setWorkshopMode("single");
      } else if (val === "robotics-club") {
        if (workshopSubpanel) workshopSubpanel.style.display = "none";
        if (monthProjectSubpanel) monthProjectSubpanel.style.display = "none";
        if (roboticsSubpanel) roboticsSubpanel.style.display = "block";
        setWorkshopMode("single");
      } else {
        if (workshopSubpanel) workshopSubpanel.style.display = "none";
        if (monthProjectSubpanel) monthProjectSubpanel.style.display = "none";
        if (roboticsSubpanel) roboticsSubpanel.style.display = "none";
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
      } else if (!targetPill && (selectedParam.includes("ice") || selectedParam.includes("polar"))) {
        targetPill = document.querySelector(`.dir-pill[data-value="ice-world-project"]`);
      } else if (!targetPill && selectedParam.includes("card")) {
        targetPill = document.querySelector(`.dir-pill[data-value="workshop-card"]`);
      } else if (!targetPill && (selectedParam.includes("penguin") || selectedParam.includes("pingv") || selectedParam.includes("vibro"))) {
        targetPill = document.querySelector(`.dir-pill[data-value="workshop-penguin"]`);
      } else if (!targetPill && (selectedParam.includes("clay") || selectedParam.includes("lamp"))) {
        targetPill = document.querySelector(`.dir-pill[data-value="workshop-clay-lamp"]`);
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
    const defaultPill = document.querySelector('.dir-pill[data-value="bees-project"]') || dirPills[0];
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
            <button class="ai-prompt-btn" data-query="რა ღირს სწავლა და ვორქშოფები?">💰 რა ღირს სწავლა და ვორქშოფები?</button>
            <button class="ai-prompt-btn" data-query="ვინ არიან სახელოსნოს ხელმძღვანელები?">👩‍🏫 ვინ არიან ხელმძღვანელები?</button>
            <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ფუსფუსა ფუტკრებზე“">🐝 პროექტი „ფუსფუსა ფუტკრები“</button>
            <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ყინულოვან სამყაროზე“">❄️ პროექტი „ყინულოვანი სამყარო“</button>
            <button class="ai-prompt-btn" data-query="რა არის ვორქშოფი „მოფუსფუსე პინგვინი“?">🐧 ვორქშოფი: პინგვინი ყინულზე</button>
            <button class="ai-prompt-btn" data-query="რა არის თიხის მანათობელი ეკო-ლამპიონი?">🕯️ ვორქშოფი: თიხის ლამპიონი</button>
            <button class="ai-prompt-btn" data-query="სად მდებარეობს სახელოსნო და რა არის კონტაქტი?">📍 სად მდებარეობს სახელოსნო?</button>
            <button class="ai-prompt-btn" data-query="როგორ დავრეგისტრირდეთ?">📅 როგორ დავრეგისტრირდეთ?</button>
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
 * ცენტრალიზებული ფაქტები, ოფლაინ NLU, მორფოლოგიური სტემერი, ლათინური ტრანსლიტერატორი,
 * Levenshtein fuzzy matching, სესიის მეხსიერება, ასაკობრივი მატრიცა და უსაფრთხოების ფილტრები.
 */

// 1. ცენტრალიზებული მონაცემთა საცავი (Single Source of Truth)
const SITE_FACTS = {
  name: "სახელოსნო „ფუსფუსა“",
  slogans: {
    primary: "ვუფრთხილდებით, ვზრუნავთ, ვქმნით",
    mission: "გუშინ მოთამაშე — დღეს შემოქმედი"
  },
  contacts: {
    city: "რუსთავი",
    address: "რუსთავი, რუსთაველის ქუჩა",
    phone: "+995 514 01 88 33",
    email: "info@fusfusa.ge",
    mapsUrl: "https://maps.app.goo.gl/sRnCucsniBFkQdWZ7",
    facebookUrl: "https://www.facebook.com/profile.php?id=61589642798492",
    youtubeUrl: "https://www.youtube.com/@fusfusa",
    hours: "სამშაბათი – კვირა: 10:00 – 19:00 (ორშაბათი: დასვენების დღე)"
  },
  pricing: {
    workshop: 50,
    monthProject: 200,
    roboticsClub: 120, // monthly
    materialsIncluded: true,
    trialFree: true // პირველი გაცნობითი ვიზიტი უფასოა
  },
  ageRange: { min: 6, max: 15 },
  programs: {
    "workshop-card": {
      id: "workshop-card",
      title: "მანათობელი საახალწლო ბარათი",
      emoji: "🎄",
      category: "workshop",
      categoryName: "ერთდღიანი ვორქშოფი",
      price: 50,
      ageMin: 6,
      ageMax: 14,
      duration: "1 შეხვედრა • 1.5–2 საათი",
      description: "იდეალური ვორქშოფი ელექტრონიკის საწყისების გასაცნობად კოდირების გარეშე. ქაღალდის ინჟინერია („დედამიწა“) + სპილენძის ლენტი, 3V ბრტყელი ელემენტი (CR2032) და LED ნათურა შეკრული წრედის (Closed Circuit) პრინციპით („ტექნოლოგიები“). ბარათის დაჭერისას ნახატი ჯადოსნურად ნათდება!",
      takeHome: "საკუთარი ხელით შექმნილი ინტერაქტიული მანათობელი ბარათი."
    },
    "workshop-penguin": {
      id: "workshop-penguin",
      title: "მოფუსფუსე პინგვინი ყინულზე",
      emoji: "🐧",
      category: "workshop",
      categoryName: "ერთდღიანი ვორქშოფი",
      price: 50,
      ageMin: 7,
      ageMax: 10,
      duration: "1 შეხვედრა • 1.5–2 საათი",
      description: "კინეტიკური ინჟინერიისა და პოლარული ბუნებისმეტყველების სინთეზი! მუყაოს პინგვინისა და ფოლგის ყინულის მოედნის შექმნა („დედამიწა“), 3V ელემენტისა და მინი-ვიბროძრავის (Micro vibration motor) ინტეგრირება („ტექნოლოგიები“). წრედის შეკვრისას ძრავი ვიბრირებს, პინგვინი ყინულზე სრიალებს და ეწყობა მხიარული რბოლა!",
      takeHome: "საკუთარი რობო-პინგვინი, რომელიც ყინულზე დამოუკიდებლად სრიალებს."
    },
    "workshop-clay-lamp": {
      id: "workshop-clay-lamp",
      title: "თიხის მანათობელი ეკო-ლამპიონი",
      emoji: "🕯️",
      category: "workshop",
      categoryName: "ერთდღიანი ვორქშოფი",
      price: 50,
      ageMin: 6,
      ageMax: 12,
      duration: "1 შეხვედრა • 2 საათი",
      description: "ბუნებრივი თიხის ძერწვა, გუმბათოვანი ფორმის ამოყვანა, ორნამენტული პერფორაცია სინათლის გასასვლელად („დედამიწა“) და უსაფრთხო ავტონომიური LED მანათობელი მოდულის მონტაჟი („ტექნოლოგიები“).",
      takeHome: "საკუთარი ხელით შექმნილი ულამაზესი მაგიდის ეკო-სანათი."
    },
    "bees-project": {
      id: "bees-project",
      title: "პროექტი „ფუსფუსა ფუტკრები“",
      emoji: "🐝",
      category: "project",
      categoryName: "1-თვიანი ინტეგრირებული პროექტი",
      price: 200,
      ageMin: 8,
      ageMax: 12,
      duration: "4 კვირა (8 შეხვედრა • დღეში 3 სთ)",
      description: "3-საათიანი უნიკალური ინტეგრირებული მოდელი: 30 წთ შემეცნება (ფუტკრის ანატომია, ეკოსისტემები, თესვა), 1.5 სთ სახელოსნო (ხის ნამდვილი სკა, თიხის ყვავილები და ფუტკრები, ქოთნის მოხატვა), 1 სთ რობოტიკა (Micro:bit ტემპერატურისა და ნიადაგის ტენიანობის სენსორი, MakeCode, 2D ანიმაცია).",
      takeHome: "ფინალური გრანდიოზული მაკეტის გამოფენა და კოდების ჩვენება დიდ ეკრანზე მშობლებთან ერთად (მე-8 შეხვედრა) + სერტიფიკატები."
    },
    "ice-world-project": {
      id: "ice-world-project",
      title: "ინტეგრირებული პროექტი „ყინულოვანი სამყარო“",
      emoji: "❄️",
      category: "project",
      categoryName: "1-თვიანი ინტეგრირებული პროექტი",
      price: 200,
      ageMin: 8,
      ageMax: 14,
      duration: "4 კვირა (8 შეხვედრა • დღეში 3 სთ)",
      description: "არქტიკისა და ანტარქტიდის კვლევა, პოლარული ბაზა, „მინი-მყინვარი“, იგლუები, ყინულმჭრელი გემი, ცხოველების გამოძერწვა, Micro:bit-ით ტემპერატურის უწყვეტი მონიტორინგი და LED ანიმაციები, სტოპ-მოუშენ ფოტოების ციფრული გაცოცხლება და ვიბრო-პინგვინების ინტეგრირება დიდ მაკეტში.",
      takeHome: "საზეიმო ფინალი & გამოფენა მშობლებთან ერთად (მე-8 შეხვედრა) + სერტიფიკატები."
    },
    "robotics-club": {
      id: "robotics-club",
      title: "რობოტიკისა და კოდირების წრე",
      emoji: "🤖",
      category: "club",
      categoryName: "რობოტიკის წრე",
      price: 120, // monthly
      ageMin: 8,
      ageMax: 15,
      isPaused: true,
      groups: "8–11 წელი და 12–15 წელი",
      duration: "კვირაში 2 შეხვედრა • 2 საათი (უწყვეტი წრე)",
      description: "სრული გზა ვიზუალური პროგრამირებიდან (Code.org, CodeMonkey, Scratch, MakeCode) ტექსტურ კოდირებამდე (Python-ის საწყისები) და რეალურ მიკროკონტროლერებამდე (Micro:bit, Arduino). სენსორები (ტენიანობა, სინათლე, ტემპერატურა, მოძრაობა), სერვო ძრავები & ეკო-ტექნოლოგიური სინთეზი.",
      takeHome: "საკუთარი ალგორითმებით მართვადი რობოტები, თამაშები და ჭკვიანი სისტემები."
    }
  },
  mentors: {
    irma: {
      name: "ირმა დვალიშვილი",
      role: "„ფუსფუსა დედამიწის“ ხელმძღვანელი",
      badge: "🌿 დედამიწა",
      bio: "ხელოვნების, ეკო-დიზაინისა და სისტემური აზროვნების პედაგოგი. ირმას მიზანია, ბავშვებმა შეისწავლონ ცოცხალი თუ არაცოცხალი სისტემების სასიცოცხლო ციკლები, მოძიებული ინფორმაციით, საკუთარი ფანტაზიითა და ბუნებრივი მასალებით რეალურ, ხელნაკეთ ნივთებად გარდაქმნან.",
      competencies: [
        "🌱 სასიცოცხლო ციკლები",
        "🔄 სისტემური აზროვნება",
        "🎨 პრაქტიკული ტექნიკები",
        "💡 შემოქმედებითი წარმოსახვა",
        "✋ ნატიფი მოტორიკა",
        "🌟 თვითგამოხატვა"
      ]
    },
    zika: {
      name: "ზიკა დვალიშვილი",
      role: "„ფუსფუსა ტექნოლოგიების“ ხელმძღვანელი",
      badge: "💻 ტექნოლოგიები",
      bio: "STEM განათლების, რობოტიკისა და ეკო-ტექნოლოგიური სინთეზის ხელმძღვანელი. ზიკას მიზანია, ტექნოლოგია ბავშვისთვის აქციოს შემოქმედების ჯადოსნურ ინსტრუმენტად: MakeCode/Scratch-ით ალგორითმული აზროვნების ჩამოყალიბებიდან Micro:bit-ითა და Arduino-თი ფიზიკური ნივთების გაცოცხლებამდე და ბუნებასთან დაკავშირებამდე.",
      competencies: [
        "🔄 ალგორითმული აზროვნება",
        "🌿 ეკო-ტექნოლოგიური სინთეზი",
        "💻 ბლოკური კოდირება",
        "🤖 რობოტიკა და სენსორები",
        "🔍 ინფორმაციის სანდოობა",
        "🌟 ტექნოლოგიური თავდაჯერებულობა"
      ]
    }
  },
  showcase: [
    { author: "ანა", age: 10, title: "მცენარეთა ჭკვიანი ეკო-დეტექტორი", desc: "Teachable Machine-ით ნეირონული ქსელის გაწვრთნა, რომელიც ვებკამერით ამოიცნობს მცენარის მორწყვის საჭიროებას." },
    { author: "სანდრო", age: 8, title: "მფრინავი ფუტკურა და მისი საათი", desc: "ქაღალდზე დახატული ფუტკარი-რობოტის დასკანერება, ციფრული დამუშავება და 2D კადრობრივი ანიმაცია აუდიო ეფექტებით." },
    { author: "დათო", age: 12, title: "ჭკვიანი თვით-მორწყავი რობოტი", desc: "Arduino-ზე დაპროგრამებული ნიადაგის ტენიანობის სენსორი და წყლის მინი-ტუმბო ხის კორპუსში." },
    { author: "ნიკა & ლუკა", age: 11, title: "კონტეინერი ხის ამწე-ექსკავატორი", desc: "ხის დეტალებისგან და პიროგრაფიისგან შექმნილი მოძრავი ეკოლოგიური ამწე." }
  ],
  upcoming: [
    "🌱 ჭკვიანი სათბური (Smart Greenhouse)",
    "🌊 წყალქვეშა სამყაროს რობოტები",
    "🪐 კოსმოსური სადგური & ხელოვნური ინტელექტი"
  ],
  registration: {
    url: "contact.html#booking",
    trialFreeNote: "პირველი გაცნობითი ვიზიტი და სახელოსნოს დათვალიერება სრულიად უფასოა!",
    groupAllowed: "ჯგუფური რეგისტრაცია (2-დან 15 ბავშვამდე) მოქმედებს ერთდღიან ვორქშოფებზე."
  }
};

// 2. სესიის მეხსიერება დიალოგისთვის (მხოლოდ მიმდინარე JS მეხსიერება, არა localStorage)
const chatSessionContext = {
  lastProgramId: null,
  lastTopic: null,
  knownChildAges: [],
  lastQueryText: ""
};

// 3. ენობრივი დამუშავების დამხმარე მოდულები (NLU)

// Stop-words სია (ზოგადი სიტყვები, რომლებმაც წონა არ უნდა გაზარდონ)
const STOP_WORDS = new Set([
  "და", "თუ", "ან", "კი", "რომ", "არის", "იყოს", "ეს", "რა", "როგორ",
  "როდის", "სად", "რატომ", "ჩვენ", "თქვენ", "მე", "შენ", "მას", "გვაქვს",
  "გაქვთ", "აქვს", "იქნება", "შეიძლება", "უნდა", "ხოლმე", "ძალიან", "კიდევ",
  "გთხოვთ", "მითხარით", "მითხარი", "გვითხარით", "მაინტერესებს", "გვაინტერესებს"
]);

// ქართული სიტყვიერი რიცხვების ლექსიკონი ასაკის ამოსაცნობად
const GEORGIAN_NUMBER_WORDS = {
  "ექვს": 6, "ექვსი": 6, "შვიდ": 7, "შვიდი": 7, "რვა": 8, "ცხრა": 9, "ათ": 10, "ათი": 10,
  "თერთმეტ": 11, "თერთმეტი": 11, "თორმეტ": 12, "თორმეტი": 12, "ცამეტ": 13, "ცამეტი": 13,
  "თოთხმეტ": 14, "თოთხმეტი": 14, "თხუთმეტ": 15, "თხუთმეტი": 15, "თექვსმეტ": 16, "თექვსმეტი": 16,
  "ჩვიდმეტ": 17, "ჩვიდმეტი": 17
};

// ლათინური ტრანსლიტერატორი ქართულ კლავიატურაზე
function transliterateLatinToGeorgian(text) {
  if (!text || !/[a-zA-Z]/.test(text)) return text;

  let s = text;

  // პირველ რიგში დიდი ასოების ტიპური ქართული კლავიატურული დამთხვევები
  const upperMap = {
    'T': 'თ', 'W': 'ჭ', 'C': 'ჩ', 'R': 'ღ', 'J': 'ჟ', 'S': 'შ', 'Z': 'ძ'
  };
  for (const [eng, geo] of Object.entries(upperMap)) {
    s = s.split(eng).join(geo);
  }

  s = s.toLowerCase();

  // დიგრაფების ჩანაცვლება
  const digraphs = [
    ["sh", "შ"], ["ch", "ჩ"], ["zh", "ჟ"], ["dz", "ძ"],
    ["ts", "ც"], ["kh", "ხ"], ["gh", "ღ"], ["th", "თ"]
  ];
  for (const [dig, geo] of digraphs) {
    s = s.split(dig).join(geo);
  }

  // ერთეული სიმბოლოების რუკა (t -> ტ, რადგან robotika, futkrebis, proeqti, boti, karti)
  const charMap = {
    'a': 'ა', 'b': 'ბ', 'g': 'გ', 'd': 'დ', 'e': 'ე', 'v': 'ვ', 'z': 'ზ',
    't': 'ტ', 'i': 'ი', 'k': 'კ', 'l': 'ლ', 'm': 'მ', 'n': 'ნ', 'o': 'ო',
    'p': 'პ', 'j': 'ჯ', 'r': 'რ', 's': 'ს', 'u': 'უ', 'f': 'ფ', 'q': 'ქ',
    'y': 'ყ', 'w': 'წ', 'x': 'ხ', 'c': 'ც', 'h': 'ჰ'
  };

  let out = "";
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    out += charMap[ch] || ch;
  }
  return out;
}

// ქართული ტექსტის ნორმალიზატორი
function normalizeGeorgian(text) {
  if (!text) return "";
  const translit = transliterateLatinToGeorgian(text);
  return translit
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'„“»«\r\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// გაუმჯობესებული ქართული მორფოლოგიური სტემერი (ბრუნვები, მრავლობითი, თანდებულები)
function getGeorgianStems(word) {
  if (!word || word.length <= 3) return [word];
  const stems = [word];
  const suffixes = [
    // რთული სუფიქსები / თანდებულები მრავლობითით
    "ებისთვის", "ებთან", "ებამდე", "ებში", "ებზე", "ებმა", "ების", "ებს", "ებო", "ები", "ებ",
    // ბრუნვისა და თანდებულის ნიშნები მხოლობითში
    "ისთვის", "ამდე", "თან", "ში", "ზე", "ით", "ად", "ის", "მა", "დან", "გან", "ავით", "ურთ", "ო", "ი", "ს"
  ];

  for (const sfx of suffixes) {
    if (word.endsWith(sfx) && word.length - sfx.length >= 3) {
      stems.push(word.slice(0, -sfx.length));
      break;
    }
  }
  return stems;
}

// Levenshtein მანძილის ალგორითმი Fuzzy Matching-ისთვის
function levenshteinDistance(s1, s2) {
  if (s1 === s2) return 0;
  if (!s1.length) return s2.length;
  if (!s2.length) return s1.length;

  const d = [];
  for (let i = 0; i <= s1.length; i++) d[i] = [i];
  for (let j = 0; j <= s2.length; j++) d[0][j] = j;

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }
  return d[s1.length][s2.length];
}

function isFuzzyMatch(w1, w2) {
  if (w1 === w2) return true;
  if (Math.abs(w1.length - w2.length) > 2) return false;
  const maxLen = Math.max(w1.length, w2.length);
  if (maxLen <= 3) return w1 === w2;
  const maxDist = maxLen >= 7 ? 2 : 1;
  return levenshteinDistance(w1, w2) <= maxDist;
}

// ასაკების ჭკვიანი ამოცნობა (ციფრები, სიტყვიერი რიცხვები, რამდენიმე ბავშვი)
function extractAgesFromText(text) {
  const norm = normalizeGeorgian(text);
  const foundAges = new Set();

  // ციფრები 5-დან 17-მდე
  const digitMatches = norm.match(/\b([5-9]|1[0-7])\b/g);
  if (digitMatches) {
    digitMatches.forEach(d => foundAges.add(parseInt(d, 10)));
  }

  // ქართული სიტყვიერი რიცხვები
  const words = norm.split(" ");
  for (const w of words) {
    if (GEORGIAN_NUMBER_WORDS[w]) {
      foundAges.add(GEORGIAN_NUMBER_WORDS[w]);
    } else {
      const stems = getGeorgianStems(w);
      for (const st of stems) {
        if (GEORGIAN_NUMBER_WORDS[st]) {
          foundAges.add(GEORGIAN_NUMBER_WORDS[st]);
          break;
        }
      }
    }
  }

  return Array.from(foundAges).sort((a, b) => a - b);
}

// არათემატური შეკითხვების ამომცნობი (OutOfScope Guard)
function isOutOfScope(normText) {
  const oosKeywords = [
    "პოლიტიკ", "არჩევნ", "პარლამენტ", "პრეზიდენტ", "პრემიერ", "მთავრობ", "ოპოზიცი", "პარტი",
    "წამალ", "ექიმ", "დიაგნოზ", "დაავადებ", "ვირუს", "მკურნალობ", "აფთიაქ", "ტკივილ",
    "რელიგი", "ეკლესი", "ჰოროსკოპ", "ასტროლოგი", "ზოდიაქ",
    "კრიპტო", "ბიტკოინ", "სესხ", "კრედიტ", "ტოტალიზატორ", "კაზინო", "ფსონ",
    "ამინდ", "იწვიმებს", "პროგნოზ",
    "საშინაო დავალება გამიკეთე", "დამიწერე რეფერატ"
  ];
  return oosKeywords.some(kw => normText.includes(kw));
}

// პირადი მონაცემების დაცვის შემმოწმებელი
function containsPersonalData(rawText, normText) {
  const phonePattern = /(?:\+?995)?\s*5\d{2}[\s-]?\d{2}[\s-]?\d{2}[\s-]?\d{2}/;
  if (phonePattern.test(rawText)) return true;
  if (normText.includes("პირადი ნომერი") || normText.includes("პირადობა") || normText.includes("პასპორტ")) return true;
  return false;
}

// სინონიმების ლექსიკონი
const SYNONYMS = {
  price: ["ფას", "ღირს", "ღირებულებ", "გადასახად", "საფასურ", "ტარიფ", "თანხ", "რა ჯდება", "რამდენია"],
  workshop: ["ვორქშოფ", "მასტერკლას", "ერთდღიან", "ერთ დღიან", "ერთჯერად"],
  project: ["პროექტ", "ერთთვიან", "ერთ თვიან", "თვიან"],
  club: ["წრე", "კლუბ", "უწყვეტ", "ყოველკვირეულ"],
  location: ["სად", "მისამართ", "ლოკაცი", "ადგილმდებარეობ", "რუკ", "როგორ მოვიდეთ", "სადაა", "რომელ ქუჩაზე"],
  contact: ["ტელეფონ", "ნომერ", "მეილ", "ელფოსტ", "კონტაქტ", "დარეკვ", "დაკავშირებ", "ფეისბუქ", "facebook"],
  mentor: ["ხელმძღვანელ", "დამფუძნებელ", "მენტორ", "მასწავლებელ", "პედაგოგ", "ვინ ასწავლის", "ვინ უძღვება"],
  registration: ["რეგისტრაცი", "ჩაწერ", "დაჯავშნ", "დარეგისტრირ", "ვიზიტ", "როგორ ჩავეწეროთ"],
  freeTrial: ["უფასო", "საცდელ", "გაცნობით", "პირველ შეხვედრ", "პირველ დღე"],
  materials: ["მასალ", "ხელსაწყო", "რა მოვიტანოთ", "თან წამოღება", "თან მოტანა", "რა სჭირდება"],
  duration: ["ხანგრძლივობ", "რამდენ ხანს", "რამდენი საათი", "რამდენი კვირა", "დრო"],
  schedule: ["გრაფიკ", "განრიგ", "სამუშაო საათ", "როდის მუშაობთ", "როდის ტარდება", "დრო"],
  group: ["ჯგუფ", "სკოლ", "კლას", "ექსკურსი", "კოლექტივ"]
};

// 4. ცოდნის მოდულები (28 სრულფასოვანი მოდული, აგებული SITE_FACTS-ზე)
const FUSFUSA_SITE_KNOWLEDGE = [
  // 1. ყინულოვანი სამყარო (1-Month Project)
  {
    id: "project_ice_world",
    programId: "ice-world-project",
    keywords: ["ყინულოვან", "ყინულოვანი", "ყინულ", "არქტიკ", "ანტარქტიდ", "პოლარულ", "მყინვარ", "დათვ", "სელაპ", "იგლუ", "ყინულმჭრელ"],
    intents: ["ყინულოვანი სამყარო", "ყინულოვან სამყაროზე", "პოლარული ბაზა", "არქტიკა", "ანტარქტიდა", "მინი მყინვარი"],
    respond: () => {
      const p = SITE_FACTS.programs["ice-world-project"];
      chatSessionContext.lastProgramId = p.id;
      chatSessionContext.lastTopic = "project_ice_world";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>${p.title} ❄️🧊🐧</strong> — ${p.categoryName}ა (${p.duration} • ${p.ageMin}–${p.ageMax} წელი • <strong>💰 ${p.price} ლარი</strong>):<br>• <strong>საათი 1 (შემეცნება & ბუნება):</strong> არქტიკისა და ანტარქტიდის ეკოსისტემები, პოლარული ცხოველები (დათვები, პინგვინები, სელაპები), კვების ჯაჭვი და კლიმატის ცვლილება.<br>• <strong>საათი 2 (სახელოსნო & ხელსაქმე):</strong> პოლარული ბაზის შექმნა (მუყაო, ფოლგა), „მინი-მყინვარი“, იგლუები, ყინულმჭრელი გემი, ცხოველების გამოძერწვა და 1 დიდ მაკეტად გაერთიანება!`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>საათი 3 (რობოტიკა & ანიმაცია):</strong> Micro:bit-ით ტემპერატურის უწყვეტი მონიტორინგი და LED ანიმაციები, სტოპ-მოუშენ ფოტოების ციფრული გაცოცხლება, ვიბრაციული პინგვინების ინტეგრირება დიდ მაკეტში.<br>• <strong>${p.takeHome}</strong><br><a href="contact.html?project=${p.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ პროექტზე რეგისტრაცია →</a>`
        }
      ];
    }
  },

  // 2. მოფუსფუსე პინგვინი ყინულზე (1-Day Workshop)
  {
    id: "workshop_penguin",
    programId: "workshop-penguin",
    keywords: ["პინგვინ", "მოფუსფუსე", "ვიბრო", "ვიბრაცი", "სრიალ", "ფოლგ", "ხახუნ", "ძრავ", "ვიბროძრავ", "cr2032"],
    intents: ["მოფუსფუსე პინგვინი", "პინგვინი ყინულზე", "პინგვინის ვორქშოფი", "ხახუნის ძალა", "ვიბრო ძრავი"],
    respond: () => {
      const p = SITE_FACTS.programs["workshop-penguin"];
      chatSessionContext.lastProgramId = p.id;
      chatSessionContext.lastTopic = "workshop_penguin";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>🐧 ვორქშოფი: „${p.title}“</strong> (${p.duration} • ${p.ageMin}–${p.ageMax} წელი • <strong>💰 ${p.price} ლარი</strong>) კინეტიკური ინჟინერიისა და ბუნებისმეტყველების სინთეზია!<br>• <strong>შემეცნება & ეკოლოგია:</strong> პოლარული ეკოსისტემები, როგორ უძლებენ პინგვინები სიცივეს, რატომ სრიალებენ მუცლით და ხახუნის ძალის ფიზიკა.<br>• <strong>„ფუსფუსა დედამიწა“:</strong> მუყაოსგან პინგვინის გამოჭრა, გაფორმება და საერთო ფოლგის „ყინულის მოედნის“ შექმნა.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>„ფუსფუსა ტექნოლოგიები“:</strong> მარტივი ელექტრული წრედის გაცნობა ეკრანის გარეშე (3V ბრტყელი ელემენტი CR2032 და მინი-ვიბროძრავი). წრედის შეკვრისას ძრავი ვიბრირებს, პინგვინი ფოლგის ყინულზე სწრაფად სრიალებს და ეწყობა მხიარული რბოლა!<br>• <strong>${p.takeHome}</strong><br><a href="contact.html?course=${p.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ ვორქშოფზე რეგისტრაცია →</a>`
        }
      ];
    }
  },

  // 3. მანათობელი საახალწლო ბარათი (1-Day Workshop)
  {
    id: "workshop_card",
    programId: "workshop-card",
    keywords: ["ბარათ", "საახალწლო", "მანათობელ", "ნათურ", "სპილენძ", "ლენტ", "წრედ", "led", "closed circuit"],
    intents: ["მანათობელი საახალწლო ბარათი", "საახალწლო ბარათი", "მანათობელი ბარათი", "სპილენძის ლენტი"],
    respond: () => {
      const p = SITE_FACTS.programs["workshop-card"];
      chatSessionContext.lastProgramId = p.id;
      chatSessionContext.lastTopic = "workshop_card";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>🎄 ვორქშოფი: „${p.title}“</strong> (${p.duration} • ${p.ageMin}–${p.ageMax} წელი • <strong>💰 ${p.price} ლარი</strong>)! სახელოსნოში ბავშვები ქმნიან ბარათის დიზაინს (ნაძვის ხე, ირემი, ვარსკვლავები), ამზადებენ ქაღალდს და აფორმებენ ვიზუალს („ფუსფუსა დედამიწა“).`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `ტექნოლოგიურ ნაწილში კი კოდირების გარეშე ეცნობიან <strong>„შეკრული წრედის“ (Closed Circuit)</strong> პრინციპს: აკრავენ სპილენძის წებოვან ლენტს (Copper tape), ამონტაჟებენ LED ნათურასა და 3V ბრტყელ ელემენტს („ფუსფუსა ტექნოლოგიები“). ბარათის დაჭერისას ნახატი ჯადოსნურად ნათდება! ბავშვს სახლში მიაქვს თავისი შექმნილი ინტერაქტიული საჩუქარი!<br><a href="contact.html?course=${p.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ ბარათის ვორქშოფზე რეგისტრაცია →</a>`
        }
      ];
    }
  },

  // 4. თიხის მანათობელი ეკო-ლამპიონი (1-Day Workshop)
  {
    id: "workshop_clay_lamp",
    programId: "workshop-clay-lamp",
    keywords: ["ლამპიონ", "თიხის", "თიხა", "სანათ", "ძერწვ", "პერფორაცი", "ორნამენტ"],
    intents: ["თიხის მანათობელი ეკო ლამპიონი", "ეკო ლამპიონი", "თიხის სანათი", "თიხის ლამპიონი"],
    respond: () => {
      const p = SITE_FACTS.programs["workshop-clay-lamp"];
      chatSessionContext.lastProgramId = p.id;
      chatSessionContext.lastTopic = "workshop_clay_lamp";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>🕯️ ვორქშოფი: „${p.title}“</strong> (${p.duration} • ${p.ageMin}–${p.ageMax} წელი • <strong>💰 ${p.price} ლარი</strong>)! ბავშვები ბუნებრივი თიხისგან ძერწავენ გუმბათოვან ლამპიონს, ჭრიან ორნამენტებსა და ვარსკვლავებს სინათლის გასასვლელად.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `შემდეგ შიგნით ვამონტაჟებთ უსაფრთხო, ავტონომიურ LED მანათობელ მოდულს. შედეგად ბავშვი საკუთარი ხელით შექმნილ ულამაზეს მაგიდის სანათს მიაბრძანებს სახლში!<br><a href="contact.html?course=${p.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ ლამპიონის ვორქშოფზე რეგისტრაცია →</a>`
        }
      ];
    }
  },

  // 5. ფუსფუსა ფუტკრები (4-Week Integrated Project)
  {
    id: "project_bees",
    programId: "bees-project",
    keywords: ["ფუტკ", "ფუტკრებ", "სკა", "სკებ", "ყვავილ", "დარგვ", "ქოთან", "ნიადაგ", "ტენიანობ"],
    intents: ["ფუსფუსა ფუტკრები", "ფუტკრების პროექტი", "სკების მაკეტი", "მცენარეების დარგვა"],
    respond: () => {
      const p = SITE_FACTS.programs["bees-project"];
      chatSessionContext.lastProgramId = p.id;
      chatSessionContext.lastTopic = "project_bees";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>🐝 ${p.title}</strong> — ${p.categoryName}ა (${p.duration} • ${p.ageMin}–${p.ageMax} წელი • <strong>💰 ${p.price} ლარი</strong>):<br>• <strong>30 წთ შემეცნება:</strong> ფუტკრის ანატომია, ეკოსისტემები, ბიომიმიკრია და მცენარეების დარგვა.<br>• <strong>1.5 სთ სახელოსნო:</strong> ხის ნამდვილი სკის მაკეტის აწყობა, თიხის ყვავილებისა და ფუტკრის ძერწვა, ქოთნის მოხატვა და 1 დიდ მაკეტად გაერთიანება!`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>1 სთ რობოტიკა & ანიმაცია:</strong> Micro:bit სენსორით ტემპერატურისა და ნიადაგის ტენიანობის კონტროლი, ფუტკრის 2D ციფრული ანიმაცია!<br>• <strong>${p.takeHome}</strong><br><a href="contact.html?project=${p.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ ფუტკრების პროექტზე რეგისტრაცია →</a>`
        }
      ];
    }
  },

  // 6. რობოტიკისა და კოდირების წრე (Regular Club)
  {
    id: "robotics_club",
    programId: "robotics-club",
    keywords: ["რობოტიკ", "კოდირებ", "პროგრამირებ", "წრე", "scratch", "makecode", "micro:bit", "მიკრობიტ", "arduino", "არდუინო", "python", "პითონ", "სენსორ", "სერვო"],
    intents: ["რობოტიკის წრე", "კოდირების წრე", "პროგრამირების წრე", "რას ისწავლის რობოტიკაში", "როგორ ვასწავლით კოდირებას"],
    respond: () => {
      const p = SITE_FACTS.programs["robotics-club"];
      chatSessionContext.lastProgramId = p.id;
      chatSessionContext.lastTopic = "robotics_club";
      return [
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `<strong>🤖 ${p.title} (${p.groups} • 💰 ${p.price} ლარი / თვეში):</strong><br><em>(შენიშვნა: ამ ეტაპზე ცალკე რობოტიკის წრეზე მიღება დროებით შეჩერებულია).</em><br>${p.duration}. სრული გზა ვიზუალური ბლოკური პროგრამირებიდან (Code.org, CodeMonkey, Scratch, MakeCode) ტექსტურ კოდირებამდე (Python-ის საწყისები) და რეალურ მიკროკონტროლერებამდე (Micro:bit, Arduino)!<br>• <strong>ალგორითმული აზროვნება:</strong> ლოგიკა, ციკლები, პირობითი ნიშნები.<br>• <strong>ეკო-ტექნოლოგიური სინთეზი:</strong> სენსორები (ტენიანობა, სინათლე, ტემპერატურა) და სერვო ძრავები.<br>• რობოტიკა და Micro:bit სრულად არის ინტეგრირებული ჩვენს 1-თვიან პროექტებში: ❄️ „ყინულოვანი სამყარო“ და 🐝 „ფუსფუსა ფუტკრები“!<br><a href="${SITE_FACTS.registration.url}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ მიმდინარე პროექტების დაჯავშნა →</a>`
        }
      ];
    }
  },

  // 7. 3-საათიანი ინტეგრირებული მოდელის არსი
  {
    id: "three_hour_structure",
    keywords: ["3 საათ", "სამი საათ", "საათიან", "მოდელ", "განრიგ", "სტრუქტურ", "როგორ მიმდინარეობს", "დღის გეგმა"],
    intents: ["3 საათიანი მოდელი", "სამსაათიანი მოდელი", "როგორ ტარდება გაკვეთილი", "რას აკეთებენ თითოეულ საათში"],
    respond: () => {
      chatSessionContext.lastTopic = "three_hour_structure";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>🔬 ჩვენი უნიკალური 3-საათიანი ინტეგრირებული მოდელი:</strong><br>• <strong>საათი 1 (შემეცნება & ბუნება - 30 წთ):</strong> თემის გაცნობა, კითხვა-პასუხი, ინფორმაციის მოძიება და ანალიზი (მაგ: პოლარული ეკოსისტემები ან ფუტკრის ანატომია).<br>• <strong>საათი 2 (სახელოსნო & ხელსაქმე - 1.5 სთ):</strong> მუშაობა ბუნებრივი მასალებით — ხის დამუშავება, თიხა, მაკეტირება, ნატიფი მოტორიკა და რეალური ფიზიკური ნივთის შექმნა.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>საათი 3 (რობოტიკა & ტექნოლოგიები - 1 სთ):</strong> Micro:bit-ის სქემები, სენსორები, კოდირება და შექმნილი მაკეტის ტექნოლოგიური გაცოცხლება (ტემპერატურის კონტროლი, ძრავები, 2D ანიმაცია)! ყოველი შეხვედრა ბავშვისთვის სრულფასოვანი შემოქმედებითი თავგადასავალია!`
        }
      ];
    }
  },

  // 8. დამფუძნებლები და ხელმძღვანელები: ირმა და ზიკა დვალიშვილები
  {
    id: "mentors_founders",
    keywords: [
      "ირმა", "ზიკა", "დვალიშვილ", "მენტორ", "მასწავლებელ", "პედაგოგ", "დამფუძნებელ",
      "ხელმძღვანელ", "ხელმძღვანელი", "ხელმძღვანელობს", "ხელმძღვანელები", "უძღვებ", "ავტორ", "ასწავლის"
    ],
    intents: [
      "ვინ ხელმძღვანელობს", "ვისი ხელმძღვანელობით", "ვინ უძღვება ამ პროექტებს",
      "ვინ არიან დამფუძნებლები", "ვინ არიან ხელმძღვანელები", "ირმა დვალიშვილი",
      "ზიკა დვალიშვილი", "სახელოსნოს ხელმძღვანელები", "ვინ არიან პედაგოგები"
    ],
    respond: () => {
      chatSessionContext.lastTopic = "mentors";
      const irma = SITE_FACTS.mentors.irma;
      const zika = SITE_FACTS.mentors.zika;
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `სახელოსნოს უძღვებიან მისი დამფუძნებლები — <strong>${irma.name}</strong> და <strong>${zika.name}</strong>!<br>• 🌿 <strong>${irma.name}</strong> — ${irma.role}. ${irma.bio}<br><em>კომპეტენციები:</em> ${irma.competencies.join(", ")}.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• 💻 <strong>${zika.name}</strong> — ${zika.role}. ${zika.bio}<br><em>კომპეტენციები:</em> ${zika.competencies.join(", ")}.<br><a href="mentors.html" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">👩‍🏫 დამფუძნებლების გვერდის ნახვა →</a>`
        }
      ];
    }
  },

  // 9. ირმა დვალიშვილი (ცალკე მიმართვა)
  {
    id: "mentor_irma",
    keywords: ["ირმა", "ირმას", "ირმა დვალიშვილ"],
    intents: ["ვინ არის ირმა", "ირმა დვალიშვილი", "ირმა მასწავლებელი"],
    respond: () => {
      chatSessionContext.lastTopic = "mentors";
      const irma = SITE_FACTS.mentors.irma;
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `<strong>${irma.name}</strong> — ${irma.role}, ხელოვნების, ეკო-დიზაინისა და სისტემური აზროვნების პედაგოგი.<br>${irma.bio}<br><em>კომპეტენციები:</em> ${irma.competencies.join(", ")}.`
        }
      ];
    }
  },

  // 10. ზიკა დვალიშვილი (ცალკე მიმართვა)
  {
    id: "mentor_zika",
    keywords: ["ზიკა", "ზიკას", "ზიკა დვალიშვილ"],
    intents: ["ვინ არის ზიკა", "ზიკა დვალიშვილი", "ზიკა მასწავლებელი"],
    respond: () => {
      chatSessionContext.lastTopic = "mentors";
      const zika = SITE_FACTS.mentors.zika;
      return [
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `<strong>${zika.name}</strong> — ${zika.role}, STEM განათლების, რობოტიკისა და ეკო-ტექნოლოგიური სინთეზის ხელმძღვანელი.<br>${zika.bio}<br><em>კომპეტენციები:</em> ${zika.competencies.join(", ")}.`
        }
      ];
    }
  },

  // 11. რეგისტრაცია და ონლაინ დაჯავშნა
  {
    id: "registration_booking",
    keywords: ["რეგისტრაცი", "დარეგისტრირ", "ჩაწერ", "დაჯავშნ", "ვიზიტ", "როგორ ჩავეწეროთ", "სად დავრეგისტრირდე"],
    intents: ["როგორ დავრეგისტრირდეთ", "რეგისტრაცია", "ვიზიტის დაჯავშნა", "ადგილის დაჯავშნა"],
    respond: () => {
      chatSessionContext.lastTopic = "registration";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `რეგისტრაცია ძალიან მარტივია! შეგიძლიათ პირდაპირ ჩვენს საიტზე შეავსოთ ფორმა <a href="${SITE_FACTS.registration.url}" style="color:var(--color-green-dark); font-weight:bold; text-decoration:underline;">„რეგისტრაცია & დაჯავშნა“</a>.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>${SITE_FACTS.registration.trialFreeNote}</strong><br>ფორმის შევსების შემდეგ ჩვენი მენტორი მალე დაგიკავშირდებათ ზუსტი დროისა და დეტალების შესათანხმებლად. ასევე შეგიძლიათ პირდაპირ დაგვირეკოთ: <strong>${SITE_FACTS.contacts.phone}</strong> ან მოგვწეროთ: <strong>${SITE_FACTS.contacts.email}</strong>.`
        }
      ];
    }
  },

  // 12. უფასო საცდელი / პირველი ვიზიტი
  {
    id: "free_trial_visit",
    keywords: ["უფასო", "საცდელ", "გაცნობ", "უფასოა", "ვიზიტი უფასოა", "პირველი გაკვეთილი უფასოა", "საცდელი ვიზიტი"],
    intents: ["საცდელი ვიზიტი უფასოა", "პირველი შეხვედრა უფასოა", "უფასო გაკვეთილი"],
    respond: () => {
      chatSessionContext.lastTopic = "registration";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `დიახ! <strong>${SITE_FACTS.registration.trialFreeNote}</strong> ბავშვი ეცნობა სახელოსნოს მყუდრო სივრცეს, ბუნებრივ მასალებსა და მენტორებს ყოველგვარი ვალდებულების გარეშე.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `მობრძანდით, გამოსცადეთ რობოტიკის ხელსაწყოები, ხოლო თუ მოგეწონებათ, შემდეგ შეარჩევთ სასურველ მიმართულებას (ვორქშოფები: 50 ₾, პროექტები: 200 ₾, რობოტიკის წრე: 120 ₾/თვე)!<br><a href="${SITE_FACTS.registration.url}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ უფასო ვიზიტის დაჯავშნა →</a>`
        }
      ];
    }
  },

  // 13. ჯგუფური რეგისტრაცია და სკოლები
  {
    id: "group_visits_schools",
    keywords: ["ჯგუფ", "ჯგუფურ", "სკოლ", "კლას", "ექსკურსი", "მოსწავლეებ", "ბაღ", "კოლექტივ", "რამდენი ბავშვი"],
    intents: ["ჯგუფური რეგისტრაცია", "სკოლის ექსკურსია", "კლასის ვიზიტი", "დაარეგისტრირეთ ჯგუფი", "ჯგუფური ვორქშოფი"],
    respond: () => {
      chatSessionContext.lastTopic = "registration";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `დიახ! ერთდღიან ვორქშოფებზე გვაქვს <strong>ჯგუფური რეგისტრაცია</strong> (სკოლის კლასებისთვის, ექსკურსიებისთვის ან მეგობრების ჯგუფებისთვის <strong>2-დან მაქსიმუმ 15 ბავშვამდე</strong>)!`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `ჯგუფური ვიზიტისას ბავშვები ერთდროულად გადიან შემეცნებით, სახელოსნო და რობოტიკის ეტაპებს, თითოეულს თავისი შექმნილი ნივთი მიაქვს სახლში! რეგისტრაციისას ფორმაში უბრალოდ მონიშნეთ „დაარეგისტრირეთ ჯგუფი“ და მიუთითეთ ბავშვების რაოდენობა (მაქს. 15).<br><a href="contact.html?type=group" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">👥 ჯგუფის რეგისტრაცია →</a>`
        }
      ];
    }
  },

  // 14. ფასები და გადახდა
  {
    id: "pricing_payment",
    keywords: ["ფას", "ღირს", "ღირებულებ", "გადახდ", "თანხ", "ტარიფ", "რამდენი ღირს", "საფასურ"],
    intents: ["რა ღირს", "რა არის ფასი", "სწავლის საფასური", "გადახდის პირობები", "ტარიფები"],
    respond: () => {
      chatSessionContext.lastTopic = "pricing";
      const pr = SITE_FACTS.pricing;
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `სახელოსნო „ფუსფუსაში“ საფასური მკაფიო და გამჭვირვალეა:<br>• ⚡ <strong>ერთდღიანი ვორქშოფები (1.5–2 სთ):</strong> <strong>${pr.workshop} ლარი</strong> (საახალწლო ბარათი, მოფუსფუსე პინგვინი ყინულზე, თიხის მანათობელი ეკო-ლამპიონი).<br>• 📅 <strong>1-თვიანი ინტეგრირებული პროექტები (4 კვირა, 8 შეხვედრა • 3 სთ):</strong> <strong>${pr.monthProject} ლარი</strong> („ფუსფუსა ფუტკრები“, „ყინულოვანი სამყარო“).<br>• 🤖 <strong>რობოტიკისა და კოდირების წრე:</strong> <strong>${pr.roboticsClub} ლარი / თვეში</strong> (ამ ეტაპზე მიღება დროებით შეჩერებულია).`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>ყველა სამუშაო მასალა (ხე, თიხა, ფოლგა, ელექტრონიკა, Micro:bit, Arduino, სენსორები, LED) სრულად შედის ფასში!</strong><br>• <strong>პირველი გაცნობითი ვიზიტი უფასოა!</strong><br><a href="${SITE_FACTS.registration.url}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">📅 ადგილის დაჯავშნა →</a>`
        }
      ];
    }
  },

  // 15. ლოკაცია, მისამართი და კონტაქტები
  {
    id: "location_contacts",
    keywords: ["სად", "მისამართ", "ლოკაცი", "რუსთავ", "ქუჩ", "ტელეფონ", "ნომერ", "მეილ", "ფეისბუქ", "facebook", "youtube", "იუთუბ", "სოციალურ", "გვერდი"],
    intents: ["სად მდებარეობს სახელოსნო", "მისამართი", "საკონტაქტო ნომერი", "როგორ მოვიდეთ", "ფეისბუქის გვერდი", "კონტაქტი"],
    respond: () => {
      chatSessionContext.lastTopic = "location";
      const c = SITE_FACTS.contacts;
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `ჩვენი სახელოსნო მდებარეობს ქალაქ <strong>${c.address}</strong> 📍 (<a href="${c.mapsUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue); text-decoration:underline;">Google Maps-ზე ნახვა 🗺️</a>).`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• 📞 ტელეფონი: <strong><a href="tel:${c.phone.replace(/\s+/g, '')}" style="color:inherit; text-decoration:none;">${c.phone}</a></strong><br>• ✉️ ელფოსტა: <strong>${c.email}</strong><br>• 🌐 Facebook: <strong><a href="${c.facebookUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue); text-decoration:underline;">ფუსფუსა Facebook გვერდი</a></strong><br>• 📺 YouTube: <strong><a href="${c.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue); text-decoration:underline;">ფუსფუსა YouTube არხი</a></strong><br>• 🕒 სამუშაო საათები: ${c.hours}.`
        }
      ];
    }
  },

  // 16. სამუშაო საათები და გრაფიკი
  {
    id: "working_hours",
    keywords: ["სამუშაო საათ", "როდის მუშაობთ", "როდის ხართ ღია", "დასვენების დღე", "გრაფიკი"],
    intents: ["სამუშაო საათები", "როდის მუშაობთ", "გრაფიკი"],
    respond: () => {
      chatSessionContext.lastTopic = "schedule";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `სახელოსნოს სამუშაო გრაფიკია:<br>• <strong>სამშაბათი – კვირა:</strong> 10:00 – 19:00<br>• <strong>ორშაბათი:</strong> დასვენების დღე.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `ვიზიტამდე გირჩევთ წინასწარ შეავსოთ <a href="${SITE_FACTS.registration.url}" style="color:var(--color-blue); font-weight:bold; text-decoration:underline;">დაჯავშნის ფორმა</a> ან დაგვირეკოთ: <strong>${SITE_FACTS.contacts.phone}</strong>!`
        }
      ];
    }
  },

  // 17. მასალები და უსაფრთხოება
  {
    id: "materials_and_safety",
    keywords: ["მასალ", "ხელსაწყო", "რა მოვიტანოთ", "თან მოტანა", "უსაფრთხოებ", "საშიშ", "წებო", "ხის ხელსაწყო"],
    intents: ["რა მასალებია საჭირო", "რა უნდა მოიტანოს ბავშვმა", "უსაფრთხოა თუ არა", "უსაფრთხოების წესები"],
    respond: () => {
      chatSessionContext.lastTopic = "materials";
      return [
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
      ];
    }
  },

  // 18. ფილოსოფია, მისია და სლოგანები
  {
    id: "philosophy_slogans",
    keywords: ["მისია", "ფილოსოფი", "სლოგან", "დევიზ", "ვუფრთხილდებით", "მოთამაშე", "შემოქმედ", "კონცეფცი"],
    intents: ["რა არის თქვენი მისია", "ჩვენი მისია", "სახელოსნოს სლოგანი", "გუშინ მოთამაშე დღეს შემოქმედი", "ვუფრთხილდებით ვზრუნავთ ვქმნით"],
    respond: () => {
      chatSessionContext.lastTopic = "philosophy";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `სახელოსნო „ფუსფუსას“ მთავარი დევიზია: <strong>„${SITE_FACTS.slogans.primary}“</strong> 🌿 — ვასწავლით ბუნების მოფრთხილებას, ერთმანეთზე ზრუნვას და ახლის შექმნას.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `ჩვენი მისიაა: <strong>„${SITE_FACTS.slogans.mission}“</strong> ✨ — ბავშვი ეკრანის პასიური მომხმარებლიდან გარდაიქმნება შემოქმედად, რომელიც ციფრულ ცოდნას რეალური სამყაროს გასაუმჯობესებლად იყენებს!`
        }
      ];
    }
  },

  // 19. შეცდომებთან დამოკიდებულება
  {
    id: "mistakes_approach",
    keywords: ["შეცდომ", "ბაგ", "შეცდომა საუკეთესო", "არ გამომივიდეს", "თუ გაფუჭდა"],
    intents: ["შეცდომა არ ისჯება", "როგორ უდგებით შეცდომებს", "თუ ბავშვს არ გამოუვა"],
    respond: () => {
      chatSessionContext.lastTopic = "philosophy";
      return [
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
      ];
    }
  },

  // 20. ჯანსაღი ციფრული ჩვევები და კიბერ-ჰიგიენა
  {
    id: "digital_habits",
    keywords: ["ეკრან", "ტელეფონ", "დამოკიდებულებ", "თამაშ", "ტიკტოკ", "ჰიგიენ", "ჩვევებ", "პასიურ"],
    intents: ["ჯანსაღი ციფრული ჩვევები", "ეკრანდამოკიდებულება", "კიბერ ჰიგიენა"],
    respond: () => {
      chatSessionContext.lastTopic = "philosophy";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `ჩვენ ვეხმარებით ბავშვებს ეკრანის უსასრულო სქროლიდან გადავიდნენ რეალურ, ხელშესახებ შემოქმედებაზე — მუშაობა ბუნებრივ ხესთან, თიხასა და ცოცხალ მცენარეებთან!`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `როდესაც ბავშვი იგებს, როგორ მუშაობს ალგორითმები შიგნიდან, ის აღარ არის პასიური მსხვერპლი: სწავლობს ეკრანული დროის მართვას, კიბერ-ჰიგიენას და ტექნოლოგიას საკუთარი იდეების გასაცოცხლებლად იყენებს!`
        }
      ];
    }
  },

  // 21. რა უნარებს ავითარებს
  {
    id: "skills_development",
    keywords: ["უნარ", "რას განავითარებს", "რას ისწავლის", "მოტორიკ", "აზროვნებ", "გუნდურობ", "სარგებელ"],
    intents: ["რა უნარებს უვითარებს", "რას ისწავლის ბავშვი", "რა სარგებელი აქვს"],
    respond: () => {
      chatSessionContext.lastTopic = "skills";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `„ფუსფუსა დედამიწის“ ხაზით ბავშვები ავითარებენ: <strong>სისტემურ აზროვნებას</strong>, <strong>ნატიფ მოტორიკასა და სიზუსტეს</strong>, ინფორმაციასთან მუშაობის ჩვევას და <strong>თვითგამოხატვის თავისუფლებას</strong>.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `„ფუსფუსა ტექნოლოგიების“ ხაზით კი: <strong>ალგორითმულ და ლოგიკურ აზროვნებას</strong>, პრობლემის სტრუქტურულ გადაჭრას, <strong>ტექნოლოგიურ თავდაჯერებულობას</strong> და <strong>გუნდურ მუშაობას</strong>!`
        }
      ];
    }
  },

  // 22. ფორმატების შედარება
  {
    id: "formats_comparison",
    keywords: ["ფორმატ", "განსხვავებ", "რა განსხვავებაა", "რომელი ავირჩიო", "ვორქშოფსა და პროექტს"],
    intents: ["რა ფორმატები გაქვთ", "ფორმატების შედარება", "რა განსხვავებაა პროექტსა და ვორქშოფს შორის"],
    respond: () => {
      chatSessionContext.lastTopic = "formats";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `სახელოსნოში გვაქვს <strong>3 ძირითადი ფორმატი</strong>:<br>1. <strong>⚡ ერთდღიანი ვორქშოფი (1.5–2 სთ • 50 ₾):</strong> იდეალურია პირველი გაცნობისთვის — ბავშვი 1 შეხვედრაში ქმნის დასრულებულ ინტერაქტიულ ნივთს (მაგ: 🐧 მოფუსფუსე პინგვინი, 🎄 საახალწლო ბარათი, 🕯️ თიხის ლამპიონი).<br>2. <strong>📅 1-თვიანი ინტეგრირებული პროექტი (4 კვირა, 8 შეხვედრა • 3 სთ • 200 ₾):</strong> სიღრმისეული შემეცნება, დიდი მაკეტის აწყობა, რობოტიკა და საზეიმო ფინალური გამოფენა მშობლებთან ერთად („ყინულოვანი სამყარო“ ❄️, „ფუსფუსა ფუტკრები“ 🐝).`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `3. <strong>🤖 რობოტიკისა და კოდირების წრე (120 ₾/თვე):</strong> უწყვეტი ყოველკვირეული პროგრამა საფუძვლიანი საინჟინრო და პროგრამირების ცოდნისთვის (MakeCode, Scratch, Micro:bit, Arduino, Python).`
        }
      ];
    }
  },

  // 23. მოსწავლეთა ნამუშევრები და გალერეა (Showcase)
  {
    id: "showcase_gallery",
    keywords: ["ნამუშევრებ", "გალერე", "რას ქმნიან", "გამოფენ", "პროტოტიპ", "რა მიაქვს სახლში", "ანა", "სანდრო", "დათო", "ნიკა", "ლუკა"],
    intents: ["რას ქმნიან ბავშვები", "მოსწავლეთა ნამუშევრები", "გამოფენა", "ნამუშევრების გალერეა"],
    respond: () => {
      chatSessionContext.lastTopic = "showcase";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `ჩვენი მოსწავლეები ქმნიან რეალურ ფუნქციურ ნივთებს:<br>• <strong>ნიკა & ლუკა (11 წლის):</strong> კონტეინერი ხის მოძრავი ამწე-ექსკავატორი პიროგრაფიით.<br>• <strong>სანდრო (8 წლის):</strong> „მფრინავი ფუტკურა“ — საკუთარი ნახატის ციფრული 2D ანიმაცია და ხმოვანი ეფექტები.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>ანა (10 წლის):</strong> „მცენარეთა ჭკვიანი ეკო-დეტექტორი“ (Teachable Machine-ით გაწვრთნილი AI ნეირონული ქსელი).<br>• <strong>დათო (12 წლის):</strong> Arduino-ზე დაპროგრამებული თვით-მორწყავი რობოტი ნიადაგის ტენიანობის სენსორით!<br><a href="showcase.html" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">🎨 გალერეის დათვალიერება →</a>`
        }
      ];
    }
  },

  // 24. მომავალი პროექტები (Upcoming Projects)
  {
    id: "upcoming_projects",
    keywords: ["მომავალ", "სამომავლ", "მალე", "ახალ პროექტ", "დაემატებ", "სათბურ", "წყალქვეშ", "კოსმოსურ"],
    intents: ["მომავალი პროექტები", "სამომავლო პროექტები", "რა სამომავლო პროექტები", "რა პროექტები დაემატება", "ჭკვიანი სათბური", "წყალქვეშა რობოტები"],
    respond: () => {
      chatSessionContext.lastTopic = "upcoming";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `ჩვენი სახელოსნო ეტაპობრივად ვითარდება და მალე წარმოვადგენთ ახალ ინტეგრირებულ პროექტებს:<br>• <strong>🌱 ჭკვიანი სათბური (Smart Greenhouse)</strong> — მცენარეთა ავტომატური კლიმატ-კონტროლი და მიკრო-ეკოლოგია.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>🌊 წყალქვეშა სამყაროს რობოტები</strong> — ოკეანის სიღრმეების კვლევა და წყალგამძლე სენსორები.<br>• <strong>🪐 კოსმოსური სადგური & ხელოვნური ინტელექტი</strong> — ავტონომიური როვერები და AI მოდელები!`
        }
      ];
    }
  },

  // 25. პირველი დღე და ადაპტაცია
  {
    id: "first_day_experience",
    keywords: ["პირველ დღე", "პირველ გაკვეთილ", "საცდელ", "გაცნობ", "ადაპტაცი", "ეშინია", "პირველად"],
    intents: ["პირველი დღე სახელოსნოში", "საცდელი ვიზიტი", "როგორ ხვდებით ბავშვებს"],
    respond: () => {
      chatSessionContext.lastTopic = "first_day";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `პირველი შეხვედრა სრულიად მეგობრულია და თავისუფალია ყოველგვარი სტრესისგან! <strong>პირველი გაცნობითი ვიზიტი უფასოა.</strong> ბავშვი ეცნობა სახელოსნოს გარემოს, ხელსაწყოებს და ირმა მასწავლებელს.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `შემდეგ კი ზიკა მასწავლებელთან ერთად ეცნობა რობოტიკის ლაბორატორიას და პირველად გამოსცდის სენსორებისა და მიკრობიტის მუშაობას. პირველივე დღიდან ბავშვს უჩნდება საკუთარი შემოქმედებითი ძალის რწმენა!`
        }
      ];
    }
  },

  // 26. მისალმება და მადლობა
  {
    id: "greetings_welcome",
    keywords: ["გამარჯობ", "სალამ", "გამარჯობა", "მოგესალმებით", "როგორ ხართ", "ვინ ხართ", "მადლობ", "გმადლობთ", "მაგარია"],
    intents: ["გამარჯობა", "სალამი", "როგორ ხართ", "მადლობა", "ვინ ხართ თქვენ"],
    respond: (normQuery) => {
      if (normQuery.includes("მადლობ") || normQuery.includes("გმადლობ")) {
        return [
          {
            type: "earth",
            author: "🌿 ეკო (ფუსფუსა დედამიწა)",
            text: `არაფრის! ყოველთვის გელოდებით ჩვენს სახელოსნოში დიდი სიყვარულით 🌿`
          },
          {
            type: "tech",
            author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
            text: `თუ სხვა რამე გაინტერესებთ, სიამოვნებით გიპასუხებთ! ✨`
          }
        ];
      }
      return [
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
      ];
    }
  },

  // 27. ასაკობრივი ჯგუფები / რა ასაკიდან მიიღება ბავშვი (General Query)
  {
    id: "age_groups_general",
    keywords: [
      "ასაკ", "ასაკობრივ", "წლიდან", "წლამდე", "პატარა", "დიდი", "ასაკობრივი ზღვარი", "რამდენი წლიდან",
      "რა ასაკიდან", "მინიმალური ასაკი", "ასაკის"
    ],
    intents: [
      "რა ასაკიდან შემიძლია ბავშვის მოყვანა", "რა ასაკიდან იღებთ ბავშვებს",
      "რა ასაკობრივი ჯგუფები გაქვთ", "რა ასაკის ბავშვებისთვისაა",
      "რამდენი წლიდან შეიძლება მოსვლა", "მინიმალური ასაკი", "რა ასაკიდანაა"
    ],
    respond: () => {
      chatSessionContext.lastTopic = "age";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `სახელოსნო „ფუსფუსაში“ ბავშვების მიღება იწყება <strong>${SITE_FACTS.ageRange.min} წლიდან</strong> და პროგრამები გათვლილია <strong>${SITE_FACTS.ageRange.max} წლამდე</strong> მოზარდებისთვის!<br>• <strong>6–8 წელი:</strong> ერთდღიანი ვორქშოფები (🎄 ბარათი, 🐧 პინგვინი, 🕯️ თიხის ლამპიონი).`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `• <strong>8–12 წელი:</strong> 1-თვიანი ინტეგრირებული პროექტები (❄️ „ყინულოვანი სამყარო“, 🐝 „ფუსფუსა ფუტკრები“) 3-საათიანი მოდელით და რობოტიკის წრე.<br>• <strong>12–15 წელი:</strong> რობოტიკა და ელექტრონიკა (Arduino, Python, რთული სენსორები).<br>თუ თქვენი ბავშვის კონკრეტულ ასაკს მოგვწერთ (მაგ. „8 წლის“), შემოგთავაზებთ ზუსტ პროგრამებს! 😊`
        }
      ];
    }
  },

  // 28. პროექტებისა და კურსების სრული ჩამონათვალი
  {
    id: "all_projects_overview",
    keywords: ["პროექტებ", "კურსებ", "რა პროექტები გაქვთ", "რა პროექტებია", "პროგრამებ", "მიმდინარე პროექტებ"],
    intents: ["რა პროექტები გაქვთ", "პროექტების ჩამონათვალი", "რომელი პროექტები გაქვთ", "რა კურსები გაქვთ"],
    respond: () => {
      chatSessionContext.lastTopic = "courses";
      return [
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `ჩვენს სახელოსნოში მოქმედებს 2 ძირითადი ფორმატი:<br>1. <strong>📅 1-თვიანი ინტეგრირებული პროექტები (200 ₾):</strong><br>• ❄️ „ყინულოვანი სამყარო“ (8–14 წელი)<br>• 🐝 „ფუსფუსა ფუტკრები“ (8–12 წელი)`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `2. <strong>⚡ ერთდღიანი ვორქშოფები (50 ₾):</strong><br>• 🐧 „მოფუსფუსე პინგვინი ყინულზე“ (7–10 წელი)<br>• 🎄 „მანათობელი საახალწლო ბარათი“ (6–14 წელი)<br>• 🕯️ „თიხის მანათობელი ეკო-ლამპიონი“ (6–12 წელი)<br><em>(რობოტიკისა და კოდირების წრეზე მიღება დროებით შეჩერებულია).</em>`
        }
      ];
    }
  }
];

// დამხმარე ფუნქცია ასაკის მიხედვით პროგრამების მოსაძებნად
function getProgramsForAge(age) {
  const matches = [];
  for (const key of Object.keys(SITE_FACTS.programs)) {
    const p = SITE_FACTS.programs[key];
    if (age >= p.ageMin && age <= p.ageMax) {
      matches.push(p);
    }
  }
  return matches;
}

// 5. ძირითადი ინტელექტუალური პასუხების გენერატორი
function generateFussusaAiAnswers(rawQuery) {
  const normQuery = normalizeGeorgian(rawQuery);
  if (!normQuery) {
    return [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: "გთხოვთ, მოგვწეროთ თქვენი შეკითხვა სახელოსნოს, კურსების ან რობოტიკის შესახებ ✨"
      }
    ];
  }

  // 1. პერსონალური მონაცემების დაცვა
  if (containsPersonalData(rawQuery, normQuery)) {
    return [
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `თქვენი და თქვენი შვილის უსაფრთხოებისთვის, გთხოვთ ნუ გააზიარებთ პირად მონაცემებს (ტელეფონის ნომერს, პირად ნომერს) ჩატში! რეგისტრაციისთვის ისარგებლეთ ჩვენი დაცული ფორმით: <a href="${SITE_FACTS.registration.url}" style="color:var(--color-blue); font-weight:bold; text-decoration:underline;">ონლაინ რეგისტრაცია</a>.`
      }
    ];
  }

  // 2. არათემატური შეკითხვების ფილტრი (OutOfScope Guard)
  if (isOutOfScope(normQuery)) {
    return [
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `მე სახელოსნო ფუსფუსას ასისტენტი ვარ და შემიძლია დაგეხმაროთ მხოლოდ სახელოსნოს კურსებთან, რობოტიკასთან, ბუნებისმეტყველებასთან და რეგისტრაციასთან დაკავშირებულ საკითხებში 😊`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `შეგიძლიათ მკითხოთ: კურსების ფასები, ასაკობრივი ჯგუფები, ჩვენი მისია ან ლოკაცია!
        <div class="ai-quick-prompts">
          <button class="ai-prompt-btn" data-query="რა ღირს სწავლა და ვორქშოფები?">💰 რა ღირს სწავლა?</button>
          <button class="ai-prompt-btn" data-query="სად მდებარეობს სახელოსნო?">📍 სად მდებარეობს სახელოსნო?</button>
          <button class="ai-prompt-btn" data-query="რა ასაკის ბავშვებისთვისაა?">👧 ასაკობრივი ჯგუფები</button>
        </div>`
      }
    ];
  }

  // 3. მიმართვის ფილტრი (მხოლოდ ეკო ან მხოლოდ ბიტი)
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

  // 4. ასაკობრივი მოთხოვნის დამუშავება (სიტყვიერი, ციფრული, მრავალი ბავშვი)
  const isGeneralAgeQuery = normQuery.includes("რა ასაკიდან") || normQuery.includes("რამდენი წლიდან") ||
                            normQuery.includes("ასაკობრივი ჯგუფ") || normQuery.includes("მინიმალური ასაკ") ||
                            normQuery.includes("ასაკობრივი ზღვარ") || normQuery.includes("რა ასაკის");

  const extractedAges = extractAgesFromText(rawQuery);

  if (extractedAges.length > 0 && !isGeneralAgeQuery) {
    chatSessionContext.knownChildAges = extractedAges;
    chatSessionContext.lastTopic = "age_recommendation";

    // მრავალი ბავშვი (მაგ. "ორი შვილი მყავს, 6 და 11 წლის")
    if (extractedAges.length > 1) {
      const earthParts = [];
      const techParts = [];

      extractedAges.forEach((a, idx) => {
        const matching = getProgramsForAge(a);
        const wNames = matching.filter(p => p.category === "workshop").map(p => `${p.emoji} ${p.title}`).join(", ");
        const pNames = matching.filter(p => p.category === "project").map(p => `${p.emoji} ${p.title}`).join(", ");
        const hasClub = matching.some(p => p.category === "club");

        const text = `<strong>👶 ${a} წლის შვილისთვის:</strong><br>` +
          (wNames ? `• ვორქშოფები (50 ₾): ${wNames}<br>` : "") +
          (pNames ? `• 1-თვიანი პროექტები (200 ₾): ${pNames}<br>` : "") +
          (hasClub ? `• 🤖 რობოტიკისა და კოდირების წრე (120 ₾/თვე)` : "");

        if (idx === 0) earthParts.push(text);
        else techParts.push(text);
      });

      return filterByTarget([
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: earthParts.join("<br><br>")
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: (techParts.length ? techParts.join("<br><br>") : "") +
            `<br><a href="${SITE_FACTS.registration.url}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ ბავშვების რეგისტრაცია →</a>`
        }
      ]);
    }

    // ერთი ბავშვი (მაგ. "7 წლის", "ჩემი შვილი არის 10 წლის")
    const age = extractedAges[0];
    const matching = getProgramsForAge(age);

    if (matching.length === 0) {
      return filterByTarget([
        {
          type: "earth",
          author: "🌿 ეკო (ფუსფუსა დედამიწა)",
          text: `ჩვენი სახელოსნოს პროგრამები განკუთვნილია <strong>6-დან 15 წლამდე</strong> ასაკის ბავშვებისთვის.`
        },
        {
          type: "tech",
          author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
          text: `თუ თქვენი პატარა ჯერ 6 წელზე უმცროსია, სიამოვნებით დაგელოდებით, როგორც კი 6 წლის გახდება! 🌟`
        }
      ]);
    }

    const workshops = matching.filter(p => p.category === "workshop");
    const projects = matching.filter(p => p.category === "project");
    const club = matching.find(p => p.category === "club");

    let earthMsg = `<strong>${age} წლის ბავშვისთვის</strong> იდეალურად შეეფერება:<br>`;
    if (workshops.length > 0) {
      earthMsg += `• ⚡ <strong>ერთდღიანი ვორქშოფები (50 ₾):</strong> ${workshops.map(w => `${w.emoji} „${w.title}“ (${w.duration})`).join("; ")}.<br>`;
    }
    if (projects.length > 0) {
      earthMsg += `• 📅 <strong>1-თვიანი პროექტები (200 ₾):</strong> ${projects.map(pr => `${pr.emoji} „${pr.title}“`).join("; ")}.`;
    }

    let techMsg = "";
    if (club) {
      techMsg += `• 🤖 <strong>${club.title} (120 ₾ / თვეში):</strong> (ამ ეტაპზე მიღება დროებით შეჩერებულია; რობოტიკა და Micro:bit სრულად ისწავლება 1-თვიან პროექტებში).<br>`;
    }
    techMsg += `• <strong>${SITE_FACTS.registration.trialFreeNote}</strong><br><a href="${SITE_FACTS.registration.url}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ უფასო ვიზიტის დაჯავშნა →</a>`;

    return filterByTarget([
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: earthMsg
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: techMsg
      }
    ]);
  }

  // 5. კონტექსტური კითხვების დამუშავება (დამოკიდებული წინა თემაზე)
  const isContextualPrice = normQuery === "და ფასი" || normQuery === "ხოლო ფასი" || normQuery === "რა ღირს" || normQuery === "ფასი" || normQuery === "რამდენია";
  const isContextualAge = normQuery === "რა ასაკისთვისაა" || normQuery === "რა ასაკიდანაა" || normQuery === "ასაკი" || normQuery === "რა ასაკის";
  const isContextualDuration = normQuery === "რამდენ ხანს გრძელდება" || normQuery === "ხანგრძლივობა" || normQuery === "რა გრაფიკია";
  const isContextualLocation = normQuery === "სად ტარდება" || normQuery === "სად";
  const isContextualMaterials = normQuery === "რა მასალები სჭირდება" || normQuery === "რა მასალებია საჭირო";

  if ((isContextualPrice || isContextualAge || isContextualDuration || isContextualLocation || isContextualMaterials) && chatSessionContext.lastProgramId) {
    const prog = SITE_FACTS.programs[chatSessionContext.lastProgramId];
    if (prog) {
      if (isContextualPrice) {
        return filterByTarget([
          {
            type: "earth",
            author: "🌿 ეკო (ფუსფუსა დედამიწა)",
            text: `<strong>${prog.emoji} „${prog.title}“-ს საფასურია ${prog.price} ლარი${prog.category === "club" ? " / თვეში" : ""}.</strong>`
          },
          {
            type: "tech",
            author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
            text: `ყველა საჭირო მასალა სრულად შედის ღირებულებაში!<br><a href="contact.html?course=${prog.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ ადგილის დაჯავშნა →</a>`
          }
        ]);
      }
      if (isContextualAge) {
        return filterByTarget([
          {
            type: "earth",
            author: "🌿 ეკო (ფუსფუსა დედამიწა)",
            text: `<strong>${prog.emoji} „${prog.title}“</strong> გათვლილია <strong>${prog.ageMin}–${prog.ageMax} წლის</strong> ასაკის ბავშვებისთვის.`
          },
          {
            type: "tech",
            author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
            text: `ჯგუფში ბავშვები თანატოლებთან ერთად მუშაობენ და თითოეულს თავისი შექმნილი ნივთი მიაქვს სახლში!`
          }
        ]);
      }
      if (isContextualDuration) {
        return filterByTarget([
          {
            type: "earth",
            author: "🌿 ეკო (ფუსფუსა დედამიწა)",
            text: `<strong>${prog.emoji} „${prog.title}“-ს ხანგრძლივობაა:</strong> ${prog.duration}.`
          }
        ]);
      }
      if (isContextualLocation) {
        return filterByTarget([
          {
            type: "earth",
            author: "🌿 ეკო (ფუსფუსა დედამიწა)",
            text: `ეს პროგრამა ტარდება ჩვენს სახელოსნოში: <strong>${SITE_FACTS.contacts.address}</strong> (<a href="${SITE_FACTS.contacts.mapsUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue); text-decoration:underline;">Google Maps 🗺️</a>).`
          }
        ]);
      }
      if (isContextualMaterials) {
        return filterByTarget([
          {
            type: "earth",
            author: "🌿 ეკო (ფუსფუსა დედამიწა)",
            text: `<strong>„${prog.title}“-სთვის ბავშვს თან არაფერი მოაქვს!</strong> ყველა მასალა ადგილზე ხვდება და შედის ღირებულებაში.`
          }
        ]);
      }
    }
  }

  // 6. მრავალთემიანი კითხვები (პროგრამა + ფასი / ასაკი / მასალები / ხანგრძლივობა ერთად)
  const isAskingPrice = SYNONYMS.price.some(syn => normQuery.includes(syn));
  const isAskingAge = normQuery.includes("ასაკ") || normQuery.includes("წლის") || normQuery.includes("წლიდან");
  const isAskingMaterials = SYNONYMS.materials.some(syn => normQuery.includes(syn));
  const isAskingDuration = SYNONYMS.duration.some(syn => normQuery.includes(syn));

  let targetProg = null;
  if (normQuery.includes("პინგვინ")) targetProg = SITE_FACTS.programs["workshop-penguin"];
  else if (normQuery.includes("ბარათ") || normQuery.includes("საახალწლო")) targetProg = SITE_FACTS.programs["workshop-card"];
  else if (normQuery.includes("ლამპიონ") || (normQuery.includes("თიხ") && normQuery.includes("სანათ"))) targetProg = SITE_FACTS.programs["workshop-clay-lamp"];
  else if (normQuery.includes("ფუტკ")) targetProg = SITE_FACTS.programs["bees-project"];
  else if (normQuery.includes("ყინულ") || normQuery.includes("არქტიკ")) targetProg = SITE_FACTS.programs["ice-world-project"];
  else if (normQuery.includes("რობოტიკ") || normQuery.includes("კოდირებ")) targetProg = SITE_FACTS.programs["robotics-club"];

  if (targetProg && isAskingMaterials) {
    chatSessionContext.lastProgramId = targetProg.id;
    chatSessionContext.lastTopic = targetProg.id;
    return filterByTarget([
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `<strong>${targetProg.emoji} „${targetProg.title}“-სთვის ბავშვს თან არაფრის მოტანა არ სჭირდება!</strong> ყველა საჭირო ბუნებრივი და ტექნიკური მასალა ადგილზე ხვდება და სრულად შედის ღირებულებაში (${targetProg.price} ლარი).`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `სახელოსნო უზრუნველყოფს ყველა ხელსაწყოსა და უსაფრთხო ელექტრონიკას (Micro:bit, სენსორები, LED). შექმნილი ნამუშევარი კი ბავშვს მიაქვს სახლში!<br><a href="contact.html?course=${targetProg.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ დაჯავშნა →</a>`
      }
    ]);
  }

  if (targetProg && (isAskingPrice || isAskingAge || isAskingDuration)) {
    chatSessionContext.lastProgramId = targetProg.id;
    chatSessionContext.lastTopic = targetProg.id;

    let eText = `<strong>${targetProg.emoji} „${targetProg.title}“:</strong><br>`;
    if (isAskingPrice) eText += `• <strong>საფასური:</strong> <strong>${targetProg.price} ლარი</strong>${targetProg.category === "club" ? " / თვეში" : ""}.<br>`;
    if (isAskingAge) eText += `• <strong>ასაკი:</strong> ${targetProg.ageMin}–${targetProg.ageMax} წელი.<br>`;
    if (isAskingDuration || (!isAskingPrice && !isAskingAge)) eText += `• <strong>ხანგრძლივობა:</strong> ${targetProg.duration}.`;

    let tText = targetProg.isPaused
      ? `(შენიშვნა: ამ ეტაპზე წრეზე მიღება დროებით შეჩერებულია; რობოტიკა სრულად ისწავლება 1-თვიან პროექტებში).<br><a href="${SITE_FACTS.registration.url}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ მიმდინარე პროექტების დაჯავშნა →</a>`
      : `ყველა სამუშაო მასალა სრულად შედის ღირებულებაში.<br><a href="contact.html?course=${targetProg.id}" class="ai-prompt-btn" style="display:inline-block; margin-top:8px; text-decoration:none;">✨ დაჯავშნა →</a>`;

    return filterByTarget([
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: eText
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: tText
      }
    ]);
  }

  // 7. დეზამბიგუაცია (თუ კითხვა ძალიან ზოგადია)
  if (normQuery === "ვორქშოფი" || normQuery === "ვორქშოფები" || normQuery === "მასტერკლასი") {
    return filterByTarget([
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `სახელოსნოში გვაქვს <strong>3 ერთდღიანი ვორქშოფი (თითოეული 50 ₾ • 1.5–2 სთ)</strong>:<br>1. 🎄 მანათობელი საახალწლო ბარათი (6–14 წელი)<br>2. 🐧 მოფუსფუსე პინგვინი ყინულზე (7–10 წელი)<br>3. 🕯️ თიხის მანათობელი ეკო-ლამპიონი (6–12 წელი)`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `რომელი ვორქშოფი გაინტერესებთ უფრო დეტალურად?
        <div class="ai-quick-prompts">
          <button class="ai-prompt-btn" data-query="რა არის ვორქშოფი „მოფუსფუსე პინგვინი“?">🐧 პინგვინი ყინულზე</button>
          <button class="ai-prompt-btn" data-query="მომიყევი საახალწლო ბარათზე">🎄 საახალწლო ბარათი</button>
          <button class="ai-prompt-btn" data-query="მომიყევი თიხის მანათობელ ლამპიონზე">🕯️ თიხის ლამპიონი</button>
        </div>`
      }
    ]);
  }

  if (normQuery === "პროექტი" || normQuery === "პროექტები" || normQuery === "ინტეგრირებული პროექტები") {
    return filterByTarget([
      {
        type: "earth",
        author: "🌿 ეკო (ფუსფუსა დედამიწა)",
        text: `ჩვენი <strong>1-თვიანი ინტეგრირებული პროექტებია (4 კვირა, 8 შეხვედრა • 3 სთ • 200 ₾)</strong>:<br>1. ❄️ „ყინულოვანი სამყარო“ (8–14 წელი)<br>2. 🐝 „ფუსფუსა ფუტკრები“ (8–12 წელი)`
      },
      {
        type: "tech",
        author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
        text: `რომელ პროექტზე ისურვებდით მეტის გაგებას?
        <div class="ai-quick-prompts">
          <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ყინულოვან სამყაროზე“">❄️ ყინულოვანი სამყარო</button>
          <button class="ai-prompt-btn" data-query="მომიყევი პროექტ „ფუსფუსა ფუტკრებზე“">🐝 ფუსფუსა ფუტკრები</button>
        </div>`
      }
    ]);
  }

  // 8. ცოდნის ბაზის შეფასება (Scoring with TF-IDF style weights, stems & Levenshtein)
  const queryWords = normQuery.split(" ").filter(w => w.length > 1 && !STOP_WORDS.has(w));
  const queryStems = [];
  queryWords.forEach(w => {
    getGeorgianStems(w).forEach(s => queryStems.push(s));
  });

  let bestModule = null;
  let bestScore = 0;

  for (const module of FUSFUSA_SITE_KNOWLEDGE) {
    let score = 0;

    // A. ზუსტი ფრაზული შესაბამისობა (Intents)
    if (module.intents && Array.isArray(module.intents)) {
      for (const intent of module.intents) {
        const normIntent = normalizeGeorgian(intent);
        if (normQuery.includes(normIntent)) {
          score += 50;
          break;
        } else if (normIntent.includes(normQuery) && normQuery.length > 5) {
          score += 30;
          break;
        }
      }
    }

    // B. საკვანძო სიტყვები, სტემები და Fuzzy Matching
    if (module.keywords && Array.isArray(module.keywords)) {
      for (const kw of module.keywords) {
        const normKw = normalizeGeorgian(kw);
        if (normKw.length < 2) continue;

        // პირდაპირი ქვესტრიქონი
        if (normQuery.includes(normKw)) {
          score += 18;
          continue;
        }

        // სტემების დამთხვევა
        const kwStems = getGeorgianStems(normKw);
        const hasStemMatch = kwStems.some(ks =>
          queryStems.some(qs => qs === ks || (ks.length >= 4 && qs.startsWith(ks)) || (qs.length >= 4 && ks.startsWith(qs)))
        );
        if (hasStemMatch) {
          score += 10;
          continue;
        }

        // Fuzzy (Levenshtein) დამთხვევა სიტყვებს შორის
        const hasFuzzy = queryWords.some(qw => isFuzzyMatch(qw, normKw));
        if (hasFuzzy) {
          score += 8;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestModule = module;
    }
  }

  // თუ მოიძებნა მაღალი სანდოობის პასუხი (score >= 6)
  if (bestScore >= 6 && bestModule) {
    const rawRes = bestModule.respond(normQuery);
    return filterByTarget(rawRes);
  }

  // 9. შემოქმედებითი / ხელსაქმის ზოგადი შეკითხვა (Crafting inquiries)
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
          text: `ფანტასტიკურია! რობოტის ან ჭკვიანი მოწყობილობის შესაქმნელად ვიყენებთ Micro:bit ან Arduino მიკროკომპიუტერს, ძრავებს და სენსორებს. Scratch-ისა და MakeCode-ის ბლოკებით კი მას ვაძლევთ „ტვინს“! მოდი სახელოსნოში და შენ თვითონ აამუშავებ!`
        }
      ]);
    }
  }

  // 10. ინტელექტუალური Fallback (უახლოესი თემების შეთავაზებით და საკონტაქტო რეკვიზიტებით)
  return filterByTarget([
    {
      type: "earth",
      author: "🌿 ეკო (ფუსფუსა დედამიწა)",
      text: `სამწუხაროდ, ამ კონკრეტულ საკითხზე ინფორმაცია საიტზე არ მოიძებნა.`
    },
    {
      type: "tech",
      author: "💻 ბიტი (ფუსფუსა ტექნოლოგია)",
      text: `იქნებ რომელიმე ეს თემა გაინტერესებდეთ?
      <div class="ai-quick-prompts">
        <button class="ai-prompt-btn" data-query="რა ღირს სწავლა და ვორქშოფები?">💰 რა ღირს სწავლა?</button>
        <button class="ai-prompt-btn" data-query="რა ასაკიდან მიიღება ბავშვი?">👧 ასაკობრივი ჯგუფები</button>
        <button class="ai-prompt-btn" data-query="სად მდებარეობს სახელოსნო?">📍 მისამართი და რუკა</button>
        <button class="ai-prompt-btn" data-query="ვინ არიან სახელოსნოს ხელმძღვანელები?">👩‍🏫 ხელმძღვანელები</button>
      </div>
      <p style="margin-top: 8px; font-size: 0.88rem;">ან პირადად დაუკავშირდით ჩვენს მენტორებს:<br>
      • 📞 ტელეფონი: <strong><a href="tel:${SITE_FACTS.contacts.phone.replace(/\s+/g, '')}" style="color:var(--color-blue); text-decoration:underline;">${SITE_FACTS.contacts.phone}</a></strong><br>
      • ✉️ ელფოსტა: <strong><a href="mailto:${SITE_FACTS.contacts.email}" style="color:var(--color-blue); text-decoration:underline;">${SITE_FACTS.contacts.email}</a></strong><br>
      • 📍 მისამართი: <strong>${SITE_FACTS.contacts.address}</strong> (<a href="${SITE_FACTS.contacts.mapsUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--color-blue); text-decoration:underline;">Google Maps 🗺️</a>)<br>
      ან შეავსეთ <a href="${SITE_FACTS.registration.url}" style="color:var(--color-blue); font-weight:bold; text-decoration:underline;">სარეგისტრაციო ფორმა</a>! ✨</p>`
    }
  ]);
}

// უსაფრთხოების ფუნქცია მომხმარებლის შეტყობინებების ეკრანირებისთვის
function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}



