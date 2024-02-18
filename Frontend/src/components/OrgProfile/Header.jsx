import React from 'react'
import Logo from '../../assets/Logo.png'
import NotifIcon from '../../assets/Notif_Icon.png'

function MyFunction(){
    console.log("clicked")
}


function Header(props) {
    const OrgLogo = props.OLogo;
  return (
    <div className="container mx-auto flex justify-between items-center">
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
            <p>
                Dashboard
            </p>
        </div>
        <div className="w-1/6 flex justify-between items-center">
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
                    <button className="bg-custom-purple hover:bg-white text-white hover:text-custom-purple hover:border border-custom-purple py-2 px-3 rounded text-sm">
                        button
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
