import { pwaInstallHandler } from 'pwa-install-handler'
import React from 'react'

export function usePWAInstall(): () => Promise<boolean> | null {
	const [canInstall, setCanInstall] = React.useState(false)

	React.useEffect(() => {
		pwaInstallHandler.addListener(setCanInstall)
		return () => {
			pwaInstallHandler.removeListener(setCanInstall)
		}
	}, [])

	return canInstall ? pwaInstallHandler.install : null
}
