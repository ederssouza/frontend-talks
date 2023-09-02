export const calcTrip = function (hour, dist) {
  if (hour instanceof Date) {
    // overnight
    if (hour.getHours() > 22 || hour.getHours() < 6) {
      // return dist * 3
      return dist * 3.9
    } else {

      // is sunday
      if (hour.getDay() === 0) {
        // return dist * 2.2
        return dist * 3
      } else {
        // return dist * 2
        return dist * 2.1
      }

    }
  } else {
    return -1
  }

}