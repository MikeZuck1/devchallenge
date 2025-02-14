```markdown
# 📰 Newsletter Subscription Form

A project based on a challenge where users can subscribe to a newsletter by entering their email.

## 🚀 Technologies Used
- **React** (with [Vite](https://vitejs.dev/))  
- **TailwindCSS** for styling  
- **TypeScript** 

## 📂 Installation & Execution  

### 1️⃣ **Clone the project**  
```bash
git clone https://github.com/MikeZuck1/devchallenge.git
cd devchallengenews
```

### 2️⃣ **Install dependencies**  
```bash
npm install
# or with Yarn
yarn install
```

### 3️⃣ **Run the project in development mode**  
```bash
npm run dev
# or
yarn dev
```

### 4️⃣ **Build for production**  
```bash
npm run build
```

---

## 🛠️ **Project Structure**  
The project uses **Vite** as the bundler, with a standard structure for a React project:

```
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── CustomInput.tsx
│   ├── Title.tsx
│   └── ui
│       ├── button.tsx
│       └── input.tsx
├── index.css
├── lib
│   └── utils.ts
├── main.tsx
└── vite-env.d.ts
```

---

## 🎨 **Using TailwindCSS**  
Styling is fully handled with **TailwindCSS**. Here are some classes used:  
- `bg-gray-50` → Background color  
- `w-[25rem]` → Custom width  
- `rounded-lg` → Rounded borders  
- `text-center` → Centered text  

📌 **Responsive Breakpoints**:  
- `sm:` → From 640px  
- `md:` → From 768px  
- `lg:` → From 1024px  

---

## 💻 **Main Features**  
✅ Controlled email input state  
✅ Submit button  
✅ Auto-clear input after submission  
✅ Confirmation message after subscription  
✅ Responsive design with TailwindCSS  

---

## 👥 **Contributors**  
💡 **[Mike Batelahoko]** – Development & Design  

👀 **Inspired by** [the original challenge](#)  

---

## 📜 **License**  
This project is under the **MIT** license.  
```