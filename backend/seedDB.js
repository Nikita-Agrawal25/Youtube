const mongoose = require('mongoose')
const Video = require('./models/Video')

const dummyArr = [
    {
        title: "American Airlines | Stand Up Comedy | Ft @AnubhavSinghBassi",
        description: "Bassi",
        videoUrl: "https://youtu.be/lHLBJ4yRMn8",
        thumbnailUrl: "https://youtube-clone-ruddy-pi.vercel.app/images/bassiVideo.jpg",
        views: "15200",
        likes: "1023",
        time: "5 months ago",
        name: "Vikas Yadav"
    },
    {
        title: "Coding | Stand-Up Comedy by Mohd Suhel",
        description: "Coding",
        videoUrl: "https://youtu.be/Q9OW4iaQl-k",
        thumbnailUrl: "https://youtube-clone-ruddy-pi.vercel.app/images/codingComedy.jpg",
        views: "13209",
        likes: "1000",
        time: "9 months ago",
        name: "Vikas Yadav"
    },
    {
        title: "School | Aakash Gupta | Stand-up Comedy",
        description: "AAkash",
        videoUrl: "https://youtu.be/Az38f7cUzK8",
        thumbnailUrl: "https://youtube-clone-ruddy-pi.vercel.app/images/aakashGupta.jpg",
        views: "58873",
        likes: "9898",
        time: "2 years ago",
        name: "Vikas Yadav"
    }
];

async function seedDB(){
    await Video.deleteMany({})
    await Video.insertMany(dummyArr)
    console.log("DB seeded")
}

module.exports = seedDB;