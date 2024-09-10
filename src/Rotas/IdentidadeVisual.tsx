// src/components/identidadeVisual/IdentidadeVisual.tsx
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    Show,
    SimpleShowLayout,
    SelectInput,
    required,
    ArrayInput,
    SimpleFormIterator

} from 'react-admin';

// Componente para exibir e gerenciar a identidade visual
export const IdentidadeVisualList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <ImageField source="logoUrl" label="Logo" />
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />
            <TextField source="theme.buttonColor" label="Cor dos Botões" />
            <TextField source="theme.titleFontColor" label="Cor das Fontes Títulos" />
            <TextField source="theme.subtitleFontColor" label="Cor das Fontes Subtítulos" />
        </Datagrid>
    </List>
);

// Componente para editar a identidade visual
export const IdentidadeVisualEdit = () => (
    <Edit>
         <SimpleForm>
            <ImageInput source="logoUrl" label="Logo" accept="image/*" />
            <TextInput source="title" label="Título" />
            <TextInput source="subtitle" label="Subtítulo" />
            <SelectInput
                source="theme.buttonColor"
                choices={[
                    { id: '#ff0000', name: 'Vermelho' },
                    { id: '#00ff00', name: 'Verde' },
                    { id: '#0000ff', name: 'Azul' }
                ]}
                label="Cor dos Botões"
                validate={required()}
            />
            <SelectInput
                source="theme.titleFontColor"
                choices={[
                    { id: '#ff0000', name: 'Vermelho' },
                    { id: '#00ff00', name: 'Verde' },
                    { id: '#0000ff', name: 'Azul' }
                ]}
                label="Cor das Fontes Títulos"
                validate={required()}
            />
            <SelectInput
                source="theme.subtitleFontColor"
                choices={[
                    { id: '#ff0000', name: 'Vermelho' },
                    { id: '#00ff00', name: 'Verde' },
                    { id: '#0000ff', name: 'Azul' }
                ]}
                label="Cor das Fontes Subtítulos"
                validate={required()}
            />
            
            {/* ArrayInput para os componentes dinâmicos */}
            <ArrayInput source="components" label="Componentes">
                <SimpleFormIterator>
                    <TextInput source="type" label="Tipo" validate={required()} />
                    <TextInput source="title" label="Título" validate={required()} />
                    <TextInput source="subtitle" label="Subtítulo" />
                    <ImageInput source="backgroundImageUrl" label="Imagem de Fundo" accept="image/*" />
                    <ImageInput source="imageUrl" label="Imagem" accept="image/*" />
                    <TextInput source="videoUrl" label="URL do Vídeo" />
                    <TextInput source="button.label" label="Texto do Botão" />
                    <TextInput source="button.url" label="URL do Botão" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

// Componente para exibir detalhes da identidade visual
export const IdentidadeVisualShow = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField source="logoUrl" label="Logo" />
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />
            <TextField source="theme.buttonColor" label="Cor dos Botões" />
            <TextField source="theme.titleFontColor" label="Cor das Fontes Títulos" />
            <TextField source="theme.subtitleFontColor" label="Cor das Fontes Subtítulos" />
        </SimpleShowLayout>
    </Show>
);
