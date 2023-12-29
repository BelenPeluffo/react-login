import React from "react";

export const handleFieldChange = <type>(
  property: string,
  newValue: string,
  referenceObject: type,
  setter: (state: React.SetStateAction<type>) => void
) => {
  setter({ ...referenceObject, [property]: newValue });
};
