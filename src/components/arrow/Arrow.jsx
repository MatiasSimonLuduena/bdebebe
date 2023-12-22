/* eslint-disable react/prop-types */
import "./arrow.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const Arrow = ({ arrow }) => {
    return (
        <div className={`arrow ${arrow ? "arrow-opacity-1" : "arrow-opacity-0"}`}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    )
}

export default Arrow