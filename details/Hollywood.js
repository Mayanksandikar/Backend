const get =(res, req)=>{
    res.send([
       { "id" : "8",
        "title": "Sam Taylor-Johnson tapped to direct Amy Winehouse biopic",
        "Image": "https://images.indianexpress.com/2022/07/Sam-Taylor-Johnson-1200by667.jpg",
        "category": "Hollywood",
        "description" : "Sam Taylor-Johnson, best known for Nowhere Boy and Fifty Shades of Grey, is set to direct a biopic about singer and close friend Amy Winehouse. European studio Studiocanal is producing the film titled Back to Black, which draws its name from the late singer’s multiple Grammy-winning studio album."
    },
  
        { "id" : "9",
         "title": "Chris Hemsworth names his ‘favourite superhero’, fans call him ‘adorable’        ",
 
         "Image": "https://images.indianexpress.com/2022/07/thor-love-and-thunder.jpg",
          "category": "Hollywood",
         "description" : "Hemsworth shared two photos with the caption, “Here’s two pics of me and my daughter. One was the first time she was on set 11 years ago, the other is the most recent on Thor: Love and Thunder. She’s my favourite superhero.” The actor shared photos of his daughter India, who was seen as Gorr’s daughter in the latest Thor movie."
     },
   
        { "id" : "10",
         "title": "Sylvester Stallone’s Samaritan to debut on Prime Video in August",
         "Image": "https://images.indianexpress.com/2022/07/Samaritan-1200by667.jpg",
          "category": "Hollywood",
         "description" : "Hollywood veteran Sylvester Stallone‘s upcoming action movie Samaritan will premiere on streaming service Prime Video on August 26. Directed by Julius Avery of Overlord fame, the film also stars Javon “Wanna” Walton, Pilou Asbaek, Dascha Polanco and Moises Arias"
     },
   
        { "id" : "11",
         "title": "Marvel slammed by VFX artists for exhausting working conditions and ‘worst methodology of production and management’",
         "Image": "https://images.indianexpress.com/2022/05/she-hulk-trailer.jpgMarvel Studios has received harsh criticism from members from the VFX community for difficult working conditions. Visual effects artists have slammed the studio for being the ‘worst’ to work for, and accused it of imposing stringent deadlines despite the employees being overworked.",
          "category": "Hollywood",
         "description" : "Marvel Studios has received harsh criticism from members from the VFX community for difficult working conditions. Visual effects artists have slammed the studio for being the ‘worst’ to work for, and accused it of imposing stringent deadlines despite the employees being overworked."
     },
   
        { "id" : "12",
         "title": "Thor Love and Thunder scores franchise best debut, earns Rs 64.80 cr in India over 4 days",
         "Image": "https://images.indianexpress.com/2022/07/Thor-Love-and-Thunder-1200by667.jpeg",
          "category": "Hollywood",
         "description" : "Four movies in, Thor is still bringing the hammer down at the box office. Thor: Love and Thunder earned $143 million in its opening weekend in North America, according to studio estimates Sunday. It’s a franchise best for the God of Thunder and another success story of the summer 2022 box office season."
     },
   
        { "id" : "13",
         "title": "Kate Mara, Jamie Bell expecting second child",
         "Image": "https://images.indianexpress.com/2022/07/Kate-Mara-and-Jamie-Bell-1200by667.jpg",
          "category": "Hollywood",
         "description" : "Actor couple Kate Mara and Jamie Bell are set to welcome their second child. Mara, 39, made the announcement in an Instagram post on Sunday. “There are three of us in this pic,” the House of Cards star captioned a photograph of herself and Bell, 36, holding hands."
     },
   
    
   
        { "id" : "14",
         "title": "Chris Evans supports Anthony Mackie, rejects rumours of returning to MCU: ‘Sam Wilson will be Captain America’",
         "Image": "https://images.indianexpress.com/2022/07/captain-america-sam-wilson-1200.jpg",
          "category": "footer2",
         "description" : "Chris Evans has quashed rumours of returning to the Marvel Cinematic Universe as Captain America. It comes soon after reports emerged that claimed Chris might be seen reprising his shield-wielding superhero in the franchise’s fourth installment. The Hollywood star confirmed that not his Steve Rogers, but Anthony Mackie’s Sam Wilson will be Captain America."
     },
   
        
    ])
}

module.exports.apiController = get;