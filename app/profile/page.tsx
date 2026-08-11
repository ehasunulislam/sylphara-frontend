import React from 'react'
import ProfileCard from './_components/ProfileCard/ProfileCard'
import { getProfileWithLoginUserAction } from './_action/getProfileWithLoginUser'

const page = async() => {
  const data = await getProfileWithLoginUserAction();

  return (
    <div className="page-container">
      <div className="page-center">
        <div className="profile-card-wrapper">
          <ProfileCard profile={data.data} />
        </div>
      </div>
    </div>
  )
}

export default page
