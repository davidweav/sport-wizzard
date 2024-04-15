import BaseDropdownMenu from "@/components/Dropdowns/BaseDropdownMenu/BaseDropdownMenu";

const LeagueDropdownMenu = ( { matchups }) => {
  return (
    <BaseDropdownMenu options={matchups} />
  );
};

export default LeagueDropdownMenu;