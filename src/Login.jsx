import "./Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChalkboard } from "@fortawesome/free-solid-svg-icons"
export default function Login(){

  return(
    <div className="container">
        <FontAwesomeIcon icon={faChalkboard} />
        <p>QuickTyping</p>
    </div>
  )
}