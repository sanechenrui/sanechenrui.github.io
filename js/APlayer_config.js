const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '与我无关',
            artist: '阿冗',
            lrc: '',
            cover: 'http://p1.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg?param=300x300',
            url: 'http://music.163.com/song/media/outer/url?id=1413585838.mp3'
                  }

        ]
});
