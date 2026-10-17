export type Language = 'en-US' | 'pt-BR';

export type TimelineEntry = {
    title: string;
    subtitle: string;
    date?: string;
    description?: string;
};

export type Translation = {
    home: {
        subtitle: string;
        cta: string;
    };
    about: {
        title: string;
        story: string[];
        downloadCv: string;
    };
    resume: {
        title: string;
        education: string;
        experience: string;
        educationEntries: TimelineEntry[];
        experienceEntries: TimelineEntry[];
    };
    contact: {
        title: string;
        subtitle: string;
        description: string;
        email: string;
        location: string;
        locationValue: string;
        phone: string;
        name: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        subject: string;
        subjectPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        send: string;
    };
    controls: {
        themeLabel: string;
        languageLabel: string;
        lightMode: string;
        darkMode: string;
    };
};

export const translations: Record<Language, Translation> = {
    'en-US': {
        home: {
            subtitle: 'Software Engineer',
            cta: 'Talk with me!',
        },
        about: {
            title: 'About Me',
            story: [
                "I was just a 7-year-old kid when I discovered Ragnarok Online at a local internet café. The moment I saw that game, I became completely obsessed with it. Looking back, I think a lot of what I learned back then started with a single motivation: I wanted to get better at Ragnarok.",
                "First came English. I needed to understand what the people on those forums were talking about. Then came web design. I wanted to build things for my own server, make everything feel like mine, and understand how those websites actually worked. And eventually, programming.",
                "Back then, I didn't have a computer or internet at home. But as soon as I got my first computer and internet connection, I started exploring everything I could find. Videos and forum posts with titles like: \"How to create your own private server\", \"How to easily create a Ragnarok server\". Spoiler: it wasn't easy.",
                "At some point, I even reached out to one of the developers of a popular Ragnarok server at the time. I told him I was 14, didn't have a team, and, technically speaking, wasn't a programmer. He chuckled on Skype. Never replied again.",
                "So I did what any reasonable teenager would do: I tried to build it myself. And somehow, it worked.",
                "I started developing my own server with the little knowledge I had. I made the artwork, the logo, the website, the famous Control Panel, configured eAthena, set up the server rates, and basically learned everything along the way. My \"tech stack\" back then was something like: HTML, CSS, JavaScript, PHP, MySQL, FileZilla, Visual Basic, and Lua.",
                "Looking back, I realize I was probably committing some kind of crime against software engineering. But it worked.",
                "Eventually, I managed to get the server online. At first, it was only accessible to people using the same internet provider I was using. The problem was, I didn't exactly have money to spend on hosting. So I thought: \"Why not just host it at home?\"",
                "That's how I discovered the wonderful world of port forwarding. What I didn't know yet was the difference between server-side and client-side, network security, exposing services to the internet, and basically anything related to security. The result? My server got hacked.",
                "And that's how I stopped programming for a while.",
                "Years later, I started college and discovered that, apparently, I hadn't escaped programming after all. Now I had to learn programming logic, pointers in C, and all those things that seem specifically designed to make you question your life choices.",
                "But this time, it was different. The kid who wanted to build a Ragnarok server was still there. I just had better tools, bigger problems, and, finally, a better idea of what I was actually doing.",
                "And that's where my journey as a software engineer really began."
            ],
            downloadCv: 'Download CV',
        },
        resume: {
            title: 'Resume',
            education: 'Education',
            experience: 'Experience',
            educationEntries: [
                { title: 'Systems Analyses and Development', subtitle: 'Anhanguera Educational' },
                { title: 'Cloud Computing', subtitle: 'CEPEDI' },
                { title: 'Computer Engineering', subtitle: 'State University of Feira de Santana', date: '2015 - Interrupted' },
                { title: 'Full Stack Development', subtitle: 'Udemy Courses' },
            ],
            experienceEntries: [
                { title: 'Software Engineer', subtitle: 'MB Labs', description: 'Developing web applications using React, TypeScript, and Node.js. Working with cloud services and implementing DevOps practices.' },
                { title: 'Software Engineer', subtitle: 'Castelo Branco Business Solutions', description: 'Created responsive websites and web applications for various clients. Specialized in React, JavaScript, and modern CSS frameworks.' },
                { title: 'Software Developer', subtitle: 'UrbanMob APP', description: 'Started my professional journey learning web development fundamentals. Worked on HTML, CSS, JavaScript, and basic React projects.' },
            ],
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Get in Touch',
            description: "I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and development.",
            email: 'Email',
            location: 'Location',
            locationValue: 'Bahia, Brazil',
            phone: 'Phone',
            name: 'Name',
            namePlaceholder: 'Your name',
            emailPlaceholder: 'Your email',
            subject: 'Subject',
            subjectPlaceholder: 'Subject',
            message: 'Message',
            messagePlaceholder: 'Your message',
            send: 'Send Message',
        },
        controls: {
            themeLabel: 'theme',
            languageLabel: 'lang',
            lightMode: 'Light mode',
            darkMode: 'Dark mode',
        },
    },
    'pt-BR': {
        home: {
            subtitle: 'Engenheiro de Software',
            cta: 'Fale comigo!',
        },
        about: {
            title: 'Sobre Mim',
            story: [
                "Eu tinha apenas 7 anos quando descobri Ragnarok Online num cyber café da minha cidade. No instante em que vi aquele jogo, me tornei completamente obcecado por ele. Olhando para trás, acho que grande parte do que aprendi naquela época começou com uma única motivação: eu queria ficar bom em Ragnarok.",
                "Primeiro veio o inglês. Eu precisava entender o que as pessoas naqueles fóruns estavam falando. Depois veio o design de sites. Eu queria construir coisas para o meu próprio servidor, deixar tudo com a minha cara e entender como aqueles sites realmente funcionavam. E, eventualmente, a programação.",
                "Naquela época eu não tinha computador nem internet em casa. Mas assim que consegui o meu primeiro computador e a minha primeira conexão, comecei a explorar tudo que eu encontrava. Vídeos e tópicos em fóruns com títulos como: \"Como criar seu próprio servidor privado\", \"Como criar um servidor de Ragnarok facilmente\". Spoiler: não foi fácil.",
                "Em determinado momento, até entrei em contato com um dos desenvolvedores de um servidor de Ragnarok popular da época. Falei que tinha 14 anos, não tinha equipe e, tecnicamente falando, não era programador. Ele riu pelo Skype. Nunca mais respondeu.",
                "Então fiz o que qualquer adolescente razoável faria: eu tentei construir sozinho. E, de algum jeito, deu certo.",
                "Comecei a desenvolver meu próprio servidor com o pouco conhecimento que eu tinha. Fiz a arte, o logo, o site, o famoso Control Panel, configurei o eAthena, ajustei as rates do servidor e basicamente aprendi tudo no caminho. Minha \"tech stack\" da época era mais ou menos: HTML, CSS, JavaScript, PHP, MySQL, FileZilla, Visual Basic e Lua.",
                "Olhando para trás, percebo que provavelmente cometi algum tipo de crime contra a engenharia de software. Mas deu certo.",
                "Eventualmente consegui colocar o servidor no ar. No começo, só era acessível para quem usava o mesmo provedor de internet que eu. O problema é que eu não tinha exatamente dinheiro para gastar com hospedagem. Aí eu pensei: \"Por que não hospedar em casa?\"",
                "Foi assim que descobri o admirável mundo do port forwarding. O que eu ainda não sabia era a diferença entre server-side e client-side, segurança de rede, expor serviços para a internet e basicamente qualquer coisa relacionada à segurança. O resultado: meu servidor foi hackeado. E foi assim que parei de programar por um tempo.",
                "Anos depois, entrei na faculdade e descobri que, aparentemente, eu não tinha escapado da programação. Agora eu precisava aprender lógica de programação, ponteiros em C e todas aquelas coisas que parecem ter sido feitas especialmente para você questionar suas escolhas de vida.",
                "Mas dessa vez era diferente. O garoto que queria construir um servidor de Ragnarok ainda estava lá. Eu só tinha ferramentas melhores, problemas maiores e, finalmente, uma ideia melhor do que eu realmente estava fazendo.",
                "E é aí que a minha jornada como engenheiro de software realmente começou."
            ],
            downloadCv: 'Baixar Currículo',
        },
        resume: {
            title: 'Currículo',
            education: 'Formação',
            experience: 'Experiência',
            educationEntries: [
                { title: 'Análise e Desenvolvimento de Sistemas', subtitle: 'Anhanguera Educacional' },
                { title: 'Computação em Nuvem', subtitle: 'CEPEDI' },
                { title: 'Engenharia da Computação', subtitle: 'Universidade Estadual de Feira de Santana', date: '2015 - Interrompido' },
                { title: 'Desenvolvimento Full Stack', subtitle: 'Cursos Udemy' },
            ],
            experienceEntries: [
                { title: 'Engenheiro de Software', subtitle: 'MB Labs', description: 'Desenvolvendo aplicações web com React, TypeScript e Node.js. Trabalhando com serviços em nuvem e aplicando práticas de DevOps.' },
                { title: 'Engenheiro de Software', subtitle: 'Castelo Branco Business Solutions', description: 'Criei sites e aplicações web responsivos para diversos clientes. Especializado em React, JavaScript e frameworks modernos de CSS.' },
                { title: 'Desenvolvedor de Software', subtitle: 'UrbanMob APP', description: 'Comecei minha jornada profissional aprendendo os fundamentos do desenvolvimento web. Trabalhei com HTML, CSS, JavaScript e projetos básicos em React.' },
            ],
        },
        contact: {
            title: 'Contato',
            subtitle: 'Entre em Contato',
            description: 'Estou sempre aberto a discutir novas oportunidades, projetos interessantes ou simplemente ter uma conversa amigável sobre tecnologia e desenvolvimento.',
            email: 'E-mail',
            location: 'Localização',
            locationValue: 'Bahia, Brasil',
            phone: 'Telefone',
            name: 'Nome',
            namePlaceholder: 'Seu nome',
            emailPlaceholder: 'Seu e-mail',
            subject: 'Assunto',
            subjectPlaceholder: 'Assunto',
            message: 'Mensagem',
            messagePlaceholder: 'Sua mensagem',
            send: 'Enviar Mensagem',
        },
        controls: {
            themeLabel: 'tema',
            languageLabel: 'idioma',
            lightMode: 'Modo claro',
            darkMode: 'Modo escuro',
        },
    },
};
