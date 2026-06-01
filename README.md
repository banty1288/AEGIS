# AEGIS - Commodity Risk Intelligence Platform

AEGIS is an early-stage prototype for an AI-powered commodity risk intelligence dashboard. It aims to combine market data visualization with Large Language Model (LLM) analysis to provide scenario evaluations for supply chain and market risks.

## Overview

This repository contains the Minimum Viable Product (MVP) of the AEGIS platform. Currently, it is a Next.js 15 web application that integrates with Google's Gemini API to generate risk analysis reports, alongside Firebase for user authentication.

**Note:** The current version is a frontend-heavy demonstration. While it connects to the real Gemini API to process live prompts in the Copilot module, the market data (commodity prices, trends, and news feeds) is currently simulated.

## Repository Structure

- `/frontend` - Contains the full Next.js 15 application (UI, AI service layer, and Firebase integration).
- `/backend` - Reserved for future backend microservices or data ingestion pipelines.
- `/other` - Reserved for future documentation or miscellaneous scripts.

## Features (Current MVP)

- **AI Risk Copilot:** A conversational interface that sends user-defined scenarios to the Gemini API to generate structured risk assessments.
- **Command Center:** A visual dashboard using Recharts to display commodity prices and volatility (simulated data).
- **Scenario Simulator:** Interactive sliders allowing users to visualize the theoretical impact of macroeconomic shocks.
- **Firebase Authentication:** Integration for Google OAuth login. The app gracefully degrades if API keys are missing.
- **Dark Mode UI:** Built with Tailwind CSS, shadcn/ui, and Framer Motion for a modern, responsive aesthetic.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, Framer Motion
- **AI Integration:** Google Gemini SDK (`@google/generative-ai`) via Next.js Server Actions
- **Backend/Auth:** Firebase (Authentication & Firestore initialization)

## Getting Started

### Prerequisites

To run the frontend locally, you will need:
- Node.js (v18+)
- A Google Gemini API Key
- A Firebase Project (with Google Authentication enabled)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/banty1614-source/AEGIS.git
   cd AEGIS/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the `frontend` directory and add your keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY="your_api_key"
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your_auth_domain"
   NEXT_PUBLIC_FIREBASE_PROJECT_ID="your_project_id"
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your_storage_bucket"
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your_sender_id"
   NEXT_PUBLIC_FIREBASE_APP_ID="your_app_id"
   
   GEMINI_API_KEY="your_gemini_api_key"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Limitations & Roadmap

- **Live Market Data:** The MVP uses hardcoded arrays to simulate live commodity tickers. Future iterations plan to integrate live financial APIs.
- **Database Persistence:** Firebase Firestore is configured in the codebase but is not yet actively storing user sessions or saved AI reports.
- **AI Validation:** The Gemini models provide theoretical risk assessments based on their training data. These are not guaranteed to be financially accurate and should not be used for actual trading or enterprise hedging without human oversight.

## License

This project was built as a proof-of-concept demonstration.
