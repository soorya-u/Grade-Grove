const { FirstSem, SecondSem, ThirdSem } = require("../models/topTen");

async function handleSemResult(req, res) {
  const sem = req.params.sem;
  switch (sem) {
    case "first-sem":
      const firstSemResults = await FirstSem.findOne({});
      return res.send(firstSemResults.rank);

    case "second-sem":
      const secSemResults = await SecondSem.findOne({});
      return res.send(secSemResults.rank);

    case "third-sem":
      const thirdSemResults = await ThirdSem.findOne({});
      return res.send(thirdSemResults.rank);
  }
}

async function handleUsnResult(req, res) {
  const sem = req.params.sem;
  const usn = "4AI21AI" + req.params.usn;
  switch (sem) {
    case "first-sem":
      const firstSemResults = await FirstSem.findOne(
        { "rank.usn": usn },
        { "rank.$": 1 }
      );
      return res.send(firstSemResults.rank[0]);

    case "second-sem":
      const secSemResults = await SecondSem.findOne(
        { "rank.usn": usn },
        { "rank.$": 1 }
      );
      return res.send(secSemResults.rank[0]);

    case "third-sem":
      const thirdSemResults = await ThirdSem.findOne(
        { "rank.usn": usn },
        { "rank.$": 1 }
      );
      return res.send(thirdSemResults.rank[0]);
  }
}

module.exports = { handleSemResult, handleUsnResult };
