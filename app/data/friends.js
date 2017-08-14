var myBestFriendName;
var myBestFriendPhoto;

var friendArray = [
  {
    name: "Natalie",
    photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    surveyAnswers: [
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3
    ]
  },
   {
    name: "Tiff",
    photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    surveyAnswers: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
  },
   {
    name: "Brandon",
    photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    surveyAnswers: [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ]
  }
];

function bestFriend (newFriend){
  var matchArray = [];
  var totalMatch=0;
for(i=0; i<friendArray.length; i++){
  for(j=0; j<friendArray[0].surveyAnswers.length; j++)
  {
  var eachAns = Math.abs(parseInt(friendArray[i].surveyAnswers[j],10)- parseInt(newFriend.surveyAnswers[j],10));
  console.log(eachAns)
  totalMatch += eachAns;}
  matchArray.push(totalMatch);
  totalMatch = 0;
console.log(matchArray)


}
console.log(matchArray.indexOf(Math.min.apply(null, matchArray)))
console.log(friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))].name);
myBestFriendName = friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))].name;
myBestFriendPhoto = friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))].photo;

};



bestFriend();

module.exports = friendArray;
module.exports = myBestFriendName;
module.exports = myBestFriendPhoto;
module.exports = bestFriend;