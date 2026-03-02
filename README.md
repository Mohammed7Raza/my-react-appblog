# Responsive Blog Landing Page (React + Tailwind CSS)

A clean, responsive blog landing page built as a technical assessment. This project demonstrates component-based architecture, idea for dynamic data rendering, and mobile-first responsive design using React and Tailwind CSS.

## 🚀 Features

### 1. Header & Navigation
* **Text Logo**: "Blog page" logo branding.
* **Navigation**: Responsive links for Home, About, Blog, and Contact.
* **Hover Effects**: Interactive styling on navigation links for better UX.

### 2. Hero Section
* **Engaging Content**: High-impact title "React: A Frontend Framework".
* **Call to Action**: "Explore Articles" button with integrated hover states.

### 3. Dynamic Blog Section
* **Data-Driven**: Uses `.map()` to dynamically render 6 blog articles from a centralized data state.
* **State Management**: Implemented using React `useState` hook for product/blog management.
* **Article Details**: Each card displays Title, Description, Author, Date, and a "Read More" button.

### 4. Footer
* **Copyright**: Styled "&copy; Blog Landing" section.
* **Social Presence**: Integrated links'- simulaition for Facebook and Instagram.

### 5. Responsive Design
* **Mobile Layout**: Single column stacking for smaller screens.
* **Desktop Layout**: Utilizes Tailwind's flex and grid utilities for wider displays.

## 🛠️ Tech Stack

* **React** (Functional Components)
* **Tailwind CSS** (Utility-first styling)
* **React Router Dom** (Setup for future navigation)

## 📂 Folder Structure

```text
src/
 ├── components/
 │    ├── Navbar.jsx    # Header with navigation links
 │    ├── Hero.jsx      # Hero section with CTA
 │    ├── Blogcard.jsx  # Dynamic card rendering using .map()
 │    └── Footer.jsx    # Footer with social links simulation
 ├── App.jsx            # Main assembly point
 ├── Components.css     # Custom CSS for specific styling
 └── index.css          # Tailwind directives

Setup:
run the below commands-
git clone [https://github.com/Mohammed7Raza/my-react-appblog.git](https://github.com/Mohammed7Raza/my-react-appblog.git)
npm install
npm run dev
