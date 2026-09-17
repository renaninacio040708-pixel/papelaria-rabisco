import type { ReactNode } from "react"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "./ui/Button"
import { FloatingDoodle } from "./doodles/FloatingDoodle"
import { Envelope, Star } from "./doodles/Doodles"

type Assunto = "encomenda" | "duvida" | "ilustrador"

interface FormValues {
  nome: string
  email: string
  assunto: Assunto
  portfolio?: string
  mensagem: string
}

const ASSUNTOS: { value: Assunto; label: string }[] = [
  { value: "encomenda", label: "Encomenda personalizada" },
  { value: "duvida", label: "Dúvida geral" },
  { value: "ilustrador", label: "Quero ser parceiro ilustrador" },
]

export function Contato() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { assunto: "encomenda" } })

  const assunto = watch("assunto")

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
  }

  return (
    <section id="contato" className="relative overflow-hidden px-5 py-16 sm:px-8 lg:py-20">
      <FloatingDoodle icon={Star} className="left-[6%] top-[10%]" size={34} rotate={-10} color="var(--color-magenta)" />
      <FloatingDoodle icon={Envelope} className="right-[8%] bottom-[8%]" size={48} rotate={12} color="var(--color-cobalt)" />

      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-heading sm:text-heading-lg">
            Escreve pra gente
          </h2>
          <p className="mt-5 max-w-sm text-body text-ink/85">
            Encomenda personalizada, dúvida sobre a oficina ou quer propor uma
            coleção de papel de carta como ilustrador parceiro? O formulário ao
            lado chega direto pra nós — sem central de atendimento no meio.
          </p>
        </div>

        <div className="relative rounded-card border-2 border-ink bg-snow p-6 sm:p-9">
          <AnimatePresence mode="wait">
            {isSubmitSuccessful ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start gap-4 py-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-sunbeam">
                  <Envelope className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="font-display text-heading-sm">Mensagem enviada!</p>
                <p className="text-[15px] text-ink/80">
                  A gente responde por e-mail ou WhatsApp em até um dia útil.
                </p>
                <Button type="button" tone="white" size="sm" onClick={() => reset()}>
                  Enviar outra mensagem
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Seu nome" error={errors.nome?.message}>
                    <input
                      {...register("nome", { required: "Conta seu nome pra gente" })}
                      className={inputClass(!!errors.nome)}
                      placeholder="Como te chamamos?"
                    />
                  </Field>
                  <Field label="E-mail" error={errors.email?.message}>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Precisamos do seu e-mail pra responder",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Esse e-mail não parece completo" },
                      })}
                      className={inputClass(!!errors.email)}
                      placeholder="voce@email.com"
                    />
                  </Field>
                </div>

                <Field label="Assunto">
                  <select {...register("assunto")} className={inputClass(false)}>
                    {ASSUNTOS.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </Field>

                {assunto === "ilustrador" && (
                  <Field label="Link do portfólio" error={errors.portfolio?.message}>
                    <input
                      {...register("portfolio", { required: "Cola aqui o link do seu portfólio ou Instagram" })}
                      className={inputClass(!!errors.portfolio)}
                      placeholder="instagram.com/seuperfil"
                    />
                  </Field>
                )}

                <Field label="Mensagem" error={errors.mensagem?.message}>
                  <textarea
                    {...register("mensagem", {
                      required: "Escreve um pouco sobre o que você precisa",
                      minLength: { value: 12, message: "Conta um pouco mais pra gente entender" },
                    })}
                    rows={4}
                    className={inputClass(!!errors.mensagem)}
                    placeholder={
                      assunto === "ilustrador"
                        ? "Fala um pouco do seu estilo e o que gostaria de propor"
                        : "O que você está procurando?"
                    }
                  />
                </Field>

                <Button type="submit" tone="ink" size="lg" disabled={isSubmitting} className="mt-2 w-fit">
                  {isSubmitting ? "Enviando…" : "Enviar mensagem"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-[14px] font-medium">
      {label}
      {children}
      {error && <span className="text-[13px] font-normal text-magenta">{error}</span>}
    </label>
  )
}

function inputClass(hasError: boolean) {
  return `rounded-small border-2 ${hasError ? "border-magenta" : "border-ink"} bg-peach/40 px-4 py-3 font-sans text-[15px] text-ink outline-none placeholder:text-ink/50 focus:bg-snow`
}
