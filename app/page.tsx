import { Standing } from "@/types"
import getStandings from "./utils/getStandings"
import StandingAndFixtures from "./components/home/StandingsAndFixtures"

export default async function Home() {
  const standingsData: Standing[] = await getStandings()

  return (
    <div className="flex flex-col w-full justify-center items-center md:p-10">
      <StandingAndFixtures standingsData={standingsData} />
    </div>
  )
}
