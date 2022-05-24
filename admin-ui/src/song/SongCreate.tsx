import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { AlbumTitle } from "../album/AlbumTitle";
import { ArtistTitle } from "../artist/ArtistTitle";
import { PlaylistTitle } from "../playlist/PlaylistTitle";
import { UserTitle } from "../user/UserTitle";
import { OriginTitle } from "../origin/OriginTitle";

export const SongCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="album"
          reference="Album"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlbumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="artist"
          reference="Artist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ArtistTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="inPlaylist"
          reference="Playlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlaylistTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="likedBy"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="origin.id" reference="Origin" label="Origin">
          <SelectInput optionText={OriginTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
