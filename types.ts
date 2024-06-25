type Standing = {
  league: League
}

type League = {
  id: Number
  name: String
  country: String
  logo: string
  flag: string
  season: Number
  standing: [Team[]]
}

type Team = {
  rank: Number
  team: {
    id: Number
    name: String
    logo: String
  }
  points: Number
  goalDiff: Number
  group: String
  form: String
  status: String
  description: String
  all: Games
  home: Games
  away: Games
  update: String
}

type Games = {
  playerd: Number
  win: Number
  draw: Number
  lose: Number
  goals: {
    for: Number
    against: Number
  }
}
