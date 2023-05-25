const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
  const filePath = "requests2.txt";
  let url = "http://" + host + ":" + port;
  const fs = require("fs");
  const dateTimeObject = new Date();

  if (fs.existsSync(filePath)) {
    console.log("File Already Exists");

    //update file

    fs.appendFile(
      filePath,
      "\n" + url + " :" + dateTimeObject.toTimeString(),
      (err) => {
        if (!err) console.log("file updated successfully");
      }
    );
  } else {
    console.log("Create a new file");
    //create a file

    fs.writeFileSync(filePath, url + " :" + dateTimeObject.toTimeString());
    console.log("File Created Successfully");
  }
});
