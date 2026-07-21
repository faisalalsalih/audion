import { podcastData } from '@/constants'
import React from 'react'
import PodcastCard from '@/components/shared/PodcastCard'



const Home = () => {
  return (
    <>
      <div className="mt-9 flex flex-col gap-9">
        
        <section className="flex flex-col gap-5">

          <h1 className="text-20 font-bold text-charcoal">Trending Podcasts</h1>

        <div className="podcast_grid">
          {
            podcastData.map((podcast) => (

              <PodcastCard
              key={podcast.id}
              title={podcast.title}
              description={podcast.description}
              podcastId={podcast.id}
              imgUrl={podcast.imgURL}
              />

            ))
          }
        </div>

        </section>
        
      </div>
    </>
  )
}

export default Home

