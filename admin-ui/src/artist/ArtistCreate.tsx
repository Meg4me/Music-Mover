import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";
import { SongTitle } from "../song/SongTitle";

export const ArtistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="albums"
          reference="Album"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlbumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput
          source="songs"
          reference="Song"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SongTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
