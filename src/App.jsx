import { useState } from "react";
import NavBar from "./components/NavBar";
import RepoList from "./components/RepoList";
import { api } from "./services/api";

const App = () => {
  const [currentRepo, setCurrentRepo] = useState("MuriloCSilva/Nike-Landing-Page");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if (!currentRepo) return;

    const { data } = await api.get(`repos/${currentRepo}`, {
      headers: {
        Authorization: import.meta.env.GITHUB_TOKEN,
      },
    });

    if (data.id) {
      const checkIfRepoAlreadyExist = repos.find((repo) => repo.id === data.id);

      if (!checkIfRepoAlreadyExist) {
        setCurrentRepo("");
        setRepos((prev) => [...prev, data]);
        return;
      }
    }
  };

  return (
    <>
      <main className="bg-[#212529] w-[100vw] h-[100vh]">
        <NavBar />

        <section className="flex flex-col items-center justify-center">
          <div className="h-[60px] flex gap-7 items-center mt-32 w-[600px] max-md:w-[400px] max-sm:w-[300px] max-sm:gap-2">
            <input
              type="text"
              className="bg-transparent text-white placeholder:text-slate-400 h-[100%] w-[80%] border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:border-white max-sm:w-[60%]"
              placeholder="Digite o repositório..."
              value={currentRepo}
              onChange={(e) => setCurrentRepo(e.target.value)}
            ></input>
            <button
              className="bg-transparent text-white border-2 border-white hover:text-black hover:bg-white transition duration-300 rounded-md w-[20%] h-[100%] px-5 max-sm:w-[40%]"
              onClick={handleSearchRepo}
            >
              Buscar
            </button>
          </div>
          <RepoList repo={repos} />
        </section>
      </main>
    </>
  );
};

export default App;
