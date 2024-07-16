import { Mail, User, X } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>

            <button onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400 hover:text-zinc-500" />
            </button>
          </div>

          <p className="text-sm text-zinc-400 text-left">
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex items-center gap-2.5 bg-zinc-950 px-4 h-14 rounded-lg border border-zinc-800">
            <User className="size-5 text-zinc-400" />
            <Input name="name" placeholder="Seu nome completo" />
          </div>

          <div className="flex item items-center gap-2.5 bg-zinc-950 px-4 h-14 rounded-lg border border-zinc-800">
            <Mail className="size-5 text-zinc-400" />
            <Input type="email" name="email" placeholder="Seu e-mail pessoal" />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}
