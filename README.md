# AEGIS - AI Economic & Global Intelligence System

AEGIS is the intelligence engine powering the future evolution of **Spendr**, the AI-powered Financial Operating System. While Spendr focuses on helping individuals manage their financial lives, AEGIS operates as the backend market intelligence and risk analysis platform designed to monitor global events, commodity markets, economic indicators, and financial risks in real time.

Together, AEGIS and Spendr form the foundation of a next-generation AI-powered Financial Intelligence ecosystem.

## AEGIS + Spendr Vision

Most personal finance applications only analyze what has already happened. They track spending, budgets, and investments, but they rarely explain how future economic events could affect users. 

AEGIS was created to solve that problem. Its purpose is to transform global financial signals into actionable intelligence.

### The Financial Intelligence Operating System

Together, Spendr and AEGIS create a new category of financial software:

- **Where Spendr understands:** Income, Expenses, Savings, Goals, and Investments.
- **AEGIS understands:** Commodity Markets, Inflation, Interest Rates, Geopolitical Risks, Economic Trends, and Global Market Events.

### Future Integration

In future versions, AEGIS intelligence will directly power Spendr features such as:

- **Financial Weather Forecast:** Predict how upcoming economic events may impact users (e.g., fuel price increases, food inflation, interest rate changes, market volatility).
- **Life Impact Engine:** Translate global events into personal financial impact. *(Example: "Oil prices are expected to rise. Your monthly transportation expenses may increase by approximately 12%.")*
- **Goal Protection System:** Monitor user goals and evaluate how economic changes could affect achievement timelines for home purchases, vehicle purchases, emergency fund targets, and investment objectives.
- **Personal Risk Intelligence:** Identify financial risks before they affect users, such as inflation pressure, economic slowdowns, market stress events, and commodity shocks.

### Long-Term Vision

The long-term vision is to create an AI-native Financial Operating System that not only tracks money but helps users anticipate and prepare for future financial conditions. Instead of asking *"What happened to my money?"*, users will be able to ask *"How will tomorrow's world affect my money?"* 

AEGIS is the intelligence engine that makes this vision possible.

---

## Overview

This repository contains the Minimum Viable Product (MVP) of the AEGIS intelligence platform. Currently, it is a Next.js 15 web application that integrates with Google's Gemini API to generate risk analysis reports, alongside Firebase for user authentication.

**Note:** The current version is a frontend-heavy demonstration. While it connects to the real Gemini API to process live prompts in the Copilot module, the market data (commodity prices, trends, and news feeds) is currently simulated.

## Features (Current MVP)

- **AI Risk Copilot:** A conversational interface that sends user-defined scenarios to the Gemini API to generate structured risk assessments.
- **Command Center:** A visual dashboard using Recharts to display commodity prices and volatility (simulated data).
- **Scenario Simulator:** Interactive sliders allowing users to visualize the theoretical impact of macroeconomic shocks.
- **Black Swan Detection:** AI-powered identification of rare, high-impact market events.
- **Firebase Authentication:** Integration for Google OAuth login. The app gracefully degrades if API keys are missing.
- **Dark Mode UI:** Built with Tailwind CSS, shadcn/ui, and Framer Motion for a modern, responsive aesthetic.

## Repository Structure

- `/frontend` - Contains the full Next.js 15 application (UI, AI service layer, and Firebase integration).
- `/backend` - Reserved for future backend microservices or data ingestion pipelines.
- `/other` - Reserved for future documentation or miscellaneous scripts.

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

## Limitations & Roadmap

- **Live Market Data:** The MVP uses hardcoded arrays to simulate live commodity tickers. Future iterations plan to integrate live financial APIs.
- **Database Persistence:** Firebase Firestore is configured in the codebase but is not yet actively storing user sessions or saved AI reports.
- **AI Validation:** The Gemini models provide theoretical risk assessments based on their training data. These are not guaranteed to be financially accurate and should not be used for actual trading or enterprise hedging without human oversight.

## License

This project was built as a proof-of-concept demonstration for the AEGIS intelligence engine.
