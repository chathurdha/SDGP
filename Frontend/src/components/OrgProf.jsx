import React from 'react'
import Rated from '../assets/Rated.png'
import NonRated from '../assets/NonRated.png'
function OrgProf({OrgName, OrgLogo, OrgDesc, OrgRate, OrgReviewCount, OrgDet}) {
  return (
    <div>
        <div>
            <div></div>
            <div></div>
            <div>
                <p>
                Welcome, {OrgName} Organization
                </p>
            </div>
        </div>
        <div>
            <div>
                <div>
                    
                    <img src={OrgLogo} alt={OrgName} />
                </div>
                <div>
                    <div>
                        
                        <p>
                            {OrgName} Organization
                        </p>
                    </div>
                    <div>
                        
                        <p>
                            {OrgDesc}
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={Rated} alt={OrgRate} />
                            <img src={Rated} alt={OrgRate} />
                            <img src={Rated} alt={OrgRate} />
                            <img src={Rated} alt={OrgRate} />
                            <img src={NonRated} alt={OrgRate} />
                            <p>
                                {OrgRate}   ({OrgReviewCount} reviews)
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    //data table without border
                    <div>
                        <div>
                            <p>
                                Conducted Seminars
                            </p>
                        </div>
                        <div>
                            <p>
                                {OrgDet[0]}
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <p>
                                Volunteer Count 
                           </p>
                        </div>
                        <div>
                            <p>
                                {OrgDet[1]}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>
                                No. Of Branches
                            </p>
                        </div>
                        <div>
                            <p>
                                {OrgDet[2]}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>
                                Req Response Rate
                            </p>
                        </div>
                        <div>
                            <p>
                                {OrgDet[3]}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <button>
                            <label htmlFor="/">
                                Edit Profile
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrgProf