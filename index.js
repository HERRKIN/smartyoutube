require("dotenv").config();
const OpenAI = require("openai");
const { DOMParser } = require("xmldom");
const fetch = require("node-fetch");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getPost = async (transcriptArray) => {
  const post = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a marketing and SEO expert and you have been asked to create an enganging blog post easy to read, keep the reader interested and that ranks well in google. You have a transcript of a video the post shouldn't mention it comes from a video, if the content talks about code or commands try to add it.",
      },

      {
        role: "user",
        content: `transcript: "${transcriptArray.join("\n")}"`,
      },
      {
        role: "user",
        content:
          "Output: make the title bold, use lists and emojis where appropriate, the post should have an introduction, content and conclusion, use markdown to format and  deliver it in spanish",
      },
    ],
    model: "gpt-4",
    stream: true,
  });
  for await (const part of post) {
    process.stdout.write(part.choices[0]?.delta?.content || "");
  }
};

const main = async () => {
  // Example usage: yarn start 40o-cZjGFgk
  const videoId = process.argv[2]; // Get video ID from terminal argument
  console.log(videoId);
  if (!videoId) {
    console.error("Please provide a video ID as an argument.");
    process.exit(1);
  }
  try {
    const response = await fetch(
      `https://youtubetranscript.com?server_vid2=${videoId}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    const transcriptElements = xmlDoc.getElementsByTagName("text");
    const transcript = Array.from(transcriptElements)
      .map((el) => el.textContent.trim())
      .filter((text) => text.length > 0);
    console.log(transcript);
    getPost(transcript);
  } catch (error) {
    console.error("Error fetching transcript:", error);
    process.exit(1);
  }
};
main();
