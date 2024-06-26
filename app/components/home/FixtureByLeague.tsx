import { Fixture } from "@/types"
import FixtureItem from "./FixtureItem"

type PageProps = {
  fixturesData: Fixture[]
}

export default function FixtureByLeague({ fixturesData }: PageProps) {
  if (fixturesData.length > 0) {
    return fixturesData.slice(0, 4).map((match, i) => {
      return <FixtureItem match={match} key={match.fixture.id} index={i} />
    })
  }
}
