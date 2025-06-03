const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend

// default endpoint, gets all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friends) => friends.gender == filterGender
    );
  }
  if (filterLetter) {
    matchingFriends = matchingFriends.filter(
      (friends) =>
        typeof friends.name === "string" &&
        friends.name.length > 0 &&
        friends.name[0].toLowerCase() === filterLetter.toLowerCase()
    );
  }

  if (matchingFriends.length > 0) {
    return res.status(200).json(matchingFriends);
  } else {
    return res
      .status(404)
      .json({ error: "No friends matching the given criteria" });
  }
});

// 2. Get information about this request from the headers
router.get("/info", (req, res) => {
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept,
  } = req.headers;

  // Modify this response to just return info on the user-agent, content-type and accept headers
  res.json({ userAgent, contentType, accept });
});

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get("/:id", (req, res) => {
  console.log(req.params);
  let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

  // Modify this function to find and return the friend matching the given ID, or a 404 if not found
  if (friends.find((friend) => friend.id == friendId)) {
    return res
      .status(200)
      .json(friends.find((friend) => friend.id == friendId));
  } else {
    return res.status(404).json({ error: "No friend with ID " + friendId });
  }
  // Modify this response with the matched friend, or a 404 if not found
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
});

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put("/:id", (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;
  const friendIndex = friends.findIndex((friend) => {
    friend.id === friendId;
  });
  console.log(updatedFriend);
  if (typeof friendIndex !== "number") {
    console.log("No friend with ID " + friendId);
    res.status(404).json({ error: "No friend with ID " + friendId });
    return;
  }
  friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };
  console.log("Updated friend:", friends[friendIndex]);
  res.status(200).json(friends[friendIndex]);
});

// Replace the old friend data for friendId with the new data from updatedFriend
// Modify this response with the updated friend, or a 404 if not found

module.exports = router;
