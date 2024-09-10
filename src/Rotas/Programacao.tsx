import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    ArrayInput,
    SimpleFormIterator,
    DateInput,
    FileInput,
    FileField,
    TextInput,
    DateField,
    Show,
    SimpleShowLayout,
    ArrayField,
    required
} from 'react-admin';

// Componente para listar a programação
export const ProgramacaoList = () => (
    <List>
        <Datagrid>
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />
            <DateField source="days[0].date" label="Data do Primeiro Dia" /> {/* Exemplo de exibição do primeiro dia */}
        </Datagrid>
    </List>
);

// Componente para editar a programação (já criado)
export const ProgramacaoEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" label="Título da Programação" validate={required()} />
            <TextInput source="subtitle" label="Subtítulo da Programação" validate={required()} />

            {/* Campo para adicionar/remover dias */}
            <ArrayInput source="days" label="Dias da Programação">
                <SimpleFormIterator>
                    <DateInput source="date" label="Data" validate={required()} />
                    <TextInput source="text" label="Texto do Dia" validate={required()} />
                </SimpleFormIterator>
            </ArrayInput>

            {/* Campo para adicionar PDF */}
            <h3>Baixar o PDF da Programação</h3>
            <FileInput source="pdfUrl" label="Adicionar PDF" accept="application/pdf" placeholder={<p>Arraste o PDF ou clique para selecionar</p>}>
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Edit>
);

// Componente para exibir a programação
export const ProgramacaoShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="title" label="Título" />
            <TextField source="subtitle" label="Subtítulo" />

            {/* Exibição dos dias da programação */}
            <ArrayField source="days" label="Dias da Programação">
                <Datagrid>
                    <DateField source="date" label="Data" />
                    <TextField source="text" label="Texto do Dia" />
                </Datagrid>
            </ArrayField>

            {/* Exibição do PDF */}
            <FileField source="pdfUrl" label="PDF da Programação" target="_blank" title="Baixar PDF" />
        </SimpleShowLayout>
    </Show>
);
