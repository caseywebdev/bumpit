# Bumpit

Easily bump versions for your package.json, bower.json, and/or component.json
from the command line.

```bash
npm install -g bumpit
```

```
Usage: bumpit [[major|minor|patch|prerelease [identifier]]|[version]]
```

```bash
> bumpit
package.json: 0.0.0 -> 0.0.1
> bumpit 0.1.2
package.json: 0.0.1 -> 0.1.2
> bumpit
package.json: 0.1.2 -> 0.1.3
> bumpit major
package.json: 0.1.2-4 -> 1.0.0
> bumpit minor 3
package.json: 1.0.0 -> 1.3.0
> bumpit 1.4.0-alpha.0
package.json: 1.4.0 -> 1.4.0-alpha.0
> bumpit prerelease
package.json: 1.4.0-alpha.0 -> 1.4.0-alpha.1
> bumpit prerelease beta
package.json: 1.4.0-alpha -> 1.4.0-beta
```
