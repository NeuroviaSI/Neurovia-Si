const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('Neurovia Si Backend is running live! 🚀');
});

// AI chat route (Yahan aap apni AI API key safe rakh sakte hain)
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  
  // Yahan aap Gemini ya OpenAI ki API call kar sakte hain
  res.json({ reply: `Neurovia AI received: ${userMessage}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
