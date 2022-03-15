export enum SpacecraftStatus {
  Active,
  Destroyed
}

export const spacecrafts: any[] = [
  { id: 1, name: 'Eagle 5', type: 1, status: SpacecraftStatus.Active, univers: 'Spaceballs' },
  { id: 2, name: 'Nostromo', type: 1, status: SpacecraftStatus.Destroyed, univers: 'Alien' },
  { id: 3, name: 'Hyperion', type: 2, status: SpacecraftStatus.Active, univers: 'Starcraft' },
  { id: 4, name: 'USS Enterprise', type: 3, status: SpacecraftStatus.Destroyed, univers: 'Start Trek' },
  { id: 5, name: 'Galactica', type: 3, status: SpacecraftStatus.Destroyed, univers: 'Battlestar Galactica' },
  { id: 6, name: 'Serenity', type: 1, status: SpacecraftStatus.Active, univers: 'Firefly' },
  { id: 7, name: 'Eagle', type: 4, status: SpacecraftStatus.Active, univers: 'Space: 1999' },
  { id: 8, name: 'Aries Ib', type: 4, status: SpacecraftStatus.Active, univers: '2001: A space odyssey' },
  { id: 9, name: 'O\'Neill', type: 8, status: SpacecraftStatus.Destroyed, univers: 'Stargate' },
  { id: 10, name: 'Heart of Gold', type: 7, status: SpacecraftStatus.Active, univers: 'H2G2' },
  { id: 11, name: 'Thunderbird 5', type: 6, status: SpacecraftStatus.Active, univers: 'Thunderbirds' },
  { id: 12, name: 'Oberon', type: 6, status: SpacecraftStatus.Active, univers: 'Planet of the Apes' },
  { id: 13, name: 'Moonraker 5', type: 5, status: SpacecraftStatus.Active, univers: 'Moonraker' },
  { id: 14, name: 'Daedalus', type: 5, status: SpacecraftStatus.Active, univers: 'Space cowboys' }
]

export const spacecraftTypes: any[] = [
  { id: 1, label: 'Transport' },
  { id: 2, label: 'Interplanetary' },
  { id: 3, label: 'Interstellar' },
  { id: 4, label: 'Lunar' },
  { id: 5, label: 'Orbital' },
  { id: 6, label: 'Space station' },
  { id: 7, label: 'Prsonnal' },
  { id: 8, label: 'Intergalactic' }
]
