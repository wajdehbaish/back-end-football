const { Match } = require("../model/match.model");
const axios = require("axios");

const getAllMatches = async (req, res) => {
  const { data } = await axios.get("https://api.football-data.org/v2/matches", {
    headers: { "X-Auth-Token": "ace2a2eb816644f0bb21233fb8ae3d3e" },
  });
  let todayMatches = [];
  for (let match of data.matches) {
    const found = await Match.findOne({ key: match.id });
    if (!found) {
      const newMatch = new Match({
        key: match.id,
        competition: match.competition.name,
        matchday: match.matchday,
        homeTeam: match.homeTeam.name,
        awayTeam: match.awayTeam.name,
        date: match.utcDate,
      });

      await newMatch.save();
    } else {
      todayMatches.push(found);
    }
  }
  res.json(todayMatches);
};
const getMatch = async (req, res) => {
  let match = await Match.findOne({ key: req.params.key });
  console.log("wajde");
  if (!match) {
    return res.status(400).send("match was not found!!");
  }
  res.status(200).json(match);
};
const updateMatch = async (req, res) => {
    console.log("update");
  await Match.findByIdAndDelete({ _id: req.params.id });
  const match = new Match({
    key: req.body.match.key,
    competition: req.body.match.competition,
    matchday: req.body.match.matchday,
    homeTeam: req.body.match.homeTeam,
    awayTeam: req.body.match.awayTeam,
    date: req.body.match.date,
    round: req.body.match.round,
    gamblingUsers: req.body.match.gamblingUsers,
    firstTeam: req.body.match.firstTeam,
    draw: req.body.match.draw,
    secondTeam: req.body.match.secondTeam,
  });
  await match.save()
  res.json(match)
};
module.exports = { getAllMatches, getMatch, updateMatch };
