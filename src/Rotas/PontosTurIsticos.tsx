import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    ArrayInput,
    SimpleFormIterator,
    Show,
    SimpleShowLayout,
    ArrayField,
    UrlField,
    required
} from 'react-admin';

// Componente para listar os pontos turísticos
export const PontosTuristicosList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />
        </Datagrid>
    </List>
);

// Componente para editar os pontos turísticos
export const PontosTuristicosEdit = () => (
    <Edit>
        <SimpleForm>
            {/* Campos para o título e subtítulo */}
            <TextInput source="title" label="Título" validate={required()} />
            <TextInput source="subtitle" label="Subtítulo" validate={required()} />
            
            {/* Campo para adicionar/remover locais turísticos */}
            <ArrayInput source="locations" label="Locais Turísticos">
                <SimpleFormIterator>
                    <TextInput source="name" label="Nome do Local" validate={required()} />
                    <TextInput source="url" label="URL do Local" validate={required()} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

// Componente para exibir os detalhes dos pontos turísticos
export const PontosTuristicosShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />

            {/* Exibição dos locais turísticos */}
            <ArrayField source="locations" label="Locais Turísticos">
                <Datagrid>
                    <TextField source="name" label="Nome do Local" />
                    <UrlField source="url" label="URL do Local" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);
