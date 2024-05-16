# Portfolio Website

This is a portfolio website project created using Vite with React and TypeScript.

## App in Action:

![spotify](/src/assets/projects/portfolio/portfolio.gif)

## Table of Contents

- [Portfolio Website](#portfolio-website)
  - [App in Action:](#app-in-action)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Technologies and Used Libraries:](#technologies-and-used-libraries)
  - [Using In Your Local Machine](#using-in-your-local-machine)
    - [Installation](#installation)
    - [EmailJS Configuration](#emailjs-configuration)
    - [Available Scripts](#available-scripts)
  - [Contributing](#contributing)
  - [License](#license)
  - [Deployment](#deployment)

## Introduction

This project aims to represent digital presence effectively by creating a personal website. Developed using modern web technologies, this site provides a platform that includes my resume, projects, and contact information. Below is a summary of the technologies used and the features they provide:

## Technologies and Used Libraries:

- React and Vite: React and Vite are used to develop a fast and efficient web application. These technologies are preferred to optimize site performance and speed up the development process.

- TypeScript: TypeScript, with its powerful static type system, ensures that your code is safer and more predictable.

- Zod and React Hook Form: Zod and React Hook Form are used for form validation. This is important to ensure that users enter their information correctly and to maintain data accuracy.

- EmailJS: EmailJS is used to allow users to send you emails directly through the contact form. This makes it easier for visitors to interact with you and enhances communication.

- Tailwind and Framer Motion: Tailwind CSS and Framer Motion are used for design and animations. This is crucial to add visual appeal to the site and improve user experience.

- i18next: i18next is used for dual-language support. This allows both Turkish and English-speaking users to understand and interact with the site.

- React Scroll: React Scroll is used to develop page navigation for larger screen sizes. This allows users to easily jump to the desired section and explore the content.

## Using In Your Local Machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/enesctnn/Portfolio
   ```

2. Navigate into the project directory:

   ```bash
   cd Portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

---

### EmailJS Configuration

To enable email functionality in this project, you need to set up environment variables for EmailJS. Follow the steps below to configure EmailJS:

1. Create a `.env` file in the root directory of your project if it doesn't already exist.

2. Open the `.env` file and define the following variables:

```
VITE_EMAILJS_USERID=your_emailjs_userid
VITE_EMAILJS_SERVICEID=your_emailjs_serviceid
VITE_EMAILJS_TEMPLATEID=your_emailjs_templateid
```

Replace `your_emailjs_userid`, `your_emailjs_serviceid`, and `your_emailjs_templateid` with your actual EmailJS User ID, Service ID, and Template ID respectively. You can find these values in your EmailJS dashboard after you've set up your email service and template.

3. Save the `.env` file.

Now your EmailJS configuration is complete and your project should be able to send emails using EmailJS.

---

### Available Scripts

In the project directory, you can run:

- **Development Server**:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  This command starts the development server at `http://localhost:5173/Portfolio/`.

## Contributing

Contributions are welcome! Please fork this repository and create a pull request with your suggested changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Deployment

This project is deployed and hosted on Github Pages. You can access the live version by following this link: [Portfolio Live Demo](https://enesctnn.github.io/Portfolio/)
