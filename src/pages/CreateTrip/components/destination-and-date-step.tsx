import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react'
import { useState } from 'react'
import { DateRange, DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >()

  function openDatePicker() {
    setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false)
  }

  return (
    <div className="flex items-center h-16 px-4 bg-zinc-900 rounded-xl shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        {/* <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        /> */}
        <Input disabled={isGuestsInputOpen} placeholder="Para onde você vai?" />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 text-left"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40">Quanto?</span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>

                <button onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400 hover:text-zinc-500" />
                </button>
              </div>

              <DayPicker
                mode="range"
                selected={eventStartAndEndDates}
                onSelect={setEventStartAndEndDates}
                className="[--rdp-accent-color]:#bef264 [--rdp-selected-color]:#bef264 --rdp-cell-size-[40px]"
              />
            </div>
          </div>
        </div>
      )}

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

// 14:47
