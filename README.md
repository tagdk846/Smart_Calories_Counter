🍔 Calorie Counter for Food Delivery Websites
A smart AI-powered web app that estimates calorie counts for food items. Users can either paste a URL from platforms like Zomato or Swiggy, or select a food item from a preset menu to instantly get calorie and basic nutrition information.

This feature empowers health-conscious users to make better food choices when ordering online.


✨ Key Features
🔗 Paste Zomato/Swiggy URLs to auto-detect food items.

🍽️ Select from a dropdown menu of common dishes.

🧠 AI-powered calorie estimation using Hugging Face or WindSurf AI.

🔐 Secure API key management with .env.

🧾 Clean, responsive UI for instant results.

🚀 Tech Stack
Frontend
HTML5

CSS3

Vanilla JavaScript

Live Server for hot-reload dev

Backend
Node.js

Express.js

Hugging Face API or WindSurf AI

dotenv for secrets

CORS enabled

🛠️ Setup Instructions
Clone the repository:

git clone <repository-url>
cd Calories-Counter

## Deployment

To deploy this application on Vercel:

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Add the following environment variables in Vercel:
   - `HUGGINGFACE_API_KEY`: Your Hugging Face API key
4. Deploy the project

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

Set your environment variables:
Create a .env file in the root directory and add:

HUGGINGFACE_API_KEY=your_api_key_here
Run the project:
Development:
bash
npm run dev

Production:

bash
npm start
🔌 API Endpoint
POST /api/calories
Accepts food name or description and returns the estimated calorie value.

Example Request:
json

{
  "foodDescription": "Cheese Pizza"
}
Example Response:
json

{
  "calories": 300
}
🧩 How Zomato/Swiggy Can Add This Feature
Food delivery platforms can easily integrate this calorie estimation feature into their product pages or checkout screens. Here's how:

✅ Integration Steps
Extract Food Data: When a user views a dish, capture its name and short description from your database or frontend metadata.

Generate Prompt: Send this to the AI:


Estimate the calorie count (in kcal) for this food item. Return only the number:
"Spicy Chicken Burger with cheese and mayo"
Send to API: Use Hugging Face Inference API (like FLAN-T5 or GPT-J) with a fetch() POST request in your backend.

Receive Estimate: Parse the returned number and inject it into the product UI with a short label like:



~738 kcal per serving
Optional:

Add nutrition tags (Protein, Carbs, Fat)

Allow users to toggle "Show Nutrition Info"

Show a "Calorie Aware" badge on low-calorie items

🔒 Prompt Used with AI API
plaintext
Copy
Edit
Estimate the calorie count (in kcal) for this food item. Return only the number:
<Insert food name and description here>
💻 Code Example (API Call)
js

const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-large', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`
  },
  body: JSON.stringify({ inputs: "Estimate the calorie count (in kcal) for a Cheese Pizza" })
});

const result = await response.json();
📸 Preview
You can preview the project by running it locally or deploying on services like Vercel, Netlify, or Render.

