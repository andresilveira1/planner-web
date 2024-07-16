import { Calendar, Tag, X } from 'lucide-react'
import { Button } from '../../../components/Button'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>

            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400 hover:text-zinc-500" />
            </button>
          </div>

          <p className="text-sm text-zinc-400 text-left">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex items-center gap-2.5 bg-zinc-950 px-4 h-14 rounded-lg border border-zinc-800">
            <Tag className="size-5 text-zinc-400" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent flex-1 outline-none placeholder-zinc-400 text-lg"
            />
          </div>

          <div className="flex item items-center gap-2.5 bg-zinc-950 px-4 h-14 rounded-lg border border-zinc-800 flex-1">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent flex-1 outline-none placeholder-zinc-400 text-lg"
            />
          </div>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}
