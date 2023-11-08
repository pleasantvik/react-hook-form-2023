import { useForm } from "react-hook-form";

const YoutubeForm = () => {
  const formState = useForm();

  console.log(formState);
  return (
    <div>
      <form className="mt-4 flex flex-col items-center ">
        <label htmlFor="username" className="">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="outline-none border-fuchsia-400 border-2"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="outline-none border-fuchsia-400 border-2"
        />
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          className="outline-none border-fuchsia-400 border-2"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
