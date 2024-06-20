import { Button, TextInput } from "@mantine/core";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="relative flex flex-col place-items-center text-center gap-3">
        <h1 className="text-5xl font-bold uppercase">Sign Up</h1>
        <p className="text-3xl text-[#C9C7C5]">
          And help Peter fighting against Cognivirues
        </p>
      </div>

      <form
        action=""
        className="mt-12 self-stretch min-w-[486px] mx-auto space-y-4"
      >
        <TextInput
          variant="filled"
          size="md"
          radius="xl"
          label="Email"
          withAsterisk
          classNames={{
            input: "bg-[#372315] !text-white",
          }}
          placeholder="eg. sickplayer@gmail.com"
        />

        <TextInput
          variant="filled"
          size="md"
          radius="xl"
          label="Username"
          withAsterisk
          classNames={{
            input: "bg-[#372315] !text-white",
          }}
          placeholder="eg. sickplayer@gmail.com"
        />

        <TextInput
          variant="filled"
          size="md"
          radius="xl"
          label="Password"
          withAsterisk
          classNames={{
            input: "bg-[#372315] !text-white",
          }}
          placeholder="******"
        />

        <TextInput
          variant="filled"
          size="md"
          radius="xl"
          label="Password Confirmation"
          withAsterisk
          classNames={{
            input: "bg-[#372315] !text-white",
          }}
          placeholder="******"
        />

        <Button
          classNames={{
            root: "bg-[#926247]",
          }}
          fullWidth
          size="md"
          radius="xl"
        >
          Sign Up
        </Button>
      </form>
    </main>
  );
}
