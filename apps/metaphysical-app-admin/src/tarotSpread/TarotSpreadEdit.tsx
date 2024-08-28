import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TarotSpreadEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Positions" multiline source="positions" />
        <TextInput label="SpreadName" source="spreadName" />
      </SimpleForm>
    </Edit>
  );
};
