import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    image: '../public/projectsFiles/mashyoza1.jpeg',
    heading: 'Conserving remnant ecosystem',
    description:
      'We monitor the biodiversity of remnant ecosystems, such as the rainforest of Busaga, the gallery forest of Mashyoza and the riparian forest of protected lakes.',
  },
  {
    id: nanoid(),
    image: '../public/projectsFiles/restoration1.jpeg',
    heading: 'Restoring landscapes',
    description:
      'We contribute to national goals of forest landscape restoration, and we lay emphasis on growing indigenous trees due to their crucial roles of supporting biodiversity and carbon sequestration',
  },
  {
    id: nanoid(),
    image: '../public/projectsFiles/lantana1.JPG',
    heading: 'Managing invasive species',
    description:
      'We raise public awareness on the invasion of Lantana camara in native and exotic woodlands and advocate for its removal from the flower market',
  },
];

export const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
