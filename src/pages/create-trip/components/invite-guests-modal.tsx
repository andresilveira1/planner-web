import { X, AtSign, Plus } from 'lucide-react'
import { FormEvent } from 'react'

import { Button } from '../../../components/button'
import { Input } from '../../../components/input'

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>

            <button onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400 hover:text-zinc-500" />
            </button>
          </div>

          <p className="text-sm text-zinc-400 text-left">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                type="button"
                onClick={() => removeEmailFromInvites(email)}
              >
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex items-center gap-2 bg-zinc-950 px-4 py-2.5 rounded-lg border border-zinc-800"
        >
          <AtSign className="size-5 text-zinc-400" />

          <Input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
          />

          <Button type="submit" variant="primary">
            Convidar <Plus />
          </Button>
        </form>
      </div>
    </div>
  )
}
