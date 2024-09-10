import { fetchUtils } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

const data = {
    posts: [
        { id: 0, title: 'Post 1', content: 'Content 1' },
        { id: 1, title: 'Post 2', content: 'Content 2' },
        // ... outros posts
    ],
    comments: [
        { id: 0, postId: 0, content: 'Comment 1' },
        { id: 1, postId: 0, content: 'Comment 2' },
        // ... outros comentários
    ],
    slides: [
        { id: 1, title: 'Slide Mobile', imageUrl: 'https://example.com/mobile-slides.jpg', deviceType: 'mobile' },
        { id: 2, title: 'Slider Desktop', imageUrl: 'https://example.com/desktop-slides.jpg', deviceType: 'desktop' },
    ],
    identidadeVisual: {
        logoUrl: 'https://example.com/logo.jpg',
        title: 'Título Principal',
        subtitle: 'Subtítulo da Página',
        theme: {
            buttonColor: '#ff0000',
            titleFontColor: '#000000',
            subtitleFontColor: '#777777',
        },
        components: [
            {
                id: 1,
                type: 'banner',
                title: 'Banner 1',
                subtitle: 'Subtítulo do Banner',
                backgroundImageUrl: 'https://example.com/banner1.jpg',
                imageUrl: 'https://example.com/image1.jpg',
                videoUrl: null,
                button: {
                    label: 'Saiba Mais',
                    url: 'https://example.com',
                },
            },
            {
                id: 2,
                type: 'video',
                title: 'Vídeo de Apresentação',
                subtitle: 'Assista nosso vídeo',
                backgroundImageUrl: 'https://example.com/video-bg.jpg',
                imageUrl: null,
                videoUrl: 'https://example.com/video.mp4',
                button: null,
            },
        ],
    },
};

const dataProvider = fakeDataProvider(data);

export default dataProvider;
