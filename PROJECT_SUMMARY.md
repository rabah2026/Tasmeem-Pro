# ARAImage - Project Summary

## Project Overview
ARAImage is an Arabic-first AI image generation web application, specialized for the Arab market.

## Tech Stack
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS with full RTL support
- **React 19** - Latest React version
- **Cairo Font** - Arabic Google Font

## Project Structure

```
ARAImage/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing Page (Home)
│   │   ├── layout.tsx               # Root layout with RTL
│   │   ├── globals.css             # Global styles with Tailwind
│   │   ├── studio/page.tsx          # Image Generator Studio
│   │   ├── templates/page.tsx       # Templates Gallery
│   │   ├── gallery/page.tsx         # User's Generated Images
│   │   ├── pricing/page.tsx         # Pricing & Credit Packs
│   │   ├── account/page.tsx         # User Account
│   │   ├── policies/
│   │   │   ├── privacy/page.tsx     # Privacy Policy
│   │   │   └── terms/page.tsx       # Terms & Conditions
│   │   └── api/
│   │       ├── auth/route.ts        # Authentication API
│   │       ├── generate/route.ts    # Image Generation API
│   │       ├── credits/route.ts     # Credits Purchase API
│   │       └── images/route.ts      # Image Storage API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigation Bar
│   │   │   └── Footer.tsx          # Footer
│   │   ├── common/
│   │   │   ├── Button.tsx          # Button Component
│   │   │   └── LoadingSpinner.tsx   # Loading Indicator
│   │   └── studio/
│   ├── lib/
│   │   └── constants.ts            # Templates, sizes, styles data
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── public/                         # Static assets
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
└── README.md                       # Project documentation
```

## Core Features

### 1. Landing Page (`/`)
- Hero section with Arabic tagline
- Features showcase for Arab market
- Call-to-action buttons
- Example images section
- Benefits explanation

### 2. Studio (`/studio`)
**Components:**
- Arabic text input for image description
- Template selector (card-based UI) with 10 templates
- Size selector (Square, Story, Ad)
- Style selector (Realistic, Advertising, Luxury, Simple)
- Primary "Create Image" button
- Result preview area with:
  - Download button
  - Create new version button
  - Save to gallery button

**Templates:**
1. إعلان عطر (Perfume Ad)
2. إعلان قهوة (Coffee Ad)
3. إعلان مطعم (Restaurant Ad)
4. متجر إلكتروني (E-commerce)
5. تصوير منتج بخلفية بيضاء (Product with White Background)
6. تصوير منتج بخلفية رخام (Product with Marble Background)
7. رمضان (Ramadan)
8. عيد (Eid)
9. بوست إنستغرام (Instagram Post)
10. ستوري سناب (Snapchat Story)

### 3. Templates (`/templates`)
- Card-based gallery of all templates
- Category badges
- Template descriptions
- Use template button

### 4. Gallery (`/gallery`)
- User's generated images
- Image metadata (prompt, date)
- Empty state with CTA

### 5. Pricing (`/pricing`)
- Credit packs display
- Popular badge on best value pack
- Feature lists
- Promotional banner

**Credit Packs:**
- Trial: 5 images (Free)
- Starter: 50 images (49 SAR)
- Pro: 150 images (129 SAR) - Popular
- Business: 500 images (349 SAR)

### 6. Account (`/account`)
- Credit balance display
- Email info
- Account status
- Credit purchase options

### 7. Policies
- Privacy Policy (`/policies/privacy`)
- Terms & Conditions (`/policies/terms`)

## API Endpoints

### POST `/api/auth`
Email-based authentication
- Request: `{ email: string }`
- Response: `{ success: boolean, user: User, token: string }`

### POST `/api/generate`
Generate image from Arabic text
- Request: `{ prompt: string, template?: string, size: ImageSize, style: ImageStyle }`
- Response: `{ success: boolean, imageUrl: string, dimensions: object }`
- Features:
  - Arabic prompt enhancement
  - Content blocking (persons, government symbols, logos)
  - Mock image generation (Unsplash)

### POST `/api/credits`
Purchase additional credits
- Request: `{ userId: string, amount: number }`
- Response: `{ success: boolean, newCredits: number, price: number }`

### GET/POST `/api/images`
- GET: Retrieve user's images
- POST: Save generated image
- Request: `{ userId: string, imageUrl: string, prompt: string, ... }`

## RTL & Arabic Support
- Full RTL layout support
- Cairo Arabic font from Google Fonts
- Arabic-only UI text
- Right-to-left direction throughout

## Design System
- Primary colors: Purple (600) to Pink (600) gradient
- Soft shadows
- Rounded cards (rounded-2xl)
- Clean, modern Arabic UI
- Mobile-first responsive design

## Content Blocking
The system prevents generation of:
- Real persons
- Government symbols
- Logos or trademarks
- Violent or explicit content
- Hate speech or discrimination

## Security & Privacy
- Images are private per user by default
- Mock authentication system
- Placeholder for real authentication
- Mock credit system
- Placeholder for real payment integration

## Next Steps for Production
1. Integrate real AI image generation API
2. Implement proper authentication (NextAuth.js or similar)
3. Set up secure image storage (AWS S3, Cloudinary)
4. Integrate payment gateway (Stripe, local payment)
5. Add real database (PostgreSQL, MongoDB)
6. Implement user sessions management
7. Add email verification
8. Set up proper error handling
9. Add analytics (Google Analytics)
10. Deploy to production (Vercel, Netlify)

## Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment Variables
See `.env.example` for required environment variables:
- `IMAGE_GENERATION_API_URL`
- `IMAGE_GENERATION_API_KEY`
- `AUTH_SECRET`
- `STORAGE_TYPE`
- SMTP credentials
- Payment gateway credentials

## License
All rights reserved © 2025 ARAImage
