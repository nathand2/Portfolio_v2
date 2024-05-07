const fs = require('fs');

export default function handler(req, res) {
  // res.status(200).json(projectData)
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(400);
      return;
    }

    // Parse JSON data
    const jsonData = JSON.parse(data);

    // Use the data as needed
    console.log(jsonData.projectData);

    if (jsonData.projectData) {
      res.status(200).json(jsonData.projectData);
    } else {
      res.status(400).send("JSON data doesn't include 'projectData' key");
    }
  });
}