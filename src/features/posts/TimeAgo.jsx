import { formatDistance, parseISO } from 'date-fns'
import React from 'react'

function TimeAgo({ timestamp }) {
  let timeAgo = ''
  if (timestamp) {
    const date = parseISO(timestamp)
    const now = new Date()
    const timePeriod = formatDistance(date, now)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
