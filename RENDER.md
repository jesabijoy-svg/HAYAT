# 🚀 Deploying HAYAT Document Intelligence to Render

HAYAT Document Intelligence is a full-stack Node.js (Express) + React (Vite) application. It is pre-configured for a **zero-configuration, 100% Free Tier deployment** on Render using the included `render.yaml` blueprint.

---

## 🛠️ Step-by-Step Deployment Guide

### Option 1: Automatic Blueprint Deploy (Recommended)
1. **Push your code to GitHub** (either by exporting via the AI Studio menu or committing to your repository).
2. Go to your **[Render Dashboard](https://dashboard.render.com/)**.
3. Click **New +** and select **Blueprint**.
4. Connect your GitHub repository containing this project.
5. Render will automatically read the `render.yaml` configuration file and pre-fill all settings:
   - **Service Type**: Web Service
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
6. Under **Environment Variables**, provide your `GEMINI_API_KEY` (obtained from your Google AI Studio or Google Cloud console) and click **Approve / Deploy**.

---

### Option 2: Manual Web Service Setup
If you prefer to configure the service manually on Render, use these parameters:

1. **Create a New Web Service**: Select **Web Service** on Render and connect your repository.
2. **Build & Runtime Settings**:
   - **Language/Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
3. **Environment Variables**:
   - `NODE_ENV`: `production`
   - `GEMINI_API_KEY`: *(Your Google Gemini API Key)*
   - `APP_URL`: *(Your custom Render URL, e.g., `https://hayat-doc-intelligence.onrender.com`)*

---

## 🔒 Key Secrets Configuration
* **GEMINI_API_KEY**: Required to power the **Ask the Law Conversational Assistant** and structural extraction. Obtain a key from the Google AI Studio console.
* If no Gemini key is provided, the platform will gracefully slide into an **offline simulator mode** featuring realistic legal analyses and presets of Bangladesh statutes so the app never crashes!
