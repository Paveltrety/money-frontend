import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    firstName: yup.string().required(),
    email: yup.string().email(),
    age: yup.number().positive().integer(),
}).required();

function EditProfile() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="firstName" />
            <p>{errors.firstName?.message}</p>
            <input {...register("email")} placeholder="Email"/>
            <p>{errors.email?.message}</p>
            <input {...register("age")} placeholder='age' />
            <p>{errors.age?.message}</p>

            <input type="submit" />
        </form>
    )
}

export default EditProfile