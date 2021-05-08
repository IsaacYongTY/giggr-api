'use strict';

const songData =  [
    {
        "id":1,"title":"想見你想見你想見你(電視劇\"想見你\"片尾曲)","artist_id":1,"rom_title":"Xiang Jian Ni Xiang Jian Ni Xiang Jian Ni","key":6,"mode":"1","tempo":130,"duration_ms":239795,"time_signature":"4/4","language_id":2,"initialism":"xjnxjnxjn","spotify_link":"https://open.spotify.com/track/69zgyr5HVKdInjeKpq1qHa","youtube_link":"","other_link":"","energy":0.666,"danceability":0.547,"valence":0.43,"acousticness":0.4,"instrumentalness":0,"date_released":"2019-11-11","verified": false,"created_at": new Date(),"updated_at": new Date()
    },
    {
        "id":2,"title":"财神到","artist_id":2,"rom_title":"Cai Shen Dao","key":0,"mode":"1","tempo":128,"duration_ms":183360,"time_signature":"4/4","language_id":2,"initialism":"csd","spotify_link":"https://open.spotify.com/track/7cEQE5vq7WCz8mkGgsjmVp","youtube_link":"","other_link":"","energy":0.877,"danceability":0.755,"valence":0.817,"acousticness":0.162,"instrumentalness":0.0000143,"date_released":"2011-01-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":3,"title":"致姗姗来迟的你","artist_id":3,"rom_title":"Zhi Shan Shan Lai Chi De Ni","key":6,"mode":"0","tempo":120,"duration_ms":246022,"time_signature":"4/4","language_id":2,"initialism":"zsslcdn","spotify_link":"https://open.spotify.com/track/4eH9ujPhZSF0HZ1c004wtb","youtube_link":"","other_link":"","energy":0.628,"danceability":0.697,"valence":0.74,"acousticness":0.418,"instrumentalness":0,"date_released":"2016-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":4,"title":"他一定很愛你","artist_id":4,"rom_title":"Ta Yi Ding Hen Ai Ni","key":9,"mode":"1","tempo":102,"duration_ms":210772,"time_signature":"4/4","language_id":2,"initialism":"tydhan","spotify_link":"https://open.spotify.com/track/1n3TbqMfvALAI0BjtiF6Lt","youtube_link":"","other_link":"","energy":0.507,"danceability":0.589,"valence":0.151,"acousticness":0.459,"instrumentalness":0,"date_released":"2002-04-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":5,"title":"拿走了什麼","artist_id":5,"rom_title":"Na Zou Le Shen Me","key":0,"mode":"1","tempo":75,"duration_ms":296573,"time_signature":"4/4","language_id":2,"initialism":"nzlsm","spotify_link":"https://open.spotify.com/track/7gXiPiffMrqPe3Q1vzD6uM","youtube_link":"","other_link":"","energy":0.29,"danceability":0.529,"valence":0.286,"acousticness":0.745,"instrumentalness":0,"date_released":"2014-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":6,"title":"大大的擁抱","artist_id":5,"rom_title":"Da Da De Yong Bao","key":2,"mode":"1","tempo":154,"duration_ms":237880,"time_signature":"4/4","language_id":2,"initialism":"dddyb","spotify_link":"https://open.spotify.com/track/18pDDXTTeqVeytIgzes2bc","youtube_link":"","other_link":"","energy":0.771,"danceability":0.521,"valence":0.858,"acousticness":0.0427,"instrumentalness":0,"date_released":"2012-01-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":7,"title":"920","artist_id":5,"rom_title":"","key":7,"mode":"1","tempo":83,"duration_ms":286133,"time_signature":"4/4","language_id":2,"initialism":"9","spotify_link":"https://open.spotify.com/track/5Sse4ipXZV3QKGx3BLK6GV","youtube_link":"","other_link":"","energy":0.71,"danceability":0.638,"valence":0.681,"acousticness":0.131,"instrumentalness":0,"date_released":"2013-02-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":8,"title":"一眼瞬間","artist_id":6,"rom_title":"Yi Yan Shun Jian","key":11,"mode":"1","tempo":77,"duration_ms":356867,"time_signature":"4/4","language_id":2,"initialism":"yysj","spotify_link":"https://open.spotify.com/track/0xn15aoSLmniUKZtaYUau7","youtube_link":"","other_link":"","energy":0.457,"danceability":0.208,"valence":0.169,"acousticness":0.79,"instrumentalness":0,"date_released":"2007-09-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":9,"title":"真實","artist_id":6,"rom_title":"Zhen Shi","key":11,"mode":"1","tempo":137,"duration_ms":279560,"time_signature":"4/4","language_id":2,"initialism":"zs","spotify_link":"https://open.spotify.com/track/5P7CUwvMeOfAVyyKhUAWOP","youtube_link":"","other_link":"","energy":0.456,"danceability":0.305,"valence":0.315,"acousticness":0.751,"instrumentalness":0,"date_released":"2001-10-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":10,"title":"High High High","artist_id":6,"rom_title":"","key":6,"mode":"1","tempo":103,"duration_ms":248400,"time_signature":"4/4","language_id":1,"initialism":"hhh","spotify_link":"https://open.spotify.com/track/4ga52YETr7EmGZeaX7nuQ1","youtube_link":"","other_link":"","energy":0.62,"danceability":0.75,"valence":0.644,"acousticness":0.0326,"instrumentalness":0,"date_released":"1998-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":11,"title":"緩緩","artist_id":6,"rom_title":"Huan Huan","key":8,"mode":"1","tempo":172,"duration_ms":227333,"time_signature":"4/4","language_id":2,"initialism":"hh","spotify_link":"https://open.spotify.com/track/6GD7YFzkLd6nxKrbGqtKpp","youtube_link":"","other_link":"","energy":0.577,"danceability":0.461,"valence":0.549,"acousticness":0.791,"instrumentalness":0.00000301,"date_released":"2020-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":12,"title":"Jai Ho! (You Are My Destiny)","artist_id":7,"rom_title":"","key":8,"mode":"0","tempo":136,"duration_ms":222400,"time_signature":"4/4","language_id":1,"initialism":"jh","spotify_link":"https://open.spotify.com/track/7Kpqjspw4Y7HrvItIRcBiW","youtube_link":"","other_link":"","energy":0.942,"danceability":0.653,"valence":0.895,"acousticness":0.0548,"instrumentalness":0.00000106,"date_released":"2009-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":13,"title":"我是不是該安靜的走開","artist_id":8,"rom_title":"Wo Shi Bu Shi Gai An Jing De Zou Kai","key":1,"mode":"1","tempo":99,"duration_ms":243293,"time_signature":"4/4","language_id":2,"initialism":"wsbsgajdzk","spotify_link":"https://open.spotify.com/track/6OI0p9YgcC82jIciqUjcta","youtube_link":"","other_link":"","energy":0.376,"danceability":0.608,"valence":0.366,"acousticness":0.611,"instrumentalness":0,"date_released":"2015-03-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":14,"title":"對你愛不完","artist_id":8,"rom_title":"Dui Ni Ai Bu Wan","key":7,"mode":"0","tempo":120,"duration_ms":280493,"time_signature":"4/4","language_id":2,"initialism":"dnabw","spotify_link":"https://open.spotify.com/track/6IgmrNepgp7Z7cirPwn2pH","youtube_link":"","other_link":"","energy":0.749,"danceability":0.733,"valence":0.753,"acousticness":0.255,"instrumentalness":0,"date_released":"2015-03-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":15,"title":"傷心的話留到明天再說","artist_id":8,"rom_title":"Shang Xin De Hua Liu Dao Ming Tian Zai Shuo","key":10,"mode":"0","tempo":126,"duration_ms":284027,"time_signature":"4/4","language_id":2,"initialism":"sxdhldmtzs","spotify_link":"https://open.spotify.com/track/4ohyVCUc7DcSbIkD1jDdYb","youtube_link":"","other_link":"","energy":0.712,"danceability":0.736,"valence":0.831,"acousticness":0.0612,"instrumentalness":0,"date_released":"2015-03-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":16,"title":"分享愛","artist_id":8,"rom_title":"Fen Xiang Ai","key":9,"mode":"0","tempo":132,"duration_ms":233027,"time_signature":"4/4","language_id":2,"initialism":"fxa","spotify_link":"https://open.spotify.com/track/5Gd3dOyqgCMY3POuyqZkGj","youtube_link":"","other_link":"","energy":0.709,"danceability":0.755,"valence":0.842,"acousticness":0.0382,"instrumentalness":0,"date_released":"1994-01-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":17,"title":"當我知道你們相愛","artist_id":8,"rom_title":"Dang Wo Zhi Dao Ni Men Xiang Ai","key":11,"mode":"1","tempo":128,"duration_ms":240747,"time_signature":"4/4","language_id":2,"initialism":"dwzdnmxa","spotify_link":"https://open.spotify.com/track/23CUgb5lqaKgAYhrJPsTVP","youtube_link":"","other_link":"","energy":0.247,"danceability":0.451,"valence":0.301,"acousticness":0.859,"instrumentalness":0.0000103,"date_released":"1994-01-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":18,"title":"唯一色彩","artist_id":8,"rom_title":"Wei Yi Se Cai","key":5,"mode":"1","tempo":134,"duration_ms":260040,"time_signature":"4/4","language_id":2,"initialism":"wysc","spotify_link":"https://open.spotify.com/track/0lBKdQpUIbi0czSaoX2hEf","youtube_link":"","other_link":"","energy":0.593,"danceability":0.704,"valence":0.876,"acousticness":0.283,"instrumentalness":0,"date_released":"2013-07-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":19,"title":"狂野之城","artist_id":8,"rom_title":"Kuang Ye Zhi Cheng","key":4,"mode":"0","tempo":136,"duration_ms":198693,"time_signature":"4/4","language_id":3,"initialism":"kyzc","spotify_link":"https://open.spotify.com/track/74Fg0CoarCiJiVhDQ9RfI4","youtube_link":"","other_link":"","energy":0.678,"danceability":0.878,"valence":0.907,"acousticness":0.0519,"instrumentalness":0,"date_released":"2006","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":20,"title":"Para Para Sakura","artist_id":8,"rom_title":"","key":11,"mode":"0","tempo":151,"duration_ms":223133,"time_signature":"4/4","language_id":3,"initialism":"pps","spotify_link":"https://open.spotify.com/track/6LQBkHbjeuCuTgVxnbBhTS","youtube_link":"","other_link":"","energy":0.929,"danceability":0.693,"valence":0.817,"acousticness":0.0649,"instrumentalness":0.000117,"date_released":"2002-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":21,"title":"唱這歌","artist_id":8,"rom_title":"Chang Zhe Ge","key":0,"mode":"1","tempo":152,"duration_ms":181133,"time_signature":"4/4","language_id":3,"initialism":"czg","spotify_link":"https://open.spotify.com/track/5IvImPC8CKl7n2n6qk5EOk","youtube_link":"","other_link":"","energy":0.992,"danceability":0.808,"valence":0.705,"acousticness":0.0077,"instrumentalness":0.000224,"date_released":"2006","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":22,"title":"動起來","artist_id":8,"rom_title":"Dong Qi Lai","key":1,"mode":"0","tempo":130,"duration_ms":221160,"time_signature":"4/4","language_id":2,"initialism":"dql","spotify_link":"https://open.spotify.com/track/3hZjbMw6Va4zQQyZ5Q9rBm","youtube_link":"","other_link":"","energy":0.893,"danceability":0.661,"valence":0.572,"acousticness":0.00451,"instrumentalness":0.00000482,"date_released":"2006","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":23,"title":"化裝舞會新篇之(阿飛派對)","artist_id":8,"rom_title":"Hua Zhuang Wu Hui Xin Pian Zhi","key":10,"mode":"0","tempo":120,"duration_ms":223333,"time_signature":"4/4","language_id":3,"initialism":"hzwhxpz","spotify_link":"https://open.spotify.com/track/5CRXMJ9HAtyFeGE3n8pxJX","youtube_link":"","other_link":"","energy":0.547,"danceability":0.839,"valence":0.868,"acousticness":0.356,"instrumentalness":0,"date_released":"1994-01-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":24,"title":"動起來","artist_id":8,"rom_title":"Dong Qi Lai","key":1,"mode":"0","tempo":130,"duration_ms":221160,"time_signature":"4/4","language_id":2,"initialism":"dql","spotify_link":"https://open.spotify.com/track/23M33p7GoJoFd832WOAMIB","youtube_link":"","other_link":"","energy":0.893,"danceability":0.661,"valence":0.572,"acousticness":0.00451,"instrumentalness":0.00000482,"date_released":"1994-01-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":25,"title":"最笨的人是我","artist_id":9,"rom_title":"Zui Ben De Ren Shi Wo","key":9,"mode":"1","tempo":141,"duration_ms":323533,"time_signature":"4/4","language_id":2,"initialism":"zbdrsw","spotify_link":"https://open.spotify.com/track/2UZU2WczNUACNFsmkXJ2Nf","youtube_link":"","other_link":"","energy":0.467,"danceability":0.451,"valence":0.512,"acousticness":0.504,"instrumentalness":0,"date_released":"2017-10-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":26,"title":"再見只是陌生人","artist_id":10,"rom_title":"Zai Jian Zhi Shi Mo Sheng Ren","key":5,"mode":"1","tempo":82,"duration_ms":251691,"time_signature":"4/4","language_id":2,"initialism":"zjzsmsr","spotify_link":"https://open.spotify.com/track/0K2UkduBJxjuNYLOFhpwHB","youtube_link":"","other_link":"","energy":0.525,"danceability":0.626,"valence":0.506,"acousticness":0.0134,"instrumentalness":0,"date_released":"2015","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":27,"title":"走着走着就散了","artist_id":10,"rom_title":"Zou Zhe Zou Zhe Jiu San Le","key":1,"mode":"0","tempo":110,"duration_ms":268117,"time_signature":"4/4","language_id":2,"initialism":"zzzzjsl","spotify_link":"https://open.spotify.com/track/1FiKMoTtnfQ3lKWktGMMAj","youtube_link":"","other_link":"","energy":0.534,"danceability":0.652,"valence":0.26,"acousticness":0.664,"instrumentalness":0,"date_released":"2017","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":28,"title":"Wonderful U","artist_id":11,"rom_title":"","key":6,"mode":"1","tempo":120,"duration_ms":248551,"time_signature":"3/4","language_id":1,"initialism":"wu","spotify_link":"https://open.spotify.com/track/4XMmAIKiO5MS9TzzRaKMCB","youtube_link":"","other_link":"","energy":0.436,"danceability":0.557,"valence":0.246,"acousticness":0.809,"instrumentalness":0,"date_released":"2016-03-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":29,"title":"圓","artist_id":11,"rom_title":"Yuan","key":6,"mode":"1","tempo":123,"duration_ms":249000,"time_signature":"3/4","language_id":2,"initialism":"y","spotify_link":"https://open.spotify.com/track/6ItihvHls8vphjsSPUUXEf","youtube_link":"","other_link":"","energy":0.541,"danceability":0.512,"valence":0.425,"acousticness":0.783,"instrumentalness":0,"date_released":"2016-03-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":30,"title":"駅 - 2012 Remaster","artist_id":12,"rom_title":"Yi","key":1,"mode":"0","tempo":93,"duration_ms":301427,"time_signature":"4/4","language_id":7,"initialism":"y","spotify_link":"https://open.spotify.com/track/1mG6sdVAE1Jm5vQ4MNgrJJ","youtube_link":"","other_link":"","energy":0.568,"danceability":0.503,"valence":0.358,"acousticness":0.343,"instrumentalness":0.811,"date_released":"2012-08-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":31,"title":"把你藏起來","artist_id":13,"rom_title":"Ba Ni Cang Qi Lai","key":11,"mode":"1","tempo":130,"duration_ms":235013,"time_signature":"4/4","language_id":2,"initialism":"bncql","spotify_link":"https://open.spotify.com/track/0Vf0yfQR1pkmtnXp7tnr9e","youtube_link":"","other_link":"","energy":0.719,"danceability":0.51,"valence":0.435,"acousticness":0.266,"instrumentalness":0,"date_released":"2005-05-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":32,"title":"地球上最浪漫的一首歌","artist_id":14,"rom_title":"Di Qiu Shang Zui Lang Man De Yi Shou Ge","key":7,"mode":"1","tempo":140,"duration_ms":281183,"time_signature":"4/4","language_id":2,"initialism":"dqszlmdysg","spotify_link":"https://open.spotify.com/track/5V3eOL0Zyb3OqhwOmFRvyO","youtube_link":"","other_link":"","energy":0.487,"danceability":0.57,"valence":0.425,"acousticness":0.373,"instrumentalness":0,"date_released":"2009-12-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":33,"title":"上弦月","artist_id":15,"rom_title":"Shang Xian Yue","key":5,"mode":"1","tempo":111,"duration_ms":223307,"time_signature":"4/4","language_id":2,"initialism":"sxy","spotify_link":"https://open.spotify.com/track/1hW6yHyKvAXs05chYh7dJH","youtube_link":"","other_link":"","energy":0.436,"danceability":0.626,"valence":0.256,"acousticness":0.689,"instrumentalness":0.0000019,"date_released":"2006-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":34,"title":"冰雨","artist_id":16,"rom_title":"Bing Yu","key":6,"mode":"1","tempo":122,"duration_ms":274653,"time_signature":"4/4","language_id":2,"initialism":"by","spotify_link":"https://open.spotify.com/track/4kH3O6ghiJbBCTdNqu0OAq","youtube_link":"","other_link":"","energy":0.368,"danceability":0.652,"valence":0.314,"acousticness":0.654,"instrumentalness":0,"date_released":"1997","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":35,"title":"34+35","artist_id":17,"rom_title":"","key":0,"mode":"1","tempo":110,"duration_ms":173711,"time_signature":"4/4","language_id":1,"initialism":"3","spotify_link":"https://open.spotify.com/track/6Im9k8u9iIzKMrmV7BWtlF","youtube_link":"","other_link":"","energy":0.585,"danceability":0.83,"valence":0.485,"acousticness":0.237,"instrumentalness":0,"date_released":"2020-10-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":36,"title":"Love in the First Degree","artist_id":18,"rom_title":"","key":0,"mode":"1","tempo":118,"duration_ms":211410,"time_signature":"4/4","language_id":1,"initialism":"litfd","spotify_link":"https://open.spotify.com/track/2qjWA8QruRCkoFZUQJR4SQ","youtube_link":"","other_link":"","energy":0.92,"danceability":0.787,"valence":0.661,"acousticness":0.246,"instrumentalness":0.00000982,"date_released":"1987-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":37,"title":"ไม่บอกเธอ","artist_id":19,"rom_title":"","key":4,"mode":"1","tempo":110,"duration_ms":314358,"time_signature":"4/4","language_id":10,"initialism":"ไ","spotify_link":"https://open.spotify.com/track/2DUx3XDBqeXZEVXx0iGhyk","youtube_link":"","other_link":"","energy":0.691,"danceability":0.68,"valence":0.412,"acousticness":0.275,"instrumentalness":0.0000266,"date_released":"2014","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":38,"title":"Stand by Me","artist_id":20,"rom_title":"","key":9,"mode":"1","tempo":118,"duration_ms":180056,"time_signature":"4/4","language_id":1,"initialism":"sbm","spotify_link":"https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy","youtube_link":"","other_link":"","energy":0.306,"danceability":0.65,"valence":0.605,"acousticness":0.57,"instrumentalness":0.00000707,"date_released":"1962-08-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":39,"title":"LOVE","artist_id":21,"rom_title":"","key":4,"mode":"0","tempo":146,"duration_ms":414000,"time_signature":"4/4","language_id":1,"initialism":"l","spotify_link":"https://open.spotify.com/track/5XKYCAnd6Te4hexV937k4H","youtube_link":"","other_link":"","energy":0.406,"danceability":0.451,"valence":0.281,"acousticness":0.622,"instrumentalness":0.00132,"date_released":"1996-05-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":40,"title":"冷雨夜","artist_id":21,"rom_title":"Leng Yu Ye","key":9,"mode":"0","tempo":172,"duration_ms":301707,"time_signature":"4/4","language_id":3,"initialism":"lyy","spotify_link":"https://open.spotify.com/track/0BsaYPBFsPs7dmab6TMrPY","youtube_link":"","other_link":"","energy":0.636,"danceability":0.396,"valence":0.303,"acousticness":0.619,"instrumentalness":0,"date_released":"2013-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":41,"title":"情人","artist_id":21,"rom_title":"Qing Ren","key":0,"mode":"1","tempo":144,"duration_ms":317000,"time_signature":"4/4","language_id":3,"initialism":"qr","spotify_link":"https://open.spotify.com/track/7jbEmYSciVOLX605a2P14Q","youtube_link":"","other_link":"","energy":0.445,"danceability":0.543,"valence":0.152,"acousticness":0.375,"instrumentalness":0.000013,"date_released":"1992-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":42,"title":"我是憤怒","artist_id":21,"rom_title":"Wo Shi Fen Nu","key":11,"mode":"0","tempo":153,"duration_ms":252160,"time_signature":"4/4","language_id":3,"initialism":"wsfn","spotify_link":"https://open.spotify.com/track/2nKSA8oPiDU72VJqLXU5Nj","youtube_link":"","other_link":"","energy":0.892,"danceability":0.499,"valence":0.457,"acousticness":0.0048,"instrumentalness":0.0000584,"date_released":"1992-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":43,"title":"Ain't No Sunshine","artist_id":22,"rom_title":"","key":4,"mode":"0","tempo":80,"duration_ms":125093,"time_signature":"4/4","language_id":1,"initialism":"ans","spotify_link":"https://open.spotify.com/track/1k1Bqnv2R0uJXQN4u6LKYt","youtube_link":"","other_link":"","energy":0.416,"danceability":0.479,"valence":0.514,"acousticness":0.457,"instrumentalness":0.0000172,"date_released":"1971-05-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":44,"title":"Always","artist_id":23,"rom_title":"","key":4,"mode":"1","tempo":141,"duration_ms":353027,"time_signature":"4/4","language_id":1,"initialism":"a","spotify_link":"https://open.spotify.com/track/2RChe0r2cMoyOvuKobZy44","youtube_link":"","other_link":"","energy":0.659,"danceability":0.383,"valence":0.327,"acousticness":0.117,"instrumentalness":0,"date_released":"1994-10-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":45,"title":"One Last Cry","artist_id":24,"rom_title":"","key":11,"mode":"1","tempo":110,"duration_ms":295358,"time_signature":"4/4","language_id":1,"initialism":"olc","spotify_link":"https://open.spotify.com/track/3l9OCOG3Vt6c2lxeMyGSIY","youtube_link":"","other_link":"","energy":0.126,"danceability":0.355,"valence":0.102,"acousticness":0.909,"instrumentalness":0.000337,"date_released":"1992-06-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":46,"title":"The Lazy Song","artist_id":25,"rom_title":"","key":11,"mode":"1","tempo":175,"duration_ms":190213,"time_signature":"4/4","language_id":1,"initialism":"tls","spotify_link":"https://open.spotify.com/track/386RUes7n1uM1yfzgeUuwp","youtube_link":"","other_link":"","energy":0.804,"danceability":0.738,"valence":0.949,"acousticness":0.332,"instrumentalness":0,"date_released":"2010-10-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":47,"title":"Treasure","artist_id":25,"rom_title":"","key":5,"mode":"0","tempo":116,"duration_ms":178560,"time_signature":"4/4","language_id":1,"initialism":"t","spotify_link":"https://open.spotify.com/track/55h7vJchibLdUkxdlX3fK7","youtube_link":"","other_link":"","energy":0.692,"danceability":0.874,"valence":0.937,"acousticness":0.0412,"instrumentalness":0.0000724,"date_released":"2012-12-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":48,"title":"Versace on the Floor","artist_id":25,"rom_title":"","key":2,"mode":"1","tempo":174,"duration_ms":261240,"time_signature":"4/4","language_id":1,"initialism":"votf","spotify_link":"https://open.spotify.com/track/0kN8xEmgMW9mh7UmDYHlJP","youtube_link":"","other_link":"","energy":0.574,"danceability":0.578,"valence":0.301,"acousticness":0.196,"instrumentalness":0,"date_released":"2016-11-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":49,"title":"You Are The Reason","artist_id":26,"rom_title":"","key":10,"mode":"1","tempo":114,"duration_ms":204326,"time_signature":"3/4","language_id":1,"initialism":"yatr","spotify_link":"https://open.spotify.com/track/69vToJ9BMbbLlFZo7k7A7B","youtube_link":"","other_link":"","energy":0.235,"danceability":0.331,"valence":0.218,"acousticness":0.918,"instrumentalness":0,"date_released":"2018-03-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":50,"title":"Havana (feat. Young Thug)","artist_id":27,"rom_title":"","key":2,"mode":"1","tempo":105,"duration_ms":217307,"time_signature":"4/4","language_id":1,"initialism":"h","spotify_link":"https://open.spotify.com/track/1rfofaqEpACxVEHIZBJe6W","youtube_link":"","other_link":"","energy":0.523,"danceability":0.765,"valence":0.394,"acousticness":0.184,"instrumentalness":0.0000356,"date_released":"2018-01-12","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":51,"title":"讓我跟你走","artist_id":28,"rom_title":"Rang Wo Gen Ni Zou","key":10,"mode":"1","tempo":130,"duration_ms":235693,"time_signature":"4/4","language_id":2,"initialism":"rwgnz","spotify_link":"https://open.spotify.com/track/4EJbc0mCVfmSDey2BIgdqj","youtube_link":"","other_link":"","energy":0.441,"danceability":0.605,"valence":0.4,"acousticness":0.662,"instrumentalness":0,"date_released":"1994","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":52,"title":"祝君好","artist_id":29,"rom_title":"Zhu Jun Hao","key":11,"mode":"1","tempo":135,"duration_ms":255000,"time_signature":"4/4","language_id":3,"initialism":"zjh","spotify_link":"https://open.spotify.com/track/6bZxiol0nxTfofgGJDtY6g","youtube_link":"","other_link":"","energy":0.514,"danceability":0.379,"valence":0.139,"acousticness":0.429,"instrumentalness":0.0000315,"date_released":"2001-02-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":53,"title":"Yellow River","artist_id":30,"rom_title":"","key":4,"mode":"1","tempo":130,"duration_ms":165960,"time_signature":"4/4","language_id":1,"initialism":"yr","spotify_link":"https://open.spotify.com/track/4VnzKUBMB6cvog8Jvv1few","youtube_link":"","other_link":"","energy":0.544,"danceability":0.627,"valence":0.877,"acousticness":0.0859,"instrumentalness":0,"date_released":"1970","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":54,"title":"最重要的決定","artist_id":31,"rom_title":"Zui Zhong Yao De Jue Ding","key":6,"mode":"1","tempo":48,"duration_ms":244080,"time_signature":"3/4","language_id":2,"initialism":"zzydjd","spotify_link":"https://open.spotify.com/track/7kofyJoXSTuwQaBPrvqtiM","youtube_link":"","other_link":"","energy":0.338,"danceability":0.556,"valence":0.355,"acousticness":0.595,"instrumentalness":0,"date_released":"2011-03-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":55,"title":"大約在冬季","artist_id":32,"rom_title":"Da Yue Zai Dong Ji","key":5,"mode":"0","tempo":74,"duration_ms":232827,"time_signature":"4/4","language_id":2,"initialism":"dyzdj","spotify_link":"https://open.spotify.com/track/5Oi1UhGQq2B7me6uPpAcc2","youtube_link":"","other_link":"","energy":0.336,"danceability":0.667,"valence":0.461,"acousticness":0.767,"instrumentalness":0,"date_released":"1990-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":56,"title":"Yellow","artist_id":33,"rom_title":"","key":11,"mode":"1","tempo":173,"duration_ms":266773,"time_signature":"4/4","language_id":1,"initialism":"y","spotify_link":"https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg","youtube_link":"","other_link":"","energy":0.661,"danceability":0.429,"valence":0.285,"acousticness":0.00239,"instrumentalness":0.00013,"date_released":"2000-07-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":57,"title":"Adventure of a Lifetime","artist_id":33,"rom_title":"","key":7,"mode":"1","tempo":112,"duration_ms":263787,"time_signature":"4/4","language_id":1,"initialism":"aoal","spotify_link":"https://open.spotify.com/track/69uxyAqqPIsUyTO8txoP2M","youtube_link":"","other_link":"","energy":0.924,"danceability":0.638,"valence":0.529,"acousticness":0.00205,"instrumentalness":0.000173,"date_released":"2015-12-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":58,"title":"A Sky Full of Stars","artist_id":33,"rom_title":"","key":6,"mode":"1","tempo":125,"duration_ms":268467,"time_signature":"4/4","language_id":1,"initialism":"asfos","spotify_link":"https://open.spotify.com/track/0FDzzruyVECATHXKHFs9eJ","youtube_link":"","other_link":"","energy":0.636,"danceability":0.551,"valence":0.153,"acousticness":0.00713,"instrumentalness":0.00203,"date_released":"2014-05-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":59,"title":"Viva La Vida","artist_id":33,"rom_title":"","key":5,"mode":"0","tempo":138,"duration_ms":242373,"time_signature":"4/4","language_id":1,"initialism":"vlv","spotify_link":"https://open.spotify.com/track/1mea3bSkSGXuIRvnydlB5b","youtube_link":"","other_link":"","energy":0.619,"danceability":0.485,"valence":0.416,"acousticness":0.0941,"instrumentalness":0.00000331,"date_released":"2008-05-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":60,"title":"The Scientist","artist_id":33,"rom_title":"","key":5,"mode":"1","tempo":146,"duration_ms":309600,"time_signature":"4/4","language_id":1,"initialism":"ts","spotify_link":"https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle","youtube_link":"","other_link":"","energy":0.442,"danceability":0.56,"valence":0.212,"acousticness":0.727,"instrumentalness":0.0000171,"date_released":"2002-08-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":61,"title":"Accidentally In Love","artist_id":34,"rom_title":"","key":7,"mode":"1","tempo":138,"duration_ms":188387,"time_signature":"4/4","language_id":1,"initialism":"ail","spotify_link":"https://open.spotify.com/track/7FQSD5JjWqGtS1BaQQiT6V","youtube_link":"","other_link":"","energy":0.926,"danceability":0.555,"valence":0.771,"acousticness":0.0484,"instrumentalness":0.00000767,"date_released":"2003-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":62,"title":"最寂寞的時候","artist_id":35,"rom_title":"Zui Ji Mo De Shi Hou","key":7,"mode":"1","tempo":98,"duration_ms":274493,"time_signature":"3/4","language_id":2,"initialism":"zjmdsh","spotify_link":"https://open.spotify.com/track/13XImQFLYbIvtXP1kQC76F","youtube_link":"","other_link":"","energy":0.333,"danceability":0.344,"valence":0.106,"acousticness":0.709,"instrumentalness":0,"date_released":"2009-10-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":63,"title":"魚仔 - 電視劇<花甲男孩轉大人>主題曲","artist_id":35,"rom_title":"Yu Zi","key":1,"mode":"0","tempo":82,"duration_ms":280955,"time_signature":"4/4","language_id":2,"initialism":"yz","spotify_link":"https://open.spotify.com/track/2sb6AZQLeoD3VgA4zglQB6","youtube_link":"","other_link":"","energy":0.217,"danceability":0.666,"valence":0.395,"acousticness":0.786,"instrumentalness":0,"date_released":"2017-05-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":64,"title":"刻在我心底的名字 (Your Name Engraved Herein) - 電影<刻在你心底的名字>主題曲","artist_id":35,"rom_title":"Ke Zai Wo Xin Di De Ming Zi","key":10,"mode":"1","tempo":136,"duration_ms":320166,"time_signature":"4/4","language_id":2,"initialism":"kzwxddmz","spotify_link":"https://open.spotify.com/track/3OC84eKMxRJ4x0Hcwl9i4i","youtube_link":"","other_link":"","energy":0.201,"danceability":0.425,"valence":0.267,"acousticness":0.873,"instrumentalness":0,"date_released":"2020-08-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":65,"title":"Time After Time","artist_id":36,"rom_title":"","key":0,"mode":"1","tempo":130,"duration_ms":243067,"time_signature":"4/4","language_id":1,"initialism":"tat","spotify_link":"https://open.spotify.com/track/1Jj6MF0xDOMA3Ut2Z368Bx","youtube_link":"","other_link":"","energy":0.436,"danceability":0.724,"valence":0.324,"acousticness":0.576,"instrumentalness":0.00000119,"date_released":"2014-03-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":66,"title":"在青春迷失的咖啡館","artist_id":37,"rom_title":"Zai Qing Chun Mi Shi De Ka Fei Guan","key":7,"mode":"1","tempo":168,"duration_ms":218097,"time_signature":"4/4","language_id":2,"initialism":"zqcmsdkfg","spotify_link":"https://open.spotify.com/track/77xwukOvyqpUwDQFBNvKNO","youtube_link":"","other_link":"","energy":0.539,"danceability":0.587,"valence":0.168,"acousticness":0.69,"instrumentalness":0,"date_released":"2018-12-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":67,"title":"La Vie En Rose","artist_id":38,"rom_title":"","key":4,"mode":"1","tempo":95,"duration_ms":105500,"time_signature":"4/4","language_id":11,"initialism":"lver","spotify_link":"https://open.spotify.com/track/0VxocBntP1XTZRsR9ZURPS","youtube_link":"","other_link":"","energy":0.149,"danceability":0.475,"valence":0.318,"acousticness":0.844,"instrumentalness":0,"date_released":"2015-01-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":68,"title":"Bukan Cinta Biasa","artist_id":39,"rom_title":"","key":7,"mode":"1","tempo":113,"duration_ms":266983,"time_signature":"4/4","language_id":6,"initialism":"bcb","spotify_link":"https://open.spotify.com/track/4arXMX7u6GSz4EJG92db1F","youtube_link":"","other_link":"","energy":0.408,"danceability":0.621,"valence":0.295,"acousticness":0.639,"instrumentalness":0,"date_released":"2003-03-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":69,"title":"你是我胸口永遠的痛","artist_id":40,"rom_title":"Ni Shi Wo Xiong Kou Yong Yuan De Tong","key":1,"mode":"0","tempo":113,"duration_ms":309333,"time_signature":"4/4","language_id":2,"initialism":"nswxkyydt","spotify_link":"https://open.spotify.com/track/4jZNEAi98HbnM216xYCRPd","youtube_link":"","other_link":"","energy":0.568,"danceability":0.618,"valence":0.174,"acousticness":0.308,"instrumentalness":0.00000277,"date_released":"1988-07-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":70,"title":"一場遊戲一場夢","artist_id":40,"rom_title":"Yi Chang You Xi Yi Chang Meng","key":10,"mode":"1","tempo":140,"duration_ms":255333,"time_signature":"4/4","language_id":2,"initialism":"ycyxycm","spotify_link":"https://open.spotify.com/track/0Id7swY6cWbvYLtVVF0wvq","youtube_link":"","other_link":"","energy":0.32,"danceability":0.561,"valence":0.356,"acousticness":0.802,"instrumentalness":0,"date_released":"1987-12-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":71,"title":"不愛","artist_id":41,"rom_title":"Bu Ai","key":5,"mode":"1","tempo":75,"duration_ms":205267,"time_signature":"3/4","language_id":2,"initialism":"ba","spotify_link":"https://open.spotify.com/track/2qqDNBNLJ5VwwJ1ExPW32O","youtube_link":"","other_link":"","energy":0.135,"danceability":0.64,"valence":0.235,"acousticness":0.711,"instrumentalness":0,"date_released":"2006-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":72,"title":"流沙","artist_id":41,"rom_title":"Liu Sha","key":8,"mode":"1","tempo":76,"duration_ms":242560,"time_signature":"4/4","language_id":2,"initialism":"ls","spotify_link":"https://open.spotify.com/track/5ZZwQy1wofQhj7LJDNLflT","youtube_link":"","other_link":"","energy":0.291,"danceability":0.647,"valence":0.388,"acousticness":0.672,"instrumentalness":0,"date_released":"1997-12-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":73,"title":"Melody","artist_id":41,"rom_title":"","key":1,"mode":"0","tempo":110,"duration_ms":269000,"time_signature":"4/4","language_id":1,"initialism":"m","spotify_link":"https://open.spotify.com/track/6A4wVKbcg0mRriCFjZzX0Z","youtube_link":"","other_link":"","energy":0.454,"danceability":0.68,"valence":0.24,"acousticness":0.833,"instrumentalness":0.00000132,"date_released":"2002-06-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":74,"title":"沙灘","artist_id":41,"rom_title":"Sha Tan","key":1,"mode":"1","tempo":92,"duration_ms":239627,"time_signature":"4/4","language_id":2,"initialism":"st","spotify_link":"https://open.spotify.com/track/1M54Y8kZqO2kx8Qk7nSe4B","youtube_link":"","other_link":"","energy":0.328,"danceability":0.553,"valence":0.206,"acousticness":0.382,"instrumentalness":0,"date_released":"1997-12-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":75,"title":"普通朋友","artist_id":41,"rom_title":"Pu Tong Peng You","key":5,"mode":"1","tempo":178,"duration_ms":255133,"time_signature":"4/4","language_id":2,"initialism":"ptpy","spotify_link":"https://open.spotify.com/track/7CTitzr4eVIDCPUJi5Dr4B","youtube_link":"","other_link":"","energy":0.278,"danceability":0.56,"valence":0.465,"acousticness":0.678,"instrumentalness":0,"date_released":"1999-06-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":76,"title":"愛, 很簡單","artist_id":41,"rom_title":"Ai Hen Jian Dan","key":1,"mode":"1","tempo":138,"duration_ms":269533,"time_signature":"4/4","language_id":2,"initialism":"ahjd","spotify_link":"https://open.spotify.com/track/3OXHwY8gI2QUh0QliXBwrI","youtube_link":"","other_link":"","energy":0.39,"danceability":0.554,"valence":0.292,"acousticness":0.569,"instrumentalness":0,"date_released":"1997-12-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":77,"title":"22","artist_id":41,"rom_title":"","key":5,"mode":"1","tempo":93,"duration_ms":261907,"time_signature":"4/4","language_id":1,"initialism":"2","spotify_link":"https://open.spotify.com/track/2X8dqN4Jd4A7vnh1GHzPk0","youtube_link":"","other_link":"","energy":0.539,"danceability":0.678,"valence":0.441,"acousticness":0.63,"instrumentalness":0,"date_released":"2002-06-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":78,"title":"找自己","artist_id":41,"rom_title":"Zhao Zi Ji","key":1,"mode":"1","tempo":90,"duration_ms":304707,"time_signature":"4/4","language_id":2,"initialism":"zzj","spotify_link":"https://open.spotify.com/track/0ttmVaBZTAoXnR0s8ljBAx","youtube_link":"","other_link":"","energy":0.77,"danceability":0.668,"valence":0.856,"acousticness":0.0221,"instrumentalness":0.00000441,"date_released":"1999-06-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":79,"title":"Susan說","artist_id":41,"rom_title":"Shuo","key":11,"mode":"0","tempo":79,"duration_ms":261827,"time_signature":"4/4","language_id":2,"initialism":"s","spotify_link":"https://open.spotify.com/track/4k1XsIKJv6fUKS73W82s4n","youtube_link":"","other_link":"","energy":0.538,"danceability":0.67,"valence":0.588,"acousticness":0.228,"instrumentalness":0,"date_released":"2005-08-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":80,"title":"練習愛情","artist_id":42,"rom_title":"Lian Xi Ai Qing","key":0,"mode":"1","tempo":106,"duration_ms":246786,"time_signature":"4/4","language_id":2,"initialism":"lxaq","spotify_link":"https://open.spotify.com/track/1L8z45UlVAOFtiq493lS1t","youtube_link":"","other_link":"","energy":0.572,"danceability":0.819,"valence":0.756,"acousticness":0.559,"instrumentalness":0,"date_released":"2013-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":81,"title":"我們不像我們 - LINE TV《HIStory3圈套》插曲","artist_id":43,"rom_title":"Wo Men Bu Xiang Wo Men","key":3,"mode":"1","tempo":144,"duration_ms":249347,"time_signature":"4/4","language_id":2,"initialism":"wmbxwm","spotify_link":"https://open.spotify.com/track/0OufVcCkSh3bywfiFNvX9k","youtube_link":"","other_link":"","energy":0.333,"danceability":0.519,"valence":0.195,"acousticness":0.762,"instrumentalness":0,"date_released":"2019-04-02","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":82,"title":"手掌心","artist_id":43,"rom_title":"Shou Zhang Xin","key":10,"mode":"0","tempo":146,"duration_ms":255551,"time_signature":"4/4","language_id":2,"initialism":"szx","spotify_link":"https://open.spotify.com/track/0RHldQWFLZ3mNMU6FXfWrO","youtube_link":"","other_link":"","energy":0.528,"danceability":0.447,"valence":0.398,"acousticness":0.74,"instrumentalness":0,"date_released":"2014-07-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":83,"title":"I Love You Always Forever","artist_id":44,"rom_title":"","key":5,"mode":"1","tempo":104,"duration_ms":239960,"time_signature":"4/4","language_id":1,"initialism":"ilyaf","spotify_link":"https://open.spotify.com/track/1PEqh7awkpuepLBSq8ZwqD","youtube_link":"","other_link":"","energy":0.453,"danceability":0.744,"valence":0.122,"acousticness":0.627,"instrumentalness":0.421,"date_released":"1996-04-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":84,"title":"Desperado - 2013 Remaster","artist_id":45,"rom_title":"","key":7,"mode":"1","tempo":60,"duration_ms":213713,"time_signature":"4/4","language_id":1,"initialism":"d","spotify_link":"https://open.spotify.com/track/2TjnCxxQRYn56Ye8gkUKiW","youtube_link":"","other_link":"","energy":0.224,"danceability":0.228,"valence":0.18,"acousticness":0.946,"instrumentalness":0.000222,"date_released":"1973","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":85,"title":"BECAUSE OF LOVE因為愛情","artist_id":46,"rom_title":"Yin Wei Ai Qing","key":5,"mode":"1","tempo":176,"duration_ms":216893,"time_signature":"4/4","language_id":2,"initialism":"ywaq","spotify_link":"https://open.spotify.com/track/6WOwRdX67b4VKujGIal4tK","youtube_link":"","other_link":"","energy":0.205,"danceability":0.412,"valence":0.297,"acousticness":0.858,"instrumentalness":0,"date_released":"2011-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":86,"title":"K歌之王","artist_id":46,"rom_title":"Ge Zhi Wang","key":2,"mode":"1","tempo":79,"duration_ms":222351,"time_signature":"4/4","language_id":3,"initialism":"gzw","spotify_link":"https://open.spotify.com/track/4QkfX9IvweUUIDY9pRACPp","youtube_link":"","other_link":"","energy":0.349,"danceability":0.346,"valence":0.271,"acousticness":0.754,"instrumentalness":0.00000146,"date_released":"2000-11-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":87,"title":"幸福摩天輪","artist_id":46,"rom_title":"Xing Fu Mo Tian Lun","key":0,"mode":"1","tempo":92,"duration_ms":257920,"time_signature":"4/4","language_id":3,"initialism":"xfmtl","spotify_link":"https://open.spotify.com/track/0AJi3XCcEEboePVz60fbki","youtube_link":"","other_link":"","energy":0.342,"danceability":0.656,"valence":0.368,"acousticness":0.252,"instrumentalness":0,"date_released":"2013-05-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":88,"title":"我們都寂寞","artist_id":46,"rom_title":"Wo Men Dou Ji Mo","key":2,"mode":"0","tempo":130,"duration_ms":292907,"time_signature":"4/4","language_id":2,"initialism":"wmdjm","spotify_link":"https://open.spotify.com/track/2WQSseyCsvMSczVqpu7PCs","youtube_link":"","other_link":"","energy":0.244,"danceability":0.556,"valence":0.194,"acousticness":0.825,"instrumentalness":0,"date_released":"2003-04-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":89,"title":"AWAITS YOUR LOVE 等你愛我 (國)","artist_id":46,"rom_title":"Deng Ni Ai Wo","key":10,"mode":"1","tempo":132,"duration_ms":280267,"time_signature":"4/4","language_id":2,"initialism":"dnaw","spotify_link":"https://open.spotify.com/track/7ouGXdpWUQZJHKUDj1Aqvv","youtube_link":"","other_link":"","energy":0.421,"danceability":0.446,"valence":0.0864,"acousticness":0.239,"instrumentalness":0.000244,"date_released":"2011-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":90,"title":"友情歲月","artist_id":47,"rom_title":"You Qing Sui Yue","key":11,"mode":"0","tempo":129,"duration_ms":212200,"time_signature":"4/4","language_id":3,"initialism":"yqsy","spotify_link":"https://open.spotify.com/track/50ayGcMAz9tJ99bFwfB2GT","youtube_link":"","other_link":"","energy":0.655,"danceability":0.627,"valence":0.375,"acousticness":0.185,"instrumentalness":0,"date_released":"1998-06-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":91,"title":"甘心替代你","artist_id":47,"rom_title":"Gan Xin Ti Dai Ni","key":0,"mode":"1","tempo":75,"duration_ms":206227,"time_signature":"4/4","language_id":3,"initialism":"gxtdn","spotify_link":"https://open.spotify.com/track/7B9sHXYSby5Np9iW08tBwA","youtube_link":"","other_link":"","energy":0.44,"danceability":0.447,"valence":0.288,"acousticness":0.741,"instrumentalness":0,"date_released":"2009-12-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":92,"title":"Can You Feel The Love Tonight","artist_id":48,"rom_title":"","key":10,"mode":"1","tempo":125,"duration_ms":240800,"time_signature":"4/4","language_id":1,"initialism":"cyftlt","spotify_link":"https://open.spotify.com/track/46C6OS7z78QtCxEACPrspw","youtube_link":"","other_link":"","energy":0.305,"danceability":0.308,"valence":0.145,"acousticness":0.809,"instrumentalness":0.0000955,"date_released":"2002","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":93,"title":"Your Song","artist_id":48,"rom_title":"","key":3,"mode":"1","tempo":128,"duration_ms":241787,"time_signature":"4/4","language_id":1,"initialism":"ys","spotify_link":"https://open.spotify.com/track/38zsOOcu31XbbYj9BIPUF1","youtube_link":"","other_link":"","energy":0.315,"danceability":0.554,"valence":0.325,"acousticness":0.828,"instrumentalness":0.00000553,"date_released":"1970-04-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":94,"title":"Sorry Seems To Be The Hardest Word","artist_id":48,"rom_title":"","key":7,"mode":"0","tempo":118,"duration_ms":228933,"time_signature":"4/4","language_id":1,"initialism":"sstbthw","spotify_link":"https://open.spotify.com/track/6XfxmT5QNCXvpZA6PKfWVL","youtube_link":"","other_link":"","energy":0.22,"danceability":0.371,"valence":0.112,"acousticness":0.828,"instrumentalness":0.00000123,"date_released":"1976-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":95,"title":"最熟悉的陌生人","artist_id":49,"rom_title":"Zui Shu Xi De Mo Sheng Ren","key":7,"mode":"1","tempo":120,"duration_ms":262413,"time_signature":"4/4","language_id":2,"initialism":"zsxdmsr","spotify_link":"https://open.spotify.com/track/4p1t0HAkt4sYo3R1JQ1WrD","youtube_link":"","other_link":"","energy":0.609,"danceability":0.677,"valence":0.344,"acousticness":0.143,"instrumentalness":0,"date_released":"2004-07-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":96,"title":"嚣张","artist_id":50,"rom_title":"Xiao Zhang","key":11,"mode":"1","tempo":134,"duration_ms":253995,"time_signature":"4/4","language_id":2,"initialism":"xz","spotify_link":"https://open.spotify.com/track/3t8M86tiO0aKMMTXzRrFn8","youtube_link":"","other_link":"","energy":0.518,"danceability":0.595,"valence":0.167,"acousticness":0.649,"instrumentalness":0,"date_released":"2019-08-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":97,"title":"受夠","artist_id":51,"rom_title":"Shou Gou","key":11,"mode":"1","tempo":140,"duration_ms":331342,"time_signature":"4/4","language_id":2,"initialism":"sg","spotify_link":"https://open.spotify.com/track/5JLLWtgBLRxpd4MRkGAm74","youtube_link":"","other_link":"","energy":0.401,"danceability":0.431,"valence":0.305,"acousticness":0.86,"instrumentalness":0.00000746,"date_released":"2020-01-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":98,"title":"相信愛","artist_id":51,"rom_title":"Xiang Xin Ai","key":4,"mode":"1","tempo":75,"duration_ms":266253,"time_signature":"4/4","language_id":2,"initialism":"xxa","spotify_link":"https://open.spotify.com/track/2ddl2ugwlZQGZiAvzJd8hR","youtube_link":"","other_link":"","energy":0.426,"danceability":0.603,"valence":0.382,"acousticness":0.747,"instrumentalness":0.00000963,"date_released":"2020-01-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":99,"title":"以後別做朋友","artist_id":51,"rom_title":"Yi Hou Bie Zuo Peng You","key":3,"mode":"1","tempo":131,"duration_ms":260573,"time_signature":"4/4","language_id":2,"initialism":"yhbzpy","spotify_link":"https://open.spotify.com/track/7zyYmIdjqqiX6kLryb7QBx","youtube_link":"","other_link":"","energy":0.36,"danceability":0.423,"valence":0.291,"acousticness":0.728,"instrumentalness":0,"date_released":"2014-12-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":100,"title":"永不失聯的愛","artist_id":51,"rom_title":"Yong Bu Shi Lian De Ai","key":10,"mode":"1","tempo":170,"duration_ms":259600,"time_signature":"4/4","language_id":2,"initialism":"ybslda","spotify_link":"https://open.spotify.com/track/46fURCnWErjFdNM2yBJ2c8","youtube_link":"","other_link":"","energy":0.43,"danceability":0.289,"valence":0.531,"acousticness":0.624,"instrumentalness":0,"date_released":"2017-12-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":101,"title":"我可以","artist_id":52,"rom_title":"Wo Ke Yi","key":8,"mode":"1","tempo":67,"duration_ms":266920,"time_signature":"4/4","language_id":2,"initialism":"wky","spotify_link":"https://open.spotify.com/track/6ufjxyxCJeYKw82FoaLjfd","youtube_link":"","other_link":"","energy":0.424,"danceability":0.561,"valence":0.154,"acousticness":0.627,"instrumentalness":0,"date_released":"2006-10-06","verified": true,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":102,"title":"Ko Ko Bop","artist_id":53,"rom_title":"","key":0,"mode":"1","tempo":146,"duration_ms":190423,"time_signature":"4/4","language_id":8,"initialism":"kkb","spotify_link":"https://open.spotify.com/track/5EzitieoPnjyKHAq0gfRMa","youtube_link":"","other_link":"","energy":0.85,"danceability":0.749,"valence":0.672,"acousticness":0.0319,"instrumentalness":0.0000481,"date_released":"2017-07-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":103,"title":"Fly Away","artist_id":54,"rom_title":"","key":7,"mode":"0","tempo":124,"duration_ms":277800,"time_signature":"4/4","language_id":2,"initialism":"fa","spotify_link":"https://open.spotify.com/track/6AaJt7d3FEfwAPudoXbeKG","youtube_link":"","other_link":"","energy":0.887,"danceability":0.528,"valence":0.462,"acousticness":0.0294,"instrumentalness":0.00000957,"date_released":"2004-04-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":104,"title":"月牙灣","artist_id":54,"rom_title":"Yue Ya Wan","key":2,"mode":"1","tempo":174,"duration_ms":308547,"time_signature":"4/4","language_id":2,"initialism":"yyw","spotify_link":"https://open.spotify.com/track/1b5IRT3iraxjHOsKZx93sW","youtube_link":"","other_link":"","energy":0.691,"danceability":0.414,"valence":0.552,"acousticness":0.0523,"instrumentalness":0,"date_released":"2007-09-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":105,"title":"刺鳥","artist_id":55,"rom_title":"Ci Niao","key":9,"mode":"0","tempo":81,"duration_ms":246667,"time_signature":"4/4","language_id":2,"initialism":"cn","spotify_link":"https://open.spotify.com/track/3v3oT6e6Z2dQi1fCSEMd3v","youtube_link":"","other_link":"","energy":0.785,"danceability":0.503,"valence":0.285,"acousticness":0.23,"instrumentalness":0,"date_released":"2005-04-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":106,"title":"流星雨","artist_id":56,"rom_title":"Liu Xing Yu","key":4,"mode":"1","tempo":136,"duration_ms":276600,"time_signature":"4/4","language_id":2,"initialism":"lxy","spotify_link":"https://open.spotify.com/track/1hPNdCII2b8NOEIqwbbsdG","youtube_link":"","other_link":"","energy":0.448,"danceability":0.578,"valence":0.169,"acousticness":0.129,"instrumentalness":0,"date_released":"2001-08-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":107,"title":"半途而廢","artist_id":57,"rom_title":"Ban Tu Er Fei","key":5,"mode":"1","tempo":150,"duration_ms":213000,"time_signature":"4/4","language_id":2,"initialism":"btef","spotify_link":"https://open.spotify.com/track/0vgddc2PMdYzzy5bPAx1BD","youtube_link":"","other_link":"","energy":0.453,"danceability":0.566,"valence":0.45,"acousticness":0.00911,"instrumentalness":0.0000651,"date_released":"1998-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":108,"title":"感情生活","artist_id":57,"rom_title":"Gan Qing Sheng Huo","key":9,"mode":"0","tempo":120,"duration_ms":317160,"time_signature":"4/4","language_id":3,"initialism":"gqsh","spotify_link":"https://open.spotify.com/track/60QRSdOkLycKdx4nid6Qbm","youtube_link":"","other_link":"","energy":0.53,"danceability":0.515,"valence":0.191,"acousticness":0.00263,"instrumentalness":0.276,"date_released":"1998-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":109,"title":"色誡","artist_id":57,"rom_title":"Se Jie","key":2,"mode":"0","tempo":136,"duration_ms":295800,"time_signature":"4/4","language_id":2,"initialism":"sj","spotify_link":"https://open.spotify.com/track/77xhhM4Rt6UaOqeAWT9fix","youtube_link":"","other_link":"","energy":0.54,"danceability":0.619,"valence":0.153,"acousticness":0.00575,"instrumentalness":0.00000322,"date_released":"1998-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":110,"title":"臉","artist_id":57,"rom_title":"Lian","key":4,"mode":"1","tempo":132,"duration_ms":214400,"time_signature":"4/4","language_id":2,"initialism":"l","spotify_link":"https://open.spotify.com/track/5esuh9AKX1v8BvaM9DbSef","youtube_link":"","other_link":"","energy":0.423,"danceability":0.328,"valence":0.088,"acousticness":0.376,"instrumentalness":0.000129,"date_released":"1998-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":111,"title":"約定","artist_id":57,"rom_title":"Yue Ding","key":4,"mode":"1","tempo":80,"duration_ms":267587,"time_signature":"4/4","language_id":2,"initialism":"yd","spotify_link":"https://open.spotify.com/track/2iKRfDTZj2oyDk0P7zej2s","youtube_link":"","other_link":"","energy":0.261,"danceability":0.565,"valence":0.184,"acousticness":0.889,"instrumentalness":0.00017,"date_released":"1997","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":112,"title":"但願人長久","artist_id":57,"rom_title":"Dan Yuan Ren Zhang Jiu","key":4,"mode":"1","tempo":177,"duration_ms":260173,"time_signature":"4/4","language_id":2,"initialism":"dyrzj","spotify_link":"https://open.spotify.com/track/12yVeepFYqv2z9UHHR2Rly","youtube_link":"","other_link":"","energy":0.244,"danceability":0.331,"valence":0.336,"acousticness":0.809,"instrumentalness":0.00000651,"date_released":"1995","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":113,"title":"打錯了","artist_id":57,"rom_title":"Da Cuo Le","key":10,"mode":"1","tempo":120,"duration_ms":192000,"time_signature":"4/4","language_id":2,"initialism":"dcl","spotify_link":"https://open.spotify.com/track/6E37CC0xg0uTD7yE5yoDaT","youtube_link":"","other_link":"","energy":0.672,"danceability":0.64,"valence":0.894,"acousticness":0.556,"instrumentalness":0.00000562,"date_released":"2001-10-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":114,"title":"愛與痛的邊緣","artist_id":57,"rom_title":"Ai Yu Tong De Bian Yuan","key":5,"mode":"0","tempo":113,"duration_ms":273773,"time_signature":"4/4","language_id":3,"initialism":"aytdby","spotify_link":"https://open.spotify.com/track/4XafCNKCV3FnQUoel6NrRK","youtube_link":"","other_link":"","energy":0.411,"danceability":0.62,"valence":0.534,"acousticness":0.514,"instrumentalness":0.00000183,"date_released":"1994-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":115,"title":"慢冷","artist_id":58,"rom_title":"Man Leng","key":4,"mode":"1","tempo":92,"duration_ms":289604,"time_signature":"4/4","language_id":2,"initialism":"ml","spotify_link":"https://open.spotify.com/track/3NNDJfWMGHuNpvHWTImmlW","youtube_link":"","other_link":"","energy":0.471,"danceability":0.521,"valence":0.269,"acousticness":0.786,"instrumentalness":0,"date_released":"2019-05-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":116,"title":"一家一","artist_id":58,"rom_title":"Yi Jia Yi","key":6,"mode":"1","tempo":128,"duration_ms":267773,"time_signature":"4/4","language_id":2,"initialism":"yjy","spotify_link":"https://open.spotify.com/track/22lgPyrA0jLFI0rX17IszX","youtube_link":"","other_link":"","energy":0.56,"danceability":0.585,"valence":0.519,"acousticness":0.53,"instrumentalness":0,"date_released":"2010-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":117,"title":"絲路","artist_id":58,"rom_title":"Si Lu","key":5,"mode":"1","tempo":73,"duration_ms":301441,"time_signature":"4/4","language_id":2,"initialism":"sl","spotify_link":"https://open.spotify.com/track/3n1pQaVXdH9KGW8z2BbqAP","youtube_link":"","other_link":"","energy":0.34,"danceability":0.522,"valence":0.607,"acousticness":0.867,"instrumentalness":0,"date_released":"2005-09-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":118,"title":"My Way","artist_id":59,"rom_title":"","key":2,"mode":"1","tempo":75,"duration_ms":276800,"time_signature":"4/4","language_id":1,"initialism":"mw","spotify_link":"https://open.spotify.com/track/3spdoTYpuCpmq19tuD0bOe","youtube_link":"","other_link":"","energy":0.381,"danceability":0.401,"valence":0.229,"acousticness":0.7,"instrumentalness":0,"date_released":"1969-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":119,"title":"Can't Take My Eyes off You","artist_id":60,"rom_title":"","key":4,"mode":"1","tempo":124,"duration_ms":203240,"time_signature":"4/4","language_id":1,"initialism":"ctmeoy","spotify_link":"https://open.spotify.com/track/6ft9PAgNOjmZ2kFVP7LGqb","youtube_link":"","other_link":"","energy":0.764,"danceability":0.575,"valence":0.536,"acousticness":0.566,"instrumentalness":0.0000107,"date_released":"2003-01-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":120,"title":"差不多姑娘","artist_id":61,"rom_title":"Cha Bu Duo Gu Niang","key":6,"mode":"0","tempo":88,"duration_ms":230043,"time_signature":"4/4","language_id":2,"initialism":"cbdgn","spotify_link":"https://open.spotify.com/track/1SllkYDv4yk2cyCNC1BajT","youtube_link":"","other_link":"","energy":0.758,"danceability":0.758,"valence":0.502,"acousticness":0.219,"instrumentalness":0,"date_released":"2019-07-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":121,"title":"句號","artist_id":61,"rom_title":"Ju Hao","key":10,"mode":"1","tempo":144,"duration_ms":235632,"time_signature":"4/4","language_id":2,"initialism":"jh","spotify_link":"https://open.spotify.com/track/1mgX7SIBVjBCqiLCMEl15W","youtube_link":"","other_link":"","energy":0.541,"danceability":0.717,"valence":0.449,"acousticness":0.258,"instrumentalness":0,"date_released":"2019-11-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":122,"title":"別勉強","artist_id":61,"rom_title":"Bie Mian Qiang","key":6,"mode":"0","tempo":164,"duration_ms":262597,"time_signature":"4/4","language_id":2,"initialism":"bmq","spotify_link":"https://open.spotify.com/track/6tzOEJ2tqSiAxHw9CAT9Ru","youtube_link":"","other_link":"","energy":0.379,"danceability":0.376,"valence":0.248,"acousticness":0.663,"instrumentalness":0,"date_released":"2019-12-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":123,"title":"很久以後","artist_id":61,"rom_title":"Hen Jiu Yi Hou","key":2,"mode":"1","tempo":146,"duration_ms":290265,"time_signature":"4/4","language_id":2,"initialism":"hjyh","spotify_link":"https://open.spotify.com/track/6lZKB76djHxzO0p2Y3E8vj","youtube_link":"","other_link":"","energy":0.474,"danceability":0.46,"valence":0.186,"acousticness":0.673,"instrumentalness":0.000015,"date_released":"2019-12-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":124,"title":"再見","artist_id":61,"rom_title":"Zai Jian","key":7,"mode":"1","tempo":136,"duration_ms":206053,"time_signature":"4/4","language_id":2,"initialism":"zj","spotify_link":"https://open.spotify.com/track/5UAGQJmL7Rn4gn7wlkMyqS","youtube_link":"","other_link":"","energy":0.538,"danceability":0.598,"valence":0.157,"acousticness":0.284,"instrumentalness":0,"date_released":"2015-11-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":125,"title":"SUPERWOMAN","artist_id":62,"rom_title":"","key":5,"mode":"1","tempo":140,"duration_ms":313467,"time_signature":"4/4","language_id":1,"initialism":"s","spotify_link":"https://open.spotify.com/track/5NHvltxm8MjJnOWrln5j0t","youtube_link":"","other_link":"","energy":0.621,"danceability":0.633,"valence":0.522,"acousticness":0.531,"instrumentalness":0,"date_released":"2005-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":126,"title":"梁山伯與茱麗葉","artist_id":62,"rom_title":"Liang Shan Bo Yu Zhu Li Ye","key":2,"mode":"1","tempo":120,"duration_ms":232897,"time_signature":"4/4","language_id":2,"initialism":"lsbyzly","spotify_link":"https://open.spotify.com/track/7mauRaccD3RaEWdW2SPzPj","youtube_link":"","other_link":"","energy":0.574,"danceability":0.666,"valence":0.659,"acousticness":0.78,"instrumentalness":0,"date_released":"2016-01-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":127,"title":"兩隻戀人","artist_id":62,"rom_title":"Liang Zhi Lian Ren","key":1,"mode":"0","tempo":125,"duration_ms":244691,"time_signature":"4/4","language_id":2,"initialism":"lzlr","spotify_link":"https://open.spotify.com/track/16MADi2KjVZgwshXXnCysN","youtube_link":"","other_link":"","energy":0.633,"danceability":0.676,"valence":0.343,"acousticness":0.489,"instrumentalness":0.00000244,"date_released":"2006-12-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":128,"title":"你還不知道?","artist_id":63,"rom_title":"Ni Hai Bu Zhi Dao","key":5,"mode":"1","tempo":94,"duration_ms":191365,"time_signature":"4/4","language_id":2,"initialism":"nhbzd","spotify_link":"https://open.spotify.com/track/4dV0T2JbvRemNAdt2oaOhG","youtube_link":"","other_link":"","energy":0.314,"danceability":0.641,"valence":0.314,"acousticness":0.585,"instrumentalness":0,"date_released":"2020-08-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":129,"title":"Careless Whisper","artist_id":64,"rom_title":"","key":2,"mode":"0","tempo":153,"duration_ms":300107,"time_signature":"4/4","language_id":1,"initialism":"cw","spotify_link":"https://open.spotify.com/track/4jDmJ51x1o9NZB5Nxxc7gY","youtube_link":"","other_link":"","energy":0.629,"danceability":0.574,"valence":0.786,"acousticness":0.128,"instrumentalness":0,"date_released":"1998-11-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":130,"title":"暗戀的代價","artist_id":65,"rom_title":"An Lian De Dai Jia","key":1,"mode":"1","tempo":142,"duration_ms":223840,"time_signature":"4/4","language_id":2,"initialism":"alddj","spotify_link":"https://open.spotify.com/track/5WccNzbBbYAXTiN7R8Mi0v","youtube_link":"","other_link":"","energy":0.759,"danceability":0.749,"valence":0.969,"acousticness":0.00375,"instrumentalness":0.000467,"date_released":"1994-04-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":131,"title":"月半小夜曲","artist_id":66,"rom_title":"Yue Ban Xiao Ye Qu","key":7,"mode":"0","tempo":80,"duration_ms":290973,"time_signature":"4/4","language_id":3,"initialism":"ybxyq","spotify_link":"https://open.spotify.com/track/7jFNX9aTdcQfhIgUVE02hi","youtube_link":"","other_link":"","energy":0.297,"danceability":0.551,"valence":0.237,"acousticness":0.737,"instrumentalness":0,"date_released":"1988-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":132,"title":"春泥","artist_id":67,"rom_title":"Chun Ni","key":9,"mode":"0","tempo":79,"duration_ms":254800,"time_signature":"4/4","language_id":2,"initialism":"cn","spotify_link":"https://open.spotify.com/track/126sFLTpIW0IlvuRPVNB95","youtube_link":"","other_link":"","energy":0.429,"danceability":0.42,"valence":0.173,"acousticness":0.667,"instrumentalness":0,"date_released":"2003-06-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":133,"title":"讓我一次愛個夠","artist_id":67,"rom_title":"Rang Wo Yi Ci Ai Ge Gou","key":9,"mode":"0","tempo":101,"duration_ms":259800,"time_signature":"4/4","language_id":2,"initialism":"rwycagg","spotify_link":"https://open.spotify.com/track/0lLtRropfDF3ZeZTX8kD0N","youtube_link":"","other_link":"","energy":0.699,"danceability":0.703,"valence":0.661,"acousticness":0.125,"instrumentalness":0.0000211,"date_released":"1998-07-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":134,"title":"Em Day Chang Phai Thuy Kieu","artist_id":68,"rom_title":"","key":7,"mode":"0","tempo":88,"duration_ms":214500,"time_signature":"4/4","language_id":9,"initialism":"edcptk","spotify_link":"https://open.spotify.com/track/031jyNUkkD02vrkgZDGJxu","youtube_link":"","other_link":"","energy":0.492,"danceability":0.666,"valence":0.683,"acousticness":0.681,"instrumentalness":0.00436,"date_released":"2019-10-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":135,"title":"Day 1 ◑","artist_id":69,"rom_title":"","key":6,"mode":"1","tempo":95,"duration_ms":233601,"time_signature":"4/4","language_id":1,"initialism":"d1◑","spotify_link":"https://open.spotify.com/track/6ZzYETKetIfNUsZUb23jgG","youtube_link":"","other_link":"","energy":0.581,"danceability":0.503,"valence":0.633,"acousticness":0.21,"instrumentalness":0.000708,"date_released":"2018-08-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":136,"title":"Day 1 ◑ - Brooklyn Session","artist_id":69,"rom_title":"","key":1,"mode":"1","tempo":85,"duration_ms":281629,"time_signature":"4/4","language_id":1,"initialism":"d1◑","spotify_link":"https://open.spotify.com/track/4Y4zS5KbeQFzERQGDXCTsd","youtube_link":"","other_link":"","energy":0.213,"danceability":0.393,"valence":0.268,"acousticness":0.824,"instrumentalness":0,"date_released":"2018","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":137,"title":"Collide","artist_id":70,"rom_title":"","key":11,"mode":"1","tempo":94,"duration_ms":249120,"time_signature":"4/4","language_id":1,"initialism":"c","spotify_link":"https://open.spotify.com/track/6dwkFmLUz6hx2CZG2EqLol","youtube_link":"","other_link":"","energy":0.625,"danceability":0.636,"valence":0.342,"acousticness":0.222,"instrumentalness":0.0000535,"date_released":"2003-10-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":138,"title":"Wanted","artist_id":71,"rom_title":"","key":0,"mode":"1","tempo":170,"duration_ms":228840,"time_signature":"4/4","language_id":1,"initialism":"w","spotify_link":"https://open.spotify.com/track/0f1svjHSiaCJif6noKKVHa","youtube_link":"","other_link":"","energy":0.476,"danceability":0.421,"valence":0.3,"acousticness":0.268,"instrumentalness":0,"date_released":"2011","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":139,"title":"Into the Unknown","artist_id":72,"rom_title":"","key":10,"mode":"0","tempo":145,"duration_ms":194848,"time_signature":"5/4","language_id":1,"initialism":"itu","spotify_link":"https://open.spotify.com/track/3Z0oQ8r78OUaHvGPiDBR3W","youtube_link":"","other_link":"","energy":0.405,"danceability":0.323,"valence":0.274,"acousticness":0.849,"instrumentalness":0.000544,"date_released":"2019-11-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":140,"title":"Fixing a Broken Heart - Solo Version","artist_id":73,"rom_title":"","key":9,"mode":"1","tempo":105,"duration_ms":212333,"time_signature":"3/4","language_id":1,"initialism":"fabh","spotify_link":"https://open.spotify.com/track/6Kld4dUHU3Yh1zNjZJenEb","youtube_link":"","other_link":"","energy":0.377,"danceability":0.404,"valence":0.349,"acousticness":0.545,"instrumentalness":0,"date_released":"1993","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":141,"title":"你,好不好?","artist_id":74,"rom_title":"Ni Hao Bu Hao","key":10,"mode":"1","tempo":80,"duration_ms":288000,"time_signature":"4/4","language_id":2,"initialism":"nhbh","spotify_link":"https://open.spotify.com/track/6hcBSrzcc6al3pjeP0xfEO","youtube_link":"","other_link":"","energy":0.113,"danceability":0.663,"valence":0.36,"acousticness":0.894,"instrumentalness":0,"date_released":"2018-07-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":142,"title":"不僅僅是喜歡","artist_id":74,"rom_title":"Bu Jin Jin Shi Xi Huan","key":1,"mode":"0","tempo":110,"duration_ms":229091,"time_signature":"4/4","language_id":2,"initialism":"bjjsxh","spotify_link":"https://open.spotify.com/track/4sfMwL2W4g5lWthUyIRd1c","youtube_link":"","other_link":"","energy":0.302,"danceability":0.848,"valence":0.523,"acousticness":0.66,"instrumentalness":0,"date_released":"2019-04-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":143,"title":"深夜","artist_id":74,"rom_title":"Shen Ye","key":6,"mode":"1","tempo":114,"duration_ms":263390,"time_signature":"3/4","language_id":2,"initialism":"sy","spotify_link":"https://open.spotify.com/track/3QPVZxXkYdghB7RqiM7SXc","youtube_link":"","other_link":"","energy":0.399,"danceability":0.425,"valence":0.253,"acousticness":0.711,"instrumentalness":0,"date_released":"2019-09-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":144,"title":"Give You My Heart","artist_id":75,"rom_title":"","key":8,"mode":"1","tempo":112,"duration_ms":280360,"time_signature":"3/4","language_id":1,"initialism":"gymh","spotify_link":"https://open.spotify.com/track/6dGsBRuavumBs5BghcXF3D","youtube_link":"","other_link":"","energy":0.43,"danceability":0.344,"valence":0.385,"acousticness":0.683,"instrumentalness":0,"date_released":"2020-02-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":145,"title":"這麼近(那麼遠)","artist_id":76,"rom_title":"Zhe Me Jin","key":7,"mode":"1","tempo":142,"duration_ms":375733,"time_signature":"4/4","language_id":3,"initialism":"zmj","spotify_link":"https://open.spotify.com/track/0J7ryYVVpsmfkCyoOMIoqK","youtube_link":"","other_link":"","energy":0.324,"danceability":0.545,"valence":0.159,"acousticness":0.361,"instrumentalness":0,"date_released":"1995-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":146,"title":"你最珍貴","artist_id":76,"rom_title":"Ni Zui Zhen Gui","key":10,"mode":"1","tempo":94,"duration_ms":286840,"time_signature":"4/4","language_id":2,"initialism":"nzzg","spotify_link":"https://open.spotify.com/track/2d3DoAIDeUC58X3mzDRmDs","youtube_link":"","other_link":"","energy":0.285,"danceability":0.52,"valence":0.0798,"acousticness":0.687,"instrumentalness":0,"date_released":"1998-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":147,"title":"遙遠的她","artist_id":76,"rom_title":"Yao Yuan De Ta","key":0,"mode":"1","tempo":77,"duration_ms":257547,"time_signature":"4/4","language_id":2,"initialism":"yydt","spotify_link":"https://open.spotify.com/track/7bPCumVyC06rDKgTiJ5BMX","youtube_link":"","other_link":"","energy":0.295,"danceability":0.582,"valence":0.303,"acousticness":0.606,"instrumentalness":0,"date_released":"1986-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":148,"title":"一路上有你","artist_id":76,"rom_title":"Yi Lu Shang You Ni","key":4,"mode":"1","tempo":185,"duration_ms":282827,"time_signature":"4/4","language_id":2,"initialism":"ylsyn","spotify_link":"https://open.spotify.com/track/4Uq4BHa2NVk9EUpXdSAdQl","youtube_link":"","other_link":"","energy":0.325,"danceability":0.399,"valence":0.194,"acousticness":0.416,"instrumentalness":0,"date_released":"1993-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":149,"title":"真情流露","artist_id":76,"rom_title":"Zhen Qing Liu Lu","key":8,"mode":"1","tempo":128,"duration_ms":308627,"time_signature":"4/4","language_id":2,"initialism":"zqll","spotify_link":"https://open.spotify.com/track/0tKQFCbbPRb0KkfM1pzU5a","youtube_link":"","other_link":"","energy":0.427,"danceability":0.568,"valence":0.206,"acousticness":0.101,"instrumentalness":0,"date_released":"1992-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":150,"title":"祇想一生跟你走","artist_id":76,"rom_title":"Qi Xiang Yi Sheng Gen Ni Zou","key":7,"mode":"1","tempo":130,"duration_ms":313267,"time_signature":"4/4","language_id":2,"initialism":"qxysgnz","spotify_link":"https://open.spotify.com/track/5iatMK7b76FuQtjBbUuQV1","youtube_link":"","other_link":"","energy":0.476,"danceability":0.697,"valence":0.235,"acousticness":0.81,"instrumentalness":0,"date_released":"2012-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":151,"title":"用餘生去愛","artist_id":76,"rom_title":"Yong Yu Sheng Qu Ai","key":0,"mode":"1","tempo":121,"duration_ms":254239,"time_signature":"4/4","language_id":2,"initialism":"yysqa","spotify_link":"https://open.spotify.com/track/1pPxFiRJKyMR9zWp4OM1Wf","youtube_link":"","other_link":"","energy":0.205,"danceability":0.501,"valence":0.235,"acousticness":0.921,"instrumentalness":0.00000244,"date_released":"2014-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":152,"title":"李香蘭","artist_id":76,"rom_title":"Li Xiang Lan","key":9,"mode":"0","tempo":77,"duration_ms":396187,"time_signature":"4/4","language_id":3,"initialism":"lxl","spotify_link":"https://open.spotify.com/track/2hBI3IgxXeVzjBEpodrmxq","youtube_link":"","other_link":"","energy":0.199,"danceability":0.347,"valence":0.0774,"acousticness":0.723,"instrumentalness":0.000438,"date_released":"1990-07-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":153,"title":"Have It All","artist_id":77,"rom_title":"","key":1,"mode":"0","tempo":82,"duration_ms":226098,"time_signature":"4/4","language_id":1,"initialism":"hia","spotify_link":"https://open.spotify.com/track/1pIMxRddmCGalHnRbLFkWg","youtube_link":"","other_link":"","energy":0.617,"danceability":0.643,"valence":0.592,"acousticness":0.192,"instrumentalness":0,"date_released":"2018-04-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":154,"title":"一點點","artist_id":78,"rom_title":"Yi Dian Dian","key":7,"mode":"1","tempo":134,"duration_ms":221267,"time_signature":"4/4","language_id":2,"initialism":"ydd","spotify_link":"https://open.spotify.com/track/5rQPgfJMJ7yhsEr0HwTA77","youtube_link":"","other_link":"","energy":0.413,"danceability":0.507,"valence":0.172,"acousticness":0.119,"instrumentalness":0.0000166,"date_released":"2016-06-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":155,"title":"土耳其冰淇淋","artist_id":78,"rom_title":"Tu Er Qi Bing Qi Lin","key":7,"mode":"1","tempo":114,"duration_ms":195760,"time_signature":"4/4","language_id":2,"initialism":"teqbql","spotify_link":"https://open.spotify.com/track/2qm1nx1d1yAjYMZflBLNGC","youtube_link":"","other_link":"","energy":0.924,"danceability":0.662,"valence":0.602,"acousticness":0.00203,"instrumentalness":0.206,"date_released":"2016-06-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":156,"title":"一路向北","artist_id":78,"rom_title":"Yi Lu Xiang Bei","key":5,"mode":"1","tempo":134,"duration_ms":294240,"time_signature":"4/4","language_id":2,"initialism":"ylxb","spotify_link":"https://open.spotify.com/track/31RIphTQ9y4zStkH5xRWgW","youtube_link":"","other_link":"","energy":0.617,"danceability":0.456,"valence":0.3,"acousticness":0.0133,"instrumentalness":0.0000595,"date_released":"2005-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":157,"title":"最後的戰役","artist_id":78,"rom_title":"Zui Hou De Zhan Yi","key":1,"mode":"1","tempo":119,"duration_ms":251160,"time_signature":"4/4","language_id":2,"initialism":"zhdzy","spotify_link":"https://open.spotify.com/track/0RF0KWRmViSC222kfVJsPo","youtube_link":"","other_link":"","energy":0.785,"danceability":0.607,"valence":0.39,"acousticness":0.037,"instrumentalness":0.00000252,"date_released":"2002-07-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":158,"title":"愛在西元前","artist_id":78,"rom_title":"Ai Zai Xi Yuan Qian","key":8,"mode":"1","tempo":127,"duration_ms":234253,"time_signature":"4/4","language_id":2,"initialism":"azxyq","spotify_link":"https://open.spotify.com/track/36okEwTBuhG9dIOqCd0B2P","youtube_link":"","other_link":"","energy":0.68,"danceability":0.769,"valence":0.727,"acousticness":0.179,"instrumentalness":0.0000271,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":159,"title":"簡單愛","artist_id":78,"rom_title":"Jian Dan Ai","key":0,"mode":"1","tempo":97,"duration_ms":270987,"time_signature":"4/4","language_id":2,"initialism":"jda","spotify_link":"https://open.spotify.com/track/5Jtg0qcTKMHq3HjPVGRFAi","youtube_link":"","other_link":"","energy":0.575,"danceability":0.859,"valence":0.529,"acousticness":0.00745,"instrumentalness":0.0000101,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":160,"title":"忍者","artist_id":78,"rom_title":"Ren Zhe","key":9,"mode":"1","tempo":106,"duration_ms":158520,"time_signature":"4/4","language_id":2,"initialism":"rz","spotify_link":"https://open.spotify.com/track/0LwNhTUNEkV7VTlDy6wBb8","youtube_link":"","other_link":"","energy":0.845,"danceability":0.829,"valence":0.211,"acousticness":0.251,"instrumentalness":0,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":161,"title":"上海一九四三","artist_id":78,"rom_title":"Shang Hai Yi Jiu Si San","key":2,"mode":"1","tempo":116,"duration_ms":195800,"time_signature":"3/4","language_id":2,"initialism":"shyjss","spotify_link":"https://open.spotify.com/track/2dOBADnRFSLgzHgzTxc014","youtube_link":"","other_link":"","energy":0.373,"danceability":0.602,"valence":0.358,"acousticness":0.393,"instrumentalness":0,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":162,"title":"對不起","artist_id":78,"rom_title":"Dui Bu Qi","key":7,"mode":"1","tempo":140,"duration_ms":225413,"time_signature":"4/4","language_id":2,"initialism":"dbq","spotify_link":"https://open.spotify.com/track/37Xjeya5eNFNBJ7HWSDwVE","youtube_link":"","other_link":"","energy":0.619,"danceability":0.778,"valence":0.443,"acousticness":0.0599,"instrumentalness":0.00000366,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":163,"title":"安靜","artist_id":78,"rom_title":"An Jing","key":10,"mode":"1","tempo":144,"duration_ms":334240,"time_signature":"4/4","language_id":2,"initialism":"aj","spotify_link":"https://open.spotify.com/track/4FOydQ5IdqmdeBgG9vFbPg","youtube_link":"","other_link":"","energy":0.401,"danceability":0.505,"valence":0.125,"acousticness":0.613,"instrumentalness":0.00000869,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":164,"title":"止戰之殤","artist_id":78,"rom_title":"Zhi Zhan Zhi Shang","key":1,"mode":"0","tempo":89,"duration_ms":274907,"time_signature":"4/4","language_id":2,"initialism":"zzzs","spotify_link":"https://open.spotify.com/track/3kriYj6FUKtGWJBdnR7jOi","youtube_link":"","other_link":"","energy":0.725,"danceability":0.477,"valence":0.337,"acousticness":0.483,"instrumentalness":0.0000902,"date_released":"2004-08-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":165,"title":"我是如此相信 (天火電影主題曲)","artist_id":78,"rom_title":"Wo Shi Ru Ci Xiang Xin","key":0,"mode":"1","tempo":138,"duration_ms":266383,"time_signature":"4/4","language_id":2,"initialism":"wsrcxx","spotify_link":"https://open.spotify.com/track/4olLtprgPPGUJK4P5bRcgI","youtube_link":"","other_link":"","energy":0.501,"danceability":0.507,"valence":0.134,"acousticness":0.282,"instrumentalness":0.0000223,"date_released":"2019-12-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":166,"title":"開不了口","artist_id":78,"rom_title":"Kai Bu Liao Kou","key":9,"mode":"1","tempo":140,"duration_ms":284973,"time_signature":"4/4","language_id":2,"initialism":"kblk","spotify_link":"https://open.spotify.com/track/0JB2nnrP35zVYnQcYpAnCb","youtube_link":"","other_link":"","energy":0.525,"danceability":0.578,"valence":0.362,"acousticness":0.598,"instrumentalness":0.00000333,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":167,"title":"威廉古堡","artist_id":78,"rom_title":"Wei Lian Gu Bao","key":11,"mode":"0","tempo":140,"duration_ms":236187,"time_signature":"4/4","language_id":2,"initialism":"wlgb","spotify_link":"https://open.spotify.com/track/09V52TgKoNpp0yGswRV3UD","youtube_link":"","other_link":"","energy":0.554,"danceability":0.634,"valence":0.313,"acousticness":0.119,"instrumentalness":0,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":168,"title":"斷了的弦","artist_id":78,"rom_title":"Duan Le De Xian","key":9,"mode":"1","tempo":97,"duration_ms":293507,"time_signature":"4/4","language_id":2,"initialism":"dldx","spotify_link":"https://open.spotify.com/track/7yriqF8s3ESXqwuDxUaleo","youtube_link":"","other_link":"","energy":0.632,"danceability":0.654,"valence":0.324,"acousticness":0.396,"instrumentalness":0.00000795,"date_released":"2003-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":169,"title":"軌跡","artist_id":78,"rom_title":"Gui Ji","key":9,"mode":"1","tempo":75,"duration_ms":322320,"time_signature":"4/4","language_id":2,"initialism":"gj","spotify_link":"https://open.spotify.com/track/2PHJSiIQQgVAuHqSxEp6F9","youtube_link":"","other_link":"","energy":0.476,"danceability":0.445,"valence":0.17,"acousticness":0.21,"instrumentalness":0.000127,"date_released":"2003-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":170,"title":"暗號","artist_id":78,"rom_title":"An Hao","key":4,"mode":"1","tempo":126,"duration_ms":268560,"time_signature":"4/4","language_id":2,"initialism":"ah","spotify_link":"https://open.spotify.com/track/1GuvP2zN3hTMTaf991GVc0","youtube_link":"","other_link":"","energy":0.564,"danceability":0.724,"valence":0.529,"acousticness":0.503,"instrumentalness":0.0000249,"date_released":"2002-07-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":171,"title":"晴天","artist_id":78,"rom_title":"Qing Tian","key":7,"mode":"1","tempo":137,"duration_ms":269747,"time_signature":"4/4","language_id":2,"initialism":"qt","spotify_link":"https://open.spotify.com/track/0F02KChKwbcQ3tk4q1YxLH","youtube_link":"","other_link":"","energy":0.567,"danceability":0.547,"valence":0.399,"acousticness":0.276,"instrumentalness":0.000548,"date_released":"2003-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":172,"title":"愛情廢柴","artist_id":78,"rom_title":"Ai Qing Fei Chai","key":2,"mode":"1","tempo":74,"duration_ms":285616,"time_signature":"4/4","language_id":2,"initialism":"aqfc","spotify_link":"https://open.spotify.com/track/4zWz6OmFpyXIgQCxAS5yQb","youtube_link":"","other_link":"","energy":0.671,"danceability":0.411,"valence":0.397,"acousticness":0.0115,"instrumentalness":0,"date_released":"2016-06-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":173,"title":"擱淺","artist_id":78,"rom_title":"Ge Qian","key":5,"mode":"1","tempo":123,"duration_ms":236133,"time_signature":"4/4","language_id":2,"initialism":"gq","spotify_link":"https://open.spotify.com/track/4Rt9k4SE8dbfKzngxKJPq9","youtube_link":"","other_link":"","energy":0.49,"danceability":0.497,"valence":0.126,"acousticness":0.671,"instrumentalness":0.000417,"date_released":"2004-08-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":174,"title":"蝸牛","artist_id":78,"rom_title":"Wo Niu","key":7,"mode":"1","tempo":140,"duration_ms":238893,"time_signature":"4/4","language_id":2,"initialism":"wn","spotify_link":"https://open.spotify.com/track/0QJ00XF8jm6b0mklxG51ad","youtube_link":"","other_link":"","energy":0.441,"danceability":0.323,"valence":0.2,"acousticness":0.766,"instrumentalness":0.0000359,"date_released":"2001-12-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":175,"title":"稻香","artist_id":78,"rom_title":"Dao Xiang","key":9,"mode":"1","tempo":164,"duration_ms":223453,"time_signature":"4/4","language_id":2,"initialism":"dx","spotify_link":"https://open.spotify.com/track/6Uq8BnOxvXJsQiJ2XqfO5P","youtube_link":"","other_link":"","energy":0.626,"danceability":0.67,"valence":0.205,"acousticness":0.286,"instrumentalness":0,"date_released":"2008-11-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":176,"title":"雨下一整晚","artist_id":78,"rom_title":"Yu Xia Yi Zheng Wan","key":10,"mode":"1","tempo":80,"duration_ms":254480,"time_signature":"4/4","language_id":2,"initialism":"yxyzw","spotify_link":"https://open.spotify.com/track/1wAiIIAskptjT45tgR35ad","youtube_link":"","other_link":"","energy":0.408,"danceability":0.59,"valence":0.389,"acousticness":0.658,"instrumentalness":0,"date_released":"2010-05-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":177,"title":"聽媽媽的話","artist_id":78,"rom_title":"Ting Ma Ma De Hua","key":10,"mode":"1","tempo":93,"duration_ms":263973,"time_signature":"4/4","language_id":2,"initialism":"tmmdh","spotify_link":"https://open.spotify.com/track/0TDnUtKMOJruB90aDEMsDR","youtube_link":"","other_link":"","energy":0.64,"danceability":0.719,"valence":0.595,"acousticness":0.391,"instrumentalness":0.0000652,"date_released":"2006-09-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":178,"title":"一口氣全唸對","artist_id":78,"rom_title":"Yi Kou Qi Quan Nian Dui","key":1,"mode":"1","tempo":110,"duration_ms":158893,"time_signature":"4/4","language_id":2,"initialism":"ykqqnd","spotify_link":"https://open.spotify.com/track/0rQ0vlir4lQmdhi2gzzPqb","youtube_link":"","other_link":"","energy":0.842,"danceability":0.697,"valence":0.613,"acousticness":0.00469,"instrumentalness":0.175,"date_released":"2014-12-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":179,"title":"星晴","artist_id":78,"rom_title":"Xing Qing","key":7,"mode":"1","tempo":178,"duration_ms":256667,"time_signature":"4/4","language_id":2,"initialism":"xq","spotify_link":"https://open.spotify.com/track/4VWn7L2kONeMEQ6cAIfzXC","youtube_link":"","other_link":"","energy":0.329,"danceability":0.637,"valence":0.255,"acousticness":0.725,"instrumentalness":0.00000851,"date_released":"2000-11-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":180,"title":"天涯過客","artist_id":78,"rom_title":"Tian Ya Guo Ke","key":2,"mode":"1","tempo":98,"duration_ms":253200,"time_signature":"4/4","language_id":2,"initialism":"tygk","spotify_link":"https://open.spotify.com/track/74fuCrlf0i17CHCSEzDIV5","youtube_link":"","other_link":"","energy":0.715,"danceability":0.505,"valence":0.321,"acousticness":0.144,"instrumentalness":0.00032,"date_released":"2014-12-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":181,"title":"Mojito","artist_id":78,"rom_title":"","key":0,"mode":"1","tempo":115,"duration_ms":185008,"time_signature":"4/4","language_id":1,"initialism":"m","spotify_link":"https://open.spotify.com/track/7BYMjh3vWnHU4IFyfZdIDO","youtube_link":"","other_link":"","energy":0.595,"danceability":0.814,"valence":0.8,"acousticness":0.476,"instrumentalness":0,"date_released":"2020-06-12","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":182,"title":"半島鐵盒","artist_id":78,"rom_title":"Ban Dao Tie He","key":8,"mode":"1","tempo":130,"duration_ms":317400,"time_signature":"4/4","language_id":2,"initialism":"bdth","spotify_link":"https://open.spotify.com/track/4XjGz4IxIJ6tYk9tDIid8w","youtube_link":"","other_link":"","energy":0.439,"danceability":0.784,"valence":0.491,"acousticness":0.432,"instrumentalness":0.00000463,"date_released":"2002-07-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":183,"title":"雙截棍","artist_id":78,"rom_title":"Shuang Jie Gun","key":7,"mode":"1","tempo":101,"duration_ms":201013,"time_signature":"4/4","language_id":2,"initialism":"sjg","spotify_link":"https://open.spotify.com/track/666P7s4zrxYyQZYmFvebPc","youtube_link":"","other_link":"","energy":0.876,"danceability":0.701,"valence":0.338,"acousticness":0.0124,"instrumentalness":0,"date_released":"2001-09-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":184,"title":"印地安老斑鳩","artist_id":78,"rom_title":"Yin Di An Lao Ban Jiu","key":9,"mode":"0","tempo":94,"duration_ms":302093,"time_signature":"4/4","language_id":2,"initialism":"ydalbj","spotify_link":"https://open.spotify.com/track/7pezb4GB2qV4NIpsY4X0a4","youtube_link":"","other_link":"","energy":0.667,"danceability":0.779,"valence":0.715,"acousticness":0.145,"instrumentalness":0,"date_released":"2000-11-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":185,"title":"以父之名","artist_id":78,"rom_title":"Yi Fu Zhi Ming","key":2,"mode":"0","tempo":175,"duration_ms":342000,"time_signature":"4/4","language_id":2,"initialism":"yfzm","spotify_link":"https://open.spotify.com/track/1zxThQ8TWAQOOSn2isGPk0","youtube_link":"","other_link":"","energy":0.564,"danceability":0.432,"valence":0.398,"acousticness":0.298,"instrumentalness":0.233,"date_released":"2003-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":186,"title":"蛇 舞","artist_id":78,"rom_title":"She Wu","key":9,"mode":"1","tempo":108,"duration_ms":172760,"time_signature":"4/4","language_id":2,"initialism":"sw","spotify_link":"https://open.spotify.com/track/6S88g7dif4IwDyPibkRlPh","youtube_link":"","other_link":"","energy":0.779,"danceability":0.782,"valence":0.673,"acousticness":0.12,"instrumentalness":0.0301,"date_released":"2008-11-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":187,"title":"聽爸爸的話","artist_id":78,"rom_title":"Ting Ba Ba De Hua","key":0,"mode":"1","tempo":126,"duration_ms":263373,"time_signature":"4/4","language_id":2,"initialism":"tbbdh","spotify_link":"https://open.spotify.com/track/7AIX4Hle5cWBt3yU7Prr8y","youtube_link":"","other_link":"","energy":0.629,"danceability":0.522,"valence":0.424,"acousticness":0.0499,"instrumentalness":0.00000401,"date_released":"2014-12-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":188,"title":"超人不會飛","artist_id":78,"rom_title":"Chao Ren Bu Hui Fei","key":0,"mode":"1","tempo":156,"duration_ms":299800,"time_signature":"4/4","language_id":2,"initialism":"crbhf","spotify_link":"https://open.spotify.com/track/7qfAfl5pbXRFxSfE32e7i4","youtube_link":"","other_link":"","energy":0.363,"danceability":0.667,"valence":0.366,"acousticness":0.345,"instrumentalness":0.000738,"date_released":"2010-05-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":189,"title":"最長的電影","artist_id":78,"rom_title":"Zui Zhang De Dian Ying","key":9,"mode":"1","tempo":121,"duration_ms":235840,"time_signature":"4/4","language_id":2,"initialism":"zzddy","spotify_link":"https://open.spotify.com/track/6C9w3NKP7yKqGLBP09iEL4","youtube_link":"","other_link":"","energy":0.359,"danceability":0.533,"valence":0.165,"acousticness":0.19,"instrumentalness":0,"date_released":"2008-03-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":190,"title":"園遊會","artist_id":78,"rom_title":"Yuan You Hui","key":11,"mode":"1","tempo":122,"duration_ms":251573,"time_signature":"4/4","language_id":2,"initialism":"yyh","spotify_link":"https://open.spotify.com/track/2ZlUyEiq09jls3eyk6mjau","youtube_link":"","other_link":"","energy":0.677,"danceability":0.656,"valence":0.608,"acousticness":0.141,"instrumentalness":0.00153,"date_released":"2004-08-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":191,"title":"大笨鐘","artist_id":78,"rom_title":"Da Ben Zhong","key":4,"mode":"1","tempo":148,"duration_ms":242840,"time_signature":"4/4","language_id":2,"initialism":"dbz","spotify_link":"https://open.spotify.com/track/2hjTSnSYU25he80XAWie4y","youtube_link":"","other_link":"","energy":0.617,"danceability":0.579,"valence":0.248,"acousticness":0.0527,"instrumentalness":0.00000974,"date_released":"2012-12-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":192,"title":"等你下課","artist_id":78,"rom_title":"Deng Ni Xia Ke","key":8,"mode":"1","tempo":148,"duration_ms":270000,"time_signature":"4/4","language_id":2,"initialism":"dnxk","spotify_link":"https://open.spotify.com/track/76WthWB0v0KXUHZoAclMVV","youtube_link":"","other_link":"","energy":0.465,"danceability":0.589,"valence":0.416,"acousticness":0.477,"instrumentalness":0,"date_released":"2018-01-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":193,"title":"妳聽得到","artist_id":78,"rom_title":"Nai Ting De Dao","key":10,"mode":"1","tempo":116,"duration_ms":230480,"time_signature":"4/4","language_id":2,"initialism":"ntdd","spotify_link":"https://open.spotify.com/track/6CY0N3nZ28bBdxRNjgM3xx","youtube_link":"","other_link":"","energy":0.368,"danceability":0.718,"valence":0.224,"acousticness":0.409,"instrumentalness":0.00168,"date_released":"2003-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":194,"title":"她的睫毛","artist_id":78,"rom_title":"Ta De Jie Mao","key":9,"mode":"1","tempo":152,"duration_ms":232893,"time_signature":"4/4","language_id":2,"initialism":"tdjm","spotify_link":"https://open.spotify.com/track/1CHawaJSkwZdn3YJJXRdlh","youtube_link":"","other_link":"","energy":0.731,"danceability":0.44,"valence":0.373,"acousticness":0.0435,"instrumentalness":0.031,"date_released":"2003-07-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":195,"title":"回到過去","artist_id":78,"rom_title":"Hui Dao Guo Qu","key":11,"mode":"1","tempo":170,"duration_ms":231467,"time_signature":"4/4","language_id":2,"initialism":"hdgq","spotify_link":"https://open.spotify.com/track/7aGklaoRXNcuufJQGsly0X","youtube_link":"","other_link":"","energy":0.459,"danceability":0.52,"valence":0.187,"acousticness":0.842,"instrumentalness":0,"date_released":"2002-07-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":196,"title":"髮如雪","artist_id":78,"rom_title":"Fa Ru Xue","key":11,"mode":"1","tempo":116,"duration_ms":299627,"time_signature":"4/4","language_id":2,"initialism":"frx","spotify_link":"https://open.spotify.com/track/1jEAOrekJF0h2Rvf6mpCLd","youtube_link":"","other_link":"","energy":0.7,"danceability":0.714,"valence":0.352,"acousticness":0.565,"instrumentalness":0.0000021,"date_released":"2005-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":197,"title":"Berdua Bersama (Milly & Mamet Original Motion Picture Soundtrack)","artist_id":79,"rom_title":"","key":7,"mode":"1","tempo":90,"duration_ms":218523,"time_signature":"4/4","language_id":6,"initialism":"bb","spotify_link":"https://open.spotify.com/track/37uQDKOul7QOmRFB6kiYyO","youtube_link":"","other_link":"","energy":0.529,"danceability":0.578,"valence":0.407,"acousticness":0.673,"instrumentalness":0.00000331,"date_released":"2018-11-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":198,"title":"愛如潮水","artist_id":80,"rom_title":"Ai Ru Chao Shui","key":4,"mode":"1","tempo":134,"duration_ms":270640,"time_signature":"4/4","language_id":2,"initialism":"arcs","spotify_link":"https://open.spotify.com/track/0OOIgBn2ba6BQLInoUuZnj","youtube_link":"","other_link":"","energy":0.493,"danceability":0.564,"valence":0.243,"acousticness":0.151,"instrumentalness":0.00000113,"date_released":"2007-12-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":199,"title":"愛就一個字","artist_id":80,"rom_title":"Ai Jiu Yi Ge Zi","key":0,"mode":"1","tempo":121,"duration_ms":272380,"time_signature":"4/4","language_id":2,"initialism":"ajygz","spotify_link":"https://open.spotify.com/track/0hAmNalTo8tOdDxFekAFSQ","youtube_link":"","other_link":"","energy":0.504,"danceability":0.566,"valence":0.202,"acousticness":0.725,"instrumentalness":0,"date_released":"2001-12-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":200,"title":"一公尺","artist_id":81,"rom_title":"Yi Gong Chi","key":11,"mode":"1","tempo":133,"duration_ms":250773,"time_signature":"4/4","language_id":2,"initialism":"ygc","spotify_link":"https://open.spotify.com/track/3VhFGiJm9OKZNCexnYTG8A","youtube_link":"","other_link":"","energy":0.443,"danceability":0.466,"valence":0.27,"acousticness":0.644,"instrumentalness":0,"date_released":"2004-08-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":201,"title":"Beautiful Soul","artist_id":82,"rom_title":"","key":9,"mode":"1","tempo":90,"duration_ms":214227,"time_signature":"4/4","language_id":1,"initialism":"bs","spotify_link":"https://open.spotify.com/track/1HwpWwa6bnqqRhK8agG4RS","youtube_link":"","other_link":"","energy":0.666,"danceability":0.66,"valence":0.933,"acousticness":0.0759,"instrumentalness":0,"date_released":"2004-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":202,"title":"Valentine","artist_id":83,"rom_title":"","key":1,"mode":"1","tempo":95,"duration_ms":196267,"time_signature":"4/4","language_id":1,"initialism":"v","spotify_link":"https://open.spotify.com/track/6qWGRBzQMq6DXovBZMSE9d","youtube_link":"","other_link":"","energy":0.263,"danceability":0.521,"valence":0.184,"acousticness":0.836,"instrumentalness":0.0000262,"date_released":"1997","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":203,"title":"Voodoo Child (Slight Return)","artist_id":84,"rom_title":"","key":8,"mode":"1","tempo":176,"duration_ms":313373,"time_signature":"4/4","language_id":1,"initialism":"vc","spotify_link":"https://open.spotify.com/track/2AxCeJ6PSsBYiTckM0HLY7","youtube_link":"","other_link":"","energy":0.91,"danceability":0.214,"valence":0.447,"acousticness":0.48,"instrumentalness":0.00839,"date_released":"1968-10-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":204,"title":"越難越愛 - (劇集 \"使徒行者\" 片尾曲)","artist_id":85,"rom_title":"Yue Nan Yue Ai","key":2,"mode":"0","tempo":134,"duration_ms":237840,"time_signature":"4/4","language_id":3,"initialism":"ynya","spotify_link":"https://open.spotify.com/track/1tAx6KsKCG7q5wFa0CYaPz","youtube_link":"","other_link":"","energy":0.481,"danceability":0.701,"valence":0.333,"acousticness":0.742,"instrumentalness":0,"date_released":"2014-11-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":205,"title":"對的時間點","artist_id":86,"rom_title":"Dui De Shi Jian Dian","key":1,"mode":"0","tempo":82,"duration_ms":242613,"time_signature":"4/4","language_id":2,"initialism":"ddsjd","spotify_link":"https://open.spotify.com/track/33LJXFLqeifw9YxsVoeOgM","youtube_link":"","other_link":"","energy":0.493,"danceability":0.394,"valence":0.238,"acousticness":0.65,"instrumentalness":0,"date_released":"2019-08-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":206,"title":"將故事寫成我們","artist_id":86,"rom_title":"Jiang Gu Shi Xie Cheng Wo Men","key":8,"mode":"1","tempo":135,"duration_ms":335480,"time_signature":"4/4","language_id":2,"initialism":"jgsxcwm","spotify_link":"https://open.spotify.com/track/3Vl7IqSQsAsfScssywTDny","youtube_link":"","other_link":"","energy":0.636,"danceability":0.462,"valence":0.388,"acousticness":0.611,"instrumentalness":0,"date_released":"2019-09-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":207,"title":"發現愛","artist_id":86,"rom_title":"Fa Xian Ai","key":1,"mode":"1","tempo":82,"duration_ms":220056,"time_signature":"3/4","language_id":2,"initialism":"fxa","spotify_link":"https://open.spotify.com/track/3D0vHU0QeUsLfJk9qP0Nje","youtube_link":"","other_link":"","energy":0.512,"danceability":0.642,"valence":0.345,"acousticness":0.599,"instrumentalness":0,"date_released":"2016-01-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":208,"title":"Wonderland","artist_id":86,"rom_title":"","key":4,"mode":"0","tempo":110,"duration_ms":242449,"time_signature":"4/4","language_id":1,"initialism":"w","spotify_link":"https://open.spotify.com/track/7KsDUJvD4cQ08VB95bUH7t","youtube_link":"","other_link":"","energy":0.76,"danceability":0.614,"valence":0.152,"acousticness":0.353,"instrumentalness":0.00000136,"date_released":"2019-10-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":209,"title":"只對你說","artist_id":86,"rom_title":"Zhi Dui Ni Shuo","key":3,"mode":"1","tempo":133,"duration_ms":230040,"time_signature":"4/4","language_id":2,"initialism":"zdns","spotify_link":"https://open.spotify.com/track/7LdXhkTUDIusIlwNeWhQQe","youtube_link":"","other_link":"","energy":0.381,"danceability":0.621,"valence":0.161,"acousticness":0.912,"instrumentalness":0.000388,"date_released":"2016-01-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":210,"title":"關鍵詞","artist_id":86,"rom_title":"Guan Jian Ci","key":0,"mode":"1","tempo":136,"duration_ms":210267,"time_signature":"4/4","language_id":2,"initialism":"gjc","spotify_link":"https://open.spotify.com/track/35B0D3BnZfxl0mA3KkstVK","youtube_link":"","other_link":"","energy":0.452,"danceability":0.464,"valence":0.327,"acousticness":0.824,"instrumentalness":0,"date_released":"2015-12-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":211,"title":"曹操","artist_id":86,"rom_title":"Cao Cao","key":4,"mode":"0","tempo":144,"duration_ms":242000,"time_signature":"4/4","language_id":2,"initialism":"cc","spotify_link":"https://open.spotify.com/track/5wD5rhGxsm05FqHptqLOyd","youtube_link":"","other_link":"","energy":0.72,"danceability":0.503,"valence":0.415,"acousticness":0.00276,"instrumentalness":0,"date_released":"2006-02-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":212,"title":"豆漿油條","artist_id":86,"rom_title":"Dou Jiang You Tiao","key":7,"mode":"1","tempo":88,"duration_ms":254000,"time_signature":"4/4","language_id":2,"initialism":"djyt","spotify_link":"https://open.spotify.com/track/7vva2pL13vWP3XHKltJNJ7","youtube_link":"","other_link":"","energy":0.521,"danceability":0.748,"valence":0.759,"acousticness":0.37,"instrumentalness":0,"date_released":"2004-06-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":213,"title":"殺手","artist_id":86,"rom_title":"Sha Shou","key":9,"mode":"0","tempo":98,"duration_ms":193728,"time_signature":"4/4","language_id":2,"initialism":"ss","spotify_link":"https://open.spotify.com/track/1oK59Hgj3qZS6JysQR4SIN","youtube_link":"","other_link":"","energy":0.809,"danceability":0.702,"valence":0.44,"acousticness":0.525,"instrumentalness":0.000743,"date_released":"2016-01-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":214,"title":"害怕","artist_id":86,"rom_title":"Hai Pa","key":2,"mode":"1","tempo":87,"duration_ms":280000,"time_signature":"4/4","language_id":2,"initialism":"hp","spotify_link":"https://open.spotify.com/track/5dvZNrAzEyomqm1MzDlw7Q","youtube_link":"","other_link":"","energy":0.334,"danceability":0.303,"valence":0.25,"acousticness":0.855,"instrumentalness":0,"date_released":"2004-06-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":215,"title":"美人魚","artist_id":86,"rom_title":"Mei Ren Yu","key":9,"mode":"0","tempo":95,"duration_ms":252000,"time_signature":"4/4","language_id":2,"initialism":"mry","spotify_link":"https://open.spotify.com/track/2ahydS3UcOoAF2usK3I1ph","youtube_link":"","other_link":"","energy":0.647,"danceability":0.624,"valence":0.452,"acousticness":0.451,"instrumentalness":0,"date_released":"2004-06-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":216,"title":"偉大的渺小","artist_id":86,"rom_title":"Wei Da De Miao Xiao","key":2,"mode":"1","tempo":125,"duration_ms":277627,"time_signature":"4/4","language_id":2,"initialism":"wddmx","spotify_link":"https://open.spotify.com/track/1P2RxojrM3KEoKgM7pbc9i","youtube_link":"","other_link":"","energy":0.476,"danceability":0.465,"valence":0.162,"acousticness":0.554,"instrumentalness":0,"date_released":"2017-12-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":217,"title":"不為誰而作的歌","artist_id":86,"rom_title":"Bu Wei Shui Er Zuo De Ge","key":2,"mode":"1","tempo":145,"duration_ms":265800,"time_signature":"4/4","language_id":2,"initialism":"bwsezdg","spotify_link":"https://open.spotify.com/track/0VqSdtXseb9khdZrnYVyM1","youtube_link":"","other_link":"","energy":0.641,"danceability":0.402,"valence":0.252,"acousticness":0.534,"instrumentalness":0,"date_released":"2015-12-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":218,"title":"那些你很冒險的夢","artist_id":86,"rom_title":"Nei Xie Ni Hen Mao Xian De Meng","key":2,"mode":"1","tempo":135,"duration_ms":244470,"time_signature":"4/4","language_id":2,"initialism":"nxnhmxdm","spotify_link":"https://open.spotify.com/track/5kZDxLcbqglZ2yYXg4Mkjc","youtube_link":"","other_link":"","energy":0.487,"danceability":0.426,"valence":0.28,"acousticness":0.785,"instrumentalness":0,"date_released":"2011-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":219,"title":"會有那麼一天","artist_id":86,"rom_title":"Hui You Na Me Yi Tian","key":0,"mode":"1","tempo":133,"duration_ms":248227,"time_signature":"4/4","language_id":2,"initialism":"hynmyt","spotify_link":"https://open.spotify.com/track/6U0fWlBshjYDtaolsU9nNs","youtube_link":"","other_link":"","energy":0.342,"danceability":0.514,"valence":0.398,"acousticness":0.661,"instrumentalness":0,"date_released":"2003-04-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":220,"title":"交換餘生","artist_id":86,"rom_title":"Jiao Huan Yu Sheng","key":2,"mode":"1","tempo":130,"duration_ms":276339,"time_signature":"4/4","language_id":2,"initialism":"jhys","spotify_link":"https://open.spotify.com/track/4daA20tBusVX29bUWgd8Dw","youtube_link":"","other_link":"","energy":0.496,"danceability":0.49,"valence":0.173,"acousticness":0.0473,"instrumentalness":0.00000155,"date_released":"2020-09-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":221,"title":"心淡","artist_id":87,"rom_title":"Xin Dan","key":5,"mode":"1","tempo":126,"duration_ms":248787,"time_signature":"4/4","language_id":3,"initialism":"xd","spotify_link":"https://open.spotify.com/track/0Eum5dQqpUDgwJiUucG3QU","youtube_link":"","other_link":"","energy":0.487,"danceability":0.66,"valence":0.375,"acousticness":0.7,"instrumentalness":0,"date_released":"2003-03-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":222,"title":"For You","artist_id":88,"rom_title":"","key":0,"mode":"1","tempo":90,"duration_ms":201293,"time_signature":"4/4","language_id":1,"initialism":"fy","spotify_link":"https://open.spotify.com/track/57EyDAxErYua949EnLk9WO","youtube_link":"","other_link":"","energy":0.114,"danceability":0.27,"valence":0.437,"acousticness":0.869,"instrumentalness":0.00000291,"date_released":"1988","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":223,"title":"Stay With You","artist_id":89,"rom_title":"","key":9,"mode":"1","tempo":124,"duration_ms":228973,"time_signature":"4/4","language_id":1,"initialism":"swy","spotify_link":"https://open.spotify.com/track/0vwkXrG2ts3piPNwuHtwEK","youtube_link":"","other_link":"","energy":0.343,"danceability":0.693,"valence":0.198,"acousticness":0.57,"instrumentalness":0.0000053,"date_released":"2005-12-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":224,"title":"You & I (Nobody in the World)","artist_id":89,"rom_title":"","key":11,"mode":"0","tempo":84,"duration_ms":252653,"time_signature":"4/4","language_id":1,"initialism":"y&i","spotify_link":"https://open.spotify.com/track/55nlbqqFVnSsArIeYSQlqx","youtube_link":"","other_link":"","energy":0.342,"danceability":0.456,"valence":0.224,"acousticness":0.129,"instrumentalness":0,"date_released":"2013-08-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":225,"title":"Woman","artist_id":90,"rom_title":"","key":3,"mode":"1","tempo":80,"duration_ms":212933,"time_signature":"4/4","language_id":1,"initialism":"w","spotify_link":"https://open.spotify.com/track/0GGxVTb0UwDwdaKNjBdCn3","youtube_link":"","other_link":"","energy":0.656,"danceability":0.588,"valence":0.746,"acousticness":0.378,"instrumentalness":0.00227,"date_released":"1980-11-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":226,"title":"塵","artist_id":91,"rom_title":"Chen","key":2,"mode":"0","tempo":120,"duration_ms":281586,"time_signature":"4/4","language_id":2,"initialism":"c","spotify_link":"https://open.spotify.com/track/0W1HAvTqmfakVjEeMcrjGg","youtube_link":"","other_link":"","energy":0.324,"danceability":0.729,"valence":0.197,"acousticness":0.145,"instrumentalness":0.00562,"date_released":"2019-10-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":227,"title":"丑八怪","artist_id":91,"rom_title":"Chou Ba Guai","key":1,"mode":"1","tempo":124,"duration_ms":253127,"time_signature":"4/4","language_id":2,"initialism":"cbg","spotify_link":"https://open.spotify.com/track/749ROZZstvy0OzCMgNjnXf","youtube_link":"","other_link":"","energy":0.399,"danceability":0.569,"valence":0.287,"acousticness":0.784,"instrumentalness":0,"date_released":"2013-11-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":228,"title":"騎士精神","artist_id":92,"rom_title":"Qi Shi Jing Shen","key":2,"mode":"1","tempo":180,"duration_ms":258293,"time_signature":"4/4","language_id":2,"initialism":"qsjs","spotify_link":"https://open.spotify.com/track/503agaD18wj3zVAh062bbB","youtube_link":"","other_link":"","energy":0.8,"danceability":0.609,"valence":0.426,"acousticness":0.0935,"instrumentalness":0,"date_released":"2012-09-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":229,"title":"腦公","artist_id":92,"rom_title":"Nao Gong","key":1,"mode":"0","tempo":144,"duration_ms":172969,"time_signature":"4/4","language_id":2,"initialism":"ng","spotify_link":"https://open.spotify.com/track/50ZM3drEKbAIKDfrbRYvX8","youtube_link":"","other_link":"","energy":0.804,"danceability":0.716,"valence":0.528,"acousticness":0.103,"instrumentalness":0,"date_released":"2018-12-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":230,"title":"睜一隻眼閉一隻眼(OT: I Did It Again)","artist_id":92,"rom_title":"Zheng Yi Zhi Yan Bi Yi Zhi Yan","key":10,"mode":"0","tempo":115,"duration_ms":178707,"time_signature":"4/4","language_id":2,"initialism":"zyzybyzy","spotify_link":"https://open.spotify.com/track/4ttSrcCGJk2FlYrKfmpQRY","youtube_link":"","other_link":"","energy":0.655,"danceability":0.864,"valence":0.835,"acousticness":0.0576,"instrumentalness":0,"date_released":"2005-04-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":231,"title":"So Close - From \"Enchanted\"/Soundtrack Version","artist_id":93,"rom_title":"","key":11,"mode":"1","tempo":71,"duration_ms":226840,"time_signature":"3/4","language_id":1,"initialism":"sc","spotify_link":"https://open.spotify.com/track/3XFkhxO5jo2hBOWNzIQ9UB","youtube_link":"","other_link":"","energy":0.248,"danceability":0.386,"valence":0.161,"acousticness":0.787,"instrumentalness":0.00000149,"date_released":"2007-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":232,"title":"跟著感覺走","artist_id":94,"rom_title":"Gen Zhe Gan Jue Zou","key":0,"mode":"1","tempo":86,"duration_ms":242533,"time_signature":"4/4","language_id":2,"initialism":"gzgjz","spotify_link":"https://open.spotify.com/track/4STqicE4A9WDMY8Mr0XxQW","youtube_link":"","other_link":"","energy":0.611,"danceability":0.672,"valence":0.667,"acousticness":0.00753,"instrumentalness":0,"date_released":"2015-06-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":233,"title":"慢慢喜歡你","artist_id":95,"rom_title":"Man Man Xi Huan Ni","key":7,"mode":"1","tempo":130,"duration_ms":221447,"time_signature":"4/4","language_id":2,"initialism":"mmxhn","spotify_link":"https://open.spotify.com/track/7EoyERNueJuFlQbyrRB0US","youtube_link":"","other_link":"","energy":0.316,"danceability":0.601,"valence":0.375,"acousticness":0.876,"instrumentalness":0.0000264,"date_released":"2018-05-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":234,"title":"陰天","artist_id":95,"rom_title":"Yin Tian","key":10,"mode":"1","tempo":134,"duration_ms":242817,"time_signature":"4/4","language_id":2,"initialism":"yt","spotify_link":"https://open.spotify.com/track/3aYrODYvFONIvLXMc9VwDv","youtube_link":"","other_link":"","energy":0.52,"danceability":0.718,"valence":0.262,"acousticness":0.554,"instrumentalness":0.00000936,"date_released":"2002-03-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":235,"title":"忽然之間","artist_id":95,"rom_title":"Hu Ran Zhi Jian","key":2,"mode":"1","tempo":138,"duration_ms":199249,"time_signature":"4/4","language_id":2,"initialism":"hrzj","spotify_link":"https://open.spotify.com/track/1VY48jCBWuapKl0N5MXoJD","youtube_link":"","other_link":"","energy":0.335,"danceability":0.73,"valence":0.332,"acousticness":0.674,"instrumentalness":0,"date_released":"1999-12-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":236,"title":"Superwoman","artist_id":96,"rom_title":"","key":8,"mode":"1","tempo":138,"duration_ms":347453,"time_signature":"4/4","language_id":1,"initialism":"s","spotify_link":"https://open.spotify.com/track/3bceL3NJmM8sKwr5dyrKAz","youtube_link":"","other_link":"","energy":0.722,"danceability":0.623,"valence":0.653,"acousticness":0.322,"instrumentalness":0,"date_released":"1988-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":237,"title":"Walking On Sunshine","artist_id":97,"rom_title":"","key":10,"mode":"1","tempo":110,"duration_ms":238733,"time_signature":"4/4","language_id":1,"initialism":"wos","spotify_link":"https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0","youtube_link":"","other_link":"","energy":0.869,"danceability":0.596,"valence":0.944,"acousticness":0.0116,"instrumentalness":0.173,"date_released":"1985","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":238,"title":"Never Worn White","artist_id":98,"rom_title":"","key":2,"mode":"1","tempo":138,"duration_ms":225039,"time_signature":"4/4","language_id":1,"initialism":"nww","spotify_link":"https://open.spotify.com/track/3ksNHUNCTP6Pan8rjFnmtw","youtube_link":"","other_link":"","energy":0.359,"danceability":0.525,"valence":0.376,"acousticness":0.744,"instrumentalness":0,"date_released":"2020-03-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":239,"title":"Unconditionally","artist_id":98,"rom_title":"","key":7,"mode":"1","tempo":129,"duration_ms":228879,"time_signature":"4/4","language_id":1,"initialism":"u","spotify_link":"https://open.spotify.com/track/009ImBOrIUlWgla8U05RAC","youtube_link":"","other_link":"","energy":0.725,"danceability":0.432,"valence":0.353,"acousticness":0.00273,"instrumentalness":0,"date_released":"2013-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":240,"title":"This Is Me","artist_id":99,"rom_title":"","key":2,"mode":"1","tempo":192,"duration_ms":234707,"time_signature":"4/4","language_id":1,"initialism":"tim","spotify_link":"https://open.spotify.com/track/45aBsnKRWUzhwbcqOJLwfe","youtube_link":"","other_link":"","energy":0.704,"danceability":0.284,"valence":0.1,"acousticness":0.00583,"instrumentalness":0.000115,"date_released":"2017-12-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":241,"title":"爱. 无力","artist_id":100,"rom_title":"Ai Wu Li","key":5,"mode":"1","tempo":118,"duration_ms":264893,"time_signature":"4/4","language_id":2,"initialism":"awl","spotify_link":"https://open.spotify.com/track/1b3lrfyU2bOOarTEV0OUQZ","youtube_link":"","other_link":"","energy":0.462,"danceability":0.518,"valence":0.246,"acousticness":0.576,"instrumentalness":0,"date_released":"2006-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":242,"title":"男傭","artist_id":101,"rom_title":"Nan Yong","key":9,"mode":"1","tempo":102,"duration_ms":248253,"time_signature":"4/4","language_id":2,"initialism":"ny","spotify_link":"https://open.spotify.com/track/5sAW2cIpPwA1lwlzU7Mq65","youtube_link":"","other_link":"","energy":0.652,"danceability":0.792,"valence":0.814,"acousticness":0.222,"instrumentalness":0,"date_released":"2006-10-13","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":243,"title":"愛我吧","artist_id":102,"rom_title":"Ai Wo Ba","key":0,"mode":"1","tempo":82,"duration_ms":287040,"time_signature":"5/4","language_id":2,"initialism":"awb","spotify_link":"https://open.spotify.com/track/1v1yW5kl8e2UmR23rtBD6i","youtube_link":"","other_link":"","energy":0.249,"danceability":0.258,"valence":0.115,"acousticness":0.724,"instrumentalness":0,"date_released":"2008-12-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":244,"title":"Special Person","artist_id":102,"rom_title":"","key":11,"mode":"1","tempo":140,"duration_ms":259080,"time_signature":"4/4","language_id":1,"initialism":"sp","spotify_link":"https://open.spotify.com/track/5BrVDcUk9KMi9UbYOea9er","youtube_link":"","other_link":"","energy":0.481,"danceability":0.581,"valence":0.288,"acousticness":0.354,"instrumentalness":0,"date_released":"2016-09-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":245,"title":"公園","artist_id":102,"rom_title":"Gong Yuan","key":3,"mode":"0","tempo":98,"duration_ms":241333,"time_signature":"4/4","language_id":2,"initialism":"gy","spotify_link":"https://open.spotify.com/track/4PwPmQHXGoq8XaLTT2geLp","youtube_link":"","other_link":"","energy":0.33,"danceability":0.87,"valence":0.667,"acousticness":0.14,"instrumentalness":0.0000303,"date_released":"2013-11-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":246,"title":"三人遊","artist_id":102,"rom_title":"San Ren You","key":0,"mode":"1","tempo":128,"duration_ms":237427,"time_signature":"4/4","language_id":2,"initialism":"sry","spotify_link":"https://open.spotify.com/track/0ZkoOzNcWkxXaeWzuBFWPU","youtube_link":"","other_link":"","energy":0.389,"danceability":0.478,"valence":0.446,"acousticness":0.704,"instrumentalness":0,"date_released":"2008-12-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":247,"title":"Can't Help Falling In Love","artist_id":103,"rom_title":"","key":0,"mode":"1","tempo":121,"duration_ms":201933,"time_signature":"3/4","language_id":1,"initialism":"chfil","spotify_link":"https://open.spotify.com/track/6lfxq3CG4xtTiEg7opyCyx","youtube_link":"","other_link":"","energy":0.0596,"danceability":0.266,"valence":0.143,"acousticness":0.905,"instrumentalness":0.0000707,"date_released":"2018-08-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":248,"title":"心痛","artist_id":104,"rom_title":"Xin Tong","key":6,"mode":"1","tempo":170,"duration_ms":272773,"time_signature":"4/4","language_id":2,"initialism":"xt","spotify_link":"https://open.spotify.com/track/2oyQRPOHob1tgC98lvSGNZ","youtube_link":"","other_link":"","energy":0.388,"danceability":0.361,"valence":0.312,"acousticness":0.824,"instrumentalness":0,"date_released":"1994-11-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":249,"title":"Love Is an Open Door - From \"Frozen\"/Soundtrack Version","artist_id":105,"rom_title":"","key":6,"mode":"0","tempo":100,"duration_ms":124733,"time_signature":"4/4","language_id":1,"initialism":"liaod","spotify_link":"https://open.spotify.com/track/6PaWUdDnQsYV5bPPPOmeyr","youtube_link":"","other_link":"","energy":0.637,"danceability":0.737,"valence":0.537,"acousticness":0.262,"instrumentalness":0,"date_released":"2013-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":250,"title":"Love Is an Open Door - From \"Frozen\"/Soundtrack Version","artist_id":105,"rom_title":"","key":6,"mode":"0","tempo":100,"duration_ms":124733,"time_signature":"4/4","language_id":1,"initialism":"liaod","spotify_link":"https://open.spotify.com/track/3IPnBzGRMg6BfViFxxa0Gq","youtube_link":"","other_link":"","energy":0.637,"danceability":0.737,"valence":0.537,"acousticness":0.262,"instrumentalness":0,"date_released":"2013-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":251,"title":"Lava","artist_id":106,"rom_title":"","key":0,"mode":"1","tempo":76,"duration_ms":346493,"time_signature":"4/4","language_id":1,"initialism":"l","spotify_link":"https://open.spotify.com/track/0wqeaDeaKq14IuQESPqBEJ","youtube_link":"","other_link":"","energy":0.219,"danceability":0.522,"valence":0.422,"acousticness":0.937,"instrumentalness":0,"date_released":"2015-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":252,"title":"原來只因深愛著","artist_id":107,"rom_title":"Yuan Lai Zhi Yin Shen Ai Zhe","key":6,"mode":"0","tempo":142,"duration_ms":295355,"time_signature":"4/4","language_id":3,"initialism":"ylzysaz","spotify_link":"https://open.spotify.com/track/3byg5BtnxICWdXAcCgjJWm","youtube_link":"","other_link":"","energy":0.367,"danceability":0.5,"valence":0.373,"acousticness":0.662,"instrumentalness":0,"date_released":"2017-05-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":253,"title":"真的傻 (電影《一吻定情》追愛版主題曲)","artist_id":108,"rom_title":"Zhen De Sha","key":4,"mode":"1","tempo":150,"duration_ms":256000,"time_signature":"4/4","language_id":2,"initialism":"zds","spotify_link":"https://open.spotify.com/track/7mCr6Rn5jx04Fisvts97Z3","youtube_link":"","other_link":"","energy":0.383,"danceability":0.522,"valence":0.332,"acousticness":0.714,"instrumentalness":0.0000167,"date_released":"2019-02-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":254,"title":"Young And Beautiful","artist_id":109,"rom_title":"","key":11,"mode":"0","tempo":114,"duration_ms":236053,"time_signature":"4/4","language_id":1,"initialism":"yab","spotify_link":"https://open.spotify.com/track/2nMeu6UenVvwUktBCpLMK9","youtube_link":"","other_link":"","energy":0.416,"danceability":0.324,"valence":0.151,"acousticness":0.262,"instrumentalness":0.0000369,"date_released":"2013-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":255,"title":"傻瓜","artist_id":110,"rom_title":"Sha Gua","key":9,"mode":"1","tempo":120,"duration_ms":276093,"time_signature":"4/4","language_id":2,"initialism":"sg","spotify_link":"https://open.spotify.com/track/2Aa6nMIIqZkQOroZJgfIVH","youtube_link":"","other_link":"","energy":0.475,"danceability":0.394,"valence":0.186,"acousticness":0.553,"instrumentalness":0,"date_released":"2007-08-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":256,"title":"夏日の風","artist_id":110,"rom_title":"Xia Ri Feng","key":2,"mode":"1","tempo":114,"duration_ms":240653,"time_signature":"4/4","language_id":2,"initialism":"xrf","spotify_link":"https://open.spotify.com/track/7y1At0wJ9E11vQvD93uG9c","youtube_link":"","other_link":"","energy":0.526,"danceability":0.692,"valence":0.312,"acousticness":0.73,"instrumentalness":0,"date_released":"2004-07-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":257,"title":"你是我心内的一首歌","artist_id":111,"rom_title":"Ni Shi Wo Xin Nei De Yi Shou Ge","key":6,"mode":"1","tempo":182,"duration_ms":166693,"time_signature":"4/4","language_id":2,"initialism":"nswxndysg","spotify_link":"https://open.spotify.com/track/17N5sJg46rDPKCGj0pKhGl","youtube_link":"","other_link":"","energy":0.527,"danceability":0.538,"valence":0.595,"acousticness":0.186,"instrumentalness":0,"date_released":"2007-07-13","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":258,"title":"愛的就是你","artist_id":111,"rom_title":"Ai De Jiu Shi Ni","key":5,"mode":"1","tempo":96,"duration_ms":289067,"time_signature":"4/4","language_id":2,"initialism":"adjsn","spotify_link":"https://open.spotify.com/track/0sgBD1tldxrhnlU2pt70Us","youtube_link":"","other_link":"","energy":0.521,"danceability":0.728,"valence":0.531,"acousticness":0.218,"instrumentalness":0,"date_released":"2001-09-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":259,"title":"公轉自轉","artist_id":111,"rom_title":"Gong Zhuan Zi Zhuan","key":11,"mode":"0","tempo":78,"duration_ms":260920,"time_signature":"4/4","language_id":2,"initialism":"gzzz","spotify_link":"https://open.spotify.com/track/6HhGxPV8WL5ff02mOKRAcn","youtube_link":"","other_link":"","energy":0.523,"danceability":0.79,"valence":0.635,"acousticness":0.0924,"instrumentalness":0,"date_released":"1998-08-13","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":260,"title":"大城小愛","artist_id":111,"rom_title":"Dai Cheng Xiao Ai","key":4,"mode":"0","tempo":131,"duration_ms":224981,"time_signature":"4/4","language_id":2,"initialism":"dcxa","spotify_link":"https://open.spotify.com/track/3VsqVo7lHy1hN1CwlXlW3P","youtube_link":"","other_link":"","energy":0.515,"danceability":0.736,"valence":0.501,"acousticness":0.689,"instrumentalness":0,"date_released":"2005-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":261,"title":"你不在","artist_id":111,"rom_title":"Ni Bu Zai","key":10,"mode":"1","tempo":96,"duration_ms":273942,"time_signature":"4/4","language_id":2,"initialism":"nbz","spotify_link":"https://open.spotify.com/track/1wQWWFjRA0BxpkTCsOFqYv","youtube_link":"","other_link":"","energy":0.461,"danceability":0.481,"valence":0.339,"acousticness":0.761,"instrumentalness":0,"date_released":"2003-10-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":262,"title":"唯一","artist_id":111,"rom_title":"Wei Yi","key":3,"mode":"1","tempo":126,"duration_ms":262013,"time_signature":"4/4","language_id":2,"initialism":"wy","spotify_link":"https://open.spotify.com/track/6LLyiqMoNoex4Zu0ka4iF2","youtube_link":"","other_link":"","energy":0.45,"danceability":0.438,"valence":0.181,"acousticness":0.245,"instrumentalness":0,"date_released":"1996","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":263,"title":"愛的就是你","artist_id":111,"rom_title":"Ai De Jiu Shi Ni","key":5,"mode":"1","tempo":97,"duration_ms":284773,"time_signature":"4/4","language_id":2,"initialism":"adjsn","spotify_link":"https://open.spotify.com/track/32xNa1vbEQgzfV3GD7QrUy","youtube_link":"","other_link":"","energy":0.5,"danceability":0.749,"valence":0.571,"acousticness":0.288,"instrumentalness":0,"date_released":"2011-09-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":264,"title":"Forever Love","artist_id":111,"rom_title":"","key":9,"mode":"1","tempo":66,"duration_ms":293049,"time_signature":"4/4","language_id":1,"initialism":"fl","spotify_link":"https://open.spotify.com/track/5qDaiUM4Fe72OqnKDCwi4G","youtube_link":"","other_link":"","energy":0.385,"danceability":0.393,"valence":0.208,"acousticness":0.562,"instrumentalness":0,"date_released":"2004-12-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":265,"title":"你不知道的事","artist_id":111,"rom_title":"Ni Bu Zhi Dao De Shi","key":1,"mode":"1","tempo":87,"duration_ms":277160,"time_signature":"4/4","language_id":2,"initialism":"nbzdds","spotify_link":"https://open.spotify.com/track/6KAw9NEvkVlIhg5T0G97M8","youtube_link":"","other_link":"","energy":0.295,"danceability":0.493,"valence":0.301,"acousticness":0.494,"instrumentalness":0,"date_released":"2010-08-13","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":266,"title":"一首簡單的歌","artist_id":111,"rom_title":"Yi Shou Jian Dan De Ge","key":9,"mode":"1","tempo":75,"duration_ms":249393,"time_signature":"4/4","language_id":2,"initialism":"ysjddg","spotify_link":"https://open.spotify.com/track/1l1ZnPZDl1yxqlA3AYptFs","youtube_link":"","other_link":"","energy":0.35,"danceability":0.52,"valence":0.323,"acousticness":0.658,"instrumentalness":0.00000178,"date_released":"2004-12-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":267,"title":"Kiss Goodbye","artist_id":111,"rom_title":"","key":2,"mode":"1","tempo":123,"duration_ms":262053,"time_signature":"4/4","language_id":1,"initialism":"kg","spotify_link":"https://open.spotify.com/track/3eAYjKCSuZSt8bcCfO29di","youtube_link":"","other_link":"","energy":0.348,"danceability":0.638,"valence":0.227,"acousticness":0.543,"instrumentalness":0,"date_released":"2005-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":268,"title":"我們的歌","artist_id":111,"rom_title":"Wo Men De Ge","key":1,"mode":"1","tempo":70,"duration_ms":246320,"time_signature":"4/4","language_id":2,"initialism":"wmdg","spotify_link":"https://open.spotify.com/track/0TA2eTf6ADQMuYLB0Ciy2V","youtube_link":"","other_link":"","energy":0.421,"danceability":0.756,"valence":0.83,"acousticness":0.0275,"instrumentalness":0,"date_released":"2007-07-13","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":269,"title":"在梅邊","artist_id":111,"rom_title":"Zai Mei Bian","key":10,"mode":"0","tempo":94,"duration_ms":276822,"time_signature":"4/4","language_id":2,"initialism":"zmb","spotify_link":"https://open.spotify.com/track/0oVZF9KJ1j5LWsm04WIC1M","youtube_link":"","other_link":"","energy":0.807,"danceability":0.762,"valence":0.503,"acousticness":0.101,"instrumentalness":0,"date_released":"2005-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":270,"title":"依然愛你","artist_id":111,"rom_title":"Yi Ran Ai Ni","key":9,"mode":"1","tempo":148,"duration_ms":244600,"time_signature":"4/4","language_id":2,"initialism":"yran","spotify_link":"https://open.spotify.com/track/7qOp7uoBitD281yF5PxWAy","youtube_link":"","other_link":"","energy":0.374,"danceability":0.635,"valence":0.401,"acousticness":0.837,"instrumentalness":0,"date_released":"2011-09-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":271,"title":"花田錯","artist_id":111,"rom_title":"Hua Tian Cuo","key":6,"mode":"0","tempo":133,"duration_ms":227993,"time_signature":"4/4","language_id":2,"initialism":"htc","spotify_link":"https://open.spotify.com/track/4ySszUxJMOqz8iRDJZPvbe","youtube_link":"","other_link":"","energy":0.489,"danceability":0.717,"valence":0.734,"acousticness":0.284,"instrumentalness":0,"date_released":"2005-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":272,"title":"一个人的圣诞节","artist_id":112,"rom_title":"Yi Ge Ren De Sheng Dan Jie","key":0,"mode":"1","tempo":78,"duration_ms":320173,"time_signature":"4/4","language_id":2,"initialism":"ygrdsdj","spotify_link":"https://open.spotify.com/track/7i7k3gOMe8dmJ3vlZo9sCy","youtube_link":"","other_link":"","energy":0.427,"danceability":0.563,"valence":0.315,"acousticness":0.668,"instrumentalness":0,"date_released":"2017-12-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":273,"title":"心在跳","artist_id":113,"rom_title":"Xin Zai Tiao","key":0,"mode":"1","tempo":126,"duration_ms":220267,"time_signature":"4/4","language_id":2,"initialism":"xzt","spotify_link":"https://open.spotify.com/track/19oB50EHUCQ92bErsIlvhj","youtube_link":"","other_link":"","energy":0.304,"danceability":0.511,"valence":0.179,"acousticness":0.567,"instrumentalness":0,"date_released":"1998-06-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":274,"title":"Bleeding Love","artist_id":114,"rom_title":"","key":5,"mode":"1","tempo":104,"duration_ms":262467,"time_signature":"4/4","language_id":1,"initialism":"bl","spotify_link":"https://open.spotify.com/track/7wZUrN8oemZfsEd1CGkbXE","youtube_link":"","other_link":"","energy":0.656,"danceability":0.638,"valence":0.225,"acousticness":0.188,"instrumentalness":0,"date_released":"2007","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":275,"title":"追","artist_id":115,"rom_title":"Zhui","key":0,"mode":"1","tempo":180,"duration_ms":323760,"time_signature":"4/4","language_id":2,"initialism":"z","spotify_link":"https://open.spotify.com/track/66cBlqEs1viJJCE74CDfGB","youtube_link":"","other_link":"","energy":0.209,"danceability":0.317,"valence":0.232,"acousticness":0.735,"instrumentalness":0.000165,"date_released":"1995-07-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":276,"title":"Someone You Loved","artist_id":116,"rom_title":"","key":1,"mode":"1","tempo":110,"duration_ms":182161,"time_signature":"4/4","language_id":1,"initialism":"syl","spotify_link":"https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf","youtube_link":"","other_link":"","energy":0.405,"danceability":0.501,"valence":0.446,"acousticness":0.751,"instrumentalness":0,"date_released":"2019-05-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":277,"title":"You And Me","artist_id":117,"rom_title":"","key":7,"mode":"1","tempo":93,"duration_ms":195493,"time_signature":"3/4","language_id":1,"initialism":"yam","spotify_link":"https://open.spotify.com/track/0815caqt2Lytro5EIzMufT","youtube_link":"","other_link":"","energy":0.427,"danceability":0.459,"valence":0.354,"acousticness":0.114,"instrumentalness":0,"date_released":"2005-03-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":278,"title":"道聽途說","artist_id":118,"rom_title":"Dao Ting Tu Shuo","key":7,"mode":"1","tempo":168,"duration_ms":298965,"time_signature":"4/4","language_id":2,"initialism":"dtts","spotify_link":"https://open.spotify.com/track/2aOYD2oBsbw0ZfFm18IJvy","youtube_link":"","other_link":"","energy":0.521,"danceability":0.378,"valence":0.188,"acousticness":0.346,"instrumentalness":0,"date_released":"2016-03-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":279,"title":"Numb","artist_id":119,"rom_title":"","key":9,"mode":"1","tempo":110,"duration_ms":185587,"time_signature":"4/4","language_id":1,"initialism":"n","spotify_link":"https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h","youtube_link":"","other_link":"","energy":0.863,"danceability":0.496,"valence":0.243,"acousticness":0.0046,"instrumentalness":0,"date_released":"2003-03-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":280,"title":"Hello","artist_id":120,"rom_title":"","key":9,"mode":"0","tempo":62,"duration_ms":246933,"time_signature":"4/4","language_id":1,"initialism":"h","spotify_link":"https://open.spotify.com/track/6HMvJcdw6qLsyV1b5x29sa","youtube_link":"","other_link":"","energy":0.222,"danceability":0.424,"valence":0.0606,"acousticness":0.646,"instrumentalness":0,"date_released":"1983-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":281,"title":"Never Too Much","artist_id":121,"rom_title":"","key":2,"mode":"1","tempo":110,"duration_ms":230467,"time_signature":"4/4","language_id":1,"initialism":"ntm","spotify_link":"https://open.spotify.com/track/3nFJbZCHP4d9vduKjJLdBL","youtube_link":"","other_link":"","energy":0.586,"danceability":0.734,"valence":0.762,"acousticness":0.125,"instrumentalness":0,"date_released":"1981-07-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":282,"title":"Kau Ilhamku","artist_id":122,"rom_title":"","key":11,"mode":"1","tempo":87,"duration_ms":251000,"time_signature":"4/4","language_id":6,"initialism":"ki","spotify_link":"https://open.spotify.com/track/5M37wHTqtKN9YiAokKJXAU","youtube_link":"","other_link":"","energy":0.38,"danceability":0.792,"valence":0.672,"acousticness":0.725,"instrumentalness":0,"date_released":"2012-01-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":283,"title":"消愁","artist_id":123,"rom_title":"Xiao Chou","key":5,"mode":"0","tempo":112,"duration_ms":261347,"time_signature":"4/4","language_id":2,"initialism":"xc","spotify_link":"https://open.spotify.com/track/1eyhZf2stL2a1AXSfeKyYn","youtube_link":"","other_link":"","energy":0.384,"danceability":0.533,"valence":0.238,"acousticness":0.582,"instrumentalness":0,"date_released":"2018-07-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":284,"title":"Plastic Love","artist_id":124,"rom_title":"","key":2,"mode":"0","tempo":103,"duration_ms":294493,"time_signature":"4/4","language_id":7,"initialism":"pl","spotify_link":"https://open.spotify.com/track/7rU6Iebxzlvqy5t857bKFq","youtube_link":"","other_link":"","energy":0.875,"danceability":0.648,"valence":0.857,"acousticness":0.0747,"instrumentalness":0.0000964,"date_released":"2008-05-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":285,"title":"Uptown Funk (feat. Bruno Mars)","artist_id":125,"rom_title":"","key":0,"mode":"1","tempo":115,"duration_ms":269667,"time_signature":"4/4","language_id":1,"initialism":"uf","spotify_link":"https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS","youtube_link":"","other_link":"","energy":0.609,"danceability":0.856,"valence":0.928,"acousticness":0.00801,"instrumentalness":0.0000815,"date_released":"2015-01-12","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":286,"title":"Memories","artist_id":126,"rom_title":"","key":11,"mode":"1","tempo":91,"duration_ms":189486,"time_signature":"4/4","language_id":1,"initialism":"m","spotify_link":"https://open.spotify.com/track/2b8fOow8UzyDFAE27YhOZM","youtube_link":"","other_link":"","energy":0.32,"danceability":0.764,"valence":0.575,"acousticness":0.837,"instrumentalness":0,"date_released":"2019-09-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":287,"title":"雪人","artist_id":127,"rom_title":"Xue Ren","key":0,"mode":"1","tempo":116,"duration_ms":282333,"time_signature":"4/4","language_id":2,"initialism":"xr","spotify_link":"https://open.spotify.com/track/4yiv37jghNbGoBK4Y9l7cA","youtube_link":"","other_link":"","energy":0.307,"danceability":0.566,"valence":0.166,"acousticness":0.349,"instrumentalness":0.00000623,"date_released":"1996-12-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":288,"title":"遺憾","artist_id":128,"rom_title":"Yi Han","key":4,"mode":"1","tempo":113,"duration_ms":278307,"time_signature":"4/4","language_id":2,"initialism":"yh","spotify_link":"https://open.spotify.com/track/203DlZkfPpwlUIMecF5y7U","youtube_link":"","other_link":"","energy":0.389,"danceability":0.616,"valence":0.133,"acousticness":0.766,"instrumentalness":0.00000124,"date_released":"1999-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":289,"title":"陽光總在風雨後","artist_id":128,"rom_title":"Yang Guang Zong Zai Feng Yu Hou","key":11,"mode":"1","tempo":96,"duration_ms":303000,"time_signature":"4/4","language_id":2,"initialism":"ygzzfyh","spotify_link":"https://open.spotify.com/track/0TJEnVgfa4kKUxbtSIx5fm","youtube_link":"","other_link":"","energy":0.257,"danceability":0.694,"valence":0.378,"acousticness":0.767,"instrumentalness":0.00000208,"date_released":"1997-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":290,"title":"明知道","artist_id":128,"rom_title":"Ming Zhi Dao","key":5,"mode":"1","tempo":131,"duration_ms":258760,"time_signature":"4/4","language_id":2,"initialism":"mzd","spotify_link":"https://open.spotify.com/track/4IK2JGZTT57gnrhpQckSm4","youtube_link":"","other_link":"","energy":0.353,"danceability":0.652,"valence":0.255,"acousticness":0.743,"instrumentalness":0,"date_released":"1999-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":291,"title":"遺憾","artist_id":128,"rom_title":"Yi Han","key":4,"mode":"1","tempo":113,"duration_ms":281640,"time_signature":"4/4","language_id":2,"initialism":"yh","spotify_link":"https://open.spotify.com/track/1iDQ0rKPkk09OzBhXOltmg","youtube_link":"","other_link":"","energy":0.336,"danceability":0.634,"valence":0.0982,"acousticness":0.758,"instrumentalness":0.00000432,"date_released":"1996-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":292,"title":"終結孤單","artist_id":129,"rom_title":"Zhong Jie Gu Dan","key":0,"mode":"1","tempo":98,"duration_ms":182840,"time_signature":"4/4","language_id":2,"initialism":"zjgd","spotify_link":"https://open.spotify.com/track/2OolGzFjvnbjtiAQrjAQVZ","youtube_link":"","other_link":"","energy":0.947,"danceability":0.43,"valence":0.631,"acousticness":0.112,"instrumentalness":0,"date_released":"2000-12-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":293,"title":"溫柔","artist_id":129,"rom_title":"Wen Rou","key":7,"mode":"1","tempo":148,"duration_ms":269872,"time_signature":"4/4","language_id":2,"initialism":"wr","spotify_link":"https://open.spotify.com/track/68hCIaUPR7jv5Y62Z7daxh","youtube_link":"","other_link":"","energy":0.713,"danceability":0.499,"valence":0.419,"acousticness":0.0191,"instrumentalness":0,"date_released":"2003-04-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":294,"title":"終結孤單","artist_id":129,"rom_title":"Zhong Jie Gu Dan","key":0,"mode":"1","tempo":100,"duration_ms":189160,"time_signature":"4/4","language_id":2,"initialism":"zjgd","spotify_link":"https://open.spotify.com/track/3k5cmt6XDrwGqrGMni8xu2","youtube_link":"","other_link":"","energy":0.954,"danceability":0.518,"valence":0.786,"acousticness":0.0646,"instrumentalness":0,"date_released":"2000-07-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":295,"title":"知足","artist_id":129,"rom_title":"Zhi Zu","key":4,"mode":"1","tempo":160,"duration_ms":256693,"time_signature":"4/4","language_id":2,"initialism":"zz","spotify_link":"https://open.spotify.com/track/4YJcQNIIdAJL9yrtHKLCXh","youtube_link":"","other_link":"","energy":0.23,"danceability":0.406,"valence":0.395,"acousticness":0.88,"instrumentalness":0,"date_released":"2005-08-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":296,"title":"擁抱","artist_id":129,"rom_title":"Yong Bao","key":0,"mode":"1","tempo":120,"duration_ms":286827,"time_signature":"4/4","language_id":2,"initialism":"yb","spotify_link":"https://open.spotify.com/track/0Sx7x9VwMMzsEMulinpIHp","youtube_link":"","other_link":"","energy":0.433,"danceability":0.481,"valence":0.282,"acousticness":0.464,"instrumentalness":0,"date_released":"2013-12-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":297,"title":"擁抱","artist_id":129,"rom_title":"Yong Bao","key":11,"mode":"1","tempo":129,"duration_ms":254800,"time_signature":"4/4","language_id":2,"initialism":"yb","spotify_link":"https://open.spotify.com/track/4rDrmDk4hAsuAHOhnxLFkE","youtube_link":"","other_link":"","energy":0.323,"danceability":0.552,"valence":0.264,"acousticness":0.82,"instrumentalness":0,"date_released":"1999-07-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":298,"title":"私奔到月球","artist_id":129,"rom_title":"Si Ben Dao Yue Qiu","key":7,"mode":"1","tempo":184,"duration_ms":226787,"time_signature":"4/4","language_id":2,"initialism":"sbdyq","spotify_link":"https://open.spotify.com/track/0WzdHebEnoKHlTxq5x2e67","youtube_link":"","other_link":"","energy":0.681,"danceability":0.513,"valence":0.616,"acousticness":0.376,"instrumentalness":0,"date_released":"2007-07-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":299,"title":"友谊万岁","artist_id":130,"rom_title":"You Yi Wan Sui","key":6,"mode":"0","tempo":170,"duration_ms":231479,"time_signature":"4/4","language_id":2,"initialism":"yyws","spotify_link":"https://open.spotify.com/track/26KcFSvgvlVzLPlxyYzs1d","youtube_link":"","other_link":"","energy":0.318,"danceability":0.411,"valence":0.204,"acousticness":0.872,"instrumentalness":0,"date_released":"2019-08-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":300,"title":"You and I","artist_id":131,"rom_title":"","key":3,"mode":"1","tempo":115,"duration_ms":234867,"time_signature":"4/4","language_id":1,"initialism":"yai","spotify_link":"https://open.spotify.com/track/64KhOoOJnNvijGs74xy6vu","youtube_link":"","other_link":"","energy":0.135,"danceability":0.334,"valence":0.223,"acousticness":0.9,"instrumentalness":0.000718,"date_released":"2005-02-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":301,"title":"Black or White - Single Version","artist_id":132,"rom_title":"","key":4,"mode":"1","tempo":115,"duration_ms":202853,"time_signature":"4/4","language_id":1,"initialism":"bow","spotify_link":"https://open.spotify.com/track/2Cy7QY8HPLk925AyNAt6OG","youtube_link":"","other_link":"","energy":0.894,"danceability":0.741,"valence":0.96,"acousticness":0.0824,"instrumentalness":0.0527,"date_released":"2005-07-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":302,"title":"You Took My Heart Away","artist_id":133,"rom_title":"","key":6,"mode":"0","tempo":121,"duration_ms":272000,"time_signature":"4/4","language_id":1,"initialism":"ytmha","spotify_link":"https://open.spotify.com/track/1672fHYlRtzKjRIVIQgZaB","youtube_link":"","other_link":"","energy":0.417,"danceability":0.58,"valence":0.12,"acousticness":0.184,"instrumentalness":0,"date_released":"2014-08-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":303,"title":"約定 (Commitment)","artist_id":134,"rom_title":"Yue Ding","key":10,"mode":"1","tempo":95,"duration_ms":233267,"time_signature":"4/4","language_id":2,"initialism":"yd","spotify_link":"https://open.spotify.com/track/68UIVRkAwHjsuVS77qtEhu","youtube_link":"","other_link":"","energy":0.447,"danceability":0.524,"valence":0.278,"acousticness":0.767,"instrumentalness":0.00115,"date_released":"2006-03-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":304,"title":"Ghen","artist_id":135,"rom_title":"","key":7,"mode":"1","tempo":100,"duration_ms":247200,"time_signature":"4/4","language_id":9,"initialism":"g","spotify_link":"https://open.spotify.com/track/17vBDWGjOy99DWpoNNiB4i","youtube_link":"","other_link":"","energy":0.816,"danceability":0.679,"valence":0.501,"acousticness":0.139,"instrumentalness":0,"date_released":"2019-06-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":305,"title":"Vì Yêu Cứ Đâm Đầu","artist_id":135,"rom_title":"","key":6,"mode":"1","tempo":120,"duration_ms":231000,"time_signature":"4/4","language_id":9,"initialism":"vycđđ","spotify_link":"https://open.spotify.com/track/02Jf3KszL1FB1kG6CILEWE","youtube_link":"","other_link":"","energy":0.779,"danceability":0.77,"valence":0.775,"acousticness":0.289,"instrumentalness":0.0000387,"date_released":"2019-11-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":306,"title":"處處吻","artist_id":136,"rom_title":"Chu Chu Wen","key":1,"mode":"0","tempo":119,"duration_ms":199041,"time_signature":"4/4","language_id":2,"initialism":"ccw","spotify_link":"https://open.spotify.com/track/7scQnPn4YQGV8ZgtDNcdu5","youtube_link":"","other_link":"","energy":0.794,"danceability":0.758,"valence":0.77,"acousticness":0.364,"instrumentalness":0,"date_released":"2015-02-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":307,"title":"Sempurna","artist_id":137,"rom_title":"","key":11,"mode":"0","tempo":98,"duration_ms":228980,"time_signature":"4/4","language_id":6,"initialism":"s","spotify_link":"https://open.spotify.com/track/6WAZpfqqjXQuyb8Db0qUEB","youtube_link":"","other_link":"","energy":0.67,"danceability":0.666,"valence":0.662,"acousticness":0.0147,"instrumentalness":0,"date_released":"2018-09-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":308,"title":"Speechless (Full)","artist_id":138,"rom_title":"","key":6,"mode":"0","tempo":125,"duration_ms":208801,"time_signature":"4/4","language_id":1,"initialism":"s","spotify_link":"https://open.spotify.com/track/0XPsOSYzDJZJArevQNm2AR","youtube_link":"","other_link":"","energy":0.489,"danceability":0.474,"valence":0.23,"acousticness":0.467,"instrumentalness":0,"date_released":"2019-05-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":309,"title":"喜歡你可不可以","artist_id":139,"rom_title":"Xi Huan Ni Ke Bu Ke Yi","key":9,"mode":"1","tempo":118,"duration_ms":232373,"time_signature":"4/4","language_id":2,"initialism":"xhnkbky","spotify_link":"https://open.spotify.com/track/3RkE7nvVgEwW3C1xIswGGz","youtube_link":"","other_link":"","energy":0.827,"danceability":0.624,"valence":0.497,"acousticness":0.283,"instrumentalness":0,"date_released":"2018-11-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":310,"title":"Torn","artist_id":140,"rom_title":"","key":5,"mode":"1","tempo":96,"duration_ms":244667,"time_signature":"4/4","language_id":1,"initialism":"t","spotify_link":"https://open.spotify.com/track/1Jaah2tmN9Hv81A87KZ1MU","youtube_link":"","other_link":"","energy":0.886,"danceability":0.575,"valence":0.608,"acousticness":0.0647,"instrumentalness":0.000187,"date_released":"1997-11-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":311,"title":"Torn","artist_id":140,"rom_title":"","key":5,"mode":"1","tempo":96,"duration_ms":244813,"time_signature":"4/4","language_id":1,"initialism":"t","spotify_link":"https://open.spotify.com/track/3APayTEWiUl9Ssep4BOXR2","youtube_link":"","other_link":"","energy":0.928,"danceability":0.559,"valence":0.599,"acousticness":0.0746,"instrumentalness":0.0000556,"date_released":"2007-09-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":312,"title":"前面轉個彎","artist_id":141,"rom_title":"Qian Mian Zhuan Ge Wan","key":5,"mode":"1","tempo":96,"duration_ms":209167,"time_signature":"3/4","language_id":2,"initialism":"qmzgw","spotify_link":"https://open.spotify.com/track/0iTVIelGt3wgqTQELPeLGx","youtube_link":"","other_link":"","energy":0.177,"danceability":0.689,"valence":0.286,"acousticness":0.75,"instrumentalness":0,"date_released":"2018-12-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":313,"title":"天黑請閉眼 (feat. 邱鋒澤)","artist_id":142,"rom_title":"Tian Hei Qing Bi Yan","key":0,"mode":"1","tempo":170,"duration_ms":286832,"time_signature":"4/4","language_id":2,"initialism":"thqby","spotify_link":"https://open.spotify.com/track/0bIbgooxvBkww2ZGeu8VMR","youtube_link":"","other_link":"","energy":0.731,"danceability":0.534,"valence":0.425,"acousticness":0.28,"instrumentalness":0,"date_released":"2019-05-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":314,"title":"I Love You Will Still Sound The Same","artist_id":143,"rom_title":"","key":3,"mode":"1","tempo":114,"duration_ms":207123,"time_signature":"4/4","language_id":1,"initialism":"ilywssts","spotify_link":"https://open.spotify.com/track/6KRddNr4XlooytDWtefT7L","youtube_link":"","other_link":"","energy":0.737,"danceability":0.607,"valence":0.702,"acousticness":0.0348,"instrumentalness":0,"date_released":"2016-05-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":315,"title":"藍月","artist_id":144,"rom_title":"Lan Yue","key":4,"mode":"1","tempo":174,"duration_ms":283753,"time_signature":"4/4","language_id":2,"initialism":"ly","spotify_link":"https://open.spotify.com/track/3lXf29WynFLHPx1RgrV7iK","youtube_link":"","other_link":"","energy":0.635,"danceability":0.38,"valence":0.418,"acousticness":0.161,"instrumentalness":0.00000208,"date_released":"2016-09-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":316,"title":"如燕 (夏夜晚風音樂會)","artist_id":145,"rom_title":"Ru Yan","key":10,"mode":"1","tempo":84,"duration_ms":314707,"time_signature":"4/4","language_id":2,"initialism":"ry","spotify_link":"https://open.spotify.com/track/3EcuUJwSxlmFcROQZd0UFs","youtube_link":"","other_link":"","energy":0.263,"danceability":0.378,"valence":0.203,"acousticness":0.899,"instrumentalness":0,"date_released":"2010-08-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":317,"title":"What Makes You Beautiful","artist_id":146,"rom_title":"","key":4,"mode":"1","tempo":125,"duration_ms":199987,"time_signature":"4/4","language_id":1,"initialism":"wmyb","spotify_link":"https://open.spotify.com/track/4cluDES4hQEUhmXj6TXkSo","youtube_link":"","other_link":"","energy":0.787,"danceability":0.726,"valence":0.888,"acousticness":0.009,"instrumentalness":0,"date_released":"2012-05-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":318,"title":"Apologize","artist_id":147,"rom_title":"","key":8,"mode":"1","tempo":118,"duration_ms":208107,"time_signature":"4/4","language_id":1,"initialism":"a","spotify_link":"https://open.spotify.com/track/3UhXPxLDFKCj1ZO6mmtV0a","youtube_link":"","other_link":"","energy":0.74,"danceability":0.593,"valence":0.502,"acousticness":0.363,"instrumentalness":0.0000222,"date_released":"2007-11-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":319,"title":"Easy Lover","artist_id":148,"rom_title":"","key":1,"mode":"1","tempo":129,"duration_ms":304507,"time_signature":"4/4","language_id":1,"initialism":"el","spotify_link":"https://open.spotify.com/track/7INi4pMPG4IE0Smx5y4KVf","youtube_link":"","other_link":"","energy":0.699,"danceability":0.749,"valence":0.935,"acousticness":0.0674,"instrumentalness":0.00192,"date_released":"1985-03-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":320,"title":"太陽","artist_id":149,"rom_title":"Tai Yang","key":3,"mode":"1","tempo":124,"duration_ms":262400,"time_signature":"4/4","language_id":2,"initialism":"ty","spotify_link":"https://open.spotify.com/track/3mAc5QY56d5Zl1MbvnWybK","youtube_link":"","other_link":"","energy":0.595,"danceability":0.612,"valence":0.227,"acousticness":0.327,"instrumentalness":0,"date_released":"2018-11-02","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":321,"title":"除了愛你還能愛誰","artist_id":150,"rom_title":"Chu Le Ai Ni Hai Neng Ai Shui","key":3,"mode":"1","tempo":97,"duration_ms":276887,"time_signature":"4/4","language_id":2,"initialism":"clanhnas","spotify_link":"https://open.spotify.com/track/7liourDMJTa8kE57UPWBZ2","youtube_link":"","other_link":"","energy":0.579,"danceability":0.51,"valence":0.191,"acousticness":0.279,"instrumentalness":0,"date_released":"2016-12-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":322,"title":"外套","artist_id":150,"rom_title":"Wai Tao","key":1,"mode":"1","tempo":138,"duration_ms":259259,"time_signature":"4/4","language_id":2,"initialism":"wt","spotify_link":"https://open.spotify.com/track/4RbBN708xA9eKFRnic71VG","youtube_link":"","other_link":"","energy":0.472,"danceability":0.455,"valence":0.185,"acousticness":0.676,"instrumentalness":0,"date_released":"2016-12-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":323,"title":"That's It","artist_id":150,"rom_title":"","key":5,"mode":"1","tempo":184,"duration_ms":276467,"time_signature":"4/4","language_id":1,"initialism":"ti","spotify_link":"https://open.spotify.com/track/0MI8gHVSjtpHZch2QDk7dF","youtube_link":"","other_link":"","energy":0.554,"danceability":0.647,"valence":0.405,"acousticness":0.48,"instrumentalness":0,"date_released":"1999-12-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":324,"title":"ยิ่งกว่าเสียใจ","artist_id":151,"rom_title":"","key":11,"mode":"1","tempo":160,"duration_ms":218373,"time_signature":"4/4","language_id":10,"initialism":"ย","spotify_link":"https://open.spotify.com/track/1NbZMSZuWyfN2RSAaW0M6M","youtube_link":"","other_link":"","energy":0.548,"danceability":0.565,"valence":0.494,"acousticness":0.374,"instrumentalness":0,"date_released":"2006-02-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":325,"title":"Crazy Little Thing Called Love","artist_id":152,"rom_title":"","key":7,"mode":"1","tempo":77,"duration_ms":163342,"time_signature":"4/4","language_id":1,"initialism":"cltcl","spotify_link":"https://open.spotify.com/track/1F9NVicWfNQA5ki8WmEtk8","youtube_link":"","other_link":"","energy":0.762,"danceability":0.626,"valence":0.766,"acousticness":0.673,"instrumentalness":0.0000021,"date_released":"2018-10-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":326,"title":"在沒有你以後 (feat. 張智成)","artist_id":153,"rom_title":"Zai Mei You Ni Yi Hou","key":9,"mode":"1","tempo":132,"duration_ms":233636,"time_signature":"4/4","language_id":2,"initialism":"zmynyh","spotify_link":"https://open.spotify.com/track/3Awy4ditrQ5b3oFHi7dMBT","youtube_link":"","other_link":"","energy":0.761,"danceability":0.517,"valence":0.521,"acousticness":0.294,"instrumentalness":0,"date_released":"2017-06-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":327,"title":"Creep","artist_id":154,"rom_title":"","key":7,"mode":"1","tempo":92,"duration_ms":238640,"time_signature":"4/4","language_id":1,"initialism":"c","spotify_link":"https://open.spotify.com/track/6b2oQwSGFkzsMtQruIWm2p","youtube_link":"","other_link":"","energy":0.43,"danceability":0.515,"valence":0.104,"acousticness":0.0102,"instrumentalness":0.000141,"date_released":"1993-02-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":328,"title":"理想情人","artist_id":155,"rom_title":"Li Xiang Qing Ren","key":3,"mode":"1","tempo":67,"duration_ms":262747,"time_signature":"3/4","language_id":2,"initialism":"lxqr","spotify_link":"https://open.spotify.com/track/36nY8znTqPiL2MTCLkK0sZ","youtube_link":"","other_link":"","energy":0.448,"danceability":0.644,"valence":0.337,"acousticness":0.736,"instrumentalness":0,"date_released":"2005-09-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":329,"title":"觀眾","artist_id":155,"rom_title":"Guan Zhong","key":0,"mode":"1","tempo":116,"duration_ms":310393,"time_signature":"4/4","language_id":2,"initialism":"gz","spotify_link":"https://open.spotify.com/track/6Ag4X5HQHb8k6PKhMCKptN","youtube_link":"","other_link":"","energy":0.383,"danceability":0.594,"valence":0.208,"acousticness":0.749,"instrumentalness":0,"date_released":"2016-09-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":330,"title":"雨愛","artist_id":155,"rom_title":"Yu Ai","key":4,"mode":"1","tempo":160,"duration_ms":261560,"time_signature":"4/4","language_id":2,"initialism":"ya","spotify_link":"https://open.spotify.com/track/553GNiNqcudWfsF55RBDqz","youtube_link":"","other_link":"","energy":0.657,"danceability":0.422,"valence":0.218,"acousticness":0.214,"instrumentalness":0,"date_released":"2009-12-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":331,"title":"You've Got a Friend in Me - From \"Toy Story\"/Soundtrack Version","artist_id":156,"rom_title":"","key":3,"mode":"1","tempo":116,"duration_ms":124160,"time_signature":"4/4","language_id":1,"initialism":"ygafim","spotify_link":"https://open.spotify.com/track/2stkLJ0JNcXkIRDNF3ld6c","youtube_link":"","other_link":"","energy":0.335,"danceability":0.681,"valence":0.532,"acousticness":0.793,"instrumentalness":0.00000339,"date_released":"1995-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":332,"title":"妳是我老婆","artist_id":157,"rom_title":"Ni Shi Wo Lao Po","key":3,"mode":"1","tempo":94,"duration_ms":264067,"time_signature":"4/4","language_id":2,"initialism":"nswlp","spotify_link":"https://open.spotify.com/track/0B91QFuglvE2pjwdz32yDn","youtube_link":"","other_link":"","energy":0.871,"danceability":0.6,"valence":0.652,"acousticness":0.0755,"instrumentalness":0,"date_released":"2004-03-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":333,"title":"Together Forever","artist_id":158,"rom_title":"","key":2,"mode":"1","tempo":115,"duration_ms":205533,"time_signature":"4/4","language_id":1,"initialism":"tf","spotify_link":"https://open.spotify.com/track/76QJgXPE3oc1cnkE4PFHEn","youtube_link":"","other_link":"","energy":0.933,"danceability":0.702,"valence":0.896,"acousticness":0.0519,"instrumentalness":0.000128,"date_released":"1987-11-12","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":334,"title":"Never Gonna Give You Up","artist_id":158,"rom_title":"","key":8,"mode":"1","tempo":113,"duration_ms":213573,"time_signature":"4/4","language_id":1,"initialism":"nggyu","spotify_link":"https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC","youtube_link":"","other_link":"","energy":0.939,"danceability":0.721,"valence":0.914,"acousticness":0.115,"instrumentalness":0.0000379,"date_released":"1987-11-12","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":335,"title":"Tu Recuerdo (feat. La Mari De Chambao & Tommy Torres)","artist_id":159,"rom_title":"","key":0,"mode":"0","tempo":83,"duration_ms":247867,"time_signature":"4/4","language_id":1,"initialism":"tr","spotify_link":"https://open.spotify.com/track/61hJK3EfAd1LDk7x5OrCTc","youtube_link":"","other_link":"","energy":0.82,"danceability":0.4,"valence":0.398,"acousticness":0.502,"instrumentalness":0,"date_released":"2006-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":336,"title":"你的眼睛背叛了你的心 - 國","artist_id":160,"rom_title":"Ni De Yan Jing Bei Pan Le Ni De Xin","key":2,"mode":"1","tempo":132,"duration_ms":267507,"time_signature":"4/4","language_id":2,"initialism":"ndyjbplndx","spotify_link":"https://open.spotify.com/track/5VXAmfbRlaQe6kr48mae2z","youtube_link":"","other_link":"","energy":0.627,"danceability":0.639,"valence":0.456,"acousticness":0.211,"instrumentalness":0,"date_released":"2006","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":337,"title":"年少有為","artist_id":161,"rom_title":"Nian Shao You Wei","key":10,"mode":"1","tempo":132,"duration_ms":279147,"time_signature":"4/4","language_id":2,"initialism":"nsyw","spotify_link":"https://open.spotify.com/track/6XY80Ofqd8j0SGiEdRLwCp","youtube_link":"","other_link":"","energy":0.462,"danceability":0.518,"valence":0.289,"acousticness":0.322,"instrumentalness":0.00000313,"date_released":"2018-10-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":338,"title":"不將就 (電影\"何以笙簫默\"片尾曲)","artist_id":161,"rom_title":"Bu Jiang Jiu","key":0,"mode":"1","tempo":144,"duration_ms":312998,"time_signature":"4/4","language_id":2,"initialism":"bjj","spotify_link":"https://open.spotify.com/track/5DH8nF7aWoXXg5Sm3gjCWD","youtube_link":"","other_link":"","energy":0.456,"danceability":0.51,"valence":0.237,"acousticness":0.418,"instrumentalness":0,"date_released":"2016-01-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":339,"title":"王牌冤家","artist_id":161,"rom_title":"Wang Pai Yuan Jia","key":10,"mode":"1","tempo":76,"duration_ms":243893,"time_signature":"4/4","language_id":2,"initialism":"wpyj","spotify_link":"https://open.spotify.com/track/0fqtDqKNUgv8WkNUJOzVqZ","youtube_link":"","other_link":"","energy":0.631,"danceability":0.561,"valence":0.907,"acousticness":0.615,"instrumentalness":0.135,"date_released":"2018-10-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":340,"title":"野生動物","artist_id":161,"rom_title":"Ye Sheng Dong Wu","key":0,"mode":"0","tempo":136,"duration_ms":293795,"time_signature":"4/4","language_id":2,"initialism":"ysdw","spotify_link":"https://open.spotify.com/track/5UlBZAWrKnDxKAytl4eLR4","youtube_link":"","other_link":"","energy":0.339,"danceability":0.661,"valence":0.156,"acousticness":0.643,"instrumentalness":0.00000278,"date_released":"2016-01-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":341,"title":"麻雀","artist_id":161,"rom_title":"Ma Que","key":2,"mode":"0","tempo":85,"duration_ms":252757,"time_signature":"4/4","language_id":2,"initialism":"mq","spotify_link":"https://open.spotify.com/track/4ireSSj4s1inMsOGJjbTIm","youtube_link":"","other_link":"","energy":0.509,"danceability":0.622,"valence":0.231,"acousticness":0.617,"instrumentalness":0,"date_released":"2019-12-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":342,"title":"等著等著就老了","artist_id":161,"rom_title":"Deng Zhe Deng Zhe Jiu Lao Le","key":4,"mode":"1","tempo":140,"duration_ms":281943,"time_signature":"4/4","language_id":2,"initialism":"dzdzjll","spotify_link":"https://open.spotify.com/track/683KeMR5Hb1XWXhX9RdMKk","youtube_link":"","other_link":"","energy":0.389,"danceability":0.544,"valence":0.184,"acousticness":0.795,"instrumentalness":0.0000101,"date_released":"2020-03-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":343,"title":"我知道是你","artist_id":161,"rom_title":"Wo Zhi Dao Shi Ni","key":6,"mode":"1","tempo":126,"duration_ms":250573,"time_signature":"4/4","language_id":2,"initialism":"wzdsn","spotify_link":"https://open.spotify.com/track/0G8kXnnKAOt2KGk6E8ifj1","youtube_link":"","other_link":"","energy":0.374,"danceability":0.352,"valence":0.341,"acousticness":0.115,"instrumentalness":0.0000138,"date_released":"2018-10-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":344,"title":"流行歌曲","artist_id":161,"rom_title":"Liu Xing Ge Qu","key":4,"mode":"1","tempo":102,"duration_ms":259508,"time_signature":"4/4","language_id":2,"initialism":"lxgq","spotify_link":"https://open.spotify.com/track/5YkZrd27ujRu4HdornrqCc","youtube_link":"","other_link":"","energy":0.584,"danceability":0.759,"valence":0.383,"acousticness":0.12,"instrumentalness":0.00000148,"date_released":"2016-01-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":345,"title":"我愛你","artist_id":161,"rom_title":"Wo Ai Ni","key":6,"mode":"0","tempo":90,"duration_ms":346733,"time_signature":"4/4","language_id":2,"initialism":"wan","spotify_link":"https://open.spotify.com/track/3zBdFGMJp2SvmBWWpvKv4F","youtube_link":"","other_link":"","energy":0.324,"danceability":0.615,"valence":0.275,"acousticness":0.802,"instrumentalness":0.176,"date_released":"2020-04-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":346,"title":"歌謠","artist_id":161,"rom_title":"Ge Yao","key":7,"mode":"1","tempo":130,"duration_ms":325027,"time_signature":"4/4","language_id":2,"initialism":"gy","spotify_link":"https://open.spotify.com/track/2kSEQ0Gc0x8lKiFZehZWFI","youtube_link":"","other_link":"","energy":0.589,"danceability":0.585,"valence":0.314,"acousticness":0.629,"instrumentalness":0.218,"date_released":"2017-11-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":347,"title":"有理想","artist_id":161,"rom_title":"You Li Xiang","key":5,"mode":"0","tempo":124,"duration_ms":228719,"time_signature":"4/4","language_id":2,"initialism":"ylx","spotify_link":"https://open.spotify.com/track/0tszcRhItTZnnsPXKqz3C2","youtube_link":"","other_link":"","energy":0.743,"danceability":0.759,"valence":0.862,"acousticness":0.288,"instrumentalness":0,"date_released":"2016-01-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":348,"title":"李白","artist_id":161,"rom_title":"Li Bai","key":0,"mode":"1","tempo":115,"duration_ms":274920,"time_signature":"4/4","language_id":2,"initialism":"lb","spotify_link":"https://open.spotify.com/track/1jcW6AjFWRyfnTXwLlMMlJ","youtube_link":"","other_link":"","energy":0.543,"danceability":0.81,"valence":0.823,"acousticness":0.79,"instrumentalness":0.0000567,"date_released":"2013-09-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":349,"title":"模特","artist_id":161,"rom_title":"Mo Te","key":11,"mode":"0","tempo":130,"duration_ms":307347,"time_signature":"4/4","language_id":2,"initialism":"mt","spotify_link":"https://open.spotify.com/track/3WiPLRpAhceu2Ssjd3WtTx","youtube_link":"","other_link":"","energy":0.421,"danceability":0.684,"valence":0.382,"acousticness":0.266,"instrumentalness":0,"date_released":"2013-09-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":350,"title":"太坦白","artist_id":161,"rom_title":"Tai Tan Bai","key":1,"mode":"0","tempo":98,"duration_ms":297920,"time_signature":"4/4","language_id":2,"initialism":"ttb","spotify_link":"https://open.spotify.com/track/5bUMSEIoYKJPbGkEfc0EhJ","youtube_link":"","other_link":"","energy":0.376,"danceability":0.78,"valence":0.788,"acousticness":0.53,"instrumentalness":0.0000784,"date_released":"2013-09-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":351,"title":"我看著你的時候","artist_id":161,"rom_title":"Wo Kan Zhe Ni De Shi Hou","key":2,"mode":"1","tempo":120,"duration_ms":293405,"time_signature":"4/4","language_id":2,"initialism":"wkzndsh","spotify_link":"https://open.spotify.com/track/0eDCVsJKGbQphGjRYa03vE","youtube_link":"","other_link":"","energy":0.307,"danceability":0.707,"valence":0.341,"acousticness":0.625,"instrumentalness":0.0000469,"date_released":"2017-11-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":352,"title":"在一起嘛好不好","artist_id":161,"rom_title":"Zai Yi Qi Ma Hao Bu Hao","key":7,"mode":"1","tempo":156,"duration_ms":298842,"time_signature":"4/4","language_id":2,"initialism":"zyqmhbh","spotify_link":"https://open.spotify.com/track/37QfvQfmJb2W1ALv2dORC5","youtube_link":"","other_link":"","energy":0.696,"danceability":0.599,"valence":0.772,"acousticness":0.233,"instrumentalness":0.0000134,"date_released":"2020-06-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":353,"title":"耳朵","artist_id":161,"rom_title":"Er Duo","key":8,"mode":"1","tempo":124,"duration_ms":241267,"time_signature":"4/4","language_id":2,"initialism":"ed","spotify_link":"https://open.spotify.com/track/7B8gZQY2KaAP1Dn1fhDU67","youtube_link":"","other_link":"","energy":0.492,"danceability":0.61,"valence":0.323,"acousticness":0.617,"instrumentalness":0.00000605,"date_released":"2018-10-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":354,"title":"祝你幸福","artist_id":161,"rom_title":"Zhu Ni Xing Fu","key":2,"mode":"0","tempo":124,"duration_ms":277900,"time_signature":"4/4","language_id":2,"initialism":"znxf","spotify_link":"https://open.spotify.com/track/3YMAftWokPE60dI8QGxmhf","youtube_link":"","other_link":"","energy":0.333,"danceability":0.621,"valence":0.28,"acousticness":0.558,"instrumentalness":0.000017,"date_released":"2017-11-17","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":355,"title":"花樣年華","artist_id":161,"rom_title":"Hua Yang Nian Hua","key":4,"mode":"0","tempo":100,"duration_ms":311858,"time_signature":"3/4","language_id":2,"initialism":"hynh","spotify_link":"https://open.spotify.com/track/5WUN3dv9If1YqUDaQFvkEd","youtube_link":"","other_link":"","energy":0.405,"danceability":0.636,"valence":0.42,"acousticness":0.131,"instrumentalness":0.000581,"date_released":"2020-05-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":356,"title":"爸爸媽媽","artist_id":161,"rom_title":"Ba Ba Ma Ma","key":11,"mode":"1","tempo":102,"duration_ms":284216,"time_signature":"4/4","language_id":2,"initialism":"bbmm","spotify_link":"https://open.spotify.com/track/0w4Sf61CbM69gDD7RVmaBD","youtube_link":"","other_link":"","energy":0.507,"danceability":0.67,"valence":0.258,"acousticness":0.699,"instrumentalness":0,"date_released":"2016-01-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":357,"title":"天天想你一遍 - 《Co-Living同居時代第二回合 夏季篇》片頭曲","artist_id":162,"rom_title":"Tian Tian Xiang Ni Yi Bian","key":0,"mode":"0","tempo":82,"duration_ms":221707,"time_signature":"4/4","language_id":2,"initialism":"ttxnyb","spotify_link":"https://open.spotify.com/track/2HsfPdygiZtEB4nCL0pktu","youtube_link":"","other_link":"","energy":0.622,"danceability":0.701,"valence":0.319,"acousticness":0.371,"instrumentalness":0,"date_released":"2019-07-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":358,"title":"I Choose You","artist_id":163,"rom_title":"","key":0,"mode":"1","tempo":73,"duration_ms":341918,"time_signature":"4/4","language_id":1,"initialism":"icy","spotify_link":"https://open.spotify.com/track/3dLRK3SKATbzMd1tcAzsJz","youtube_link":"","other_link":"","energy":0.234,"danceability":0.55,"valence":0.233,"acousticness":0.941,"instrumentalness":0.00000296,"date_released":"2017-03-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":359,"title":"十七","artist_id":164,"rom_title":"Shi Qi","key":2,"mode":"1","tempo":150,"duration_ms":308693,"time_signature":"4/4","language_id":2,"initialism":"sq","spotify_link":"https://open.spotify.com/track/27aaFp7yUBdhqzJUcz9NoJ","youtube_link":"","other_link":"","energy":0.563,"danceability":0.47,"valence":0.374,"acousticness":0.137,"instrumentalness":0,"date_released":"2018-08-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":360,"title":"后来后来","artist_id":164,"rom_title":"Hou Lai Hou Lai","key":10,"mode":"1","tempo":89,"duration_ms":250093,"time_signature":"4/4","language_id":2,"initialism":"hlhl","spotify_link":"https://open.spotify.com/track/75fW4ZnO8nf7YvXoBJQqxf","youtube_link":"","other_link":"","energy":0.343,"danceability":0.561,"valence":0.272,"acousticness":0.742,"instrumentalness":0,"date_released":"2012-11-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":361,"title":"最近","artist_id":165,"rom_title":"Zui Jin","key":11,"mode":"1","tempo":114,"duration_ms":243442,"time_signature":"4/4","language_id":2,"initialism":"zj","spotify_link":"https://open.spotify.com/track/57pUHpCltt09b5w1W6m9qb","youtube_link":"","other_link":"","energy":0.432,"danceability":0.664,"valence":0.29,"acousticness":0.59,"instrumentalness":0,"date_released":"2006-06-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":362,"title":"遠走高飛","artist_id":165,"rom_title":"Yuan Zou Gao Fei","key":7,"mode":"1","tempo":104,"duration_ms":269944,"time_signature":"4/4","language_id":2,"initialism":"yzgf","spotify_link":"https://open.spotify.com/track/4n5FTbdQ8v53BhdfMjFX0W","youtube_link":"","other_link":"","energy":0.496,"danceability":0.645,"valence":0.348,"acousticness":0.549,"instrumentalness":0,"date_released":"2004-11-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":363,"title":"上弦月","artist_id":166,"rom_title":"Shang Xian Yue","key":9,"mode":"1","tempo":111,"duration_ms":234040,"time_signature":"4/4","language_id":2,"initialism":"sxy","spotify_link":"https://open.spotify.com/track/1I8beG7N2fGoKxqRt8crDP","youtube_link":"","other_link":"","energy":0.57,"danceability":0.59,"valence":0.173,"acousticness":0.655,"instrumentalness":0,"date_released":"1995-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":364,"title":"默契 (電影“百份百感覺2”主題曲)","artist_id":166,"rom_title":"Mo Qi","key":7,"mode":"1","tempo":122,"duration_ms":220720,"time_signature":"4/4","language_id":2,"initialism":"mq","spotify_link":"https://open.spotify.com/track/7KkgII3WhCQWMqRatcwegM","youtube_link":"","other_link":"","energy":0.602,"danceability":0.537,"valence":0.24,"acousticness":0.412,"instrumentalness":0,"date_released":"2003","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":365,"title":"Under the Sea - From \"The Little Mermaid\" / Soundtrack Version","artist_id":167,"rom_title":"","key":10,"mode":"1","tempo":99,"duration_ms":195147,"time_signature":"4/4","language_id":1,"initialism":"uts","spotify_link":"https://open.spotify.com/track/6oYkwjI1TKP9D0Y9II1GT7","youtube_link":"","other_link":"","energy":0.475,"danceability":0.511,"valence":0.819,"acousticness":0.708,"instrumentalness":0,"date_released":"2006-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":366,"title":"至少還有你","artist_id":168,"rom_title":"Zhi Shao Hai You Ni","key":4,"mode":"1","tempo":125,"duration_ms":274800,"time_signature":"4/4","language_id":2,"initialism":"zshyn","spotify_link":"https://open.spotify.com/track/0fGM6yMJ1swPXt5NI0GCdl","youtube_link":"","other_link":"","energy":0.542,"danceability":0.479,"valence":0.347,"acousticness":0.531,"instrumentalness":0.00000519,"date_released":"2000","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":367,"title":"聽說愛情回來過","artist_id":168,"rom_title":"Ting Shuo Ai Qing Hui Lai Guo","key":6,"mode":"1","tempo":108,"duration_ms":318493,"time_signature":"4/4","language_id":2,"initialism":"tsaqhlg","spotify_link":"https://open.spotify.com/track/19XHm4h6bghYNwIhKqAuKi","youtube_link":"","other_link":"","energy":0.472,"danceability":0.612,"valence":0.125,"acousticness":0.577,"instrumentalness":0,"date_released":"1995-01-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":368,"title":"夢醒時分","artist_id":169,"rom_title":"Meng Xing Shi Fen","key":8,"mode":"1","tempo":138,"duration_ms":248760,"time_signature":"4/4","language_id":2,"initialism":"mxsf","spotify_link":"https://open.spotify.com/track/31tZJyXMJaWBYStW7QmE5t","youtube_link":"","other_link":"","energy":0.389,"danceability":0.708,"valence":0.535,"acousticness":0.496,"instrumentalness":0,"date_released":"1989-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":369,"title":"You're Still The One","artist_id":170,"rom_title":"","key":3,"mode":"1","tempo":134,"duration_ms":212200,"time_signature":"4/4","language_id":1,"initialism":"ysto","spotify_link":"https://open.spotify.com/track/1wb4P4F0sxAQ2KXrRvsx6n","youtube_link":"","other_link":"","energy":0.494,"danceability":0.585,"valence":0.634,"acousticness":0.363,"instrumentalness":0,"date_released":"1997-11-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":370,"title":"Señorita","artist_id":171,"rom_title":"","key":9,"mode":"0","tempo":117,"duration_ms":190960,"time_signature":"4/4","language_id":1,"initialism":"s","spotify_link":"https://open.spotify.com/track/0TK2YIli7K1leLovkQiNik","youtube_link":"","other_link":"","energy":0.54,"danceability":0.759,"valence":0.75,"acousticness":0.037,"instrumentalness":0,"date_released":"2019-06-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":371,"title":"火燒的寂寞","artist_id":172,"rom_title":"Huo Shao De Ji Mo","key":7,"mode":"0","tempo":128,"duration_ms":277133,"time_signature":"4/4","language_id":2,"initialism":"hsdjm","spotify_link":"https://open.spotify.com/track/2NyEJi3UWC8JVNhFzzwu0q","youtube_link":"","other_link":"","energy":0.481,"danceability":0.484,"valence":0.141,"acousticness":0.373,"instrumentalness":0,"date_released":"2009-11-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":372,"title":"你的酒馆对我打了烊","artist_id":173,"rom_title":"Ni De Jiu Guan Dui Wo Da Le Yang","key":0,"mode":"0","tempo":168,"duration_ms":251429,"time_signature":"4/4","language_id":2,"initialism":"ndjgdwdly","spotify_link":"https://open.spotify.com/track/6BL2V0CvfW9QVHm9oU4Lmk","youtube_link":"","other_link":"","energy":0.555,"danceability":0.604,"valence":0.457,"acousticness":0.691,"instrumentalness":0,"date_released":"2019-03-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":373,"title":"有点甜","artist_id":174,"rom_title":"You Dian Tian","key":4,"mode":"1","tempo":105,"duration_ms":235201,"time_signature":"4/4","language_id":2,"initialism":"ydt","spotify_link":"https://open.spotify.com/track/1xjDvv3wvcB49iVggnn7iK","youtube_link":"","other_link":"","energy":0.586,"danceability":0.696,"valence":0.421,"acousticness":0.68,"instrumentalness":0,"date_released":"2012-06-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":374,"title":"分享","artist_id":175,"rom_title":"Fen Xiang","key":0,"mode":"1","tempo":120,"duration_ms":300293,"time_signature":"4/4","language_id":2,"initialism":"fx","spotify_link":"https://open.spotify.com/track/0QsuUbVfmbnpASerCOD0Fp","youtube_link":"","other_link":"","energy":0.174,"danceability":0.674,"valence":0.287,"acousticness":0.777,"instrumentalness":0,"date_released":"1993","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":375,"title":"Everything I Need","artist_id":176,"rom_title":"","key":2,"mode":"1","tempo":75,"duration_ms":200563,"time_signature":"4/4","language_id":1,"initialism":"ein","spotify_link":"https://open.spotify.com/track/7jKCAmjP2cAn9WxxIVR14Y","youtube_link":"","other_link":"","energy":0.224,"danceability":0.531,"valence":0.276,"acousticness":0.874,"instrumentalness":0,"date_released":"2019-07-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":376,"title":"Lạc Trôi","artist_id":177,"rom_title":"","key":9,"mode":"0","tempo":135,"duration_ms":232889,"time_signature":"4/4","language_id":1,"initialism":"lt","spotify_link":"https://open.spotify.com/track/4pWF7uyalOeveT6oansXmy","youtube_link":"","other_link":"","energy":0.873,"danceability":0.639,"valence":0.166,"acousticness":0.331,"instrumentalness":0.0326,"date_released":"2017-04-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":377,"title":"Mama","artist_id":178,"rom_title":"","key":8,"mode":"1","tempo":96,"duration_ms":304960,"time_signature":"4/4","language_id":1,"initialism":"m","spotify_link":"https://open.spotify.com/track/3dNv3OuX6ol9si6PZ9KSAh","youtube_link":"","other_link":"","energy":0.734,"danceability":0.615,"valence":0.811,"acousticness":0.345,"instrumentalness":0.543,"date_released":"1996-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":378,"title":"神奇","artist_id":179,"rom_title":"Shen Qi","key":1,"mode":"1","tempo":98,"duration_ms":262733,"time_signature":"4/4","language_id":2,"initialism":"sq","spotify_link":"https://open.spotify.com/track/5HI1AOrTGhKQcbRKkAwAhN","youtube_link":"","other_link":"","energy":0.885,"danceability":0.596,"valence":0.384,"acousticness":0.0229,"instrumentalness":0.00266,"date_released":"2006-09-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":379,"title":"雨天","artist_id":179,"rom_title":"Yu Tian","key":1,"mode":"1","tempo":116,"duration_ms":241867,"time_signature":"4/4","language_id":2,"initialism":"yt","spotify_link":"https://open.spotify.com/track/5tZbcQ5PYID0xB0VNblmrK","youtube_link":"","other_link":"","energy":0.383,"danceability":0.503,"valence":0.417,"acousticness":0.73,"instrumentalness":0,"date_released":"2006-09-21","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":380,"title":"我不難過","artist_id":179,"rom_title":"Wo Bu Nan Guo","key":3,"mode":"1","tempo":128,"duration_ms":320400,"time_signature":"4/4","language_id":2,"initialism":"wbng","spotify_link":"https://open.spotify.com/track/4XrWar13kLO1jr535AzKrQ","youtube_link":"","other_link":"","energy":0.521,"danceability":0.439,"valence":0.128,"acousticness":0.268,"instrumentalness":0,"date_released":"2003-01-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":381,"title":"Venus","artist_id":179,"rom_title":"","key":11,"mode":"0","tempo":126,"duration_ms":210840,"time_signature":"4/4","language_id":1,"initialism":"v","spotify_link":"https://open.spotify.com/track/0rRLJXJhWd8V3H0sZ6PXaY","youtube_link":"","other_link":"","energy":0.882,"danceability":0.776,"valence":0.955,"acousticness":0.0665,"instrumentalness":0.00199,"date_released":"2002-01-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":382,"title":"網獸","artist_id":180,"rom_title":"Wang Shou","key":5,"mode":"1","tempo":170,"duration_ms":250541,"time_signature":"4/4","language_id":2,"initialism":"ws","spotify_link":"https://open.spotify.com/track/4Xr5sOfBCt2AtOD8cqUPw1","youtube_link":"","other_link":"","energy":0.721,"danceability":0.556,"valence":0.186,"acousticness":0.414,"instrumentalness":0,"date_released":"2019-10-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":383,"title":"You And I","artist_id":181,"rom_title":"","key":6,"mode":"1","tempo":122,"duration_ms":278213,"time_signature":"4/4","language_id":1,"initialism":"yai","spotify_link":"https://open.spotify.com/track/647D8WS57rPpIM1AXXHpHJ","youtube_link":"","other_link":"","energy":0.164,"danceability":0.264,"valence":0.0699,"acousticness":0.921,"instrumentalness":0.00124,"date_released":"1972-10-28","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":384,"title":"Jai Ho","artist_id":182,"rom_title":"","key":7,"mode":"1","tempo":137,"duration_ms":319813,"time_signature":"4/4","language_id":1,"initialism":"jh","spotify_link":"https://open.spotify.com/track/0BlMvHfyilCmgKrNUQabR6","youtube_link":"","other_link":"","energy":0.715,"danceability":0.781,"valence":0.573,"acousticness":0.00535,"instrumentalness":0.835,"date_released":"2009-05-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":385,"title":"Personal Angel","artist_id":183,"rom_title":"","key":11,"mode":"1","tempo":130,"duration_ms":259053,"time_signature":"4/4","language_id":1,"initialism":"pa","spotify_link":"https://open.spotify.com/track/5zblxS4ZHlhsTR2LuwTwYh","youtube_link":"","other_link":"","energy":0.605,"danceability":0.572,"valence":0.18,"acousticness":0.449,"instrumentalness":0,"date_released":"2007-01-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":386,"title":"紅色高跟鞋","artist_id":184,"rom_title":"Hong Se Gao Gen Xie","key":11,"mode":"0","tempo":176,"duration_ms":206587,"time_signature":"4/4","language_id":2,"initialism":"hsggx","spotify_link":"https://open.spotify.com/track/5DSF1VTSaaAFIesJLlltuM","youtube_link":"","other_link":"","energy":0.659,"danceability":0.476,"valence":0.492,"acousticness":0.104,"instrumentalness":0,"date_released":"2009-08-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":387,"title":"空白格","artist_id":184,"rom_title":"Kong Bai Ge","key":0,"mode":"1","tempo":74,"duration_ms":252600,"time_signature":"4/4","language_id":2,"initialism":"kbg","spotify_link":"https://open.spotify.com/track/6t2Pr9rcdVzvuAFuGJt8Fb","youtube_link":"","other_link":"","energy":0.221,"danceability":0.341,"valence":0.334,"acousticness":0.956,"instrumentalness":0.0000136,"date_released":"2007-10-19","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":388,"title":"別找我麻煩","artist_id":184,"rom_title":"Bie Zhao Wo Ma Fan","key":8,"mode":"0","tempo":180,"duration_ms":248493,"time_signature":"4/4","language_id":2,"initialism":"bzwmf","spotify_link":"https://open.spotify.com/track/2u3k4qplPLgSe7T6DqLBfe","youtube_link":"","other_link":"","energy":0.482,"danceability":0.641,"valence":0.813,"acousticness":0.444,"instrumentalness":0,"date_released":"2011-11-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":389,"title":"Lover","artist_id":185,"rom_title":"","key":7,"mode":"1","tempo":69,"duration_ms":221307,"time_signature":"4/4","language_id":1,"initialism":"l","spotify_link":"https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI","youtube_link":"","other_link":"","energy":0.543,"danceability":0.359,"valence":0.453,"acousticness":0.492,"instrumentalness":0.0000158,"date_released":"2019-08-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":390,"title":"万年红","artist_id":186,"rom_title":"Wan Nian Hong","key":7,"mode":"1","tempo":98,"duration_ms":160920,"time_signature":"4/4","language_id":2,"initialism":"wnh","spotify_link":"https://open.spotify.com/track/6iLZHKSDzOF6qHCRcircjk","youtube_link":"","other_link":"","energy":0.654,"danceability":0.714,"valence":0.759,"acousticness":0.539,"instrumentalness":0,"date_released":"2012-12-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":391,"title":"夜來香","artist_id":186,"rom_title":"Ye Lai Xiang","key":8,"mode":"1","tempo":111,"duration_ms":195680,"time_signature":"4/4","language_id":2,"initialism":"ylx","spotify_link":"https://open.spotify.com/track/752PdnNZng0fotqGHSDara","youtube_link":"","other_link":"","energy":0.423,"danceability":0.533,"valence":0.648,"acousticness":0.865,"instrumentalness":0.0000329,"date_released":"2010-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":392,"title":"月亮代表我的心","artist_id":186,"rom_title":"Yue Liang Dai Biao Wo De Xin","key":1,"mode":"1","tempo":78,"duration_ms":206293,"time_signature":"4/4","language_id":2,"initialism":"yldbwdx","spotify_link":"https://open.spotify.com/track/3Srw8isgDzmYsgwDi4MtbD","youtube_link":"","other_link":"","energy":0.32,"danceability":0.447,"valence":0.349,"acousticness":0.848,"instrumentalness":0.0905,"date_released":"1983-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":393,"title":"甜蜜蜜","artist_id":186,"rom_title":"Tian Mi Mi","key":2,"mode":"1","tempo":127,"duration_ms":211840,"time_signature":"4/4","language_id":2,"initialism":"tmm","spotify_link":"https://open.spotify.com/track/2XoUbKNeEbvoI0rP3XrHGp","youtube_link":"","other_link":"","energy":0.387,"danceability":0.638,"valence":0.412,"acousticness":0.267,"instrumentalness":0.00165,"date_released":"1979-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":394,"title":"青春修煉手冊","artist_id":187,"rom_title":"Qing Chun Xiu Lian Shou Ce","key":8,"mode":"0","tempo":130,"duration_ms":263077,"time_signature":"4/4","language_id":2,"initialism":"qcxlsc","spotify_link":"https://open.spotify.com/track/7FrSronLW3WJJEVMvyRcdX","youtube_link":"","other_link":"","energy":0.92,"danceability":0.704,"valence":0.564,"acousticness":0.0435,"instrumentalness":0,"date_released":"2017-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":395,"title":"If I Die Young","artist_id":188,"rom_title":"","key":4,"mode":"1","tempo":131,"duration_ms":222773,"time_signature":"4/4","language_id":1,"initialism":"iidy","spotify_link":"https://open.spotify.com/track/4aY0tZIaboefmkBEsjAovI","youtube_link":"","other_link":"","energy":0.497,"danceability":0.606,"valence":0.362,"acousticness":0.348,"instrumentalness":0,"date_released":"2010","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":396,"title":"Something Just Like This","artist_id":189,"rom_title":"","key":11,"mode":"0","tempo":103,"duration_ms":247160,"time_signature":"4/4","language_id":1,"initialism":"sjlt","spotify_link":"https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW","youtube_link":"","other_link":"","energy":0.635,"danceability":0.617,"valence":0.446,"acousticness":0.0498,"instrumentalness":0.0000144,"date_released":"2017-04-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":397,"title":"Blinding Lights","artist_id":190,"rom_title":"","key":1,"mode":"1","tempo":171,"duration_ms":200040,"time_signature":"4/4","language_id":1,"initialism":"bl","spotify_link":"https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b","youtube_link":"","other_link":"","energy":0.73,"danceability":0.514,"valence":0.334,"acousticness":0.00146,"instrumentalness":0.0000954,"date_released":"2020-03-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":398,"title":"Party Monster","artist_id":190,"rom_title":"","key":1,"mode":"1","tempo":78,"duration_ms":249213,"time_signature":"4/4","language_id":1,"initialism":"pm","spotify_link":"https://open.spotify.com/track/4F7A0DXBrmUAkp32uenhZt","youtube_link":"","other_link":"","energy":0.63,"danceability":0.573,"valence":0.218,"acousticness":0.189,"instrumentalness":0.0000231,"date_released":"2016-11-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":399,"title":"Starboy","artist_id":190,"rom_title":"","key":7,"mode":"1","tempo":186,"duration_ms":230461,"time_signature":"4/4","language_id":1,"initialism":"s","spotify_link":"https://open.spotify.com/track/38JOdzBE9kPj5UhKtqIIqQ","youtube_link":"","other_link":"","energy":0.588,"danceability":0.676,"valence":0.484,"acousticness":0.137,"instrumentalness":0.00000847,"date_released":"2021-02-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":400,"title":"Cần Gì Hơn","artist_id":191,"rom_title":"","key":11,"mode":"1","tempo":93,"duration_ms":206890,"time_signature":"4/4","language_id":1,"initialism":"cgh","spotify_link":"https://open.spotify.com/track/4bCuBkeVRofawnFkGu05fu","youtube_link":"","other_link":"","energy":0.559,"danceability":0.711,"valence":0.68,"acousticness":0.576,"instrumentalness":0.00000589,"date_released":"2020-03-10","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":401,"title":"紅顏","artist_id":192,"rom_title":"Hong Yan","key":11,"mode":"0","tempo":120,"duration_ms":221253,"time_signature":"4/4","language_id":2,"initialism":"hy","spotify_link":"https://open.spotify.com/track/6Q7OE4tvrUOIvIDY2EC5Im","youtube_link":"","other_link":"","energy":0.583,"danceability":0.673,"valence":0.106,"acousticness":0.257,"instrumentalness":0,"date_released":"2008-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":402,"title":"你要的全拿走","artist_id":192,"rom_title":"Ni Yao De Quan Na Zou","key":4,"mode":"1","tempo":134,"duration_ms":299334,"time_signature":"4/4","language_id":2,"initialism":"nydqnz","spotify_link":"https://open.spotify.com/track/37BXaP8wCJrH0M3AdtSNyk","youtube_link":"","other_link":"","energy":0.573,"danceability":0.618,"valence":0.157,"acousticness":0.339,"instrumentalness":0,"date_released":"2018-01-23","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":403,"title":"膽小情人","artist_id":193,"rom_title":"Dan Xiao Qing Ren","key":5,"mode":"1","tempo":179,"duration_ms":236381,"time_signature":"4/4","language_id":2,"initialism":"dxqr","spotify_link":"https://open.spotify.com/track/0rZPoCGxSTMulwHqwEMgNW","youtube_link":"","other_link":"","energy":0.654,"danceability":0.264,"valence":0.388,"acousticness":0.488,"instrumentalness":0,"date_released":"2019-10-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":404,"title":"Dance Monkey","artist_id":194,"rom_title":"","key":6,"mode":"0","tempo":98,"duration_ms":209438,"time_signature":"4/4","language_id":1,"initialism":"dm","spotify_link":"https://open.spotify.com/track/5ZULALImTm80tzUbYQYM9d","youtube_link":"","other_link":"","energy":0.588,"danceability":0.824,"valence":0.513,"acousticness":0.692,"instrumentalness":0.000104,"date_released":"2019-08-29","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":405,"title":"你啊你啊 - 電視劇「用九柑仔店」插曲","artist_id":195,"rom_title":"Ni A Ni A","key":9,"mode":"1","tempo":124,"duration_ms":326227,"time_signature":"4/4","language_id":2,"initialism":"nana","spotify_link":"https://open.spotify.com/track/4nyO1azSuhT5JrETvzEahs","youtube_link":"","other_link":"","energy":0.187,"danceability":0.585,"valence":0.179,"acousticness":0.903,"instrumentalness":0,"date_released":"2016-11-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":406,"title":"讓我歡喜讓我憂","artist_id":196,"rom_title":"Rang Wo Huan Xi Rang Wo You","key":2,"mode":"1","tempo":116,"duration_ms":284360,"time_signature":"4/4","language_id":2,"initialism":"rwhxrwy","spotify_link":"https://open.spotify.com/track/6SVcrjW5tkJ6646iv3Zp22","youtube_link":"","other_link":"","energy":0.278,"danceability":0.604,"valence":0.304,"acousticness":0.638,"instrumentalness":0.000234,"date_released":"1991-12-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":407,"title":"我多喜歡你,你會知道 - 網劇《致我們單純的小美好》推廣曲","artist_id":197,"rom_title":"Wo Duo Xi Huan Ni Ni Hui Zhi Dao","key":3,"mode":"1","tempo":108,"duration_ms":199680,"time_signature":"4/4","language_id":2,"initialism":"wdxhnnhzd","spotify_link":"https://open.spotify.com/track/221FBKC22DTc7XkPIaZYOl","youtube_link":"","other_link":"","energy":0.35,"danceability":0.777,"valence":0.516,"acousticness":0.526,"instrumentalness":0,"date_released":"2017-10-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":408,"title":"有沒有","artist_id":198,"rom_title":"You Mei You","key":7,"mode":"1","tempo":76,"duration_ms":252227,"time_signature":"3/4","language_id":2,"initialism":"ymy","spotify_link":"https://open.spotify.com/track/34gdSzSmMXOSd4T0PtMzO4","youtube_link":"","other_link":"","energy":0.293,"danceability":0.526,"valence":0.213,"acousticness":0.172,"instrumentalness":0,"date_released":"2010-06-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":409,"title":"不得不愛","artist_id":199,"rom_title":"Bu De Bu Ai","key":8,"mode":"1","tempo":80,"duration_ms":281413,"time_signature":"4/4","language_id":2,"initialism":"bdba","spotify_link":"https://open.spotify.com/track/3TYzES2lL8BTPE4uudj0Hj","youtube_link":"","other_link":"","energy":0.484,"danceability":0.719,"valence":0.438,"acousticness":0.751,"instrumentalness":0,"date_released":"2005-07-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":410,"title":"挪威的森林","artist_id":200,"rom_title":"Nuo Wei De Sen Lin","key":4,"mode":"0","tempo":137,"duration_ms":391027,"time_signature":"4/4","language_id":2,"initialism":"nwdsl","spotify_link":"https://open.spotify.com/track/5KdZLYyoBP0qsjDTDP28do","youtube_link":"","other_link":"","energy":0.568,"danceability":0.672,"valence":0.622,"acousticness":0.382,"instrumentalness":0,"date_released":"1996-06-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":411,"title":"浪人情歌","artist_id":200,"rom_title":"Lang Ren Qing Ge","key":7,"mode":"0","tempo":71,"duration_ms":271333,"time_signature":"3/4","language_id":2,"initialism":"lrqg","spotify_link":"https://open.spotify.com/track/6WttjgrcxCq1CZnydPVVvt","youtube_link":"","other_link":"","energy":0.365,"danceability":0.5,"valence":0.543,"acousticness":0.63,"instrumentalness":0,"date_released":"1994-12-16","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":412,"title":"雖然我願意","artist_id":201,"rom_title":"Sui Ran Wo Yuan Yi","key":4,"mode":"1","tempo":129,"duration_ms":222533,"time_signature":"4/4","language_id":2,"initialism":"srwyy","spotify_link":"https://open.spotify.com/track/0w6Nn6YXP03IaeKfeHxbSt","youtube_link":"","other_link":"","energy":0.546,"danceability":0.54,"valence":0.205,"acousticness":0.219,"instrumentalness":0,"date_released":"2008-04-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":413,"title":"一人一半","artist_id":201,"rom_title":"Yi Ren Yi Ban","key":9,"mode":"0","tempo":113,"duration_ms":208333,"time_signature":"4/4","language_id":2,"initialism":"yryb","spotify_link":"https://open.spotify.com/track/4rqugt2KQBrOhE4f107PBl","youtube_link":"","other_link":"","energy":0.326,"danceability":0.469,"valence":0.45,"acousticness":0.854,"instrumentalness":0.0000139,"date_released":"2007-08-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":414,"title":"終於說出口","artist_id":202,"rom_title":"Zhong Yu Shuo Chu Kou","key":10,"mode":"1","tempo":136,"duration_ms":246907,"time_signature":"4/4","language_id":2,"initialism":"zysck","spotify_link":"https://open.spotify.com/track/1otTVkd8lKmRuj8qfMSxdT","youtube_link":"","other_link":"","energy":0.658,"danceability":0.463,"valence":0.25,"acousticness":0.337,"instrumentalness":0,"date_released":"2008-01-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":415,"title":"那女孩對我說","artist_id":203,"rom_title":"Na Nv Hai Dui Wo Shuo","key":0,"mode":"1","tempo":80,"duration_ms":270093,"time_signature":"4/4","language_id":2,"initialism":"nnhdws","spotify_link":"https://open.spotify.com/track/4lD40vyG33AcLiftmxQSC8","youtube_link":"","other_link":"","energy":0.51,"danceability":0.554,"valence":0.436,"acousticness":0.83,"instrumentalness":0,"date_released":"2005-05-26","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":416,"title":"Otomen","artist_id":204,"rom_title":"","key":7,"mode":"1","tempo":91,"duration_ms":235480,"time_signature":"4/4","language_id":1,"initialism":"o","spotify_link":"https://open.spotify.com/track/28TbObgGrTSyrfYl6KAnZH","youtube_link":"","other_link":"","energy":0.426,"danceability":0.738,"valence":0.475,"acousticness":0.242,"instrumentalness":0.00015,"date_released":"2019-09-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":417,"title":"說謊","artist_id":204,"rom_title":"Shuo Huang","key":10,"mode":"1","tempo":124,"duration_ms":291000,"time_signature":"4/4","language_id":2,"initialism":"sh","spotify_link":"https://open.spotify.com/track/2QFWarNeJoNIuClvWU50IU","youtube_link":"","other_link":"","energy":0.25,"danceability":0.361,"valence":0.209,"acousticness":0.881,"instrumentalness":0,"date_released":"2013-02-05","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":418,"title":"兜圈","artist_id":204,"rom_title":"Dou Quan","key":7,"mode":"1","tempo":118,"duration_ms":243733,"time_signature":"4/4","language_id":2,"initialism":"dq","spotify_link":"https://open.spotify.com/track/4GBzrfnEYWObQG2Ov4drl9","youtube_link":"","other_link":"","energy":0.366,"danceability":0.587,"valence":0.305,"acousticness":0.819,"instrumentalness":0,"date_released":"2015-11-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":419,"title":"自然醒","artist_id":204,"rom_title":"Zi Ran Xing","key":1,"mode":"1","tempo":120,"duration_ms":244507,"time_signature":"4/4","language_id":2,"initialism":"zrx","spotify_link":"https://open.spotify.com/track/2UFmnpUGfPiS2SQdgE05to","youtube_link":"","other_link":"","energy":0.777,"danceability":0.484,"valence":0.176,"acousticness":0.0108,"instrumentalness":0,"date_released":"2011-05-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":420,"title":"放手吧","artist_id":205,"rom_title":"Fang Shou Ba","key":8,"mode":"1","tempo":184,"duration_ms":285192,"time_signature":"4/4","language_id":2,"initialism":"fsb","spotify_link":"https://open.spotify.com/track/6uqS1Y4DMEJLVry3fFDOfe","youtube_link":"","other_link":"","energy":0.298,"danceability":0.467,"valence":0.346,"acousticness":0.789,"instrumentalness":0,"date_released":"2020-02-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":421,"title":"等待","artist_id":205,"rom_title":"Deng Dai","key":0,"mode":"1","tempo":105,"duration_ms":301902,"time_signature":"4/4","language_id":2,"initialism":"dd","spotify_link":"https://open.spotify.com/track/4jyvG2xtc3zHHeWtOIrfDD","youtube_link":"","other_link":"","energy":0.352,"danceability":0.56,"valence":0.316,"acousticness":0.878,"instrumentalness":0.0000125,"date_released":"2018-12-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":422,"title":"那麼剛好","artist_id":206,"rom_title":"Na Me Gang Hao","key":5,"mode":"1","tempo":180,"duration_ms":235000,"time_signature":"4/4","language_id":2,"initialism":"nmgh","spotify_link":"https://open.spotify.com/track/18Fk2zBXx9NzHmvB8ADz6e","youtube_link":"","other_link":"","energy":0.461,"danceability":0.494,"valence":0.245,"acousticness":0.427,"instrumentalness":0,"date_released":"2019-10-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":423,"title":"最愛的人傷我最深","artist_id":207,"rom_title":"Zui Ai De Ren Shang Wo Zui Shen","key":7,"mode":"1","tempo":180,"duration_ms":301093,"time_signature":"4/4","language_id":2,"initialism":"zadrswzs","spotify_link":"https://open.spotify.com/track/0uEKGvbSEjQ2cVe3PmW2df","youtube_link":"","other_link":"","energy":0.466,"danceability":0.475,"valence":0.309,"acousticness":0.349,"instrumentalness":0,"date_released":"1998-11-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":424,"title":"口是心非","artist_id":207,"rom_title":"Kou Shi Xin Fei","key":11,"mode":"0","tempo":100,"duration_ms":292493,"time_signature":"4/4","language_id":2,"initialism":"ksxf","spotify_link":"https://open.spotify.com/track/03jIhoDKiTLoojzXZQRHjV","youtube_link":"","other_link":"","energy":0.517,"danceability":0.561,"valence":0.182,"acousticness":0.115,"instrumentalness":0.0195,"date_released":"1997-10-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":425,"title":"愛我別走","artist_id":208,"rom_title":"Ai Wo Bie Zou","key":0,"mode":"1","tempo":90,"duration_ms":284467,"time_signature":"4/4","language_id":2,"initialism":"awbz","spotify_link":"https://open.spotify.com/track/2fc2vUA5H3mTAr9rQoBDKt","youtube_link":"","other_link":"","energy":0.356,"danceability":0.646,"valence":0.684,"acousticness":0.552,"instrumentalness":0.00000163,"date_released":"1998-12-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":426,"title":"自由","artist_id":208,"rom_title":"Zi You","key":6,"mode":"1","tempo":150,"duration_ms":260717,"time_signature":"4/4","language_id":2,"initialism":"zy","spotify_link":"https://open.spotify.com/track/1TuZ3BT8ba1WkGUo0ZTNCw","youtube_link":"","other_link":"","energy":0.954,"danceability":0.545,"valence":0.962,"acousticness":0.0026,"instrumentalness":0,"date_released":"2004-06-24","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":427,"title":"Semoga Bahagia - Live","artist_id":209,"rom_title":"","key":0,"mode":"1","tempo":118,"duration_ms":194368,"time_signature":"4/4","language_id":6,"initialism":"sb","spotify_link":"https://open.spotify.com/track/47obVPWeDnU6a38KKnB2I1","youtube_link":"","other_link":"","energy":0.151,"danceability":0.241,"valence":0.379,"acousticness":0.759,"instrumentalness":0.938,"date_released":"2019-08-02","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":428,"title":"无人之岛","artist_id":210,"rom_title":"Wu Ren Zhi Dao","key":5,"mode":"1","tempo":140,"duration_ms":285234,"time_signature":"4/4","language_id":2,"initialism":"wrzd","spotify_link":"https://open.spotify.com/track/2F5RaL5gh6tBFyAVudaIqs","youtube_link":"","other_link":"","energy":0.454,"danceability":0.461,"valence":0.243,"acousticness":0.391,"instrumentalness":0.00000775,"date_released":"2017-08-31","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":429,"title":"飞鸟和蝉","artist_id":210,"rom_title":"Fei Niao He Chan","key":10,"mode":"1","tempo":148,"duration_ms":296007,"time_signature":"4/4","language_id":2,"initialism":"fnhc","spotify_link":"https://open.spotify.com/track/0O7O4sssbFxoNoB4QRGra1","youtube_link":"","other_link":"","energy":0.563,"danceability":0.565,"valence":0.319,"acousticness":0.741,"instrumentalness":0,"date_released":"2020-07-03","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":430,"title":"一百萬個可能","artist_id":211,"rom_title":"Yi Bai Wan Ge Ke Neng","key":2,"mode":"1","tempo":110,"duration_ms":275453,"time_signature":"4/4","language_id":2,"initialism":"ybwgkn","spotify_link":"https://open.spotify.com/track/2HmRjsswgcKVjIhM8LzKrg","youtube_link":"","other_link":"","energy":0.593,"danceability":0.571,"valence":0.144,"acousticness":0.391,"instrumentalness":0,"date_released":"2014-11-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":431,"title":"没有你陪伴我真的好孤单","artist_id":212,"rom_title":"Mei You Ni Pei Ban Wo Zhen De Hao Gu Dan","key":0,"mode":"0","tempo":83,"duration_ms":289608,"time_signature":"4/4","language_id":2,"initialism":"mynpbwzdhgd","spotify_link":"https://open.spotify.com/track/0z40FQFfw0Nnp8rKrv9T8o","youtube_link":"","other_link":"","energy":0.629,"danceability":0.585,"valence":0.356,"acousticness":0.139,"instrumentalness":0,"date_released":"2017-04-15","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":432,"title":"心跳的證明 - 電影《一吻定情》心動版主題曲","artist_id":213,"rom_title":"Xin Tiao De Zheng Ming","key":5,"mode":"1","tempo":174,"duration_ms":230591,"time_signature":"4/4","language_id":2,"initialism":"xtdzm","spotify_link":"https://open.spotify.com/track/72f9WiINVWeJjtkwDKbZUU","youtube_link":"","other_link":"","energy":0.563,"danceability":0.46,"valence":0.268,"acousticness":0.266,"instrumentalness":0.00036,"date_released":"2019-02-18","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":433,"title":"起風了","artist_id":214,"rom_title":"Qi Feng Le","key":3,"mode":"1","tempo":74,"duration_ms":313565,"time_signature":"4/4","language_id":2,"initialism":"qfl","spotify_link":"https://open.spotify.com/track/5Mm2tDgfdyaXhR3WqQykrf","youtube_link":"","other_link":"","energy":0.396,"danceability":0.548,"valence":0.501,"acousticness":0.484,"instrumentalness":0,"date_released":"2019-08-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":434,"title":"野狼Disco","artist_id":215,"rom_title":"Ye Lang","key":1,"mode":"0","tempo":98,"duration_ms":239256,"time_signature":"4/4","language_id":2,"initialism":"yl","spotify_link":"https://open.spotify.com/track/2Zc5d8BN5DEwTcv9JpZqz9","youtube_link":"","other_link":"","energy":0.839,"danceability":0.779,"valence":0.693,"acousticness":0.56,"instrumentalness":0,"date_released":"2019-09-02","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":435,"title":"邂逅","artist_id":216,"rom_title":"Xie Hou","key":10,"mode":"1","tempo":83,"duration_ms":223013,"time_signature":"4/4","language_id":2,"initialism":"xh","spotify_link":"https://open.spotify.com/track/6MR0kZkaunUwy5fwHY1BF1","youtube_link":"","other_link":"","energy":0.398,"danceability":0.464,"valence":0.274,"acousticness":0.85,"instrumentalness":0.741,"date_released":"2011-07-25","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":436,"title":"早安老师","artist_id":217,"rom_title":"Zao An Lao Shi","key":3,"mode":"1","tempo":129,"duration_ms":117000,"time_signature":"4/4","language_id":2,"initialism":"zals","spotify_link":"https://open.spotify.com/track/57NUEt7wTbUbEUu5gex4Yz","youtube_link":"","other_link":"","energy":0.508,"danceability":0.644,"valence":0.683,"acousticness":0.582,"instrumentalness":0,"date_released":"2013-08-09","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":437,"title":"一個人生活 - 2012幸福蛻變版","artist_id":218,"rom_title":"Yi Ge Ren Sheng Huo","key":3,"mode":"1","tempo":100,"duration_ms":285137,"time_signature":"4/4","language_id":2,"initialism":"ygrsh","spotify_link":"https://open.spotify.com/track/5Hi3Xlpda9VnUUIgfVZAPp","youtube_link":"","other_link":"","energy":0.44,"danceability":0.644,"valence":0.226,"acousticness":0.839,"instrumentalness":0.00000193,"date_released":"2012-08-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":438,"title":"细水长流","artist_id":219,"rom_title":"Xi Shui Chang Liu","key":2,"mode":"1","tempo":92,"duration_ms":196347,"time_signature":"4/4","language_id":2,"initialism":"xscl","spotify_link":"https://open.spotify.com/track/3eKy1CcALlf7XfvzBcWGne","youtube_link":"","other_link":"","energy":0.405,"danceability":0.524,"valence":0.524,"acousticness":0.844,"instrumentalness":0,"date_released":"2007-08-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":439,"title":"少年","artist_id":220,"rom_title":"Shao Nian","key":1,"mode":"0","tempo":90,"duration_ms":236115,"time_signature":"4/4","language_id":2,"initialism":"sn","spotify_link":"https://open.spotify.com/track/10sAUW12kTg7bMs1XKnmTi","youtube_link":"","other_link":"","energy":0.805,"danceability":0.706,"valence":0.502,"acousticness":0.401,"instrumentalness":0,"date_released":"2019-11-14","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":440,"title":"勇气","artist_id":221,"rom_title":"Yong Qi","key":4,"mode":"1","tempo":140,"duration_ms":241711,"time_signature":"4/4","language_id":2,"initialism":"yq","spotify_link":"https://open.spotify.com/track/5rY7xc2h5Imj6iFn97h8Qj","youtube_link":"","other_link":"","energy":0.421,"danceability":0.545,"valence":0.161,"acousticness":0.5,"instrumentalness":0,"date_released":"2020-03-22","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":441,"title":"相思風雨中 - 電視劇「出位江湖」插曲","artist_id":222,"rom_title":"Xiang Si Feng Yu Zhong","key":11,"mode":"0","tempo":160,"duration_ms":252600,"time_signature":"4/4","language_id":3,"initialism":"xsfyz","spotify_link":"https://open.spotify.com/track/7hy3flRwOGhxa2YJKbgjPl","youtube_link":"","other_link":"","energy":0.195,"danceability":0.371,"valence":0.119,"acousticness":0.839,"instrumentalness":0.000727,"date_released":"1992-01-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":442,"title":"像魚","artist_id":223,"rom_title":"Xiang Yu","key":11,"mode":"1","tempo":140,"duration_ms":285272,"time_signature":"4/4","language_id":2,"initialism":"xy","spotify_link":"https://open.spotify.com/track/1MRRjWwqBUyoD9dC11sZ4S","youtube_link":"","other_link":"","energy":0.395,"danceability":0.639,"valence":0.158,"acousticness":0.816,"instrumentalness":0.00000135,"date_released":"2018-12-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":443,"title":"善变","artist_id":224,"rom_title":"Shan Bian","key":2,"mode":"1","tempo":174,"duration_ms":256552,"time_signature":"4/4","language_id":2,"initialism":"sb","spotify_link":"https://open.spotify.com/track/06B9w0ykvQbj61BCRViQo9","youtube_link":"","other_link":"","energy":0.453,"danceability":0.291,"valence":0.178,"acousticness":0.552,"instrumentalness":0,"date_released":"2020-09-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":444,"title":"后来遇见他","artist_id":225,"rom_title":"Hou Lai Yu Jian Ta","key":6,"mode":"1","tempo":128,"duration_ms":249751,"time_signature":"4/4","language_id":2,"initialism":"hlyjt","spotify_link":"https://open.spotify.com/track/2yuslFGCZXjdFLfQACMeiZ","youtube_link":"","other_link":"","energy":0.404,"danceability":0.579,"valence":0.249,"acousticness":0.75,"instrumentalness":0,"date_released":"2020-03-20","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":445,"title":"雅俗共賞","artist_id":226,"rom_title":"Ya Su Gong Shang","key":1,"mode":"1","tempo":138,"duration_ms":249622,"time_signature":"4/4","language_id":2,"initialism":"ysgs","spotify_link":"https://open.spotify.com/track/4LI8FLUIH6VJ7dE4wWEjVY","youtube_link":"","other_link":"","energy":0.458,"danceability":0.661,"valence":0.448,"acousticness":0.325,"instrumentalness":0,"date_released":"2016-06-27","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":446,"title":"幻聽","artist_id":226,"rom_title":"Huan Ting","key":1,"mode":"1","tempo":118,"duration_ms":273255,"time_signature":"4/4","language_id":2,"initialism":"ht","spotify_link":"https://open.spotify.com/track/6ldGMSejZIGokqYSzgJIP5","youtube_link":"","other_link":"","energy":0.41,"danceability":0.783,"valence":0.29,"acousticness":0.652,"instrumentalness":0.0000174,"date_released":"2012-07-02","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":447,"title":"有何不可","artist_id":226,"rom_title":"You He Bu Ke","key":6,"mode":"1","tempo":202,"duration_ms":240027,"time_signature":"4/4","language_id":2,"initialism":"yhbk","spotify_link":"https://open.spotify.com/track/5rXBmcYNJYMYdhwxlMLh0s","youtube_link":"","other_link":"","energy":0.521,"danceability":0.549,"valence":0.771,"acousticness":0.472,"instrumentalness":0.00000196,"date_released":"2008-12-30","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":448,"title":"最浪漫的事","artist_id":227,"rom_title":"Zui Lang Man De Shi","key":0,"mode":"1","tempo":112,"duration_ms":266493,"time_signature":"4/4","language_id":2,"initialism":"zlmds","spotify_link":"https://open.spotify.com/track/5E5iiAjLdZ6aAoV6oXluQO","youtube_link":"","other_link":"","energy":0.317,"danceability":0.551,"valence":0.427,"acousticness":0.703,"instrumentalness":0,"date_released":"1994-06-04","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":449,"title":"夢一場","artist_id":228,"rom_title":"Meng Yi Chang","key":2,"mode":"1","tempo":211,"duration_ms":232333,"time_signature":"4/4","language_id":2,"initialism":"myc","spotify_link":"https://open.spotify.com/track/5EIfRhrHwSCa4rhA4jXyES","youtube_link":"","other_link":"","energy":0.2,"danceability":0.431,"valence":0.309,"acousticness":0.787,"instrumentalness":0,"date_released":"1999-07-07","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":450,"title":"你的答案","artist_id":229,"rom_title":"Ni De Da An","key":3,"mode":"1","tempo":176,"duration_ms":219874,"time_signature":"4/4","language_id":2,"initialism":"ndda","spotify_link":"https://open.spotify.com/track/4QWSICaQ6LGmcS8qX9lNVh","youtube_link":"","other_link":"","energy":0.475,"danceability":0.458,"valence":0.211,"acousticness":0.618,"instrumentalness":0,"date_released":"2019-11-06","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":451,"title":"过客","artist_id":230,"rom_title":"Guo Ke","key":4,"mode":"1","tempo":208,"duration_ms":270000,"time_signature":"4/4","language_id":2,"initialism":"gk","spotify_link":"https://open.spotify.com/track/1nfg7drkoCccY1qKr8CDpA","youtube_link":"","other_link":"","energy":0.625,"danceability":0.537,"valence":0.41,"acousticness":0.585,"instrumentalness":0,"date_released":"2016-12-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":452,"title":"有夢可待 - 幕後之王片頭曲","artist_id":231,"rom_title":"You Meng Ke Dai","key":11,"mode":"1","tempo":100,"duration_ms":230356,"time_signature":"4/4","language_id":2,"initialism":"ymkd","spotify_link":"https://open.spotify.com/track/2GoAf90NepiKuH6478Lct2","youtube_link":"","other_link":"","energy":0.803,"danceability":0.697,"valence":0.597,"acousticness":0.354,"instrumentalness":0,"date_released":"2019-11-11","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":453,"title":"無名之輩 (電視劇《親愛的, 熱愛的》主題曲)","artist_id":232,"rom_title":"Wu Ming Zhi Bei","key":1,"mode":"1","tempo":85,"duration_ms":262588,"time_signature":"4/4","language_id":2,"initialism":"wmzb","spotify_link":"https://open.spotify.com/track/4t6xJufZtFgVb0fbjCnWNv","youtube_link":"","other_link":"","energy":0.552,"danceability":0.51,"valence":0.301,"acousticness":0.232,"instrumentalness":0,"date_released":"2019-07-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":454,"title":"月色同行","artist_id":233,"rom_title":"Yue Se Tong Hang","key":9,"mode":"1","tempo":65,"duration_ms":240840,"time_signature":"3/4","language_id":2,"initialism":"ysth","spotify_link":"https://open.spotify.com/track/4Futk4Lv4hXfCjCUd4Xj8Y","youtube_link":"","other_link":"","energy":0.234,"danceability":0.235,"valence":0.214,"acousticness":0.927,"instrumentalness":0.0000277,"date_released":"1996-06-01","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":455,"title":"你的倒影","artist_id":233,"rom_title":"Ni De Dao Ying","key":5,"mode":"1","tempo":63,"duration_ms":209733,"time_signature":"3/4","language_id":2,"initialism":"nddy","spotify_link":"https://open.spotify.com/track/0uPMdXlUbgw6fgxBCJA4ol","youtube_link":"","other_link":"","energy":0.257,"danceability":0.392,"valence":0.182,"acousticness":0.817,"instrumentalness":0.0000389,"date_released":"2007-08-08","verified": false,"created_at": new Date(),"updated_at": new Date()  },
    {
        "id":456,"title":"野人的夢","artist_id":234,"rom_title":"Ye Ren De Meng","key":10,"mode":"1","tempo":128,"duration_ms":182518,"time_signature":"4/4","language_id":2,"initialism":"yrdm","spotify_link":"https://open.spotify.com/track/05i9THGDREuG9kHxvBvGwQ","youtube_link":"","other_link":"","energy":0.794,"danceability":0.725,"valence":0.684,"acousticness":0.527,"instrumentalness":0,"date_released":"2013-12-29","verified": false,"created_at": new Date(),"updated_at": new Date()  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('musicians',[
          {
              "id": 1,
              "name": "",
              "rom_name": "",
              "en_name": "A Niu"
          },
          {
              "id": 2,
              "name": "",
              "rom_name": "",
              "en_name": "A Si"
          },
          {
              "id": 3,
              "name": "",
              "rom_name": "",
              "en_name": "A-do"
          },
          {
              "id": 4,
              "name": "",
              "rom_name": "",
              "en_name": "A-Lin"
          },
          {
              "id": 5,
              "name": "",
              "rom_name": "",
              "en_name": "A-Mei Chang"
          },
          {
              "id": 6,
              "name": "",
              "rom_name": "",
              "en_name": "A.R. Rahman"
          },
          {
              "id": 7,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 8,
              "name": "",
              "rom_name": "",
              "en_name": "Abin Fang"
          },
          {
              "id": 9,
              "name": "",
              "rom_name": "",
              "en_name": "Ada Zhuang"
          },
          {
              "id": 10,
              "name": "",
              "rom_name": "",
              "en_name": "AGA"
          },
          {
              "id": 11,
              "name": "",
              "rom_name": "",
              "en_name": "Akina Nakamori"
          },
          {
              "id": 12,
              "name": "",
              "rom_name": "",
              "en_name": "Alex To"
          },
          {
              "id": 13,
              "name": "",
              "rom_name": "",
              "en_name": "Alien Huang"
          },
          {
              "id": 14,
              "name": "",
              "rom_name": "",
              "en_name": "Andy Hui"
          },
          {
              "id": 15,
              "name": "",
              "rom_name": "",
              "en_name": "Andy Lau"
          },
          {
              "id": 16,
              "name": "",
              "rom_name": "",
              "en_name": "Ariana Grande"
          },
          {
              "id": 17,
              "name": "",
              "rom_name": "",
              "en_name": "Bananarama"
          },
          {
              "id": 18,
              "name": "",
              "rom_name": "",
              "en_name": "Bedroom Audio"
          },
          {
              "id": 19,
              "name": "",
              "rom_name": "",
              "en_name": "Ben E. King"
          },
          {
              "id": 20,
              "name": "",
              "rom_name": "",
              "en_name": "Beyond"
          },
          {
              "id": 21,
              "name": "",
              "rom_name": "",
              "en_name": "Bill Withers"
          },
          {
              "id": 22,
              "name": "",
              "rom_name": "",
              "en_name": "Bon Jovi"
          },
          {
              "id": 23,
              "name": "",
              "rom_name": "",
              "en_name": "Brian McKnight"
          },
          {
              "id": 24,
              "name": "",
              "rom_name": "",
              "en_name": "Bruno Mars"
          },
          {
              "id": 25,
              "name": "",
              "rom_name": "",
              "en_name": "Calum Scott"
          },
          {
              "id": 26,
              "name": "",
              "rom_name": "",
              "en_name": "Camila Cabello"
          },
          {
              "id": 27,
              "name": "",
              "rom_name": "",
              "en_name": "Cass Phang"
          },
          {
              "id": 28,
              "name": "",
              "rom_name": "",
              "en_name": "Chilam"
          },
          {
              "id": 29,
              "name": "",
              "rom_name": "",
              "en_name": "Christie"
          },
          {
              "id": 30,
              "name": "",
              "rom_name": "",
              "en_name": "Christine Fan"
          },
          {
              "id": 31,
              "name": "",
              "rom_name": "",
              "en_name": "Chyi Chin"
          },
          {
              "id": 32,
              "name": "",
              "rom_name": "",
              "en_name": "Coldplay"
          },
          {
              "id": 33,
              "name": "",
              "rom_name": "",
              "en_name": "Counting Crows"
          },
          {
              "id": 34,
              "name": "",
              "rom_name": "",
              "en_name": "Crowd Lu"
          },
          {
              "id": 35,
              "name": "",
              "rom_name": "",
              "en_name": "Cyndi Lauper"
          },
          {
              "id": 36,
              "name": "",
              "rom_name": "",
              "en_name": "Cyndi Wang"
          },
          {
              "id": 37,
              "name": "",
              "rom_name": "",
              "en_name": "Daniela Andrade"
          },
          {
              "id": 38,
              "name": "",
              "rom_name": "",
              "en_name": "Dato Siti Nurhaliza"
          },
          {
              "id": 39,
              "name": "",
              "rom_name": "",
              "en_name": "Dave Wong"
          },
          {
              "id": 40,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 41,
              "name": "",
              "rom_name": "",
              "en_name": "Dawen Wang"
          },
          {
              "id": 42,
              "name": "",
              "rom_name": "",
              "en_name": "Della"
          },
          {
              "id": 43,
              "name": "",
              "rom_name": "",
              "en_name": "Donna Lewis"
          },
          {
              "id": 44,
              "name": "",
              "rom_name": "",
              "en_name": "Eagles"
          },
          {
              "id": 45,
              "name": "",
              "rom_name": "",
              "en_name": "Eason Chan"
          },
          {
              "id": 46,
              "name": "",
              "rom_name": "",
              "en_name": "Ekin Cheng"
          },
          {
              "id": 47,
              "name": "",
              "rom_name": "",
              "en_name": "Elton John"
          },
          {
              "id": 48,
              "name": "",
              "rom_name": "",
              "en_name": "Elva Hsiao"
          },
          {
              "id": 49,
              "name": "",
              "rom_name": "",
              "en_name": "En"
          },
          {
              "id": 50,
              "name": "",
              "rom_name": "",
              "en_name": "Eric Chou"
          },
          {
              "id": 51,
              "name": "",
              "rom_name": "",
              "en_name": "Evan Yo"
          },
          {
              "id": 52,
              "name": "",
              "rom_name": "",
              "en_name": "EXO"
          },
          {
              "id": 53,
              "name": "",
              "rom_name": "",
              "en_name": "F.I.R."
          },
          {
              "id": 54,
              "name": "",
              "rom_name": "",
              "en_name": "F.I.R.飛兒樂團"
          },
          {
              "id": 55,
              "name": "",
              "rom_name": "",
              "en_name": "F4"
          },
          {
              "id": 56,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 57,
              "name": "",
              "rom_name": "",
              "en_name": "Fish Leong"
          },
          {
              "id": 58,
              "name": "",
              "rom_name": "",
              "en_name": "Frank Sinatra"
          },
          {
              "id": 59,
              "name": "",
              "rom_name": "",
              "en_name": "Frankie Valli"
          },
          {
              "id": 60,
              "name": "",
              "rom_name": "",
              "en_name": "G.E.M."
          },
          {
              "id": 61,
              "name": "",
              "rom_name": "",
              "en_name": "Gary Chaw"
          },
          {
              "id": 62,
              "name": "",
              "rom_name": "",
              "en_name": "Gentle Bones"
          },
          {
              "id": 63,
              "name": "",
              "rom_name": "",
              "en_name": "George Michael"
          },
          {
              "id": 64,
              "name": "",
              "rom_name": "",
              "en_name": "Grasshopper"
          },
          {
              "id": 65,
              "name": "",
              "rom_name": "",
              "en_name": "Hacken Lee"
          },
          {
              "id": 66,
              "name": "",
              "rom_name": "",
              "en_name": "Harlem Yu"
          },
          {
              "id": 67,
              "name": "",
              "rom_name": "",
              "en_name": "Hoang Thuy Linh"
          },
          {
              "id": 68,
              "name": "",
              "rom_name": "",
              "en_name": "HONNE"
          },
          {
              "id": 69,
              "name": "",
              "rom_name": "",
              "en_name": "Howie Day"
          },
          {
              "id": 70,
              "name": "",
              "rom_name": "",
              "en_name": "Hunter Hayes"
          },
          {
              "id": 71,
              "name": "",
              "rom_name": "",
              "en_name": "Idina Menzel"
          },
          {
              "id": 72,
              "name": "",
              "rom_name": "",
              "en_name": "Indecent Obsession"
          },
          {
              "id": 73,
              "name": "",
              "rom_name": "",
              "en_name": "Isaac Yong"
          },
          {
              "id": 74,
              "name": "",
              "rom_name": "",
              "en_name": "IU"
          },
          {
              "id": 75,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 76,
              "name": "",
              "rom_name": "",
              "en_name": "Jason Mraz"
          },
          {
              "id": 77,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 78,
              "name": "",
              "rom_name": "",
              "en_name": "Jaz"
          },
          {
              "id": 79,
              "name": "",
              "rom_name": "",
              "en_name": "Jeff Chang"
          },
          {
              "id": 80,
              "name": "",
              "rom_name": "",
              "en_name": "Jerry Yan"
          },
          {
              "id": 81,
              "name": "",
              "rom_name": "",
              "en_name": "Jesse McCartney"
          },
          {
              "id": 82,
              "name": "",
              "rom_name": "",
              "en_name": "Jim Brickman"
          },
          {
              "id": 83,
              "name": "",
              "rom_name": "",
              "en_name": "Jimi Hendrix"
          },
          {
              "id": 84,
              "name": "",
              "rom_name": "",
              "en_name": "Jinny Ng"
          },
          {
              "id": 85,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 86,
              "name": "",
              "rom_name": "",
              "en_name": "Joey Yung"
          },
          {
              "id": 87,
              "name": "",
              "rom_name": "",
              "en_name": "John Denver"
          },
          {
              "id": 88,
              "name": "",
              "rom_name": "",
              "en_name": "John Legend"
          },
          {
              "id": 89,
              "name": "",
              "rom_name": "",
              "en_name": "John Lennon"
          },
          {
              "id": 90,
              "name": "",
              "rom_name": "",
              "en_name": "Joker Xue"
          },
          {
              "id": 91,
              "name": "",
              "rom_name": "",
              "en_name": "Jolin Tsai"
          },
          {
              "id": 92,
              "name": "",
              "rom_name": "",
              "en_name": "Jon McLaughlin"
          },
          {
              "id": 93,
              "name": "",
              "rom_name": "",
              "en_name": "Julie Sue"
          },
          {
              "id": 94,
              "name": "",
              "rom_name": "",
              "en_name": "Karen Mok"
          },
          {
              "id": 95,
              "name": "",
              "rom_name": "",
              "en_name": "Karyn White"
          },
          {
              "id": 96,
              "name": "",
              "rom_name": "",
              "en_name": "Katrina & The Waves"
          },
          {
              "id": 97,
              "name": "",
              "rom_name": "",
              "en_name": "Katy Perry"
          },
          {
              "id": 98,
              "name": "",
              "rom_name": "",
              "en_name": "Keala Settle"
          },
          {
              "id": 99,
              "name": "",
              "rom_name": "",
              "en_name": "Kelly Pan"
          },
          {
              "id": 100,
              "name": "",
              "rom_name": "",
              "en_name": "Kenji Wu"
          },
          {
              "id": 101,
              "name": "",
              "rom_name": "",
              "en_name": "Khalil Fong"
          },
          {
              "id": 102,
              "name": "",
              "rom_name": "",
              "en_name": "Kina Grannis"
          },
          {
              "id": 103,
              "name": "",
              "rom_name": "",
              "en_name": "Kit Chan"
          },
          {
              "id": 104,
              "name": "",
              "rom_name": "",
              "en_name": "Kristen Bell"
          },
          {
              "id": 105,
              "name": "",
              "rom_name": "",
              "en_name": "Kuana Torres Kahele"
          },
          {
              "id": 106,
              "name": "",
              "rom_name": "",
              "en_name": "Kwan Gor"
          },
          {
              "id": 107,
              "name": "",
              "rom_name": "",
              "en_name": "LaLa Hsu"
          },
          {
              "id": 108,
              "name": "",
              "rom_name": "",
              "en_name": "Lana Del Rey"
          },
          {
              "id": 109,
              "name": "",
              "rom_name": "",
              "en_name": "Landy Wen"
          },
          {
              "id": 110,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 111,
              "name": "",
              "rom_name": "",
              "en_name": "Lennerd"
          },
          {
              "id": 112,
              "name": "",
              "rom_name": "",
              "en_name": "Leon Lai"
          },
          {
              "id": 113,
              "name": "",
              "rom_name": "",
              "en_name": "Leona Lewis"
          },
          {
              "id": 114,
              "name": "",
              "rom_name": "",
              "en_name": "Leslie Cheung"
          },
          {
              "id": 115,
              "name": "",
              "rom_name": "",
              "en_name": "Lewis Capaldi"
          },
          {
              "id": 116,
              "name": "",
              "rom_name": "",
              "en_name": "Lifehouse"
          },
          {
              "id": 117,
              "name": "",
              "rom_name": "",
              "en_name": "Lin Hsin Yi"
          },
          {
              "id": 118,
              "name": "",
              "rom_name": "",
              "en_name": "Linkin Park"
          },
          {
              "id": 119,
              "name": "",
              "rom_name": "",
              "en_name": "Lionel Richie"
          },
          {
              "id": 120,
              "name": "",
              "rom_name": "",
              "en_name": "Luther Vandross"
          },
          {
              "id": 121,
              "name": "",
              "rom_name": "",
              "en_name": "Man Bai"
          },
          {
              "id": 122,
              "name": "",
              "rom_name": "",
              "en_name": "Mao Buyi"
          },
          {
              "id": 123,
              "name": "",
              "rom_name": "",
              "en_name": "Mariya Takeuchi"
          },
          {
              "id": 124,
              "name": "",
              "rom_name": "",
              "en_name": "Mark Ronson"
          },
          {
              "id": 125,
              "name": "",
              "rom_name": "",
              "en_name": "Maroon 5"
          },
          {
              "id": 126,
              "name": "",
              "rom_name": "",
              "en_name": "Mavis Fan"
          },
          {
              "id": 127,
              "name": "",
              "rom_name": "",
              "en_name": "Mavis Hee"
          },
          {
              "id": 128,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 129,
              "name": "",
              "rom_name": "",
              "en_name": "MICappella"
          },
          {
              "id": 130,
              "name": "",
              "rom_name": "",
              "en_name": "Michael Bublé"
          },
          {
              "id": 131,
              "name": "",
              "rom_name": "",
              "en_name": "Michael Jackson"
          },
          {
              "id": 132,
              "name": "",
              "rom_name": "",
              "en_name": "Michael Learns To Rock"
          },
          {
              "id": 133,
              "name": "",
              "rom_name": "",
              "en_name": "Michael Wong"
          },
          {
              "id": 134,
              "name": "",
              "rom_name": "",
              "en_name": "MIN"
          },
          {
              "id": 135,
              "name": "",
              "rom_name": "",
              "en_name": "Miriam Yeung"
          },
          {
              "id": 136,
              "name": "",
              "rom_name": "",
              "en_name": "Naim Daniel"
          },
          {
              "id": 137,
              "name": "",
              "rom_name": "",
              "en_name": "Naomi Scott"
          },
          {
              "id": 138,
              "name": "",
              "rom_name": "",
              "en_name": "Nat Wu"
          },
          {
              "id": 139,
              "name": "",
              "rom_name": "",
              "en_name": "Natalie Imbruglia"
          },
          {
              "id": 140,
              "name": "",
              "rom_name": "",
              "en_name": "NEKO Highway"
          },
          {
              "id": 141,
              "name": "",
              "rom_name": "",
              "en_name": "Nine Chen"
          },
          {
              "id": 142,
              "name": "",
              "rom_name": "",
              "en_name": "Oh Honey"
          },
          {
              "id": 143,
              "name": "",
              "rom_name": "",
              "en_name": "OHMYMEITING"
          },
          {
              "id": 144,
              "name": "",
              "rom_name": "",
              "en_name": "Olivia Ong"
          },
          {
              "id": 145,
              "name": "",
              "rom_name": "",
              "en_name": "One Direction"
          },
          {
              "id": 146,
              "name": "",
              "rom_name": "",
              "en_name": "OneRepublic"
          },
          {
              "id": 147,
              "name": "",
              "rom_name": "",
              "en_name": "Philip Bailey"
          },
          {
              "id": 148,
              "name": "",
              "rom_name": "",
              "en_name": "Pika Chiu"
          },
          {
              "id": 149,
              "name": "",
              "rom_name": "",
              "en_name": "Power Station"
          },
          {
              "id": 150,
              "name": "",
              "rom_name": "",
              "en_name": "Punch"
          },
          {
              "id": 151,
              "name": "",
              "rom_name": "",
              "en_name": "Queen"
          },
          {
              "id": 152,
              "name": "",
              "rom_name": "",
              "en_name": "R-chord"
          },
          {
              "id": 153,
              "name": "",
              "rom_name": "",
              "en_name": "Radiohead"
          },
          {
              "id": 154,
              "name": "",
              "rom_name": "",
              "en_name": "Rainie Yang"
          },
          {
              "id": 155,
              "name": "",
              "rom_name": "",
              "en_name": "Randy Newman"
          },
          {
              "id": 156,
              "name": "",
              "rom_name": "",
              "en_name": "Richie Jen"
          },
          {
              "id": 157,
              "name": "",
              "rom_name": "",
              "en_name": "Rick Astley"
          },
          {
              "id": 158,
              "name": "",
              "rom_name": "",
              "en_name": "Ricky Martin"
          },
          {
              "id": 159,
              "name": "",
              "rom_name": "",
              "en_name": "Ronald Cheng"
          },
          {
              "id": 160,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 161,
              "name": "",
              "rom_name": "",
              "en_name": "Ruth Kueo"
          },
          {
              "id": 162,
              "name": "",
              "rom_name": "",
              "en_name": "Ryann Darling"
          },
          {
              "id": 163,
              "name": "",
              "rom_name": "",
              "en_name": "S.H.E"
          },
          {
              "id": 164,
              "name": "",
              "rom_name": "",
              "en_name": "Sam Lee"
          },
          {
              "id": 165,
              "name": "",
              "rom_name": "",
              "en_name": "Sammi Cheng"
          },
          {
              "id": 166,
              "name": "",
              "rom_name": "",
              "en_name": "Samuel E. Wright"
          },
          {
              "id": 167,
              "name": "",
              "rom_name": "",
              "en_name": "Sandy Lam"
          },
          {
              "id": 168,
              "name": "",
              "rom_name": "",
              "en_name": "Sarah Chen"
          },
          {
              "id": 169,
              "name": "",
              "rom_name": "",
              "en_name": "Shania Twain"
          },
          {
              "id": 170,
              "name": "",
              "rom_name": "",
              "en_name": "Shawn Mendes"
          },
          {
              "id": 171,
              "name": "",
              "rom_name": "",
              "en_name": "Shin"
          },
          {
              "id": 172,
              "name": "",
              "rom_name": "",
              "en_name": "Shirley Chen"
          },
          {
              "id": 173,
              "name": "",
              "rom_name": "",
              "en_name": "Silence Wang"
          },
          {
              "id": 174,
              "name": "",
              "rom_name": "",
              "en_name": "SKY WU"
          },
          {
              "id": 175,
              "name": "",
              "rom_name": "",
              "en_name": "Skylar Grey"
          },
          {
              "id": 176,
              "name": "",
              "rom_name": "",
              "en_name": "Sơn Tùng M-TP"
          },
          {
              "id": 177,
              "name": "",
              "rom_name": "",
              "en_name": "Spice Girls"
          },
          {
              "id": 178,
              "name": "",
              "rom_name": "",
              "en_name": "Stefanie Sun"
          },
          {
              "id": 179,
              "name": "",
              "rom_name": "",
              "en_name": "StellaVee"
          },
          {
              "id": 180,
              "name": "",
              "rom_name": "",
              "en_name": "Stevie Wonder"
          },
          {
              "id": 181,
              "name": "",
              "rom_name": "",
              "en_name": "Sukhwinder Singh"
          },
          {
              "id": 182,
              "name": "",
              "rom_name": "",
              "en_name": "TANK 呂建忠"
          },
          {
              "id": 183,
              "name": "",
              "rom_name": "",
              "en_name": "Tanya Chua"
          },
          {
              "id": 184,
              "name": "",
              "rom_name": "",
              "en_name": "Taylor Swift"
          },
          {
              "id": 185,
              "name": "",
              "rom_name": "",
              "en_name": "Teresa Teng"
          },
          {
              "id": 186,
              "name": "",
              "rom_name": "",
              "en_name": "TFBOYS"
          },
          {
              "id": 187,
              "name": "",
              "rom_name": "",
              "en_name": "The Band Perry"
          },
          {
              "id": 188,
              "name": "",
              "rom_name": "",
              "en_name": "The Chainsmokers"
          },
          {
              "id": 189,
              "name": "",
              "rom_name": "",
              "en_name": "The Weeknd"
          },
          {
              "id": 190,
              "name": "",
              "rom_name": "",
              "en_name": "Tien Tien"
          },
          {
              "id": 191,
              "name": "",
              "rom_name": "",
              "en_name": "Tiger Hu"
          },
          {
              "id": 192,
              "name": "",
              "rom_name": "",
              "en_name": "Tingzhi.Hz"
          },
          {
              "id": 193,
              "name": "",
              "rom_name": "",
              "en_name": "Tones and I"
          },
          {
              "id": 194,
              "name": "",
              "rom_name": "",
              "en_name": "Waa Wei"
          },
          {
              "id": 195,
              "name": "",
              "rom_name": "",
              "en_name": "Wakin Chau"
          },
          {
              "id": 196,
              "name": "",
              "rom_name": "",
              "en_name": "Wang Jun Qi"
          },
          {
              "id": 197,
              "name": "",
              "rom_name": "",
              "en_name": "WeiBird"
          },
          {
              "id": 198,
              "name": "",
              "rom_name": "",
              "en_name": "Will Pan"
          },
          {
              "id": 199,
              "name": "",
              "rom_name": "",
              "en_name": "Wu Bai"
          },
          {
              "id": 200,
              "name": "",
              "rom_name": "",
              "en_name": "Wu Jia Hui"
          },
          {
              "id": 201,
              "name": "",
              "rom_name": "",
              "en_name": "Xiao Yu"
          },
          {
              "id": 202,
              "name": "",
              "rom_name": "",
              "en_name": "Yida Huang"
          },
          {
              "id": 203,
              "name": "",
              "rom_name": "",
              "en_name": "Yoga Lin"
          },
          {
              "id": 204,
              "name": "",
              "rom_name": "",
              "en_name": "Yokez"
          },
          {
              "id": 205,
              "name": "",
              "rom_name": "",
              "en_name": "Zerlene 鄭潔伶"
          },
          {
              "id": 206,
              "name": "",
              "rom_name": "",
              "en_name": "Zhang Yu Sheng"
          },
          {
              "id": 207,
              "name": "",
              "rom_name": "",
              "en_name": "Zhang Zhen Yue"
          },
          {
              "id": 208,
              "name": "",
              "rom_name": "",
              "en_name": "Zubir Said"
          },
          {
              "id": 209,
              "name": "",
              "rom_name": "",
              "en_name": "任然"
          },
          {
              "id": 210,
              "name": "",
              "rom_name": "",
              "en_name": "克麗絲叮"
          },
          {
              "id": 211,
              "name": "",
              "rom_name": "",
              "en_name": "冷漠"
          },
          {
              "id": 212,
              "name": "",
              "rom_name": "",
              "en_name": "劉人語"
          },
          {
              "id": 213,
              "name": "",
              "rom_name": "",
              "en_name": "吳青峰"
          },
          {
              "id": 214,
              "name": "",
              "rom_name": "",
              "en_name": "寶石Gem"
          },
          {
              "id": 215,
              "name": "",
              "rom_name": "",
              "en_name": "巫啟賢"
          },
          {
              "id": 216,
              "name": "",
              "rom_name": "",
              "en_name": "李季美"
          },
          {
              "id": 217,
              "name": "",
              "rom_name": "",
              "en_name": "林凡"
          },
          {
              "id": 218,
              "name": "",
              "rom_name": "",
              "en_name": "梁文福"
          },
          {
              "id": 219,
              "name": "",
              "rom_name": "",
              "en_name": "梦然"
          },
          {
              "id": 220,
              "name": "",
              "rom_name": "",
              "en_name": "棉子"
          },
          {
              "id": 221,
              "name": "",
              "rom_name": "",
              "en_name": "湯寶如"
          },
          {
              "id": 222,
              "name": "",
              "rom_name": "",
              "en_name": "王貳浪"
          },
          {
              "id": 223,
              "name": "",
              "rom_name": "",
              "en_name": "王靖雯不胖"
          },
          {
              "id": 224,
              "name": "",
              "rom_name": "",
              "en_name": "胡66"
          },
          {
              "id": 225,
              "name": "",
              "rom_name": "",
              "en_name": "許嵩"
          },
          {
              "id": 226,
              "name": "",
              "rom_name": "",
              "en_name": "趙詠華"
          },
          {
              "id": 227,
              "name": "",
              "rom_name": "",
              "en_name": "那英"
          },
          {
              "id": 228,
              "name": "",
              "rom_name": "",
              "en_name": "阿冗"
          },
          {
              "id": 229,
              "name": "",
              "rom_name": "",
              "en_name": "阿涵"
          },
          {
              "id": 230,
              "name": "",
              "rom_name": "",
              "en_name": "陳立農"
          },
          {
              "id": 231,
              "name": "",
              "rom_name": "",
              "en_name": "陳雪燃"
          },
          {
              "id": 232,
              "name": "",
              "rom_name": "",
              "en_name": "颜黎明"
          },
          {
              "id": 233,
              "name": "",
              "rom_name": "",
              "en_name": "A-Lin"
          },
          {
              "id": 234,
              "name": "",
              "rom_name": "",
              "en_name": "A-Mei Chang"
          },
          {
              "id": 235,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 236,
              "name": "",
              "rom_name": "",
              "en_name": "Ada Zhuang"
          },
          {
              "id": 237,
              "name": "",
              "rom_name": "",
              "en_name": "AGA"
          },
          {
              "id": 238,
              "name": "",
              "rom_name": "",
              "en_name": "Beyond"
          },
          {
              "id": 239,
              "name": "",
              "rom_name": "",
              "en_name": "Bruno Mars"
          },
          {
              "id": 240,
              "name": "",
              "rom_name": "",
              "en_name": "Coldplay"
          },
          {
              "id": 241,
              "name": "",
              "rom_name": "",
              "en_name": "Crowd Lu"
          },
          {
              "id": 242,
              "name": "",
              "rom_name": "",
              "en_name": "Dave Wong"
          },
          {
              "id": 243,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 244,
              "name": "",
              "rom_name": "",
              "en_name": "Della"
          },
          {
              "id": 245,
              "name": "",
              "rom_name": "",
              "en_name": "Eason Chan"
          },
          {
              "id": 246,
              "name": "",
              "rom_name": "",
              "en_name": "Ekin Cheng"
          },
          {
              "id": 247,
              "name": "",
              "rom_name": "",
              "en_name": "Elton John"
          },
          {
              "id": 248,
              "name": "",
              "rom_name": "",
              "en_name": "Eric Chou"
          },
          {
              "id": 249,
              "name": "",
              "rom_name": "",
              "en_name": "F.I.R."
          },
          {
              "id": 250,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 251,
              "name": "",
              "rom_name": "",
              "en_name": "Fish Leong"
          },
          {
              "id": 252,
              "name": "",
              "rom_name": "",
              "en_name": "G.E.M."
          },
          {
              "id": 253,
              "name": "",
              "rom_name": "",
              "en_name": "Gary Chaw"
          },
          {
              "id": 254,
              "name": "",
              "rom_name": "",
              "en_name": "Harlem Yu"
          },
          {
              "id": 255,
              "name": "",
              "rom_name": "",
              "en_name": "HONNE"
          },
          {
              "id": 256,
              "name": "",
              "rom_name": "",
              "en_name": "Isaac Yong"
          },
          {
              "id": 257,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 258,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 259,
              "name": "",
              "rom_name": "",
              "en_name": "Jeff Chang"
          },
          {
              "id": 260,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 261,
              "name": "",
              "rom_name": "",
              "en_name": "John Legend"
          },
          {
              "id": 262,
              "name": "",
              "rom_name": "",
              "en_name": "Joker Xue"
          },
          {
              "id": 263,
              "name": "",
              "rom_name": "",
              "en_name": "Jolin Tsai"
          },
          {
              "id": 264,
              "name": "",
              "rom_name": "",
              "en_name": "Karen Mok"
          },
          {
              "id": 265,
              "name": "",
              "rom_name": "",
              "en_name": "Katy Perry"
          },
          {
              "id": 266,
              "name": "",
              "rom_name": "",
              "en_name": "Khalil Fong"
          },
          {
              "id": 267,
              "name": "",
              "rom_name": "",
              "en_name": "Kristen Bell"
          },
          {
              "id": 268,
              "name": "",
              "rom_name": "",
              "en_name": "Landy Wen"
          },
          {
              "id": 269,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 270,
              "name": "",
              "rom_name": "",
              "en_name": "Mavis Hee"
          },
          {
              "id": 271,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 272,
              "name": "",
              "rom_name": "",
              "en_name": "Min"
          },
          {
              "id": 273,
              "name": "",
              "rom_name": "",
              "en_name": "Natalie Imbruglia"
          },
          {
              "id": 274,
              "name": "",
              "rom_name": "",
              "en_name": "Power Station"
          },
          {
              "id": 275,
              "name": "",
              "rom_name": "",
              "en_name": "Rainie Yang"
          },
          {
              "id": 276,
              "name": "",
              "rom_name": "",
              "en_name": "Rick Astley"
          },
          {
              "id": 277,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 278,
              "name": "",
              "rom_name": "",
              "en_name": "S.H.E"
          },
          {
              "id": 279,
              "name": "",
              "rom_name": "",
              "en_name": "Sam Lee"
          },
          {
              "id": 280,
              "name": "",
              "rom_name": "",
              "en_name": "Sammi Cheng"
          },
          {
              "id": 281,
              "name": "",
              "rom_name": "",
              "en_name": "Sandy Lam"
          },
          {
              "id": 282,
              "name": "",
              "rom_name": "",
              "en_name": "Stefanie Sun"
          },
          {
              "id": 283,
              "name": "",
              "rom_name": "",
              "en_name": "Tanya Chua"
          },
          {
              "id": 284,
              "name": "",
              "rom_name": "",
              "en_name": "Teresa Teng"
          },
          {
              "id": 285,
              "name": "",
              "rom_name": "",
              "en_name": "The Weeknd"
          },
          {
              "id": 286,
              "name": "",
              "rom_name": "",
              "en_name": "Tiger Hu"
          },
          {
              "id": 287,
              "name": "",
              "rom_name": "",
              "en_name": "Wu Bai"
          },
          {
              "id": 288,
              "name": "",
              "rom_name": "",
              "en_name": "Wu Jia Hui"
          },
          {
              "id": 289,
              "name": "",
              "rom_name": "",
              "en_name": "Yoga Lin"
          },
          {
              "id": 290,
              "name": "",
              "rom_name": "",
              "en_name": "Yokez"
          },
          {
              "id": 291,
              "name": "",
              "rom_name": "",
              "en_name": "Zhang Yu Sheng"
          },
          {
              "id": 292,
              "name": "",
              "rom_name": "",
              "en_name": "Zhang Zhen Yue"
          },
          {
              "id": 293,
              "name": "",
              "rom_name": "",
              "en_name": "任然"
          },
          {
              "id": 294,
              "name": "",
              "rom_name": "",
              "en_name": "許嵩"
          },
          {
              "id": 295,
              "name": "",
              "rom_name": "",
              "en_name": "颜黎明"
          },
          {
              "id": 296,
              "name": "",
              "rom_name": "",
              "en_name": "A-Lin"
          },
          {
              "id": 297,
              "name": "",
              "rom_name": "",
              "en_name": "A-Mei Chang"
          },
          {
              "id": 298,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 299,
              "name": "",
              "rom_name": "",
              "en_name": "Beyond"
          },
          {
              "id": 300,
              "name": "",
              "rom_name": "",
              "en_name": "Bruno Mars"
          },
          {
              "id": 301,
              "name": "",
              "rom_name": "",
              "en_name": "Coldplay"
          },
          {
              "id": 302,
              "name": "",
              "rom_name": "",
              "en_name": "Crowd Lu"
          },
          {
              "id": 303,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 304,
              "name": "",
              "rom_name": "",
              "en_name": "Eason Chan"
          },
          {
              "id": 305,
              "name": "",
              "rom_name": "",
              "en_name": "Elton John"
          },
          {
              "id": 306,
              "name": "",
              "rom_name": "",
              "en_name": "Eric Chou"
          },
          {
              "id": 307,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 308,
              "name": "",
              "rom_name": "",
              "en_name": "Fish Leong"
          },
          {
              "id": 309,
              "name": "",
              "rom_name": "",
              "en_name": "G.E.M."
          },
          {
              "id": 310,
              "name": "",
              "rom_name": "",
              "en_name": "Gary Chaw"
          },
          {
              "id": 311,
              "name": "",
              "rom_name": "",
              "en_name": "Isaac Yong"
          },
          {
              "id": 312,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 313,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 314,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 315,
              "name": "",
              "rom_name": "",
              "en_name": "Jolin Tsai"
          },
          {
              "id": 316,
              "name": "",
              "rom_name": "",
              "en_name": "Karen Mok"
          },
          {
              "id": 317,
              "name": "",
              "rom_name": "",
              "en_name": "Khalil Fong"
          },
          {
              "id": 318,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 319,
              "name": "",
              "rom_name": "",
              "en_name": "Mavis Hee"
          },
          {
              "id": 320,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 321,
              "name": "",
              "rom_name": "",
              "en_name": "Power Station"
          },
          {
              "id": 322,
              "name": "",
              "rom_name": "",
              "en_name": "Rainie Yang"
          },
          {
              "id": 323,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 324,
              "name": "",
              "rom_name": "",
              "en_name": "Stefanie Sun"
          },
          {
              "id": 325,
              "name": "",
              "rom_name": "",
              "en_name": "Tanya Chua"
          },
          {
              "id": 326,
              "name": "",
              "rom_name": "",
              "en_name": "Teresa Teng"
          },
          {
              "id": 327,
              "name": "",
              "rom_name": "",
              "en_name": "The Weeknd"
          },
          {
              "id": 328,
              "name": "",
              "rom_name": "",
              "en_name": "Yoga Lin"
          },
          {
              "id": 329,
              "name": "",
              "rom_name": "",
              "en_name": "許嵩"
          },
          {
              "id": 330,
              "name": "",
              "rom_name": "",
              "en_name": "A-Mei Chang"
          },
          {
              "id": 331,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 332,
              "name": "",
              "rom_name": "",
              "en_name": "Beyond"
          },
          {
              "id": 333,
              "name": "",
              "rom_name": "",
              "en_name": "Coldplay"
          },
          {
              "id": 334,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 335,
              "name": "",
              "rom_name": "",
              "en_name": "Eason Chan"
          },
          {
              "id": 336,
              "name": "",
              "rom_name": "",
              "en_name": "Eric Chou"
          },
          {
              "id": 337,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 338,
              "name": "",
              "rom_name": "",
              "en_name": "G.E.M."
          },
          {
              "id": 339,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 340,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 341,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 342,
              "name": "",
              "rom_name": "",
              "en_name": "Khalil Fong"
          },
          {
              "id": 343,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 344,
              "name": "",
              "rom_name": "",
              "en_name": "Mavis Hee"
          },
          {
              "id": 345,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 346,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 347,
              "name": "",
              "rom_name": "",
              "en_name": "Stefanie Sun"
          },
          {
              "id": 348,
              "name": "",
              "rom_name": "",
              "en_name": "Teresa Teng"
          },
          {
              "id": 349,
              "name": "",
              "rom_name": "",
              "en_name": "Yoga Lin"
          },
          {
              "id": 350,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 351,
              "name": "",
              "rom_name": "",
              "en_name": "Coldplay"
          },
          {
              "id": 352,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 353,
              "name": "",
              "rom_name": "",
              "en_name": "Eason Chan"
          },
          {
              "id": 354,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 355,
              "name": "",
              "rom_name": "",
              "en_name": "G.E.M."
          },
          {
              "id": 356,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 357,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 358,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 359,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 360,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 361,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 362,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 363,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 364,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 365,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 366,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 367,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 368,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 369,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 370,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 371,
              "name": "",
              "rom_name": "",
              "en_name": "Aaron Kwok"
          },
          {
              "id": 372,
              "name": "",
              "rom_name": "",
              "en_name": "David Tao"
          },
          {
              "id": 373,
              "name": "",
              "rom_name": "",
              "en_name": "Faye Wong"
          },
          {
              "id": 374,
              "name": "",
              "rom_name": "",
              "en_name": "Jacky Cheung"
          },
          {
              "id": 375,
              "name": "",
              "rom_name": "",
              "en_name": "Jay Chou"
          },
          {
              "id": 376,
              "name": "",
              "rom_name": "",
              "en_name": "JJ Lin"
          },
          {
              "id": 377,
              "name": "",
              "rom_name": "",
              "en_name": "Leehom Wang"
          },
          {
              "id": 378,
              "name": "",
              "rom_name": "",
              "en_name": "Mayday"
          },
          {
              "id": 379,
              "name": "",
              "rom_name": "",
              "en_name": "Ronghao Li"
          },
          {
              "id": 380,
              "name": "",
              "rom_name": "",
              "en_name": "831"
          },
          {
              "id": 381,
              "name": "",
              "rom_name": "",
              "en_name": "黄宏墨"
          }
      ])

      await queryInterface.bulkInsert('languages',[
          { id: 1, name: "english" },
          { id: 2, name: "mandarin" },
          { id: 3, name: "cantonese" },
          { id: 4, name: "hokkien" },
          { id: 5, name: "spanish" },
          { id: 6, name: "malay" },
          { id: 7, name: "japanese" },
          { id: 8, name: "korean" },
          { id: 9, name: "vietnamese" },
          { id: 10, name: "thai" },
          { id: 11, name: "french" },
      ])

      await queryInterface.bulkInsert('roles',[
          { id: 1, name: "artist" },
          { id: 2, name: "composer" },
          { id: 3, name: "songwriter" },
          { id: 4, name: "arranger" },
      ])

      await queryInterface.bulkInsert('songs', songData, {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('songs', null, {});
  }
};
