import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormValues {
  username: string;
  channel: string;
  email: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phone: string[];
  foodList: {
    food: string;
  }[];
  age: number;
  dob: Date;
}

let renderCount = 0;
const YoutubeForm = () => {
  const {
    register,
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
      channel: '',
      email: '',
      social: {
        twitter: '',
        facebook: '',
      },
      phone: ['', ''],
      foodList: [{ food: '' }],
      age: 0,
      dob: new Date(),
    },

    // Loading previously saved data
    // defaultValues: async () => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users/1',
    //   );
    //   const data = await response.json();

    //   return {
    //     username: 'Batman',
    //     email: data.email,
    //     channel: '',
    //   };
    // },
  });

  renderCount++;
  const handleFormSubmit = (data: FormValues) => {
    console.log('Form submitted: ', data);
  };

  const { fields, append, remove } = useFieldArray({
    name: 'foodList',
    control,
  });
  return (
    <div>
      <h1 className="bg-fuchsia-600 text-white text-2xl py-4 text-center">
        React Hook Form ({renderCount / 2})
      </h1>
      <form
        className="mt-4 flex flex-col  "
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col w-[80%] mx-auto">
          <label htmlFor="username" className=" text-fuchsia-500 text-2xl">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4  px-2"
            {...register('username', {
              required: 'Username is required',
            })}
          />
          {errors && (
            <span className="text-red-500">{errors.username?.message}</span>
          )}
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label htmlFor="email" className=" text-fuchsia-500 text-2xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4  px-2"
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9]/,
                message: 'Invalid email format',
              },
              required: {
                value: true,
                message: 'Email is required',
              },
              validate: value =>
                value !== 'test@test.com' || 'Enter a diffrent email',
            })}
          />
          {errors && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="channel">
            Channel
          </label>
          <input
            type="text"
            id="channel"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('channel', {
              required: {
                value: true,
                message: 'Channel is required',
              },
            })}
          />
          {errors && (
            <span className="text-red-500">{errors.channel?.message}</span>
          )}
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="twitter">
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('social.twitter')}
          />
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="facebook">
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('social.facebook')}
          />
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="pry-phone">
            Primary Phone
          </label>
          <input
            type="text"
            id="pry-phone"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('phone.0')}
          />
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="sec-phone">
            Sec Phone
          </label>
          <input
            type="text"
            id="sec-phone"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('phone.1')}
          />
        </div>
        <div className="flex flex-col w-[80%] mx-auto mt-4">
          <label htmlFor="username" className=" text-fuchsia-500 text-2xl">
            List of Favorite Food
          </label>
          <div>
            {fields.map((field, idx) => (
              <div key={field.id}>
                <input
                  type="text"
                  id=""
                  {...register(`foodList.${idx}.food` as const)}
                  className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
                />
                {idx > 0 && (
                  <button
                    onClick={() => remove(idx)}
                    className="bg-fuchsia-500 text-white py-3 px-6 mt-2 rounded-lg"
                    type="button"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => append({ food: '' })}
              className="bg-fuchsia-500 text-white py-3 px-6 mt-2 rounded-lg"
              type="button"
            >
              Add Food
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('age', {
              valueAsNumber: true,
              required: {
                value: true,
                message: 'Age is required',
              },
            })}
          />
          {errors && (
            <span className="text-red-500">{errors.age?.message}</span>
          )}
        </div>
        <div className="flex flex-col w-[80%] mx-auto">
          <label className=" text-fuchsia-500 text-2xl" htmlFor="date">
            Date of Birth
          </label>
          <input
            type="date"
            id="age"
            className="outline-none border-fuchsia-400 border-2 w-[80%] rounded-lg py-4 px-2"
            {...register('age', {
              valueAsDate: true,
              required: {
                value: true,
                message: 'Age is required',
              },
            })}
          />
          {errors && (
            <span className="text-red-500">{errors.dob?.message}</span>
          )}
        </div>
        <div className="flex flex-col w-[80%] mx-auto mt-4">
          <button className="bg-fuchsia-500 text-white py-3 px-6 w-[80%] rounded-lg">
            Submit
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YoutubeForm;
