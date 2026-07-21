import React from 'react'
import Image from 'next/image'


interface PodcastCardProps {
  title: string,
  description: string,
  imgUrl: string,
  podcastId: number
}

const PodcastCard = ({ title, description, imgUrl, podcastId } : PodcastCardProps) => {
  return (
    <>
      <div className="cursor-pointer">

        <figure className="flex flex-col gap-2">

          <Image
          src={imgUrl}
          width={174}
          height={174}
          alt={title}
          className="aspect-square w-full h-fit rounded-xl 2xl:size-[200px]" />

          <div className="flex flex-col">
            <h1 className="text-16 truncate font-bold text-charcoal">{title}</h1>
            <h2 className="text-12 truncate capitalize font-normal">{description}</h2>
          </div>

        </figure>

      </div>
    </>
  )
}

export default PodcastCard
