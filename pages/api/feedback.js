import fs from "fs";
import path from "path";

function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedbaback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

const handler = (req, res) => {
  if (req.method === "post") {
    const email = req.body.email;
    const feedbackText = req.body.tetx;

    const newFeedBack = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };
    //  CWD ==> current working directory
    const filePath = buildFeedbackPath();
    const data = extractFeedbaback(filePath);
    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success", feedback: newFeedBack });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedbaback(filePath);
    res.status(200).json({ feedback: data });
  }
};

export default handler;
