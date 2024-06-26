"use client"

import { Fixture } from "@/types"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import LocalTime from "../LocalTime"

type PageProps = {
  match: Fixture
  index: number
}
export default function FixtureItem({ match, index }: PageProps) {
  const today = moment()
  const matchDate = moment(match.fixture.date)

  return today.isBefore(matchDate) ? (
    <Link
      key={match.fixture.id}
      href={`/match/${match.fixture.id}`}
      className={`flex w-full p-2 justify-center items-center h-36 hover:bg-red-800/50
                ${index % 2 === 0 ? "bg-black/40" : ""} animated-div 
                `}
    >
      <div className="w-1/3 flex flex-col justify-center items-center text-center">
        <Image
          src={match.teams.home.logo}
          alt="HomeLogo"
          height={70}
          width={70}
        />
        {match.teams.home.name}
      </div>
      <div className="w-1/3 h-full flex flex-col justify-center items-center">
        <div className="h-1/3 text-xs text-center">
          <LocalTime fixture={match} />
        </div>
        <div className="h-1/3 text-center">vs</div>
        <div className="h-1/3"></div>
      </div>
      <div className="w-1/3 text-center flex flex-col justify-center items-center">
        <Image
          src={match.teams.away.logo}
          alt="AwayLogo"
          height={70}
          width={70}
        />
        {match.teams.away.name}
      </div>
    </Link>
  ) : null
}
