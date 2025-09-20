# Job Task Dashboard

A simple and modern dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Description

This project is a dashboard application that provides a quick overview of key statistics related to users, posts, and tasks. It features a clean and responsive layout with data visualizations to help users easily track important metrics.

## Features

-   **Dashboard Overview:** A central hub displaying key metrics in an easy-to-understand format.
-   **Data Visualization:** Interactive charts to visualize data trends.
-   **Responsive Design:** A fully responsive layout that works on all devices.
-   **Modern Tech Stack:** Built with the latest web technologies for optimal performance and developer experience.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v20 or later)
-   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/job-task-dashboard.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

```sh
npm run dev
```

## Technologies Used

-   [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static web applications.
-   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   [Framer Motion](https://www.framer.com/motion/) - A library for creating animations in React.
-   [Recharts](https://recharts.org/) - A composable charting library built on React components.
-   [DaisyUI](https://daisyui.com/) - A Tailwind CSS component library.

## Folder Structure

```
.
├── .next/
├── node_modules/
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── (all-routes)/
│   │   │   ├── posts/
│   │   │   └── users/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Card/
│   │   ├── Chart/
│   │   ├── Modal/
│   │   ├── Footer.tsx
│   │   ├── Loading.tsx
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   └── hooks/
│       └── useFetch.ts
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.