import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="bg-slate-500 flax p-6 w-screen h-screen">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-0"
          >
            <ChevronLeftIcon className="text-slate-100" />
          </button>
          <Title children="Detalhes da Tarefa" />
        </div>
        <div className="bg-slate-200 p-4 rounded-md shadow">
          <h1 className="text-slate-600 text-xl font-bold">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
