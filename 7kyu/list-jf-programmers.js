function listWithGreeting(list){
    return list.map(el=>({...el,greeting:`Hi ${el.firstName}, what do you like the most about ${el.language} ?`}))
}

function listWithGreeting2(list) {
    console.log(list)
  list.forEach(
        (el) =>
            (el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language} ?`)
    )
    return list
}


console.log(
    listWithGreeting2([
        {
            firstName: 'Sofia',
            lastName: 'I.',
            country: 'Argentina',
            continent: 'Americas',
            age: 35,
            language: 'Java',
        },
        {
            firstName: 'Lukas',
            lastName: 'X.',
            country: 'Croatia',
            continent: 'Europe',
            age: 35,
            language: 'Python',
        },
        {
            firstName: 'Madison',
            lastName: 'U.',
            country: 'United States',
            continent: 'Americas',
            age: 32,
            language: 'Ruby',
        },
    ])
)
