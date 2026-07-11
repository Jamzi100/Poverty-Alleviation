import GetHelpHero from "../Components/GetHelpHero";
import WhoCanApply from "../Components/WhoCanApply";
import AssistanceType from "../Components/AssistanceType";
import HopeForm from "../Components/HopeForm";

function GetHelp() {
  return (
    <div>
      <GetHelpHero />
      <WhoCanApply />
      <AssistanceType />
      <HopeForm />
    </div>
  );
}

export default GetHelp;