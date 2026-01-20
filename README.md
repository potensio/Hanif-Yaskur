<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1rYNuDwoEVduucmvyX9fyI935vFC8rw_L

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Edit `.env.local` and set your actual values:
     - `NEXT_PUBLIC_BASE_URL`: Your application URL (use `http://localhost:3000` for local development)
     - `GEMINI_API_KEY`: Your Gemini API key from [Google AI Studio](https://ai.google.dev/)

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

This application uses the following environment variables:

| Variable               | Description                                          | Required | Example                                                          |
| ---------------------- | ---------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_BASE_URL` | Base URL for the application (used for SEO metadata) | Yes      | `http://localhost:3000` (dev) or `https://yourdomain.com` (prod) |
| `GEMINI_API_KEY`       | Gemini API key for AI features (server-side only)    | Yes      | Your API key from Google AI Studio                               |

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Variables without this prefix are only available on the server side.

## Build for Production

1. Create a production build:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

Make sure to set the production values for environment variables in your deployment platform.
