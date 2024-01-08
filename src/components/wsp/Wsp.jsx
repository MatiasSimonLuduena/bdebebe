import "./wsp.css"

const Wsp = () => {
  return (
    <div className="wsp" onClick={() => {
        window.location.href = "https://wa.me/543518147093?text=Tengo%20una%20duda"
    }}>
        <img src="whatsapp.png" alt="whatsapp" />
    </div>
  )
}

export default Wsp