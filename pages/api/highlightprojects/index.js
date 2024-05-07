const fs = require('fs').promises; // Import fs promises API

export default async function handler(req, res) {
  try {
    const data = await fs.readFile('data.json', 'utf8');
    const jsonData = JSON.parse(data);

    // console.log(jsonData.highlightProjectData);

    if (jsonData.highlightProjectData) {
      res.status(200).json(jsonData.highlightProjectData);
    } else {
      res.status(400).send("JSON data doesn't include 'highlightProjectData' key");
    }
  } catch (err) {
    console.error(err);
    res.status(400).send("Error reading data.json");
  }
}