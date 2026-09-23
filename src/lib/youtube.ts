export type YouTubeVideo = {
  id: string;
  title: string;
  published: string;
  thumbnail: string;
  url: string;
};

export async function fetchCultos(): Promise<YouTubeVideo[]> {
  const channelId = 'UCpsKtVaj38Cs96_914q7PQw';
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  try {
    // Revalidate every hour (3600 seconds)
    const response = await fetch(url, {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) return [];

    const xml = await response.text();
    
    const videos: YouTubeVideo[] = [];
    
    // Very simple regex-based parsing to avoid heavy XML parser dependencies
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xml)) !== null) {
      const entryHtml = match[1];
      
      const titleMatch = entryHtml.match(/<title>([^<]+)<\/title>/);
      const idMatch = entryHtml.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
      const pubMatch = entryHtml.match(/<published>([^<]+)<\/published>/);

      if (titleMatch && idMatch && pubMatch) {
        let title = titleMatch[1];
        
        // Decode HTML entities (e.g. &amp; -> &) if any
        title = title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
        
        // Only include "Culto IBFarol"
        if (title.toLowerCase().includes("culto ibfarol")) {
          const id = idMatch[1];
          videos.push({
            id,
            title,
            published: pubMatch[1],
            thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
            url: `https://www.youtube.com/watch?v=${id}`
          });
        }
      }
    }

    return videos;
  } catch (error) {
    console.error("Error fetching YouTube RSS:", error);
    return [];
  }
}
