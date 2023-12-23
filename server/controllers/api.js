const { FirstSem, SecondSem, ThirdSem } = require("../models/sem");

async function handleSemResult(req, res) {
  const sem = req.params.sem;
  switch (sem) {
    case "first-sem":
      const firstSemResults = await FirstSem.findOne({});
      return res.json(firstSemResults.rank);

    case "second-sem":
      const secSemResults = await SecondSem.findOne({});
      return res.json(secSemResults.rank);

    case "third-sem":
      const thirdSemResults = await ThirdSem.findOne({});
      return res.json(thirdSemResults.rank);
  }
}

async function handleUsnResult(req, res) {
  const sem = req.params.sem;
  const usn = req.params.usn;
  switch (sem) {
    case "first-sem":
      const firstSemResults = await FirstSem.findOne(
        { "rank.usn": usn },
        { "rank.$": 1 }
      );

      if (!firstSemResults)
        return res.json({
          error: "No Match Found",
        });

      return res.json(firstSemResults.rank[0]);

    case "second-sem":
      const secSemResults = await SecondSem.findOne(
        { "rank.usn": usn },
        { "rank.$": 1 }
      );

      if (!secSemResults)
        return res.json({
          error: "No Match Found",
        });

      return res.json(secSemResults.rank[0]);

    case "third-sem":
      const thirdSemResults = await ThirdSem.findOne(
        { "rank.usn": usn },
        { "rank.$": 1 }
      );

      if (!thirdSemResults)
        return res.json({
          error: "No Match Found",
        });

      return res.json(thirdSemResults.rank[0]);
  }
}

module.exports = { handleSemResult, handleUsnResult };
