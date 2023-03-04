const INFO_COACHES_SELECTORS = {
  teamName: { selector: '.name.mt10', typeOf: 'string' },
  coach: { selector: '.name.mt20', typeOf: 'string' },
  coachImg: { selector: '.player-circle-box', typeOf: 'string' }
}

export async function getCoaches($) {
  const coachsTeam = $(INFO_COACHES_SELECTORS.coach.selector)
    .toArray()
    .map((coachName) => coachName.children[0].data)

  const coachsImgTeam = $(INFO_COACHES_SELECTORS.coachImg.selector)
    .toArray()
    .map((coachImg) => {
      const { attribs } = coachImg
      const { src } = attribs
      return src
    })

  const teamsName = $(INFO_COACHES_SELECTORS.teamName.selector)
    .toArray()
    .map((teamName) => teamName.children[0].data)

  const teamsWithCoach = coachsTeam.map((coach, i) => {
    return {
      name: coach,
      teamName: teamsName[i],
      image: coachsImgTeam[i]
    }
  })
  return teamsWithCoach
}
