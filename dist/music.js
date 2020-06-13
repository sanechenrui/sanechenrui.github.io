const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "与我无关",
        artist: '阿冗',
        url: 'https://music.163.com/#/song?id=1413585838',
        cover: '/img/thedog.jpg',
      }
    ]
});