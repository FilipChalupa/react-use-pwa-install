# react-use-pwa-install [![npm](https://img.shields.io/npm/v/react-use-pwa-install.svg)](https://www.npmjs.com/package/react-use-pwa-install) ![npm type definitions](https://img.shields.io/npm/types/react-use-pwa-install.svg)

Custom React hook for PWA install button.

## Installation

```bash
npm install react-use-pwa-install
```

## How to use

```jsx
import { usePWAInstall } from 'react-use-pwa-install'

export const Header = () => {
	const install = usePWAInstall()

	return (
		<header>
			<h1>My app</h1>
			{install && <button onClick={install}>Install</button>}
		</header>
	)
}
```

### Screencast

![UI example](https://raw.githubusercontent.com/FilipChalupa/pwa-install-handler/HEAD/screencast.gif)

### Demo

Check [website](https://react-use-pwa-install-demo.glitch.me/) or [code](https://glitch.com/edit/#!/react-use-pwa-install-demo).

## Note

Don't forget to fulfill PWA requirements ([web.dev](https://web.dev/install-criteria/), [mdn](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)) otherwise the `usePWAInstall` will return `null`. Same goes for already installed app.
