import { NavListModel } from "@core/models";

export const NAV_LIST: NavListModel[] = [
  { label: 'Photos', path: '/' , exactMatch: true },
  { label: 'Favorites', path: '/favorites', activePaths: ['favorites', 'photos/'] },
];