import { pwaInstallHandler } from 'pwa-install-handler'
import { useCallback, useSyncExternalStore } from 'react'

export const usePWAInstall: () => (() => Promise<boolean>) | null = () => {
	const subscribe = useCallback((onStoreChange: () => void) => {
		pwaInstallHandler.addListener(onStoreChange)
		return () => {
			pwaInstallHandler.removeListener(onStoreChange)
		}
	}, [])
	const getSnapshot = useCallback(
		() => (pwaInstallHandler.canInstall() ? pwaInstallHandler.install : null),
		[],
	)
	const getServerSnapshot = useCallback(() => null, [])

	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
