import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../../components/Button'

interface DestinationAndDateStepProps {
  openGuestsInput: () => void
  closeGuestsInput: () => void
  isGuestsInputOpen: boolean
}

export function DestinationAndDateStep({
  closeGuestsInput,
  openGuestsInput,
  isGuestsInputOpen,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex items-center h-16 px-4 bg-zinc-900 rounded-xl shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}