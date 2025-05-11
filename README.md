# dSonic Resume Builder

A modern, full-featured resume builder and job application tracker with AI-powered resume refinement capabilities. Create, manage, and optimize your resumes for specific job applications with ease.

![dSonic Resume Builder](https://dsonic-resume-builder.davidtung.ca/opengraph-image)

## Features

### Resume Management

- **Create & Edit Resumes**: Build professional resumes with a clean, modern layout
- **Multiple Resume Support**: Create and manage multiple versions of your resume
- **Print-Friendly Layout**: Optimized for printing and PDF export
- **Responsive Design**: Looks great on all devices from mobile to desktop

### Job Application Tracking

- **Job Application Dashboard**: Track all your job applications in one place
- **Application Status**: Monitor the status of each application
- **Resume Association**: Link specific resumes to job applications
- **Job Description Storage**: Save job descriptions and URLs for reference

### AI-Powered Resume Refinement

- **Smart Resume Optimization**: Refine your resume to better match specific job descriptions
- **Job-Specific Enhancements**: AI suggests skills and experience descriptions tailored to each job
- **One-Click Refinement**: Generate optimized resume versions with a single click
- **Preview Before Applying**: Review AI suggestions before applying them to your resume

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: SQLite with Prisma ORM
- **AI Integration**: OpenAI API (GPT-4o)
- **UI Components**: Radix UI, Lucide React icons
- **State Management**: React Context API
- **API**: GraphQL with Apollo Server

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- Yarn package manager
- OpenAI API key (for AI resume refinement features)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/dsonic-resume-builder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd dsonic-resume-builder
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory:

   ```
   # Database
   DATABASE_URL="file:./prisma/dev.db"

   # OpenAI API Key (required for AI resume refinement)
   OPENAI_API_KEY="your-openai-api-key"
   ```

5. Set up the database:

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. Seed the database with initial data:

   ```bash
   yarn db:seed
   ```

### Development

Start the development server:

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Build the application for production:

```bash
yarn build
```

Start the production server:

```bash
yarn start
```

## Docker Deployment

### Build the Container

```bash
docker compose build
```

### Run the Container

```bash
docker compose up -d
```

### Stop the Container

```bash
docker compose down
```

## Project Structure

```
dsonic-resume-builder/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── components/       # Resume section components
│   │   ├── api/              # API routes
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── job-application/  # Job application pages
│   │   ├── resume/           # Resume pages
│   │   ├── resumes/          # Resumes list page
│   │   └── page.tsx          # Main entry point
│   ├── apollo/               # Apollo GraphQL setup
│   ├── components/           # Shared UI components
│   │   ├── dashboard/        # Dashboard components
│   │   └── ui/               # Base UI components
│   ├── context/              # React context providers
│   ├── data/                 # Default resume data
│   ├── generated/            # Generated Prisma client
│   ├── images/               # Image assets
│   └── lib/                  # Utility functions and services
│       └── db/               # Database services
├── prisma/                   # Prisma ORM configuration
│   └── schema.prisma         # Database schema
├── public/                   # Static assets
└── package.json              # Project dependencies
```

## Key Features in Detail

### Resume Builder

- Create and manage multiple resumes
- Add, edit, and remove work experiences with detailed descriptions
- Showcase projects with technologies and links
- Manage education history
- Customize personal information and contact details
- Download resumes as PDF

### Job Application Tracker

- Create job applications with company, position, and status
- Associate different resumes with each application
- Store job descriptions and URLs
- Track application status and dates
- View all applications in a centralized dashboard

### AI Resume Refinement

- Analyze job descriptions to suggest resume improvements
- Enhance work experience descriptions to match job requirements
- Suggest additional skills relevant to the position
- Create optimized versions of your resume for specific jobs
- Daily limit of AI refinements with automatic reset

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons by [Lucide](https://lucide.dev/)
- AI powered by [OpenAI](https://openai.com/)
