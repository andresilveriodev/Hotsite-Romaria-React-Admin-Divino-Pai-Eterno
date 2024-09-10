import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    BooleanInput,
    TextInput,
    ArrayInput,
    SimpleFormIterator,
    ImageField,
    ImageInput,
    required,
    Show,
    SimpleShowLayout,
    ArrayField,
    BooleanField
} from 'react-admin';

// Componente para listar os slides
export const SlideMainList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />
            <TextField source="hidden" label="Oculto" />
        </Datagrid>
    </List>
);

// Componente para editar os slides
export const SlideMainEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Título" validate={required()} />
            <TextInput source="subtitle" label="Subtítulo" validate={required()} />
            
            {/* Campo para ocultar ou mostrar o slide */}
            <BooleanInput source="hidden" label="Ocultar Slide" />

            {/* ArrayInput para gerenciar as fotos dentro do slide */}
            <ArrayInput source="images" label="Imagens">
                <SimpleFormIterator>
                    <ImageInput source="imageUrl" label="Foto" accept="image/*" />
                    <TextInput source="description" label="Descrição da Imagem" validate={required()} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

// Componente para visualizar os slides
export const SlideMainShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />
            <BooleanField source="hidden" label="Ocultar Slide" />
            
            {/* Renderizando as imagens */}
            <ArrayField source="images" label="Imagens">
                <Datagrid>
                    <ImageField source="imageUrl" label="Foto" />
                    <TextField source="description" label="Descrição" />
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);
