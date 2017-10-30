json = require("./aaron_simpson08.json")

for (i = 0; i < json.length; i++) { 
    var username = json[i].user.username
    var profile_picture = json[i].user.profile_picture
    var idn = json[i].user.id
    var full_name = json[i].user.full_name
    var can_delete_comments
    var code = json[i].user
    var tags = json[i].tags
    var low_resolution_url = json[i].images.low_resolution.url
    var low_resolution_width = json[i].images.low_resolution.width
    var low_resolution_hight = json[i].images.low_resolution.height
    var thumbnail_url = json[i].images.thumbnail.url
    var thumbnail_width = json[i].images.thumbnail.width
    var thumbnail_hight = json[i].images.thumbnail.height
    var standard_resolution_url = json[i].images.standard_resolution.url
    var standard_resolution_width = json[i].images.standard_resolution.width
    var standard_resolution_hight = json[i].images.standard_resolution.height
    var can_view_comments = json[i].can_view_comments
 console.log("\""+username+"\",\""+profile_picture+"\",\""+idn+"\",\""+full_name+"\",\""+can_delete_comments+"\",\""+code+"\",\""+tags+"\",\""+low_resolution_url+"\",\""+low_resolution_width+"\",\""+low_resolution_hight+"\",\""+thumbnail_url+"\",\""+thumbnail_width+"\",\""+thumbnail_hight+"\",\""+standard_resolution_url+"\",\""+standard_resolution_width+"\",\""+standard_resolution_hight+"\",\""+can_view_comments+"\"")
     
     
     
     //username+","+profile_picture+","+idn+","+full_name+","+can_delete_comments+","+code+","+tags+","+low_resolution_url+","+low_resolution_width+","+low_resolution_hight+","+thumbnail_url+","+thumbnail_width+","+thumbnail_hight+","+standard_resolution_url+","+standard_resolution_width+","+standard_resolution_hight)
 // comments: { count: 4, data: [ [Object], [Object], [Object], [Object] ] },
//  alt_media_url: null,
//  caption:
//   { created_time: '1451923059',
//     text: '#quotes #like4like #likeforlike',
//     from:
//      { username: 'aaron_simpson08',
//        profile_picture: 'https://scontent-amt2-1.cdninstagram.com/t51.2885-19/s150x150/18580277_1453852924677842_2793262071494475776_a.jpg',
//        id: '2412456753',
//        full_name: 'Aaron Simpson - 17' },
//     id: '17861203795051755' },
//  link: 'https://www.instagram.com/p/BAH3s5om2ja/',
//  likes: { count: 49, data: [ [Object], [Object], [Object], [Object] ] },
//  urls:
//   [ 'https://scontent-amt2-1.cdninstagram.com/t51.2885-15/e35/1168713_137358719972257_1835691034_n.jpg' ],
//  created_time: '1451923059',
//  type: 'image',
//  id: '1155136807543466202_2412456753',
//  location: null }
    console.log(json[i].user); 
}
