import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Button } from '../../../components/Button'
import { api } from '../../../lib/axios'

interface ParticipantProps {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<ParticipantProps[]>([])

  useEffect(() => {
    async function fetchData() {
      await api
        .get(`/trips/${tripId}/participants`)
        .then((response) => setParticipants(response.data.participants))
    }

    fetchData()
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        {participants &&
          participants.map((participant, index) => {
            return (
              <div
                key={participant.id}
                className="flex items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">
                    {participant.name ?? `Convidado ${index}`}
                  </span>

                  <span className="block text-zinc-400 text-sm truncate">
                    {participant.email}
                  </span>
                </div>

                {participant.is_confirmed ? (
                  <CircleCheck className="size-5 text-lime-300" />
                ) : (
                  <CircleDashed className="size-5 text-zinc-400" />
                )}
              </div>
            )
          })}
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
