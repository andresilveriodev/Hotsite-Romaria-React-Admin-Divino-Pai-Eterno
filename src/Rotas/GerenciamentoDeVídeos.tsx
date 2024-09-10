import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Show,
    SimpleShowLayout,
    UrlField,
    required
} from 'react-admin';

// Componente para listar os vídeos
export const VideoList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Título" />
            <UrlField source="url" label="URL do Vídeo" />
        </Datagrid>
    </List>
);

// Componente para editar os vídeos
export const VideoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Título" validate={required()} />
            <TextInput source="url" label="URL do Vídeo" validate={required()} />
        </SimpleForm>
    </Edit>
);

// Componente para exibir os detalhes dos vídeos
export const VideoShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" label="Título" />
            <UrlField source="url" label="URL do Vídeo" />
        </SimpleShowLayout>
    </Show>
);
