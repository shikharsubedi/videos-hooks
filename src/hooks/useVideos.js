import { useState, useEffect } from 'react'
import youtube from '../api/youtube'

// setSelectedVideo(data.items[0])
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([])
  const search = async (term) => {
    if(!term.trim()) {
      return
    }
    try {
      const { data } = await youtube.get('/search', {
        params: {
          q: term
        }
      })
      setVideos(data.items)
      
    } catch(err) {
      console.log(err.message)
      return
    }  
  }
  
  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  return [videos, search]
}

export default useVideos