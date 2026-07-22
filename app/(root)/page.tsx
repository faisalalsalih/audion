"use client";

import { podcastData } from '@/constants'
import React from 'react'
import PodcastCard from '@/components/shared/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


const Home = () => {

  const tasks = useQuery(api.tasks.get);

  return (
    <>
      <div className="mt-9 flex flex-col gap-9">

        <section className="flex flex-col gap-5">

          <h1 className="text-20 font-bold text-charcoal">Trending Podcasts</h1>

          <div className="flex min-h-screen flex-col items-center justify-between p-24 text-white">

            {tasks?.map(({ _id, text }) => (
              <div key={_id} className="text-charcoal">{text}</div>
            ))}
            
          </div>

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

