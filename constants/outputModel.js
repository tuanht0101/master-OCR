export const outputModel = [
    {
        id: 10,
        results: {
            output: [
                { label: 'education', confidence: 0.8 },
                { label: 'experience', confidence: 0.9 }
            ],
            time: 0.6
        }
    },
    {
        id: 20,
        results: {
            output: {
                text:
                    'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.',
                value: 'When Sebastian Thrun started working on self-driving'
            },
            time: 0.6
        }
    },
    {
        id: 40,
        results: {
            output: {
                origin: [
                    {
                        url: 'cv/01c5641a97d30799ce73f387893b387f_page_0.png',
                        width: 601,
                        height: 842
                    }
                ],
                value: [
                    {
                        url:
                            'compvi/d3a9fdafc29349a4b6fb84c5c27de2fc_image.png',
                        width: 766,
                        height: 495
                    }
                ]
            },
            time: 0.6
        }
    },
    {
        id: 50,
        results: {
            output: {
                text:
                    'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously.',
                entities: [
                    { end: 20, start: 5, type: 'person' },
                    { end: 67, start: 61, type: 'org' },
                    { end: 75, start: 71, type: 'date' }
                ]
            },
            time: 0.6
        }
    },
    {
        id: 60,
        results: {
            output: {
                origin: [
                    {
                        url: 'cv/01c5641a97d30799ce73f387893b387f_page_0.png',
                        width: 601,
                        height: 842
                    }
                ],
                value: 'When Sebastian Thrun started working on self-driving'
            },
            time: 0.6
        }
    },
    {
        id: 70,
        results: {
            output: {
                origin: [
                    {
                        url:
                            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
                        // width: 601,
                        // height: 842
                    }
                ],
                value: 'When Sebastian Thrun started working on self-driving'
            },
            time: 0.6
        }
    }
]
