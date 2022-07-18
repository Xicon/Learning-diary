import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '../store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelect:TypedUseSelectorHook<RootStore> = useSelector