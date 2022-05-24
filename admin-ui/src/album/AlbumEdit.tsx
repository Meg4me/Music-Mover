import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ArtistTitle } from "../artist/ArtistTitle";
import { SongTitle } from "../song/SongTitle";

export const AlbumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="artist.id" reference="Artist" label="Artists">
          <SelectInput optionText={ArtistTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="songs"
          reference="Song"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SongTitle} />
        </ReferenceArrayInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
