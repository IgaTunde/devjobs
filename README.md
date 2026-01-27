# 💼 DevJobs - Modern Job Board Application

A sleek, fully-featured job board application built with Next.js 14, TypeScript, and Tailwind CSS. Browse, search, and filter developer jobs with a beautiful, responsive interface that works seamlessly across all devices.


## ✨ Features

### 🔍 Advanced Search & Filtering
- **Multi-field Search**: Search by job title, company name, or expertise
- **Location Filter**: Find jobs in specific locations
- **Contract Type Filter**: Filter by Full Time, Part Time, or Contract positions
- **Real-time Updates**: Instant results as you type
- **Smart Filtering Logic**: All filters work together seamlessly

### 🎨 Beautiful UI/UX
- **Dark Mode Support**: Toggle between light and dark themes
- **Responsive Design**: Perfect experience on mobile, tablet, and desktop
- **Smooth Animations**: Polished interactions and transitions
- **Custom Components**: Reusable UI components with consistent styling
- **Mobile-Optimized**: Bottom sheet filters on mobile devices

### 📱 Job Details
- **Detailed Job Pages**: Complete job descriptions with requirements and responsibilities
- **Company Information**: Logo, website, and company details
- **One-Click Apply**: Direct application links
- **Easy Navigation**: Quick return to job listings

### ⚡ Performance
- **Server-Side Rendering**: Fast initial page loads with Next.js
- **Smart Caching**: TanStack Query for efficient data management
- **Optimized Images**: Next.js Image component for fast loading
- **Code Splitting**: Automatic optimization for smaller bundle sizes

---

## 🚀 Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[React 18](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Data Management
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **JSON Data Source** - Lightweight job listings

### Developer Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

---

## 📁 Project Structure

```
devjobs/
├── app/
│   ├── components/
│   │   ├── Button.tsx              # Reusable button component
│   │   ├── Card.tsx                # Job card component
│   │   ├── CustomCheckbox.tsx      # Custom checkbox with controlled state
│   │   ├── Header.tsx              # Main navigation header
│   │   ├── JobsList.tsx            # Job listings with filtering
│   │   └── SearchBar.tsx           # Search and filter interface
│   ├── hooks/
│   │   └── useJobs.ts              # React Query hook for jobs data
│   ├── jobs/
│   │   └── [id]/
│   │       ├── page.tsx            # Dynamic job details page
│   │       └── not-found.tsx       # 404 page for invalid jobs
│   ├── types/
│   │   └── job.ts                  # TypeScript interfaces
│   ├── layout.tsx                  # Root layout with providers
│   └── page.tsx                    # Home page
├── public/
│   ├── assets/                     # Icons and images
│   └── data/
│       └── jobs.json               # Job listings data
└── tailwind.config.ts              # Tailwind configuration
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/devjobs.git
cd devjobs
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Step 4: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎯 Usage

### Searching for Jobs

1. **By Title/Company**: Type in the main search field
   - Searches across job titles, company names, and expertise
   - Results update in real-time

2. **By Location**: Use the location filter
   - Enter city, country, or region
   - Works with partial matches

3. **By Contract Type**: Toggle "Full Time Only" checkbox
   - Shows only full-time positions when enabled
   - Works in combination with other filters

4. **Mobile Filtering**: 
   - Tap the filter icon on mobile
   - Access location and contract filters in a modal
   - Click "Search" to apply filters

### Viewing Job Details

1. Click on any job card
2. View complete job description, requirements, and responsibilities
3. Click "Apply Now" to visit the application page
4. Click "Company Site" to visit the company website
5. Use "Back to job listings" to return to search results

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Tailwind Customization
Edit `tailwind.config.ts` to customize colors, fonts, and spacing:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#6366f1',
          // Add custom colors
        },
      },
    },
  },
}
```

### Adding Jobs
Edit `public/data/jobs.json` to add or modify job listings:

```json
{
  "id": 1,
  "company": "Company Name",
  "logo": "/assets/logos/company.svg",
  "logoBackground": "#5964E0",
  "position": "Senior Frontend Developer",
  "postedAt": "1d ago",
  "contract": "Full Time",
  "location": "United Kingdom",
  "website": "https://company.com",
  "apply": "https://company.com/apply",
  "description": "Job description...",
  "requirements": {
    "content": "Requirements overview...",
    "items": ["Requirement 1", "Requirement 2"]
  },
  "role": {
    "content": "Role overview...",
    "items": ["Responsibility 1", "Responsibility 2"]
  }
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Mobile | < 768px | Single column, bottom sheet filters |
| Tablet | 768px - 1024px | Two columns, inline filters |
| Desktop | > 1024px | Three columns, full search bar |

---

## 🧩 Key Components

### SearchBar
Handles all search and filter functionality with:
- Controlled inputs for title and location
- Checkbox for full-time filtering
- Mobile modal for compact devices
- Enter key support for quick searching

### JobsList
Displays filtered job results with:
- Grid layout (1-3 columns based on screen size)
- Loading and error states
- "Load More" pagination
- Results count display

### Card
Individual job listing card featuring:
- Company logo with custom background
- Job metadata (posted date, contract type)
- Clickable navigation to details page
- Hover effects and transitions

### Button
Reusable button component with:
- Consistent styling
- Flexible width options
- Click handler support
- Accessible markup

---

## 🎨 Design System

### Colors
```css
Primary: #6366f1 (Indigo 500)
Background (Light): #ffffff
Background (Dark): #0f172a
Text (Light): #1e293b
Text (Dark): #f1f5f9
```

### Typography
- Font Family: System fonts for optimal performance
- Headings: Bold weights (600-700)
- Body: Regular weight (400)

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build command: `npm run build`
Output directory: `.next`

---

## 🧪 Testing

### Running Tests
```bash
# Coming soon
npm run test
```

### Manual Testing Checklist
- [ ] Search by job title works
- [ ] Search by company name works
- [ ] Location filter works
- [ ] Full-time filter works
- [ ] Multiple filters work together
- [ ] Mobile modal opens and closes
- [ ] Job details page loads correctly
- [ ] Dark mode toggles properly
- [ ] Links open in new tabs
- [ ] Responsive on all screen sizes

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Use TypeScript for all new files
- Follow existing code style
- Add comments for complex logic
- Test on mobile and desktop
- Ensure dark mode compatibility

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Design inspiration from Frontend Mentor
- Icons from the project assets
- Built with modern web technologies

---

## 📧 Contact

**Project Link**: [https://github.com/yourusername/devjobs](https://github.com/yourusername/devjobs)

**Live Demo**: [https://devjobs.vercel.app](https://devjobs.vercel.app)

---

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

### React Query Resources
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [React Query Tutorial](https://tanstack.com/query/latest/docs/react/quick-start)

### Tailwind CSS Resources
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

---

Made with ❤️ by [Your Name]