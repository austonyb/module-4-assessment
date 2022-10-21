let guestLog = ["Auston", "Janalie", "Bill", "Kevin"]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    fortuneCookie: (req, res) => {
        const fortunes = ["All your hard work will soon pay off.", "An inch of time is an inch of gold.", "That wasn't chicken.", "A feather in the hand is better than a bird in the air.", "An acquaintance of the past will affect you in the near future.", "All we are is dust in the wind, dude.", "You will soon be giving this assessment an A.", "Ben rocks", "Believe it can be done and you will be a step closer.", "Sage advice rarely includes the herb sage", "You're older than you've ever been and now you're getting older.", "A great grader, you are.", "If the incompetent can only be judged by the competent, who judges the competent?", "//insert fortune here", "aLl YoUr BaSeS bE oUrS!¡!¡"]

        //choose a random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    signLog: (req, res) => {
        let {name} = req.body
        // console.log(req.body)
        // console.log('data type sent back is: '+typeof(req.body))
        guestLog.push(name)
        console.log(guestLog)
        res.status(200).send(guestLog)
    },

    printLog: (req, res) => {
        res.status(200).send(guestLog)
    },

    editName: (req, res) => {
        let { a,b } = req.body
        let index = guestLog.indexOf(a)
        guestLog.splice(index, 1, b)
        // console.log(guestLog[index])
        res.status(200).send(guestLog)
    },

    deleteName: (req, res) => {
        let deleteName = req.params.name
        deleteName = deleteName.substring(1, deleteName.length)
        console.log(deleteName)

        let index = guestLog.indexOf(deleteName)
        if (index > -1) {
            guestLog.splice(index,1)
        }
        res.status(200).send(guestLog)
    }

}