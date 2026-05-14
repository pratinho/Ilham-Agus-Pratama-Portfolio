import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Instagram,
  MessageCircle,
  Video, 
  Palette, 
  ExternalLink, 
  ChevronRight, 
  MapPin, 
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Layout,
  Layers,
  Search,
  MessageSquare,
  Menu,
  X,
  Play
} from 'lucide-react';
import { useState, useEffect } from 'react';

const getAssetUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  // Menghapus leading slash jika ada untuk menghindari double slash dengan BASE_URL yang biasanya memiliki trailing slash
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = {
  hard: [
    'Adobe Premiere', 'Adobe After Effects', 'Adobe Photoshop', 'Adobe Illustrator', 'Filmora', 'Figma', 'Canva', 'Capcut', 'Microsoft Office'
  ],
  soft: [
    'Communication', 'Teamwork', 'Critical Thinking', 'Design Thinking', 'Observation', 'Problem Solving', 'Time Management'
  ],
  languages: [
    { name: 'Indonesian', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'Spanish', level: 'Intermediate' }
  ]
};

const EXPERIENCES = [
  {
    company: 'Sport77',
    location: 'Jakarta, Indonesia (Onsite)',
    role: 'Videographer and Video Editor',
    period: 'Apr 2025 - Present',
    logo: 'logo-sport77.png',
    description: 'Jakarta-based sportainment company focused on digital media, content production, and events.',
    tasks: [
      'Edit sports content: highlights, interviews, promos, and social media videos.',
      'Collaborate with creative and editorial teams to produce engaging, on-brand content.',
      'Optimize videos for platforms like YouTube, Instagram, and TikTok.',
      'Manage footage and support full-cycle video production.'
    ]
  },
  {
    company: 'Semen Padang FC',
    location: 'Padang, Indonesia (Onsite)',
    role: 'Graphic Designer and Videographer Intern',
    period: 'Oct 2024 - Apr 2025',
    logo: 'logo-spfc.png',
    description: 'Historic Indonesian football club established in 1980, competes in Liga 1 Indonesia.',
    tasks: [
      'Produce match highlights, player interviews, and promotional content.',
      'Design matchday graphics, team announcements, and marketing materials aligned with club branding.'
    ]
  },
  {
    company: '90 Plus Sports Agency',
    location: 'Barcelona, Spain (Remotely)',
    role: 'Freelance Designer & Editor',
    period: 'May 2022 - Present',
    logo: 'logo-90plus.png',
    description: 'Company in the field of football sports offering Video Highlights, Graphic Design, and Web Development.',
    tasks: [
      'Served as a versatile creative professional proficiently serving as a Video Editor, Graphic Designer, and Web Designer.'
    ]
  },
  {
    company: 'Asia Football Showcase',
    location: 'Bangkok, Thailand (Remotely)',
    role: 'Freelance Video Editor',
    period: 'Oct 2022 - Jul 2024',
    logo: 'logo-asia.png',
    description: 'Company providing trials for foreign football players in Asia.',
    tasks: [
      'Specialized in meticulous assembly and refinement of raw video footage.',
      'Employed advanced technical proficiency to craft compelling content.'
    ]
  },
  {
    company: 'Interfute',
    location: 'Tangerang, Indonesia (Mixed)',
    role: 'Media Specialist & Scout',
    period: 'Oct 2021 - Jul 2024',
    logo: 'logo-interfute.png',
    description: 'Professional Football Player Management company.',
    tasks: [
      'Identify promising football talent through scouting.',
      'Created engaging video content showcasing players\' skills and achievements.',
      'Produced highlight reels and promotional videos.'
    ]
  },
  {
    company: 'PT Global Infotech Solution',
    location: 'Central Jakarta, Indonesia',
    role: 'UI/UX Designer Intern',
    period: 'Aug 2023 - Jan 2024',
    logo: 'logo-global.png',
    description: 'IT Services sector specializing in information technology.',
    tasks: [
      'Developed expertise in Design Thinking, Wireframes, and UI Style Guides.',
      'Led independent projects focusing on enhancing the Learning Management System "Kerjaku".'
    ]
  }
];

interface SubItem {
  title: string;
  platform: 'youtube' | 'instagram' | 'tiktok' | 'image';
  url: string;
  embedId?: string;
}

interface Project {
  title: string;
  description: string;
  type: string;
  image: string;
  subItems: SubItem[];
}

interface Category {
  category: string;
  items: Project[];
}

const PROJECTS: Category[] = [
  {
    category: 'Long-form Video',
    items: [
      {
        title: 'Versus Program',
        description: 'A weekly debate program at Sport77 covering trending football topics. I served as the lead editor for the series, managing multi-camera setups and fast-paced graphic overlays.',
        type: 'Series Development',
        image: 'https://img.youtube.com/vi/Co3gPR9vJDs/maxresdefault.jpg',
        subItems: [
          { title: 'Episode 01', platform: 'youtube', url: 'https://youtu.be/Co3gPR9vJDs', embedId: 'Co3gPR9vJDs' },
          { title: 'Episode 02', platform: 'youtube', url: 'https://youtu.be/dzI7f9hPcX0', embedId: 'dzI7f9hPcX0' },
          { title: 'Episode 03', platform: 'youtube', url: 'https://youtu.be/GSUvnhCRUqs', embedId: 'GSUvnhCRUqs' },
          { title: 'Episode 04', platform: 'youtube', url: 'https://youtu.be/tJnY0-B2o0w', embedId: 'tJnY0-B2o0w' },
          { title: 'Episode 05', platform: 'youtube', url: 'https://youtu.be/CWSlwEtJHT4', embedId: 'CWSlwEtJHT4' },
          { title: 'Episode 06', platform: 'youtube', url: 'https://youtu.be/I1K81DGrcO4', embedId: 'I1K81DGrcO4' },
          { title: 'Episode 07', platform: 'youtube', url: 'https://youtu.be/oVY984p_zM4', embedId: 'oVY984p_zM4' },
          { title: 'Episode 08', platform: 'youtube', url: 'https://youtu.be/LNpLv9usjnU', embedId: 'LNpLv9usjnU' },
          { title: 'Episode 09', platform: 'youtube', url: 'https://youtu.be/XUv-DmZHEQQ', embedId: 'XUv-DmZHEQQ' },
          { title: 'Episode 10', platform: 'youtube', url: 'https://youtu.be/v8qpCVNlqDw', embedId: 'v8qpCVNlqDw' },
          { title: 'Episode 11', platform: 'youtube', url: 'https://youtu.be/Rr1xLsH0eQc', embedId: 'Rr1xLsH0eQc' },
        ]
      },
      {
        title: 'Sportcast77',
        description: 'Elite athlete interview series. Technical production focused on high-quality audio sync, multicam editing, and dynamic storytelling through B-roll integration.',
        type: 'Podcast Production',
        image: 'https://img.youtube.com/vi/QwR0VNxsehI/maxresdefault.jpg',
        subItems: [
          { title: 'Edition 01', platform: 'youtube', url: 'https://youtu.be/QwR0VNxsehI', embedId: 'QwR0VNxsehI' },
          { title: 'Edition 02', platform: 'youtube', url: 'https://youtu.be/uNlQt-kD-zA', embedId: 'uNlQt-kD-zA' },
          { title: 'Edition 03', platform: 'youtube', url: 'https://youtu.be/tHXFG9etgRU', embedId: 'tHXFG9etgRU' },
          { title: 'Edition 04', platform: 'youtube', url: 'https://youtu.be/8zhEzFqRgN0', embedId: '8zhEzFqRgN0' },
          { title: 'Edition 05', platform: 'youtube', url: 'https://youtu.be/HcVDKYM_-Z0', embedId: 'HcVDKYM_-Z0' },
          { title: 'Edition 06', platform: 'youtube', url: 'https://youtu.be/HLJ3impnBas', embedId: 'HLJ3impnBas' },
          { title: 'Edition 07', platform: 'youtube', url: 'https://youtu.be/do3gT9-n72s', embedId: 'do3gT9-n72s' },
          { title: 'Edition 08', platform: 'youtube', url: 'https://youtu.be/QyTdtN9QhT8', embedId: 'QyTdtN9QhT8' },
          { title: 'Edition 09', platform: 'youtube', url: 'https://youtu.be/tdSuFCwTzpc', embedId: 'tdSuFCwTzpc' },
          { title: 'Edition 10', platform: 'youtube', url: 'https://youtu.be/FgEj5LWEkSM', embedId: 'FgEj5LWEkSM' },
          { title: 'Edition 11', platform: 'youtube', url: 'https://youtu.be/au8yXYvzZxI', embedId: 'au8yXYvzZxI' },
        ]
      },
      {
        title: 'Casa LaLiga',
        description: 'Spanish football analysis program. I handled the complete broadcast edit, ensuring seamless transitions between match analysis and news segments.',
        type: 'Broadcast Media',
        image: 'https://img.youtube.com/vi/YD0OXbgkmRI/maxresdefault.jpg',
        subItems: [
          { title: 'Broadcast 01', platform: 'youtube', url: 'https://youtu.be/YD0OXbgkmRI', embedId: 'YD0OXbgkmRI' },
          { title: 'Broadcast 02', platform: 'youtube', url: 'https://youtu.be/a6HAwdnpvDo', embedId: 'a6HAwdnpvDo' },
          { title: 'Broadcast 03', platform: 'youtube', url: 'https://youtu.be/IYxeUfmkAzk', embedId: 'IYxeUfmkAzk' },
          { title: 'Broadcast 04', platform: 'youtube', url: 'https://youtu.be/GQzUqD3xZo4', embedId: 'GQzUqD3xZo4' },
          { title: 'Broadcast 05', platform: 'youtube', url: 'https://youtu.be/7MhwjW3OZ6I', embedId: '7MhwjW3OZ6I' },
          { title: 'Broadcast 06', platform: 'youtube', url: 'https://youtu.be/getd3mIqIlk', embedId: 'getd3mIqIlk' },
          { title: 'Broadcast 07', platform: 'youtube', url: 'https://youtu.be/-H2OKaehQt4', embedId: '-H2OKaehQt4' },
          { title: 'Broadcast 08', platform: 'youtube', url: 'https://youtu.be/_d-bbN3E998', embedId: '_d-bbN3E998' },
          { title: 'Broadcast 09', platform: 'youtube', url: 'https://youtu.be/EEAt92ywY10', embedId: 'EEAt92ywY10' },
          { title: 'Broadcast 10', platform: 'youtube', url: 'https://youtu.be/G6-tr9CWCO8', embedId: 'G6-tr9CWCO8' },
        ]
      },
      {
        title: 'Asia Football Showcase',
        description: 'Professional scouting and interview content for Asian football clinics. High-fidelity editing focusing on player presentation and narrative flow.',
        type: 'Scouting Media',
        image: 'https://img.youtube.com/vi/OqEHqEh50lI/maxresdefault.jpg',
        subItems: [
          { title: 'Feature 01', platform: 'youtube', url: 'https://youtu.be/OqEHqEh50lI', embedId: 'OqEHqEh50lI' },
          { title: 'Feature 02', platform: 'youtube', url: 'https://youtu.be/gzApxS6n4LA', embedId: 'gzApxS6n4LA' },
        ]
      },
      {
        title: 'Football Player Highlights',
        description: 'Fast-paced edits showcasing individual player skills for scouting and promotion.',
        type: 'Highlight Reels',
        image: 'https://img.youtube.com/vi/nWjdMW4_-D0/maxresdefault.jpg',
        subItems: [
          { title: 'Skills Highlight 01', platform: 'youtube', url: 'https://youtu.be/nWjdMW4_-D0', embedId: 'nWjdMW4_-D0' },
          { title: 'Skills Highlight 02', platform: 'youtube', url: 'https://youtu.be/dygmBW2C9Yo', embedId: 'dygmBW2C9Yo' },
          { title: 'Skills Highlight 03', platform: 'youtube', url: 'https://youtu.be/E-O35djZUmo', embedId: 'E-O35djZUmo' },
          { title: 'Skills Highlight 04', platform: 'youtube', url: 'https://youtu.be/1CuZiKcztJo', embedId: '1CuZiKcztJo' },
          { title: 'Skills Highlight 05', platform: 'youtube', url: 'https://youtu.be/s-H3paAla6g', embedId: 's-H3paAla6g' },
          { title: 'Skills Highlight 06', platform: 'youtube', url: 'https://youtu.be/JNqpVAz5s2c', embedId: 'JNqpVAz5s2c' },
          { title: 'Skills Highlight 07', platform: 'youtube', url: 'https://youtu.be/hTflqkoTEVA', embedId: 'hTflqkoTEVA' },
          { title: 'Skills Highlight 08', platform: 'youtube', url: 'https://youtu.be/aHiUB8TPVWA', embedId: 'aHiUB8TPVWA' },
          { title: 'Skills Highlight 09', platform: 'youtube', url: 'https://youtu.be/s_ShpbQGyA8', embedId: 's_ShpbQGyA8' },
          { title: 'Skills Highlight 10', platform: 'youtube', url: 'https://youtu.be/eV8QJoPLA3M', embedId: 'eV8QJoPLA3M' },
          { title: 'Skills Highlight 11', platform: 'youtube', url: 'https://youtu.be/MAbeEJld9kk', embedId: 'MAbeEJld9kk' },
          { title: 'Skills Highlight 12', platform: 'youtube', url: 'https://youtu.be/9nqwpnPV1og', embedId: '9nqwpnPV1og' },
          { title: 'Skills Highlight 13', platform: 'youtube', url: 'https://youtu.be/W-9k36w7fRw', embedId: 'W-9k36w7fRw' },
          { title: 'Skills Highlight 14', platform: 'youtube', url: 'https://youtu.be/nrA7pc1aSmc', embedId: 'nrA7pc1aSmc' },
          { title: 'Skills Highlight 15', platform: 'youtube', url: 'https://youtu.be/7zEzMA01dnk', embedId: '7zEzMA01dnk' },
          { title: 'Skills Highlight 16', platform: 'youtube', url: 'https://youtu.be/Sg1VzeOXoNw', embedId: 'Sg1VzeOXoNw' },
        ]
      }
    ]
  },
  {
    category: 'Short-form Video',
    items: [
      {
        title: 'Personal Social Media Content',
        description: 'Experimental and trending football content produced for personal branding and audience engagement.',
        type: 'Personal Projects',
        image: 'pc-video-shorts-thumbnail.png',
        subItems: [
          { title: 'Personal Content 01', platform: 'instagram', url: 'https://www.instagram.com/p/DR0v3_JkwO-/', embedId: 'DR0v3_JkwO-' },
          { title: 'Personal Content 02', platform: 'instagram', url: 'https://www.instagram.com/p/DRyJ40ckz14/', embedId: 'DRyJ40ckz14' },
          { title: 'Personal Content 03', platform: 'instagram', url: 'https://www.instagram.com/p/DRvnko0kwKL/', embedId: 'DRvnko0kwKL' },
          { title: 'Personal Content 04', platform: 'instagram', url: 'https://www.instagram.com/p/DRYkPc1k4ie/', embedId: 'DRYkPc1k4ie' },
          { title: 'Personal Content 05', platform: 'instagram', url: 'https://www.instagram.com/p/DRV01NvkxBi/', embedId: 'DRV01NvkxBi' },
          { title: 'Personal Content 06', platform: 'instagram', url: 'https://www.instagram.com/p/DRTqn4UE_MX/', embedId: 'DRTqn4UE_MX' },
          { title: 'Personal Content 07', platform: 'instagram', url: 'https://www.instagram.com/p/DRQn1tcE7Wj/', embedId: 'DRQn1tcE7Wj' },
          { title: 'Personal Content 08', platform: 'instagram', url: 'https://www.instagram.com/p/DRN6mytE37K/', embedId: 'DRN6mytE37K' },
          { title: 'Personal Content 09', platform: 'instagram', url: 'https://www.instagram.com/p/DRDrEZck63L/', embedId: 'DRDrEZck63L' },
          { title: 'Personal Content 10', platform: 'instagram', url: 'https://www.instagram.com/p/DRBSe8Ck6nF/', embedId: 'DRBSe8Ck6nF' },
        ]
      },
      {
        title: 'Social Media Content Sport77',
        description: 'Short-form sports highlights and engaging reels produced for Sport77 official channels.',
        type: 'Media Content',
        image: 'sport77-video-shorts-thumbnail.png',
        subItems: [
          { title: 'Sport77 Reel 01', platform: 'instagram', url: 'https://www.instagram.com/reel/DTo82Sqkq8J/', embedId: 'DTo82Sqkq8J' },
          { title: 'Sport77 Reel 02', platform: 'instagram', url: 'https://www.instagram.com/reel/DTo6l7MkhsX/', embedId: 'DTo6l7MkhsX' },
          { title: 'Sport77 Reel 03', platform: 'instagram', url: 'https://www.instagram.com/reel/DTXXsd-EocQ/', embedId: 'DTXXsd-EocQ' },
          { title: 'Sport77 Reel 04', platform: 'instagram', url: 'https://www.instagram.com/reel/DTKRXFNEuSp/', embedId: 'DTKRXFNEuSp' },
          { title: 'Sport77 Reel 05', platform: 'instagram', url: 'https://www.instagram.com/reel/DS1i-53Ek_l/', embedId: 'DS1i-53Ek_l' },
          { title: 'Sport77 Reel 06', platform: 'instagram', url: 'https://www.instagram.com/reel/DQyMutoko_F/', embedId: 'DQyMutoko_F' },
          { title: 'Sport77 Reel 07', platform: 'instagram', url: 'https://www.instagram.com/reel/DPQvfm9ieCY/', embedId: 'DPQvfm9ieCY' },
          { title: 'Sport77 Reel 08', platform: 'instagram', url: 'https://www.instagram.com/reel/DNsBVl50h_I/', embedId: 'DNsBVl50h_I' },
          { title: 'Sport77 Reel 09', platform: 'instagram', url: 'https://www.instagram.com/reel/DMuo9k3v_Ax/', embedId: 'DMuo9k3v_Ax' },
          { title: 'Sport77 Reel 10', platform: 'instagram', url: 'https://www.instagram.com/reel/DLJ2N9ZOSih/', embedId: 'DLJ2N9ZOSih' },
          { title: 'Sport77 Reel 11', platform: 'instagram', url: 'https://www.instagram.com/reel/DK3xcklOvjT/', embedId: 'DK3xcklOvjT' },
          { title: 'Sport77 Reel 12', platform: 'instagram', url: 'https://www.instagram.com/reel/DKEl9VAvt_j/', embedId: 'DKEl9VAvt_j' },
          { title: 'Sport77 Reel 13', platform: 'instagram', url: 'https://www.instagram.com/reel/DJv3-kLvbLq/', embedId: 'DJv3-kLvbLq' },
          { title: 'Sport77 Reel 14', platform: 'instagram', url: 'https://www.instagram.com/reel/DJqq1CQvtf2/', embedId: 'DJqq1CQvtf2' },
          { title: 'Sport77 Reel 15', platform: 'instagram', url: 'https://www.instagram.com/reel/DJbhmSJPZdn/', embedId: 'DJbhmSJPZdn' },
          { title: 'Sport77 Reel 16', platform: 'instagram', url: 'https://www.instagram.com/reel/DJOqLmgvYXg/', embedId: 'DJOqLmgvYXg' },
          { title: 'Sport77 Reel 17', platform: 'instagram', url: 'https://www.instagram.com/reel/DJOQMpnvkzG/', embedId: 'DJOQMpnvkzG' },
          { title: 'Sport77 Reel 18', platform: 'instagram', url: 'https://www.instagram.com/reel/DI5nJvhviyv/', embedId: 'DI5nJvhviyv' },
          { title: 'Sport77 Reel 19', platform: 'instagram', url: 'https://www.instagram.com/reel/DI1WJYgIqXt/', embedId: 'DI1WJYgIqXt' },
          { title: 'Sport77 Reel 20', platform: 'instagram', url: 'https://www.instagram.com/reel/DImTaApo6b8/', embedId: 'DImTaApo6b8' },
        ]
      },
      {
        title: 'Semen Padang FC Content',
        description: 'Professional training session coverage and official club highlights for Semen Padang FC.',
        type: 'Club Media',
        image: 'spfc-video-shorts-thumbnail.png',
        subItems: [
          { title: 'SPFC Content 01', platform: 'instagram', url: 'https://www.instagram.com/reel/DHBRFeJP4fF/', embedId: 'DHBRFeJP4fF' },
          { title: 'SPFC Content 02', platform: 'instagram', url: 'https://www.instagram.com/reel/DG8bpC0PBpS/', embedId: 'DG8bpC0PBpS' },
          { title: 'SPFC Content 03', platform: 'instagram', url: 'https://www.instagram.com/reel/DGzg2vlvoOW/', embedId: 'DGzg2vlvoOW' },
          { title: 'SPFC Content 04', platform: 'instagram', url: 'https://www.instagram.com/reel/DGvkAEuvclf/', embedId: 'DGvkAEuvclf' },
          { title: 'SPFC Content 05', platform: 'instagram', url: 'https://www.instagram.com/reel/DGm0KmsPTee/', embedId: 'DGm0KmsPTee' },
          { title: 'SPFC Content 06', platform: 'instagram', url: 'https://www.instagram.com/reel/DGjwf43PE5D/', embedId: 'DGjwf43PE5D' },
          { title: 'SPFC Content 07', platform: 'instagram', url: 'https://www.instagram.com/reel/DGkN3mQPsjN/', embedId: 'DGkN3mQPsjN' },
          { title: 'SPFC Content 08', platform: 'instagram', url: 'https://www.instagram.com/reel/DGlMEwQPHB1/', embedId: 'DGlMEwQPHB1' },
          { title: 'SPFC Content 09', platform: 'instagram', url: 'https://www.instagram.com/reel/DGgEAthPEin/', embedId: 'DGgEAthPEin' },
          { title: 'SPFC Content 10', platform: 'instagram', url: 'https://www.instagram.com/reel/DGiqLdYSlZk/', embedId: 'DGiqLdYSlZk' },
          { title: 'SPFC Content 11', platform: 'instagram', url: 'https://www.instagram.com/reel/DGIwYGcvK8V/', embedId: 'DGIwYGcvK8V' },
          { title: 'SPFC Content 12', platform: 'instagram', url: 'https://www.instagram.com/reel/DFh-tCmPc6Q/', embedId: 'DFh-tCmPc6Q' },
          { title: 'SPFC Content 13', platform: 'instagram', url: 'https://www.instagram.com/reel/DFfYANjPZBp/', embedId: 'DFfYANjPZBp' },
          { title: 'SPFC Content 14', platform: 'instagram', url: 'https://www.instagram.com/reel/DEPz_3WvGMT/', embedId: 'DEPz_3WvGMT' },
          { title: 'SPFC Content 15', platform: 'instagram', url: 'https://www.instagram.com/reel/DEq63nQPRQY/', embedId: 'DEq63nQPRQY' },
          { title: 'SPFC Content 16', platform: 'instagram', url: 'https://www.instagram.com/reel/DC-pVuBPZQE/', embedId: 'DC-pVuBPZQE' },
          { title: 'SPFC Content 17', platform: 'instagram', url: 'https://www.instagram.com/reel/DCiRDRSPS5N/', embedId: 'DCiRDRSPS5N' },
          { title: 'SPFC Content 18', platform: 'instagram', url: 'https://www.instagram.com/reel/DCWB1Hcvduq/', embedId: 'DCWB1Hcvduq' },
          { title: 'SPFC Content 19', platform: 'instagram', url: 'https://www.instagram.com/reel/DCS2DIpvZMu/', embedId: 'DCS2DIpvZMu' },
          { title: 'SPFC Content 20', platform: 'instagram', url: 'https://www.instagram.com/reel/DCWopTXPSrt/', embedId: 'DCWopTXPSrt' },
          { title: 'SPFC Content 21', platform: 'instagram', url: 'https://www.instagram.com/reel/DB8mVDAviEq/', embedId: 'DB8mVDAviEq' },
          { title: 'SPFC Content 22', platform: 'instagram', url: 'https://www.instagram.com/reel/DBT2LRAvdwY/', embedId: 'DBT2LRAvdwY' },
          { title: 'SPFC Content 23', platform: 'instagram', url: 'https://www.instagram.com/reel/DHBZV65T8Yz/', embedId: 'DHBZV65T8Yz' },
        ]
      }
    ]
  },
  {
    category: 'Graphic Design',
    items: [
      {
        title: 'Semen Padang FC Flyers',
        description: 'Official promotional flyers, matchday announcements, and club collateral for Semen Padang FC.',
        type: 'Club Design',
        image: 'spfc-flyer-01.jpg',
        subItems: [
          { title: 'Flyer 01', platform: 'image', url: 'spfc-flyer-01.jpg' },
          { title: 'Flyer 02', platform: 'image', url: 'spfc-flyer-02.jpg' },
          { title: 'Flyer 03', platform: 'image', url: 'spfc-flyer-03.jpg' },
          { title: 'Flyer 04', platform: 'image', url: 'spfc-flyer-04.jpg' },
          { title: 'Flyer 05', platform: 'image', url: 'spfc-flyer-05.jpg' },
          { title: 'Flyer 06', platform: 'image', url: 'spfc-flyer-06.jpg' },
          { title: 'Flyer 07', platform: 'image', url: 'spfc-flyer-07.jpg' },
          { title: 'Flyer 08', platform: 'image', url: 'spfc-flyer-08.jpg' },
          { title: 'Flyer 09', platform: 'image', url: 'spfc-flyer-09.jpg' },
          { title: 'Flyer 10', platform: 'image', url: 'spfc-flyer-10.jpg' },
          { title: 'Flyer 11', platform: 'image', url: 'spfc-flyer-11.jpg' },
          { title: 'Flyer 12', platform: 'image', url: 'spfc-flyer-12.jpg' },
          { title: 'Flyer 13', platform: 'image', url: 'spfc-flyer-13.jpg' },
          { title: 'Flyer 14', platform: 'image', url: 'spfc-flyer-14.jpg' },
          { title: 'Flyer 15', platform: 'image', url: 'spfc-flyer-15.jpg' },
          { title: 'Flyer 16', platform: 'image', url: 'spfc-flyer-16.jpg' },
          { title: 'Flyer 17', platform: 'image', url: 'spfc-flyer-17.jpg' },
          { title: 'Flyer 18', platform: 'image', url: 'spfc-flyer-18.jpg' },
          { title: 'Flyer 19', platform: 'image', url: 'spfc-flyer-19.jpg' },
        ]
      },
      {
        title: 'Football Player Flyers',
        description: 'Bespoke player presentation flyers and profile graphics for professional scouts and agents.',
        type: 'Talent Showcase',
        image: 'fp-01.jpg',
        subItems: [
          { title: 'Player Flyer 01', platform: 'image', url: 'fp-01.jpg' },
          { title: 'Player Flyer 02', platform: 'image', url: 'fp-02.jpg' },
          { title: 'Player Flyer 03', platform: 'image', url: 'fp-03.jpg' },
          { title: 'Player Flyer 04', platform: 'image', url: 'fp-04.jpg' },
          { title: 'Player Flyer 05', platform: 'image', url: 'fp-05.jpg' },
          { title: 'Player Flyer 06', platform: 'image', url: 'fp-06.jpg' },
          { title: 'Player Flyer 07', platform: 'image', url: 'fp-07.jpg' },
          { title: 'Player Flyer 08', platform: 'image', url: 'fp-08.jpg' },
          { title: 'Player Flyer 09', platform: 'image', url: 'fp-09.jpg' },
          { title: 'Player Flyer 10', platform: 'image', url: 'fp-10.jpg' },
          { title: 'Player Flyer 11', platform: 'image', url: 'fp-11.jpg' },
          { title: 'Player Flyer 12', platform: 'image', url: 'fp-12.jpg' },
          { title: 'Player Flyer 13', platform: 'image', url: 'fp-13.jpg' },
          { title: 'Player Flyer 14', platform: 'image', url: 'fp-14.jpg' },
        ]
      },
      {
        title: 'Personal Content Thumbnail & Posters',
        description: 'Dynamic thumbnails and high-impact posters for visual storytelling and personal branding.',
        type: 'Creative Branding',
        image: 'pc-01.jpg',
        subItems: [
          { title: 'Art Asset 01', platform: 'image', url: 'pc-01.jpg' },
          { title: 'Art Asset 02', platform: 'image', url: 'pc-02.jpg' },
          { title: 'Art Asset 03', platform: 'image', url: 'pc-03.jpg' },
          { title: 'Art Asset 04', platform: 'image', url: 'pc-04.jpg' },
          { title: 'Art Asset 05', platform: 'image', url: 'pc-05.jpg' },
          { title: 'Art Asset 06', platform: 'image', url: 'pc-06.jpg' },
        ]
      }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Long-form Video');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary relative">
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-60" />
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled ? 'bg-black/90 backdrop-blur-xl border-white/10' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center gap-16 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter mono italic group cursor-pointer"
          >
            IAP<span className="text-brand-accent group-hover:animate-pulse">.</span>
          </motion.div>

          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-brand-secondary hover:text-brand-accent transition-all mono"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden absolute right-6 text-brand-secondary hover:text-brand-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-slate-800"
            >
              <div className="flex flex-col p-6 gap-4">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-400 hover:text-white mono"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-6 md:pt-32 md:pb-24 overflow-hidden">
          <div className="glow-point top-[-10%] left-[-10%] w-[600px] h-[600px] opacity-40" />
          <div className="glow-point bottom-[20%] right-[-5%] w-[400px] h-[400px] opacity-20" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-12 h-[1px] bg-brand-accent"></span>
                  <span className="text-brand-accent text-xs font-black uppercase tracking-[0.3em] mono">
                    OPEN FOR COLLABORATION
                  </span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display font-medium tracking-tighter mb-8 leading-[0.9] uppercase italic">
                  Ilham Agus<br />
                  <span className="text-brand-accent glow-accent">Pratama.</span>
                </h1>
                <p className="text-lg md:text-xl text-brand-secondary leading-relaxed max-w-xl mb-12 font-medium">
                  Video Editor & Graphic Designer specializing in <span className="text-brand-primary">High-Energy Sports Media</span>, 
                  <span className="text-brand-primary"> Visual Design</span>, and <span className="text-brand-primary">Full-Stack Creativity</span>.
                </p>
                
                <div className="flex flex-wrap gap-5">
                  <a 
                    href="#projects" 
                    className="px-10 py-4 bg-brand-primary text-black font-black uppercase tracking-widest text-xs rounded-none hover:bg-brand-accent transition-all flex items-center gap-3 group"
                  >
                    View Selection
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact" 
                    className="px-10 py-4 bg-transparent border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-none hover:border-brand-accent transition-all"
                  >
                    Get Hired
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-80 h-[400px] md:w-[450px] md:h-[550px] lg:w-[550px] lg:h-[700px] group">
                  <div className="absolute inset-0 bg-brand-accent rounded-full blur-[150px] opacity-25 animate-pulse" />
                  <div className="absolute -inset-4 border border-white/5 rounded-none rotate-3 group-hover:rotate-6 transition-transform duration-700" />
                  <div className="absolute -inset-4 border border-brand-accent/20 rounded-none -rotate-3 group-hover:-rotate-6 transition-transform duration-700" />
                  
                  <div className="w-full h-full relative z-10 overflow-hidden">
                    <img 
                      src={getAssetUrl("profile.png")} 
                      alt="Ilham Agus Pratama"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top relative z-20 group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-25 opacity-60" />
                    
                    {/* Decorative Background Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none opacity-10">
                      <div className="text-[200px] font-display font-medium italic text-white leading-none">IAP</div>
                    </div>

                    <div className="absolute bottom-10 left-0 right-0 z-30 text-center">
                      <div className="inline-block px-8 py-3 bg-brand-accent text-black font-black uppercase tracking-[0.4em] text-[12px] skew-x-[-12deg] shadow-[10px_10px_0_0_rgba(0,0,0,1)]">
                        VIDEO EDITOR & GRAPHIC DESIGNER
                      </div>
                    </div>
                  </div>

                  {/* Tech Details Decor */}
                  <div className="absolute top-10 -right-10 z-40 hidden lg:block">
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[10px] mono text-brand-accent font-black">X: 1920</span>
                      <span className="text-[10px] mono text-brand-accent font-black">Y: 1080</span>
                      <div className="w-20 h-[1px] bg-brand-accent" />
                    </div>
                  </div>

                  {/* Dynamic Corner Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-brand-accent opacity-40 group-hover:w-40 group-hover:h-40 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-brand-accent opacity-40 group-hover:w-40 group-hover:h-40 transition-all duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 border-y border-white/5 relative bg-[#080808] overflow-hidden">
          <div className="glow-point top-1/2 right-[-10%] w-[800px] h-[800px] opacity-20" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="p-2 bg-brand-accent/10 rounded-lg">
                    <Layers className="text-brand-accent" size={20} />
                  </span>
                  <h2 className="text-4xl font-display font-medium italic uppercase tracking-tighter">The Vision</h2>
                </div>
                <div className="space-y-8 text-brand-secondary text-lg leading-relaxed">
                  <p>
                    As a <span className="text-brand-primary font-bold">Video Editor</span> and <span className="text-brand-primary font-bold">Graphic Designer</span>, 
                    I have spent my career crafting visual stories for the football community. 
                    I started my professional path at <span className="text-brand-primary font-bold"> Ninety Plus Sports Agency</span>, 
                    building a foundation in sports-centric design and video production.
                    </p>
                    <p>
                    I later joined <span className="text-brand-primary font-bold">Semen Padang FC</span>, 
                    where I was responsible for the club's visual output and digital presence. 
                    </p>
                    <p>
                    Now, as a <span className="text-brand-primary font-bold">Video Editor</span> at <span className="text-brand-primary font-bold">Sport77</span>, 
                    I continue to combine technical precision with a deep passion for sports to deliver content that resonates with fans worldwide.
                  </p>
                
                </div>

                <div className="mt-16 p-8 glass-card border-white/5 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-center gap-6 mb-6">
                    <GraduationCap className="text-brand-accent" size={32} />
                    <h3 className="text-2xl font-display font-medium italic uppercase tracking-tighter">Academic Ops</h3>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 p-1 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                        <img src={getAssetUrl("logo-pnp.png")} alt="PNP Logo" className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h4 className="font-black text-brand-primary text-lg uppercase tracking-tight">Politeknik Negeri Padang</h4>
                        <p className="text-brand-secondary font-medium mt-1">Software Engineering (Diploma 4)</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6 p-4 bg-white/5 border border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] mono text-brand-secondary">SUCCESS RATE</span>
                        <span className="text-brand-accent font-black italic">GPA 3.54</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] mono text-brand-secondary">TIMELINE</span>
                        <span className="text-brand-primary font-bold mono uppercase">2020 - 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-xs font-black mb-8 flex items-center gap-3 mono tracking-[0.3em] uppercase opacity-50">
                    <Code size={14} className="text-brand-accent" />
                    Software / Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.hard.map(skill => (
                      <span key={skill} className="px-5 py-2 glass-card border border-white/5 text-brand-primary text-[11px] font-black uppercase tracking-widest hover:border-brand-accent hover:bg-brand-accent/5 hover:text-brand-accent transition-all cursor-crosshair">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black mb-8 flex items-center gap-3 mono tracking-[0.3em] uppercase opacity-50">
                    <MessageSquare size={14} className="text-brand-accent" />
                    Biological Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.soft.map(skill => (
                      <span key={skill} className="px-5 py-2 border border-white/5 text-brand-secondary text-[11px] font-black uppercase tracking-widest hover:border-brand-accent/50 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-black mb-8 mono uppercase tracking-[0.3em] opacity-50">Core Languages</h3>
                  <div className="grid grid-cols-2 gap-5">
                    {SKILLS.languages.map(lang => (
                      <div key={lang.name} className="p-6 glass-card border-white/5">
                        <div className="text-brand-primary font-black uppercase tracking-tighter italic text-xl">{lang.name}</div>
                        <div className="text-brand-accent text-[10px] mono font-black uppercase tracking-widest mt-2">{lang.level}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 relative overflow-hidden">
          <div className="glow-point top-[20%] left-[-15%] w-[700px] h-[700px] opacity-15" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col items-center mb-24">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-1 bg-brand-accent"></span>
                <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] mono">CAREER PROGRESSION</span>
                <span className="w-12 h-1 bg-brand-accent"></span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-medium italic uppercase tracking-tighter text-center">Transmission Log<span className="text-brand-accent">.</span></h2>
            </div>
            
            <div className="space-y-32 relative">
              {/* Vertical line through center or side */}
              <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block" />
              
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="absolute left-1/2 top-10 w-4 h-4 bg-brand-accent rotate-45 border-4 border-black -translate-x-1/2 z-20 hidden lg:block glow-accent" />

                  {/* Left Column: Company Identity */}
                  <div className={`space-y-6 ${idx % 2 === 0 ? 'lg:text-right lg:order-1' : 'lg:text-left lg:order-2'}`}>
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                      <div className="w-24 h-24 mb-8 bg-white/5 border border-white/10 p-2 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
                        <img src={getAssetUrl(exp.logo)} alt={exp.company} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-brand-accent font-black mono text-xs uppercase tracking-widest mb-2">{exp.period}</span>
                      <h3 className="text-3xl font-display font-medium italic uppercase tracking-tighter text-brand-primary">{exp.role}</h3>
                      <div className={`flex items-center gap-3 text-brand-secondary font-bold uppercase tracking-wider text-xs mt-2 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <span className="text-white">{exp.company}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-brand-accent" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className={`text-brand-secondary/60 text-sm italic max-w-sm ${idx % 2 === 0 ? 'lg:ml-auto' : ''}`}>{exp.description}</p>
                  </div>

                  {/* Right Column: Key Results */}
                  <div className={`glass-card p-10 border-white/5 space-y-6 relative group hover:border-brand-accent/20 transition-all duration-500 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-3 mb-6 relative">
                      <Layers size={16} className="text-brand-accent" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] mono text-brand-secondary">Core Operations</span>
                    </div>
                    <ul className="space-y-6 relative">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex gap-4 items-start group/task">
                          <span className="mt-1 text-brand-accent font-black mono text-xs">0{i+1}</span>
                          <p className="text-brand-secondary text-sm leading-relaxed group-hover/task:text-brand-primary transition-colors">{task}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 relative overflow-hidden">
          <div className="glow-point bottom-[10%] right-[-20%] w-[900px] h-[900px] opacity-15" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="text-left">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-1 bg-brand-accent"></span>
                  <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] mono">PORTFOLIO</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-medium italic uppercase tracking-tighter">Selected Assets<span className="text-brand-accent">.</span></h2>
              </div>
              
              <div className="flex flex-wrap gap-2 p-1 bg-white/5 border border-white/5 rounded-none">
                {PROJECTS.map(cat => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveTab(cat.category)}
                    className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeTab === cat.category 
                        ? 'bg-brand-accent text-black pointer-events-none' 
                        : 'bg-transparent text-brand-secondary hover:text-brand-primary'
                    }`}
                  >
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence mode="wait">
                {PROJECTS.find(c => c.category === activeTab)?.items.map((project, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <div className="h-full bg-[#0d0d0d] border border-white/5 hover:border-brand-accent/40 transition-all duration-500 overflow-hidden flex flex-col">
                      <div className="aspect-video w-full overflow-hidden relative cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <img 
                          src={getAssetUrl(project.image)} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black scale-50 group-hover:scale-100 transition-transform duration-500">
                            <Play size={24} fill="black" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-black text-brand-accent text-[9px] font-black uppercase tracking-widest mono border border-brand-accent/20">
                            {project.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-10 flex flex-col flex-grow">
                        <div className="mb-8 flex justify-between items-start">
                          <div className="text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                            {activeTab.includes('Video') ? <Video size={32} strokeWidth={1.5} /> : <Palette size={32} strokeWidth={1.5} />}
                          </div>
                          <span className="text-[9px] mono text-brand-secondary font-black tracking-[0.2em] uppercase">NO. 0{i + 1}</span>
                        </div>
                        <h3 className="text-2xl font-display font-medium mb-4 uppercase tracking-tighter italic group-hover:text-brand-accent transition-colors">{project.title}</h3>
                        <p className="text-brand-secondary text-sm leading-relaxed flex-grow font-medium">
                          {project.description}
                        </p>
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="mt-10 py-4 border-b border-white/10 hover:border-brand-accent flex items-center justify-between group/btn transition-all"
                        >
                          <span className="text-[10px] font-black uppercase tracking-widest mono">Project Data</span>
                          <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex justify-center items-center px-6"
            >
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="w-full max-w-5xl h-[90vh] bg-black border border-white/10 overflow-hidden flex flex-col z-10 relative"
              >
                <div className="p-10 border-b border-white/5 flex justify-between items-start bg-[#0a0a0a]">
                  <div>
                    <span className="text-[10px] text-brand-accent font-black mono uppercase mb-3 block tracking-widest">{selectedProject.type}</span>
                    <h2 className="text-4xl font-display font-medium italic uppercase tracking-tighter">{selectedProject.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-3 bg-white/5 hover:bg-brand-accent hover:text-black transition-all duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-grow overflow-y-auto p-10 bg-black">
                  <div className="max-w-3xl mb-16">
                    <p className="text-brand-secondary text-xl leading-relaxed font-medium">{selectedProject.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 pb-20">
                    {selectedProject.subItems?.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1.5 h-1.5 bg-brand-accent rotate-45" />
                          <span className="text-[10px] font-black text-brand-secondary uppercase mono tracking-[0.2em]">{item.platform} SIGNAL</span>
                        </div>
                        <div className={`overflow-hidden bg-[#0a0a0a] border border-white/5 group-hover/item:border-brand-accent/30 transition-all duration-500 ${item.platform === 'instagram' ? 'aspect-[9/16] max-w-[320px] mx-auto' : 'aspect-video'}`}>
                          {item.platform === 'youtube' ? (
                            <iframe 
                              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                              src={`https://www.youtube.com/embed/${item.embedId}`}
                              title={item.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : item.platform === 'instagram' && item.embedId ? (
                            <iframe 
                              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                              src={`https://www.instagram.com/p/${item.embedId}/embed`}
                              title={item.title}
                              frameBorder="0"
                              scrolling="no"
                              allowTransparency={true}
                            />
                          ) : item.platform === 'image' ? (
                            <div 
                              className="w-full h-full cursor-zoom-in group/img relative"
                              onClick={() => setZoomedImage(item.url)}
                            >
                              <img src={item.url} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <Search className="text-white" size={32} />
                                <span className="absolute bottom-4 text-[10px] text-white font-black uppercase tracking-widest">Click to enlarge</span>
                              </div>
                            </div>
                          ) : item.platform === 'image' ? (
                            <div 
                              className="w-full h-full cursor-zoom-in group/img relative"
                              onClick={() => setZoomedImage(item.url)}
                            >
                              <img src={getAssetUrl(item.url)} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <Search className="text-white" size={32} />
                                <span className="absolute bottom-4 text-[10px] text-white font-black uppercase tracking-widest">Click to enlarge</span>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center bg-[#0d0d0d] relative group/sub">
                              <Play className="text-brand-accent/20 group-hover/item:text-brand-accent mb-6 transition-all duration-500" size={48} strokeWidth={1} />
                              <p className="text-brand-secondary text-[11px] font-black uppercase tracking-widest mb-6 opacity-60">optimized for direct app transmission</p>
                              <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-brand-accent text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all"
                              >
                                Connect to {item.platform}
                              </a>
                            </div>
                          )}
                        </div>
                        <h4 className="text-brand-primary font-black uppercase tracking-tight italic mt-6 text-lg">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Zoom Lightbox */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex justify-center items-center p-6 sm:p-12 md:p-20"
            >
              <div 
                className="absolute inset-0 bg-black/98 backdrop-blur-xl cursor-zoom-out"
                onClick={() => setZoomedImage(null)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative z-10 max-w-full max-h-full flex items-center justify-center"
              >
                <img 
                  src={getAssetUrl(zoomedImage)} 
                  alt="Zoomed View" 
                  className="max-w-full max-h-[85vh] object-contain border border-white/10 shadow-2xl"
                />
                <button 
                  onClick={() => setZoomedImage(null)}
                  className="absolute top-[-50px] right-0 p-3 bg-white/5 hover:bg-brand-accent hover:text-black transition-all duration-300 rounded-none group"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section id="contact" className="py-40 px-6 border-t border-white/5 bg-[#080808] relative overflow-hidden">
          <div className="glow-point bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-30" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 justify-center">
                <span className="w-12 h-[1px] bg-brand-accent"></span>
                <span className="text-brand-accent text-xs font-black uppercase tracking-[0.4em] mono">GET IN TOUCH</span>
                <span className="w-12 h-[1px] bg-brand-accent"></span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-medium italic uppercase tracking-tighter mb-10 leading-tight">Ready to<br />Kick Off?</h2>
              <p className="text-lg text-brand-secondary mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
                Whether you need a full match broadcast edit or a viral social campaign, let's build something that dominates the feed.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {[
                  { icon: Mail, label: 'Transmission', value: 'ilhamagus78@gmail.com', href: 'mailto:ilhamagus78@gmail.com' },
                  { icon: MessageCircle, label: 'WhatsApp', value: '+62 812 6708 8347', href: 'https://wa.me/6281267088347' },
                  { icon: Instagram, label: 'Instagram', value: '@pratinho11', href: 'https://www.instagram.com/pratinho11/' },
                  { icon: Linkedin, label: 'Network', value: 'Ilham Agus Pratama', href: 'https://www.linkedin.com/in/ilham-agus-pratama/' },
                  { icon: Phone, label: 'Phone Call', value: '+62 812 6708 8347', href: 'tel:+6281267088347' }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-8 glass-card border-white/5 hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all group relative overflow-hidden flex flex-col justify-between"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-brand-secondary group-hover:text-brand-accent group-hover:bg-brand-accent/10 mb-6 mx-auto transition-all duration-500">
                      <item.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] text-brand-secondary/60 mono uppercase font-black tracking-widest mb-2">{item.label}</div>
                      <div className="text-[11px] font-black uppercase tracking-tight break-all text-brand-primary line-clamp-1">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 bg-[#030303] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-3xl font-display font-medium italic tracking-tighter mb-8 uppercase">IAP<span className="text-brand-accent">.</span></div>
          <div className="flex justify-center gap-10 mb-10">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary hover:text-brand-accent transition-colors mono">
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-brand-secondary/40 text-[10px] font-black uppercase tracking-[0.2em] mono">
            © {new Date().getFullYear()} Ilham Agus Pratama // Engineered for Excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
