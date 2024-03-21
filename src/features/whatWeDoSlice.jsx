import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
    id:nanoid() , 
    image:"../public/what-we-do-files/conservation2.JPG",
    h3:"Conservation of natural landscapes",
    span:"Landscape Conservation" ,
    p1:" We assess restoration needs of indigenous forests, and key wetlands and document existing biodiversity and  eminent threats.",
    p2:"  We lead science-based restoration programs to address biodiversity loss and the climate break-down."
   } ,

   {
    id:nanoid() , 
    image:"../public/what-we-do-files/research1.jpeg",
    h3:"Research on the response of wildlife to environmental changes",
    span:"Wildlife Research" ,
    p1:" We conduct biodiversity inventories, particularly threatened plants, birds and primates, and we monitor regularly the status of key habitats using the mentioned taxa as indicators.",
    p2:" We assess the efficiency of restoration programs after management interventions, such as the removal of invasive species."
   } ,

   {
    id:nanoid() , 
    image:"../public/what-we-do-files/education1.jpeg",
    h3:" Advocacy for threatened ecosystems",
    span:"Ecosystems Advocacy" ,
    p1:"  We contribute to policy dialogues and national strategic planning activities to advocate for species and sites in need of conservation prioritization.",
    p2:" We raise awareness via social media platforms to halt  environmental degradation caused by unsustainable  development activities."
   } ,

   {
    id:nanoid() , 
    image:"../public/what-we-do-files/youth_training.jpeg",
    h3:"Conservation education through story-telling and Arts",
    span:"Arts Education" ,
    p1:"  We conduct public educational activities on the conservation of birds and their habitats through  story-telling and Art.",
    p2:"  We document and disseminate traditional ecological knowledge and practices to guide contemporary conservation learning."
   } ,
   {
    id:nanoid() , 
    image:"../public/what-we-do-files/advocacy2.jpeg",
    h3:"Community livelihoods improvement",
    span:"Livelohoods Community" ,
    p1:" We collaborate with farmers’ cooperatives in implementing agro-ecological practices for sustainable food systems and environmental health.",
    p2:"  We develop ecotourism products and offer guiding training for young professionals as a tool to build their skills and generate jobs."
   },
]


export const whatWeDoSlice = createSlice({
    name:"whatwedo" , 
    initialState,
    reducers:{}
})

export default whatWeDoSlice.reducer