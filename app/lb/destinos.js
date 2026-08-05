const basePath = process.env.NODE_ENV === "production" ? "/Portal-Viagens" : "";;

export const destinos = [
    {
        id: 1,
        title: "Disney Magic World",
        slug: "disney",
        imagem: `${basePath}/image/disney/disneyLogo.jpg`,
        value: "R$ 12.000",
        destaque: false,

        historia:"A Walt Disney World Resort, inaugurada em 1971 em Orlando, na Flórida, nasceu do sonho de Walt Disney de criar um lugar onde pessoas de todas as idades pudessem viver experiências inesquecíveis. Hoje, o complexo reúne quatro parques temáticos, dois parques aquáticos, hotéis, restaurantes e atrações mundialmente famosas. Combinando tecnologia, criatividade e a magia dos personagens Disney, tornou-se um dos destinos turísticos mais visitados do mundo, encantando milhões de visitantes todos os anos.",

        pontosTuristicos: [
            {
                image:`${basePath}/image/disney/cinderelaCastle.jpg`,
                name: "Cinderella Castle",
            },

            {
                image:`${basePath}/image/disney/spaceMontain.jpg`,
                name: "Space Montain",
            },

            {
                image:`${basePath}/image/disney/guardiansOfGalaxy.jpg`,
                name: "Guardians of Galaxy",
            },
            
            {
                image:`${basePath}/image/disney/toyStoryLand.jpg`,
                name: "Toy Story Land",
            },
 
        ],
    },
    {
        id: 2,
        title: "Tokyo",
        slug: "tokyo",
        imagem: `${basePath}/image/tokyo/tokyoLogo.jpg`,
        value: "R$ 10.000",
        destaque: false,

        historia:"Tokyo, capital do Japão, teve origem como uma pequena vila de pescadores chamada Edo. No século XVII, tornou-se o centro político do país e, em 1868, passou a ser a capital imperial, recebendo o nome de Tóquio, que significa 'Capital do Leste'. Ao longo dos anos, a cidade superou grandes desafios, como terremotos e a Segunda Guerra Mundial, transformando-se em uma das metrópoles mais modernas e influentes do mundo. Hoje, Tóquio encanta visitantes ao combinar tecnologia de ponta, tradição milenar, templos históricos, bairros vibrantes e uma das culturas mais fascinantes do planeta.",

        pontosTuristicos: [
            {
                image:`${basePath}/image/tokyo/tokyoTower.jpg`,
                name: "Tokyo Tower",
            },

            {
                image:`${basePath}/image/tokyo/shibuya.jpg`,
                name: "Shibuya",
            },

            {
                image:`${basePath}/image/tokyo/sensoJi.jpg`,
                name: " Sensō-ji",
            },
            
            {
                image:`${basePath}/image/tokyo/meijiShrine.jpg`,
                name: "Meiji Shrine",
            },
            
            
            
            
        ],

    },
    {
        id: 3,
        title: "Londres",
        slug: "londres",
        imagem: `${basePath}/image/londres/londresLogo.jpg`,
        value: "R$ 11.000",
        destaque: false,

        historia:"Fundada pelos romanos há quase 2 mil anos, Londres cresceu às margens do rio Tâmisa e se tornou uma das cidades mais influentes do mundo. Caminhar por suas ruas é viajar no tempo entre palácios reais, monumentos históricos e bairros cheios de cultura. Do majestoso Palácio de Buckingham ao icônico Big Ben, passando por museus, parques e mercados tradicionais, Londres encanta visitantes com sua mistura única de tradição, modernidade e diversidade.",

        pontosTuristicos: [
            {
                image:`${basePath}/image/londres/bigBen.jpeg`,
                name: "Big Ben",
            },

            {
                image:`${basePath}/image/londres/londonTower.jpeg`,
                name: "London Tower",
            },

            {
                image:`${basePath}/image/londres/palace.jpeg`,
                name: "Buckingham Palace",
            },
            
            {
                image:`${basePath}/image/londres/londonEye.jpeg`,
                name: "London Eye",
            },
        ],

        
    },
    {
        id: 4,
        title: "Paris",
        slug: "paris",
        imagem: `${basePath}/image/paris/parisLogo.jpg`,
        value: "R$ 13.000",
        destaque: true,

        historia:"Conhecida como a Cidade Luz, Paris é a capital da França e um dos destinos mais visitados do mundo. Sua origem remonta a mais de dois mil anos, quando a região era habitada pela tribo celta dos Parisii, às margens do Rio Sena. Com o passar dos séculos, a cidade tornou-se um importante centro político, cultural e econômico da Europa. Ao longo de sua história, Paris foi palco de acontecimentos marcantes, como a Revolução Francesa, e viu nascer monumentos que hoje são símbolos mundiais, como a Torre Eiffel, a Catedral de Notre-Dame e o Museu do Louvre. Atualmente, a cidade encanta visitantes com sua arquitetura elegante, museus renomados, gastronomia, cafés tradicionais e atmosfera romântica. Passear por suas ruas é uma oportunidade de conhecer séculos de história, arte e cultura em um dos lugares mais fascinantes do mundo.",

        pontosTuristicos: [
            {
                image:`${basePath}/image/paris/arcDeTriomphe.jpg`,
                name: "Arc de Triomphe",
            },

            {
                image:`${basePath}/image/paris/louvreMuseum.jpg`,
                name: "Louvre Museum",
            },

            {
                image:`${basePath}/image/paris/eiffelTower.jpg`,
                name: "Eiffel Tower",
            },
            
            {
                image:`${basePath}/image/paris/notreDame.jpg`,
                name: "Notre-Dame",
            }, 
        ],
    },
    
    {
        id: 5,
        title: "Singapura",
        slug: "singapura",
        imagem: `${basePath}/image/singapura/singapuraLogo.jpg`,
        value: "R$ 9.000",
        destaque: true,

        historia:"Singapura é uma cidade-estado localizada no Sudeste Asiático que se transformou, em poucas décadas, em um dos países mais modernos e desenvolvidos do mundo. Fundada como um importante porto comercial em 1819, sua posição estratégica favoreceu o crescimento econômico e a tornou um dos principais centros financeiros e comerciais da Ásia. Atualmente, Singapura encanta visitantes pela combinação de arquitetura futurista, áreas verdes bem preservadas, diversidade cultural e excelente qualidade de vida. Com atrações icônicas, gastronomia multicultural e um sistema urbano exemplar, é um destino que une tradição, inovação e entretenimento em um só lugar.",


        pontosTuristicos: [
            {
                image:`${basePath}/image/singapura/gardenBay.jpg`,
                name: "Garden Bay",
            },

             {
                image:`${basePath}/image/singapura/merlionPark.jpg`,
                name: "Merlion Park",
            },

             {
                image:`${basePath}/image/singapura/sentosa.jpg`,
                name: "Sentosa",
            },

             {
                image:`${basePath}/image/singapura/marinaBaySands.jpg`,
                name: "Marina Bay Sands",
            },
        
        ],
    },
    {
        id: 6,
        title: "Tailândia",
        slug: "tailandia",
        imagem: `${basePath}/image/tailandia/tailand.jpg`,
        value: "R$ 8.000",
        destaque: true,

        historia:"A Tailândia é um país do Sudeste Asiático conhecido por sua rica cultura, templos históricos e belas paisagens naturais. Sua história tem origem em antigos reinos, como o Reino de Sukhothai, considerado o primeiro grande reino tailandês, fundado no século XIII. Ao longo dos séculos, o país passou pelo crescimento do Reino de Ayutthaya e pelo fortalecimento da dinastia Chakri, que permanece até os dias atuais. Conhecida antigamente como Sião, a Tailândia foi o único país do Sudeste Asiático que não foi colonizado por potências europeias, mantendo sua independência e preservando suas tradições. Hoje, o país encanta visitantes com seus templos budistas, praias paradisíacas, culinária famosa e uma cultura que mistura história, espiritualidade e modernidade.",

        pontosTuristicos: [
            {
                image:`${basePath}/image/tailandia/chiangMai.jpg`,
                name: "Chiang Mai",
            },

            {
                image:`${basePath}/image/tailandia/grandPalace.jpg`,
                name: "Grand Palace",
            },

            {
                image:`${basePath}/image/tailandia/phiPhi.jpg`,
                name: "Phi Phi Islands",
            },
            
            {
                image:`${basePath}/image/tailandia/watArun.jpg`,
                name: "Wat Arun",
            },

        ],
    },




]