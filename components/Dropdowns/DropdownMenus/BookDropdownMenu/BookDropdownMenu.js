import BaseDropdownMenu from "@/components/Dropdowns/BaseDropdownMenu/BaseDropdownMenu";

const LeagueDropdownMenu = ({ books }) => {
  return (
    <BaseDropdownMenu options={books} />
  );
};

export default LeagueDropdownMenu;