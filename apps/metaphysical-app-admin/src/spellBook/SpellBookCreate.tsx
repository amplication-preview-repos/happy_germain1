import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SpellBookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Ingredients" multiline source="ingredients" />
        <TextInput label="Instructions" multiline source="instructions" />
        <TextInput label="SpellName" source="spellName" />
      </SimpleForm>
    </Create>
  );
};
