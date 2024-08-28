import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TarotSpreadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Positions" multiline source="positions" />
        <TextInput label="SpreadName" source="spreadName" />
      </SimpleForm>
    </Create>
  );
};
