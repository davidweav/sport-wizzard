import BaseDropdownMenu from "@/components/Dropdowns/BaseDropdownMenu/BaseDropdownMenu";

const PositionDropdownMenu = ( { positions } ) => {
  return (
    <BaseDropdownMenu options={positions} />
  );
};

export default PositionDropdownMenu;