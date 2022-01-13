const quotes = [
  { player: '베르너',
    backNumber: '11',
  },
    { player: '루카쿠',
    backNumber: '9',
  },
    { player: '캉테',
    backNumber: '7',
  },
    { player: '티아구 실바',
    backNumber: '6',
  },
    { player: '뤼디거',
    backNumber: '2',
  },
    { player: '마운트',
    backNumber: '19',
  },
    { player: '하베르츠',
    backNumber: '29',
  },
    { player: '풀리식',
    backNumber: '10',
  },
    { player: '코바치치',
    backNumber: '8',
  },
   { player: '조르지뉴',
    backNumber: '5',
  },
   { player: '리스 제임스',
    backNumber: '24',
  }
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

Math.ceil(Math.random()*10)

const todayquote = (quotes[Math.ceil(Math.random()* quotes.length)])

quote.innerText = todayquote.player
author.innerText = todayquote.backNumber