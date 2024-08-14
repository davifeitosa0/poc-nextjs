import LoginForms from "@/components/loginForms";

export default async function Login() {

  return (
    <main className="bg-[url('/Dashboard-Login.png')] w-full h-screen bg-no-repeat bg-cover flex justify-center items-center">
      <div className="flex flex-col h-[50%] w-[20%] justify-center">
        <h1 className="text-3xl text-white pb-5">Entrar na sua conta</h1>
        <LoginForms/>
      </div>
    </main>
  );
}
