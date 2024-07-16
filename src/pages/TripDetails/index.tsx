import { useState } from 'react'
import { Plus } from 'lucide-react'

import { CreateActivityModal } from './components/create-activity-modal'
import { ImportantLinks } from './components/important-links'
import { Guests } from './components/guests'
import { Activities } from './components/activities'
import { DestinationAndDateHeader } from './components/destination-and-date-header'

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="flex items-center gap-2 text-lime-950 font-medium bg-lime-300 hover:bg-lime-400 py-2 px-5 rounded-lg"
            >
              <Plus className="size-5" /> Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}
