# 📽️ Mini Netflix

A minimal movie browsing app built with **Next.js 15**, **React 19**, and **Tailwind CSS**, using the **OMDb API** to fetch movie details dynamically.

## ✨ Features
✅ Browse a list of movies with thumbnails  
✅ Click a movie to view details (poster, title, description, rating)  
✅ Fetches movie data dynamically from **OMDb API**  
✅ Supports **URL-based navigation** (`/movie/details/tt3896198`)  
✅ **Fully responsive** and **accessible**  
✅ **Fast and optimized** with Next.js  

---

## 🚀 Tech Stack
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript  
- **Styling:** Tailwind CSS  
- **API:** OMDb API ([omdbapi.com](https://www.omdbapi.com/))  
- **Icons:** Lucide React  
- **Linting:** ESLint  
- **Build System:** Next.js built-in scripts  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/JansleyFelipe/mini-netflix.git
cd mini-netflix
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a .env.local file in the root directory and add your OMDb API key:
```bash
NEXT_PUBLIC_OMDB_URL=https://www.omdbapi.com
NEXT_PUBLIC_OMDB_API_KEY=your_omdb_api_key_here
```
- Get a free API key from OMDb API.

### 4️⃣ Start the Development Server
```bash
npm run dev
```
- The app will be available at http://localhost:3000.

### 5️⃣ Build for Production
```bash
npm run build
npm run start
```

### 5️⃣ Build using Gulp (Optional)
If you prefer to use Gulp for managing the build process, follow the steps below:

**Start the Development Server with Gulp**
```bash
npm run dev:gulp
```
- This will start the Next.js development server, allowing you to work on your project with hot-reloading and file watching.

**Build the Project with Gulp**
```bash
npm run build:gulp
```
- This will clean the .next folder (if it exists) and then build the project using Next.js's internal build process. The result will be optimized and minified production assets.

### 6️⃣ Run ESLint (Optional)
```bash
npm run lint
```
- This ensures code quality and follows best practices.

---

### 🌍 URL-based Navigation
You can access movie details in two ways:
```bash
http://localhost:3000/movie/details/tt3896198
http://localhost:3000/movie/details?movieId=tt3896198
```
- Both will display the movie details page with the fetched data.

---

### 🎯 Future Improvements
- Add search functionality
- Implement authentication for user profiles

---

### 💡 Notes
If you encounter any issues, check:

- The .env.local file is correctly set
- The OMDb API key is valid
- Your internet connection