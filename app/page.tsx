import { AllFixtures, Standing } from "@/types"
import getStandings from "./utils/getStandings"
import StandingAndFixtures from "./components/home/StandingsAndFixtures"
import getFixturesForFiveLeagues from "./utils/getFixturesForFiveLeague"

export default async function Home() {
  const standingsData: Standing[] = await getStandings()
  const filteredFixtures: AllFixtures[] = await getFixturesForFiveLeagues()

  return (
    <div className="flex flex-col w-full justify-center items-center md:p-10">
      <StandingAndFixtures
        standingsData={standingsData}
        filteredFixtures={filteredFixtures}
      />
    </div>
  )
}
