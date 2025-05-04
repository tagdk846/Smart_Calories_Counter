const API_URL = "https://api-inference.huggingface.co/models/gpt2";
const API_TOKEN = "your_hf_token_here";

const foodImages = {
  pizza: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
  burger: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Burger_%28black_bg%29.jpg",
  pasta: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Spaghetti_al_Pomodoro.JPG",
  salad: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Salad_platter.jpg",
  donut: "https://upload.wikimedia.org/wikipedia/commons/0/09/Glazed-Donut.jpg",
  icecream: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ice_Cream_dessert_02.jpg"
};

async function estimateCalories() {
  const foodInput = document.getElementById("foodInput").value.trim();
  const output = document.getElementById("output");
  const calorieText = document.getElementById("calorieText");
  const foodImage = document.getElementById("foodImage");

  if (!foodInput) {
    alert("Please enter a food description.");
    return;
  }

  output.style.display = "block";
  calorieText.textContent = "Estimating calories...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `Estimate the calories in the following: ${foodInput}`
      })
    });

    const result = await response.json();
    console.log("Raw response:", result);

    const estimatedText = result?.[0]?.generated_text || "Could not estimate.";
    calorieText.textContent = estimatedText;

    const key = Object.keys(foodImages).find(k =>
      foodInput.toLowerCase().includes(k)
    );

    if (key) {
      foodImage.src = foodImages[key];
      foodImage.style.display = "block";
    } else {
      foodImage.style.display = "none";
    }

  } catch (error) {
    calorieText.textContent = "Error estimating calories.";
    console.error("Error:", error);
  }
}
