
import React from 'react'
import homeIcon from './home.png'
import bellIcon from './Path.png'
import saveIcon from './notification.png'
import userIcon from './users.png'

const Nav = () => {

    return (
        <div>
            <div className='navbar'>
                <div className='nav-section'>
                    <div>
                        <p className='heads'>TravelMedia.in</p>
                    </div>
                    <div className='home_section'>
                        <div className='homebar'>
                            <div>
                                <img src={homeIcon} width={30} height={30} />
                            </div>
                            <div>
                                <img src={bellIcon} width={20} height={20}/>
                            </div>
                            <div>
                                <img src={saveIcon} width={20} height={20}/>
                            </div>
                            <div>
                                <img src={userIcon} width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav