import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SpellBookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Ingredients" multiline source="ingredients" />
        <TextInput label="Instructions" multiline source="instructions" />
        <TextInput label="SpellName" source="spellName" />
      </SimpleForm>
    </Edit>
  );
};
