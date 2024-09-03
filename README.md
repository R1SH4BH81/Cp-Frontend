# CirclePe Assignment


## Project Overview
This project is a responsive website implementation based on the provided Figma design and prototype. The website has been designed to be fully responsive across different screen sizes, ensuring a seamless user experience on mobile, tablet, and desktop devices. The implementation includes pixel-perfect design, transitions, animations, cross-browser compatibility, performance optimization, and accessibility considerations.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your system:

 - Node.js (version 18 and above)
 - npm (version 6 or above)
 - VS Code ( or any other code editor)

### Installation

Follow these steps to set up the project locally:

  1. Clone the repository:
     ```
     
       git clone https://github.com/mavidishu/CirclePe_Assignment.git
     
     ```
  2. Navigate to the Project Directory:

     ```
     
       cd CirclePe_Assignment
     
     ```
  3. Install Dependencies:

     ```
     
       npm install
     
     ```
  4. Run the Project Locally:

     ```
     
       npm run dev
     
     ```

### File Structure
  ```
    CirclePe-Assignment/
    │
    ├── src/
    │   ├── assets/             # Source assets like images, fonts, etc.
    │   │   ├── 18_1.png
    │   │   ├── 18_2.png
    │   │   ├── phone1.jpg
    │   │   ├── phone2.jpg
    │   │   ├── phone3.jpg
    │   │   ├── phone4_1.jpg
    │   │   ├── phone4.jpg
    │   │   ├── phone5.jpg
    │   │   └── phone6.jpg
    │   ├── components/         # Reusable components (Header, Footer, etc.)
    │   │   ├── arrow/
    │   │   |   ├── arrow.css
    │   │   |   ├── arrow.jsx
    │   │   ├── circle/
    │   │   |   ├── circle.css
    │   │   |   ├── circle.jsx      
    │   │   ├── phone/
    │   │   |   ├── phone.css
    │   │   |   ├── phone.jsx         
    │   │   ├── Text/
    │   │   |   ├── text1.jsx
    │   │   |   ├── text2.jsx
    │   │   |   ├── text3.jsx
    │   │   |   ├── text4.jsx
    │   │   |   ├── text5.jsx
    │   │   |   ├── text6.jsx
    │   │   ├── vertical_line/
    │   │   |   ├── format_text.jsx
    │   │   |   ├── rectangle.jsx
    │   │   ├── format_text.jsx
    │   │   ├── rectangle.jsx
    │   │   ├── text.css
    │   │ 
    │   ├── App.css      
    │   ├── App.jsx       
    │   ├── demo.jsx     
    │   ├── index.css        
    │   └── main.jsx
    │
    ├── .gitignore              
    ├── README.md               
    ├── eslint.config.js        
    ├── package-lock.json       
    ├── package.json            
    ├── index.html              
    └── vite.config.js          
  ```

### Technologies Used
 - HTML5
 - CSS3
 - JavaScript (ES6+)
 - React.js
 - Bootstrap (for consistent styling)
 - Framer Motion (for animations)

### Challenges Faced
 - *Responsive Design:* Ensuring that all elements resize and reflow correctly across different screen sizes was a challenge, particularly with complex layouts.
 - *Cross-Browser Compatibility:* Testing and fixing issues across different browsers required significant effort.
 - *Performance Optimization:* Balancing visual fidelity with performance, especially on slower network connections, was a challenge.

