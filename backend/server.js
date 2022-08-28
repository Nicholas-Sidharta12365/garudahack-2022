require("dotenv").config();
const express = require("express");
const app = express();

//should this be 5000 or 3000? ran into SSL protocol error
const port = 5000 || process.env.PORT;


const { v4: uuidv4 } = require("uuid");
const dbConnect = require("./db/mongoose")
const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const jwt = require('jsonwebtoken')
const Cookies = require('cookies')

// DB
const users = require('./models/users')
const therapist = require('./models/therapist')
const chatSession = require('./models/chatSession')
const videoSession = require('./models/videoSession')

const corsOptions = {
  //To allow requests from client
  origin: [
    "http://localhost:3000",
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

var cors = require('cors');
app.use(cors(corsOptions));

// use the Express JSON middleware
app.use(express.json());

// create the twilioClient
const twilioClient = require("twilio")(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

const findOrCreateRoom = async (roomName) => {
  try {
    // see if the room exists already. If it doesn't, this will throw
    // error 20404.
    await twilioClient.video.rooms(roomName).fetch();
  } catch (error) {
    // the room was not found, so create it
    if (error.code == 20404) {
      await twilioClient.video.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
    } else {
      // let other errors bubble up
      throw error;
    }
  }
};

const getAccessToken = (roomName) => {
  // create an access token
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET,
    // generate a random unique identity for this participant
    { identity: uuidv4() }
  );
  // create a video grant for this specific room
  const videoGrant = new VideoGrant({
    room: roomName,
  });

  // add the video grant
  token.addGrant(videoGrant);
  // serialize the token and return it
  return token.toJwt();
};

app.post("/call", async (req, res) => {
  // return 400 if the request has an empty body or no roomName
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;
  // find or create a room with the given roomName
  findOrCreateRoom(roomName);
  // generate an Access Token for a participant in this room
  const token = getAccessToken(roomName);
  res.send({
    success: true,
    token: token,
  });
});

//app.post("/auth", async(req, res) => {
  //const header = req.header
  //const cookies = new Cookies(req, res)

  //const accessToken = cookies.get('access-token')

  //res.send({
  //  success: true,
  //})
//})

app.post("/login", async(req, res) => {
  const { name, uid } = req.body
  if (!uid || !name) {
    return res.status(400).send("Must include user id and name ");
  }

  let user = await users.findOne({ uid })
  if (!user) {
    user = new users({
      uid,
      name
    })
    await user.save()
  }
  
  const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 })

  user.tokens = [...user.tokens].concat({ token })
  await user.save()
  
  const cookies = new Cookies(req, res)
  cookies.set('access-token', token, { httpOnly: true })
  
  res.status(200).send({
    success: true,
    token: token
  })
})


//app.get("/me", auth, async(req, res) => {
  
//})

// Start the Express server
app.listen(port, 'localhost', () => {
  console.log(`Server is running on port ${port}`);
});