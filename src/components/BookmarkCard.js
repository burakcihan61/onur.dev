import { Link2Icon } from 'lucide-react'

import { TweetCard } from '@/components/TweetCard/TweetCard'

export const BookmarkCard = ({ bookmark }) => {
  // Tweets collection id is 15896982
  if (bookmark.link && bookmark.collectionId === 15896982) {
    return <TweetCard bookmark={bookmark} />
  }

  return (
    <a
      key={bookmark._id}
      className="thumbnail-shadow flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
      href={bookmark.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="overflow-hidden rounded-lg">
        <img
          src={bookmark.cover}
          alt={bookmark.title}
          width={1200}
          height={630}
          loading="lazy"
          className="aspect-[1200/630] animate-reveal rounded-lg border bg-[url('/assets/fallback.webp')] bg-cover bg-center bg-no-repeat object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = '/assets/fallback.webp'
          }}
        />
      </span>
      <div className="flex flex-col gap-1">
        <h3>{bookmark.title}</h3>
        <span className="line-clamp-5 inline-flex items-center gap-1 text-sm text-gray-500">
          <Link2Icon size={16} />
          {bookmark.domain}
        </span>
        <span className="line-clamp-6 text-sm">
          {bookmark.excerpt || bookmark.note}
        </span>
      </div>
    </a>
  )
}
