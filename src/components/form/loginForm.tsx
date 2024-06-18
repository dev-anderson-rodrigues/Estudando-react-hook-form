/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form"
import resolver, { FormProps, FormValues } from "./validation/validation"
import { Button, Container, ContainerInput, ContainerLogin } from "./styles"

const loginForm: React.FC<FormProps> = ({ isLogin }) => {
      const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver, context: { isLogin } })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Container>
        <ContainerLogin onSubmit={onSubmit}>
            <div>
                <h1>{isLogin ? "Login" : "Cadastre-se"}</h1>
            </div>
        {!isLogin && (

          <div className="group-form">
              <label>Nome Completo</label>
              <ContainerInput type="text" {...register("name")} placeholder="Name" />
              {errors?.name && <p>{errors.name.message}</p>}
          </div>
        )}

        <div className="group-form">
            <label>E-mail</label>
            <ContainerInput type="email" {...register("email")} placeholder="E-mail" />
            {errors?.email && <p>{errors.email.message}</p>}
        </div>

        <div className="group-form">
            <label>Senha</label>
            <ContainerInput type="password" {...register("password")} placeholder="Password" />
            {errors?.password && <p>{errors.password.message}</p>}
        </div>

        {!isLogin && (

        <div className="group-form">
            <label>Confirme a Senha</label>
            <ContainerInput type="password" {...register("passwordConfirm")} placeholder="Confirm Password" />
            {errors?.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        </div>
        )}

        <Button type="submit">{isLogin ? "Entrar" : "Enviar"}</Button>
        </ContainerLogin>
    </Container>
  )
}

export default loginForm