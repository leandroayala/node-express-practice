//import de assync functions from fs node module
const { readFile, writeFile } = require("fs");

//the async functions are executed asynchronously, that is, they not obey the order of construction of the source.
//they are executed when they finsih or error
//check the order of message from console.log when run
//here, more about assync https://www.w3schools.com/js/js_async.asp

//The assync function work whith ccallback function - executed on the function call
console.log("start");

readFile("./files/file1.txt", "utf8", (err, result) => {
  //verify if has error in the callback function with read the file
  if (err) {
    console.log(`ERROR FILE1: ${err}`);
    return;
  }

  //if note error, the result variable is assigned to first const
  const first = result; // result is a variable from callback function

  //reading the file2
  readFile("./files/file2.txt", "utf8", (err, result) => {
    //verify if has error in the callback function with read the file
    if (err) {
      console.log(`ERROR FILE2 : ${err}`);
      return;
    }

    //if note error, the result variable is assigned to second const
    const second = result;
    console.log("writing");
    //writing the files content in the file result
    writeFile(
      "./files/content-async.txt",
      `Here the result ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(`ERROR WRITER : ${err}`);
          return;
        }
      }
    );
  });
});
console.log("finish");
