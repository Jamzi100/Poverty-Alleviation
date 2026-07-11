import React from "react";
import GetHelp from "../Components/GetHelpHero";
import WhoCanApply from "../Components/WhoCanApply";
import AssistanceType from "../Components/AssistanceType";
import HopeForm from "../Components/HopeForm";

function GetInvolved() {
  return (
    <div>
      <GetHelp />
      <WhoCanApply />
      <AssistanceType />
      <HopeForm />
    </div>
  );
}

export default GetInvolved;