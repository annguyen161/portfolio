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
    },
    projectModal: {
      description: "Description",
      responsibilities: "Responsibilities",
      technologies: "Technologies",
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
    },
    projectModal: {
      description: "Mô Tả",
      responsibilities: "Nhiệm Vụ",
      technologies: "Công Nghệ",
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
  
  // Update project modal if it's open
  if (currentProjectId) {
    populateProjectModal(currentProjectId, lang);
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

/**
 * Project Modal
 */

// Project data from CV - Multi-language support
const projectsData = {
  'airport-t3': {
    en: {
      subtitle: 'Website',
      title: 'Airport Tan Son Nhat T3 - Interactive Airport Navigation',
      period: '08/2025 - Present',
      description: 'Airport T3 Map is an interactive airport navigation system designed to help passengers easily locate important areas such as check-in counters, boarding gates, and service zones within Terminal 3. The application allows users to search destinations, find optimal routes inside the airport, and view detailed flight information related to their journeys. By combining clear map visualization with indoor navigation and flight lookup features, the system improves passenger experience and helps users move through the airport more efficiently and confidently.',
      responsibilities: [
        'Built interactive airport map using ReactJS & Three.js',
        'Implemented indoor routing and location search features',
        'Integrated flight information lookup and map interactions',
        'Optimized performance and UI for smooth user experience',
        'Collaborated with backend APIs to fetch map data and flight information',
        'Used AI-assisted development tools (Cursor) to support coding, refactoring, and improve development productivity'
      ],
      technologies: ['ReactJS', 'Redux', 'TypeScript', 'ThreeJS', 'AI-assisted Development']
    },
    vi: {
      subtitle: 'Website',
      title: 'Sân Bay Tân Sơn Nhất T3 - Hệ Thống Điều Hướng Tương Tác',
      period: '08/2025 - Hiện Tại',
      description: 'Bản đồ Sân Bay T3 là một hệ thống điều hướng sân bay tương tác được thiết kế để giúp hành khách dễ dàng định vị các khu vực quan trọng như quầy check-in, cổng lên máy bay và khu vực dịch vụ trong Terminal 3. Ứng dụng cho phép người dùng tìm kiếm điểm đến, tìm tuyến đường tối ưu bên trong sân bay và xem thông tin chuyến bay chi tiết liên quan đến hành trình của họ. Bằng cách kết hợp trực quan hóa bản đồ rõ ràng với tính năng điều hướng trong nhà và tra cứu chuyến bay, hệ thống cải thiện trải nghiệm hành khách và giúp người dùng di chuyển qua sân bay hiệu quả và tự tin hơn.',
      responsibilities: [
        'Xây dựng bản đồ sân bay tương tác sử dụng ReactJS & Three.js',
        'Triển khai tính năng điều hướng trong nhà và tìm kiếm vị trí',
        'Tích hợp tra cứu thông tin chuyến bay và tương tác bản đồ',
        'Tối ưu hóa hiệu suất và UI để có trải nghiệm người dùng mượt mà',
        'Hợp tác với backend APIs để lấy dữ liệu bản đồ và thông tin chuyến bay',
        'Sử dụng công cụ phát triển hỗ trợ AI (Cursor) để hỗ trợ coding, refactoring và cải thiện năng suất phát triển'
      ],
      technologies: ['ReactJS', 'Redux', 'TypeScript', 'ThreeJS', 'Phát Triển Hỗ Trợ AI']
    }
  },
  'finance': {
    en: {
      subtitle: 'Web & Mobile',
      title: 'Finance - Financial Management Platform',
      period: '04/2024 - 10/2024',
      description: 'Finance is a groundbreaking financial platform developed by leading experts in finance and technology. The application offers advanced features such as account management, budgeting, and investment tracking to meet all your financial needs. With flexible custom templates, voice recognition, and text-to-speech conversion, Finance provides a comprehensive solution for diverse financial projects, helping you manage your finances more efficiently and intelligently than ever before.',
      responsibilities: [
        'Built responsive web & mobile UI for a loan consultation platform using ReactJS',
        'Implemented booking flow for users to schedule meetings with financial advisors',
        'Managed application state with Redux and integrated REST APIs',
        'Collaborated in a 6-member Agile team'
      ],
      technologies: ['ReactJS', 'TypeScript', 'Redux', 'RESTful API', 'Responsive Design (Web & Mobile)']
    },
    vi: {
      subtitle: 'Web & Mobile',
      title: 'Finance - Nền Tảng Tư Vấn Vay Tài Chính',
      period: '04/2024 - 10/2024',
      description: 'Finance là một nền tảng tài chính đột phá được phát triển bởi các chuyên gia hàng đầu trong lĩnh vực tài chính và công nghệ. Ứng dụng cung cấp các tính năng tiên tiến như quản lý tài khoản, ngân sách và theo dõi đầu tư để đáp ứng mọi nhu cầu tài chính của bạn. Với các mẫu tùy chỉnh linh hoạt, nhận dạng giọng nói và chuyển đổi văn bản thành giọng nói, Finance cung cấp một giải pháp toàn diện cho các dự án tài chính đa dạng, giúp bạn quản lý tài chính hiệu quả và thông minh hơn bao giờ hết.',
      responsibilities: [
        'Xây dựng giao diện web & mobile responsive cho nền tảng tư vấn vay sử dụng ReactJS',
        'Triển khai luồng đặt lịch để người dùng lên lịch họp với cố vấn tài chính',
        'Quản lý trạng thái ứng dụng với Redux và tích hợp REST APIs',
        'Hợp tác trong nhóm Agile 6 thành viên'
      ],
      technologies: ['ReactJS', 'TypeScript', 'Redux', 'RESTful API', 'Thiết Kế Responsive (Web & Mobile)']
    }
  },
  'movenjoy': {
    en: {
      subtitle: 'Mobile App',
      title: 'Movenjoy - Active Mobility Lifestyle App',
      period: '11/2024 - 05/2025',
      description: 'Ridenjoy is an innovative active mobility lifestyle app designed to make cycling and walking safer and more enjoyable. The app integrates location-based services (Joy Stops), augmented reality (AR) gamification (Joy Beacons), and phygital event challenges to encourage active travel. Users can explore their surroundings, participate in interactive challenges, and collect geo-located Joy Points by cycling across different locations. Ridenjoy enhances urban mobility by merging technology with real-world exploration, fostering a fun and engaging experience for all active travelers.',
      responsibilities: [
        'Developed mobile user interfaces for an active mobility application using React Native & TypeScript',
        'Implemented map-based features, including route searching, location display, and real-time user navigation',
        'Managed application state using Redux to handle map data, user sessions, and UI states',
        'Built and deployed the application for both Android and iOS platforms',
        'Improved UI/UX based on user feedback and fixed performance-related issues'
      ],
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Map & Location Services', 'Android & iOS Build']
    },
    vi: {
      subtitle: 'Ứng Dụng Mobile',
      title: 'Movenjoy - Ứng Dụng Lối Sống Di Chuyển Tích Cực',
      period: '11/2024 - 05/2025',
      description: 'Ridenjoy là một ứng dụng lối sống di chuyển tích cực sáng tạo được thiết kế để làm cho việc đi xe đạp và đi bộ an toàn và thú vị hơn. Ứng dụng tích hợp dịch vụ dựa trên vị trí (Joy Stops), gamification thực tế tăng cường (AR) (Joy Beacons) và thử thách sự kiện phygital để khuyến khích di chuyển tích cực. Người dùng có thể khám phá môi trường xung quanh, tham gia các thử thách tương tác và thu thập Joy Points có vị trí địa lý bằng cách đi xe đạp qua các địa điểm khác nhau. Ridenjoy nâng cao khả năng di chuyển đô thị bằng cách kết hợp công nghệ với khám phá thế giới thực, tạo ra trải nghiệm thú vị và hấp dẫn cho tất cả những người đi du lịch tích cực.',
      responsibilities: [
        'Phát triển giao diện người dùng mobile cho ứng dụng di chuyển tích cực sử dụng React Native & TypeScript',
        'Triển khai các tính năng dựa trên bản đồ, bao gồm tìm kiếm tuyến đường, hiển thị vị trí và điều hướng người dùng theo thời gian thực',
        'Quản lý trạng thái ứng dụng bằng Redux để xử lý dữ liệu bản đồ, phiên người dùng và trạng thái UI',
        'Xây dựng và triển khai ứng dụng cho cả nền tảng Android và iOS',
        'Cải thiện UI/UX dựa trên phản hồi người dùng và sửa các vấn đề liên quan đến hiệu suất'
      ],
      technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Bản Đồ & Dịch Vụ Vị Trí', 'Build Android & iOS']
    }
  },
  'ihmgas': {
    en: {
      subtitle: 'Desktop App',
      title: 'IHMGas - Industrial Gas Analysis & Compliance Tool',
      period: '06/2025 - 08/2025',
      description: 'IHM Gas Tool – Desktop application built with Electron, React, and TypeScript for industrial gas analysis in compliance with ISO standards. Features include gas mixture unit conversion, operating condition calculations, Excel/CSV export, authentication, and multi-language support. A professional tool for the industrial gas sector.',
      responsibilities: [
        'Developed a desktop application using Electron, ReactJS, and TypeScript for industrial gas analysis',
        'Implemented features for gas mixture unit conversion and operating condition calculations based on industrial standards',
        'Built data tables and calculation results for gas compositions and operating parameters',
        'Developed user interfaces for data input, calculation configuration, and result visualization'
      ],
      technologies: ['ReactJS', 'TypeScript', 'ElectronJS', 'CSV Export']
    },
    vi: {
      subtitle: 'Ứng Dụng Desktop',
      title: 'IHMGas - Công Cụ Phân Tích Khí Công Nghiệp',
      period: '06/2025 - 08/2025',
      description: 'IHM Gas Tool – Ứng dụng desktop được xây dựng bằng Electron, React và TypeScript để phân tích khí công nghiệp tuân thủ các tiêu chuẩn ISO. Các tính năng bao gồm chuyển đổi đơn vị hỗn hợp khí, tính toán điều kiện vận hành, xuất Excel/CSV, xác thực và hỗ trợ đa ngôn ngữ. Một công cụ chuyên nghiệp cho lĩnh vực khí công nghiệp.',
      responsibilities: [
        'Phát triển ứng dụng desktop sử dụng Electron, ReactJS và TypeScript để phân tích khí công nghiệp',
        'Triển khai các tính năng chuyển đổi đơn vị hỗn hợp khí và tính toán điều kiện vận hành dựa trên tiêu chuẩn công nghiệp',
        'Xây dựng bảng dữ liệu và kết quả tính toán cho thành phần khí và tham số vận hành',
        'Phát triển giao diện người dùng cho nhập dữ liệu, cấu hình tính toán và trực quan hóa kết quả'
      ],
      technologies: ['ReactJS', 'TypeScript', 'ElectronJS', 'Xuất CSV']
    }
  }
};

// Function to populate project modal with data
function populateProjectModal(projectId, lang) {
  const projectData = projectsData[projectId];
  if (!projectData || !projectData[lang]) return;

  const data = projectData[lang];
  
  // Populate modal with project data
  document.getElementById('project-modal-subtitle').textContent = data.subtitle;
  document.getElementById('project-modal-title').textContent = data.title;
  document.getElementById('project-modal-period').textContent = data.period;
  document.getElementById('project-modal-description').textContent = data.description;

  // Populate responsibilities
  const responsibilitiesList = document.getElementById('project-modal-responsibilities');
  responsibilitiesList.innerHTML = '';
  data.responsibilities.forEach(responsibility => {
    const li = document.createElement('li');
    li.textContent = responsibility;
    responsibilitiesList.appendChild(li);
  });

  // Populate technologies
  const technologiesContainer = document.getElementById('project-modal-technologies');
  technologiesContainer.innerHTML = '';
  data.technologies.forEach(tech => {
    const tag = document.createElement('span');
    tag.className = 'project-tech-tag';
    tag.textContent = tech;
    technologiesContainer.appendChild(tag);
  });
}

// Store current project ID when modal is open
let currentProjectId = null;

// Initialize project modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const projectModal = document.getElementById('project-modal');
  const projectCards = document.querySelectorAll('[data-project]');
  const closeBtn = document.querySelector('.project-modal-close');

  // Open modal when clicking on a project card
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.getAttribute('data-project');
      currentProjectId = projectId;
      
      // Populate modal with current language
      populateProjectModal(projectId, currentLang);

      // Show modal
      projectModal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Close modal functions
  function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
    currentProjectId = null; // Reset current project ID
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Close on overlay click
  projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal.style.display === 'flex') {
      closeProjectModal();
    }
  });
});