const get =(res, req)=>{
    res.send([
       {
            "id" : "1",
        "title": "Iron Man 2’s Mickey Rourke calls Tom Cruise ‘irrelevant’, says he has ‘no respect’ for Top Gun star",
        "Image": "https://images.indianexpress.com/2022/07/mickey-rourke-tom-cruise.jpg",
       "category": "Bollywood",
        "description" : "Calling Tom Cruise ‘irrelevant’, actor Mickey Rourke said in a new interview that he has ‘no respect’ for the Top Gun star because he hasn’t been pushing himself as an actor. Rourke, himself an Oscar nominee, disregarded the billion-dollar success of Top Gun: Maverick and said that ‘money and power’ doesn’t mean anything to him.In an appearance on Piers Morgan’s show, Rourke was asked about Cruise, whose already successful career recently reached new heights with Maverick. “That doesn’t mean sh*t to me,” he said."


    },
  
        { 
            "id" : "2",
         "title": "Ms Marvel: How the MCU show uses music to cure generational pain, repair cross-border tensions",
         "Image": "https://images.indianexpress.com/2022/07/ms-marvel-pcs.png",
        "category": "Bollywood",
         "description" : "On the most difficult days — the days on which you can sense the moral fabric of our nation is being ripped apart — the best thing you can do is to play a popular Coke Studio Pakistan video and scroll through the comments section. In less than a minute, your faith in humanity will be restored — even as faith, in all its toxicity, is what is driving us apart. So, it makes all the sense in the world for Ms Marvel, a television show designed to bridge borders, to lean on Coke Studio — possibly the biggest diplomatic tool this side of the Kartarpur Corridor — to drive home its themes of brotherhood, unity, and a shared past."
     },
   
        { 
            "id" : "3",
         "title": "20 years of Devdas: How a star was born with the audacious Shah Rukh, Aishwarya, Madhuri film",
         "Image": "https://images.indianexpress.com/2021/07/Devdas-1200.jpg",
        "category": "Bollywood",
         "description" : "At the time of its release, Sanjay Leela Bhansali’s Devdas had a lot of epithets to its name. It was the most expensive Indian film ever made. It was the first Indian film to premiere at Cannes out of competition, and who can forget Shah Rukh Khan and Aishwarya Rai appearing on the red carpet in a horse drawn carriage. Meanwhile, trade analysts across the country commented how big a gamble Bhansali was making with a film of this stature and expanse. "
     },
   
  
   
        {
             "id" : "4",
         "title": "Ranbir Kapoor says he is happiest when spending time with Alia Bhatt, calls mom Neetu Kapoor most influential person in his life",
         "Image": "https://images.indianexpress.com/2021/09/canva-photo-editor-1-25.jpg",
        "category": "Bollywood",
         "description" : "Actor Ranbir Kapoor is neck-deep in promotions for his upcoming film Shamshera. The actor was last seen in the 2018 blockbuster Sanju, and now has two films lined up for release this year, including Brahmastra. The year has been a busy one for him personally and professionally as he tied the knot with Alia Bhatt in April, and he never fails to mention her in his interviews."
     },
   
        { 
            "id" : "5",
         "title": "Sara Ali Khan says she goes to the temple, wears bikinis at the beach: ‘Both are the same girl’",
         "Image": "https://images.indianexpress.com/2022/01/Sara-Ali-Khan-1200-2.jpg",
        "category": "Bollywood",
         "description" : "Making a reference about her identity on Instagram, on which she posts everything from beach pictures from tropical destinations to videos from religious pilgrimages, Sara said, “It is hard to tell because Sara Ali Khan is constantly evolving. The girl going to a temple is the same girl wearing bikinis at the beach is the same girl who hates living away from her mother for 45 days while shooting. She will keep surprising you, because she is still surprising herself.”      "

   
     },
       
     { 
         "id" : "6",
     "title": "Koffee with Karan 7 episode 2 teaser: Sara Ali Khan makes Janhvi Kapoor fall off couch",
     "Image": "https://images.indianexpress.com/2022/07/koffee-with-karan-janhvi-kapoor-sara-ali-khan.jpg",
    "category": "footer1",
     "description" : "Karan Johar has shared a teaser for the second episode of Koffee with Karan season 7, featuring actors Janhvi Kapoor and Sara Ali Khan. The show’s latest season premiered last week, with an episode featuring Ranveer Singh and Alia Bhatt as the guests."

 },

   
        { "id" : "7",
         "title": "Ahead of Taapsee Pannu’s Shabaash Mithu, revisiting the incredible story of former Indian captain Mithali Raj",
         "Image": "https://images.indianexpress.com/2022/07/mithu1200.jpg",
        "category": "Bollywood",
         "description" : "While many might know of Mithali Raj, a good section of people might not be familiar with her achievements and how did she get into the game of cricket. Even as Taapsee Pannu’s film Shabaash Mithu promises to take us on Mithali’s journey to sports stardom, here’s a quick recap of Mithali’s beginnings and her over glorious career in international cricket."
     },
   
       
    ])
}

module.exports.apiController = get;