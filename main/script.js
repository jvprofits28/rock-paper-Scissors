// caputure user choice
    //user can pick r,p, or s
    const userChoice = prompt('what do you choose?r, p or s?')
    console.log(userChoice);
    //edge case:  user puts in capital letters
    //edge case: user puts in invalid letter
    //edge case: user cancels out of prompt

// generate computer choice   
 const choices = ["r","p","s"]
    //3 possible chioces rock paper and scissors
    const randomChoices = Math.floor(Math.random()*3)
    const computerChoice = choices[randomChoices]

console.log(computerChoice);
    // should be randomized each time

// TODO: compare choices
    // rock beats paper, paper beats rock scissors beats paper.
    //update stats each round

// TODO: show current session stats
    //track current users wins losses and ties
    
// TODO: ask to play again 
    //if user says play again, start over. otherwise, stop