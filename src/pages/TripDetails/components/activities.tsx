import { CircleCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { api } from '../../../lib/axios'

interface ActivityProps {
  date: string
  activities: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const { tripId } = useParams()
  const [activities, setActivities] = useState<ActivityProps[]>([])

  useEffect(() => {
    async function fetchData() {
      await api
        .get(`/trips/${tripId}/activities`)
        .then((response) => setActivities(response.data.activities))
    }

    fetchData()
  }, [tripId])
  return (
    <div className="space-y-8">
      {activities.map((category) => {
        return (
          <div key={category.date} className="space-y-2.5">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-xl text-zinc-300">
                Dia {format(category.date, 'd')}
              </span>
              <span className="text-zinc-500 text-xs">
                {format(category.date, 'EEEE', { locale: ptBR })}
              </span>
            </div>

            {category.activities.length > 0 ? (
              <div className="space-y-2.5">
                {category.activities.map((activity) => {
                  return (
                    <div key={activity.id}>
                      <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">{activity.title}</span>
                        <span className="text-sm text-zinc-400 ml-auto">
                          {format(activity.occurs_at, 'HH:mm')}h
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
