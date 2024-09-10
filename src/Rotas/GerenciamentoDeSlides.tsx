// src/components/slides/GerenciamentoDeSlides.tsx
import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Show, SimpleShowLayout } from 'react-admin';

// Listagem dos slides
export const SlideList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Título" />
            <TextField source="deviceType" label="Dispositivo" />
            <TextField source="imageUrl" label="URL da Imagem" />
        </Datagrid>
    </List>
);

// Edição dos slides
export const SlideEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Título" />
            <TextInput source="deviceType" label="Dispositivo (mobile ou desktop)" />
            <TextInput source="imageUrl" label="URL da Imagem" />
        </SimpleForm>
    </Edit>
);

// Exibição dos detalhes dos slides
export const SlideShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" label="Título" />
            <TextField source="deviceType" label="Dispositivo" />
            <TextField source="imageUrl" label="URL da Imagem" />
        </SimpleShowLayout>
    </Show>
);
