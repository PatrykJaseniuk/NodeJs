const inquier = require('inquirer')

var question= [
    {
      type: 'input',
      name: 'name',
      message: "Podaj swoje imie"
    }
  ]

inquier.prompt(question).then(answers=>{
    console.log('witam Pana, Panie ',answers.name )
})