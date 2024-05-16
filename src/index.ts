import { pwaInstallHandler } from 'pwa-install-handler'
import { useEffect, useState } from 'react'

export function usePWAInstall(): () => Promise<boolean> | null {
	const [canInstall, setCanInstall] = useState(false)

	useEffect(() => {
		pwaInstallHandler.addListener(setCanInstall)
		return () => {
			pwaInstallHandler.removeListener(setCanInstall)
		}
	}, [])

	return canInstall ? pwaInstallHandler.install : null
}
