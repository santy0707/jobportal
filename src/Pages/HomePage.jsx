import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <div>    
     <Hero />
     <HomeCard />
     <JobListings />
     <ViewAllJobs />
    </div>
  )
}

export default HomePage
