import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { SongTitle } from "../song/SongTitle";

export const PlaylistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
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
    </Create>
  );
};
