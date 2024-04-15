import BaseDropdownMenu from "@/components/Dropdowns/BaseDropdownMenu/BaseDropdownMenu";

const leaguess = ['All', 'MLB', 'NHL', 'NBA'];

const LeagueDropdownMenu = ({ leagues }) => {
  return (
    <BaseDropdownMenu options={leaguess} />
  );
};

export default LeagueDropdownMenu;