import React from 'react'
import { StyleSheet } from 'react-look'

const styles = StyleSheet.create({
  popupContainer: {
    zIndex: 1000,
    position: 'absolute',
    width: 400,
    padding: '20px 20px 10px',
    backgroundColor: '#d9f0f9',
    left: '50%',
    transform: 'translate(-50%, 0)',
    top: 60,
    borderRadius: 7,
    border: '5px solid rgba(255, 255, 255, 0.6)'
  },
  eventDetails: {
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    right: -10,
    top: -10,
    fontWeight: 700,
    color: 'white',
    ':hover': {
      color: '#40B4E5'
    }
  },
  location: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: 800
  },
  date: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: 800,
    color: 'gray'
  },
  description: {
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 500
  }
})

const EventDetails = ({ event, onClose }) => (
  <div className={styles.popupContainer}>
    <div className={styles.eventDetails}>
      <a
        href='#'
        onClick={() => { onClose() }}
        className={styles.closeButton}
      >
        x
      </a>
      <div className={styles.location}>
        {`${event.city}, ${event.state}`}
      </div>
      <div className={styles.date}>
        {event.date}
      </div>
      <div className={styles.description}>
      {`Join us as we talk about the
        plan to create a Brand New Congress.
        Exact location and time will be announced soon.`}
      </div>
      <button
        className={styles.button}
        onClick={() => {
          window.open(event.rsvpUrl, '_blank')
        }}
      >
      RSVP
      </button>
    </div>
  </div>
)

EventDetails.propTypes = {
  onClose: React.PropTypes.func,
  event: React.PropTypes.shape({
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    date: React.PropTypes.string,
    rsvpUrl: React.PropTypes.string
  })
}

export default EventDetails