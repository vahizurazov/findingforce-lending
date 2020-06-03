import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// import awesome icons (free-solid-svg-icons / free-brands-svg-icons / free-regular-svg-icons)
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

// import custom icons
import info from './info'

library.add(faInfoCircle, faClock, info)

export default FontAwesomeIcon
