/* Add future YouTube videos here. Use the ID after watch?v= or youtu.be/.
   Example shape: { youtubeId: 'YOUR_VIDEO_ID', title: 'Bimanual needle handover' }
   The video section stays hidden until a valid entry is added. */
const projectVideos = [];
const videoGrid = document.getElementById('video-grid');
for (const video of projectVideos) {
  if (!/^[a-zA-Z0-9_-]{11}$/.test(video.youtubeId) || !video.title) continue;
  const article = document.createElement('article');
  const frame = document.createElement('iframe');
  frame.className = 'video-frame';
  frame.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}`;
  frame.title = video.title;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  const title = document.createElement('p');
  title.className = 'video-title';
  title.textContent = video.title;
  article.append(frame, title);
  videoGrid.append(article);
}
if (videoGrid.children.length) document.getElementById('project-videos').hidden = false;
