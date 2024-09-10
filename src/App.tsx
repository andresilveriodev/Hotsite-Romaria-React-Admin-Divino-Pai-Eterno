import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import {SlideList, SlideEdit, SlideShow} from "./Rotas/GerenciamentoDeSlides";
import {IdentidadeVisualList, IdentidadeVisualEdit, IdentidadeVisualShow} from "./Rotas/IdentidadeVisual";
import {VideoList,VideoEdit, VideoShow } from "./Rotas/GerenciamentoDeVídeos";
import { SlideMainList, SlideMainEdit, SlideMainShow } from "./Rotas/Slides";
import { ProgramacaoEdit, ProgramacaoShow, ProgramacaoList } from "./Rotas/Programacao";
import { PontosTuristicosList, PontosTuristicosEdit, PontosTuristicosShow } from "./Rotas/PontosTurIsticos"; 
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource
      name="slides"
      list={SlideList}
      edit={SlideEdit}
      show={SlideShow}
    />
   <Resource
     name="identidadeVisual"
     list={IdentidadeVisualList}
     edit={IdentidadeVisualEdit}
     show={IdentidadeVisualShow}
   />
   <Resource
     name="videos"
     list={VideoList}
     edit={VideoEdit}
     show={VideoShow}
   />
    <Resource
     name="slidesMain"
     list={SlideMainList}
     edit={SlideMainEdit}
     show={SlideMainShow}
    />
    <Resource
    name="programacao"
    list={ProgramacaoList}
    edit={ProgramacaoEdit}
    show={ProgramacaoShow}  // Recurso para editar a Programação
    />
    <Resource
      name="pontosTuristicos"   // Nome da coleção no data.json
      list={PontosTuristicosList}   // Componente de listagem
      edit={PontosTuristicosEdit}   // Componente de edição
      show={PontosTuristicosShow}   // Componente de exibição
    />
  </Admin>
);
