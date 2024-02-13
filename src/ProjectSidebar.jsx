import Button from "./Button";
export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold md:test-xl text-store-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-fall text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-800 hover:text-stone-200">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
