'use strict';

/**
 * Multi-language support
 */

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      skills: "Skills",
      contact: "Contact",
      downloadCV: "Download CV"
    },
    hero: {
      greeting: "Hello I'm",
      title: "Software Engineer from Ho Chi Minh",
      description: "With three years of experience in web and mobile development using ReactJS and React Native, I build interactive, responsive applications that deliver great user experiences across both web and mobile platforms.",
      yearsExp: "Years of Experience",
      projectsCompleted: "Projects Completed",
      getQuote: "Get a Quote",
      aboutMe: "About Me"
    },
    about: {
      subtitle: "I'm a Software Engineer",
      title: "I Develop Web & Mobile Applications",
      description1: "With three years of experience in web and mobile development using ReactJS and React Native, I have successfully built interactive, responsive applications that deliver great user experiences across both web and mobile platforms. My familiarity with various web and mobile technologies within the JavaScript ecosystem allows me to create seamless and engaging user interfaces.",
      description2: "I am committed to continuous learning and am always eager to explore new technologies and best practices, ensuring that I remain relevant in the rapidly evolving world of software development. Graduated from Gia Dinh University with a major in Software Engineering (GPA: 8/10). Currently working as Frontend Developer at DFM-EUROPE since May 2025.",
      viewPortfolio: "View Portfolio"
    },
    portfolio: {
      subtitle: "Portfolio",
      title: "My Amazing Works",
      description: "A showcase of my recent web and mobile development projects using ReactJS, React Native, TypeScript, and modern tech stacks."
    },
    skills: {
      subtitle: "My Skills",
      title: "Technical Skills & Expertise",
      description: "Proficient in modern web and mobile development technologies with a focus on JavaScript ecosystem and UI/UX optimization."
    },
    contact: {
      subtitle: "Don't be shy",
      title: "Drop Me a Line",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      submitBtn: "Submit Message",
      addressLabel: "Address",
      addressValue: "Ho Chi Minh, Viet Nam",
      emailLabel: "Email",
      phoneLabel: "Phone",
      successTitle: "Success!",
      successMessage: "Thank you! Your message has been sent successfully.",
      closeBtn: "Close"
    }
  },
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Về Tôi",
      portfolio: "Dự Án",
      skills: "Kỹ Năng",
      contact: "Liên Hệ",
      downloadCV: "Tải CV"
    },
    hero: {
      greeting: "Xin chào, tôi là",
      title: "Kỹ Sư Phần Mềm đến từ TP. Hồ Chí Minh",
      description: "Với ba năm kinh nghiệm trong phát triển web và mobile sử dụng ReactJS và React Native, tôi xây dựng các ứng dụng tương tác, responsive mang lại trải nghiệm người dùng tuyệt vời trên cả nền tảng web và mobile.",
      yearsExp: "Năm Kinh Nghiệm",
      projectsCompleted: "Dự Án Hoàn Thành",
      getQuote: "Nhận Báo Giá",
      aboutMe: "Về Tôi"
    },
    about: {
      subtitle: "Tôi là Kỹ Sư Phần Mềm",
      title: "Tôi Phát Triển Ứng Dụng Web & Mobile",
      description1: "Với ba năm kinh nghiệm trong phát triển web và mobile sử dụng ReactJS và React Native, tôi đã xây dựng thành công các ứng dụng tương tác, responsive mang lại trải nghiệm người dùng tuyệt vời trên cả nền tảng web và mobile. Sự quen thuộc của tôi với nhiều công nghệ web và mobile khác nhau trong hệ sinh thái JavaScript cho phép tôi tạo ra giao diện người dùng liền mạch và hấp dẫn.",
      description2: "Tôi cam kết học hỏi liên tục và luôn háo hức khám phá các công nghệ mới và thực tiễn tốt nhất, đảm bảo rằng tôi luôn cập nhật trong thế giới phát triển phần mềm đang phát triển nhanh chóng. Tốt nghiệp Đại học Gia Định chuyên ngành Kỹ Thuật Phần Mềm (GPA: 8/10). Hiện đang làm việc với vai trò Frontend Developer tại DFM-EUROPE từ tháng 5 năm 2025.",
      viewPortfolio: "Xem Dự Án"
    },
    portfolio: {
      subtitle: "Dự Án",
      title: "Các Công Việc Tuyệt Vời Của Tôi",
      description: "Giới thiệu các dự án phát triển web và mobile gần đây của tôi sử dụng ReactJS, React Native, TypeScript và các công nghệ hiện đại."
    },
    skills: {
      subtitle: "Kỹ Năng Của Tôi",
      title: "Kỹ Năng Kỹ Thuật & Chuyên Môn",
      description: "Thành thạo các công nghệ phát triển web và mobile hiện đại với trọng tâm là hệ sinh thái JavaScript và tối ưu hóa UI/UX."
    },
    contact: {
      subtitle: "Đừng ngại ngần",
      title: "Gửi Tin Nhắn Cho Tôi",
      namePlaceholder: "Tên",
      emailPlaceholder: "Email",
      messagePlaceholder: "Tin nhắn",
      submitBtn: "Gửi Tin Nhắn",
      addressLabel: "Địa Chỉ",
      addressValue: "TP. Hồ Chí Minh, Việt Nam",
      emailLabel: "Email",
      phoneLabel: "Điện Thoại",
      successTitle: "Thành Công!",
      successMessage: "Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.",
      closeBtn: "Đóng"
    }
  }
};

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const keys = element.getAttribute('data-i18n').split('.');
    let translation = translations[lang];
    
    keys.forEach(key => {
      translation = translation[key];
    });
    
    if (translation) {
      element.textContent = translation;
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const keys = element.getAttribute('data-i18n-placeholder').split('.');
    let translation = translations[lang];
    
    keys.forEach(key => {
      translation = translation[key];
    });
    
    if (translation) {
      element.setAttribute('placeholder', translation);
    }
  });
  
  // Update language button text
  const langBtn = document.querySelector('[data-lang-toggle] .lang-text');
  if (langBtn) {
    langBtn.textContent = lang.toUpperCase();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  changeLanguage(currentLang);
  
  // Language toggle button
  const langToggleBtn = document.querySelector('[data-lang-toggle]');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const newLang = currentLang === 'en' ? 'vi' : 'en';
      changeLanguage(newLang);
    });
  }

  // Set dynamic redirect URL for FormSubmit
  const formRedirect = document.getElementById('form-redirect');
  if (formRedirect) {
    const currentURL = window.location.origin + window.location.pathname;
    formRedirect.value = currentURL + '?success=true#contact';
  }

  // Check for form success parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    const successModal = document.getElementById('success-modal');
    const contactForm = document.getElementById('contact-form');
    
    if (successModal) {
      // Show modal
      successModal.style.display = 'flex';
      
      // Close modal on button click
      const closeBtn = successModal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function() {
          successModal.style.display = 'none';
          // Clean URL
          window.history.replaceState({}, document.title, window.location.pathname + '#contact');
        });
      }
      
      // Close modal on overlay click
      successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
          successModal.style.display = 'none';
          // Clean URL
          window.history.replaceState({}, document.title, window.location.pathname + '#contact');
        }
      });
      
      // Close modal with Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successModal.style.display === 'flex') {
          successModal.style.display = 'none';
          // Clean URL
          window.history.replaceState({}, document.title, window.location.pathname + '#contact');
        }
      });
    }
    
    // Reset form
    if (contactForm) {
      contactForm.reset();
    }
  }
});


/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});