import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'

import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s6.jpg'
import s6 from '../assets/s6.jpg'

import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.jpg'
import m5 from '../assets/m6.jpg'
import m6 from '../assets/m6.jpg'


export type collection = {
    tag: string;
    label: string;
    pic1: string;
    pic2: string;
    pic3: string;
}

export const collections:collection[] = [
  {
    tag: "Море",
    label: "Фото на тему 'Море'",
    pic1: s1,
    pic2: s2,
    pic3: s3,
  },
  {
    tag: "Архитектура",
    label: "Фото на тему 'Архитектура'",
    pic1: a1,
    pic2: a2,
    pic3: a3,
  },
  {
    tag: "Горы",
    label: "Фото на тему 'Горы'",
    pic1: m1,
    pic2: m2,
    pic3: m3,
  },
  {
    tag: "Море",
    label: "Фото на тему 'Море'",
    pic1: s4,
    pic2: s5,
    pic3: s6,
  },
  {
    tag: "Горы",
    label: "Фото на тему 'Горы'",
    pic1: m4,
    pic2: m5,
    pic3: m6,
  },
];
