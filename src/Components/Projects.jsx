import { p1 } from "../utils";

export default function Projects() {
  return (
    <div>
      <div className="pl-12 w-94 h-16 justify-between">
        <h1 className="text-white text-[55px]">Works</h1>
      </div>
      <br /><br />
      <div className="inset-0 flex justify-center items-center">
        <div className="w-[1220px] h-[485px] rounded-md bg-white overlay-1 flex px-9">
          <div className="w-[582px] h-[360px] flex-col items-start md:justify-between py-11">
            <p className="text-[40px] font-medium">
              SafeSquid Labs, Customer Portal
            </p>
            <p className="">
              Redesigned, Reimagined, and now Responsive. I took customer portal
              beyond the desktop, crafting a responsive interface that doesn't
              compromise on functionality.{" "}
            </p>
          </div>
          <div>
            <img src={p1} alt="project1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
