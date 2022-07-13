const get = (req,res) =>{
    res.send([
        {
            "id": "11",
            "title": "Sam Taylor-Johnson tapped to direct Amy Winehouse biopic",
            "Image": "https://images.indianexpress.com/2022/07/Sam-Taylor-Johnson-1200by667.jpg",
            "category": "Hollywood",
            "description" : "Sam Taylor-Johnson, best known for Nowhere Boy and Fifty Shades of Grey, is set to direct a biopic about singer and close friend Amy Winehouse. European studio Studiocanal is producing the film titled Back to Black, which draws its name from the late singer’s multiple Grammy-winning studio album."
        },
          {
            "id": "55",
            "title": "Chris Hemsworth names his ‘favourite superhero’, fans call him ‘adorable’",
            "Image": "https://images.indianexpress.com/2022/07/thor-love-and-thunder.jpg",
             "category": "Hollywood",
            "description" : "Hemsworth shared two photos with the caption, “Here’s two pics of me and my daughter. One was the first time she was on set 11 years ago, the other is the most recent on Thor: Love and Thunder. She’s my favourite superhero.” The actor shared photos of his daughter India, who was seen as Gorr’s daughter in the latest Thor movie."
        },
          {
            "id": "12",
            "title": "Sylvester Stallone’s Samaritan to debut on Prime Video in August",
            "Image": "https://images.indianexpress.com/2022/07/Samaritan-1200by667.jpg",
             "category": "mix",
            "description" : "Hollywood veteran Sylvester Stallone‘s upcoming action movie Samaritan will premiere on streaming service Prime Video on August 26. Directed by Julius Avery of Overlord fame, the film also stars Javon “Wanna” Walton, Pilou Asbaek, Dascha Polanco and Moises Arias"
        },
          {
            "id": "13",
            "title": "Marvel slammed by VFX artists for exhausting working conditions and ‘worst methodology of production and management’",
         "Image": "https://images.indianexpress.com/2022/05/she-hulk-trailer.jpgMarvel Studios has received harsh criticism from members from the VFX community for difficult working conditions. Visual effects artists have slammed the studio for being the ‘worst’ to work for, and accused it of imposing stringent deadlines despite the employees being overworked.",
          "category": "Hollywood",
         "description" : "Marvel Studios has received harsh criticism from members from the VFX community for difficult working conditions. Visual effects artists have slammed the studio for being the ‘worst’ to work for, and accused it of imposing stringent deadlines despite the employees being overworked."
     },
          {
            "id": "62",
            "title": "Thor Love and Thunder scores franchise best debut, earns Rs 64.80 cr in India over 4 days",
            "Image": "https://images.indianexpress.com/2022/07/Thor-Love-and-Thunder-1200by667.jpeg",
             "category": "footer",
            "description" : "Four movies in, Thor is still bringing the hammer down at the box office. Thor: Love and Thunder earned $143 million in its opening weekend in North America, according to studio estimates Sunday. It’s a franchise best for the God of Thunder and another success story of the summer 2022 box office season."
        },
          {
            "id": "14",
            "title": "Kate Mara, Jamie Bell expecting second child",
         "Image": "https://images.indianexpress.com/2022/07/Kate-Mara-and-Jamie-Bell-1200by667.jpg",
          "category": "Hollywood",
         "description" : "Actor couple Kate Mara and Jamie Bell are set to welcome their second child. Mara, 39, made the announcement in an Instagram post on Sunday. “There are three of us in this pic,” the House of Cards star captioned a photograph of herself and Bell, 36, holding hands."
     },
          {
            "id": "15",
            "title": "Chris Evans supports Anthony Mackie, rejects rumours of returning to MCU: ‘Sam Wilson will be Captain America’",
         "Image": "https://images.indianexpress.com/2022/07/captain-america-sam-wilson-1200.jpg",
          "category": "Hollywood",
         "description" : "Chris Evans has quashed rumours of returning to the Marvel Cinematic Universe as Captain America. It comes soon after reports emerged that claimed Chris might be seen reprising his shield-wielding superhero in the franchise’s fourth installment. The Hollywood star confirmed that not his Steve Rogers, but Anthony Mackie’s Sam Wilson will be Captain America."
     },
          {
            "id": "16",
            "title": "Jameela Jamil reacts to 'She-Hulk' character photo criticism",
            "Image": "https://static.toiimg.com/thumb/msid-92831047,imgsize-34472,width-800,height-600,resizemode-75/92831047.jpg",
            "category": "Hollywood",
            "description": " Actress Jameela Jamil was criticised on Twitter for looking dishevelled in a production photo from the upcoming series 'She-Hulk: Attorney at Law' where she portrays the super villain Titania. She agrees  is warranted."
          },
          {
            "id": "17",
            "title": "James Franco returns to acting four years after sex-misconduct allegations",
            "Image": "https://static.toiimg.com/thumb/msid-92847875,imgsize-45576,width-800,height-600,resizemode-75/92847875.jpg",
            "category": "Hollywood",
            "description": " For the unversed, in January 2018, five women accused Franco of inappropriate and sexually exploitative behaviour, while four of them were students at his acting school Studio 4, which was soon closed. Two of the students filed a lawsuit in 2019 alleging that classes existed mainly to create a way for Franco and his associates to take advantage of young women."
          },
          {
            "id": "18",
            "title": "One of convicted rapper R. Kelly's victims says she's engaged to him",
            "Image": "https://static.toiimg.com/thumb/msid-92857517,imgsize-84712,width-800,height-600,resizemode-75/92857517.jpg",
            "category": "Hollywood",
            "description": "The Johnny Depp-Amber Heard libel trial, which generated intense interest for two months earlier this year as a live-streamed, no-holds-barred soap opera featuring one of Hollywood's biggest stars, is not fading away quietly. "
          },
          {
            "id": "19",
            "title": "Colton Ryan: Women are vilified in the media, 'The Girl From Plainville' makes you reflect on how we have all been complicit",
            "Image": "https://static.toiimg.com/thumb/msid-92472900,imgsize-95392,width-800,height-600,resizemode-75/92472900.jpg",
            "category": "Hollywood",
            "description": " Hollywood star Johnny Depp was reportedly offered a whopping Rs 2,355 crore ($301 million) deal for him to return as the iconic character of Jack Sparrow in the 'Pirates Of The Caribbean' franchise and a series."
          },
          {
            "id": "20",
            "title": "Comedian Tony Baker's son dies at 21 in car crash",
            "Image": "https://static.toiimg.com/thumb/msid-85128305,width-800,height-600,resizemode-75,imgsize-28324,pt-32,y_pad-40/85128305.jpg",
            "category": "Hollywood",
            "description": " Upon arriving, the release stated, the police and paramedics determined that three passengers of a silver Volkswagen were ejected from the vehicle and died at the scene. The press release said that a fourth passenger was taken to a local hospital with serious injuries."
          }
    ])
}
module.exports.apiController = get;