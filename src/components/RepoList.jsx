const RepoList = ({ repo }) => {
  return (
    <>
      <div className="mt-14 w-[600px] max-md:w-[400px] max-sm:w-[300px]">
        {repo.map((item) => (
          <div className="flex flex-col mt-4 border border-1 border-slate-400 rounded-lg p-6 text-white w-[100%]" key={item.name}>
            <h2 className="a text-2xl font-semibold">{item.name}</h2>
            <a className="text-blue-500 hover:underline" href={item.html_url} target="_blank">{item.full_name}</a>
          </div>
          
        ))}
      </div>
      
    </>
  )
}

export default RepoList