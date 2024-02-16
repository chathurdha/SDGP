import React from 'react'
import Logo from '../../assets/Logo.png'
import NotifIcon from '../../assets/Notif_Icon.png'

function MyFunction(){
    console.log("clicked")
}


function Header(props) {
    const OrgLogo = props.OLogo;
  return (
    <div>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
            <p>
                Dashboard
            </p>
        </div>
        <div>
            <div>
                <button >
                    <img src={NotifIcon} alt="Notif_Icon" onClick={MyFunction}/>
                </button>
            </div>
            <div>
                <button >
                    <img src={OrgLogo} alt="Logo" onClick={MyFunction}/>
                </button>
            </div>
            <div>
                <div>
                    <button >
                        button
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
