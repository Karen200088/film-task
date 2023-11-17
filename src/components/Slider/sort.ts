import React from 'react'

export const useSort = (date: any[]) => {
  return React.useMemo(() => {
    let newDateWithoutSort = date.map((el) => {
      return {
        ...el,
        Date: +new Date(el.Date),
      }
    })

    let sortedByDate = newDateWithoutSort.sort((a, b) => b.Date - a.Date)

    let returnedDate = sortedByDate.map((el) => {
      return {
        ...el,
        Date: new Date(el.Date).toUTCString(),
      }
    })

    if (localStorage.getItem('favoritFilmId')) {
      const favoritFilmId = localStorage.getItem('favoritFilmId')

      let findFavoritFilm = returnedDate.find((el) => el.Id === favoritFilmId)
      returnedDate = returnedDate.filter((el) => el.Id !== favoritFilmId)
      returnedDate.unshift(findFavoritFilm)
    }
    return returnedDate
  }, [date.length])
}
