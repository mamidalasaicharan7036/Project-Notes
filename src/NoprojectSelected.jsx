import noprojectImg from "./assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="text-center mt-24 w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noprojectImg}
        alt="An empty task"
      />
      <h2 className="test-xl font-bold text-stone-500">No Project Selected</h2>
      <p className="text-stone-400">Select a project or get start with a one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
