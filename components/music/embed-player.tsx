import React from 'react'

const EmbedPlayer = ({src}: {src: string;}) => {
  return (
    <>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="175" className="w-full overflow-hidden rounded-md" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={src}></iframe>
    </>
    
  )
}

export default EmbedPlayer